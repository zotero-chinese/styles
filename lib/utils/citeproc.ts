import CSL from "citeproc";
import fs from "fs-extra";
import { getCitationItems, getIds } from "../data";

/**
 * @description 产生 citeproc-js 的 sys 参数
 * @param items
 * @returns {*}
 * @see {@link https://citeproc-js.readthedocs.io/en/latest/running.html#required-sys-functions}
 */
export function makeCiteprocSys(items: Item[]) {
  let bib: { [id: string]: Item } = {};
  for (var item of items) {
    bib[item.id] = item;
  }

  function retrieveLocale(lang: string) {
    const file_path = "./lib/locales/locales-" + lang + ".xml";
    if (fs.existsSync(file_path)) {
      return fs.readFileSync(file_path, "utf8");
    } else {
      console.error(`Cannot find "${file_path}".`);
      return undefined;
    }
  }

  function retrieveItem(id: string) {
    var item = bib[id];
    if (item) {
      return bib[id];
    } else {
      console.error(`Cannot find item "${id}".`);
      return undefined;
    }
  }

  return {
    retrieveLocale,
    retrieveItem,
  };
}

export function getCiteproc(items: Item[], style: string) {
  const sys = makeCiteprocSys(items);

  // @ts-ignore
  // CSL.Output.Formats.html["@display/left-margin"] = function (state, str) {
  //   return str + "\t";
  // };
  // // @ts-ignore
  // CSL.Output.Formats.html["@display/right-inline"] = function (state, str) {
  //   return str;
  // };
  // @ts-ignore
  CSL.Output.Formats.html["@display/block"] = function (state, str) {
    return '\n    <div class="csl-block">' + str + "</div>\n  ";
  };

  const citeproc = new CSL.Engine(sys, style);
  citeproc.opt.development_extensions.wrap_url_and_doi = true;
  // citeproc.opt.development_extensions.csl_reverse_lookup_support = true;
  return citeproc;
}

/**
 * @description 产生引注
 * @author zeping lee
 * @param citeproc
 * @param cite_items_list
 * @returns {String}
 */
export function make_citations(
  citeproc: CSL.Engine,
  cite_items_list: CitationItems
) {
  // console.log(cite_items_list);
  var citation_res: any[] = [];

  var citation_count = 0;
  var citation_pre: any[] = [];
  var citation_post: string[] = [];

  for (let cite_items of cite_items_list) {
    citation_count += 1;
    const citaiton_id = "CITATION-" + citation_count;
    var citation = {
      citationID: citaiton_id,
      citationItems: cite_items,
      properties: {
        noteIndex: citation_count,
      },
    };
    if (cite_items[0].mode === "composite") {
      // @ts-ignore
      citation.properties.mode = "composite";
      // 有点奇怪，这里会导致只有第一个样式能正常，后面的都不能
      // delete cite_items[0].mode;
    }
    // console.log(citation);
    var citation_items = citeproc.processCitationCluster(
      citation,
      citation_pre,
      citation_post
    )[1];
    for (var citation_item of citation_items) {
      let index = citation_item[0];
      var citaiton_text = citation_item[1];
      citation_res[index] = citaiton_text;
    }

    citation_pre.push([citaiton_id, citation_count]);
  }

  var res = "";
  if (citation_res.length > 0) {
    if (citation_res.length > 1) {
      // res += "<blockquote>\n";
      for (let [index, text] of citation_res.entries()) {
        if (citeproc.opt.xclass == "note") {
          res += "<sup>" + (index + 1) + "</sup> " + text + "<br>\n";
        } else {
          res += "" + text + "<br>\n";
        }
      }
      // res += "</blockquote>";
    } else {
      // res = "> " + citation_res[0];
      res = citation_res[0];
    }
  }

  return res;
}

/**
 * @description 生成参考文献列表
 * @param {*} citeproc
 * @returns {String}
 */
export function make_bibliography(citeproc: CSL.Engine) {
  try {
    const [params, bib_items] = citeproc.makeBibliography();
    // console.log(params, bib_items);
    const maxoffset = params["maxoffset"];
    const second_field_align = params["second-field-align"]
      ? params["second-field-align"]
      : false;
    const hangingindent = params["hangingindent"]
      ? params["hangingindent"]
      : false;
    const format_style = `maxoffset-${maxoffset} second-field-align-${second_field_align} hangingindent-${hangingindent}`;
    const bibstart = `<div class="csl-bib-body ${format_style}">\n`;
    var res = bibstart;
    for (const bib_item of bib_items) {
      res += bib_item;
    }
    res += params.bibend;
  } catch (TypeError) {
    console.log(TypeError);
    return "Error!";
  }
  return res;
}

export function getItemResults(
  citeproc: CSL.Engine,
  citationItems: CitationItems
) {
  citeproc.updateItems([]);
  let citation_format = citeproc.opt.xclass;

  if (citation_format === "note") {
    // let cites = getCitationItems(citationItems, citation_format);
    // note 类测试 citations
    return make_citations(citeproc, citationItems);
  } else {
    // 其余类型测试 bibliography
    const ids = getIds(citationItems.flat());
    citeproc.updateItems(ids);
    let res = make_bibliography(citeproc);
    return res;
  }
}

export function getStyleClass(citeproc: CSL.Engine) {
  return citeproc.opt.xclass;
}

export function getTitle(cslXml: CslXml): string {
  return cslXml.getNodesByName(cslXml.dataObj, "title")[0]
    .children[0] as string;
}

export function getID(cslXml: CslXml) {
  return cslXml.getNodesByName(cslXml.dataObj, "id")[0].children[0] as string;
}

export function getRefSelf(cslXml: CslXml) {
  return cslXml
    .getNodesByName(cslXml.dataObj, "link")
    .filter((node) => node.attrs["rel"] === "self")[0]?.attrs["href"];
}

export function getRefDocument(cslXml: CslXml) {
  return cslXml
    .getNodesByName(cslXml.dataObj, "link")
    .filter((node) => node.attrs["rel"] === "documentation")[0]?.attrs["href"];
}

export function getRefTemplate(cslXml: CslXml) {
  return cslXml
    .getNodesByName(cslXml.dataObj, "link")
    .filter((node) => node.attrs["rel"] === "template")[0]?.attrs["href"];
}

export function getField(cslXml: CslXml) {
  return (
    cslXml
      .getNodesByName(cslXml.dataObj, "category")
      .filter((node) => "field" in node.attrs)[0]?.attrs["field"] ??
    "generic-base"
  );
}

export function getCitationFormat(cslXml: CslXml) {
  return (
    cslXml
      .getNodesByName(cslXml.dataObj, "category")
      .filter((node) => "citation-format" in node.attrs)[0]?.attrs[
      "citation-format"
    ] ?? "numeric"
  );
}

export function getSummary(cslXml: CslXml): string {
  return cslXml.getNodesByName(cslXml.dataObj, "summary")[0]
    ?.children[0] as string;
}

export function getUpdated(cslXml: CslXml): string {
  return cslXml.getNodesByName(cslXml.dataObj, "updated")[0]
    ?.children[0] as string;
}

export function getRight(cslXml: CslXml) {
  return cslXml.getNodesByName(cslXml.dataObj, "rights")[0]
    ?.children[0] as string;
}

export function getAuthors(cslXml: CslXml) {
  return cslXml.getNodesByName(cslXml.dataObj, "author").map((v) => {
    return {
      name: (
        v.children.filter(
          (n) => typeof n !== "string" && n.name === "name"
        )[0] as Chind
      )?.children[0] as string,
    };
  });
}

export function getContributors(cslXml: CslXml) {
  return cslXml.getNodesByName(cslXml.dataObj, "contributor").map((v) => {
    return {
      name: (
        v.children.filter(
          (n) => typeof n !== "string" && n.name === "name"
        )[0] as Chind
      )?.children[0] as string,
    };
  });
}
