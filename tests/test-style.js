const fs = require('fs');
const path = require('path');
const collator = Intl.Collator('en', {'numeric': true});

const CSL = require('./citeproc_commonjs.js');


var locales = {};


CSL.Output.Formats.html['@display/left-margin'] = function (state, str) {
    return str + '\t';
};
CSL.Output.Formats.html['@display/right-inline'] = function (state, str) {
    return str;
};


function get_paths(style_name) {
    let style_path = style_name + '.csl';

    let test_dir = 'tests';

    let gb_t_7714_data_path = path.join(test_dir, 'gbt7714-data.json');
    let default_test_cites_numeric_path = path.join(test_dir, 'default-test-cites-numeric.json');
    let default_test_cites_author_date_path = path.join(test_dir, 'default-test-cites-author-date.json');
    let default_test_cites_author_date_data_path = path.join(test_dir, 'default-test-cites-author-date-data.json');
    let default_test_cites_note_path = path.join(test_dir, 'default-test-cites-note.json');
    let default_sample_cites_numeric_path = path.join(test_dir, 'default-sample-cites-numeric.json');
    let default_sample_cites_author_date_path = path.join(test_dir, 'default-sample-cites-author-date.json');
    let default_sample_cites_note_path = path.join(test_dir, 'default-sample-cites-note.json');

    let acta_psychologica_sinica_data_path = path.join(test_dir, 'acta-psychologica-sinica-data.json');
    let social_sciences_in_china_data_path = path.join(test_dir, 'social-sciences-in-china-data.json');
    let manual_of_legal_citation_data_path = path.join(test_dir, 'manual-of-legal-citation-data.json');
    let apa_data_path = path.join(test_dir, 'apa-data.json');

    let test_style_dir = path.join(test_dir, 'styles', style_name);

    let test_data_path = path.join(test_style_dir, 'test-data.json');
    if (!fs.existsSync(test_data_path)) {
        test_data_path = null;
    }
    let test_cites_path = path.join(test_style_dir, 'test-cites.json');
    if (!fs.existsSync(test_cites_path)) {
        test_cites_path = null;
    }
    let sample_cites_path = path.join(test_style_dir, 'sample-cites.json');
    if (!fs.existsSync(sample_cites_path)) {
        sample_cites_path = null;
    }

    let test_output_path = path.join(test_style_dir, 'test.md');
    let sample_output_path = path.join(test_style_dir, 'README.md');

    let locales_dir = path.join(test_dir, 'locales');

    let paths = {
        'file': style_name + '.csl',
        'style_path': style_path,

        'test_data_path': test_data_path,
        'test_cites_path': test_cites_path,
        'sample_cites_path': sample_cites_path,

        'gb_t_7714_data_path': gb_t_7714_data_path,
        'default_test_cites_numeric_path': default_test_cites_numeric_path,
        'default_test_cites_author_date_path': default_test_cites_author_date_path,
        'default_test_cites_author_date_data_path': default_test_cites_author_date_data_path,
        'default_test_cites_note_path': default_test_cites_note_path,
        'default_sample_cites_numeric_path': default_sample_cites_numeric_path,
        'default_sample_cites_author_date_path': default_sample_cites_author_date_path,
        'default_sample_cites_note_path': default_sample_cites_note_path,

        'acta_psychologica_sinica_data_path': acta_psychologica_sinica_data_path,
        'social_sciences_in_china_data_path': social_sciences_in_china_data_path,
        'manual_of_legal_citation_data_path': manual_of_legal_citation_data_path,
        'apa_data_path': apa_data_path,

        'test_output_path': test_output_path,
        'sample_output_path': sample_output_path,

        'locales_dir': locales_dir,
    };
    return paths;
}


function make_citeproc_sys(items, locales_dir) {
    let bib = {};
    for (var item of items) {
        bib[item.id] = item;
    }
    var citeproc_sys = {
        retrieveLocale: function (lang) {
            if (lang in locales) {
                return locales[lang];
            } else {
                let file_path = path.join(locales_dir, `locales-${lang}.xml`);
                if (fs.existsSync(file_path)) {
                    locales[lang] = fs.readFileSync(file_path, "utf8");
                    return locales[lang];
                } else {
                    // console.warn(`Cannot find "${file_path}".`);
                    return {};
                }
            }
        },
        retrieveItem: function (id) {
            var item = bib[id];
            if (item) {
                return item;
            } else {
                console.error(`Cannot find item "${id}".`);
                return {};
            }
        },
    };
    return citeproc_sys;
}


function make_citations(citeproc, cite_items_list) {
    var citation_res = [];

    var citation_count = 0;
    var citation_pre = [];
    var citation_post = [];

    for (var cite_items of cite_items_list) {
        citation_count += 1;
        let citation_id = "CITATION-" + citation_count;
        var citation = {
            citationID: citation_id,
            citationItems: cite_items,
            properties: {
                noteIndex: citation_count,
            },
        };
        if (cite_items[0].mode === 'composite') {
            citation.properties.mode = 'composite';
            delete cite_items[0].mode;
        }
        var citation_items = citeproc.processCitationCluster(
            citation,
            citation_pre,
            citation_post
        )[1];
        for (var citation_item of citation_items) {
            var index = citation_item[0];
            var citation_text = citation_item[1];
            citation_res[index] = citation_text;
        }

        citation_pre.push([citation_id, citation_count]);
    }

    var res = "";
    if (citation_res.length > 0) {
        if (citation_res.length > 1) {
            // res += "<blockquote>\n";
            for (var [index, text] of citation_res.entries()) {
                if (res) {
                    res += '\n';
                }
                if (citeproc.opt.xclass === "note") {
                    res += "<sup>" + (index + 1) + "</sup> " + text + "<br>";
                } else {
                    res += "" + text + "<br>";
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


function make_bibliography(citeproc) {
    let res;
    // try {
        const [params, bib_items] = citeproc.makeBibliography();
        let second_field_align = params['second-field-align'];
        second_field_align = second_field_align ? ` second-field-align-${second_field_align}` : '';
        let hanging_indent = params['hangingindent'] ? ' hanging-indent' : '';
        const format_style = `${hanging_indent}${second_field_align}`;
        const bibstart = `<div class="csl-bib-body${format_style}">\n`;

        res = bibstart;
        for (const bib_item of bib_items) {
            res += bib_item;
        }
        res += params.bibend;
    // } catch (TypeError) {
    //     return false;
    // }
    return res;
}


function collect_cites(csl_data, citation_format) {
    let ids = [];
    for (let entry of csl_data) {
        ids.push(entry.id);
    }
    ids.sort(collator.compare);
    let citations = [];
    if (citation_format === 'numeric') {
        let citation = [];
        for (let cite_id of ids) {
            citation.push({ 'id': cite_id });
        }
        citations.push(citation);
    } else {
        for (let cite_id of ids) {
            citations.push([{ 'id': cite_id }]);
        }
    }
    return citations;
}


function collect_ids(csl_data) {
    let ids = [];
    for (let entry of csl_data) {
        ids.push(entry.id);
    }
    ids.sort(collator.compare);
    return ids;
}


function get_item_results(citeproc, data) {
    citeproc.updateItems([]);
    let citation_format = citeproc.opt.xclass;

    if (citation_format === 'note') {
        let cites = collect_cites(data, citation_format);
        // note 类测试 citations
        return make_citations(citeproc, cites);
    } else {
        // 其余类型测试 bibliography
        let ids = collect_ids(data);
        citeproc.updateItems(ids);
        let res = make_bibliography(citeproc);
        return res;
    }
}


function get_item_data(paths) {

    let data_dict = {};
    let csl_data = [];

    for (let data_name of [
        'gb_t_7714',
        'acta_psychologica_sinica',
        'social_sciences_in_china',
        'manual_of_legal_citation',
        'apa',
        'default_test_cites_author_date',
    ]) {
        let path = paths[`${data_name}_data_path`];
        let data = JSON.parse(fs.readFileSync(path, 'utf8'));
        data_dict[data_name] = data;
        csl_data = csl_data.concat(data);
    }

    let style_data = [];
    if (paths.test_data_path) {
        style_data = JSON.parse(fs.readFileSync(paths.test_data_path, 'utf8'));
        csl_data = csl_data.concat(style_data);
    }

    let citeproc_sys = make_citeproc_sys(csl_data, paths.locales_dir);
    let csl_style = fs.readFileSync(paths.style_path, 'utf8');

    let citeproc = new CSL.Engine(citeproc_sys, csl_style);
    citeproc.opt.development_extensions.wrap_url_and_doi = true;

    let citation_format = 'numeric';
    for (let node of citeproc.cslXml.getNodesByName(citeproc.cslXml.dataObj, 'category')) {
        if ('citation-format' in node.attrs) {
            citation_format = node.attrs['citation-format'];
            break;
        }
    }
    citation_format = citation_format.replace('-', '_');

    let item = {
        'file': paths.file,
        'test_citations': 'Undefined',
        'test_bibliography': 'Undefined',
        'default_test_citations': 'Undefined',
        'gb_t_7714_results': 'Undefined',
        'acta_psychologica_sinica_results': 'Undefined',
        'social_sciences_in_china_results': 'Undefined',
        'manual_of_legal_citation_results': 'Undefined',
        'apa_results': 'Undefined',
    };

    item.file = paths.file;

    // Test citations
    let test_citations;
    if (paths.test_cites_path) {
        test_citations = JSON.parse(fs.readFileSync(paths.test_cites_path, 'utf8'));
        item.test_citations = make_citations(citeproc, test_citations);

        let ids = collect_ids(style_data);
        citeproc.updateItems(ids);
        item.test_bibliography = make_bibliography(citeproc);
    } else if (paths.test_data_path) {
        let test_citations = collect_cites(style_data, citation_format);
        item.test_citations = make_citations(citeproc, test_citations);
        item.test_bibliography = make_bibliography(citeproc);
    }

    let default_citations = JSON.parse(fs.readFileSync(paths[`default_test_cites_${citation_format}_path`], 'utf8'));
    item.default_test_citations = make_citations(citeproc, default_citations);

    // GB/T 7714—2015 测试
    item.gb_t_7714_results = get_item_results(citeproc, data_dict.gb_t_7714);

    // 《心理学报》测试
    item.acta_psychologica_sinica_results = get_item_results(citeproc, data_dict.acta_psychologica_sinica);

    // 《中国社会科学》测试
    item.social_sciences_in_china_results = get_item_results(citeproc, data_dict.social_sciences_in_china);

    // 《法学引注手册》测试
    item.manual_of_legal_citation_results = get_item_results(citeproc, data_dict.manual_of_legal_citation);

    // APA 测试
    item.apa_results = get_item_results(citeproc, data_dict.apa);

    // Sample citations
    let sample_citations;
    if (paths.sample_cites_path) {
        sample_citations = JSON.parse(fs.readFileSync(paths.sample_cites_path, 'utf8'));
    } else if (paths.test_cites_path) {
        sample_citations = test_citations;
    } else if (paths.test_data_path) {
        sample_citations = collect_cites(style_data, citation_format);
    } else {
        sample_citations = JSON.parse(fs.readFileSync(paths[`default_sample_cites_${citation_format}_path`], 'utf8'));
    }

    // console.log(paths.sample_cites_path);

    item.sample_citations = make_citations(citeproc, sample_citations);
    item.sample_bibliography = make_bibliography(citeproc);

    return item;
}


function write_file(item, paths) {
    var sample_text = `# ${item['file']} 示例\n\n`
        + `<!-- 此文件由脚本自动生成，请勿手动修改！ -->\n\n`
        + `## 引注\n\n`
        + `${item['sample_citations']}\n\n`
        + `## 参考文献表\n\n`
        + `${item['sample_bibliography']}\n`;


    fs.writeFileSync(paths['sample_output_path'], sample_text);

    var test_text = `# ${item['file']} 测试\n\n`
        + `<!-- 此文件由脚本自动生成，请勿手动修改！ -->\n\n`
        + `## 样式测试\n\n`
        + `### 引注\n\n`
        + `${item['test_citations']}\n\n`
        + `### 参考文献表\n\n`
        + `${item['test_bibliography']}\n\n`
        + `## 默认测试\n\n`
        + `### 引注\n\n`
        + `${item['default_test_citations']}\n\n`
        + `### GB/T 7714—2015 示例文献\n\n`
        + `${item['gb_t_7714_results']}\n\n`
        + `### 《心理学报》 示例文献\n\n`
        + `${item['acta_psychologica_sinica_results']}\n\n`
        + `### 《中国社会科学》 示例文献\n\n`
        + `${item['social_sciences_in_china_results']}\n\n`
        + `### 《法学引注手册》 示例文献\n\n`
        + `${item['manual_of_legal_citation_results']}\n\n`
        + `### APA 示例文献\n\n`
        + `${item['apa_results']}\n`;

    fs.writeFileSync(paths['test_output_path'], test_text);
}


function test_style(style_name) {
    let paths = get_paths(style_name);
    let item_data = get_item_data(paths);
    write_file(item_data, paths);
}


function main() {
    let files = [];
    if (process.argv.length >= 3) {
        files = process.argv.slice(2);
    } else {
        files = [];
    }

    for (let file of files) {
        let style_name = path.basename(file, '.csl');
        test_style(style_name);
    }
}


main();
