# 中文 CSL 样式 - Zotero 中文社区

本仓库提供了一系列中文期刊和学位论文的 CSL 样式，其中大部分是由 GB/T 7714—2015[^gbt7714] 衍生的。

[^gbt7714]: 《[GB/T 7714—2015 信息与文献 参考文献著录规则](https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D8055ED3A7E05397BE0A0AB82A)》（[PDF](http://www.cessp.org.cn/a258.html)）

- 中文 CSL 样式 - Zotero 中文社区：<https://zotero-chinese.com/styles/>
- GitHub 仓库：<https://github.com/zotero-chinese/styles>
- Gitee 镜像：<https://gitee.com/redleafnew00/Chinese-STD-GB-T-7714-related-csl>（自动同步）
- CSL 官方仓库：<https://github.com/citation-style-language/styles>

## 如何使用

### 获取样式

访问 [中文 CSL 样式 - Zotero 中文社区](https://zotero-chinese.com/styles/) 选择合适的样式，单击样式名进入样式详情页，在 `下载` 小节，单击任意一个可用链接以安装样式。

> [!TIP]
>
> 警告：`xxx.csl` 不是一个有效的 CSL 1.0.2 样式文件，你可能不能和 Zotero 一起正常工作。
>
> 本仓库中的 CSL 样式在安装时会出现以上警告，这是因为该样式使用了 [`citeproc-js`](https://github.com/Juris-M/citeproc-js) 提供的 [CSL-M](https://citeproc-js.readthedocs.io/en/latest/csl-m/index.html) 扩展功能，属于正常现象，用户直接忽略即可。

### 注意事项

> [!IMPORTANT]
> 如果你使用了支持双语混排的样式（中文作者超过 `3` 个为`等`，英文为 `et al.`），你需要在 Zotero 或 JurisM 中为每一个文献条目设置 `语言` 字段。
>
> - 对于中文条目，语言可以为 `zh-CN`；
> - 对于英文条目，语言可以为 `en-US`；
>
> 注意：不能是 `English`，`中文` 等！
>
> 详情请参考：[中英文混排 - 与 Word 引用相关的常见问题](https://zotero-chinese.com/user-guide/faqs/word-addon#中英文混排) 。

修改语言后需要在 Word 加载项中 Refresh ，若仍显示不正常，将该篇文献删除后重新插入。

如果显示仍然不正常，可以尝试在 Zotero 的 Word 工具条中点击`Document Preferences`，将`Language`切换一下（原来为`English(US)`改为`中文（中国大陆）`，原来`中文（中国大陆）`改为`English(US)`），再点击`OK`。

批量修改语言：可以使用 delitemwithatt 插件，到 <https://github.com/redleafnew/delitemwithatt> 下载插件并安装,
选择需要修改的条目后，右击，选择`自动设置语言字段`或`Set Language Field Automatically`即可。其他方法参见 <https://zhuanlan.zhihu.com/p/341989158>。

`Github` 文件的下载方法也可见 <https://jingyan.baidu.com/article/b87fe19eca972b1219356872.html>。

Zotero 添加 `csl` 格式文件也可见 <https://zhuanlan.zhihu.com/p/64624484>。

完整的 Zotero 的使用教程见：[Zotero 百科全书 - Zotero 中文社区](https://zotero-chinese.com/user-guide/)。

## 没有找到符合需要的样式？

请前往 [ISSUE](https://github.com/zotero-chinese/styles/issues/new/choose) 发布一个帖子，反馈已有样式的缺陷或申请新的样式。

注意，请认真完成 ISSUE 模板预置的问题，这些问题可以极大提高我们的处理效率，不完整填写的 ISSUE 将被直接关闭。

## 贡献指南

项目运行需要安装 [Node.js](https://nodejs.org/zh-cn/) 和 Git。

```bash
# Clone 这个仓库
git clone --recursive https://github.com/zotero-chinese/styles.git

# 进入项目目录
cd styles

# 子模块是必须的，如果在 clone 时没有添加 recursive 选项，需要运行下一行初始化子模块
git submodule update --init

# 如果是第一次接触 Node.js 或运行后续命令时提示 pnpm 命令不存在，
# 请执行下一行以安装 pnpm 包管理器
npm install -g pnpm

# 安装依赖
pnpm install

# 监听 CSL 文件变化并热更新
pnpm dev

# 生成所有数据
pnpm build

# 预览一个 CSL 的结果
pnpm preview "src/accounting-research/accounting-research.csl"
# 你也可以直接运行脚本
tsx ./lib/index.ts "src/accounting-research/accounting-research.csl"
```

提交新样式时，在 `src` 目录为每一个 style 建立一个单独的文件夹，在文件夹中，存放 `[style name].csl`。如果需要为这个样式提供单独的测试条目，可以分别建立 `items.json` 或 `cites.json`，这两个 JSON 文件的格式分别为 CSL-JSON 的 Items 和 CitationItems[^csl-json]。

[^csl-json]: [CSL-JSON - citeproc-js](https://citeproc-js.readthedocs.io/en/latest/csl-json/markup.html)

`metadata.json` 和 `index.md` 均为脚本自动生成，为中文 CSL 样式商店网站的构建提供数据，请勿手动修改这些文件，所有的修改都将在下一次脚本运行时被覆盖。

## 协议

本仓库中的样式文件均采用 [Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)](http://creativecommons.org/licenses/by-sa/3.0/) 协议分发。

## 贡献者

感谢所有贡献者！

[![contributors](https://contrib.rocks/image?repo=zotero-chinese/styles)](https://github.com/zotero-chinese/styles/graphs/contributors)

## 更多 Zotero 使用教程及技巧

<details>

<summary>更多 Zotero 使用教程及技巧</summary>

Zotero 使用参见[软件随心 https://zhuanlan.zhihu.com/c_1071081428967743488](https://zhuanlan.zhihu.com/c_1071081428967743488)。

一个 `PDF` 的 Zotero 使用简短教程《优雅地用 Zotero 进行文献管理和论文写作》，见
<https://github.com/redleafnew/Zotero_introduction/releases>
或 <https://zhuanlan.zhihu.com/p/113170814>。

Zotero 便携版的安装与使用见 <https://zhuanlan.zhihu.com/p/350797263>。

Zotero 怎么调整条目显示的大小，总觉得太小了见 <https://zhuanlan.zhihu.com/p/384398075>。

Zotero 如何展开和折叠所有条目见<https://zhuanlan.zhihu.com/p/544153534>。

Zotero 重装系统后 Word 工具条恢复的方法见 <https://zhuanlan.zhihu.com/p/350567611>。

Zotero Word 工具条不出现如何解决见 <https://zhuanlan.zhihu.com/p/365392235>。

ZoteroWord 中插入文献时如何默认打开经典视图见 <https://zhuanlan.zhihu.com/p/358078407>。

Zotero 中常用的一些批处理用的 `JavaScript` 脚本见[zotero-javascripts](https://github.com/redleafnew/zotero-javascripts)。

Zotero 利用 JavaScript 备份配置和数据见 <https://zhuanlan.zhihu.com/p/357859432>。

Zotero 数据、设置的备份与恢复-视频 <https://zhuanlan.zhihu.com/p/360084592>。

Zotero 设置的备份与恢复见 <https://zhuanlan.zhihu.com/p/350546813>。

Zotero 数据的备份与恢复见 <https://zhuanlan.zhihu.com/p/350549136>。

Zotero 如何新建一个 profile？<https://zhuanlan.zhihu.com/p/404906012>。

Zotero 如何选中重复条目中的部分条目 <https://zhuanlan.zhihu.com/p/406824204>。

Zotero 批量删除（合并）重复文献见 <https://zhuanlan.zhihu.com/p/352324486>。

Zotero 使参考文献列表中某些作者名字加粗，加星，刷新后保留见 <https://zhuanlan.zhihu.com/p/353770101>。

Zotero 参考文献编号位数增加后如何对齐见 <https://zhuanlan.zhihu.com/p/366711117>。

Zotero 中使用`GB/7714-2015`相关 `csl` 时文末显示的访问日期如何隐藏？<https://zhuanlan.zhihu.com/p/349555378>。

Zotero 使用 GB/T 7714 2015 样式期刊类型显示为[Z]的原因及解决方法见<https://zhuanlan.zhihu.com/p/497855911>。

Zotero 右键菜单中为什么没有 `Find Available PDF`？<https://zhuanlan.zhihu.com/p/348697024>。

Zotero 插件 Add-ons 无法打开的解决办法<https://zhuanlan.zhihu.com/p/536832783>。

Zotero 插件（扩展）的安装--以`茉莉花（jasminum）`为例 <https://zhuanlan.zhihu.com/p/347628976>。

Zotero 利用`jasminum（茉莉花）`安装或更新部分中文网站 `translator`<https://zhuanlan.zhihu.com/p/347642670>。

Zotero 中无关闭、最大化、最小化、窗口标题的窗口移动或放大缩小的方法 <https://zhuanlan.zhihu.com/p/343640809>。

Zotero 如何查看 `My Library` 中的文献属于哪个分类（文件夹）？<https://zhuanlan.zhihu.com/p/340591764>。

Zotero 如何只查找一个文件夹下的条目见<https://zhuanlan.zhihu.com/p/491245011>。

Zotero 同步文献库和附件 <https://zhuanlan.zhihu.com/p/339443686>。

Zotero 利用 `ZotFile` 管理附件参见 <https://zhuanlan.zhihu.com/p/337801423>。

设置 `ZotFile` 支持重命名移动更多文件格式-以 caj 文件为例 <https://zhuanlan.zhihu.com/p/340847784>。

今天安装了 `ZotFile` 插件，想请教一下大家怎么用它把以前导入的论文题目也给改过来见 <https://zhuanlan.zhihu.com/p/365665469>。

`ZotFile` 如何让不同主题的参考文献附件放在同一个文件夹 <https://zhuanlan.zhihu.com/p/426839229>。

`ZotFile` 怎么样可以只导出多篇文献 PDF？见<https://zhuanlan.zhihu.com/p/447109035>。

Zotero 删除条目（题录）时同时删除 `PDF` 附件的另一方法 <https://zhuanlan.zhihu.com/p/338159167>。

Zotero 如何将文件位置恢复到 storage 中？<https://zhuanlan.zhihu.com/p/420831288> 。

Zotero 怎么看自带的存贮(storage)剩余情况呢 <https://zhuanlan.zhihu.com/p/427955654>。

Zotero 如何清空 Zotero 自带的免费 300M 存贮空间（storage）见<https://zhuanlan.zhihu.com/p/596614249>。

Zotero 安装 ZotFile 后删除条目和附件见 <https://zhuanlan.zhihu.com/p/369141058>。

Zotero 6.0 如何使用系统默认的 PDF 阅读器？见<https://gitee.com/zotero-chinese/zotero-chinese/issues/I4YNR2>。

Zotero 不用代码不用其它软件清理使用 ZotFile 后删除条目剩余的游离附件 <https://zhuanlan.zhihu.com/p/422215186>。

Zotero 如何设置打开 PDF 附件的软件 <https://zhuanlan.zhihu.com/p/373952017>。

Zotero `style csl` 文件简单编辑参见 <https://zhuanlan.zhihu.com/p/336009544>。

Zotero 在 citationstyles.org 可视化编辑 csl 时如何使用自己的文献调试见 <https://zhuanlan.zhihu.com/p/437380542>。

Zotero 如何删除参考文献列表末尾的点（.）见<https://zhuanlan.zhihu.com/p/450850667>。

中文 `PDF` 识别---`jasminum` 使用参见 <https://zhuanlan.zhihu.com/p/329870430>。

不显示参考文献中的 `URL` 网址的方法见 <https://zhuanlan.zhihu.com/p/328773377>。

Zotero 自己的 style 或 translator 总是被恢复为官方的怎么办？见[[Zotero]自己的 style 或 translator 总是被恢复为官方的怎么办？](https://zhuanlan.zhihu.com/p/367843528)。

彻底解决参考文献显示网址及 DOI 问题见 <https://zhuanlan.zhihu.com/p/355842318>。

Word 参考文献列表末尾有 DOI，想修改 CSL 文件，但 CSL 代码找不到相应字段修改，怎么办？见<https://zhuanlan.zhihu.com/p/478072852>。

Zotero 直接同时生成“等”和“et al”(视频讲解)<https://zhuanlan.zhihu.com/p/342753388>。

使用 `JurisM Style` 实现同时生成“`et al`”和“`等`”见 <https://zhuanlan.zhihu.com/p/317108621>。

Zotero 修改版终于可以原生支持同时生成“`et al`”和“`等`”了 <https://zhuanlan.zhihu.com/p/314928204>。

Zotero 参考文献列表只出现一个作者，然后就是等了，怎么样出现全部作者的名字见 <https://zhuanlan.zhihu.com/p/367609914>。

Zoteroet al 或等前的逗号如何删除见 <https://zhuanlan.zhihu.com/p/372796326>。

Zotero 如何使用期刊缩写名称见 <https://zhuanlan.zhihu.com/p/372247762>。

Zotero 作者缩写如何改为全称？见 <https://zhuanlan.zhihu.com/p/393376982>。

Zotero 批量修改条目（文献）语言 <https://zhuanlan.zhihu.com/p/341989158>。

`Word` 中的文献如何导入到 Zotero 库中 <https://zhuanlan.zhihu.com/p/309597293>。

Zotero 批量文章题目大小写转为首字母大写的方法（含视频）<https://zhuanlan.zhihu.com/p/283889592>。

Zotero 作者姓名全部大写如何改为词首字母大写见 <https://zhuanlan.zhihu.com/p/393454241>。

Zotero 作者姓名批量修改为首字母大写见 <https://zhuanlan.zhihu.com/p/354481222>。

Zotero 生成双语参考文献的变通实现方法（含视频讲解）<https://zhuanlan.zhihu.com/p/282826403>。

Zotero 标准的引用方法（视频讲解）见<https://zhuanlan.zhihu.com/p/491375843>。

Zotero 分类、标签和关联的使用 <https://zhuanlan.zhihu.com/p/275707703>。

Zotero 数十篇文献同时去除同一个标签要怎么操作呢？除了一个一个点去除，有其他快捷去除的方式吗？见<https://zhuanlan.zhihu.com/p/500361660>

Zotero 检索引擎的使用 <https://zhuanlan.zhihu.com/p/268074292>。

Zotero 如何点击父文件夹时也同时显示子文件夹内容？<https://zhuanlan.zhihu.com/p/261375851>。

Zotero 总是自动把关键词添加成标签，这是哪个插件生成的，能关掉吗 <https://zhuanlan.zhihu.com/p/166085576>。

Zotero 不用安装其它软件清理删除条目后残留的 PDF 方法见 <https://zhuanlan.zhihu.com/p/356071795>。

Zotero 库中参考文献条目删除后，清除残留 `PDF` 的 `python` 脚本 <https://zhuanlan.zhihu.com/p/121770068>。

Zotero 插入文献后为什么显示为脚注或尾注？<https://zhuanlan.zhihu.com/p/114768349>。

如何在家愉快地使用 Zotero 通过远程访问收集知网数据？<https://zhuanlan.zhihu.com/p/110731827>。

Zotero 中安装了 `Zotfile` 后删除文献后清除 `PDF` 附件的小程序 <https://zhuanlan.zhihu.com/p/109531298>。

Zotero 中页码范围由“–”改为“-”见 <https://zhuanlan.zhihu.com/p/101884972>。

Zotero 中日期间隔符号由“–”改为“-”见 <https://zhuanlan.zhihu.com/p/366504227>。

Zotero 如何让 GB7714 2005 中 book（书籍）也显示页码 <https://zhuanlan.zhihu.com/p/429125051>。

Zotero 有权限时在导入 `CNKI` 题录时同时下载全文的方法 <https://zhuanlan.zhihu.com/p/90638718>。

Zotero 正文中如何实现作者（年代）的引文格式？<https://zhuanlan.zhihu.com/p/64852742>。

`Word` 中如何选择不同的 `csl` 文件？<https://zhuanlan.zhihu.com/p/64625049>。

Zotero 如何添加 `csl` 格式文件？<https://zhuanlan.zhihu.com/p/64624484>。

Zotero 中 `author`+`year` 格式下，`et al` 如何变为斜体？<https://zhuanlan.zhihu.com/p/64620849>。

Zotero 如何在 `Word` 中插入参考文献 <https://zhuanlan.zhihu.com/p/62931860>。

Zotero 引文下面有虚线下划线是怎么回事？<https://zhuanlan.zhihu.com/p/415999897>。

利用 `Word` 主控文档和 Zotero 实现一个文件多章参考文献（视频）见 <https://zhuanlan.zhihu.com/p/358442718>。

Zotero 如何禁用笔记中的拼写检查？<https://zhuanlan.zhihu.com/p/62780758>。

Zotero 如何批量删除条目中的笔记？<https://zhuanlan.zhihu.com/p/413057691>。

Zotero 文章题目大小写转为首字母大写的方法 <https://zhuanlan.zhihu.com/p/60651053>。

Zotero+`Word 2016` 参考文献中英文混排，解决 `et al` 和`等`的问题，另一思路 <https://zhuanlan.zhihu.com/p/60029219>。

`Word 2016` 中用 Zotero 插入的文献是类似乱码的域代码 <https://zhuanlan.zhihu.com/p/59995967>。

Zotero 结合`Zutilo`插件快速导出条目信息到剪贴板<https://zhuanlan.zhihu.com/p/597826044>。

360 安全浏览器如何安装 Zotero 插件 <https://zhuanlan.zhihu.com/p/59247644>。

如何设置 Zotero 生成的参考文献格式，刷新后不变（使用 Word 书目样式）？<https://zhuanlan.zhihu.com/p/58969571>。

Zotero 现在不能自动更新引文上标了是怎么回事？见 <https://zhuanlan.zhihu.com/p/354725834>。

`Word` 中没有 Zotero 工具条的解决办法之一 <https://zhuanlan.zhihu.com/p/58931999>。

Zotero 第三方工具条：（作者，年代）→ 作者（年代）快速切换，支持`WPS Office` <https://zhuanlan.zhihu.com/p/648205028>

`WPS Office`中使用 Zotero 插入参考文献不报错的方法<https://zhuanlan.zhihu.com/p/580194390>。

`WPS Office`中 Zotero 工具条显示全部图标的方法<https://zhuanlan.zhihu.com/p/580527678>。

WPS Office 中添加 Zotero 工具条的方法<https://zhuanlan.zhihu.com/p/580205995>。

Zotero+`Word 2016` 参考文献中英文混排，解决 `et al` 和`等`的问题 <https://zhuanlan.zhihu.com/p/58237038>。

Zotero 参考文献中论文题目部分单词实现斜体及上标、下标效果 <https://zhuanlan.zhihu.com/p/57638901>。

Zotero 通过 `DOI` 导入文献时能否带摘要 <https://zhuanlan.zhihu.com/p/56981700>。

`Word` 中加载 Zotero 工具条时提示加载宏的取消方法 <https://zhuanlan.zhihu.com/p/56551176>。

给 `Word` 中的 Zotero 设置快捷键 <https://zhuanlan.zhihu.com/p/55259481>。

</details>
