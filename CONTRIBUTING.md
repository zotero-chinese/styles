# 贡献指南：如何新增样式

本文档说明如何在本仓库中新增一个 CSL 样式。

## 1. 样式名称

新增样式前，请先确定样式的名称。建议遵循以下规则：

- 应包含期刊/学校/标准/体例的名称。
- 学校的院系使用“学校 - 院系”格式。
- 本科生的学位论文样式标注“（本科）”，研究生不标注。
- 如果有特定引用格式，在括号中标注“顺序编码”、“著者-出版年”、或“脚注”。

可以参考仓库中的样式名称。

## 2. 在 `src` 下创建样式目录

每个样式都必须在 `src` 下使用独立目录。 建议结构：

```text
src/
	your-style-name/
		your-style-name.csl
		items.json   # 可选
		cites.json   # 可选
```

## 3. `<info>` 填写规则

请确保样式的 `<info>` 信息完整、规范，至少满足以下要求：

- `title`：与样式名称一致。
- `id`：使用样式页面地址（例如 `https://zotero-chinese.com/styles/your-style-name`），且应唯一。
- `link rel="self"`：指向本样式地址，与 `id` 一致。
- `link rel="template"`：如果是基于某个样式派生，建议保留并指向上游模板样式。
- `link rel="documentation"`：期刊/学校的官网格式规范的链接。如果有单独的文件，使用两个 `link` 分别给出网页和文件的链接。
- `issn`：期刊可以列出 ISSN 号。
- `category field`：学科领域，填写规则见第 4 节。
- `summary`：注明格式规范的文件名称、发布日期、文件号（可选），
  例如“《经济研究》参考文献索引及用录体例说明（2025-01-03）”、
  “北京理工大学研究生学位论文撰写规范（研函〔2026〕024号），2026年3月31日发布”。
  也可以补充说明相对于基准格式的修改细节。
- `updated`：更新时间应为有效时间格式。

注意事项：

- 不要手动修改自动生成文件（如 `metadata.json`、`index.md`），脚本会覆盖这些文件。

## 4. 学科领域（`<category field>`）

`<category field>` 只能取以下值：`generic-base`（※通用基础）、`anthropology`（人类学）、`astronomy`（天文学）、`biology`（生物学）、`botany`（植物学）、`chemistry`（化学）、`communications`（传播学）、`engineering`（工程学）、`geography`（地理学）、`geology`（地质学）、`history`（历史学）、`humanities`（人文学科）、`law`（法学）、`linguistics`（语言学）、`literature`（文学）、`math`（数学）、`medicine`（医学）、`philosophy`（哲学）、`physics`（物理学）、`political_science`（政治学）、`psychology`（心理学）、`science`（自然科学）、`social_science`（社会科学）、`sociology`（社会学）、`theology`（神学）、`zoology`（动物学）。

- 期刊按学科填写：学报（自然科学版）用 `science`，学报（社会科学版）用 `social_science`。
- 交叉学科写多个 field（如 地球物理学报：`geology`、`physics`）。
- 综合性学校只用 `generic-base`；理工大学、科技大学不加 `science`/`engineering`。
- 学校有对应学科的专门院校用 `generic-base` + 学科（如 中国政法大学：`generic-base`、`law`、`political_science`）；
- 学院/系/专业只写学科，不加 `generic-base`。

## 5. 验证引注和参考文献表

先按 [README](README.md) 安装依赖。在仓库根目录运行下面的命令，然后打开生成的 `src/会计研究/index.md`。在“样式预览”中，同一篇文献有两处可以核对：

```sh
pnpm run preview "src/会计研究/会计研究.csl"
```

| 《会计研究》示例 | 引注 | 参考文献表 |
| --- | --- | --- |
| 扬奎斯特、萨金特的两人合著 | `(扬奎斯特和萨金特, 2010)` | 列出两位作者 |
| 肖玲、张雪、王永的三人合著 | `(肖玲等, 2024)` | 仍列出三位作者 |

验证自己的样式时，先从期刊或学校的格式规范中挑出一条规则，再选能看出差别的条目。例如，要检查作者从几人起省略，就分别准备刚好低于和达到该人数的文献。上表的预期结果适用于《会计研究》，其他样式以各自的规范为准。

要在本地重现这个边界，可以复制一份 `会计研究.csl` 到临时目录，把下面两个文件放在副本旁边。为自己的样式准备正式示例时，换成该样式的真实条目和对应的引用顺序。

**`items.json`** 存文献数据。每条文献的 `id` 应唯一。

```json
[
  {
    "id": "demo-two", "type": "book", "language": "zh-CN",
    "title": "双作者示例", "publisher": "示例出版社", "publisher-place": "上海",
    "author": [{"literal": "陈明"}, {"literal": "李青"}],
    "issued": {"date-parts": [[2022]]}
  },
  {
    "id": "demo-three", "type": "book", "language": "zh-CN",
    "title": "三作者示例", "publisher": "示例出版社", "publisher-place": "上海",
    "author": [{"literal": "周平"}, {"literal": "吴林"}, {"literal": "孙禾"}],
    "issued": {"date-parts": [[2023]]}
  }
]
```

**`cites.json`** 指定正文中怎样引用这些条目。每个内层数组对应一处引注，数组内的 `id` 对应文献条目；这里把两篇文献分别引用一次。

```json
[
  [{"id": "demo-two"}],
  [{"id": "demo-three"}]
]
```

再次运行 `pnpm run preview`，将参数换成副本的完整路径。打开副本旁新生成的 `index.md`，在“样式预览 → 引注”中应分别看到 `(陈明和李青, 2022)` 和 `(周平等, 2023)`；在“参考文献表”中按书名查找，两位和三位作者都应列全。若某处不符，检查条目的语言、作者字段和引注 ID，修正输入或样式后重新生成。提交 PR 时附上规范出处和这组预期、实际结果，审阅者就能复查同一条规则。
