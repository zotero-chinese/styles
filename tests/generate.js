const CSL = require("./citeproc_commonjs.js");
const fs = require("fs");
const path = require("path");
const chokidar = require('chokidar')
const cluster = require('cluster')
const numCPUs = require('os').cpus().length

// CSL.Output.Formats.html["@bibliography/entry"] = function (state, str) {
//     // console.log(state.bibliography.opt)
//     const o = state.bibliography.opt
//     const second_field_align = o['second-field-align'] ? o['second-field-align'] : false
//     const hangingindent = o['hangingindent'] ? o['hangingindent'] : false
//     const format_style = `second-field-align-${second_field_align} hangingindent-${hangingindent}`;
//     return `  <div class="csl-entry ${format_style}"> ${str} </div>\n`;
// };

/**
 * @description 产生 citeproc-js 的 sys 参数
 * @author zeping lee
 * @param items
 * @returns {*}
 * @see {@link https://citeproc-js.readthedocs.io/en/latest/running.html#required-sys-functions}
 */
function make_citeproc_sys(items) {
    bib = {};
    for (var item of items) {
        bib[item.id] = item;
    }
    var citeproc_sys = {
        retrieveLocale: function (lang) {
            var file_path = "./locales/locales-" + lang + ".xml";
            if (fs.existsSync(file_path)) {
                return fs.readFileSync(file_path, "utf8");
            } else {
                console.error(`Cannot find "${file_path}".`);
                return undefined;
            }
        },
        retrieveItem: function (id) {
            var item = bib[id];
            if (item) {
                return bib[id];
            } else {
                console.error(`Cannot find item "${id}".`);
                return undefined;
            }
        },
    };
    return citeproc_sys;
}

/**
 * @description 产生引注
 * @author zeping lee
 * @param citeproc
 * @param cite_items_list
 * @returns {String}
 */
function make_citations(citeproc, cite_items_list) {
    var citation_res = [];

    var citation_count = 0;
    var citation_pre = [];
    var citation_post = [];

    for (var cite_items of cite_items_list) {
        citation_count += 1;
        citation_id = "CITATION-" + citation_count;
        var citation = {
            citationID: citation_id,
            citationItems: cite_items,
            properties: {
                noteIndex: citation_count,
            },
        };
        // console.log(citation);
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
 * @author zeping lee
 * @param {*} citeproc
 * @returns {String}
 */
function make_bibliography(citeproc) {
    try {
        const [params, bib_items] = citeproc.makeBibliography();
        // console.log(params, bib_items);
        const maxoffset = params['maxoffset'];
        const second_field_align = params['second-field-align'] ? params['second-field-align'] : false;
        const hangingindent = params['hangingindent'] ? params['hangingindent'] : false;
        const format_style = `maxoffset-${maxoffset} second-field-align-${second_field_align} hangingindent-${hangingindent}`;
        const bibstart = `<div class="csl-bib-body ${format_style}">\n`;
        var res = bibstart;
        for (const bib_item of bib_items) {
            res += bib_item;
        }
        res += params.bibend;
    } catch (TypeError) {
        console.log(TypeError);
        return false;
    }
    return res;
}

/**
 * @description 比较条目的 id，用于排序
 */
function compare_entry_id(a, b) {
    const id1 = a[0].id;
    const id2 = b[0].id;
    if (id1 < id2) {
        return -1;
    } else if (id1 > id2) {
        return 1;
    } else {
        return 0;
    }
}

/**
 * @description 获取指定 CSL 文件的元数据和参考文献预览
 * @author northword
 * @param {String} csl_file - 要获取的 csl 文件路径
 * @param {String} data_file - 使用的示例条目数据文件路径
 * @param {String} cite_file - 使用的引文列表文件路径
 * @returns {Object}  包含样式元数据和预览的对象/字典，其键值对见函数内 item 变量。
 */
function get_info(csl_file, data_file, cite_file, test_cite_file, default_data_file, default_cite_file, default_test_cite_file) {

    var default_data = JSON.parse(fs.readFileSync(default_data_file, "utf8"));
    var sample_data;
    let full_data = default_data;
    if (data_file) {
        sample_data = JSON.parse(fs.readFileSync(data_file, "utf8"));
        full_data = default_data.concat(sample_data);
    }

    var citeproc_sys = make_citeproc_sys(full_data);
    var csl_style = fs.readFileSync(csl_file, "utf8");
    var citeproc = new CSL.Engine(citeproc_sys, csl_style);
    citeproc.opt.development_extensions.wrap_url_and_doi = true;
    // citeproc.opt.development_extensions.csl_reverse_lookup_support = true;

    var item = {
        'style_class': 'Unknown',
        'title': 'Undefined',
        'id': 'Undefined',
        'link_self': 'Undefined',
        'link_template': 'Undefined',
        'link_documentation': 'Undefined',
        'author': {},
        'contributor': {},
        'citation_format': 'Undefined',
        'field': [],
        'summary': '',
        'updated': 'Undefined',
        'citations': 'Undefined',
        // 'bib_second_field_align': false,
        // 'bibstart': '<div class="csl-bib-body">',
        'bibliography': 'Undefined',
        // 'bibend': '</div>'
        'test_citations': 'Undefined',
        'test_bibliography': 'Undefined',
        'test_full_bibliography': 'Undefined',
        'default_test_citations': 'Undefined',
        'default_test_bibliography': 'Undefined',
        'default_test_full_bibliography': 'Undefined',
    }

    item['title'] = citeproc.cslXml.getNodesByName(citeproc.cslXml.dataObj, "title")[0].children[0];
    item['id'] = citeproc.cslXml.getNodesByName(citeproc.cslXml.dataObj, "id")[0].children[0];

    if (citeproc.cslXml.getNodesByName(citeproc.cslXml.dataObj, "link").length !== 0) {
        var link_nodes = citeproc.cslXml.getNodesByName(citeproc.cslXml.dataObj, "link");
        for (var node of link_nodes) {
            switch (node.attrs['rel']) {
                case 'self':
                    item['link_self'] = node.attrs["href"];
                    break;
                case 'documentation':
                    item['link_documentation'] = node.attrs["href"];
                    break;
                case 'template':
                    item['link_template'] = node.attrs["href"];
                    break;
                default:
                    break;
            }
        }
    }

    if (citeproc.cslXml.getNodesByName(citeproc.cslXml.dataObj, "category").length !== 0) {
        var category_nodes = citeproc.cslXml.getNodesByName(citeproc.cslXml.dataObj, "category");
        for (var node of category_nodes) {
            if ("citation-format" in node.attrs) {
                item['citation_format'] = node.attrs["citation-format"];
            } else if ("field" in node.attrs) {
                item['field'] = node.attrs["field"];
            }
        }
    }

    if (citeproc.cslXml.getNodesByName(citeproc.cslXml.dataObj, "summary").length !== 0) {
        item['summary'] = citeproc.cslXml.getNodesByName(citeproc.cslXml.dataObj, "summary")[0].children[0];
    }

    // Sample cites
    var sample_citations = [];
    if (cite_file) {
        sample_citations = JSON.parse(fs.readFileSync(cite_file, "utf8"));
    } else if (sample_data) {
        for (var entry of sample_data) {
            sample_citations.push([{ "id": entry.id }]);
            sample_citations.sort(compare_entry_id);
        }
    } else {
        sample_citations = JSON.parse(fs.readFileSync(default_cite_file, "utf8"));
    }

    item['citations'] = make_citations(citeproc, sample_citations);
    item['bibliography'] = make_bibliography(citeproc);

    // Test cites
    if (test_cite_file) {
        var test_citations = JSON.parse(fs.readFileSync(test_cite_file, "utf8"));
        item['test_citations'] = make_citations(citeproc, test_citations);
        item['test_bibliography'] = make_bibliography(citeproc);
    }

    if (sample_data) {
        var full_citations = [];
        for (var entry of sample_data) {
            full_citations.push([{ 'id': entry.id }]);
            full_citations.sort(compare_entry_id);
        }
        make_citations(citeproc, full_citations);
        item['test_full_bibliography'] = make_bibliography(citeproc);
    }


    var default_citations = JSON.parse(fs.readFileSync(default_test_cite_file, "utf8"));
    item['default_test_citations'] = make_citations(citeproc, default_citations);
    item['default_test_bibliography'] = make_bibliography(citeproc);

    var default_full_citations = [];
    for (var entry of default_data) {
        default_full_citations.push([{ 'id': entry.id }]);
        default_full_citations.sort(compare_entry_id);
    }
    make_citations(citeproc, default_full_citations);
    item['default_test_full_bibliography'] = make_bibliography(citeproc);

    // console.log(item)
    return item
}

/**
 * @description 将获得的信息写入文件
 * @author northword
 * @param {Object} item - 从 get_info() 获得的元数据和预览信息
 * @param {Object} paths - 从 get_path() 获得的路径信息
 */
function write_file(item, paths) {

    var sample_text = `--- \n`
        + `title: ${item['title']} \n`
        + `category: ${item['citation_format']} \n`
        + `tag: ${item['field']} \n`
        + `dir:\n`
        + `    link: true \n`
        + `--- \n\n`
        + `<!-- 此文件由脚本自动生成，请勿手动修改！ -->  \n\n`
        + `${item['summary']}  \n\n`
        + `::: note 引注  \n\n`
        + `${item['citations']}  \n\n`
        + `:::  \n\n`
        + `::: note 参考文献表  \n\n`
        + `${item['bibliography']}  \n\n`
        + `:::  \n\n`
        + `<!-- more -->  \n\n`
        + `\n## 下载链接  \n\n`
        + `请从以下任意一个链接安装样式。 \n`
        + `- [从 GitHub 安装样式（最新）](${paths['github_raw']})  \n`
        + `- [从 Jsdelivr 安装样式（GitHub 镜像，可能有 24h 延迟）](${paths['jsd_raw']}) \n`
        + `- [从 Gitee 安装样式（国内镜像）](${paths['gitee_raw']}) \n`
        + `\n## 查看样式源码 \n\n`
        + `- [在 GitHub 查看样式文件](${paths['github_link']})  \n`
        + `- [在 Gitee 查看样式](${paths['gitee_link']}) \n`
        + `\n## 调试信息 \n\n`
        + `[点此查看完整测试结果](./test.md) \n`


    fs.writeFileSync(paths['output_file'], sample_text);
    // console.log(sample_text);

    var test_text = `--- \n`
        + `title: ${item['title']}测试结果 \n`
        + `article: false \n`
        + `dir:\n`
        + `    index: false \n`
        + `--- \n\n`
        + `# ${item['title']}测试\n\n`
        + `<!-- 此文件由脚本自动生成，请勿手动修改！ -->\n\n`
        + `## 引注测试\n\n`
        + `${item['test_citations']}\n\n`
        + `## 参考文献表测试\n\n`
        + `${item['test_bibliography']}\n\n`
        + `## 完整参考文献表测试\n\n`
        + `${item['test_full_bibliography']}\n\n`
        + `## 默认引注测试\n\n`
        + `${item['default_test_citations']}\n\n`
        + `## 默认参考文献表测试\n\n`
        + `${item['default_test_bibliography']}\n\n`
        + `## 默认完整参考文献表测试\n\n`
        + `${item['default_test_full_bibliography']}\n`

    fs.writeFileSync(paths['test_output_file'], test_text);
}

/**
 * @description 遍历给定文件夹，获取 csl 文件，并产生其对应的各种路径信息
 * @author northword
 * @param {String} base - 要获取的文件夹
 * @param {Object} data_file - 默认的/自定义的示例条目数据、示例引文列表的文件名
 * @returns {Array<Object>}  每个样式文件的信息放在一个对象，键值对参考函数内 pathResult 变量，所有对象放在一个列表, [{}, {}]。
 */
function get_paths(base, data_file) {
    let pathResults = []

    files = fs.readdirSync(base)
    files.forEach(function (file_name) {
        var file_full_path = path.join(base, file_name);
        stats = fs.statSync(file_full_path)
        if (stats.isFile() && path.extname(file_full_path) == ".csl") {

            var sample_data_path;
            if (fs.existsSync(base + '/' + data_file['sample_data'])) {
                sample_data_path = base + '/' + data_file['sample_data'];
            }

            let sample_cite_path;
            if (fs.existsSync(base + '/' + data_file['sample_cite'])) {
                sample_cite_path = base + '/' + data_file['sample_cite'];
            }

            let test_cite_path;
            if (fs.existsSync(base + '/' + data_file['test_cite'])) {
                test_cite_path = base + '/' + data_file['test_cite'];
            }

            const relativePath = path.relative('../', file_full_path).replace(/\\/ig, "/")

            let pathResult = {
                'file_name': file_name,
                'file_dir': base,
                'file_full_path': file_full_path,
                'sample_data_path': sample_data_path,
                'sample_cite_path': sample_cite_path,
                'test_cite_path': test_cite_path,
                'default_data_path': data_file['default_data'],
                'default_cite_path': data_file['default_cite'],
                'default_test_cite_path': data_file['default_test_cite'],
                'relative_path': path.relative('../', file_full_path),
                'github_link': data_file['github_repo'] + './tree/main/' + relativePath,
                'github_raw': data_file['github_repo'] + './raw/main/' + relativePath,
                'gitee_link': data_file['gitee_repo'] + './tree/main/' + relativePath,
                'gitee_raw': data_file['gitee_repo'] + './raw/main/' + relativePath,
                'jsd_raw': 'https://cdn.jsdelivr.net/gh/zotero-cn/styles@main/' + relativePath,
                'output_file': base + '/' + 'README.md',
                'test_output_file': base + '/' + 'test.md',
            }

            pathResults.push(pathResult)
        }
        if (stats.isDirectory()) {
            for (i of get_paths(file_full_path, data_file)) {
                pathResults.push(i)
            }; //递归，如果是文件夹，就继续遍历该文件夹下面的文件
        }
    })
    return pathResults
}

/**
 * @type {String} CSL 文件的存放目录
 */
var csl_base = path.resolve('../src/');

/**
 * @type {Object} config 配置信息，除了 csl 文件目录以外的所有输入值，包含示例数据、仓库地址等。
 */
var config = {
    'default_data': 'default-data.json',
    'default_cite': 'default-cite.json',
    'default_test_cite': 'default-test-cite.json',
    'sample_data': 'sample-data.json',
    'sample_cite': 'sample-cite.json',
    'test_cite': 'test-cite.json',
    'github_repo': 'https://github.com/zotero-cn/styles/',
    'gitee_repo': 'https://gitee.com/zotero-chinese/styles/',
    'output_file': 'README.md'
}

// 接受命令行传入的参数
const args = process.argv.slice(2)

/**
 *  for single file test，测试时取消该行注释即可。
 */
// var csl_base = path.resolve('../src/gb-t-7714-2015-numeric-bilingual');

function main(csl_base, config) {
    get_paths(csl_base, config).forEach((self) => {
        console.log('[info] Processing ' + self['file_full_path'])
        itemdata = get_info(self['file_full_path'],
            self['sample_data_path'],
            self['sample_cite_path'],
            self['test_cite_path'],
            self['default_data_path'],
            self['default_cite_path'],
            self['default_test_cite_path'],
        );
        // console.log(itemdata)
        write_file(itemdata, self)
    })
}

if (args == 'watch') {
    console.log("\ninfo generate.js 已监听 src/ 目录  \n")
    chokidar.watch('../src/', {
        persistent: true,                                       // 保持监听
        ignored: /^(?=.*(\.\w+)$)(?!.*(?:\.csl?|\.json)$).*$/,  // 忽略除了 .csl 和 .json 以外的文件
        ignoreInitial: true,                                    // 初始化时忽略已有文件的 add 和 adddir 事件
    }).on('all', (event, filePath) => {                         //监听除了 ready, raw, and error 之外所有的事件类型
        console.log("[info] ", event, filePath);
        main(path.dirname(filePath), config)
    })
} else {
    console.log("\ninfo 未启用监听，即将生成所有预览  \n")
    main(csl_base, config)
}
