import fs from "fs-extra";
import { basename, dirname, join, sep } from "node:path";
import { camelCase } from "scule";
import { isEmpty, omit } from "radash";

import {
  getCiteproc,
  getTitle,
  getID,
  getRefSelf,
  getRefTemplate,
  getRefDocument,
  getCitationFormat,
  getField,
  make_citations,
  make_bibliography,
  getStyleClass,
  getItemResults,
} from "./utils/citeproc.js";

import {
  allDefaultItems,
  getCustomItems,
  allDefaultCitationItems,
  getCustomCites,
} from "./data/index.js";

import { customFields } from "./customFields.js";
import { getTags } from "./utils/getTags.js";

/**
 * 获取指定 CSL 文件的元数据和参考文献预览
 */
export function generate(cslFilePath: string): StyleFullResult {
  // 读取样式文件
  const style = fs.readFileSync(cslFilePath, { encoding: "utf-8" });

  // CSL-JSON Items
  const customItems = getCustomItems(cslFilePath);
  const items = [...allDefaultItems, ...customItems];

  // 获取 citeproc 实例
  const citeproc = getCiteproc(items, style);
  const cslXml = citeproc.cslXml;

  const path: Path = {
    dir: dirname(cslFilePath).replace("src/", ""),
    file: basename(cslFilePath),
  };

  // 获取 info 节点信息
  const info: StyleInfo = {
    style_class: getStyleClass(citeproc),
    title: getTitle(cslXml),
    id: getID(cslXml),
    link_self: getRefSelf(cslXml),
    link_template: getRefTemplate(cslXml),
    link_documentation: getRefDocument(cslXml),
    author: [],
    contributor: [],
    citation_format: getCitationFormat(cslXml),
    field: getField(cslXml),
    summary: "",
    updated: "",
  };

  // CSL-JSON CitationItems
  const citations: { [key: string]: CitationItem[] } = {
    ...allDefaultCitationItems,
    custom: getCustomCites(cslFilePath, customItems),
  };

  // 获取引注和参考文献表信息
  const test: StyleTestResult = {
    citations: make_citations(
      citeproc,
      isEmpty(citations["custom"])
        ? citations[camelCase(`sample_${info.citation_format}`)]
        : citations["custom"]
    ),
    bibliography: make_bibliography(citeproc),

    default_test_citations: make_citations(
      citeproc,
      citations[camelCase(`test_${info.citation_format}`)]
    ),

    gb_result: getItemResults(citeproc, citations["gb"]),
    aps_result: getItemResults(citeproc, citations["aps"]),
    apa_result: getItemResults(citeproc, citations["apa"]),
    mlc_result: getItemResults(citeproc, citations["mlc"]),
    ssc_result: getItemResults(citeproc, citations["ssc"]),
  };

  // 获取自定义字段信息
  // const custom = customFields[path.file] || {};
  const tags = getTags(style);

  return { ...path, ...info, ...test, ...tags };
}

export function generateAndWrite(csl_file: string) {
  const result = generate(csl_file);
  const dir = dirname(csl_file);

  // 写元数据 JSON
  fs.outputJSONSync(
    join(dir, "metadata.json"),
    omit(result, [
      "default_test_citations",
      "gb_result",
      "apa_result",
      "aps_result",
      "mlc_result",
      "ssc_result",
    ]),
    { spaces: 2 }
  );

  function toDetails(summary: string, body: string, collapsible = true) {
    return [
      `### ${summary}\n`,
      // `<details><summary>${summary}</summary>\n`,
      collapsible ? `<!-- PLACEHOLDER FOR WEBSITE - BEFORE RESULT -->\n` : "",
      `${body}\n`,
      // `</details>\n`
      collapsible ? `<!-- PLACEHOLDER FOR WEBSITE - AFTER RESULT -->\n` : "",
    ]
      .filter((v) => !!v)
      .join("\n");
  }

  // 写测试结果 MD
  let md = [
    `<!-- 此文件由脚本自动生成，请勿手动修改！ -->`,
    `<!-- markdownlint-disable -->`,
    `<!-- prettier-ignore -->\n`,
    `<!-- PLACEHOLDER FOR WEBSITE - BEFORE FILE -->\n`,
    `## 样式预览\n`,
    toDetails("引注", result.citations, false),
    toDetails("参考文献表", result.bibliography, false),
    `## 默认测试\n`,
    toDetails("引注", result.default_test_citations!, false),
    toDetails("GB/T 7714—2015 示例文献", result.gb_result!),
    toDetails("《心理学报》 示例文献", result.aps_result!),
    toDetails("《中国社会科学》 示例文献", result.ssc_result!),
    toDetails("《法学引注手册》 示例文献", result.mlc_result!),
    toDetails("APA 示例文献", result.apa_result!),
  ].join("\n");

  fs.outputFileSync(join(dir, "index.md"), md);

  return result;
}
