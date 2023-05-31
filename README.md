<!--
删除线 前后加 ~~
斜体 前后加 *
加粗 前后加 **
email 前后加 __
-->

# GB/T 7714—2015 相关的 CSL 样式

- GB/T 7714—2015《[信息与文献 参考文献著录规则](https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D8055ED3A7E05397BE0A0AB82A)》（[PDF](http://www.cessp.org.cn/a258.html)）
- GitHub 仓库：<https://github.com/redleafnew/Chinese-STD-GB-T-7714-related-csl>
- Gitee 镜像：<https://gitee.com/redleafnew00/Chinese-STD-GB-T-7714-related-csl>（自动同步）

## CSL文件名说明：

0开头为 [china-national-standard-gb-t-7714-2015-numeric.csl]或[001gb-t-7714-2015-author-date-bilingual.csl]基础修改的样式；

1开头为数字格式期刊样式；

2开头为作者年代期刊样式；

3开头为Note期刊样式；

4开头为学位论文样式；

5开头为其它样式。


## `csl` 文件的下载及添加

### 所有 `csl` 文件

![下载及使用动图](/img/download-csl.gif)

### 单个 `csl` 文件

![下载及使用动图](/img/download-s-csl.gif)


## 如何使用

**注意**：本仓库中的 CSL 样式在安装时会出现警告“‘`xxx.csl`’ 不是一个有效的 CSL 1.0.2 样式文件，你可能不能和 Zotero 一起正常工作”。这是因为该样式使用了 [`citeproc-js`](https://github.com/Juris-M/citeproc-js) 提供的 [CSL-M](https://citeproc-js.readthedocs.io/en/latest/csl-m/index.html) 扩展功能，属于正常现象。用户直接忽略即可。

如果使用了支持中文作者超过 `3` 个为`等`，英文为 `et al` 的 `csl`，但显示不正常需要在 `Zotero` 或 `JurisM` 中将英文文献 `Info` 中 `language` 字段修改为 `en-US`。

**将英文文献 `Info` 中 `language` 字段修改为 `en-US`。将英文文献 `Info` 中 `language` 字段修改为 `en-US`。将英文文献 `Info` 中 `language` 字段修改为 `en-US`。**

**不是`English`！不是`English`！不是`English`！**

**将中文文献 `Info` 中 `language` 字段修改为 `zh-CN`。**

或是需要将显示不正常的文献删除后重新插入。

如果显示仍然不正常，可以尝试在Zotero的Word工具条中点击`Document Preferences`，将`Language`切换一下（原来为`English(US)`改为`中文（中国大陆）`，原来`中文（中国大陆）`改为`English(US)`），再点击`OK`。

使用详情参见[基于`GB/T-7714-2015`的 `Style` 实现同时生成 `et al` 和`等`的方法](https://zhuanlan.zhihu.com/p/320253145)，
或[`Zotero` 修改版终于可以原生支持同时生成 `et al` 和`等`了](https://zhuanlan.zhihu.com/p/314928204)。

批量修改语言：可以使用 delitemwithatt 插件，到 <https://github.com/redleafnew/delitemwithatt> 下载插件并安装,
选择需要修改的条目后，右击，选择`自动设置语言字段`或`Set Language Field Automatically`即可。其他方法参见 <https://zhuanlan.zhihu.com/p/341989158>。

`Github` 文件的下载方法也可见 <https://jingyan.baidu.com/article/b87fe19eca972b1219356872.html>。

`Zotero` 添加 `csl` 格式文件也可见 <https://zhuanlan.zhihu.com/p/64624484>。

完整的 `Zotero` 的使用教程见：[《优雅地用 `Zotero` 进行文献管理和论文写作》](https://github.com/redleafnew/Zotero_introduction/releases)。

## 部分csl显示效果：

## [000gb-t-7714-2015-numeric-bilingual.csl]

GB/T 7714—2015 顺序编码制。支持双语：按照语言显示“等”或“et al.”。

显示效果：

> <sup>[1–12]</sup>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">[1] 库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2] FAN X, SOMMERS C H. Food irradiation research and technology[M/OL]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26[2014-06-26]. <a href="http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary">http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary</a>.</div>
    <div class="csl-entry">[3] 贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4] FOURNEY M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5] 武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J/OL]. 测绘科学, 2008, 33(5): 8-9[2009-10-25]. <a href="http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail">http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail</a>. DOI:<a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">10.3771/j.issn.1009-2307.2008.05.002</a>.</div>
    <div class="csl-entry">[6] MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. The genome of eucalyptus grandis[J/OL]. Nature, 2014, 510: 356-362[2014-06-25]. <a href="http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf">http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf</a>. DOI:<a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.</div>
    <div class="csl-entry">[7] 邓一刚. 全智能节电器: 200610171314.3[P]. 2006-12-13.</div>
    <div class="csl-entry">[8] TACHIBANA R, SHIMIZU S, KOBAYSHI S, et al. Electronic watermarking method and system: US6915001[P/OL]. 2005-07-05[2013-11-11]. <a href="http://www.google.co.in/patents/US6915001">http://www.google.co.in/patents/US6915001</a>.</div>
    <div class="csl-entry">[9] 中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R/OL]. (2012-01-16)[2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>.</div>
    <div class="csl-entry">[10] BAWDEN D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
    <div class="csl-entry">[11] 杨保军. 新闻道德论[D/OL]. 北京: 中国人民大学出版社, 2012[2012-11-01]. <a href="http://apabi.lib.pku.edu.cn/usp/pku/pub.mvc?pid=book.detail&#38;metaid=m.20101104-BPO-889-1023&#38;cult=CN">http://apabi.lib.pku.edu.cn/usp/pku/pub.mvc?pid=book.detail&#38;metaid=m.20101104-BPO-889-1023&#38;cult=CN</a>.</div>
    <div class="csl-entry">[12] CALMS R B. Infrared spectroscopic studies on solid oxygen[D]. Berkeley: Univ. of California, 1965.</div>
  </div>
</blockquote>


## [001gb-t-7714-2015-author-date-bilingual.csl]

GB/T 7714—2015 著者-出版年制。支持双语：按照语言显示“等”或“et al.”。

显示效果：

<blockquote>
  (Crane, 1972)<br>
  (王临惠 等, 2010)<br>
  (王临惠, 2010)<br>
  (Kennedy et al., 1975a)<br>
  (Kennedy et al., 1975b)<br>
  (中国社会科学院语言研究所词典编辑室, 1996)<br>
  (杨保军, 2012)<br>
  (Bawden, 2008)<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">王临惠, 2010. 从几组声母的演变看天津方言形成的自然条件和历史条件[C]//曹志耘. 汉语方言的地理语言学研究. 北京: 商务印书馆: 138.</div>
    <div class="csl-entry">王临惠, 支建刚, 王忠一, 2010. 天津方言的源流关系刍议[J]. 山西师范大学学报(社会科学版), 37(4): 147.</div>
    <div class="csl-entry">杨保军, 2012. 新闻道德论[D/OL]. 北京: 中国人民大学出版社[2012-11-01]. <a href="http://apabi.lib.pku.edu.cn/usp/pku/pub.mvc?pid=book.detail&#38;metaid=m.20101104-BPO-889-1023&#38;cult=CN">http://apabi.lib.pku.edu.cn/usp/pku/pub.mvc?pid=book.detail&#38;metaid=m.20101104-BPO-889-1023&#38;cult=CN</a>.</div>
    <div class="csl-entry">中国社会科学院语言研究所词典编辑室, 1996. 现代汉语词典[M]. 修订本. 北京: 商务印书馆.</div>
    <div class="csl-entry">BAWDEN D, 2008. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
    <div class="csl-entry">CRANE D, 1972. Invisible college[M]. Chicago: Univ. of Chicago Press.</div>
    <div class="csl-entry">KENNEDY W L, GARRISON R E, 1975a. Morphology and genesis of nodular chalks and hardgrounds in the Upper Cretaceous of southern England[J]. Sedimentology, 22: 311.</div>
    <div class="csl-entry">KENNEDY W L, GARRISON R E, 1975b. Morphology and genesis of nodular phosphates in the cenomanian of South-east England[J]. Lethaia, 8: 339.</div>
  </div>
</blockquote>


## [002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl]

1. 按照语言显示“等”或“et al.”；
2. 姓名取消全大写；
3. 仅纯电子资源（如网页、软件）显示引用日期和 URL；
4. 无 DOI。

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">[1] 库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2] Fan X, Sommers C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3] 贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4] Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5] 武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6] Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7] 中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R/OL]. (2012-01-16)[2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>.</div>
    <div class="csl-entry">[8] Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [003gb-t-7714-2015-numeric-bilingual-no-url-doi.csl]

1. 按照语言显示“等”或“et al.”；
2. 仅纯电子资源（如网页、软件）显示引用日期和 URL；
3. 无 DOI。

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">[1] 库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2] FAN X, SOMMERS C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3] 贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4] FOURNEY M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5] 武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6] MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7] 中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R/OL]. (2012-01-16)[2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>.</div>
    <div class="csl-entry">[8] BAWDEN D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [007gb-t-7714-2015-numeric-bilingual-no-uppercase.csl]

[000gb-t-7714-2015-numeric-bilingual.csl] 的修改版。

1. 按照语言显示“等”或“et al.”；
2. 姓名取消全大写。

显示效果：

> [1–8]

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">[1] 库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2] Fan X, Sommers C H. Food irradiation research and technology[M/OL]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26[2014-06-26]. <a href="http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary">http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary</a>.</div>
    <div class="csl-entry">[3] 贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4] Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5] 武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J/OL]. 测绘科学, 2008, 33(5): 8-9[2009-10-25]. <a href="http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail">http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail</a>. DOI:<a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">10.3771/j.issn.1009-2307.2008.05.002</a>.</div>
    <div class="csl-entry">[6] Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J/OL]. Nature, 2014, 510: 356-362[2014-06-25]. <a href="http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf">http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf</a>. DOI:<a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.</div>
    <div class="csl-entry">[7] 中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R/OL]. (2012-01-16)[2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>.</div>
    <div class="csl-entry">[8] Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [009gb-t-7714-2015-numeric-bilingual-no-uppercase-page-out.csl]

[007gb-t-7714-2015-numeric-bilingual-no-uppercase.csl] 基础上修改。引文页码在“[序号]”的外面。

1. 按照语言显示“等”或“et al.”；
2. 姓名取消全大写；
3. 引文页码在括号外。注：由于 CSL 功能的限制，这会导致同一处引用多篇文献时无法将全部序号置于括号内。

显示效果：

<blockquote>
  <sup>[1]</sup><br>
  <sup>[2]260</sup><br>
  <sup>[3]326-329</sup><br>
  <sup>[3],[1]</sup><br>
  <sup>[1],[2],[4]</sup><br>
  <sup>[1]–[3]</sup><br>
</blockquote>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">[1] 库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2] Fan X, Sommers C H. Food irradiation research and technology[M/OL]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26[2014-06-26]. <a href="http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary">http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary</a>.</div>
    <div class="csl-entry">[3] 贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4] Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5] 武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J/OL]. 测绘科学, 2008, 33(5): 8-9[2009-10-25]. <a href="http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail">http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail</a>. DOI:<a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">10.3771/j.issn.1009-2307.2008.05.002</a>.</div>
    <div class="csl-entry">[6] Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J/OL]. Nature, 2014, 510: 356-362[2014-06-25]. <a href="http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf">http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf</a>. DOI:<a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.</div>
    <div class="csl-entry">[7] 中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R/OL]. (2012-01-16)[2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>.</div>
    <div class="csl-entry">[8] Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [010gb-t-7714-2015-author-date-bilingual-no-uppercase.csl]

[china-national-standard-gb-t-7714-2015-author-date.csl] 的修改版。

1. 按照语言显示“等”或“et al.”；
2. 姓名取消全大写。

显示效果：

<blockquote>
  (Crane, 1972)<br>
  (王临惠 等, 2010)<br>
  (王临惠, 2010)<br>
  (Kennedy et al., 1975a)<br>
  (Kennedy et al., 1975b)<br>
  (中国社会科学院语言研究所词典编辑室, 1996)<br>
  (杨保军, 2012)<br>
  (Bawden, 2008)<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">王临惠, 2010. 从几组声母的演变看天津方言形成的自然条件和历史条件[C]//曹志耘. 汉语方言的地理语言学研究. 北京: 商务印书馆: 138.</div>
    <div class="csl-entry">王临惠, 支建刚, 王忠一, 2010. 天津方言的源流关系刍议[J]. 山西师范大学学报(社会科学版), 37(4): 147.</div>
    <div class="csl-entry">杨保军, 2012. 新闻道德论[D/OL]. 北京: 中国人民大学出版社[2012-11-01]. <a href="http://apabi.lib.pku.edu.cn/usp/pku/pub.mvc?pid=book.detail&#38;metaid=m.20101104-BPO-889-1023&#38;cult=CN">http://apabi.lib.pku.edu.cn/usp/pku/pub.mvc?pid=book.detail&#38;metaid=m.20101104-BPO-889-1023&#38;cult=CN</a>.</div>
    <div class="csl-entry">中国社会科学院语言研究所词典编辑室, 1996. 现代汉语词典[M]. 修订本. 北京: 商务印书馆.</div>
    <div class="csl-entry">Bawden D, 2008. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
    <div class="csl-entry">Crane D, 1972. Invisible college[M]. Chicago: Univ. of Chicago Press.</div>
    <div class="csl-entry">Kennedy W L, Garrison R E, 1975a. Morphology and genesis of nodular chalks and hardgrounds in the Upper Cretaceous of southern England[J]. Sedimentology, 22: 311.</div>
    <div class="csl-entry">Kennedy W L, Garrison R E, 1975b. Morphology and genesis of nodular phosphates in the cenomanian of South-east England[J]. Lethaia, 8: 339.</div>
  </div>
</blockquote>


## [011gb-t-7714-2015-author-date-bilingual-no-uppercase-no-url-doi-full-width-parentheses.csl]

[010gb-t-7714-2015-author-date-bilingual-no-uppercase.csl] 的修改版：

1. 按照语言显示“等”或“et al.”；
2. 姓名取消全大写；
3. 仅纯电子资源（如网页、软件）显示引用日期和 URL；
4. 无 DOI；
5. 正文的引用使用全角括号“（）”。

显示效果：

<blockquote>
  （Crane, 1972）<br>
  （王临惠 等, 2010）<br>
  （王临惠, 2010）<br>
  （Kennedy et al., 1975a）<br>
  （Kennedy et al., 1975b）<br>
  （中国社会科学院语言研究所词典编辑室, 1996）<br>
  （杨保军, 2012）<br>
  （Bawden, 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">王临惠, 2010. 从几组声母的演变看天津方言形成的自然条件和历史条件[C]//曹志耘. 汉语方言的地理语言学研究. 北京: 商务印书馆: 138.</div>
    <div class="csl-entry">王临惠, 支建刚, 王忠一, 2010. 天津方言的源流关系刍议[J]. 山西师范大学学报(社会科学版), 37(4): 147.</div>
    <div class="csl-entry">杨保军, 2012. 新闻道德论[D]. 北京: 中国人民大学出版社.</div>
    <div class="csl-entry">中国社会科学院语言研究所词典编辑室, 1996. 现代汉语词典[M]. 修订本. 北京: 商务印书馆.</div>
    <div class="csl-entry">Bawden D, 2008. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
    <div class="csl-entry">Crane D, 1972. Invisible college[M]. Chicago: Univ. of Chicago Press.</div>
    <div class="csl-entry">Kennedy W L, Garrison R E, 1975a. Morphology and genesis of nodular chalks and hardgrounds in the Upper Cretaceous of southern England[J]. Sedimentology, 22: 311.</div>
    <div class="csl-entry">Kennedy W L, Garrison R E, 1975b. Morphology and genesis of nodular phosphates in the cenomanian of South-east England[J]. Lethaia, 8: 339.</div>
  </div>
</blockquote>


## [013gb-t-7714-2015-numeric-aulower-bilan-ce.csl]

[002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl] 基础上修改，添加平行语言支持，即部分理工科期刊（如[《中国农业科学》](http://www.chinaagrisci.com/CN/column/column5.shtml)）对于中文文献要求在中文文献后添加其英文的翻译，使用方法见 `Zotero` 生成双语参考文献的变通实现方法（含视频讲解）<https://zhuanlan.zhihu.com/p/282826403>。作者为首字母大写，支持中文作者超过 `3` 个为“`等`”，英文为“`et al`”。文章的题目大小写与 `Zotero` 中的 `Title` 字段一致，不显示 `URL` 和 `DOI`。

该样式有较多 bug，不建议在此基础上修改。

显示效果：

> [1–4]

> [1] Zhang B, Qi X, Mao J, et al. Trehalose and alginate oligosaccharides affect the stability of myosin in whiteleg shrimp (Litopenaeus vannamei): The water-replacement mechanism confirmed by molecular dynamic simulation[J]. LWT - Food Science and Technology, 2020, 127: 109393.<br>
> [2] 唐霄, 孙杨赢, 江雪婷, 等. 不同蛋白酶制备鹅肉呈味肽的对比分析[J]. 食品科学, 2019, 40(22): 141–146.<br>
T ng X, Sun Y Y, Jiang X T, et al. Comparative analysis of flavor peptides prepared by enzymatic hydrolysis of goosemeat with different proteases [J]. Food Science, 2019,40 (22): 141-146.<br>
> [3] Wu L, Zhao W, Yang R, et al. Aggregation of egg white proteins with pulsed electric fields and thermal processes[J]. Journal of the Science of Food and Agriculture, 2016, 96(10): 3334–3341.<br>
> [4] 朱磊, 张馨心, 谢艳英, 等. 类蛋白反应的作用机制及其对海洋源蛋白修饰的研究进展[J]. 食品工业科技, 2020, 41(09): 362–367.<br>
Zhu L, Zhang X X, Xie Y Y, et al.  Research progress on mechanism of plastein reactions and its modification function of marine proteins [J]. Science and Technology of Food Industry, 2020, 41 (09): 362–367.

## [014gb-t-7714-2015-numeric-auup-bilan-ce.csl]

[013gb-t-7714-2015-numeric-aulower-bilan-ce.csl] 基础上修改，支持平行语言显示，即部分理工科期刊（如[《中国农业科学》](http://www.chinaagrisci.com/CN/column/column5.shtml)）对于中文文献要求在中文文献后添加其英文的翻译，使用方法见 `Zotero` 生成双语参考文献的变通实现方法（含视频讲解）<https://zhuanlan.zhihu.com/p/282826403>，作者改为全部字母大写，支持中文作者超过 `3` 个为“`等`”，英文为“`et al`”。文章的题目大小写与 `Zotero` 中的 `Title` 字段一致，不显示 `URL` 和 `DOI`。

该样式有较多 bug，不建议在此基础上修改。

显示效果：

> [1–4]

> [1] ZHANG B, QI X, MAO J, et al. Trehalose and alginate oligosaccharides affect the stability of myosin in whiteleg shrimp (Litopenaeus vannamei): The water-replacement mechanism confirmed by molecular dynamic simulation[J]. LWT - Food Science and Technology, 2020, 127: 109393.<br>
> [2] 唐霄, 孙杨赢, 江雪婷, 等. 不同蛋白酶制备鹅肉呈味肽的对比分析[J]. 食品科学, 2019, 40(22): 141–146<br>
TANG X, SUN Y Y, JIANG X T, et al. Comparative analysis of flavor peptides prepared by enzymatic hydrolysis of goosemeat with different proteases [J]. Food Science, 2019,40 (22): 141-146.
> [3] WU L, ZHAO W, YANG R, et al. Aggregation of egg white proteins with pulsed electric fields and thermal processes[J]. Journal of the Science of Food and Agriculture, 2016, 96(10): 3334–3341.<br>
> [4] 朱磊, 张馨心, 谢艳英, 等. 类蛋白反应的作用机制及其对海洋源蛋白修饰的研究进展[J]. 食品工业科技, 2020, 41(09): 362–367<br>
ZHU L, ZHANG X X, XIE Y Y, et al.  Research progress on mechanism of plastein reactions and its modification function of marine proteins [J]. Science and Technology of Food Industry, 2020, 41 (09):  362–367.


## [015jm-chinese-std-gb-t-7714-2005-revised.csl]

[jm-chinese-std-gb-t-7714-2005.csl](https://github.com/Juris-M/jm-styles/blob/master/jm-chinese-gb7714-2005-numeric.csl) 的修改版，删除了页码冒号前面的空格，无卷时年代后面直接括号期形式。

该样式有较多 bug，不建议在此基础上修改。

显示效果：

> [1–4]

> [1]	ZHANG B, QI X, MAO J, et al. Trehalose and alginate oligosaccharides affect the stability of myosin in whiteleg shrimp (Litopenaeus vannamei): The water-replacement mechanism confirmed by molecular dynamic simulation [J]. LWT - Food Science and Technology, 2020, 127: 109393.<br>
> [2]	唐霄, 孙杨赢, 江雪婷, 等. 不同蛋白酶制备鹅肉呈味肽的对比分析[J]. 食品科学, 2019, 40(22): 141–146.<br>
> [3]	WU L, ZHAO W, YANG R, et al. Aggregation of egg white proteins with pulsed electric fields and thermal processes [J]. Journal of the Science of Food and Agriculture, 2016, 96(10): 3334–3341.<br>
> [4]	朱磊, 张馨心, 谢艳英, 等. 类蛋白反应的作用机制及其对海洋源蛋白修饰的研究进展[J]. 食品工业科技, 2020, 41(09): 362–367.


## [101chinese-medical-association.csl]

中华医学会系列杂志样式。[000gb-t-7714-2015-numeric-bilingual.csl] 基础上修改，作者为大写，支持中文作者超过 3 个为“`等`”，英文为“`et al`”。英文期刊名称为缩写，缩写使用方法：在 Word 的 Zotero 工具条上点击 `Document preferences`，选择`Chinese Medical Association（numeric, Chinese`后，点击 `Use MEDLINE journal abbreviations` 前的复选框，使之选中，则使用 MEDLINE 的缩写格式；如果这个缩写格式不适合，不要选中 `Use MEDLINE journal abbreviations`，在 `Zotero` 中 `Info` 下面的 `Journal Abbr` 字段内填写杂志的缩写，则会调用自已填写的杂志缩写，`Juris—M` 对杂志缩写处理选项更多。

显示效果：

> ```
> [1]   [2,3]   [4]
> ```

> [1] GUDERLEY H, BLIER P. Thermal acclimation in fish: conservative and labile properties of swimming muscle[J]. Can. J. Zool., 2011, 66(5). DOI:10.1139/z88-162.	<br>
> [2] BANOVIC M, SVEINSDÓTTIR K. Importance of Being Analogue: Female Attitudes Towards Meat Analogue Containing Rapeseed Protein[J]. Food Control, 2021, 123: 107833. DOI:10.1016/j.foodcont.2020.107833.	<br>
> [3] 杨赫鸿, 李沛军, 孔保华, 等. 低场核磁共振技术在肉品科学研究中的应用[J]. 食品工业科技, 2012(13): 400–405.<br>
> [4] ELMASRY G, SUN D-W, ALLEN P. Non-destructive determination of water-holding capacity in fresh beef by using NIR hyperspectral imaging[J]. Food Res. Int., 2011, 44(9): 2624–2633. DOI:10.1016/j.foodres.2011.05.001.<br>

## [102transactions-of-the-chinese-society-of-agricultural-engineering.csl]

与[014gb-t-7714-2015-numeric-auup-bilan-ce.csl] 基本相同，修改了 id，将代码中显示 `OL` 部分注释，用于[《农业工程学报》](http://www.tcsae.org/nygcxb/home)样式
使用方法见 `Zotero` 生成双语参考文献的变通实现方法（含视频讲解）<https://zhuanlan.zhihu.com/p/282826403>，作者改为全部字母大写，支持中文作者超过 `3` 个为“`等`”，英文为“`et al`”。文章的题目大小写与 `Zotero` 中的 `Title` 字段一致，不显示 `URL` 和 `DOI`。

存在问题：中文翻译后面会多一个空行，可以在文章定稿后通过在 Word 中查找 `^l.^p` 替换为 `^p` 批量删除；如果要设置缩进悬挂，需要将里面的软回车替换为硬回车，方法是 Word 中查找 `^l` 替换为 `^p` 批量替换。

空行删除及缩进、悬挂设置：
<!--![空行删除及缩进、悬挂设置-->
![空行删除及缩进、悬挂设置](/img/blank-line-remove.gif "Title")
显示效果：

> [1]<br>
> [2]<br>
> [3]<br>
> [4]<br>

> [1] 张若兵, 陈杰, 肖健夫, 等. 高压脉冲电场设备及其在食品非热处理中的应用[J]. 高电压技术, 2011, 37(03): 777–786.
ZHANG RUOBING, CHEN JIE, XIAO JIANFU, et al. Pulsed electric fields system and its application in non-thermal food processing[J]. High Voltage Engineering, 2011, 37(03): 777–786. (in Chinese with English abstract). <br>
> [2] LAN M, LI L, PENG X, et al. Effects of different lipids on the physicochemical properties and microstructure of pale, soft and exudative (PSE)-like chicken meat gel[J]. LWT, 2021: 111284.<br>
> [3] 梁荣蓉, 李楠, 王仁欢, 等. 夏季类 PSE 鸡肉判定标准的建立及其品质特征[J]. 食品与发酵工业, 2014, 40(8): 231–237.
LIANG RONGRONG, LI NAN, WANG RENHUAN, et al. The establishmentof evaluating PSE-like chicken meat in summer. Food and Fermentation Industries, 2014, 40(08): 231–237. (in Chinese with English abstract). <br>
> [4] HARISH VAGADIA B, VANGA S K, SINGH A, et al. Effects of thermal and electric fields on soybean trypsin inhibitor protein: A molecular modelling study[J]. Innovative Food Science & Emerging Technologies, 2016, 35: 9–20.

## [103ieee-bl.csl]

[官方 IEEE](https://github.com/citation-style-language/styles/blob/master/ieee.csl) 基础上修改。文内数字引用为上标格式，显示全部作者，中文最后一个作者前显示`和`，英文文献显示 `and`，英文文献条目需要在 `Zotero` 中将文献条目语言修改为 `en-US`。

显示效果：

> 种电泳法分析丁香<sup>[1]</sup><br>
> 测试<sup>[2]</sup><br>
> 上标<sup>[3]</sup><br>
> 英文<sup>[4]</sup><br>


> [1]	谢德仁, 郑登津和崔宸瑜, 《控股股东股权质押是潜在的“DiLei”吗?——基于股价崩盘风险视角的研究》, 管理世界, 期 05, 页 128–140, 188, 2016, doi: 10/gmxk5j.<br>
> [2]	C. Bonell, A. Oakley, J. Hargreaves, V. Strange, and R. Rees, “Research methodology - Assessment of generalisability in trials of health interventions: suggested framework and systematic review”, Bmj-British Medical Journal, vol. 333, no. 7563, pp. 346–349, Aug. 2006, doi: 10.1136/bmj.333.7563.346.<br>
> [3]	金红兰和金龙勋, 《技术创新背景下的食品产业现状与发展趋势》, 粮食科技与经济, 卷 46, 期 03, 页 37–39, 2021.<br>
> [4]	C. M. Lyles et al., “Best-evidence interventions: Findings from a systematic review of HIV behavioral interventions for US populations at high risk, 2000-2004”, American Journal of Public Health, vol. 97, no. 1, pp. 133–143, Jan. 2007, doi: 10.2105/AJPH.2005.076182.<br>


## [104acta-physica-sinica.csl]
《物理学报》<https://wulixb.iphy.ac.cn/news/tougaoxuzhi.htm>样式，根据[000gb-t-7714-2015-numeric-bilingual.csl]修改。对应官方仓库为<https://github.com/citation-style-language/styles/blob/master/acta-physica-sinica.csl>或<https://github.com/redleafnew/Chinese-STD-GB-T-7714-related-csl/blob/main/105acta-physica-sinica-zotero-res.csl>，CSL官方仓库要求将期刊对应的翻译放入`Extra`字段中，并且前面加`original-title: `。

存在问题：

1.期刊对应的英文翻译请自行翻译，并添加到`Short Title`字段中，其实现的原理见<https://zhuanlan.zhihu.com/p/282826403>；斜体和加粗需要在相应字段前后加`<i></i>`和`<b></b>`，详见https://zhuanlan.zhihu.com/p/57638901。<br>
2.学位论文格式中要求有论文题目，但给的例子中没有，因此没有；如果是国外学位论文请在Type中注明学位论文类型如：M.S. Thesis或Ph. D. Dissertation。<br>
3.会议论文日期无法是日期范围：只能在Extra中输入<code>Date: 2019年09月21-23日</code>或<code>Issued: 2019-09-21/2019-09-23</code>，最终显示为：<code>2019-09-21/23</code>。<br>
4.其它文献类型待测试。

显示效果：

> ```
 论文<sup>[1–3]</sup> 书籍<sup>[4]</sup> <br>
> 专利<sup>[5]</sup>网页<sup>[6]</sup>学位论文 <sup>[7] </sup><br>
> 书<sup>[8] </sup>会议论文<sup>[9]</sup> <br>

>[1]	Sun Q C, Wang G Q 2008 Acta Phys. Sin. 57 4667(in Chinese) [孙其诚, 王光谦 2008 物理学报 57 4667]<br>
>[2]	Shahverdiev E M, Shore K A 2005 Phys. Rev. E 71 016201<br>
>[3]	Eckertova L(translated by Wang G Y)1986 Thin Film Physics (Beijing: Science Press) pp110—113(in Chinese) [埃克托瓦L著 (王广阳译) 1986 薄膜物理学 (北京: 科学出版社)第110–113页]<br>
>[4]	Feng D, Jin G J 2003 Condensed Matter Physics (Volume 1) (Beijing: Higher Education Press)(in Chinese) [冯端, 金国钧 2003 凝聚态物理学（上卷） (北京: 高等教育出版社)第341页]<br>
>[5]	Zhong C,Zhao D S,Liu Y H,Bao J L 2021 	CN201910789365.X(in Chinese) [钟成, 赵德双, 刘要红, 包金龙 2021 CN201910789365.X]<br>
>[6]	High-Precision Software Directory Bailey D B http://crd.lbl.gov/~dhbailey/mpdist/ [2010-08-11]<br>
>[7]	Ma C H 2017 Ph.D. Dissertation  (Changsha: National University of Defense Technology)(in Chinese) [马聪慧 2017 博士学位论文 (长沙: 国防科技大学)]<br>
>[8]	Bloembergen N 1965 Nonlinear optics (New York: Benjamin) pp12–20<br>
>[9]	Huang J,Yan S G,Zhang B X,Zhang M 2019 Proceedings of the 2019 National Acoustical Congress  Shenzhen，China, September 21-23,2019 P261(in Chinese) [黄娟, 阎守国, 张碧星, 张敏 2019 2019年全国声学大会论文集 中国：深圳, 2019-09-21第261–262页]<br>
> ```

## [106journal-of-inorganic-materials.csl](106journal-of-inorganic-materials.csl)

《无机材料学报》（<http://www.jim.org.cn/CN/column/item6.shtml>）期刊用，ISSN:1000-324X，CN:31-1363/TQ。

作者`(姓前名后，名缩写，全部大写，三人缩写，et al斜体)`. 题名`(第一个单词首字母大写)`. *期刊名*`(斜体)`, 出版年, **卷(期):**`(加粗)` 起始页—终止页。

显示效果：

> [1–5]
>
> [1] FANG X, QU W, QIN T, *et al.* Abatement of Nitrogen Oxides via Selective Catalytic Reduction over Ce1–W1 Atom-Pair Sites. *Environmental Science & Technology*, 2022, **56(10):** 6631–6638. </br>
> [2] FANG X, LIU Y, CEN W, *et al.* Birnessite as a Highly Efficient Catalyst for Low-Temperature NH3-SCR: The Vital Role of Surface Oxygen Vacancies. *Industrial & Engineering Chemistry Research*, 2020, **59(33):** 14606–14615. </br>
> [3] ZHANG J, ZHANG L, CHENG Y, *et al.* Construction of oxygen vacancies in δ-MnO2 for promoting low-temperature toluene oxidation. *Fuel*, 2023, **332:** 126104. </br>
> [4] FENG X, GUO J, WEN X, *et al.* Enhancing performance of Co/CeO2 catalyst by Sr doping for catalytic combustion of toluene. *Applied Surface Science*, 2018, **445:** 145–153. </br>
> [5] HU Y, ZHANG L, ZHANG J, *et al.* High catalytic performance of neodymium modified Co3O4 for toluene oxidation. *Journal of Rare Earths*, 2022. DOI: [10.1016/j.jre.2022.09.019](https://doi.org/10.1016/j.jre.2022.09.019). </br>
> [6] FANG X, LIU Y, CHEN L, *et al.* Influence of surface active groups on SO2 resistance of birnessite for low-temperature NH3-SCR. *Chemical Engineering Journal*, 2020, **399:** 125798.

## [107chinese-journal-of-cardiology.csl]

《[中华心血管病杂志](http://www.cjcv.org.cn/)》 样式，在 [chinese-gb7714-2005-numeric](https://github.com/citation-style-language/styles/blob/master/chinese-gb7714-2005-numeric.csl) 的基础上进行修改：

1. 默认语言为英文，需要在中文文献的 `language` 域填写 `zh-CN`；
2. 按照语言显示“等”或“et al.”；
3. 姓名取消全大写；
4. 西文的名无空格；
5. 仅纯电子资源（如网页、软件）显示载体类型标识“OL”、“引用日期”和 URL；
6. 页码的冒号前无空格；
7. 优先显示 DOI。

显示效果：

> <sup>[1-4]<sup>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">[1] 伊宪华, 韩雅玲, 李毅, 等. 介入治疗开通慢性完全闭塞病变的长期临床疗效[J]. 中华心血管病杂志, 2009, 37(9):773-776. DOI: <a href="https://doi.org/10.3760/cma.j.issn.0253-3758.2009.09.002">10.3760/cma.j.issn.0253-3758.2009.09.002</a>.</div>
    <div class="csl-entry">[2] Wilde AAM, Ackerman MJ. Beta-blockers in the treatment of congenital long QT syndrome: is one beta-blocker superior to another?[J]. J Am Coll Cardiol, 2014, 64(13):1359-1361. DOI: <a href="https://doi.org/10.1016/j.jacc.2014.06.1192">10.1016/j.jacc.2014.06.1192</a>.</div>
    <div class="csl-entry">[3] Jablonski S. Online multiple congenital anomaly/mental retardation (MCA/MR) syndromes[DB/OL]. Bethesda (MD): National Library of Medicine (US), 1999[2002-12-12]. <a href="http://www.nlm.nih.gov/mesh/jablonski/syndrome_title.html">http://www.nlm.nih.gov/mesh/jablonski/syndrome_title.html</a>.</div>
    <div class="csl-entry">[4] 卫生部心血管病防治中心. 中国心血管病报告 2011[M]. 北京: 中国大百科全书出版社, 2012.</div>
  </div>
</blockquote>


## [108journal-of-nuclear-agricultural-sciences.csl]

[405nanjing-agricultural-university-numeric.csl]修改，显示全部作者。适用于[《核农学报》](<https://www.hnxb.org.cn/CN/column/item8.shtml>)的样式。

显示效果：

> <sup>[1-4]<sup>

<blockquote>
  <div class="csl-bib-body">
<div class="csl-entry">[1]	Koyama H, Akolkar D B, Shiokai T, Nakaya M, Piyapattanakorn S, Watabe S. The occurrence of two types of fast skeletal myosin heavy chains from abdominal muscle of kuruma shrimp Marsupenaeus japonicus and their different tissue distribution[J]. Journal of Experimental Biology, 2012, 215(1): 14-21.</div>
    <div class="csl-entry">
[2]	刘品, 陈静. 低温等离子体对南美白对虾防黑变及品质的研究[J]. 食品工业, 2018, 39(11): 184-187.</div>
    <div class="csl-entry">
[3]	Arcena M R, Leong S Y, Then S, Hochberg M, Sack M, Mueller G, Sigler J, Kebede B, Silcock P, Oey I. The effect of pulsed electric fields pre-treatment on the volatile and phenolic profiles of Merlot grape musts at different winemaking stages and the sensory characteristics of the finished wines[J]. Innovative Food Science & Emerging Technologies, 2021, 70: 102698.</div>
    <div class="csl-entry">
[4]	孙皓, 徐幸莲, 王鹏. 鸡肉类 PSE 肉与正常肉功能特性比较研究[J]. 食品科学, 2013, 34(21): 60-63.</div>
  </div>
</blockquote>

## [109chinese-public-administration.csl]
[《中国行政管理》](http://www.cpaj.com.cn/ggzz_jj.shtml)样式，[002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl]基础上修改。

1. 按照语言显示“等”或“et al.”；
2. 姓名缩写不加点；
3. 中文不加页码；
4. 英文题目为首字母大写，包括of, to等，需要手动改为小写；英文期刊名为斜体；
5. 中文显示文献标识，如[J]。

显示效果：

> <sup>[1-4]<sup>

> [1]	Jansen J, de Vries S, van Schaik P. The Contextual Benchmark Method: Benchmarking E-Government Services. *Government Information Quarterly*, 2010, 27(3): 213-219. </br>
> [2]	尹涛, 刘敬科, 赵思明, 等. 冷藏和热加工对鲢肌肉主要滋味活性物质的影响[J]. 华中农业大学学报, 2015,（01）. </br>
> [3]	Jiang J, Meng T, Zhang Q. From Internet To Social Safety Net: The Policy Consequences Of Online Participation In China. *Governance*, 2019, 32(3): 531-546. </br>
> [4]	李震国, 端利涛, 吕本富. 智能化系统建设中的实用伦理规则设计原则[J]. 中国行政管理, 2022,（6）.</br>

## [110food-science.csl]

[《食品科学》](https://www.spkx.net.cn/journalx_spkx/authorLogOn.action)样式，[000gb-t-7714-2015-numeric-bilingual.csl]基础上修改，书籍显示页码。如果引用国家标准、书籍需要显示页码，可以在Extra字段中输入`pages: 2-3`。

显示效果：

> <sup>[1-4]<sup>


> [1]	陈宏强. 异质鸡胸肉肉糜加工品质及其改善研究[D]. 南京: 南京农业大学, 2018.</br>
> [2]	中华人民共和国农业部. 鲜蛋等级规格：NY/T 1758-2009[S]. 2009: 1.</br>
> [3]	SHAQOUR A, ONO T, HAGISHIMA A, et al. Electrical demand aggregation effects on the performance of deep learning-based short-term load forecasting of a residential building[J/OL]. Energy and AI, 2022, 8: 100141[2022-04-29]. https://api.elsevier.com/content/article/PII:S2666546822000052?httpAccept=text/xml. DOI:10.1016/j.egyai.2022.100141.</br>
> [4]	赵宇鹏, 卜坚珍, 于立梅, 等. 鸡肉的营养成分和质构特性研究[J/OL]. 食品安全质量检测学报, 2016, 10(7): 4096-4100[2018-06-29]. http://www.cnki.net/KCMS/detail/detail.aspx?QueryID=0&CurRec=25&filename=SPAJ201610041&dbname=CJFDLAST2016&dbcode=CJFQ&pr=&urlid=&yx=&v=MDk2NzhSOGVYMUx1eFlTN0RoMVQzcVRyV00xRnJDVVJMS2ZZZVJtRnlqa1Vyek9OajNLWkxHNEg5Zk5yNDlCWlk=.</br>


## [111acta-agriculurae-boreali-sinica.csl]
[013gb-t-7714-2015-numeric-aulower-bilan-ce.csl]基础上修改，[华北农学报](http://www.hbnxb.net/CN/column/column7.shtml#)样式，添加平行语言支持，即对于中文文献要求在中文文献后添加其英文的翻译，使用方法见 `Zotero` 生成双语参考文献的变通实现方法（含视频讲解）<https://zhuanlan.zhihu.com/p/282826403>。作者为首字母大写，显示全部作者和DOI，

存在问题：中文翻译后面会多一个空行，可以在文章定稿后通过在 Word 中查找 `^l.^p` 替换为 `^p` 批量删除；如果要设置缩进悬挂，需要将里面的软回车替换为硬回车，方法是 Word 中查找 `^l` 替换为 `^p` 批量替换。

空行删除及缩进、悬挂设置：
<!--![空行删除及缩进、悬挂设置-->
![空行删除及缩进、悬挂设置](/img/blank-line-remove.gif "Title")

该样式有较多 bug，不建议在此基础上修改。

显示效果：

> <sup>[1-4]<sup>


> [1] 闫留延, 李剑峰, 张世文, 张博, 王永芳, 张小梅, 祖超凡, 王振山, 桑璐曼, 何占祥, 贾小平, 董志平. 谷子SiPRR73基因的光温调控模式及非生物胁迫响应特性[J]. 华北农学报, 2022, 37(4): 11-19. doi: 10.7668/hbnxb.20193022.
Zhao X, Zhao Q P, Xu C Y, Wang J, Zhu J D, Shang B S, Zhang X. Phot2-regulated relocation of NPH3 mediates phototropic response to high-intensity blue light in Arabidopsis thaliana[J]. J Integr Plant Biol, 2018, 60(7):562-577.</br>

> [2] 赵长江, 都梦翔, 宋巨奇, 徐尚缘, 贺琳, 徐晶宇, 杨克军, 李佐同. 玉米NRL基因家族鉴定与逆境表达分析[J]. 华北农学报, 2022, 37(4): 1-10. doi: 10.7668/hbnxb.20192757.
Zhao X, Zhao Q P, Xu C Y, Wang J, Zhu J D, Shang B S, Zhang X. Phot2-regulated relocation of NPH3 mediates phototropic response to high-intensity blue light in Arabidopsis thaliana[J]. J Integr Plant Biol, 2018, 60(7):562-577.</br>

> [3] 李乾, 梁利群, 艾克达·热合曼, 孙博, 张立民, 董志国, 常玉梅. 不同盐度、碱度、pH值对瓦氏雅罗鱼精子活力及其受精率的影响[J]. 华北农学报, 2021, 36(S1): 381-389. doi: 10.7668/hbnxb.20192551.
Zhao X, Zhao Q P, Xu C Y, Wang J, Zhu J D, Shang B S, Zhang X. Phot2-regulated relocation of NPH3 mediates phototropic response to high-intensity blue light in Arabidopsis thaliana[J]. J Integr Plant Biol, 2018, 60(7):562-577.</br>

> [4] Jha M, Gassman P W, Secchi S, Gu R, Arnold J. Effect of watershed subdivision on SWAT flow, sediment, and nutrient predictions[J]. JAWRA Journal of the American Water Resources Association, 2004, 40(3): 811-825. doi: 10.1111/j.1752-1688.2004.tb04460.x.</br>

## [112scientia-agricultura-sinica.csl]

[《中国农业科学》](https://www.chinaagrisci.com/CN/column/column6.shtml)样式，显示全部作者，作者首字母大写，名缩写。中文文献后面跟随英文翻译。

使用注意：1. 中文文献需要在 `language` 字段填写 `zh` 或 `zh-CN`。英文文献需要在 `language` 字段填写 `en` 或 `en-US`。
2. 中文文献需要将作者姓名、标题、期刊、出版地、出版社的英文翻译分别填写在 `extra` 中的 `original-author`, `original-title`, `original-container-title`, `original-publisher-place`, `original-publisher` 字段，比如
```
original-author: Ye || Gong Yin
original-author: Hu || Cui
original-author: Shu || Qing Yao
original-title: The development of transgenic rice resistant to insect pests and its wise and sustainable use
original-container-title: Agricultural Development and Research in the 21st Century
original-publisher-place: Beijing
original-publisher: China Environmental Science Press
```
存在问题：中文翻译后面会多一个空行，可以在文章定稿后通过在 Word 中查找 `^l^p` 替换为 `^p` 批量删除。

显示效果：

<blockquote>
<sup>[1]</sup>  <sup>[2]</sup><br>
<sup>[3]</sup> <sup>[4]</sup><br>
</blockquote>

<blockquote>
[1]	金声琅, 殷涌光, 王莹. 脉冲电场协同加热对乳清蛋白凝胶质构特性的影响. 农业机械学报, 2013, 44(1): 142-146.

Jin S, Yin Y, Wang Y. Effects of combined pulsed electric field and heat treatment on texture characteristics of whey protein gels. Transactions of the Chinese Society for Agricultural Machinery, 2013, 44(1): 142-146. (in Chinese)

[2]	董爽. 玉米醇溶蛋白的低温等离子体改性及其性质、结构和应用研究. 天津: 天津科技大学, 2018.

Dong S. Effects of peanut oil on gel properties and microstructure of PSE-like chicken meat. Tianjin: Tianjin University of Science and Technology, 2018. (in Chinese)


[3]	艾媒咨询. 2022年中国种草经济市场及消费者行为监测报告. 2022: 26.

iResearch. Monitoring report on China’s grass planting economy market and consumer behavior in 2022. 2022: 26. (in Chinese)

[4]	Zhao X, Chen X, Han M Y, Qian C, Xu X L, Zhou G H. Application of isoelectric solubilization/precipitation processing to improve gelation properties of protein isolated from pale, soft, exudative (PSE)-like chicken breast meat. LWT - Food Science and Technology, 2016, 72: 141-148.


</blockquote>

## [201comparative-economic-and-social-systems.csl]

[《经济社会体制比较》](http://jjsh.cbpt.cnki.net/EditorGN/index.aspx?t=1)样式，[010gb-t-7714-2015-author-date-bilingual-no-uppercase.csl] 基础上修改，文末中文文献在前，英文在后。作者为首字母大写，支持中文作者超过 3 个为“`等`”，英文为“`et al`”。

存在问题：英文期刊题目要求为所有实词单词首字母大写，但由于采用了两个 `layout`，在 `csl` 中设置为`text-case="capitalize-first"`时
所有单词都会大写，设置为`text-case="title"`时仅第一个单词和最后一个单词大写，因此现在没有设置，大小写与 `Zotero` 中 `Title` 字段相同。

显示效果：

> ```
> （王琰等, 2021）
> （唐霄等, 2019; Yang et al., 2015）
> （Cavanna et al., 2019）
> （何宇超等, 2020）
> ```

> 何宇超、程琪琪、吴莉等, 2020：“高压脉冲电场法提取耐辐射奇球菌中类胡萝卜素的研究”，《核农学报》，2020, 02: 315–321。<br>
> 唐霄、孙杨赢、江雪婷等, 2019：“不同蛋白酶制备鹅肉呈味肽的对比分析”，《食品科学》，2019, 22: 141–146。<br>
> 王琰、 曾新安、蔡锦林, 2021：“不同的终止发酵的方法制备低醇菠萝酒”，《现代食品科技》，2021: 1–7。<br>
> Cavanna D., Zanardi S., Dall’Asta C., et al., 2019. “Ion mobility spectrometry coupled to gas chromatography: A rapid tool to assess eggs freshness.” *Food Chemistry*. 271: 691–696.<br>
> Yang H., Han M., Wang X., et al., 2015. “Effect of high pressure on cooking losses and functional properties of reduced-fat and reduced-salt pork sausage emulsions.” *Innovative Food Science and Emerging Technologies*. 29(1): 125–133.<br>


## [202journal-of-management-world.csl]

《[管理世界](http://www.mwm.net.cn/web/)》样式。

文献语言默为英文，中文文献需要设置 `language` 字段为 `zh` 或 `zh-CN`。

显示效果：

<blockquote>
  （戴治勇，2014）<br>
  （林乐、谢德仁，2017）<br>
  （王化成等，2015）<br>
  （戴治勇，2014；林乐、谢德仁，2017；王化成等，2015）<br>
  （Weiss，2010）<br>
  （Kang and Kim，2008）<br>
  （Banker et al.，2013）<br>
  （Weiss，2010；Kang and Kim，2008；Banker et al.，2013）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">（1）戴治勇：《法治、信任与企业激励薪酬设计》，《管理世界》，2014年第2期。</div>
    <div class="csl-entry">（2）高琳：《分税制、地方财政自主权与经济发展绩效研究》，上海人民出版社，2016年。</div>
    <div class="csl-entry">（3）黄超：《管理层利用语调管理配合盈余管理了吗？——来自我国上市公司年报的文本分析》，上海财经大学博士学位论文，2017年。</div>
    <div class="csl-entry">（4）李实、佐藤宏主编：《经济转型的代价──中国城市失业、贫困、收入差距的经验分析》，北京中国财政经济出版社，2004年。</div>
    <div class="csl-entry">（5）林乐、谢德仁：《分析师荐股更新利用管理层语调吗?——基于业绩说明会的文本分析》，《管理世界》，2017年第11期。</div>
    <div class="csl-entry">（6）王化成、曹丰、叶康涛：《监督还是掏空：大股东持股比列与股价崩盘风险》，《管理世界》，2015年第2期。</div>
    <div class="csl-entry">（7）佐藤宏：《外出务工、谋职和城市劳动力市场——市场支撑机制的社会网络分析》，载李实、佐藤宏主编：《经济转型的代价──中国城市失业、贫困、收入差距的经验分析》，中国财政经济出版社，2004年。</div>
    <div class="csl-entry">（8）Banker, R. D., Byzalov, D. and Chen, L. T., 2013, “Employment Protection Legislation, Adjustment Costs and Cross-Country Differences in Cost Behavior”, <i>Journal of Accounting and Economics</i>, 55(1), pp.111~127.</div>
    <div class="csl-entry">（9）Fama, E. F., 1989, “Perspectives on October 1987, or What Did We Learn from the Crash?”, in Barro, R. J., R. W. Kamphuis, R. C. Kormendi and J. W. H. Watson, eds: <i>Black Monday and the Future of the Financial Markets</i>, Irwin, Homewood, III.</div>
    <div class="csl-entry">（10）Kang, J. K. and Kim, J. M., 2008, “The Geography of Block Acquisitions”, <i>The Journal of Finance</i>, 63(6), pp.2817~2858.</div>
    <div class="csl-entry">（11）Krugman, P., 2006, “Title of the Article”, NBER Working Paper, No.4567.</div>
    <div class="csl-entry">（12）Skolnik, M. I., 2008, <i>Radar Handbook</i>, New York: McGraw-Hill.</div>
    <div class="csl-entry">（13）Weiss, D., 2010, “Cost Behavior and Analysts’ Earnings Forecasts”, <i>The Accounting Review</i>, vol.85, pp.1441~1471.</div>
  </div>
</blockquote>


## [203economic-research-journal.csl]

[《经济研究》](http://www.erj.cn/cn/Info.aspx?m=20100913105301153616&page=1)样式，[《管理世界》](9journal-of-management-world.csl)基础上修改。

显示效果：

> ```
> （Bartov et al., 2002）
> （邵新建等，2015）
> （康大成，2017）
> （Chen et al., 2020）
> （王静帆等，2021）
> （Ebert et al., 2021）
> ```

> 康大成，2017：《超声波辅助腌制对牛肉品质的影响及其机理研究》，南京农业大学博士学位论文学位论文，2017年。<br>
> 邵新建、何明燕、江萍等，2015：《媒体公关、投资者情绪与证券发行定价》，《金融研究》第09期。<br>
> 王静帆、黄峰、沈青山等，2021：《低温长时蒸煮对猪肉品质的影响》，《中国农业科学》第3期。<br>
> Bartov E., P. Mohanram and C. Seethamraju, 2002, “Valuation of Internet Stocks—An IPO Perspective”, *Journal of Accounting Research*, 40(2), 321—346.<br>
> Chen X., L. Liang and X. Xu, 2020, “Advances in converting of meat protein into functional ingredient via engineering modification of high pressure homogenization”, *Trends in Food Science & Technology*, 106, 12—29.<br>
> Ebert S., S. Kaplan, K. Brettschneider, et al., 2021, “Aggregation behavior of solubilized meat - Potato protein mixtures”, *Food Hydrocolloids*, 113, 106388.<br>

## [204financial-research-journal.csl]
[《金融研究》](http://www.jryj.org.cn/CN/column/column3.shtml)样式，[《经济研究》](203economic-research-journal.csl)基础上修改，文内为（作者，年代），参考文献列表中文在前，英文在后，作者前加编号。

显示效果：

> ```
>（Bartov et al.，2002）
>（Ebert et al.，2021）
>（邵新建等，2015）
>（Nunn and Qian，2011）
> ```
>[1]	邵新建、何明燕、江萍、薛熠和廖静池，2015，《媒体公关、投资者情绪与证券发行定价》，《金融研究》第09期，第190`~`206页。<br>
>[2]	Bartov, E., P. Mohanram, and C. Seethamraju. 2002. “Valuation of Internet Stocks—An IPO Perspective”, *Journal of Accounting Research*, 40(2): pp.321`~`346.<br>
>[3]	Ebert, S., S. Kaplan, K. Brettschneider, N. Terjung, M. Gibis, and J. Weiss. 2021. “Aggregation behavior of solubilized meat - Potato protein Mixtures”, *Food Hydrocolloids*, 113: pp.106388.<br>
>[4]	Nunn, N. and N. Qian. 2011. “The Potato’s Contribution to Population and Urbanization: Evidence From A Historical Experiment”, *The Quarterly Journal of Economics*, 126(2): pp.593`~`650.<br>


## [205business-management-journal.csl]

[《经济管理》](http://www.jjgl.cass.cn/CommonBlock/GetSiteDescribeDetail/1207?channelID=1207)样式。正文中包含（作者，年代）<sup>[数字]</sup>两种样式，文末支持中文作者超过 `3` 个为“`等`”，英文为“`et al`”。文章的题目大小写与 `Zotero` 中的 `Title` 字段一致。期刊名称前需要添加出版社城市名，可以将此城市名放在 `Loc. in Archive` 字段。

存在问题：正文中要求英文两个作者之间要求用“`和`”，现在显示为“`&`”，可以后期在 Word 中批量替换。

感谢 [@zepinglee](https://github.com/zepinglee) 的指导和代码，感谢 [@fredericky123](https://github.com/fredericky123) 测试。

显示效果：

> (温忠麟等, 2004)<sup>[1]</sup><br>
> (Denkovski等, 2012)<sup>[2]</sup><br>
> (Potterie & Lichtenberg, 2001)<sup>[3]</sup><br>
> (白俊红和蒋伏心, 2015)<sup>[4]</sup><br>

> [1] 温忠麟, 侯杰泰, 刘红云, 等. 中介效应检验程序及其应用[J]. 北京: 心理学报, 2004(05): 614–620.
> [2] Denkovski D., V. Rakovic, M. Pavloski, et al. Integration of heterogeneous spectrum sensing devices towards accurate REM construction[C]//2012 IEEE Wireless Communications and Networking Conference (WCNC). 2012: 798–802.	<br>
> [3] Potterie B. Van P. De La and F. Lichtenberg. Does Foreign Direct Investment Transfer Technology Across Borders? 3[J]. Review of Economics and Statistics, 2001, 83(3): 490–497.	<br>
> [4] 白俊红, 蒋伏心. 协同创新、空间关联与区域创新绩效[J]. 经济研究, 2015, 50(07): 174–187.	<br>

## [206accounting-research.csl]

[010gb-t-7714-2015-author-date-bilingual-no-uppercase.csl] 版本上修改，应用于[《会计研究》](http://www.asc.net.cn/AccountingResearch/MagazineProfile.aspx?type=tgzn)的样式。~~存在问题：页码为不连续多页，如 `121-129+184`，页码间隔仍为 `-`，不是`～`。~~
对于不连续的多页，需要写为 `128-140, 188` 或 `128-140 & 188`，才可以显示为`～`，不能写为 `128-140+188`，感谢 [@zepinglee](https://github.com/zepinglee) 的指导。

显示效果：

> (谢德仁等, 2016; Kaustia & Rantala, 2015)<br>
> (陈珏锡等, 2021)<br>
> (Gopalan et al., 2014)<br>

> 陈珏锡, 张俊丰, 李源栋, 夏建军. 2021. 无溶剂微波萃取肉桂精油及成分分析. 现代食品科技, 08: 258-265+167.<br>
> 谢德仁, 郑登津, 崔宸瑜. 2016. 控股股东股权质押是潜在的“DiLei”吗?——基于股价崩盘风险视角的研究. 管理世界, 5: 128-140+188.<br>
> Gopalan, R., T. Milbourn, F. Song, A. V. Thakor. 2014. Duration of Executive Compensation. Journal of Finance, 69(6): 2777～2817.<br>
> Kaustia, M., V. Rantala. 2015. Social Learning and Corporate Peer Effects. Journal of Financial Economics, 117(3): 653～669.<br>

## [207chinas-industrial-economics.csl]

[《中国工业经济》](http://ciejournal.ajcass.org/Home/Index)样式。[《经济管理》](205business-management-journal.csl)基础上修改。正文中如果出现文献作者名，有 2 个作者，用（`甲和乙，年份）`英文名用`（A and B，年份）`连接。有 3 个或者更多作者，用`（甲等，年份）`，英文名为`（A et al，年份）`表示。文末的参考文献中文在前，英文在后（需要设置文献语言，详见前面[如何使用](#如何使用)）；列出所有作者，英文最后一个作者前面加`and`。


显示效果：
<blockquote>
(Abel et al, 2022)<br>
(Fan and Sommers, 2013)<br>
(Engers and Gans, 1998)<br>
(伊宪华等, 2009)<br>
(蒋有绪等, 1998)<br>
(李幼平和王莉, 2010)<br>
(Li et al, 2021)<br>
[1] 伊宪华, 韩雅玲, 李毅, 王守力, 荆全民, 马颖艳, 王效增, 栾波, 王耿. 介入治疗开通慢性完全闭塞病变的长期临床疗效[J]. 中华心血管病杂志, 2009, 37(9): 773–776.<br>
[2] 蒋有绪, 郭泉水, 马娟, Others. 中国森林群落分类及其群落特征[M]. 北京: 科学出版社, 1998.
[3] 李幼平, 王莉. 循证医学研究方法: 附视频[J]. 中华移植杂志(电子版), 2010, 4(3): 225–228.<br>
[4] Engers M., and J. S. Gans. Why Referees Are Not Paid (Enough)[J]. American Economic Review, 1998, 88(5): 1341–1349.	<br>
[5] Li X., S. Shen, Y. Xu, T. Guo, H. Dai, and X. Lu. Application of membrane separation processes in phosphorus recovery: A review[J]. Science of The Total Environment, 2021, 767: 144346.	<br>
[6] Abel N., B. T. Rotabakk, and J. Lerfall. Mild processing of seafood—A review[J]. Comprehensive Reviews in Food Science and Food Safety, 2022, 21(1): 340–370.	<br>
[7] Fan X., and C. H. Sommers. Food irradiation research and technology[M]. 2 edition. Ames, Iowa: Blackwell Publishing, 2013: 25–26.	<br>


</blockquote>


## [208chinas-industrial-economics.csl]

《[中国工业经济](http://ciejournal.ajcass.org/Home/Index)》样式，[011gb-t-7714-2015-author-date-bilingual-no-uppercase-no-url-doi-full-width-parentheses.csl] 基础上修改。

1. 正文中 如果出现文献作者名，有 2 个作者，用“(甲和乙, 年份)”（英文名用“(A and B, 年份)”）连接。
2. 有 3 个或者更多作者，用“(甲等, 年份)”（英文名为“(A et al., 年份)”）表示。
3. 文后参考文献表中著录全部姓名。
3. 英文文献的第一作者姓在前（后加“, ”）、名在后（全部用缩写，即首字母加“.”），其余作者则名在前、姓在后。
4. 英文文献的最后一个作者前加“，and”。

显示效果：

<blockquote>
  (陈佳贵, 1995)<br>
  (Engers and Gans, 1998)<br>
  (蒋一苇, 1998)<br>
  ([英]瑟尔沃, 2001)<br>
  (Fukuyama, 1999)<br>
  (Caselli, 2005)<br>
  (Broda et al., 2006)<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">[1] 陈佳贵. 关于企业生命周期与企业蜕变的探讨[J]. 中国工业经济, 1995(11):5-13.</div>
    <div class="csl-entry">[2] 蒋一苇. 论社会主义的企业模式[M]. 广州: 广东经济出版社, 1998.</div>
    <div class="csl-entry">[3] [英]瑟尔沃. 增长与发展[M]. 郭熙保译. 北京: 中国财政经济出版社, 2001.</div>
    <div class="csl-entry">[4] Broda, C., G. Joshua, and W. David. From Groundnuts to Globalization: A Structural Estimate of Trade and Growth[R]. NBER Working Paper, 2006.</div>
    <div class="csl-entry">[5] Caselli, F. Accounting for Cross-Country Income Differences[A]. Aghion, P., and S. N. Durlauf. Handbook of Economic Growth[C]. Amsterdam: Elsevier, 2005: 679-741.</div>
    <div class="csl-entry">[6] Engers, M., and J. S. Gans. Why Referees Are Not Paid (Enough)[J]. American Economic Review, 1998, 88(5):1341-1349.</div>
    <div class="csl-entry">[7] Fukuyama, F. Trust: The Social Virtues and the Creation of Prosperity[M]. New York: Free Press, 1999.</div>
  </div>
</blockquote>


## [209sociological-studies.csl]

《[社会学研究](http://shxyj.ajcass.org/)》样式。

显示效果：

<blockquote>
  （冯钢，2018）<br>
  （刘江、顾东辉，2022）<br>
  （刘江、顾东辉，2022；冯钢，2018）<br>
  （Uslaner，2002）<br>
  （Ozawa &#38; Sripad，2013）<br>
  （Bova et al.，2006）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">冯钢，2018，《马克思的“过渡”理论与“卡夫丁峡谷”之谜》，《社会学研究》第2期。</div>
    <div class="csl-entry">刘江、顾东辉，2022，《“约束—内化”vs.反思性实践认知——社会工作伦理守则与留职意愿关系研究》，《社会学研究》第2期。</div>
    <div class="csl-entry">Bova, Carol, Kristopher, P. Fennie, Edith Watrous, Kevin Dieckhaus &#38; Ann B. Williams 2006, “The Health Care Relationship (HCR) Trust Scale: Development and Psychometric Evaluation.” <i>Research in Nursing &#38;amp; Health</i> 29(5).</div>
    <div class="csl-entry">Ozawa, Sachiko &#38; Pooja Sripad 2013, “How Do You Measure Trust in the Health System? A Systematic Review of the Literature.” <i>Social Science &#38; Medicine</i> 91.</div>
    <div class="csl-entry">Uslaner, Eric M. 2002, <i>The Moral Fundations of Trust</i>. Cambridge: Cambridge University Press.</div>
  </div>
</blockquote>


## [210advances-in-psychological-science.csl]

《[心理科学进展](https://journal.psych.ac.cn/xlkxjz)》样式。

显示效果：

<blockquote>
  (张三, 2008)<br>
  (张三, 李四, 2008)<br>
  (Mou &#38; McNamara, 2002)<br>
  (赵一 等, 2008)<br>
  (Mou et al., 2004)<br>
  (现代汉语频率词典, 1986)<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry"><i>现代汉语频率词典</i>. (1986). 北京: 北京语言学院出版社.</div>
    <div class="csl-entry">张三. (2008). 中国心理学的过去与未来. <i>心理学报</i>, <i>40</i>, 210–215.</div>
    <div class="csl-entry">张三, 李四. (2008). 中国心理学的过去与未来. <i>心理学报</i>, <i>40</i>, 210–215.</div>
    <div class="csl-entry">赵一, 钱二, 孙三, 李四, 周五, 吴六, 郑七. (2008). 中国心理学的过去与未来. <i>心理学报</i>, <i>40</i>, 210–215.</div>
    <div class="csl-entry">Mou, W., &#38; McNamara, T. P. (2002). Intrinsic frames of reference in spatial memory. <i>Journal of Experimental Psychology: Learning, Memory, and Cognition</i>, <i>28</i>, 162–170.</div>
    <div class="csl-entry">Mou, W., Zhang, K., &#38; McNamara, T. P. (2004). Frames of reference in spatial memories acquired from language. <i>Journal of Experimental Psychology: Learning, Memory, and Cognition</i>, <i>30</i>, 171–180.</div>
  </div>
</blockquote>


## [211journal-of-plant-protection.csl]

《[植物保护学报](http://www.zwbhxb.com.cn/ch/index.aspx)》样式。

注意事项：

1. 文献的语言默认为英语。中文文献需要在 `language` 字段填写 `zh` 或 `zh-CN`。
2. 中文文献需要将作者姓名、标题、期刊、出版地、出版社的英文翻译分别填写在 `extra` 中的 `original-author`, `original-title`, `original-container-title`, `original-publisher-place`, `original-publisher` 字段，比如
```
original-author: Ye || Gong Yin
original-author: Hu || Cui
original-author: Shu || Qing Yao
original-title: The development of transgenic rice resistant to insect pests and its wise and sustainable use
original-container-title: Agricultural Development and Research in the 21st Century
original-publisher-place: Beijing
original-publisher: China Environmental Science Press
```

显示效果：

<blockquote>
  （Altieri &#38; Nicholls，2004）<br>
  （Biesmeijer et al.，2006）<br>
  （钦俊德，1987）<br>
  （孙玉凤等，2011）<br>
  （吴孔明和郭予元，2000）<br>
  （曾士迈等，1979；吴孔明和郭予元，2000）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">Altieri MA, Nicholls CI. 2004. Biodiversity and pest management in agroecosystems (2nd edition). New York: Food Products Press</div>
    <div class="csl-entry">Biesmeijer JC, Roberts SPM, Reemer M, Ohlemüller R, Edwards M, Peeters T, Schaffers AP, Potts SG, Kleukers R, Thomas CD, et al. 2006. Parallel declines in pollinators and insect-pollinated plants in Britain and the Netherlands. Science, 313(5785): 351-354</div>
    <div class="csl-entry">Garnsey SM, Permar TA, Cambra M, Henderson CT. 1993. Direct tissue blot immunoassay (DTBIA) for detection of citrus tristeza virus (CTV).//Moreno P, de Graca JV, Yokomi RK. Proceedings of the 12th Conference on International Organization of Citrus Virologist. Riverside. Riverside, USA, pp. 39-50</div>
    <div class="csl-entry">McDonald AH, Nicol JM. 2005. Nematode parasites of cereals.//Luc M, Sikora RA, Bridge J. Plant parasitic nematodes in subtropical and tropical agriculture. Wallingford, UK: CABI Publishing, pp. 131-191</div>
    <div class="csl-entry">Qin JD. 1987. The relationships between insects and plants. Beijing: Science Press, pp. 52-78 (in Chinese) [钦俊德. 1987. 昆虫与植物的关系. 北京: 科学出版社, pp. 52-78]</div>
    <div class="csl-entry">Sun YF, Zhang YJ, Lu YH, Wu KM. 2011. The sustainability control of blind stink bug based on the cotton volatile substances.//Plant protection science and technology innovation and specialization of the prevention and control of diseases and pests—Academic annual Conference of Botanical China Society of Plant Protection in 2011. Beijing: China Agricultural Science and Technology Press, pp. 823 (in Chinese) [孙玉凤, 张永军, 陆宴辉, 吴孔明. 2011. 基于棉花挥发性物质的盲椿象可持续性防治.//吴孔明, 郭予元. 植保科技创新与病虫防控专业化——中国植物保护学会2011年学术年会论文集. 北京: 中国农业科学技术出版社, pp. 823]</div>
    <div class="csl-entry">Tautz D, Arctander P, Minelli A, Thomas RH, Vogler AP. 2002. DNA points the way ahead in taxonomy. Nature, 418(6897): 479</div>
    <div class="csl-entry">Wu KM, Guo YY. 2000. Field resistance evaluations of BT transgenic cotton GK series to cotton bollwoam. Journal of Plant Protection, 27(4): 317-321 (in Chinese) [吴孔明, 郭予元. 2000. 部分GK系列Bt棉对棉铃虫抗性的田间评价. 植物保护学报, 27(4): 317-321]</div>
    <div class="csl-entry">Ye GY, Hu C, Shu QY. 1998. The development of transgenic rice resistant to insect pests and its wise and sustainable use.//Agricultural Development and Research in the 21st Century. Beijing: China Environmental Science Press, pp. 406-414 (in Chinese) [叶恭银, 胡萃, 舒庆尧. 1998. 转基因抗虫水稻的转育及其合理持续利用.//世界农业发展与研究. 北京: 中国环境科学出版社, pp. 406-414]</div>
    <div class="csl-entry">Zeng SM, Wang PY, Wu XY, Zhang WY, Wang JQ, Song WZ, Wang SY. 1979. Preliminary study on the method of evaluation of horizontal resistance of wheat cultivars to stripe rust. Journal of Plant Protection, 6(1): 1-10 (in Chinese) [曾士迈, 王沛有, 武修英, 张万义, 王吉庆, 宋位中, 王生元. 1979. 小麦对条锈病的水平抗病性研究初报. 植物保护学报, 6(1): 1-10]</div>
    <div class="csl-entry">Zhang XB. 2013. Dpp-Omb signaling regulates growth in a region specific manner during Drosophila wing development. Ph.D Thesis. Beijing: China Agricultural University (in Chinese) [张徐波. 2013. Dpp-Omb信号以区域化的方式调控果蝇翅的生长. 博士毕业论文. 北京: 中国农业大学]</div>
  </div>
</blockquote>

## [212journal-of-marketing-science.csl]

[《营销科学学报》](http://www.jms.org.cn:8081/jms/fileup/jms/ITEM/20220923110330.pdf)样式，作者全部大写，名缩写。中文文献后面跟随英文翻译。

使用注意：1. 中文文献需要在 `language` 字段填写 `zh` 或 `zh-CN`。英文文献需要在 `language` 字段填写 `en` 或 `en-US`。
2. 中文文献需要将作者姓名、标题、期刊、出版地、出版社的英文翻译分别填写在 `extra` 中的 `original-author`, `original-title`, `original-container-title`, `original-publisher-place`, `original-publisher` 字段，比如
```
original-author: Liu || Lei
original-author: Zheng || Yu Huang
original-author: Chen || Rui
original-title: Better with More Choices?Impact of Choice Set Size on Variety Seeking
original-container-title: Acta psychologica sinica
```
存在问题：中文翻译后面会多一个空行，可以在文章定稿后通过在 Word 中查找 `^l^p` 替换为 `^p` 批量删除。
<blockquote>
显示效果：
（Cai et al.，2020; Ringler et al.，2019）
（刘蕾等，2015）
（Wang et al.，2022）


[1]	刘蕾, 郑毓煌, 陈瑞. 2015. 选择多多益善?——选择集大小对消费者多样化寻求的影响[J]，心理学报, 47(01): 66-78.
LIU L, ZHENG Y H, CHEN R. 2015. Better with more choices?impact of choice set size on variety seeking[J]，Acta psychologica sinica, 47(01): 66-78. (In Chinese)

[2]	CAI L, WAN J, LI X, LI J. 2020. Effects of different thawing methods on conformation and oxidation of myofibrillar protein from largemouth bass (micropterus salmoides)[J], Journal of food science, n/a(n/a).
[3]	RINGLER C, SIRIANNI N J, GUSTAFSSON A, PECK J. 2019. Look but don’t touch! the impact of active interpersonal haptic blocking on compensatory touch and purchase behavior[J], Journal of retailing, 95(4): 186-203.
[4]	WANG H, OUYANG Z, HU L, CHENG Y, ZHU J, MA L, ZHANG Y. 2022. Self-assembly of gelatin and phycocyanin for stabilizing thixotropic emulsions and its effect on 3d printing[J], Food chemistry, 397: 133725.

</blockquote>


## [215international-economics-and-trade-research.csl]

[《国际经贸探索》](https://gjts.cbpt.cnki.net/WKG/WebPublication/index.aspx?mid=gjts#)样式，[011gb-t-7714-2015-author-date-bilingual-no-uppercase-no-url-doi-full-width-parentheses.csl]基础上修改，
1. 按照语言显示“等”或“et al.”；2. 姓名取消全大写；3. 仅纯电子资源显示引用日期和 URL；4. 无 DOI；5. 正文的引用使用全角括号。

使用注意：1. 中文文献需要在 `language` 字段填写 `zh` 或 `zh-CN`。英文文献需要在 `language` 字段填写 `en` 或 `en-US`。

<blockquote>
（Jiang, 2017; Wang et al., 2020; Bowker & Zhuang, 2017; 金朝辉，2022; 高磊、鲍晓华，2022; 李宏、乔越，2022; 林创伟 等，2022）
</blockquote>

<blockquote>
参考文献

高磊, 鲍晓华, 2022. 技术性贸易壁垒对本国出口的影响：理论与实证[J]. 国际经贸探索, 38(11): 20-34.
金朝辉, 2022. 人民币汇率、融资约束对出口贸易的影响研究[J]. 国际经贸探索, 38(11): 35-50.
李宏, 乔越, 2022. 企业嵌入全球价值链的创新路径选择：“渐进式”抑或“突破式”创新[J]. 国际经贸探索, 38(11): 66-81.
林创伟, 白洁, 何传添, 2022. 高标准国际经贸规则解读、形成的挑战与中国应对——基于美式、欧式、亚太模板的比较分析[J]. 国际经贸探索, 38(11): 95-112.
Bowker, B, Zhuang, H, 2017. Freezing-thawing and sub-sampling influence the marination performance of chicken breast meat1 1The use of trade, firm, or corporation names in this publication is for the information and convenience of the reader. Such use does not constitute an official endorsement or approval by the United States Department of Agriculture or the Agricultural Research Service of any product or service to the exclusion of others that may be suitable.[J]. Poultry Science, 96(9): 3482-3488.
Jiang, J, 2017. Dietary linseed oil supplemented with organic selenium improved the fatty acid nutritional profile, muscular selenium deposition, water retention, and tenderness of fresh pork[J]. Meat Science, 131: 99-106.
Wang, H, Qin, X, Li, X, et al., 2020. Effect of chilling methods on the surface color and water retention of yellow-feathered chickens[J]. Poultry Science, 99(4): 2246-2255.
</blockquote>


## [216acta-psychologica-sinica.csl]

《[心理学报](https://journal.psych.ac.cn/xlxb)》样式。

1. 文献的语言默认为英语。中文文献需要在 `language` 字段填写 `zh` 或 `zh-CN`。
2. 中文文献需要将作者姓名、标题、期刊、出版地、出版社的英文翻译分别填写在 `extra` 中的 `original-author`, `original-title`, `original-container-title`, `original-publisher-place`, `original-publisher` 字段。

显示效果：

<blockquote>
  (张三, 2008)<br>
  (张三, 李四, 2008)<br>
  (Mou &#38; McNamara, 2002)<br>
  (赵一 等, 2008)<br>
  (Mou et al., 2004)<br>
  (现代汉语频率词典, 1986)<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">Mou, W., &#38; McNamara, T. P. (2002). Intrinsic frames of reference in spatial memory. <i>Journal of Experimental Psychology: Learning, Memory, and Cognition</i>, <i>28</i>, 162–170.</div>
    <div class="csl-entry">Mou, W., Zhang, K., &#38; McNamara, T. P. (2004). Frames of reference in spatial memories acquired from language. <i>Journal of Experimental Psychology: Learning, Memory, and Cognition</i>, <i>30</i>, 171–180.</div>
    <div class="csl-entry">Zhang S. (2008). The past and future of Chinese psychology. <i>Acta Psychologica Sinica</i>, <i>40</i>, 210–215. [张三. (2008). 中国心理学的过去与未来. <i>心理学报</i>, <i>40</i>, 210–215.]</div>
    <div class="csl-entry">Zhang S., &#38; Li S. (2008). The past and future of Chinese psychology. <i>Acta Psychologica Sinica</i>, <i>40</i>, 210–215. [张三, 李四. (2008). 中国心理学的过去与未来. <i>心理学报</i>, <i>40</i>, 210–215.]</div>
    <div class="csl-entry">Zhao Y., Qian E., Sun S., Li S., Zhou W., Wu L., &#38; Zheng Q. (2008). The past and future of Chinese psychology. <i>Acta Psychologica Sinica</i>, <i>40</i>, 210–215. [赵一, 钱二, 孙三, 李四, 周五, 吴六, 郑七. (2008). 中国心理学的过去与未来. <i>心理学报</i>, <i>40</i>, 210–215.]</div>
    <div class="csl-entry"><i>Modern Chinese frequency dictionary</i>. (1986). Beijing Language and Culture University Press. [<i>现代汉语频率词典</i>. (1986). 北京: 北京语言学院出版社.]</div>
  </div>
</blockquote>


## [217the-journal-of-world-economy.csl]

《[世界经济](https://manu30.magtech.com.cn/sjjj/CN/column/column10.shtml)》样式，《[管理世界](http://www.mwm.net.cn/web/)》基础上修改。

文献的语言默认为英语。中文文献需要在 `language` 字段填写 `zh` 或 `zh-CN`。

显示效果：

（Bartov *et al*.，2002）<br>
（陆铭和冯皓，2014）<br>
（Alesina *et al*.，2004）<br>
（Ball and Brown，1968）<br>
（Baron，1982）<br>
（吕怀立等，2021）<br>
（刘煜辉和沈可挺，2011）<br>
（宋顺林，2022）<br>


刘煜辉、沈可挺（2011）：《是一级市场抑价,还是二级市场溢价——关于我国新股高抑价的一种检验和一个解释》，《金融研究》第11期。<br>
陆铭、冯皓（2014）：《集聚与减排:城市规模差距影响工业污染强度的经验研究》，《世界经济》第7期。<br>
吕怀立、贾琬娇、李婉丽（2021）：《核准制保荐经历与科创板IPO定价——来自保荐代表人的经验证据》，《会计研究》第5期。<br>
宋顺林（2022）：《中国式IPO定价：一个文献综述》，《中央财经大学学报》第1期。<br>
Alesina, A.; Di Tella, R. and MacCulloch, R. “Inequality and Happiness: Are Europeans and Americans Different?” *Journal of Public Economics*, 2004, 88(9), pp. 2009-2042.<br>
Ball, R. and Brown, P. “An Empirical Evaluation of Accounting Income Numbers.” *Journal of Accounting Research*, 1968, 6(2), pp. 159-178.<br>
Baron, D. P. “A Model of the Demand for Investment Banking Advising and Distribution Services for New Issues.” *The Journal of Finance*, 1982, 37(4), pp. 955-976.<br>
Bartov, E.; Mohanram, P. and Seethamraju, C. “Valuation of Internet Stocks—An IPO Perspective.” *Journal of Accounting Research*, 2002, 40(2), pp. 321-346.<br>



## [301manual-of-legal-citation-multi-lingual.csl]

《[法学引注手册](https://www.pup.cn/bookDetail?id=910497ac470d4880ab56c6709bb1d7c5)》（2020 年版）。

注意事项：

1. 文献的语言默认为英语，其他语言的文献需要在 `language` 字段填写对应的语言代码。（这是为了避免 `citeproc-js` 无法转换 title case 的 [bug](https://github.com/Juris-M/citeproc-js/issues/211)。）
2. 中文司法案例援引裁判文书时需要在 Extra 字段填写文书名称，比如 genre: 民事判决书；
3. 英国案例和法文文献的支持尚不完善，需要测试反馈；
4. 德文的“法律评注”使用 book section 文献类型，并将标题留空；
5. 德文的“祝贺文集“与“纪念文集”使用 book section 文献类型，但需要将书名填在 series 字段；

显示效果：

<blockquote>
  <sup>1</sup> 王名扬：《美国行政法》，北京大学出版社2007年版。<br>
  <sup>2</sup> 同上注，第18页。<br>
  <sup>3</sup> 季卫东：《法律程序的意义：对中国法制建设的另一种思考》，载《中国社会科学》1993年第1期。<br>
  <sup>4</sup> 王保树：《股份有限公司机关构造中的董事和董事会》，载梁慧星主编：《民商法论丛》第1卷，法律出版社1994年版。<br>
  <sup>5</sup> 何海波：《判决书上网》，载《法制日报》2000年5月21日，第2版。<br>
  <sup>6</sup> 李松锋：《游走在上帝与凯撒之间：美国宪法第一修正案中的政教关系研究》，中国政法大学2015年博士学位论文。<br>
  <sup>7</sup> 包郑照诉苍南县人民政府强制拆除房屋案，浙江省高级人民法院民事判决书（1988）浙法民上字 7 号。<br>
  <sup>8</sup> 陆红霞诉南通市-发-改-委-政府信息公开案，载《最高人民法院公报》2015年第11期。<br>
  <sup>9</sup> Charles A. Reich, <i>The New Property</i>, 73 Yale Law Journal 733, 737-738 (1964).<br>
  <sup>10</sup> Louis D. Brandeis, <i>What Publicity Can Do</i>, Harper’s Weekly, 20 December 1913, p. 10.<br>
  <sup>11</sup> William Alford, <i>To Steal a Book Is an Elegant Offense: Intellectual Property Law in Chinese Civilization</i>, Stanford University Press, 1995, p. 98.<br>
  <sup>12</sup> Department of Transportation Act, Pub. L. No. 89-670, § 9, 80 Stat. 931, 944-947 (1966).<br>
  <sup>13</sup> Natural Resources Defense Council <i>v.</i> Gorsuch, 685 F.2d 718 (D.C. Cir. 1982).<br>
</blockquote>


## [303gb-t-7714-2015-note-bilingual.csl]

[china-national-standard-gb-t-7714-2015-note.csl] 的修改版，按照语言显示“等”或“et al.”。

显示效果（2–4、6 为重复文献，引用的页码不同）：

<blockquote>
  <sup>1</sup> SUNSTEIN C R. Social norms and social roles[J/OL]. Columbia law review, 1996, 96: 903[2012-01-26]. <a href="http://www.heinonline.org/HOL/Page?handle=hein.journals/clr96&#38;id=913&#38;collection=journals&#38;index=journals/clr">http://www.heinonline.org/HOL/Page?handle=hein.journals/clr96&#38;id=913&#38;collection=journals&#38;index=journals/clr</a>.<br>
  <sup>2</sup> MORRI I. Why the west rules for now: the patterns of history, and what they reveal about the future[M]. New York: Farrar, Straus and Giroux, 2010.<br>
  <sup>3</sup> 同上.<br>
  <sup>4</sup> 同上: 260.<br>
  <sup>5</sup> 罗杰斯. 西方文明史: 问题与源头[M]. 潘惠霞, 魏婧, 杨艳, 等, 译. 大连: 东北财经大学出版社, 2011: 15-16.<br>
  <sup>6</sup> 同2: 326-329.<br>
</blockquote>


## [304gb-t-7714-2015-note-bilingual-no-ibid.csl]

[china-national-standard-gb-t-7714-2015-note.csl] 的修改版，按照语言显示“等”或“et al.”，重复文献不省略，完整显示。

显示效果（2–4、6 为重复文献，引用的页码不同）：

<blockquote>
  <sup>1</sup> SUNSTEIN C R. Social norms and social roles[J/OL]. Columbia law review, 1996, 96: 903[2012-01-26]. <a href="http://www.heinonline.org/HOL/Page?handle=hein.journals/clr96&#38;id=913&#38;collection=journals&#38;index=journals/clr">http://www.heinonline.org/HOL/Page?handle=hein.journals/clr96&#38;id=913&#38;collection=journals&#38;index=journals/clr</a>.<br>
  <sup>2</sup> MORRI I. Why the west rules for now: the patterns of history, and what they reveal about the future[M]. New York: Farrar, Straus and Giroux, 2010.<br>
  <sup>3</sup> MORRI I. Why the west rules for now: the patterns of history, and what they reveal about the future[M]. New York: Farrar, Straus and Giroux, 2010.<br>
  <sup>4</sup> MORRI I. Why the west rules for now: the patterns of history, and what they reveal about the future[M]. New York: Farrar, Straus and Giroux, 2010: 260.<br>
  <sup>5</sup> 罗杰斯. 西方文明史: 问题与源头[M]. 潘惠霞, 魏婧, 杨艳, 等, 译. 大连: 东北财经大学出版社, 2011: 15-16.<br>
  <sup>6</sup> MORRI I. Why the west rules for now: the patterns of history, and what they reveal about the future[M]. New York: Farrar, Straus and Giroux, 2010: 326-329.<br>
</blockquote>


## [305gb-t-7714-2015-note-bilingual-no-uppercase-no-url-doi.csl]

[303gb-t-7714-2015-note-bilingual.csl] 的修改版：

1. 按照语言显示“等”或“et al.”；
2. 姓名取消全大写；
3. 仅纯电子资源（如网页、软件）显示引用日期和 URL；
4. 无 DOI。

<blockquote>
  <sup>1</sup> 库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.<br>
  <sup>2</sup> Fan X, Sommers C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.<br>
  <sup>3</sup> 贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.<br>
  <sup>4</sup> Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.<br>
  <sup>5</sup> 武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.<br>
  <sup>6</sup> Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.<br>
  <sup>7</sup> 中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R/OL]. (2012-01-16)[2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>.<br>
  <sup>8</sup> Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.<br>
</blockquote>


## [306manual-of-legal-citation-multi-lingual-no-ibid.csl]

《[法学引注手册](https://www.pup.cn/bookDetail?id=910497ac470d4880ab56c6709bb1d7c5)》的无略写版，即重复引用的文献不省略，在 [301manual-of-legal-citation-multi-lingual.csl] 的基础上修改。

注意事项：

1. 文献的语言默认为英语，其他语言的文献需要在 `language` 字段填写对应的语言代码。（这是为了避免 `citeproc-js` 无法转换 title case 的 [bug](https://github.com/Juris-M/citeproc-js/issues/211)。）
2. 中文司法案例援引裁判文书时需要在 Extra 字段填写文书名称，比如 genre: 民事判决书；
3. 英国案例和法文文献的支持尚不完善，需要测试反馈；
4. 德文的“法律评注”使用 book section 文献类型，并将标题留空；
5. 德文的“祝贺文集“与“纪念文集”使用 book section 文献类型，但需要将书名填在 series 字段；
6. 重复引用的文献不略写。

显示效果：

<blockquote>
  <sup>1</sup> 应松年、马怀德主编：《当代中国行政法的源流：王名扬教授九十华诞贺寿文集》，中国法制出版社2006年版。<br>
  <sup>2</sup> 应松年、马怀德主编：《当代中国行政法的源流：王名扬教授九十华诞贺寿文集》，中国法制出版社2006年版。<br>
  <sup>3</sup> R. v. Panel on Take-overs and Mergers, 815 QB (1987).<br>
  <sup>4</sup> R. v. Panel on Take-overs and Mergers, 815 QB (1987).<br>
  <sup>5</sup> 应松年、马怀德主编：《当代中国行政法的源流：王名扬教授九十华诞贺寿文集》，中国法制出版社2006年版。<br>
</blockquote>



## [307studies-on-marxism.csl]

《[马克思主义研究](http://www.mkszyyj.net/Home/Index)》样式。

显示效果：

<blockquote>
  <sup>1</sup> 《马克思恩格斯选集》第2卷，北京：人民出版社，1995年，第22、178页。<br>
  <sup>2</sup> 逄先知、金冲及主编：《-毛-泽-东-传》，2003年，第1032页。<br>
  <sup>3</sup> [德]黑格尔：《逻辑学》（上卷），杨一之译，商务印书馆，2001年，第427-428页。<br>
  <sup>4</sup> 任平：《马克思“反思的问题视域”及其当代意义》，《中国社会科学》2006年第6期。<br>
</blockquote>


<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">[1] 《马克思恩格斯选集》第2卷，北京：人民出版社，1995年。</div>
    <div class="csl-entry">[2] 逄先知、金冲及主编：《-毛-泽-东-传》，2003年。</div>
    <div class="csl-entry">[3] [德]黑格尔：《逻辑学》（上卷），杨一之译，商务印书馆，2001年。</div>
    <div class="csl-entry">[4] 任平：《马克思“反思的问题视域”及其当代意义》，《中国社会科学》2006年第6期。</div>
  </div>
</blockquote>



## [403huazhong-agricultural-university.csl]

[407nanjing-agricultural-university-old.csl] 的修改版，适用于华中农业大学
学位论文，规则见 <http://yjs.hzau.edu.cn/info/1202/3774.htm>，正文中为作者年代格式，文末列表为数字格式。
中文文献排在前面，英文文献排在后面（需要在条目中将 `language` 英文设为 `en-US`，中文为`zh-CN`，否则无法实现按语言排序）。作者为首字母大写，支持中文作者超过 `20` 个为“`等`”，英文为“`et al`”。文章的题目大小写与 `Zotero` 中的 `Title` 字段一致，不显示 `URL` 和 `DOI`。英文期刊名称为斜体，缩写（需要将期刊缩写放在 `Zotero` 条目 `Info` 的 `Journal Abbr` 的字段才会缩写）。待提供更多文献类型进行测试。

显示效果：

> （杨赫鸿等 2012, Ebert et al 2021, He et al 2013）<br>
> （刘克德 1998）

> 1. 杨赫鸿, 李沛军, 孔保华, 刘骞, 李菁. 低场核磁共振技术在肉品科学研究中的应用. 2012(13): 400–405	<br>
> 2. 刘克德. 水稻广亲和性遗传基础的全基因组分析及 S5 位点区 段部分物理图谱的构建. [博士学位论文]. 武汉: 华中农业大学，1998	<br>
> 3. Ebert S, Kaplan S, Brettschneider K, Terjung N, Gibis M, Weiss J. Aggregation behavior of solubilized meat - potato protein mixtures. *Food Hydro*. 2021, 113: 106388<br>
> 4. He HJ, Wu D, Sun DW. Non-destructive and rapid analysis of moisture distribution in farmed atlantic salmon (salmo salar) fillets using visible and near-infrared hyperspectral imaging. *Inn Food Sci & Emer Tech*. 2013, 18: 237–245

## [404jinan-university.csl]

[4zhongnan-university-of-economics-and-law] 基础上修改。暨南大学学位论文样式，正文中作者年代格式，文末序号，英文文献在前，中文在后，显示全部作者。


显示效果：

> （陈珏锡等, 2021）<br>
> （Bonell & Oakley, 2006）<br>
> （Johnson et al., 2002）<br>
> （金红兰和金龙勋, 2021）<br>
> （Crepaz et al., 2006）<br>
> （唐小华等, 2021）<br>
> （Lyles et al., 2007）<br>

> [1]	Bonell C, Oakley A. Research methodology - Assessment of generalisability in trials of health interventions: Suggested framework and systematic Review[J]. Bmj-British Medical Journal, 2006, 333(7563): 346–349.<br>
> [2]	Crepaz N, Lyles C M, Wolitski R J, Passin W F, Rama S M, Herbst J H, Purcell D W, Malow R A, Stall R. Do prevention interventions reduce HIV risk behaviours among people living with HIV? A meta-analytic review of controlled Trials[J]. Aids, 2006, 20(2): 143–157.<br>
> [3]	Johnson W D, Hedges L V, Ramirez G, Semaan S, Norman L R, Sogolow E, Sweat M D, Diaz R M. HIV prevention research for men who have sex with men: A systematic review and meta-Analysis[J]. Journal of Acquired Immune Deficiency Syndromes, 2002, 30: S118–S129.<br>
> [4]	Lyles C M, Kay L S, Crepaz N, Herbst J H, Passin W F, Kim A S, Rama S M, Thadiparthi S, DeLuca J B, Mullins M M. Best-evidence interventions: Findings from a systematic review of HIV behavioral interventions for US populations at high risk, 2000-2004[J]. American Journal of Public Health, 2007, 97(1): 133–143.<br>
> [5]	陈珏锡, 张俊丰, 李源栋, 夏建军. 无溶剂微波萃取肉桂精油及成分分析[J]. 现代食品科技, 2021, 37(08): 258-265+167.<br>
> [6]	金红兰, 金龙勋. 技术创新背景下的食品产业现状与发展趋势[J]. 粮食科技与经济, 2021, 46(03): 37–39.<br>
> [7]	唐小华, 胡斌, 李雪玲, 胡文锋. 食药用菌菌丝体应用研究进展[J]. 食用菌学报, 2021, 28(04): 116–122.<br>


## [405nanjing-agricultural-university-numeric.csl]

[南京农业大学研究生学位论文](https://grasch.njau.edu.cn/info/1011/4128.htm)新样式见[445nanjing-agricultural-university.csl]

南京农业大学学位论文用，在 [000gb-t-7714-2015-numeric-bilingual.csl] 基础上修改（原样式见[407nanjing-agricultural-university-old.csl]），作者为首字母大写，支持中文作者超过 `3` 个为“`等`”，英文为“`et al`”。文章的题目大小写与 `Zotero` 中的 `Title` 字段一致，不显示 `URL` （在线报告、网页条目如果有`URL`不空则显示`URL`）和 `DOI`。如果引用国家标准，可以将文献类型设为 `Bill`，`Code` 中填入出版地和出版社，如`北京：中国标准出版社`，`Code Pages` 中填入引用的页码。`专著`（`Book`）可添加`页码`，放入`Zotero 总页数`（`# of Pages`）字段中。

显示效果：

> [1–4]

> [1] Zhang B, Qi X, Mao J, et al. Trehalose and alginate oligosaccharides affect the stability of myosin in whiteleg shrimp (Litopenaeus vannamei): The water-replacement mechanism confirmed by molecular dynamic simulation[J]. LWT - Food Science and Technology, 2020, 127: 109393.	<br>
> [2] 唐霄, 孙杨赢, 江雪婷, 等. 不同蛋白酶制备鹅肉呈味肽的对比分析[J]. 食品科学, 2019, 40(22): 141–146.	<br>
> [3] Wu L, Zhao W, Yang R, et al. Aggregation of egg white proteins with pulsed electric fields and thermal processes[J]. Journal of the Science of Food and Agriculture, 2016, 96(10): 3334–3341.	<br>
> [4] 朱磊, 张馨心, 谢艳英, 等. 类蛋白反应的作用机制及其对海洋源蛋白修饰的研究进展[J]. 食品工业科技, 2020, 41(09): 362–367.

## [406nanjing-agricultural-university-author-date.csl]
南京农业大学学位论文用（作者年代样式），[415zhejiang-university.csl]上修改。引文中文两个老者之间为`和`，英文为`and`，参考文献列表英文在前中文在后，支持中文作者超过 3 个为`等`，英文为`et al`。

显示效果：

> ```

>（Duan and Wu, 2009; Wang et al., 2020a）<br>
>（Wang et al., 2020a, 2020b）<br>
>（杨惠和张金桐，2001）<br>
>Duan Q-J, Wu Y-D. Rapid diagnosis of bacterial meningitis in children with fluorescence quantitative polymerase chain reaction amplification in the bacterial 16S rRNA gene[J]. European Journal of Pediatrics, 2009, 168(2): 211–216.<br>
>Wang J, Ma H, Zhao S, et al. Functional redundancy of two ABC transporter proteins in mediating toxicity of Bacillus thuringiensis to cotton bollworm[J]. PLoS pathogens, 2020a, 16(3): e1008427.<br>
>Wang J, Zhao X, Yan R, et al. Reverse genetics reveals contrary effects of two Rdl-homologous GABA receptors of Helicoverpa armigera on the toxicity of cyclodiene insecticides[J]. Pesticide Biochemistry and Physiology, 2020b, 170: 104699.<br>
>杨惠，张金桐.几丁质合成抑制剂的毒理学研究进展[J]. 寄生虫与医学昆虫学报, 2001(01): 57–64.<br>
> ```

## [408nanjing-agricultural-university-online-first.csl]
与[407nanjing-agricultural-university-old.csl]显示效果基本相同，区别是网络首发的文献（没有卷和期），文献类型改为J/OL，页码后面
加入`[引用日期].URL`。要显示`[引用日期].URL`需要在`Zotero`的`编辑`-`首选项`-`引用`-中勾选`在参考文献里包含文章URL链接`才会正常显示。

显示效果：

> ```

> [1]<br>
> [2]<br>
> [3]<br>
> [4]<br>

> [1]	崔威, 李晓英, 郭宜薇. 基于博弈论组合赋权的水电站事故风险评价[J/OL]. 南水北调与水利科技(中英文), 2022: 1–10[2022-01-24]. http://kns.cnki.net/kcms/detail/13.1430.tv.20210918.1105.002.html.<br>
> [2]	韩敏义, 李巧玲, 陈红叶. 复合磷酸盐在食品中的应用[J]. 中国食品添加剂, 2004(03): 93–96.<br>
> [3]	夏建军, 张俊丰, 李源栋, 等. 无溶剂微波萃取肉桂精油及成分分析[J]. 现代食品科技, 2021, 37(08): 258-265+167.<br>
> [4]	Cho H-K, Kim M-H, Park S-K, et al. Analysis of benzo[a]pyrene content and risk assessment[J]. Food Science of Animal Resources, 2011, 31(6): 960–965.<br>
> ```


## [410shanghai-jiao-tong-university]
[002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl]基础上修改，[上海交通大学学位论文](https://gk.sjtu.edu.cn/Data/View/648)样式，参考文献列表姓名为名缩写（不带点）+姓。支持中文作者超过 3 个为“`等`”，英文为“`et al`”。
> ```
显示效果<sup>[1-4]</sup>

[1]	B E Gel’fand, S P Medvedev, A N Polenov, et al. Basic self-ignition regimes and conditions for their realization in combustible gas mixtures[J]. Combustion, Explosion and Shock Waves, 1997, 33(2): 127-133.<br>
[2]	金红兰, 金龙勋. 技术创新背景下的食品产业现状与发展趋势[J]. 粮食科技与经济, 2021, 46(03): 37-39.<br>
[3]	H Zhan, Y Zhou, G Zhang, et al. Carbon nanothreads enable remarkable enhancement in the thermal conductivity of polyethylene dagger[J]. Nanoscale, 2021, 13(14): 6934-6943.<br>
[4]	罗雨舟, 向天宇, 郝柳青. 卷积神经网络在结构损伤检测中的应用[J]. 土木工程与管理学报, 2020, 37(03): 155-161+173.<br>
> ```

## [411southwest-university.csl]

网友**洋芋**（__chivele.lee@gmail.com__）分享，[西南大学学位论文](http://pgs.swu.edu.cn/info/1052/2292.htm
)样式，正文中两个中文作者之间为“`和`”，英文作者为“`and`”。参考文献列表中文文献排在前面，英文文献排在后面（需要在条目中将 `language` 英文设为 `en-US`，中文为`zh-CN`，否则无法实现按语言排序）。英文期刊名称为斜体。支持中文作者超过 3 个为“`等`”，英文为“`et al`”。

显示效果：

> ```
> (杨赫鸿等, 2012)
> (ElMasry et al., 2011)
> (庞之列和何栩晓, 2014)
> (Gross et al., 2013)
> ```

>  庞之列, 何栩晓. 一种基于LF-NMR技术的不同含水量猪肉检测方法研究[J]. 食品科学, 2014(04): 142-145.<br>
>  杨赫鸿, 李沛军, 孔保华, 等. 低场核磁共振技术在肉品科学研究中的应用[J]. 食品工业科技, 2012(13): 400-405.<br>
>  ElMasry G, Sun D-W, Allen P. Non-destructive determination of water-holding capacity in fresh beef by using NIR hyperspectral Imaging[J]. *Food Research International*, 2011, 44(9): 2624-2633. DOI:10.1016/j.foodres.2011.05.001.<br>
>  Gross J B, Furterer A, Carlson B M, et al. An Integrated Transcriptome-Wide Analysis of Cave and Surface Dwelling Astyanax Mexicanus[J]. *PLOS ONE*, 2013, 8(2): e55659. DOI:10.1371/journal.pone.0055659.<br>


## [414yunnan-university.csl]

云南大学理科类参考文献样式，[010gb-t-7714-2015-author-date-bilingual-no-uppercase.csl] 基础上修改，网友 @Sunny-27 分享。文中引用中文两个作者之间为“和”，英文为 “et”。

显示效果：

> ```
> Lawal et al., 2018）
> 白俊红和蒋伏心, 2015）
> LeSage et Pace, 2009）
> 沙文兵, 2012）
> ```

> 白俊红, 蒋伏心. 2015. 协同创新、空间关联与区域创新绩效[J]. 经济研究. 50(07): 174–187.<br>
> 沙文兵. 2012. 对外直接投资、逆向技术溢出与国内创新能力——基于中国省际面板数据的实证研究[J]. 世界经济研究. (03): 69-74+89.<br>
> Lawal I O, Ankrah A O, Popoola G O, et al. 2018. 18F-FDG-PET metabolic metrics and International Prognostic Score for risk assessment in HIV-infected patients with Hodgkin Lymphoma[J]. Nuclear Medicine Communications. 39(11): 1005–1012. DOI:10.1097/MNM.0000000000000905.<br>
> LeSage J, Pace R K. 2009. Introduction to spatial Econometrics[M]. Chapman and Hall/CRC.<br>


## [415zhejiang-university.csl]
浙江大学学位论文样式（<http://grs.zju.edu.cn/redir.php?catalog_id=10038&object_id=12782>），
网友**yc**（__ycnotion@protonmail.com__）分享，
正文中作者年代格式，文末参考文献列表英文文献在前，中文在后，作者数量超过`3`个，英文显示为`et al`，中文显示`等`。

显示效果：

> ```

> （Gao et al., 2019） <br>
> （Zhang Y et al., 2021）<br>
>（韩敏义等，2009）<br>
>（徐渊等，2021）<br>

>Gao W, Ota H, Kiriya D, et al. Flexible electronics toward wearable sensing[J]. Accounts of Chemical Research,2019, 52(3): 523–533.<br>
>Zhang Y, Chen P, Wang Q, et al. High-Capacity and Kinetically Accelerated Lithium Storage in Moo3 Enabled by Oxygen Vacancies and Heterostructure[J]. Advanced Energy Materials,2021, 11(31): 2101712.<br>
>韩敏义，费英，徐幸莲，，等.低场NMR研究pH对肌原纤维蛋白热诱导凝胶的影响[J]. 中国农业科学,2009, 42(06): 2098–2104.<br>
>徐渊，韩敏义，陈艳萍，，等.三个品种白切鸡食用品质评价[J]. 食品工业科技,2021, 42(01): 89–95.<br>
> ```

## [416zhongnan-university-of-economics-and-law.csl]

网友**李刚**（__gang.li.0814@gmail.com__）分享，[中南财经政法大学学位论文](http://yjsy.zuel.edu.cn/_upload/article/files/91/48/4c466ac54413adece8865a87def4/43ec08b9-9d6f-41fc-95a3-a78c054e51fb.pdf
)样式，中文文献排在前面，英文文献排在后面（需要在条目中将 `language` 英文设为 `en-US`，中文为`zh-CN`，否则无法实现按语言排序）。支持中文作者超过 3 个为“`等`”，英文为“`et al`”。

显示效果：

> ```
> （Berhe et al, 2014）
> （王越溪和王鹏, 2018）
> （庞之列等, 2014）
> （He et al, 2013）
> ```

> [1] 王越溪, 王鹏. 鸡肉早餐肠加工技术研究进展[J]. 中国家禽, 2018, 40(23): 37–42.	<br>
> [2] 庞之列, 何栩晓, 李春保. 一种基于LF-NMR技术的不同含水量猪肉检测方法研究[J]. 食品科学, 2014(04): 142–145.	<br>
> [3] Berhe D T, Engelsen S B, Hviid M S, Lametsch R. Raman spectroscopic study of effect of the cooking temperature and time on meat Proteins[J]. Food Research International, 2014, 66: 123–131.<br>
> [4] He H, Wu D, Sun D. Non-destructive and rapid analysis of moisture distribution in farmed Atlantic salmon (Salmo salar) fillets using visible and near-infrared hyperspectral Imaging[J]. Innovative Food Science & Emerging Technologies, 2013, 18: 237–245.


## [418huazhong-university-of-science-and-technology.csl]

[华中科技大学学位论文样式](http://gs.hust.edu.cn/info/1019/11815.htm)：作者按中文写法，姓在前、名在后；英文书刊：作者按英文习惯写法，如名在前、姓在后，名用首字母缩写、姓用全称。一般6人以内须列出全部作者，6人以上写6人再加`等`（英文加`et al`））。每个参考文献的最后不加标点符号，1.5倍行间距。

显示效果：

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">[1] 闫明礼, 张东刚. CFG桩复合地基技术及工程实践. 第二版. 北京: 中国水利水电出版社, 2006</div>
    <div class="csl-entry">[2] M. Chalfie, S. Kain. Green fluorescent protein: properties, applications, and protocols. 2nd ed. Hoboken, New Jersey: Wiley-Interscience, 1998</div>
    <div class="csl-entry">[3] 詹向红, 李德新. 中医药防治阿尔茨海默病实验研究述要. 中华中医药学刊, 2004, 22(11): 2094-2096</div>
    <div class="csl-entry">[4] E. S. Lein, M. J. Hawrylycz, N. Ao, M. Ayres, A. Bensinger, A. Bernard, et al. Genome-wide atlas of gene expression in the adult mouse brain. Nature, 2007, 445(7124): 168-176</div>
    <div class="csl-entry">[5] M. L. Bouxsein, S. K. Boyd, B. A. Christiansen, R. E. Guldberg, K. J. Jepsen, R. Müller. Guidelines for assessment of bone microstructure in rodents using micro-computed tomography. Journal of Bone and Mineral Research, 2010, 25(7): 1468-1486</div>
    <div class="csl-entry">[6] S. Yamaki, M. Abet, M. Kawamata, M. Yoshizawa. Performance evaluation of phase-only correlation functions from the viewpoint of correlation Filters. In: 2018 Asia-Pacific Signal and Information Processing Association Annual Summit and Conference (APSIPA ASC), Honolulu, HI, USA, 12–15 Nov. 2018, IEEE, 2019: 1361-1364</div>
    <div class="csl-entry">[7] T. Yao, J. Wan, P. Huang, X. He, F. Wu, C. Xie. Building efficient key-value stores via a lightweight compaction tree. ACM Transactions on Storage, 2018, 13(4): 1-28</div>
    <div class="csl-entry">[8] 刘加林. 多功能一次性压舌板. 中国, 发明专利, ZL92214985.2, 1993</div>
    <div class="csl-entry">[9] 李清泉. 基于混合结构的三维GIS数据模型与空间分析研究: [博士学位论文]. 武汉: 武汉测绘科技大学, 1998</div>
  </div>
</blockquote>

## [419beijing-normal-university.csl]

[北京师范大学](http://bs.bnu.edu.cn/docs/20150408171708698394.pdf)作者年代参考文献样式，[011gb-t-7714-2015-author-date-bilingual-no-uppercase-no-url-doi-full-width-parentheses.csl] 基础上修改，
正文中两个中文作者之间为`和`，英文为`&`。

显示效果
> ```
> （Ekstrom & Moser, 2014）
> （谭羚雁和娄成武, 2012）
> （Sun et al., 2022）
> （马欢, 2011）


> 马欢, 2011. 人类活动影响下海河流域典型区水循环变化分析[D]. 北京: 清华大学: 27.<br>
> 谭羚雁, 娄成武, 2012. 保障性住房政策过程的中央与地方政府关系——政策网络理论的分析与应用[J]. 公共管理学报, 9(1): 52-63+124-125.<br>
> Ekstrom J A, Moser S C, 2014. Identifying and overcoming barriers in urban climate adaptation: Case study findings from the San Francisco Bay Area, California, USA[J]. Urban Climate, 9: 54-74.<br>
> Sun T, Shan M, Rong X, et al., 2022. Estimating the spatial distribution of solar photovoltaic power generation potential on different types of rural rooftops using a deep learning network applied to satellite images[J]. Applied Energy, 315: 119025.<br>
> ```

## [420beihang-university.csl]
[北京航空航天大学](http://graduate.buaa.edu.cn/info/1039/7831.htm)作者年代参考文献样式，
[015jm-chinese-std-gb-t-7714-2005-revised.csl]基础上修改，作者首字母大写，题目词首字母大写，结尾无点，3人以内列出全部作者，3人以上写3人加`等`（英文加`et al`））。

显示效果

> ```
引用的文献<sup>[1]</sup><br>
继续<sup>[2–4]</sup><br>
最后<sup>[5]</sup><br>

>[1]	巫远. 基于有效覆盖的遥感卫星行业用户需求综合与满足度评估[D]. 武汉: 武汉大学, 2017<br>
>[2]	Poisson J. B., Oriot H. M., Tupin F. Ground Moving Target Trajectory Reconstruction in Single-Channel Circular SAR[J]. IEEE Transactions on Geoscience and Remote Sensing, 2015, 53(4): 1976–1984<br>
>[3]	李芳芳, 张月婷, 仇晓兰, 等. 高分辨率圆迹干涉SAR新体制设计及信号处理关键技术[A]. 第四届高分辨率对地观测学术年会论文集[C]. 高分辨率对地观测系统重大专项管理办公室、中国科学院重大科技任务局、中国航天科技集团公司宇航部、中国航天科工集团公司空间工程部、中国测绘学会摄影测量与遥感专业委员会, 2017: 1321–1332<br>
>[4]	Bamler R. A Comparison of Range-Doppler and Wavenumber Domain Sar Focusing Algorithms[J]. IEEE Transactions on Geoscience and Remote Sensing, 1992, 30(4): 706–713<br>
>[5]	Des Marais D. J., Strauss H., Summons R. E., et al. Carbon Isotope Evidence for the Stepwise Oxidation of the Proterozoic Environment[J]. Nature, 1992, 359: 605–609<br>

## [421hebei-agricultural-university.csl]
[河北农业大学](https://www.hebau.edu.cn/)学位论文参考文献样式。

## [422chinese-academy-of-agricultural-sciences.csl]
[中国农业科学院](https://gs.caas.cn/xwxk/xwsy/227175.htm)作者年代学位论文参考文献样式，按著者字顺和出版年排序
中文文献在前，按汉语拼音升序排序，英文文献在后，按字母升序排序。使用时需要将英文条目语言改为`en-US`，中文改为`zh-CN`。

显示效果

> ```
>（王临惠 等, 2010; 李泽仟 等, 2016）
>（沈寿国, 2004）****（邓一刚, 2006）；****（ZHANG et al., 2017）
>（WANG, 2003）****（霍斯尼, 1989）****（DES MARAIS et al., 1992）
>（CAIRNS, 1965）

>李泽仟, 顾欢, 康乐, 张亚, 宋焕禄, 2016. 当归中关键气味活性化合物的鉴定及其在煎煮过程中变化规律研究. 食品工业科技, 37(9): 311-316. DOI: 10.13386/j.issn1002-0306.2016.09.052.<br>
>沈寿国, 2004. 蛇床子素抑制植物病原真菌机制的初步研究. 南京农业大学.<br>
>王临惠, 支建刚, 王忠一, 2010. 天津方言的源流关系刍议. 山西师大学报(社会科学版), 37(4): 147-151.<br>
>邓一刚, 2006. 全智能节电器: 200610171314.3.<br>
>霍斯尼, 1989. 谷物科学与工艺学原理. 李庆龙, 译. 2 版. 北京: 中国食品出版社: 15-20.<br>
>WANG Z L, 2003. Handbook of Nanophase and Nanostructured Materials. New York: Kluwer Academic/Plenum [u.a.]. DOI: 10.1007/0-387-23814-X.<br>
>ZHANG Y F, LUO H X, GUO Z, ZHEN X J, CHEN M, LIU J N, 2017. Cleaning of carbon-contaminated optics using O2/Ar plasma. Nuclear Science and Techniques, 28(9): 127. DOI: 10.1007/s41365-017-0274-z.<br>
>CAIRNS B R, 1965. Infrared spectroscopic studies of solid oxygen. Berkeley: Univ. of California.<br>
>DES MARAIS D J, STRAUSS H, SUMMONS R E, HAYES J M, 1992. Carbon isotope evidence for the stepwise oxidation of the proterozoic environment. Nature, 359(6396): 605-609. DOI: 10.1038/359605a0.<br>
> ```

## [423ningbo-university]

[宁波大学](http://graduate.nbu.edu.cn/info/1049/15542.htm)学位论文样式。

## [424harbin-university-of-science-and-technology.csl]

[哈尔滨理工大学](http://graduate.hrbust.edu.cn/info/1245/5420.htm)学位论文样式，**未经完整测试**。

## [425shenyang-agricultural-university.csl]

[沈阳农业大学](https://grs.syau.edu.cn/info/1173/5583.htm)学位论文样式，[403huazhong-agricultural-university.csl]基础上修改，中文两个作者之间为`与`，英文为`and`，作者首字母大写，参考文献表显示全部作者。

显示效果：

> ```
>（Andrews and Alichanidis, 1990）
>（周棋与胡琴, 2021）
>（王雷等, 2021）
>（Dong et al, 2022）
>（Ahmad, 2022）

>1. Andrews A, Alichanidis E. The plastein reaction revisited: Evidence for a purely aggregation reaction mechanism. Food Chemistry. 1990, 35(4): 243–261.
>2. Ahmad M. Genomics and transcriptomics to protect rice (Oryza sativa. L.) from abiotic stressors: -pathways to achieving zero hunger. Front. Plant Sci.. 2022, 13: 1002596.
>3. Dong Q, Wallrad L, Almutairi BO, Kudla J. Ca2+ signaling in plant responses to abiotic stresses. Journal of Integrative Plant Biology. 2022, 64(2): 287–300. .
>4. 周棋, 胡琴. 水稻CNGCs家族的鉴定及非生物胁迫诱导表达模式分析. 分子植物育种. 2021: 1–16.
>5. 王雷, 郭岩, 杨淑华. 非生物胁迫与环境适应性育种的现状及对策. 中国科学:生命科学. 2021, 51(10): 1424–1434.
> ```


## [426beijing-forestry-university.csl]

网友**不秃燃的小老弟**（__yanglun2019@126.com__）分享，[北京林业大学学位论文](http://graduate.bjfu.edu.cn/xwgl/xwlw/349457.html)样式，<br>
[201comparative-economic-and-social-systems.csl]基础上修改。中文文献排在前面，英文文献排在后面，<br>
并按第一作者的姓氏首字母排序。**注意**：学位论文、报告、专利的地点补充到【地点/Place】字段，如第二篇文献的地点为南京。<br>
专著的页码补充到【存档位置/Loc.in Archive】字段，如倒数第二篇文献的页码为520。<br>
专著和会议集中析出的文献的页码补充到【页数/Pages】字段，如第六篇文献的页码为220-226。<br>

显示效果：

>（刘章军等，2022; Wang et al.，2022）<br>
>（田力，2022; Laury，2006）<br>
>（Cornforth and Hunt，2008; 孙天利等，2022; 赵爱林等，2022; Nae，1994）<br>
>（Frisch et al.，2015; 仇国贤和钱颖，2014; 洪瑾，2021; 吴玉辉和吴耀东，2022）<br>

>仇国贤, 钱颖. 我碳四炔烃加氢技术“中考”合格[N]. 中国化工报, 2014-05-20(2).<br>
>洪瑾. 一种基于对抗网络的细粒度跨媒体检索方法研究[D]. 南京: 南京理工大学, 2021: 1-2.<br>
>刘章军, 张文远, 彭辉. 多向不规则波浪模拟的降维方法[J]. 工程力学, 2022, 2(3): 1-10.<br>
>孙天利, 程楚怡, 杨涔, 张晗, 王虹玲. 山芹菜金翠香梨混合果醋酿造工艺的研究[J]. 中国调味品, 2022, 47(9): 101-105.<br>
>田力. 内部控制质量对零售企业绩效改善的影响——基于可持续发展视角的分析[J]. 商业经济研究, 2022(22): 130-133.<br>
>吴玉辉, 吴耀东. 一种常温灌缝材料的研究[C]//世界交通运输大会(WTC2022)论文集(公路工程篇). 南京: 中国科学技术协会、交通运输部、中国工程院、湖北省人民政府, 2022: 220-226.<br>
>赵爱林, 王晟嫣, 许彦斌, 汤芳, 孙秋洁, 曾鸣. 能源革命背景下电网企业参与综合能源服务市场发展策略研究——基于动态演化视角的电网企业与发电企业竞合博弈[J]. 价格理论与实践, 2022(6): 130-134, 194.<br>
>Cornforth D, Hunt M. Low-oxygen packaging of fresh meat with carbon monoxide[M]//AMSA White Paper Series. USA: National Academy of Science Press, 2008: 12.<br>
>Frisch N K, Ahmed Y, Sethi S, Neill D, Kalinicheva T, Shidham V. The effectiveness of acetic acid wash protocol and the interpretation patterns of blood contaminated cervical cytology ThinPrep ® specimens[J]. CytoJournal, 2015, 12: 23.<br>
>Laury A M. Evaluation of modified atmosphere packaging with carbon monoxide for fresh ground pork, fresh pre-rigor pork sausage and fresh post-rigor pork sausage[D]. Iowa State: Iowa State University, 2006.<br>
>Nae W. Nutrient requirements of poultry[M]. Washington: National Academy of Science Press, 1994: 520.<br>
>Wang Y Y, Tian G, Mao K, Chitrakar B, Wang Z, Liu J, Bai X, Sang Y, Gao J. Effects of four cooking methods on flavor and sensory characteristics of scallop muscle[J]. Frontiers in Nutrition, 2022, 9: 1022156.<br>

## [427university-of-electronic-science-and-technology-of-china.csl]

网友**不秃燃的小老弟**（__yanglun2019@126.com__）分享，[电子科技大学学位论文](https://gr.uestc.edu.cn/xiazai/114/3917/)样式，[404jinan-university.csl]基础上修改。
学位论文、报告、专利的地点补充到【地点/Place】字段，如[11]中的地点为南京。<br>
专著的页码补充到【存档位置/Loc.in Archive】字段，如[8]中的页码为520。<br>
专著和会议集中析出的文献的页码补充到【页数/Pages】字段，如[12]中的页码为220-226。<br>

显示效果：

> <sup>[1-12]<sup>

>[1]	刘章军, 张文远, 彭辉. 多向不规则波浪模拟的降维方法[J]. 工程力学, 2022, 2(3): 1-10.<br>
>[2]	Wang Y Y, Tian G, Mao K, et al. Effects of four cooking methods on flavor and sensory characteristics of scallop Muscle[J]. Frontiers in Nutrition, 2022, 9: 1022156.<br>
>[3]	田力. 内部控制质量对零售企业绩效改善的影响——基于可持续发展视角的分析[J]. 商业经济研究, 2022(22): 130-133.<br>
>[4]	Laury A M. Evaluation of modified atmosphere packaging with carbon monoxide for fresh ground pork, fresh pre-rigor pork sausage and fresh post-rigor pork Sausage[D]. Iowa State: Iowa State University, 2006.<br>
>[5]	Cornforth D, Hunt M. Low-oxygen packaging of fresh meat with carbon Monoxide[M]//AMSA White Paper Series. USA: National Academy of Science Press, 2008: 12.<br>
>[6]	孙天利, 程楚怡, 杨涔, 等. 山芹菜金翠香梨混合果醋酿造工艺的研究[J]. 中国调味品, 2022, 47(9): 101-105.<br>
>[7]	赵爱林, 王晟嫣, 许彦斌, 等. 能源革命背景下电网企业参与综合能源服务市场发展策略研究——基于动态演化视角的电网企业与发电企业竞合博弈[J]. 价格理论与实践, 2022(6): 130-134, 194.<br>
>[8]	Nae W. Nutrient requirements of Poultry[M]. 9rd ed. Washington: National Academy of Science Press, 1994. 520.<br>
>[9]	Frisch N K, Ahmed Y, Sethi S, et al. The effectiveness of acetic acid wash protocol and the interpretation patterns of blood contaminated cervical cytology ThinPrep ® Specimens[J]. CytoJournal, 2015, 12: 23.<br>
>[10]	仇国贤, 钱颖. 我碳四炔烃加氢技术“中考”合格[N]. 中国化工报, 2014-05-20(2).<br>
>[11]	洪瑾. 一种基于对抗网络的细粒度跨媒体检索方法研究[D]. 南京: 南京理工大学, 2021, 1-2.<br>
>[12]	吴玉辉, 吴耀东. 一种常温灌缝材料的研究[C]. 世界交通运输大会(WTC2022)论文集(公路工程篇), 南京, 2022: 220-226.<br>

## [428fujian-agriculture-and-forestry-university.csl]

网友**不秃燃的小老弟**（__yanglun2019@126.com__）分享，[福建农林大学学位论文](https://yjsy.fafu.edu.cn/fa/05/c8301a195077/page.htm)样式，[404jinan-university.csl]基础上修改。
学位论文、报告、专利的地点补充到【地点/Place】字段，如[11]中的地点为南京。<br>
专著的页码补充到【存档位置/Loc.in Archive】字段，如[8]中的页码为520。<br>
专著和会议集中析出的文献的页码补充到【页数/Pages】字段，如[12]中的页码为220-226。<br>

显示效果：

> <sup>[1-12]<sup>

>[1]	刘章军, 张文远, 彭辉. 多向不规则波浪模拟的降维方法[J]. 工程力学, 2022, 2(3): 1-10.<br>
>[2]	Wang Y Y, Tian G, Mao K, et al. Effects of four cooking methods on flavor and sensory characteristics of scallop Muscle[J]. Frontiers in Nutrition, 2022, 9: 1022156.<br>
>[3]	田力. 内部控制质量对零售企业绩效改善的影响——基于可持续发展视角的分析[J]. 商业经济研究, 2022(22): 130-133.<br>
>[4]	Laury A M. Evaluation of modified atmosphere packaging with carbon monoxide for fresh ground pork, fresh pre-rigor pork sausage and fresh post-rigor pork Sausage[D]. Iowa State: Iowa State University, 2006.<br>
>[5]	Cornforth D, Hunt M. Low-oxygen packaging of fresh meat with carbon Monoxide[M]//AMSA White Paper Series. USA: National Academy of Science Press, 2008: 12.<br>
>[6]	孙天利, 程楚怡, 杨涔, 等. 山芹菜金翠香梨混合果醋酿造工艺的研究[J]. 中国调味品, 2022, 47(9): 101-105.<br>
>[7]	赵爱林, 王晟嫣, 许彦斌, 等. 能源革命背景下电网企业参与综合能源服务市场发展策略研究——基于动态演化视角的电网企业与发电企业竞合博弈[J]. 价格理论与实践, 2022(6): 130-134, 194.<br>
>[8]	Nae W. Nutrient requirements of Poultry[M]. Washington: National Academy of Science Press, 1994. 520.<br>
>[9]	Frisch N K, Ahmed Y, Sethi S, et al. The effectiveness of acetic acid wash protocol and the interpretation patterns of blood contaminated cervical cytology ThinPrep ® Specimens[J]. CytoJournal, 2015, 12: 23.<br>
>[10]	仇国贤, 钱颖. 我碳四炔烃加氢技术“中考”合格[N]. 中国化工报, 2014-05-20(2).<br>
>[11]	洪瑾. 一种基于对抗网络的细粒度跨媒体检索方法研究[D]. 南京: 南京理工大学, 2021. 1-2.<br>
>[12]	吴玉辉, 吴耀东. 一种常温灌缝材料的研究[C]//世界交通运输大会(WTC2022)论文集(公路工程篇). 南京: 中国科学技术协会、交通运输部、中国工程院、湖北省人民政府, 2022: 220-226.<br>

## [429guizhou-university.csl]

网友**不秃燃的小老弟**（__yanglun2019@126.com__）分享，[贵州大学学位论文](http://gs.gzu.edu.cn/2021/0518/c11830a151778/page.htm)样式，<br>
[201comparative-economic-and-social-systems.csl]基础上修改。参考文献表按照引用顺序编码并排序<br>
**注意**：学位论文、报告、专利的地点补充到【地点/Place】字段，如[11]中的地点为南京。<br>
专著的页码补充到【存档位置/Loc.in Archive】字段，如[8]中的页码为520。<br>
专著和会议集中析出的文献的页码补充到【页数/Pages】字段，如[12]中的页码为220-226。<br>

显示效果：

>（刘章军等，2022; Wang et al.，2022）<br>
>（田力，2022; Laury，2006）<br>
>（Cornforth and Hunt，2008; 孙天利等，2022; 赵爱林等，2022; Nae，1994）<br>
>（Frisch et al.，2015; 仇国贤和钱颖，2014; 洪瑾，2021; 吴玉辉和吴耀东，2022）<br>

>1.	刘章军, 张文远, 彭辉. 多向不规则波浪模拟的降维方法[J]. 工程力学, 2022, 2(3): 1-10.<br>
>2.	Wang Y Y, Tian G, Mao K, Chitrakar B, Wang Z, Liu J, Bai X, Sang Y, Gao J. Effects of four cooking methods on flavor and sensory characteristics of scallop muscle[J]. Frontiers in Nutrition, 2022, 9: 1022156.<br>
>3.	田力. 内部控制质量对零售企业绩效改善的影响——基于可持续发展视角的分析[J]. 商业经济研究, 2022(22): 130-133.<br>
>4.	Laury A M. Evaluation of modified atmosphere packaging with carbon monoxide for fresh ground pork, fresh pre-rigor pork sausage and fresh post-rigor pork sausage[D]. Iowa State: Iowa State University, 2006.<br>
>5.	Cornforth D, Hunt M. Low-oxygen packaging of fresh meat with carbon monoxide[M]//AMSA White Paper Series. USA: National Academy of Science Press, 2008: 12.<br>
>6.	孙天利, 程楚怡, 杨涔, 张晗, 王虹玲. 山芹菜金翠香梨混合果醋酿造工艺的研究[J]. 中国调味品, 2022, 47(9): 101-105.<br>
>7.	赵爱林, 王晟嫣, 许彦斌, 汤芳, 孙秋洁, 曾鸣. 能源革命背景下电网企业参与综合能源服务市场发展策略研究——基于动态演化视角的电网企业与发电企业竞合博弈[J]. 价格理论与实践, 2022(6): 130-134, 194.<br>
>8.	Nae W. Nutrient requirements of poultry[M]. Washington: National Academy of Science Press, 1994: 520.<br>
>9.	Frisch N K, Ahmed Y, Sethi S, Neill D, Kalinicheva T, Shidham V. The effectiveness of acetic acid wash protocol and the interpretation patterns of blood contaminated cervical cytology ThinPrep ® specimens[J]. CytoJournal, 2015, 12: 23.<br>
>10.	仇国贤, 钱颖. 我碳四炔烃加氢技术“中考”合格[N]. 中国化工报, 2014-05-20(2).<br>
>11.	洪瑾. 一种基于对抗网络的细粒度跨媒体检索方法研究[D]. 南京: 南京理工大学, 2021: 1-2.<br>
>12.	吴玉辉, 吴耀东. 一种常温灌缝材料的研究[C]//世界交通运输大会(WTC2022)论文集(公路工程篇). 南京: 中国科学技术协会、交通运输部、中国工程院、湖北省人民政府, 2022: 220-226.<br>

## [430hainan-university.csl]

网友**不秃燃的小老弟**（__yanglun2019@126.com__）分享，[海南大学学位论文](https://www.doc88.com/p-1813465766850.html)样式，[404jinan-university.csl]基础上修改。<br>
参考文献表部分按照中文文献排在前面，英文文献排在后面，并按第一作者的姓氏首字母排序。<br>
**注意**：学位论文、报告、专利的地点补充到【地点/Place】字段，如[2]中的地点为南京。<br>
专著的页码补充到【存档位置/Loc.in Archive】字段，如[11]中的页码为520。<br>
专著和会议集中析出的文献的页码补充到【页数/Pages】字段，如[6]中的页码为220-226。<br>

显示效果：

>（刘章军等，2022; Wang et al.，2022）<br>
>（田力，2022; Laury，2006）<br>
>（Cornforth and Hunt，2008; 孙天利等，2022; 赵爱林等，2022; Nae，1994）<br>
>（Frisch et al.，2015; 仇国贤和钱颖，2014; 洪瑾，2021; 吴玉辉和吴耀东，2022）<br>

>[1]	仇国贤, 钱颖. 我碳四炔烃加氢技术“中考”合格[N]. 中国化工报. 2014-05-20(2).<br>
>[2]	洪瑾. 一种基于对抗网络的细粒度跨媒体检索方法研究[D]. 南京. 南京理工大学. 2021.<br>
>[3]	刘章军, 张文远, 彭辉. 多向不规则波浪模拟的降维方法[J]. 工程力学, 2022, 2(3): 1-10.<br>
>[4]	孙天利, 程楚怡, 杨涔, 等. 山芹菜金翠香梨混合果醋酿造工艺的研究[J]. 中国调味品, 2022, 47(9): 101-105.<br>
>[5]	田力. 内部控制质量对零售企业绩效改善的影响——基于可持续发展视角的分析[J]. 商业经济研究, 2022(22): 130-133.<br>
>[6]	吴玉辉, 吴耀东. 一种常温灌缝材料的研究[A]. 世界交通运输大会(WTC2022)论文集(公路工程篇)[C]. 南京: 中国科学技术协会、交通运输部、中国工程院、湖北省人民政府, 2022: 220-226.<br>
>[7]	赵爱林, 王晟嫣, 许彦斌, 等. 能源革命背景下电网企业参与综合能源服务市场发展策略研究——基于动态演化视角的电网企业与发电企业竞合博弈[J]. 价格理论与实践, 2022(6): 130-134, 194.<br>
>[8]	Cornforth D, Hunt M. Low-oxygen packaging of fresh meat with carbon Monoxide[A]. AMSA White Paper Series[C]. USA: National Academy of Science Press, 2008: 12.<br>
>[9]	Frisch N K, Ahmed Y, Sethi S, et al. The effectiveness of acetic acid wash protocol and the interpretation patterns of blood contaminated cervical cytology ThinPrep ® Specimens[J]. CytoJournal, 2015, 12: 23.<br>
>[10]	Laury A M. Evaluation of modified atmosphere packaging with carbon monoxide for fresh ground pork, fresh pre-rigor pork sausage and fresh post-rigor pork Sausage[D]. Iowa State. Iowa State University. 2006.<br>
>[11]	Nae W. Nutrient requirements of Poultry[M]. 9rd ed. Washington: National Academy of Science Press, 1994: 520.<br>
>[12]	Wang Y Y, Tian G, Mao K, et al. Effects of four cooking methods on flavor and sensory characteristics of scallop Muscle[J]. Frontiers in Nutrition, 2022, 9: 1022156.<br>

## [431hohai-university.csl]

网友**不秃燃的小老弟**（__yanglun2019@126.com__）分享，[河海大学学位论文](https://gs.hhu.edu.cn/_upload/article/files/30/7d/e5eafe3b4ef28e40f4569d9f928b/8ce9b41e-9c28-44e4-81a5-fff20722ab93.pdf)样式，<br>
[china-national-standard-gb-t-7714-2015-numeric.csl]基础上修改。<br>
学位论文、报告、专利的地点补充到【地点/Place】字段，如[11]中的地点为南京。<br>
专著的页码补充到【存档位置/Loc.in Archive】字段，如[8]中的页码为520。<br>
专著和会议集中析出的文献的页码补充到【页数/Pages】字段，如[12]中的页码为220-226。<br>

显示效果：

> <sup>[1-12]<sup>

>[1]	刘章军, 张文远, 彭辉. 多向不规则波浪模拟的降维方法[J]. 工程力学, 2022, 2(3): 1-10.<br>
>[2]	Wang Y Y, Tian G, Mao K, Chitrakar B, Wang Z, Liu J, Bai X, Sang Y, Gao J. Effects of four cooking methods on flavor and sensory characteristics of scallop Muscle[J]. Frontiers in Nutrition, 2022, 9: 1022156.<br>
>[3]	田力. 内部控制质量对零售企业绩效改善的影响——基于可持续发展视角的分析[J]. 商业经济研究, 2022(22): 130-133.<br>
>[4]	Laury A M. Evaluation of modified atmosphere packaging with carbon monoxide for fresh ground pork, fresh pre-rigor pork sausage and fresh post-rigor pork Sausage[D]. Iowa State: Iowa State University, 2006.<br>
>[5]	Cornforth D, Hunt M. Low-oxygen packaging of fresh meat with carbon Monoxide[M]//AMSA White Paper Series. USA: National Academy of Science Press, 2008: 12.<br>
>[6]	孙天利, 程楚怡, 杨涔, 张晗, 王虹玲. 山芹菜金翠香梨混合果醋酿造工艺的研究[J]. 中国调味品, 2022, 47(9): 101-105.<br>
>[7]	赵爱林, 王晟嫣, 许彦斌, 汤芳, 孙秋洁, 曾鸣. 能源革命背景下电网企业参与综合能源服务市场发展策略研究——基于动态演化视角的电网企业与发电企业竞合博弈[J]. 价格理论与实践, 2022(6): 130-134, 194.<br>
>[8]	Nae W. Nutrient requirements of Poultry[M]. Washington: National Academy of Science Press, 1994. 520.<br>
>[9]	Frisch N K, Ahmed Y, Sethi S, Neill D, Kalinicheva T, Shidham V. The effectiveness of acetic acid wash protocol and the interpretation patterns of blood contaminated cervical cytology ThinPrep ® Specimens[J]. CytoJournal, 2015, 12: 23.<br>
>[10]	仇国贤, 钱颖. 我碳四炔烃加氢技术“中考”合格[N]. 中国化工报, 2014-05-20(2).<br>
>[11]	洪瑾. 一种基于对抗网络的细粒度跨媒体检索方法研究[D]. 南京: 南京理工大学, 2021. 1-2.<br>
>[12]	吴玉辉, 吴耀东. 一种常温灌缝材料的研究[C]//世界交通运输大会(WTC2022)论文集(公路工程篇). 南京: 中国科学技术协会、交通运输部、中国工程院、湖北省人民政府, 2022: 220-226.<br>

## [432east-china-normal-university.csl]

网友**不秃燃的小老弟**（__yanglun2019@126.com__）分享，[华东师范大学学位论文](http://phy.ecnu.edu.cn/c2/3f/c24394a246335/page.htm)样式，<br>
[404jinan-university.csl]基础上修改。英文文献排在前面，中文文献排在后面，<br>
并按第一作者的姓氏首字母排序。文献条目语言字段：中文文献设为zh-CN，英文文献设为en-US。<br>
学位论文、报告、专利的地点补充到【地点/Place】字段，如第二篇文献中的地点为南京。<br>
专著和会议集中析出的文献的页码补充到【页数/Pages】字段，如倒数第二篇文献的页码为220-226。<br>

显示效果：

>（刘章军等，2022; Wang et al.，2022）<br>
>（田力，2022; Laury，2006）<br>
>（Cornforth and Hunt，2008; 孙天利等，2022; 赵爱林等，2022; Nae，1994）<br>
>（Frisch et al.，2015; 仇国贤和钱颖，2014; 洪瑾，2021; 吴玉辉和吴耀东，2022）<br>

>Cornforth D, Hunt M. Low-oxygen packaging of fresh meat with carbon Monoxide[M]//AMSA White Paper Series, USA: National Academy of Science Press, 2008: 12.<br>
>Frisch N K, Ahmed Y, Sethi S, et al. The effectiveness of acetic acid wash protocol and the interpretation patterns of blood contaminated cervical cytology ThinPrep ® Specimens[J]. CytoJournal, 2015, 12: 23.<br>
>Laury A M. Evaluation of modified atmosphere packaging with carbon monoxide for fresh ground pork, fresh pre-rigor pork sausage and fresh post-rigor pork Sausage[D]. (Master of Sciencedissertation). Iowa State: Iowa State University, 2006.<br>
>Nae W. Nutrient requirements of Poultry[M]. 9rd ed edition. Washington: National Academy of Science Press, 1994.<br>
>Wang Y Y, Tian G, Mao K, et al. Effects of four cooking methods on flavor and sensory characteristics of scallop Muscle[J]. Frontiers in Nutrition, 2022, 9: 1022156.<br>
>仇国贤, 钱颖. 我碳四炔烃加氢技术“中考”合格[N]. 中国化工报, 2014: 2.<br>
>洪瑾. 一种基于对抗网络的细粒度跨媒体检索方法研究[D]. 南京: 南京理工大学 1-2, 2021.<br>
>刘章军, 张文远, 彭辉. 多向不规则波浪模拟的降维方法[J]. 工程力学, 2022, 2(3): 1–10.<br>
>孙天利, 程楚怡, 杨涔, 等. 山芹菜金翠香梨混合果醋酿造工艺的研究[J]. 中国调味品, 2022, 47(9): 101–105.<br>
>田力. 内部控制质量对零售企业绩效改善的影响——基于可持续发展视角的分析[J]. 商业经济研究, 2022(22): 130–133.<br>
>吴玉辉, 吴耀东. 一种常温灌缝材料的研究[C]//世界交通运输大会(WTC2022)论文集(公路工程篇), 南京: 中国科学技术协会、交通运输部、中国工程院、湖北省人民政府, 2022: 220–226.<br>
>赵爱林, 王晟嫣, 许彦斌, 等. 能源革命背景下电网企业参与综合能源服务市场发展策略研究——基于动态演化视角的电网企业与发电企业竞合博弈[J]. 价格理论与实践, 2022(6): 130–134, 194.<br>

## [433jiangxi-university-of-finance-and-economics.csl]

网友**不秃燃的小老弟**（__yanglun2019@126.com__）分享，[江西财经大学学位论文](http://grs.jxufe.edu.cn/news-show-3761.html)样式，[404jinan-university.csl]基础上修改。<br>
参考文献表部分按照中文文献排在前面，英文文献排在后面，并按第一作者的姓氏首字母排序。<br>
**注意**：学位论文、报告、专利的地点补充到【地点/Place】字段，如[2]中的地点为南京。<br>
专著的页码补充到【存档位置/Loc.in Archive】字段，如[11]中的页码为520。<br>
专著和会议集中析出的文献的页码补充到【页数/Pages】字段，如[6]中的页码为220-226。<br>

显示效果：

>（刘章军等，2022; Wang et al.，2022）<br>
>（田力，2022; Laury，2006）<br>
>（Cornforth and Hunt，2008; 孙天利等，2022; 赵爱林等，2022; Nae，1994）<br>
>（Frisch et al.，2015; 仇国贤和钱颖，2014; 洪瑾，2021; 吴玉辉和吴耀东，2022）<br>

>[1]	仇国贤, 钱颖. 我碳四炔烃加氢技术“中考”合格[N]. 中国化工报. 2014-05-20(2).<br>
>[2]	洪瑾. 一种基于对抗网络的细粒度跨媒体检索方法研究[D]. 南京. 南京理工大学. 2021.<br>
>[3]	刘章军, 张文远, 彭辉. 多向不规则波浪模拟的降维方法[J]. 工程力学, 2022, 2(3): 1-10.<br>
>[4]	孙天利, 程楚怡, 杨涔, 等. 山芹菜金翠香梨混合果醋酿造工艺的研究[J]. 中国调味品, 2022, 47(9): 101-105.<br>
>[5]	田力. 内部控制质量对零售企业绩效改善的影响——基于可持续发展视角的分析[J]. 商业经济研究, 2022(22): 130-133.<br>
>[6]	吴玉辉, 吴耀东. 一种常温灌缝材料的研究[A]. 世界交通运输大会(WTC2022)论文集(公路工程篇)[C]. 南京: 中国科学技术协会、交通运输部、中国工程院、湖北省人民政府, 2022: 220-226.<br>
>[7]	赵爱林, 王晟嫣, 许彦斌, 等. 能源革命背景下电网企业参与综合能源服务市场发展策略研究——基于动态演化视角的电网企业与发电企业竞合博弈[J]. 价格理论与实践, 2022(6): 130-134, 194.<br>
>[8]	Cornforth D, Hunt M. Low-oxygen packaging of fresh meat with carbon Monoxide[A]. AMSA White Paper Series[C]. USA: National Academy of Science Press, 2008: 12.<br>
>[9]	Frisch N K, Ahmed Y, Sethi S, et al. The effectiveness of acetic acid wash protocol and the interpretation patterns of blood contaminated cervical cytology ThinPrep ® Specimens[J]. CytoJournal, 2015, 12: 23.<br>
>[10]	Laury A M. Evaluation of modified atmosphere packaging with carbon monoxide for fresh ground pork, fresh pre-rigor pork sausage and fresh post-rigor pork Sausage[D]. Iowa State. Iowa State University. 2006.<br>
>[11]	Nae W. Nutrient requirements of Poultry[M]. 9rd ed. Washington: National Academy of Science Press, 1994: 520.<br>
>[12]	Wang Y Y, Tian G, Mao K, et al. Effects of four cooking methods on flavor and sensory characteristics of scallop Muscle[J]. Frontiers in Nutrition, 2022, 9: 1022156.<br>

## [434shandong-agricultural-university.csl]

网友**不秃燃的小老弟**（__yanglun2019@126.com__）分享，[山东农业大学学位论文](http://yjsc.sdau.edu.cn/info/46/117.htm)样式，<br>
[201comparative-economic-and-social-systems.csl]基础上修改。引文的*et al*为斜体。<br>
中文文献排在前面，英文文献排在后面，并按第一作者的姓氏首字母排序。<br>
**注意**：学位论文、报告、专利的地点补充到【地点/Place】字段，如第二篇文献的地点为南京。<br>
专著的页码补充到【存档位置/Loc.in Archive】字段，如倒数第二篇文献的页码为520。<br>
专著和会议集中析出的文献的页码补充到【页数/Pages】字段，如第六篇文献的页码为220-226。<br>

显示效果：

>（刘章军等，2022; Wang et al.，2022）<br>
>（田力，2022; Laury，2006）<br>
>（Cornforth and Hunt，2008; 孙天利等，2022; 赵爱林等，2022; Nae，1994）<br>
>（Frisch et al.，2015; 仇国贤和钱颖，2014; 洪瑾，2021; 吴玉辉和吴耀东，2022）<br>

>仇国贤, 钱颖. 我碳四炔烃加氢技术“中考”合格[N]. 中国化工报, 2014-05-20(2).<br>
>洪瑾. 一种基于对抗网络的细粒度跨媒体检索方法研究[D]. 南京: 南京理工大学, 2021: 1-2.<br>
>刘章军, 张文远, 彭辉. 多向不规则波浪模拟的降维方法[J]. 工程力学, 2022, 2(3): 1-10.<br>
>孙天利, 程楚怡, 杨涔, 张晗, 王虹玲. 山芹菜金翠香梨混合果醋酿造工艺的研究[J]. 中国调味品, 2022, 47(9): 101-105.<br>
>田力. 内部控制质量对零售企业绩效改善的影响——基于可持续发展视角的分析[J]. 商业经济研究, 2022(22): 130-133.<br>
>吴玉辉, 吴耀东. 一种常温灌缝材料的研究[C]//世界交通运输大会(WTC2022)论文集(公路工程篇). 南京: 中国科学技术协会、交通运输部、中国工程院、湖北省人民政府, 2022: 220-226.<br>
>赵爱林, 王晟嫣, 许彦斌, 汤芳, 孙秋洁, 曾鸣. 能源革命背景下电网企业参与综合能源服务市场发展策略研究——基于动态演化视角的电网企业与发电企业竞合博弈[J]. 价格理论与实践, 2022(6): 130-134, 194.<br>
>Cornforth D., Hunt M. Low-oxygen packaging of fresh meat with carbon monoxide[M]//AMSA White Paper Series. USA: National Academy of Science Press, 2008: 12.<br>
>Frisch N. K., Ahmed Y., Sethi S., Neill D., Kalinicheva T., Shidham V. The effectiveness of acetic acid wash protocol and the interpretation patterns of blood contaminated cervical cytology ThinPrep ® specimens[J]. CytoJournal, 2015, 12: 23.<br>
>Laury A. M. Evaluation of modified atmosphere packaging with carbon monoxide for fresh ground pork, fresh pre-rigor pork sausage and fresh post-rigor pork sausage[D]. Iowa State: Iowa State University, 2006.<br>
>Nae W. Nutrient requirements of poultry[M]. Washington: National Academy of Science Press, 1994: 520.<br>
>Wang Y. Y., Tian G., Mao K., Chitrakar B., Wang Z., Liu J., Bai X., Sang Y., Gao J. Effects of four cooking methods on flavor and sensory characteristics of scallop muscle[J]. Frontiers in Nutrition, 2022, 9: 1022156.<br>

## [435yangzhou-university.csl]

网友**不秃燃的小老弟**（__yanglun2019@126.com__）分享，[扬州大学学位论文](http://yjsc.yzu.edu.cn/info/1043/2151.htm)样式，<br>
[201comparative-economic-and-social-systems.csl]基础上修改。<br>
学位论文、报告、专利的地点补充到【地点/Place】字段，如[11]中的地点为南京。<br>
专著的页码补充到【存档位置/Loc.in Archive】字段，如[8]中的页码为520。<br>
专著和会议集中析出的文献的页码补充到【页数/Pages】字段，如[12]中的页码为220-226。<br>
对于英文文献中的中文作者姓名，如需呈现出Yueyao Wang形式，使用茉莉花插件的合并姓名。<br>

显示效果：

> <sup>[1-12]<sup>

>[1]	刘章军, 张文远, 彭辉. 多向不规则波浪模拟的降维方法[J]. 工程力学, 2022, 2(3): 1-10.<br>
>[2]	Yueyao Wang, Guifang Tian, Kemin Mao, et al. Effects of four cooking methods on flavor and sensory characteristics of scallop muscle[J]. Frontiers in Nutrition, 2022, 9: 1022156.<br>
>[3]	田力. 内部控制质量对零售企业绩效改善的影响——基于可持续发展视角的分析[J]. 商业经济研究, 2022(22): 130-133.<br>
>[4]	AM Laury. Evaluation of modified atmosphere packaging with carbon monoxide for fresh ground pork, fresh pre-rigor pork sausage and fresh post-rigor pork sausage[D]. Iowa State: Iowa State University, 2006.<br>
>[5]	D Cornforth, M Hunt. Low-oxygen packaging of fresh meat with carbon monoxide[M]//AMSA White Paper Series. USA: National Academy of Science Press, 2008: 12.<br>
>[6]	孙天利, 程楚怡, 杨涔等. 山芹菜金翠香梨混合果醋酿造工艺的研究[J]. 中国调味品, 2022, 47(9): 101-105.<br>
>[7]	赵爱林, 王晟嫣, 许彦斌等. 能源革命背景下电网企业参与综合能源服务市场发展策略研究——基于动态演化视角的电网企业与发电企业竞合博弈[J]. 价格理论与实践, 2022(6): 130-134, 194.<br>
>[8]	W Nae. Nutrient requirements of poultry[M]. Washington: National Academy of Science Press, 1994: 520.<br>
>[9]	NK Frisch, Y Ahmed, S Sethi, et al. The effectiveness of acetic acid wash protocol and the interpretation patterns of blood contaminated cervical cytology ThinPrep ® specimens[J]. CytoJournal, 2015, 12: 23.<br>
>[10]	仇国贤, 钱颖. 我碳四炔烃加氢技术“中考”合格[N]. 中国化工报, 2014-05-20(2).<br>
>[11]	洪瑾. 一种基于对抗网络的细粒度跨媒体检索方法研究[D]. 南京: 南京理工大学, 2021: 1-2.<br>
>[12]	吴玉辉, 吴耀东. 一种常温灌缝材料的研究[C]//世界交通运输大会(WTC2022)论文集(公路工程篇). 南京: 中国科学技术协会、交通运输部、中国工程院、湖北省人民政府, 2022: 220-226.<br>


## [436wuhan-university-undergraduate.csl]

《[武汉大学本科生毕业论文（设计）](https://civ.whu.edu.cn/__local/7/65/BE/EBE513F22AD878EAE587C0D0081_14AFF292_28400.doc?e=..doc)》样式。显示效果：

> <sup>[1-9]</sup>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">[1] 戴军, 袁惠新, 俞建峰. 膜技术在含油废水处理中的应用[J]. 膜科学与技术, 2002(01): 59-64.</div>
    <div class="csl-entry">[2] 毛峡, 孙赟. 和谐图案的自动生成研究[A]. 第一届中国情感计算及智能交互学术会议论文集[C]. 北京: 中国科学院自动化研究所, 2003: 293-297.</div>
    <div class="csl-entry">[3] 王湛. 膜分离技术基础[M]. 北京: 化学工业出版社, 2019.</div>
    <div class="csl-entry">[4] 张志祥. 间断动力系统的随机扰动及其在守恒律方程中的应用[D]. 北京大学.</div>
    <div class="csl-entry">[5] World Health Organization. Factors regulating the immune response : report of a WHO scientific group[R]. Geneva: WHO, 1970.</div>
    <div class="csl-entry">[6] 河北绿洲生态环境科技有限公司. 一种荒漠化地区生态植被综合培育种植方法: 中国, 01129210.5[P]. 2001-10-24.</div>
    <div class="csl-entry">[7] GB/T 16159—1996, 拼音正词法基本规则[S]. 北京: 中国标准出版社, 1996.</div>
    <div class="csl-entry">[8] 毛侠. 情感工学破解“舒服”之谜[N]. 光明日报, 2004-04-17(B1).</div>
    <div class="csl-entry">[9] 陈剑. 上博简《民之父母》“而得既塞於四海矣”句解释[EB/OL]. 简帛研究网站. <a href="https://www.bamboosilk.org/Wssf/2003/chenjian03.htm">https://www.bamboosilk.org/Wssf/2003/chenjian03.htm</a>. 2003-01-18.</div>
  </div>
</blockquote>

## [438xi-an-jiaotong-university.csl]

根据《[西安交通大学硕士、博士学位论文模板-2021版](https://gs.xjtu.edu.cn/info/1209/7605.htm)》修订。

显示效果：

> <sup>[1-11]</sup>

> [1]  刘国钧，郑如斯. 中国书的故事[M]. 北京: 中国青年出版社, 1979.
>
> [2]  冯西桥. 核反应堆管道和压力容器的LBB分析[R]. 北京: 核能技术设计研究院, 1997.
>
> [3]  张国栋. 磁流流体方程的解耦算法及保结构预处理方法[D]. 西安: 西安交通大学, 2018.
>
> [4]  全国信息与文献标准化技术委员会第七委员会. GB/T 5795-2002. 中国标准书号[S]. 北京: 中国标准出版社, 2002.
>
> [5]  钟文发. 非线性规划在可燃毒物配置中的应用[C]//赵玮. 运筹学的理论与应用: 中国运筹学会第五届大会论文集. 西安: 西安电子科技大学出版社, 1996: 468-471.
>
> [6]  高义民，张凤华，邢建东等. 颗粒增强不锈钢基复合材料冲蚀磨损性能研究[J]. 西安交通大学学报, 2001, 35(7): 727-730.
>
> [7]  Papworth A, Fox P. Ability of aluminum alloys to wet alumina fibres by addition of bismuth[J]. Mater. Sci. Technol., 1999, 15(4): 419-426.
>
> [8]  丁文详. 数字革命与竞争国际化[N]. 中国青年报, 2000-11-20(15).
>
> [9]  姜锡洲. 一种温热外敷药制备方案: 中国, 881056078[P]. 1989-07-26.
>
> [10] Koseki A, Momose H, Kawahito M, et al. Compiler: US, 828402[P/OL]. 2002-05-25 [2002-05-28]. http://FF&p.
>
> [11] Scitor Corporation. Project scheduler[CP/DK]. Sunnyvale, Calif.: Scitor Corporation, 1983.

## [439hebei-medical-university.csl]

根据《[河北医科大学研究生院引发通知 专业学位论文模板97-2003版Word](https://gschool.hebmu.edu.cn/a/2020/03/06/0774B2A85AC24B679BF1A9DA7363AA33.html)》修订。

基于北航大佬的版本稍微修改了一丢丢

显示效果：
> <sup>[1-3]</sup>
> 1. Des Marais D. J., Strauss H., Summons R. E., et al. Carbon Isotope Evidence for the Stepwise Oxidation of the Proterozoic Environment[J]. Nature, 1992, 359: 605–609
> 2. Bellani G., Grassi A., Sosio S., et al. Driving Pressure Is Associated with Outcome during Assisted Ventilation in Acute Respiratory Distress Syndrome[J]. Anesthesiology, 2019, 131(3): 594–604
> 3. Brochard L., Slutsky A., Pesenti A. Mechanical Ventilation to Minimize Progression of Lung Injury in Acute Respiratory Failure[J]. American Journal of Respiratory and Critical Care Medicine, 2017, 195(4): 438–442


## [441huazhong-university-of-science-and-technology-tongji-medical-college.csl]

华中科技大学同济医学院学位论文样式。在 [418huazhong-university-of-science-and-technology.csl] 的基础上修改：作者 3 人以上写 3 人再加“等”或“et al.”。

显示效果：

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">[1] 闫明礼, 张东刚. CFG桩复合地基技术及工程实践. 第二版. 北京: 中国水利水电出版社, 2006</div>
    <div class="csl-entry">[2] M. Chalfie, S. Kain. Green fluorescent protein: properties, applications, and protocols. 2nd ed. Hoboken, New Jersey: Wiley-Interscience, 1998</div>
    <div class="csl-entry">[3] 詹向红, 李德新. 中医药防治阿尔茨海默病实验研究述要. 中华中医药学刊, 2004, 22(11): 2094-2096</div>
    <div class="csl-entry">[4] E. S. Lein, M. J. Hawrylycz, N. Ao, et al. Genome-wide atlas of gene expression in the adult mouse brain. Nature, 2007, 445(7124): 168-176</div>
    <div class="csl-entry">[5] M. L. Bouxsein, S. K. Boyd, B. A. Christiansen, et al. Guidelines for assessment of bone microstructure in rodents using micro-computed tomography. Journal of Bone and Mineral Research, 2010, 25(7): 1468-1486</div>
    <div class="csl-entry">[6] S. Yamaki, M. Abet, M. Kawamata, et al. Performance evaluation of phase-only correlation functions from the viewpoint of correlation Filters. In: 2018 Asia-Pacific Signal and Information Processing Association Annual Summit and Conference (APSIPA ASC), Honolulu, HI, USA, 12–15 Nov. 2018, IEEE, 2019: 1361-1364</div>
    <div class="csl-entry">[7] T. Yao, J. Wan, P. Huang, et al. Building efficient key-value stores via a lightweight compaction tree. ACM Transactions on Storage, 2018, 13(4): 1-28</div>
    <div class="csl-entry">[8] 刘加林, 刘乃安. 多功能一次性压舌板. 中国, 发明专利, ZL92214985.2, 1993</div>
    <div class="csl-entry">[9] 李清泉. 基于混合结构的三维GIS数据模型与空间分析研究: [博士学位论文]. 武汉: 武汉测绘科技大学, 1998</div>
  </div>
</blockquote>


## [442chongqing-university-of-posts-and-telecommunications.csl]

重庆邮电大学研究生学位论文样式。在 [003gb-t-7714-2015-numeric-bilingual-no-url-doi.csl] 的基础上修改：
1. 会议论文的格式改为“会议名, 会议地, 会议年”；
2. 除电子资源外，不显示“OL”、引用日期、URL 或 DOI。

显示效果：

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	FAN X, SOMMERS C H. Food irradiation research and technology[M/OL]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26[2014-06-26]. <a href="http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary">http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary</a>.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会年会论文集, 北京, 2011: 45-52.</div>
    <div class="csl-entry">[4]	FOURNEY M E. Advances in holographic photoelasticity[C]. Symposium on Applications of Holography in Mechanics, University of Southern California, Los Angeles, California, 1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J/OL]. 测绘科学, 2008, 33(5): 8-9[2009-10-25]. <a href="http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail">http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail</a>. DOI:<a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">10.3771/j.issn.1009-2307.2008.05.002</a>.</div>
    <div class="csl-entry">[6]	MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. The genome of eucalyptus grandis[J/OL]. Nature, 2014, 510: 356-362[2014-06-25]. <a href="http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf">http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf</a>. DOI:<a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R/OL]. (2012-01-16)[2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>.</div>
    <div class="csl-entry">[8]	BAWDEN D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [444chongqing-university.csl]

[重庆大学研究生学位论文](http://www.cfl.cqu.edu.cn/info/1367/8626.htm)样式。在 [002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl] 的基础上修改。

显示效果：

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	袁庆龙, 侯文义. Ni-P合金镀层组织形貌及显微硬度研究[J]. 太原理工大学学报, 2001, 32(1): 51-53.</div>
    <div class="csl-entry">[2]	刘国钧, 郑如斯. 中国书的故事[M]. 北京: 中国青年出版社, 1979.</div>
    <div class="csl-entry">[3]	孙品一. 科技编辑学论文集（2）[C]//科技编辑学论文集. 北京: 北京师范大学出版社, 1998: 10-22.</div>
    <div class="csl-entry">[4]	罗云. 安全科学理论体系的发展及趋势探讨[M]//21世纪安全科学与技术的发展趋势. 北京: 科学出版社, 2000: 1-5.</div>
    <div class="csl-entry">[5]	张和生. 地质力学系统理论[D]. 太原: 太原理工大学, 1998.</div>
    <div class="csl-entry">[6]	冯西桥. 核反应堆压力容器的LBB分析[R]. 北京: 清华大学核能技术设计研究院, 1997.</div>
    <div class="csl-entry">[7]	姜锡洲. 一种温热外敷药制备方案[P]. 中国专利: 881056078, 1983-08-12.</div>
    <div class="csl-entry">[8]	GB/T 16159—1996. 汉语拼音正词法基本规则[S]. 北京: 中国标准出版社, 1996.</div>
    <div class="csl-entry">[9]	谢希德. 创造学习的新思路[N]. 人民日报, 1998, 12(25): 10.</div>
    <div class="csl-entry">[10]	姚伯元. 毕业设计(论文)规范化管理与培养学生综合素质[EB/OL]. 中国高等教育网教学研究, 2005-02-02.</div>
  </div>
</blockquote>

## [445nanjing-agricultural-university.csl]

[南京农业大学研究生学位论文](https://grasch.njau.edu.cn/info/1011/4128.htm)新样式。在 [011gb-t-7714-2015-author-date-bilingual-no-uppercase-no-url-doi-full-width-parentheses.csl] 的基础上修改。正文作者年代格式，中文参考文献为中文标点，英文为英文标点。参考文献列表中文在前，英文在后。中文按作者拼音排序，英文按作者字母排序。作者 3 人以上写 3 人再加`等`或`et al.`。学位论文、书籍显示页码需要在Extra中输入：`pages: 88-120`，需要用自动根据题目批量修改语言的插件：<https://github.com/redleafnew/delitemwithatt>，将条目语言设置为`en-US`或`zh-CN`才可以正常排序。

显示效果：

> （曹向锋，2010；杨安钢等，2001；杨月等，2014；Andolfo et al., 2014; Bethke et al., 2016）

> [1]	曹向锋．外来入侵植物黄顶菊在中国潜在适生区预测及其风险评估［D］．南京：南京农业大学，2010：88－120.<br>
> [2]	杨安钢，毛积芳，药立波．生物化学与分子生物学实验技术［M］．北京：高等教育出版社，2001：28－59.<br>
> [3]	杨月，刘兵，刘小军，等．小麦生育期模拟模型的比较研究［J］．南京农业大学学报，2014，37（1）：6－14.<br>
> [4]	Andolfo G, Jupe F, Witek K, et al. Defining the full tomato NB-LRR resistance gene repertoire using genomic and cDNA RenSeq[J]. BMC plant biology, 2014, 14: 120.<br>
> [5]	Bethke G, Thao A, Xiong G, et al. Pectin biosynthesis is critical for cell wall integrity and immunity in arabidopsis thaliana[J]. The Plant Cell, 2016, 28(2): 537-556.<br>


## [447anhui-university-of-science-and-technology.csl]

[安徽理工大学研究生学位论文](https://yjsc.aust.edu.cn/info/1013/4736.htm)样式。

显示效果：

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	张筑生. 微分半动力系统的不变集[D]. 北京大学数学研究所, 1983.</div>
    <div class="csl-entry">[2]	[日]萩原朔太郎著; 于君译. 诗性的哲学散步[M]. 北京: 群众出版社, 2002.</div>
    <div class="csl-entry">[3]	Morton L T. Use of medical literature[M]. 2nd ed. London: Butterworths, 1977.</div>
    <div class="csl-entry">[4]	陶仁骥. 密码学与数学[J]. 自然杂志, 1984, 7(7): 527.</div>
    <div class="csl-entry">[5]	Hewitt J A. Technical services in 1983[J]. Library resources and Technical Services, 1984, 28(3): 205～218.</div>
    <div class="csl-entry">[6]	张光斗. 也谈 21 世纪高等工程教育的改革. 见: 林功实. 学位与研究生教育. 1995: 14～16.</div>
    <div class="csl-entry">[7]	谢希德. 创造学习的新思路. 人民日报, 1998-12-25(10).</div>
    <div class="csl-entry">[8]	王明亮. 关于中国学术期刊标准化数据库系统工程的进展. <a href="http://www.cajcd.cn/pub/wml.txt/980810-2.html">http://www.cajcd.cn/pub/wml.txt/980810-2.html</a>, 1998-08-16.</div>
  </div>
</blockquote>


## [448nanjing-agricultural-university-note.csl]

[南京农业大学研究生学位论文](https://grasch.njau.edu.cn/info/1011/4128.htm)（人文社科类）2023版样式。

显示效果：

<blockquote>
  <sup>1</sup> 汪昂．增订本草备要：四卷［M］．刻本．京都：老二酉堂，1881．<br>
  <sup>2</sup> 张伯伟．全唐五代诗格汇考［M］．南京：江苏古籍出版社，2002：288．<br>
  <sup>3</sup> 李炳穆．理想的图书馆员和信息专家的素质与形象［J］．图书情报工作，2000，2（6）：5-8．<br>
  <sup>4</sup> 杨洪升．四库馆私家抄校书考略［J］．文献，2013（1）：56-75．<br>
  <sup>5</sup> CRAWFORD W, GORMAN M. Future libraries: Dreams, madness, &#38; reality[M]. Chicago: American Library Association, 1995.<br>
  <sup>6</sup> International Federation of Library Association and Institutions. Names of persons: National usages for entry in catalogues[M]. 3rd ed. London: IFLA International Office for UBC, 1977.<br>
  <sup>7</sup> DES MARAIS D J, STRAUSS H, SUMMONS R E, et al. Carbon isotope evidence for the stepwise oxidation of the Proterozoic environment[J]. Nature, 1992, 359(6396): 605-609.<br>
  <sup>8</sup> World Health Organization. Factors regulating the immune response: Report of WHO Scientific Group[R]. Geneva: WHO, 1970.<br>
  <sup>9</sup> 丁文详．数字革命与竞争国际化［N］．中国青年报，2000-11-20（15）．<br>
  <sup>10</sup> 萧钰．出版业信息化迈入快车道［EB/OL］．（2001-12-19）［2002-04-15］．<a href="http://www.creader.com/news/20011219/200112190019.html">http://www.creader.com/news/20011219/200112190019.html</a>．<br>
  <sup>11</sup> 全国广播电视标准化技术委员会．广播电视音像资料编目规范: 第 2 部分 广播资料：GY/T 202.2—2007［S］．北京：国家广播电影电视总局广播电视规划院，2007：1．<br>
  <sup>12</sup> 全国信息与文献标准化技术委员会．文献著录: 第 4 部分 非书资料：GB/T 3792.4—2009［S］．北京：中国标准出版社，2010：3．<br>
</blockquote>

## [449nanjing-university-of-posts-and-telecommunications.csl]

[南京邮电大学研究生学位论文](http://pg.njupt.edu.cn/2012/1224/c978a14198/page.htm)新样式。与[002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl]相同。

显示效果：

<sup>[1–8]</sup>


<div class="csl-bib-body second-field-align-flush">
  <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
  <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
  <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
  <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
  <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
  <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
  <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
  <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
</div>

## [450tianjin-university-numberic.csl]

[天津大学研究生学位论文](http://gs.tju.edu.cn/info/1013/1100.htm)顺序编码样式。

显示效果：

<sup>[1–8]</sup>

<div class="csl-bib-body second-field-align-flush">
  <div class="csl-entry">[1]	库恩．科学革命的结构: 第 4 版[M]．金吾伦, 胡新和，译．2 版．北京：北京大学出版社，2012．</div>
  <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
  <div class="csl-entry">[3]	贾东琴，柯平．面向数字素养的高校图书馆数字服务体系研究[C]．中国图书馆学会．中国图书馆学会年会论文集：2011 年卷．北京：国家图书馆出版社，2011：45-52．</div>
  <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity[C]. Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
  <div class="csl-entry">[5]	武丽丽，华一新，张亚军，等．“北斗一号”监控管理网设计与实现[J]．测绘科学，2008，33(5)：8-9．</div>
  <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
  <div class="csl-entry">[7]	中国互联网络信息中心．第 29 次中国互联网络发展现状统计报告[R]．2012．</div>
  <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
</div>


## [451lanzhou-university.csl]

[兰州大学研究生学位论文](https://ge.lzu.edu.cn/yjsxw/upload/files/20230404/61cd8e5356084aa28c55ed238ba871bc.pdf)样式。[420beihang-university.csl]基础上修改。

显示效果：

<sup>[1–8]</sup>


<div class="csl-bib-body second-field-align-flush">
  <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 译, 胡新和, 译. 第2版 北京: 北京大学出版社, 2012.</div>
  <div class="csl-entry">[2]	Fan, X., Sommers, C.H. Food irradiation research and technology[M]. 2 edn. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
  <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[A]. 中国图书馆学会. 中国图书馆学会年会论文集[C]. 北京: 国家图书馆出版社, 2011, 2011 年卷: 45-52.</div>
  <div class="csl-entry">[4]	Fourney, M.E. Advances in holographic photoelasticity[A]. Symposium on Applications of Holography in Mechanics[C]. New York: ASME, c1971: 17-38.</div>
  <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. 《北斗一号》监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
  <div class="csl-entry">[6]	Myburg, A.A., Grattapaglia, D., Tuskan, G.A., et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
  <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R].2012.</div>
  <div class="csl-entry">[8]	Bawden, D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08] . <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
</div>


## [452dalian-university-of-technology.csl]

[大连理工大学研究生学位论文](https://gs.dlut.edu.cn/info/1210/13319.htm)样式。[002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl]基础上修改。

显示效果：

<sup>[1–8]</sup>

<div class="csl-bib-body second-field-align-flush">
  <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
  <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
  <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
  <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
  <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
  <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
  <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
  <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
</div>


## [453central-south-university-of-forestry-and-technology.csl]

[中南林业科技大学研究生学位论文](https://yjsb.csuft.edu.cn/zlxz/zlxz1/201710/t20171016_66849.html)样式。[003gb-t-7714-2015-numeric-bilingual-no-url-doi.csl] 基础上修改。

显示效果：

<sup>[1–8]</sup>

<div class="csl-bib-body second-field-align-flush">
  <div class="csl-entry">[1]	田大伦, 项文化, 康文星, 等. 杉木人工林养分循环的研究[J]. 中南林业科技大学学报, 1993, 12(1): 16-21.</div>
  <div class="csl-entry">[2]	OU J P, YOSHIDA O, SOONG T T, et al. Recent advance in applications of passive energy dissipation systems[J]. Earthquake Engineering, 1997, 38(3): 358-361.</div>
  <div class="csl-entry">[3]	吴富祯. 测树学[M]. 北京: 中国林业出版社, 1992: 1-7.</div>
  <div class="csl-entry">[4]	刘煊章, 项文化, 康文星, 等. 杉木人工林生态系统生物量的动态格局[A]. 见: 刘煊章主编. 森林生态系统定位研究[C]. 北京: 中国林业出版社, 1993: 18-22.</div>
  <div class="csl-entry">[5]	徐刚标. 银杏种质离体培养与保存[D]. 株洲: 中南林业科技大学研究生处, 1988.</div>
  <div class="csl-entry">[6]	冯西桥. 核反应堆压力管道与容器的LBB分析[R]. 北京: 清华大学核能技术设计研究院, 1997: 4-9.</div>
  <div class="csl-entry">[7]	谢希德. 创造学习的新思路[N]. 人民日报, 1998-12-25(10).</div>
  <div class="csl-entry">[8]	姜锡洲. 一种温热外用药制备方案[P]. 中国专利: 881056073, 1989-07-26.</div>
</div>

## [454dalian-maritime-university.csl]
[大连海事大学研究生学位论文]样式。[002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl]基础上修改。
  
使用说明：
  1.图书，（1）图书需要在“其他”填入所引页码 “Pages:11-20” 或者是在“存档位置” 直接填入“11-20” 即可，两个方法二选一；（2）如果“地点”抓取不到，需要手动填写。
  2.专利，英文专利 在“地点”填入国家 例如“US”  中文专利，按照知网显示的7714-2015格式，需要在“地点” 填入 “四川省” 如果不填，默认显示中国。
  3.其他的期刊等类型，能自动抓取题录信息的，一般不需要手动填写，如果抓取不到，再手动对应填写。
  
显示效果：
<sup>[1–4]</sup>

<div class="csl-bib-body second-field-align-flush">
  <div class="csl-entry">[1]	Baehr H D, Stephan K. Heat and Mass Transfer[M]. Berlin, Heidelberg: Springer Berlin Heidelberg, 2011: 11-15.</div>
  <div class="csl-entry">[2]	邱伟, 杨如民, 武祥辉, 等. 吸收式制冷单元水流接口[P]. 四川省: CN201510847026.4, 2023-04-21.</div>
  <div class="csl-entry">[3]	Aman J, Henshaw P, Ting D S. Enhanced exergy analysis of a bubble-pump-driven LiCl-H2O absorption air-conditioning system[J]. International Journal of Exergy, 2019, 28(4): 333-354.</div>
  <div class="csl-entry">[4]	陆泽盈. 液滴在竖直流道中上升时被切割的数值模拟[D]. 上海: 上海工程技术大学, 2020.</div>
</div>
 

  
  
## 501-506

主要用于与Zutilo结合，快速导出部分字段，详见<https://zhuanlan.zhihu.com/p/597826044>。

## LICENSE

All styles in this repository are released under the [Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)](http://creativecommons.org/licenses/by-sa/3.0/) license.


## 更多 `Zotero` 使用教程及技巧

`Zotero` 使用参见[软件随心 https://zhuanlan.zhihu.com/c_1071081428967743488](https://zhuanlan.zhihu.com/c_1071081428967743488)。

一个 `PDF` 的 `Zotero` 使用简短教程《优雅地用 `Zotero` 进行文献管理和论文写作》，见
<https://github.com/redleafnew/Zotero_introduction/releases>
或 <https://zhuanlan.zhihu.com/p/113170814>。

`Zotero` 便携版的安装与使用见 <https://zhuanlan.zhihu.com/p/350797263>。

`Zotero` 怎么调整条目显示的大小，总觉得太小了见 <https://zhuanlan.zhihu.com/p/384398075>。

`Zotero` 如何展开和折叠所有条目见<https://zhuanlan.zhihu.com/p/544153534>。

`Zotero` 重装系统后 Word 工具条恢复的方法见 <https://zhuanlan.zhihu.com/p/350567611>。

`Zotero` Word 工具条不出现如何解决见 <https://zhuanlan.zhihu.com/p/365392235>。

`Zotero`Word 中插入文献时如何默认打开经典视图见 <https://zhuanlan.zhihu.com/p/358078407>。

`Zotero` 中常用的一些批处理用的 `JavaScript` 脚本见[zotero-javascripts](https://github.com/redleafnew/zotero-javascripts)。

`Zotero` 利用 JavaScript 备份配置和数据见 <https://zhuanlan.zhihu.com/p/357859432>。

`Zotero` 数据、设置的备份与恢复-视频 <https://zhuanlan.zhihu.com/p/360084592>。

`Zotero` 设置的备份与恢复见 <https://zhuanlan.zhihu.com/p/350546813>。

`Zotero` 数据的备份与恢复见 <https://zhuanlan.zhihu.com/p/350549136>。

`Zotero` 如何新建一个 profile？<https://zhuanlan.zhihu.com/p/404906012>。

`Zotero` 如何选中重复条目中的部分条目 <https://zhuanlan.zhihu.com/p/406824204>。

`Zotero` 批量删除（合并）重复文献见 <https://zhuanlan.zhihu.com/p/352324486>。

`Zotero` 使参考文献列表中某些作者名字加粗，加星，刷新后保留见 <https://zhuanlan.zhihu.com/p/353770101>。

`Zotero` 参考文献编号位数增加后如何对齐见 <https://zhuanlan.zhihu.com/p/366711117>。

`Zotero` 中使用`GB/7714-2015`相关 `csl` 时文末显示的访问日期如何隐藏？<https://zhuanlan.zhihu.com/p/349555378>。

`Zotero` 使用GB/T 7714 2015 样式期刊类型显示为[Z]的原因及解决方法见<https://zhuanlan.zhihu.com/p/497855911>。

`Zotero` 右键菜单中为什么没有 `Find Available PDF`？<https://zhuanlan.zhihu.com/p/348697024>。

`Zotero` 插件Add-ons无法打开的解决办法<https://zhuanlan.zhihu.com/p/536832783>。

`Zotero` 插件（扩展）的安装--以`茉莉花（jasminum）`为例 <https://zhuanlan.zhihu.com/p/347628976>。

`Zotero` 利用`jasminum（茉莉花）`安装或更新部分中文网站 `translator`<https://zhuanlan.zhihu.com/p/347642670>。

`Zotero` 中无关闭、最大化、最小化、窗口标题的窗口移动或放大缩小的方法 <https://zhuanlan.zhihu.com/p/343640809>。

`Zotero` 如何查看 `My Library` 中的文献属于哪个分类（文件夹）？<https://zhuanlan.zhihu.com/p/340591764>。

`Zotero` 如何只查找一个文件夹下的条目见<https://zhuanlan.zhihu.com/p/491245011>。

`Zotero` 同步文献库和附件 <https://zhuanlan.zhihu.com/p/339443686>。

`Zotero` 利用 `ZotFile` 管理附件参见 <https://zhuanlan.zhihu.com/p/337801423>。

设置 `ZotFile` 支持重命名移动更多文件格式-以 caj 文件为例 <https://zhuanlan.zhihu.com/p/340847784>。

今天安装了 `ZotFile` 插件，想请教一下大家怎么用它把以前导入的论文题目也给改过来见 <https://zhuanlan.zhihu.com/p/365665469>。

`ZotFile` 如何让不同主题的参考文献附件放在同一个文件夹 <https://zhuanlan.zhihu.com/p/426839229>。

`ZotFile` 怎么样可以只导出多篇文献PDF？见<https://zhuanlan.zhihu.com/p/447109035>。

`Zotero` 删除条目（题录）时同时删除 `PDF` 附件的另一方法 <https://zhuanlan.zhihu.com/p/338159167>。

`Zotero` 如何将文件位置恢复到 storage 中？<https://zhuanlan.zhihu.com/p/420831288> 。

`Zotero` 怎么看自带的存贮(storage)剩余情况呢 <https://zhuanlan.zhihu.com/p/427955654>。

`Zotero`如何清空Zotero自带的免费300M存贮空间（storage）见<https://zhuanlan.zhihu.com/p/596614249>。

`Zotero` 安装 ZotFile 后删除条目和附件见 <https://zhuanlan.zhihu.com/p/369141058>。

`Zotero` 6.0如何使用系统默认的PDF阅读器？见<https://gitee.com/zotero-chinese/zotero-chinese/issues/I4YNR2>。

`Zotero` 不用代码不用其它软件清理使用 ZotFile 后删除条目剩余的游离附件 <https://zhuanlan.zhihu.com/p/422215186>。

`Zotero` 如何设置打开 PDF 附件的软件 <https://zhuanlan.zhihu.com/p/373952017>。

`Zotero` `style csl` 文件简单编辑参见 <https://zhuanlan.zhihu.com/p/336009544>。

`Zotero` 在 citationstyles.org 可视化编辑 csl 时如何使用自己的文献调试见 <https://zhuanlan.zhihu.com/p/437380542>。

`Zotero`如何删除参考文献列表末尾的点（.）见<https://zhuanlan.zhihu.com/p/450850667>。

中文 `PDF` 识别---`jasminum` 使用参见 <https://zhuanlan.zhihu.com/p/329870430>。

不显示参考文献中的 `URL` 网址的方法见 <https://zhuanlan.zhihu.com/p/328773377>。

`Zotero` 自己的 style 或 translator 总是被恢复为官方的怎么办？见[[Zotero]自己的 style 或 translator 总是被恢复为官方的怎么办？](https://zhuanlan.zhihu.com/p/367843528)。

彻底解决参考文献显示网址及 DOI 问题见 <https://zhuanlan.zhihu.com/p/355842318>。

Word参考文献列表末尾有DOI，想修改CSL文件，但CSL代码找不到相应字段修改，怎么办？见<https://zhuanlan.zhihu.com/p/478072852>。

`Zotero` 直接同时生成“等”和“et al”(视频讲解)<https://zhuanlan.zhihu.com/p/342753388>。

使用 `JurisM Style` 实现同时生成“`et al`”和“`等`”见 <https://zhuanlan.zhihu.com/p/317108621>。

`Zotero` 修改版终于可以原生支持同时生成“`et al`”和“`等`”了 <https://zhuanlan.zhihu.com/p/314928204>。

`Zotero` 参考文献列表只出现一个作者，然后就是等了，怎么样出现全部作者的名字见 <https://zhuanlan.zhihu.com/p/367609914>。

`Zotero`et al 或等前的逗号如何删除见 <https://zhuanlan.zhihu.com/p/372796326>。

`Zotero` 如何使用期刊缩写名称见 <https://zhuanlan.zhihu.com/p/372247762>。

`Zotero` 作者缩写如何改为全称？见 <https://zhuanlan.zhihu.com/p/393376982>。

`Zotero` 批量修改条目（文献）语言 <https://zhuanlan.zhihu.com/p/341989158>。

`Word` 中的文献如何导入到 `Zotero` 库中 <https://zhuanlan.zhihu.com/p/309597293>。

`Zotero` 批量文章题目大小写转为首字母大写的方法（含视频）<https://zhuanlan.zhihu.com/p/283889592>。

`Zotero` 作者姓名全部大写如何改为词首字母大写见 <https://zhuanlan.zhihu.com/p/393454241>。

`Zotero` 作者姓名批量修改为首字母大写见 <https://zhuanlan.zhihu.com/p/354481222>。

`Zotero` 生成双语参考文献的变通实现方法（含视频讲解）<https://zhuanlan.zhihu.com/p/282826403>。

`Zotero` 标准的引用方法（视频讲解）见<https://zhuanlan.zhihu.com/p/491375843>。

`Zotero` 分类、标签和关联的使用 <https://zhuanlan.zhihu.com/p/275707703>。

`Zotero` 数十篇文献同时去除同一个标签要怎么操作呢？除了一个一个点去除，有其他快捷去除的方式吗？见<https://zhuanlan.zhihu.com/p/500361660>

`Zotero` 检索引擎的使用 <https://zhuanlan.zhihu.com/p/268074292>。

`Zotero` 如何点击父文件夹时也同时显示子文件夹内容？<https://zhuanlan.zhihu.com/p/261375851>。

`Zotero` 总是自动把关键词添加成标签，这是哪个插件生成的，能关掉吗 <https://zhuanlan.zhihu.com/p/166085576>。

`Zotero` 不用安装其它软件清理删除条目后残留的 PDF 方法见 <https://zhuanlan.zhihu.com/p/356071795>。

`Zotero` 库中参考文献条目删除后，清除残留 `PDF` 的 `python` 脚本 <https://zhuanlan.zhihu.com/p/121770068>。

`Zotero` 插入文献后为什么显示为脚注或尾注？<https://zhuanlan.zhihu.com/p/114768349>。

如何在家愉快地使用 `Zotero` 通过远程访问收集知网数据？<https://zhuanlan.zhihu.com/p/110731827>。

`Zotero` 中安装了 `Zotfile` 后删除文献后清除 `PDF` 附件的小程序 <https://zhuanlan.zhihu.com/p/109531298>。

`Zotero` 中页码范围由“–”改为“-”见 <https://zhuanlan.zhihu.com/p/101884972>。

`Zotero` 中日期间隔符号由“–”改为“-”见 <https://zhuanlan.zhihu.com/p/366504227>。

`Zotero` 如何让 GB7714 2005 中 book（书籍）也显示页码 <https://zhuanlan.zhihu.com/p/429125051>。

`Zotero` 有权限时在导入 `CNKI` 题录时同时下载全文的方法 <https://zhuanlan.zhihu.com/p/90638718>。

`Zotero` 正文中如何实现作者（年代）的引文格式？<https://zhuanlan.zhihu.com/p/64852742>。

`Word` 中如何选择不同的 `csl` 文件？<https://zhuanlan.zhihu.com/p/64625049>。

`Zotero` 如何添加 `csl` 格式文件？<https://zhuanlan.zhihu.com/p/64624484>。

`Zotero` 中 `author`+`year` 格式下，`et al` 如何变为斜体？<https://zhuanlan.zhihu.com/p/64620849>。

`Zotero` 如何在 `Word` 中插入参考文献 <https://zhuanlan.zhihu.com/p/62931860>。

`Zotero` 引文下面有虚线下划线是怎么回事？<https://zhuanlan.zhihu.com/p/415999897>。

利用 `Word` 主控文档和 `Zotero` 实现一个文件多章参考文献（视频）见 <https://zhuanlan.zhihu.com/p/358442718>。

`Zotero` 如何禁用笔记中的拼写检查？<https://zhuanlan.zhihu.com/p/62780758>。

`Zotero` 如何批量删除条目中的笔记？<https://zhuanlan.zhihu.com/p/413057691>。

`Zotero` 文章题目大小写转为首字母大写的方法 <https://zhuanlan.zhihu.com/p/60651053>。

`Zotero`+`Word 2016` 参考文献中英文混排，解决 `et al` 和`等`的问题，另一思路 <https://zhuanlan.zhihu.com/p/60029219>。

`Word 2016` 中用 `Zotero` 插入的文献是类似乱码的域代码 <https://zhuanlan.zhihu.com/p/59995967>。

`Zotero`结合`Zutilo`插件快速导出条目信息到剪贴板<https://zhuanlan.zhihu.com/p/597826044>。

360 安全浏览器如何安装 `Zotero` 插件 <https://zhuanlan.zhihu.com/p/59247644>。

如何设置 `Zotero` 生成的参考文献格式，刷新后不变（使用Word书目样式）？<https://zhuanlan.zhihu.com/p/58969571>。

`Zotero` 现在不能自动更新引文上标了是怎么回事？见 <https://zhuanlan.zhihu.com/p/354725834>。

`Word` 中没有 `Zotero` 工具条的解决办法之一 <https://zhuanlan.zhihu.com/p/58931999>。

`WPS Office`中使用`Zotero`插入参考文献不报错的方法<https://zhuanlan.zhihu.com/p/580194390>。

`WPS Office`中`Zotero`工具条显示全部图标的方法<https://zhuanlan.zhihu.com/p/580527678>。

WPS Office中添加Zotero工具条的方法<https://zhuanlan.zhihu.com/p/580205995>。

`Zotero`+`Word 2016` 参考文献中英文混排，解决 `et al` 和`等`的问题 <https://zhuanlan.zhihu.com/p/58237038>。

`Zotero` 参考文献中论文题目部分单词实现斜体及上标、下标效果 <https://zhuanlan.zhihu.com/p/57638901>。

`Zotero` 通过 `DOI` 导入文献时能否带摘要 <https://zhuanlan.zhihu.com/p/56981700>。

`Word` 中加载 `Zotero` 工具条时提示加载宏的取消方法 <https://zhuanlan.zhihu.com/p/56551176>。

给 `Word` 中的 `Zotero` 设置快捷键 <https://zhuanlan.zhihu.com/p/55259481>。


[china-national-standard-gb-t-7714-2015-numeric.csl]: https://github.com/citation-style-language/styles/blob/master/china-national-standard-gb-t-7714-2015-numeric.csl
[china-national-standard-gb-t-7714-2015-author-date.csl]: https://github.com/citation-style-language/styles/blob/master/china-national-standard-gb-t-7714-2015-author-date.csl
[china-national-standard-gb-t-7714-2015-note.csl]: https://github.com/citation-style-language/styles/blob/master/china-national-standard-gb-t-7714-2015-note.csl
[000gb-t-7714-2015-numeric-bilingual.csl]: 000gb-t-7714-2015-numeric-bilingual.csl
[001gb-t-7714-2015-author-date-bilingual.csl]: 001gb-t-7714-2015-author-date-bilingual.csl
[002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl]: 002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl
[003gb-t-7714-2015-numeric-bilingual-no-url-doi.csl]: 003gb-t-7714-2015-numeric-bilingual-no-url-doi.csl
[007gb-t-7714-2015-numeric-bilingual-no-uppercase.csl]: 007gb-t-7714-2015-numeric-bilingual-no-uppercase.csl
[009gb-t-7714-2015-numeric-bilingual-no-uppercase-page-out.csl]: 009gb-t-7714-2015-numeric-bilingual-no-uppercase-page-out.csl
[010gb-t-7714-2015-author-date-bilingual-no-uppercase.csl]: 010gb-t-7714-2015-author-date-bilingual-no-uppercase.csl
[011gb-t-7714-2015-author-date-bilingual-no-uppercase-no-url-doi-full-width-parentheses.csl]: 011gb-t-7714-2015-author-date-bilingual-no-uppercase-no-url-doi-full-width-parentheses.csl
[013gb-t-7714-2015-numeric-aulower-bilan-ce.csl]: 013gb-t-7714-2015-numeric-aulower-bilan-ce.csl
[014gb-t-7714-2015-numeric-auup-bilan-ce.csl]: 014gb-t-7714-2015-numeric-auup-bilan-ce.csl
[015jm-chinese-std-gb-t-7714-2005-revised.csl]: 015jm-chinese-std-gb-t-7714-2005-revised.csl
[101chinese-medical-association.csl]: 101chinese-medical-association.csl
[102transactions-of-the-chinese-society-of-agricultural-engineering.csl]: 102transactions-of-the-chinese-society-of-agricultural-engineering.csl
[103ieee-bl.csl]: 103ieee-bl.csl
[104acta-physica-sinica.csl]:104acta-physica-sinica.csl
[106journal-of-inorganic-materials.csl]: 106journal-of-inorganic-materials.csl
[107chinese-journal-of-cardiology.csl]: 107chinese-journal-of-cardiology.csl
[108journal-of-nuclear-agricultural-sciences.csl]: 108journal-of-nuclear-agricultural-sciences.csl
[109chinese-public-administration.csl]: 109chinese-public-administration.csl
[110food-science.csl]: 110food-science.csl
[111acta-agriculurae-boreali-sinica.csl]: 111acta-agriculurae-boreali-sinica.csl
[112scientia-agricultura-sinica.csl]: 112scientia-agricultura-sinica.csl
[201comparative-economic-and-social-systems.csl]: 201comparative-economic-and-social-systems.csl
[202journal-of-management-world.csl]: 202journal-of-management-world.csl
[203economic-research-journal.csl]: 203economic-research-journal.csl
[204financial-research-journal.csl]: 204financial-research-journal.csl
[205business-management-journal.csl]: 205business-management-journal.csl
[206accounting-research.csl]: 206accounting-research.csl
[207chinas-industrial-economics.csl]: 207chinas-industrial-economics.csl
[208chinas-industrial-economics.csl]: 208chinas-industrial-economics.csl
[209sociological-studies.csl]: 209sociological-studies.csl
[210advances-in-psychological-science.csl]: 210advances-in-psychological-science.csl
[211journal-of-plant-protection.csl]: 211journal-of-plant-protection.csl
[212journal-of-marketing-science.csl]: 212journal-of-marketing-science.csl
[215international-economics-and-trade-research.csl]:215international-economics-and-trade-research.csl
[216acta-psychologica-sinica.csl]: 216acta-psychologica-sinica.csl
[217the-journal-of-world-economy.csl]: 217the-journal-of-world-economy.csl
[301manual-of-legal-citation-multi-lingual.csl]: 301manual-of-legal-citation-multi-lingual.csl
[303gb-t-7714-2015-note-bilingual.csl]: 005gb-t-7714-2015-note-bilingual.csl
[304gb-t-7714-2015-note-bilingual-no-ibid.csl]: 304gb-t-7714-2015-note-bilingual-no-ibid.csl
[305gb-t-7714-2015-note-bilingual-no-uppercase-no-url-doi.csl]: 305gb-t-7714-2015-note-bilingual-no-uppercase-no-url-doi.csl
[306manual-of-legal-citation-multi-lingual-no-ibid.csl]: 306manual-of-legal-citation-multi-lingual-no-ibid.csl
[307studies-on-marxism.csl]: 307studies-on-marxism.csl
[403huazhong-agricultural-university.csl]: 403huazhong-agricultural-university.csl
[404jinan-university.csl]: 404jinan-university.csl
[405nanjing-agricultural-university-numeric.csl]: 405nanjing-agricultural-university-numeric.csl
[406nanjing-agricultural-university-author-date.csl]: 406nanjing-agricultural-university-author-date.csl
[407nanjing-agricultural-university-old.csl]: 407nanjing-agricultural-university-old.csl
[408nanjing-agricultural-university-online-first.csl]:408nanjing-agricultural-university-online-first.csl
[410shanghai-jiao-tong-university]:410shanghai-jiao-tong-university
[411southwest-university.csl]: 411southwest-university.csl
[414yunnan-university.csl]: 414yunnan-university.csl
[415zhejiang-university.csl]:415zhejiang-university.csl
[416zhongnan-university-of-economics-and-law.csl]: 416zhongnan-university-of-economics-and-law.csl
[418huazhong-university-of-science-and-technology.csl]: 418huazhong-university-of-science-and-technology.csl
[419beijing-normal-university.csl]: 419beijing-normal-university.csl
[420beihang-university.csl]: 420beihang-university.csl
[421hebei-agricultural-university.csl]: 421hebei-agricultural-university.csl
[422chinese-academy-of-agricultural-sciences.csl]: 422chinese-academy-of-agricultural-sciences.csl
[423ningbo-university]:423ningbo-university
[424harbin-university-of-science-and-technology.csl]:424harbin-university-of-science-and-technology.csl
[425shenyang-agricultural-university.csl]:425shenyang-agricultural-university.csl
[426beijing-forestry-university.csl]:426beijing-forestry-university.csl
[427university-of-electronic-science-and-technology-of-china.csl]:427university-of-electronic-science-and-technology-of-china.csl
[428fujian-agriculture-and-forestry-university.csl]:428fujian-agriculture-and-forestry-university.csl
[429guizhou-university.csl]:429guizhou-university.csl
[430hainan-university.csl]:430hainan-university.csl
[431hohai-university.csl]:431hohai-university.csl
[432east-china-normal-university.csl]:432east-china-normal-university.csl
[433jiangxi-university-of-finance-and-economics.csl]:433jiangxi-university-of-finance-and-economics.csl
[434shandong-agricultural-university.csl]:434shandong-agricultural-university.csl
[435yangzhou-university.csl]:435yangzhou-university.csl
[436wuhan-university-undergraduate.csl]:436wuhan-university-undergraduate.csl
[438xi-an-jiaotong-university.csl]:438xi-an-jiaotong-university.csl
[439hebei-medical-university.csl]:439hebei-medical-university.csl
[441huazhong-university-of-science-and-technology-tongji-medical-college.csl]: 441huazhong-university-of-science-and-technology-tongji-medical-college.csl
[442chongqing-university-of-posts-and-telecommunications.csl]: 442chongqing-university-of-posts-and-telecommunications.csl
[444chongqing-university.csl]: 444chongqing-university.csl
[445nanjing-agricultural-university.csl]: 445nanjing-agricultural-university.csl
[447anhui-university-of-science-and-technology.csl]: 447anhui-university-of-science-and-technology.csl
[448nanjing-agricultural-university-note.csl]: 448nanjing-agricultural-university-note.csl
[449nanjing-university-of-posts-and-telecommunications.csl]: 449nanjing-university-of-posts-and-telecommunications.csl
[450tianjin-university-numberic.csl]: 450tianjin-university-numberic.csl
[451lanzhou-university.csl]: 451lanzhou-university.csl
[452dalian-university-of-technology.csl]: 452dalian-university-of-technology.csl
[453central-south-university-of-forestry-and-technology.csl]: 453central-south-university-of-forestry-and-technology.csl
