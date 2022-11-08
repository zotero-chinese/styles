---
name: 错误报告
about: 报告错误帮助我们改进
title: ''
labels: ''
assignees: ''

---

**描述错误**

CSL 样式：xxx-xxx-xxx.csl
<!-- 比如：000gb-t-7714-2015-numeric-bilingual.csl -->

清晰简洁地描述错误是什么，预期的结果是什么。


**屏幕截图**

如果必要，请添加屏幕截图以帮助解释。


**条目信息**

<!-- 将出错的文献条目导出为 CSL-JSON 格式，并替换掉下面的内容。 -->

```json
[
	{
		"id": "doe1984his",
		"type": "book",
		"title": "His anonymous life",
		"author": [
			{
				"family": "Doe",
				"given": "John"
			}
		],
		"issued": {
			"date-parts": [
				[
					"1984"
				]
			]
		}
	}
]
```

**其他相关信息**

在此处添加有关该问题的其他信息。
