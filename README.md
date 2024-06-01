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

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	FAN X, SOMMERS C H. Food irradiation research and technology[M/OL]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26[2014-06-26]. <a href="http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary">http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary</a>.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	FOURNEY M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J/OL]. 测绘科学, 2008, 33(5): 8-9[2009-10-25]. <a href="http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail">http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail</a>. DOI:<a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">10.3771/j.issn.1009-2307.2008.05.002</a>.</div>
    <div class="csl-entry">[6]	MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. The genome of eucalyptus grandis[J/OL]. Nature, 2014, 510: 356-362[2014-06-25]. <a href="http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf">http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf</a>. DOI:<a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R/OL]. (2012-01-16)[2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>.</div>
    <div class="csl-entry">[8]	BAWDEN D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [001gb-t-7714-2015-author-date-bilingual.csl]

GB/T 7714—2015 著者-出版年制。支持双语：按照语言显示“等”或“et al.”。

显示效果：

<blockquote>
  (库恩, 2012)<br>
  (Fourney, c1971)<br>
  (贾东琴 等, 2011)<br>
  (Fan et al., 2013)<br>
  (武丽丽 等, 2008)<br>
  (Myburg et al., 2014)<br>
  (中国互联网络信息中心, 2012; Bawden, 2008)<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">贾东琴, 柯平, 2011. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社: 45-52.</div>
    <div class="csl-entry">库恩, 2012. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社.</div>
    <div class="csl-entry">武丽丽, 华一新, 张亚军, 等, 2008. “北斗一号”监控管理网设计与实现[J/OL]. 测绘科学, 33(5): 8-9[2009-10-25]. <a href="http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail">http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail</a>. DOI:<a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">10.3771/j.issn.1009-2307.2008.05.002</a>.</div>
    <div class="csl-entry">中国互联网络信息中心, 2012. 第 29 次中国互联网络发展现状统计报告[R/OL]. (2012-01-16)[2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>.</div>
    <div class="csl-entry">BAWDEN D, 2008. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
    <div class="csl-entry">FAN X, SOMMERS C H, 2013. Food irradiation research and technology[M/OL]. 2nd ed. Ames, Iowa: Blackwell Publishing: 25-26[2014-06-26]. <a href="http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary">http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary</a>.</div>
    <div class="csl-entry">FOURNEY M E, c1971. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME: 17-38.</div>
    <div class="csl-entry">MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al., 2014. The genome of eucalyptus grandis[J/OL]. Nature, 510: 356-362[2014-06-25]. <a href="http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf">http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf</a>. DOI:<a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.</div>
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

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M/OL]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26[2014-06-26]. <a href="http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary">http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary</a>.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J/OL]. 测绘科学, 2008, 33(5): 8-9[2009-10-25]. <a href="http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail">http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail</a>. DOI:<a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">10.3771/j.issn.1009-2307.2008.05.002</a>.</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J/OL]. Nature, 2014, 510: 356-362[2014-06-25]. <a href="http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf">http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf</a>. DOI:<a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R/OL]. (2012-01-16)[2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>.</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [009gb-t-7714-2015-numeric-bilingual-no-uppercase-page-out.csl]

[007gb-t-7714-2015-numeric-bilingual-no-uppercase.csl] 基础上修改。引文页码在“[序号]”的外面。

1. 按照语言显示“等”或“et al.”；
2. 姓名取消全大写；
3. 引文页码在括号外。注：由于 CSL 功能的限制，这会导致同一处引用多篇文献时无法将全部序号置于括号内。

显示效果：

> <sup>[1]–[8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M/OL]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26[2014-06-26]. <a href="http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary">http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary</a>.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J/OL]. 测绘科学, 2008, 33(5): 8-9[2009-10-25]. <a href="http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail">http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail</a>. DOI:<a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">10.3771/j.issn.1009-2307.2008.05.002</a>.</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J/OL]. Nature, 2014, 510: 356-362[2014-06-25]. <a href="http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf">http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf</a>. DOI:<a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R/OL]. (2012-01-16)[2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>.</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [010gb-t-7714-2015-author-date-bilingual-no-uppercase.csl]

[china-national-standard-gb-t-7714-2015-author-date.csl] 的修改版。

1. 按照语言显示“等”或“et al.”；
2. 姓名取消全大写。

显示效果：

<blockquote>
  (库恩, 2012)<br>
  (Fourney, c1971)<br>
  (贾东琴 等, 2011)<br>
  (Fan et al., 2013)<br>
  (武丽丽 等, 2008)<br>
  (Myburg et al., 2014)<br>
  (中国互联网络信息中心, 2012; Bawden, 2008)<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">贾东琴, 柯平, 2011. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社: 45-52.</div>
    <div class="csl-entry">库恩, 2012. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社.</div>
    <div class="csl-entry">武丽丽, 华一新, 张亚军, 等, 2008. “北斗一号”监控管理网设计与实现[J/OL]. 测绘科学, 33(5): 8-9[2009-10-25]. <a href="http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail">http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail</a>. DOI:<a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">10.3771/j.issn.1009-2307.2008.05.002</a>.</div>
    <div class="csl-entry">中国互联网络信息中心, 2012. 第 29 次中国互联网络发展现状统计报告[R/OL]. (2012-01-16)[2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>.</div>
    <div class="csl-entry">Bawden D, 2008. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
    <div class="csl-entry">Fan X, Sommers C H, 2013. Food irradiation research and technology[M/OL]. 2nd ed. Ames, Iowa: Blackwell Publishing: 25-26[2014-06-26]. <a href="http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary">http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary</a>.</div>
    <div class="csl-entry">Fourney M E, c1971. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME: 17-38.</div>
    <div class="csl-entry">Myburg A A, Grattapaglia D, Tuskan G A, et al., 2014. The genome of eucalyptus grandis[J/OL]. Nature, 510: 356-362[2014-06-25]. <a href="http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf">http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf</a>. DOI:<a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.</div>
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
  （库恩, 2012）<br>
  （Fourney, c1971）<br>
  （贾东琴 等, 2011）<br>
  （Fan et al., 2013）<br>
  （武丽丽 等, 2008）<br>
  （Myburg et al., 2014）<br>
  （中国互联网络信息中心, 2012; Bawden, 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">贾东琴, 柯平, 2011. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社: 45-52.</div>
    <div class="csl-entry">库恩, 2012. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社.</div>
    <div class="csl-entry">武丽丽, 华一新, 张亚军, 等, 2008. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 33(5): 8-9.</div>
    <div class="csl-entry">中国互联网络信息中心, 2012. 第 29 次中国互联网络发展现状统计报告[R].</div>
    <div class="csl-entry">Bawden D, 2008. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
    <div class="csl-entry">Fan X, Sommers C H, 2013. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing: 25-26.</div>
    <div class="csl-entry">Fourney M E, c1971. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME: 17-38.</div>
    <div class="csl-entry">Myburg A A, Grattapaglia D, Tuskan G A, et al., 2014. The genome of eucalyptus grandis[J]. Nature, 510: 356-362.</div>
  </div>
</blockquote>


## [016nsfc-author-date.csl]

[NSFC作者年代 (显示全部作者, 姓名取消大写, 无 URL DOI)](https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D8055ED3A7E05397BE0A0AB82A)样式。在 [china-national-standard-gb-t-7714-2015-numeric.csl](http://www.zotero.org/styles/china-national-standard-gb-t-7714-2015-numeric) 基础上修改。

显示效果：

<blockquote>
  （库恩, 2012）<br>
  （Fourney, c1971）<br>
  （贾东琴 等, 2011）<br>
  （Fan et al., 2013）<br>
  （武丽丽 等, 2008）<br>
  （Myburg et al., 2014）<br>
  （中国互联网络信息中心, 2012; Bawden, 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">1.	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. <b>中国图书馆学会年会论文集</b>: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">2.	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">3.	武丽丽, 华一新, 张亚军, 刘英敏. “北斗一号”监控管理网设计与实现[J]. <b>测绘科学</b>, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">4.	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
    <div class="csl-entry">5.	Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
    <div class="csl-entry">6.	Fan X, Sommers C H. Food irradiation research and technology[M]. 2 版. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">7.	Fourney M E. Advances in holographic photoelasticity[C]//<b>Symposium on Applications of Holography in Mechanics</b>, 1971年8月23—25日, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">8.	Myburg A A, Grattapaglia D, Tuskan G A, Hellsten U, Hayes R D, Grimwood J, Jenkins J, Lindquist E, Tice H, Bauer D, Goodstein D M, Dubchak I, Poliakov A, Mizrachi E, Kullan A R K, Hussey S G, Pinard D, van der Merwe K, Singh P, van Jaarsveld I, Silva-Junior O B, Togawa R C, Pappas M R, Faria D A, Sansaloni C P, Petroli C D, Yang X, Ranjan P, Tschaplinski T J, Ye C Y, Li T, Sterck L, Vanneste K, Murat F, Soler M, Clemente H S, Saidi N, Cassan-Wang H, Dunand C, Hefer C A, Bornberg-Bauer E, Kersting A R, Vining K, Amarasinghe V, Ranik M, Naithani S, Elser J, Boyd A E, Liston A, Spatafora J W, Dharmwardhana P, Raja R, Sullivan C, Romanel E, Alves-Ferreira M, Külheim C, Foley W, Carocha V, Paiva J, Kudrna D, Brommonschenkel S H, Pasquali G, Byrne M, Rigault P, Tibbits J, Spokevicius A, Jones R C, Steane D A, Vaillancourt R E, Potts B M, Joubert F, Barry K, Pappas G J, Strauss S H, Jaiswal P, Grima-Pettenati J, Salse J, Van de Peer Y, Rokhsar D S, Schmutz J. The genome of eucalyptus grandis[J]. <b>Nature</b>, 2014, 510: 356-362.</div>
  </div>
</blockquote>


## [017gb-t-7714-2005-numeric-bilingual.csl]

[GB/T 7714-2005 (顺序编码, 双语)](https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D78562D3A7E05397BE0A0AB82A)样式。在 [china-national-standard-gb-t-7714-2015-numeric.csl](http://www.zotero.org/styles/china-national-standard-gb-t-7714-2015-numeric) 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	FAN X, SOMMERS C H. Food irradiation research and technology[M/OL]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26[2014-06-26]. <a href="http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary">http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary</a>.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	FOURNEY M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J/OL]. 测绘科学, 2008, 33(5): 8-9[2009-10-25]. <a href="http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail">http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail</a>.</div>
    <div class="csl-entry">[6]	MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. The genome of eucalyptus grandis[J/OL]. Nature, 2014, 510: 356-362[2014-06-25]. <a href="http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf">http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf</a>.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R/OL]. (2012-01-16)[2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>.</div>
    <div class="csl-entry">[8]	BAWDEN D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [018gb-t-7714-2005-author-date-bilingual.csl]

[GB/T 7714-2005 (著者-出版年, 双语)](https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D8055ED3A7E05397BE0A0AB82A)样式。在 [china-national-standard-gb-t-7714-2015-author-date.csl](http://www.zotero.org/styles/china-national-standard-gb-t-7714-2015-author-date) 基础上修改。

显示效果：

<blockquote>
  (库恩, 2012)<br>
  (Fourney, c1971)<br>
  (贾东琴 等, 2011)<br>
  (Fan et al., 2013)<br>
  (武丽丽 等, 2008)<br>
  (Myburg et al., 2014)<br>
  (中国互联网络信息中心, 2012; Bawden, 2008)<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">贾东琴, 柯平. 2011. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社: 45-52.</div>
    <div class="csl-entry">库恩. 2012. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社.</div>
    <div class="csl-entry">武丽丽, 华一新, 张亚军, 等. 2008. “北斗一号”监控管理网设计与实现[J/OL]. 测绘科学, 33(5): 8-9[2009-10-25]. <a href="http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail">http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail</a>.</div>
    <div class="csl-entry">中国互联网络信息中心. 2012. 第 29 次中国互联网络发展现状统计报告[R/OL]. (2012-01-16)[2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>.</div>
    <div class="csl-entry">BAWDEN D. 2008. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
    <div class="csl-entry">FAN X, SOMMERS C H. 2013. Food irradiation research and technology[M/OL]. 2nd ed. Ames, Iowa: Blackwell Publishing: 25-26[2014-06-26]. <a href="http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary">http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary</a>.</div>
    <div class="csl-entry">FOURNEY M E. c1971. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME: 17-38.</div>
    <div class="csl-entry">MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. 2014. The genome of eucalyptus grandis[J/OL]. Nature, 510: 356-362[2014-06-25]. <a href="http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf">http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf</a>.</div>
  </div>
</blockquote>


## [019gb-t-7714-1987-numeric-bilingual.csl]

GB/T 7714—1987 《[文后参考文献著录规则](https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D7B3D5D3A7E05397BE0A0AB82A)》，支持双语：按照语言显示“等”或“et al.”。。

显示效果：

<blockquote>
  <sup>〔1〕</sup><br>
  <sup>〔2〕</sup><br>
  <sup>〔3〕</sup><br>
  <sup>〔4〕</sup><br>
  <sup>〔5〕</sup><br>
  <sup>〔6〕</sup><br>
  <sup>〔7〕</sup><br>
  <sup>〔8〕</sup><br>
  <sup>〔9〕</sup><br>
</blockquote>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">1	刘少奇. 论共产党员的修养. 北京: 人民出版社, 1962. 76 页</div>
    <div class="csl-entry">2	Morton L T, ed. Use of medical literature. London: Butterworths, 1977. 462 p. Information sources for research and development. ISBN 0-408-70916-2</div>
    <div class="csl-entry">3	Feist W, Wahnert C, Feistauer E. Anordnung zur lichtelektrischen Erfassung der Mitte eines Lichtfeldes. Schweiz, Patentschrift, 608626. 1979.1.15</div>
    <div class="csl-entry">4	Weinstein L, Swertz M N. Pathogenic properties of invading microorganism. In: Sodeman W A Jr, Sodeman W A, ed. Pathologic physiology: mechanisms of disease. Philadelphia: Saunders, 1974. 457～472</div>
    <div class="csl-entry">5	李四光. 地壳构造与地壳运动. 中国科学, 1973(4): 400～429</div>
    <div class="csl-entry">6	Mastri A R. Neuropathology of diabetic neurogenic bladder. Ann Intern Med, 1980, 92(2.2): 316～318</div>
    <div class="csl-entry">7	张筑生. 微分半动力系统的不变集: 〔学位论文〕. 北京大学数学研究所, 1983.</div>
    <div class="csl-entry">8	Cairns B R. Infrared spectroscopic studies on solid oxygen: 〔dissertation〕. Berkeley: Univ. of California, 1965.</div>
    <div class="csl-entry">9	黄蕴慧. 国际矿物学研究的动向. 见: 程裕淇编. 世界地质科技发展动向. 北京: 地质出版社, 1982. 38～39</div>
  </div>
</blockquote>


## [020gb-t-7714-2015-numeric-fullwidth-punctuations.csl]

[GB/T 7714-2015（顺序编码，全角标点）](https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D8055ED3A7E05397BE0A0AB82A)样式。在 [china-national-standard-gb-t-7714-2015-numeric.csl](http://www.zotero.org/styles/china-national-standard-gb-t-7714-2015-numeric) 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩．科学革命的结构: 第 4 版［M］．金吾伦，胡新和，译．2 版．北京：北京大学出版社，2012．</div>
    <div class="csl-entry">[2]	FAN X, SOMMERS C H. Food irradiation research and technology[M/OL]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25—26[2014-06-26]. <a href="http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary">http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary</a>.</div>
    <div class="csl-entry">[3]	贾东琴，柯平．面向数字素养的高校图书馆数字服务体系研究［C］//中国图书馆学会．中国图书馆学会年会论文集：2011 年卷．北京：国家图书馆出版社，2011：45—52．</div>
    <div class="csl-entry">[4]	FOURNEY M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17—38.</div>
    <div class="csl-entry">[5]	武丽丽，华一新，张亚军，等．“北斗一号”监控管理网设计与实现［J/OL］．测绘科学，2008，33（5）：8—9［2009-10-25］．<a href="http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail">http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail</a>．DOI:<a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">10.3771/j.issn.1009-2307.2008.05.002</a>．</div>
    <div class="csl-entry">[6]	MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. The genome of eucalyptus grandis[J/OL]. Nature, 2014, 510: 356—362[2014-06-25]. <a href="http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf">http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf</a>. DOI:<a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心．第 29 次中国互联网络发展现状统计报告［R/OL］．（2012-01-16）［2013-03-26］．<a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>．</div>
    <div class="csl-entry">[8]	BAWDEN D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [021gb-t-7714-2015-author-date-fullwidth-punctuations.csl]

[GB/T 7714-2015（著者-出版年，全角标点）](https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D8055ED3A7E05397BE0A0AB82A)样式。在 [china-national-standard-gb-t-7714-2015-author-date.csl](http://www.zotero.org/styles/china-national-standard-gb-t-7714-2015-author-date) 基础上修改。

显示效果：

<blockquote>
  （库恩，2012）<br>
  （Fourney, c1971）<br>
  （贾东琴 等，2011）<br>
  （Fan et al., 2013）<br>
  （武丽丽 等，2008）<br>
  （Myburg et al., 2014）<br>
  （中国互联网络信息中心，2012；Bawden, 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">贾东琴，柯平，2011．面向数字素养的高校图书馆数字服务体系研究［C］//中国图书馆学会．中国图书馆学会年会论文集：2011 年卷．北京：国家图书馆出版社：45—52．</div>
    <div class="csl-entry">库恩，2012．科学革命的结构: 第 4 版［M］．金吾伦，胡新和，译．2 版．北京：北京大学出版社．</div>
    <div class="csl-entry">武丽丽，华一新，张亚军，等，2008．“北斗一号”监控管理网设计与实现［J/OL］．测绘科学，33（5）：8—9［2009-10-25］．<a href="http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail">http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail</a>．DOI:<a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">10.3771/j.issn.1009-2307.2008.05.002</a>．</div>
    <div class="csl-entry">中国互联网络信息中心，2012．第 29 次中国互联网络发展现状统计报告［R/OL］．（2012-01-16）［2013-03-26］．<a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>．</div>
    <div class="csl-entry">BAWDEN D, 2008. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
    <div class="csl-entry">FAN X, SOMMERS C H, 2013. Food irradiation research and technology[M/OL]. 2nd ed. Ames, Iowa: Blackwell Publishing: 25—26[2014-06-26]. <a href="http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary">http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary</a>.</div>
    <div class="csl-entry">FOURNEY M E, c1971. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME: 17—38.</div>
    <div class="csl-entry">MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al., 2014. The genome of eucalyptus grandis[J/OL]. Nature, 510: 356—362[2014-06-25]. <a href="http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf">http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf</a>. DOI:<a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.</div>
  </div>
</blockquote>


## [022journals-of-natural-sciences-in-chinese-universities.csl]

《[中国高等学校自然科学学报编排规范](http://gxb.zzu.edu.cn/Upload/Park/ccc5c171-124b-4f01-a4d0-44db19516ff8.pdf)》。[019gb-t-7714-1987-numeric-bilingual.csl] 基础上修改。

显示效果：

> [1–12]

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">1	高景德，王祥珩．交流电机的多回路理论．清华大学学报（自然科学版），1987，27（1）：1～8</div>
    <div class="csl-entry">2	Nadkarni M A, Nair C K K, Pandey V N, et al. Characterization of alpha-galactosidase from corynebacterium murisepticum and mechanism of its induction. J Gen App Microbiol, 1992, 38(1): 23～34</div>
    <div class="csl-entry">3	华罗庚，王元．论一致分布与近似分析：数论方法（I）．中国科学，1973（4）：339～357</div>
    <div class="csl-entry">4	竺可桢．物候学．北京：科学出版社，1973</div>
    <div class="csl-entry">5	霍夫斯塔主编．禽病学：下册．第7版．胡祥壁译．北京：农业出版社，1981：798～799</div>
    <div class="csl-entry">6	Timoshenko S P. Theory of plate and shells. 2nd ed. New York: McGraw-Hill, 1959: 17～36</div>
    <div class="csl-entry">7	张全福，王里青．“百家争鸣”与理工科学报编辑工作．见：郑福寿主编．学报编辑论丛：第 2 集．南京：河海大学出版社，1991：1～4</div>
    <div class="csl-entry">8	Dupont B. Bone marrow transplantation in severe combined immunodeficiency with an unrelated MLC compatible donor. In: White H J, Smith R, eds. Proceedings of the third annual meeting of the International Society for Experimental Hematology. Houston: International Society for Experimental Hematology, 1974: 44～46</div>
    <div class="csl-entry">9	张筑生．微分半动力系统的不变集：[学位论文]．北京：北京大学数学系，1983</div>
    <div class="csl-entry">10	Cairns B R. Infrared spectroscopic studies on solid oxygen: [dissertation]. Berkeley: Univ of California, 1965</div>
    <div class="csl-entry">11	姜锡洲．一种温热外敷药制备方法．中国专利，881056073．1989-07-26</div>
    <div class="csl-entry">12	全国文献工作标准化技术委员会第六分委员会．GB 6447—86 文摘编写规则．北京：中国标准出版社，1986</div>
  </div>
</blockquote>


## [023gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi-with-locator.csl]

[GB/T 7714-2015 (顺序编码, 双语, 姓名取消大写, 无 URL DOI, 引注有页码)](https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D8055ED3A7E05397BE0A0AB82A)样式。在 [china-national-standard-gb-t-7714-2015-numeric.csl](http://www.zotero.org/styles/china-national-standard-gb-t-7714-2015-numeric) 基础上修改。

显示效果：

> <sup>[1]–[8]</sup>

<blockquote>
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
</blockquote>


## [101chinese-medical-association.csl]

中华医学会系列杂志样式。[000gb-t-7714-2015-numeric-bilingual.csl] 基础上修改，作者为大写，支持中文作者超过 3 个为“`等`”，英文为“`et al`”。英文期刊名称为缩写，缩写使用方法：在 Word 的 Zotero 工具条上点击 `Document preferences`，选择`Chinese Medical Association（numeric, Chinese`后，点击 `Use MEDLINE journal abbreviations` 前的复选框，使之选中，则使用 MEDLINE 的缩写格式；如果这个缩写格式不适合，不要选中 `Use MEDLINE journal abbreviations`，在 `Zotero` 中 `Info` 下面的 `Journal Abbr` 字段内填写杂志的缩写，则会调用自已填写的杂志缩写，`Juris—M` 对杂志缩写处理选项更多。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	FAN X, SOMMERS C H. Food irradiation research and technology[M/OL]. 2 edition. Ames, Iowa: Blackwell Publishing, 2013: 25–26[2014-06-26]. <a href="http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary">http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary</a>.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会, 编//中国图书馆学会年会论文集. 北京: 国家图书馆出版社, 2011: 45–52.</div>
    <div class="csl-entry">[4]	FOURNEY M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics. New York: ASME, c1971: 17–38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J/OL]. 测绘科学, 2008, 33(5): 8–9[2009-10-25]. <a href="http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail">http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail</a>. DOI:<a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">10.3771/j.issn.1009-2307.2008.05.002</a>.</div>
    <div class="csl-entry">[6]	MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. The genome of eucalyptus grandis[J/OL]. Nature, 2014, 510: 356–362[2014-06-25]. <a href="http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf">http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf</a>. DOI:<a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R/OL]. (2012-01-16)[2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>.</div>
    <div class="csl-entry">[8]	BAWDEN D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [102transactions-of-the-chinese-society-of-agricultural-engineering.csl]

[《农业工程学报》](http://www.tcsae.org/nygcxb/home)样式
使用方法见 `Zotero` 生成双语参考文献的变通实现方法（含视频讲解）<https://zhuanlan.zhihu.com/p/282826403>，作者改为全部字母大写，支持中文作者超过 `3` 个为“`等`”，英文为“`et al`”。文章的题目大小写与 `Zotero` 中的 `Title` 字段一致，不显示 `URL` 和 `DOI`。

存在问题：中文翻译后面会多一个空行，可以在文章定稿后通过在 Word 中查找 `^l.^p` 替换为 `^p` 批量删除；如果要设置缩进悬挂，需要将里面的软回车替换为硬回车，方法是 Word 中查找 `^l` 替换为 `^p` 批量替换。

空行删除及缩进、悬挂设置：
<!--![空行删除及缩进、悬挂设置-->
![空行删除及缩进、悬挂设置](/img/blank-line-remove.gif "Title")

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">[1] 库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.

      <div class="csl-block">科学革命的结构</div>
  .</div>
    <div class="csl-entry">[2] FAN X, SOMMERS C H. Food irradiation research and technology[M]. 2 edition. Ames, Iowa: Blackwell Publishing, 2013: 25–26[2014-06-26].</div>
    <div class="csl-entry">[3] 贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会, 编//中国图书馆学会年会论文集. 北京: 国家图书馆出版社, 2011: 45–52.</div>
    <div class="csl-entry">[4] FOURNEY M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics. New York: ASME, c1971: 17–38.</div>
    <div class="csl-entry">[5] 武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8–9[2009-10-25].</div>
    <div class="csl-entry">[6] MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356–362[2014-06-25].</div>
    <div class="csl-entry">[7] 中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. [2013-03-26].</div>
    <div class="csl-entry">[8] BAWDEN D. Origins and concepts of digital literacy[EB](2008-05-04)[2013-03-08].</div>
  </div>
</blockquote>


## [103ieee-bl.csl]

[官方 IEEE](https://github.com/citation-style-language/styles/blob/master/ieee.csl) 基础上修改。文内数字引用为上标格式，显示全部作者，中文最后一个作者前显示`和`，英文文献显示 `and`，英文文献条目需要在 `Zotero` 中将文献条目语言修改为 `en-US`。

显示效果：

> <sup>[1]–[8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩, <i>科学革命的结构: 第 4 版</i>, 2 本. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	X. Fan and C. H. Sommers, <i>Food irradiation research and technology</i>, 2nd ed. Ames, Iowa: Blackwell Publishing, 2013, pp. 25–26. Accessed: Jun. 26, 2014. [Online]. Available: <a href="http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary">http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary</a></div>
    <div class="csl-entry">[3]	贾东琴和柯平, “面向数字素养的高校图书馆数字服务体系研究”, 收入 中国图书馆学会年会论文集, 北京, 2011, 卷 2011 年卷, 页 45–52.</div>
    <div class="csl-entry">[4]	M. E. Fourney, “Advances in holographic photoelasticity”, in <i>Symposium on Applications of Holography in Mechanics</i>, University of Southern California, Los Angeles, California, c1971, pp. 17–38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军和刘英敏, “‘北斗一号’监控管理网设计与实现”, 测绘科学, 卷 33, 期 5, 页 8–9, 2008, doi: <a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">10.3771/j.issn.1009-2307.2008.05.002</a>.</div>
    <div class="csl-entry">[6]	A. A. Myburg <i>et al.</i>, “The genome of eucalyptus grandis”, <i>Nature</i>, vol. 510, pp. 356–362, Jun. 2014, doi: <a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心, “第 29 次中国互联网络发展现状统计报告”, 1月 2012. 见于: 3月 26, 2013. [在线]. 载于: <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a></div>
    <div class="csl-entry">[8]	D. Bawden, “Origins and concepts of digital literacy”, May 04, 2008. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a> (accessed Mar. 08, 2013).</div>
  </div>
</blockquote>


## [104acta-physica-sinica.csl]

《物理学报》<https://wulixb.iphy.ac.cn/news/tougaoxuzhi.htm>样式，根据[000gb-t-7714-2015-numeric-bilingual.csl]修改。对应官方仓库为<https://github.com/citation-style-language/styles/blob/master/acta-physica-sinica.csl>或<https://github.com/redleafnew/Chinese-STD-GB-T-7714-related-csl/blob/main/105acta-physica-sinica-zotero-res.csl>，CSL官方仓库要求将期刊对应的翻译放入`Extra`字段中，并且前面加`original-title: `。

存在问题：

1.期刊对应的英文翻译请自行翻译，并添加到`Short Title`字段中，其实现的原理见<https://zhuanlan.zhihu.com/p/282826403>；斜体和加粗需要在相应字段前后加`<i></i>`和`<b></b>`，详见https://zhuanlan.zhihu.com/p/57638901。<br>
2.学位论文格式中要求有论文题目，但给的例子中没有，因此没有；如果是国外学位论文请在Type中注明学位论文类型如：M.S. Thesis或Ph. D. Dissertation。<br>
3.会议论文日期无法是日期范围：只能在Extra中输入<code>Date: 2019年09月21-23日</code>或<code>Issued: 2019-09-21/2019-09-23</code>，最终显示为：<code>2019-09-21/23</code>。<br>
4.其它文献类型待测试。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	科学革命的结构 (in Chinese) [库恩著 (金吾伦, 胡新和译) 2012 科学革命的结构: 第 4 版 2 版 (北京: 北京大学出版社)]</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H 2013 Food irradiation research and technology 2 版 (Ames, Iowa: Blackwell Publishing: 25–26)</div>
    <div class="csl-entry">[3]	贾东琴, 柯平 2011 中国图书馆学会年会论文集 北京 , 2011 pp45–52</div>
    <div class="csl-entry">[4]	Fourney M E c1971 Symposium on Applications of Holography in Mechanics University of Southern California, Los Angeles, California , c1971 pp17–38</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 刘英敏 2008 测绘科学 <b>33</b> 8</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, Hellsten U, Hayes R D, Grimwood J, Jenkins J, Lindquist E, Tice H, Bauer D, Goodstein D M, Dubchak I, Poliakov A, Mizrachi E, Kullan A R K, Hussey S G, Pinard D, van der Merwe K, Singh P, van Jaarsveld I, Silva-Junior O B, Togawa R C, Pappas M R, Faria D A, Sansaloni C P, Petroli C D, Yang X, Ranjan P, Tschaplinski T J, Ye C Y, Li T, Sterck L, Vanneste K, Murat F, Soler M, Clemente H S, Saidi N, Cassan-Wang H, Dunand C, Hefer C A, Bornberg-Bauer E, Kersting A R, Vining K, Amarasinghe V, Ranik M, Naithani S, Elser J, Boyd A E, Liston A, Spatafora J W, Dharmwardhana P, Raja R, Sullivan C, Romanel E, Alves-Ferreira M, Külheim C, Foley W, Carocha V, Paiva J, Kudrna D, Brommonschenkel S H, Pasquali G, Byrne M, Rigault P, Tibbits J, Spokevicius A, Jones R C, Steane D A, Vaillancourt R E, Potts B M, Joubert F, Barry K, Pappas G J, Strauss S H, Jaiswal P, Grima-Pettenati J, Salse J, Van de Peer Y, Rokhsar D S, Schmutz J 2014 <i>Nature</i> <b>510</b> 356</div>
    <div class="csl-entry">[7]	中国互联网络信息中心 2012 第 29 次中国互联网络发展现状统计报告 ((2012-01-16))</div>
    <div class="csl-entry">[8]	Origins and concepts of digital literacy Bawden D <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a> [2013-03-08]</div>
  </div>
</blockquote>


## [105acta-physica-sinica-zotero-res.csl]

[Acta Physica Sinica (物理学报)](https://wulixb.iphy.ac.cn/news/tougaoxuzhi.htm)样式。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩 金吾伦, 胡新和 2012 科学革命的结构: 第 4 版 2 版 (北京: 北京大学出版社)</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H 2013 Food irradiation research and technology 2 版 (Ames, Iowa: Blackwell Publishing: 25–26)</div>
    <div class="csl-entry">[3]	贾东琴, 柯平 2011 中国图书馆学会年会论文集 北京 , 2011 pp45–52</div>
    <div class="csl-entry">[4]	Fourney M E c1971 Symposium on Applications of Holography in Mechanics University of Southern California, Los Angeles, California , c1971 pp17–38</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 刘英敏 2008 测绘科学 <b>33</b> 8</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, Hellsten U, Hayes R D, Grimwood J, Jenkins J, Lindquist E, Tice H, Bauer D, Goodstein D M, Dubchak I, Poliakov A, Mizrachi E, Kullan A R K, Hussey S G, Pinard D, van der Merwe K, Singh P, van Jaarsveld I, Silva-Junior O B, Togawa R C, Pappas M R, Faria D A, Sansaloni C P, Petroli C D, Yang X, Ranjan P, Tschaplinski T J, Ye C Y, Li T, Sterck L, Vanneste K, Murat F, Soler M, Clemente H S, Saidi N, Cassan-Wang H, Dunand C, Hefer C A, Bornberg-Bauer E, Kersting A R, Vining K, Amarasinghe V, Ranik M, Naithani S, Elser J, Boyd A E, Liston A, Spatafora J W, Dharmwardhana P, Raja R, Sullivan C, Romanel E, Alves-Ferreira M, Külheim C, Foley W, Carocha V, Paiva J, Kudrna D, Brommonschenkel S H, Pasquali G, Byrne M, Rigault P, Tibbits J, Spokevicius A, Jones R C, Steane D A, Vaillancourt R E, Potts B M, Joubert F, Barry K, Pappas G J, Strauss S H, Jaiswal P, Grima-Pettenati J, Salse J, Van de Peer Y, Rokhsar D S, Schmutz J 2014 <i>Nature</i> <b>510</b> 356</div>
    <div class="csl-entry">[7]	中国互联网络信息中心 2012 第 29 次中国互联网络发展现状统计报告 ((2012-01-16))</div>
    <div class="csl-entry">[8]	Origins and concepts of digital literacy Bawden D <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a> [2013-03-08]</div>
  </div>
</blockquote>


## [106journal-of-inorganic-materials.csl]

《无机材料学报》（<http://www.jim.org.cn/CN/column/item6.shtml>）期刊用，ISSN:1000-324X，CN:31-1363/TQ。

作者`(姓前名后，名缩写，全部大写，三人缩写，et al斜体)`. 题名`(第一个单词首字母大写)`. *期刊名*`(斜体)`, 出版年, **卷(期):**`(加粗)` 起始页—终止页。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	FAN X, SOMMERS C H. Food irradiation research and technology. 2 edition. Ames, Iowa: <i>Blackwell Publishing</i>, 2013: 25–26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究. 中国图书馆学会, 编//中国图书馆学会年会论文集. 北京: 国家图书馆出版社, 2011: 45–52.</div>
    <div class="csl-entry">[4]	FOURNEY M E. Advances in holographic photoelasticity//Symposium on Applications of Holography in Mechanics. New York: <i>ASME</i>, c1971: 17–38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现. 测绘科学, 2008, <b>33</b><b>(5)</b><b>: </b>8–9.</div>
    <div class="csl-entry">[6]	MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, <i>et al.</i> The genome of eucalyptus grandis. <i>Nature</i>, 2014, <b>510</b><b>: </b>356–362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告. .</div>
    <div class="csl-entry">[8]	BAWDEN D. Origins and concepts of digital literacy(2008–05–04)[2013–03–08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


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

> <sup>[1–4]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	Wilde AAM, Ackerman MJ. Beta-blockers in the treatment of congenital long QT syndrome: is one beta-blocker superior to another?[J]. J Am Coll Cardiol, 2014, 64(13):1359-1361. DOI: <a href="https://doi.org/10/f2vbrs">10/f2vbrs</a>.</div>
    <div class="csl-entry">[2]	Jablonski S. Online multiple congenital anomaly/mental retardation (MCA/MR) syndromes[DB/OL]. Bethesda (MD): National Library of Medicine (US), 1999[2002-12-12]. <a href="http://www.nlm.nih.gov/mesh/jablonski/syndrome_title.html">http://www.nlm.nih.gov/mesh/jablonski/syndrome_title.html</a>.</div>
    <div class="csl-entry">[3]	卫生部心血管病防治中心. 中国心血管病报告 2011[M]. 北京: 中国大百科全书出版社, 2012.</div>
    <div class="csl-entry">[4]	伊宪华, 韩雅玲, 李毅, 等. 介入治疗开通慢性完全闭塞病变的长期临床疗效[J]. 中华心血管病杂志, 2009, 37(9):773-776. DOI: <a href="https://doi.org/10/gqs68c">10/gqs68c</a>.</div>
  </div>
</blockquote>


## [108journal-of-nuclear-agricultural-sciences.csl]

[405nanjing-agricultural-university-numeric.csl]修改，显示全部作者。适用于[《核农学报》](<https://www.hnxb.org.cn/CN/column/item8.shtml>)的样式。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 刘英敏. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, Hellsten U, Hayes R D, Grimwood J, Jenkins J, Lindquist E, Tice H, Bauer D, Goodstein D M, Dubchak I, Poliakov A, Mizrachi E, Kullan A R K, Hussey S G, Pinard D, van der Merwe K, Singh P, van Jaarsveld I, Silva-Junior O B, Togawa R C, Pappas M R, Faria D A, Sansaloni C P, Petroli C D, Yang X, Ranjan P, Tschaplinski T J, Ye C-Y, Li T, Sterck L, Vanneste K, Murat F, Soler M, Clemente H S, Saidi N, Cassan-Wang H, Dunand C, Hefer C A, Bornberg-Bauer E, Kersting A R, Vining K, Amarasinghe V, Ranik M, Naithani S, Elser J, Boyd A E, Liston A, Spatafora J W, Dharmwardhana P, Raja R, Sullivan C, Romanel E, Alves-Ferreira M, Külheim C, Foley W, Carocha V, Paiva J, Kudrna D, Brommonschenkel S H, Pasquali G, Byrne M, Rigault P, Tibbits J, Spokevicius A, Jones R C, Steane D A, Vaillancourt R E, Potts B M, Joubert F, Barry K, Pappas G J, Strauss S H, Jaiswal P, Grima-Pettenati J, Salse J, Van de Peer Y, Rokhsar D S, Schmutz J. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
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

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和译. 2 版. 北京, 2012.</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. <i>Food irradiation research and technology</i>. 2nd ed. Ames, Iowa, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京, 2011: 45-52.</div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity//<i>Symposium on Applications of Holography in Mechanics</i>, August 23–25, 1971, University of Southern California, Los Angeles, California. New York, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008（5）.</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis. <i>Nature</i>, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [110food-science.csl]

[《食品科学》](https://www.spkx.net.cn/journalx_spkx/authorLogOn.action)样式，[000gb-t-7714-2015-numeric-bilingual.csl]基础上修改，书籍显示页码。如果引用国家标准、书籍需要显示页码，可以在Extra字段中输入`pages: 2-3`。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	FAN X, SOMMERS C H. Food irradiation research and technology[M/OL]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	FOURNEY M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J/OL]. 测绘科学, 2008, 33(5): 8-9[2009-10-25]. <a href="http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail">http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail</a>. DOI:<a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">10.3771/j.issn.1009-2307.2008.05.002</a>.</div>
    <div class="csl-entry">[6]	MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. The genome of eucalyptus grandis[J/OL]. Nature, 2014, 510: 356-362[2014-06-25]. <a href="http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf">http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf</a>. DOI:<a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R/OL]. (2012-01-16)[2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>.</div>
    <div class="csl-entry">[8]	BAWDEN D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [111acta-agriculurae-boreali-sinica.csl]

[华北农学报](http://www.hbnxb.net/CN/column/column7.shtml#)样式，添加平行语言支持，即对于中文文献要求在中文文献后添加其英文的翻译，使用方法见 `Zotero` 生成双语参考文献的变通实现方法（含视频讲解）<https://zhuanlan.zhihu.com/p/282826403>。作者为首字母大写，显示全部作者和DOI，

存在问题：中文翻译后面会多一个空行，可以在文章定稿后通过在 Word 中查找 `^l.^p` 替换为 `^p` 批量删除；如果要设置缩进悬挂，需要将里面的软回车替换为硬回车，方法是 Word 中查找 `^l` 替换为 `^p` 批量替换。

空行删除及缩进、悬挂设置：
<!--![空行删除及缩进、悬挂设置-->
![空行删除及缩进、悬挂设置](/img/blank-line-remove.gif "Title")

该样式有较多 bug，不建议在此基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">[1] 库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.

      <div class="csl-block">科学革命的结构</div>
  .</div>
    <div class="csl-entry">[2] Fan X, Sommers C H. Food irradiation research and technology[M]. 2 edition. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3] 贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会, 编//中国图书馆学会年会论文集. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4] Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5] 武丽丽, 华一新, 张亚军, 刘英敏. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9. doi: <a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">10.3771/j.issn.1009-2307.2008.05.002</a>.</div>
    <div class="csl-entry">[6] Myburg A A, Grattapaglia D, Tuskan G A, Hellsten U, Hayes R D, Grimwood J, Jenkins J, Lindquist E, Tice H, Bauer D, Goodstein D M, Dubchak I, Poliakov A, Mizrachi E, Kullan A R K, Hussey S G, Pinard D, van der Merwe K, Singh P, van Jaarsveld I, Silva-Junior O B, Togawa R C, Pappas M R, Faria D A, Sansaloni C P, Petroli C D, Yang X, Ranjan P, Tschaplinski T J, Ye C-Y, Li T, Sterck L, Vanneste K, Murat F, Soler M, Clemente H S, Saidi N, Cassan-Wang H, Dunand C, Hefer C A, Bornberg-Bauer E, Kersting A R, Vining K, Amarasinghe V, Ranik M, Naithani S, Elser J, Boyd A E, Liston A, Spatafora J W, Dharmwardhana P, Raja R, Sullivan C, Romanel E, Alves-Ferreira M, Külheim C, Foley W, Carocha V, Paiva J, Kudrna D, Brommonschenkel S H, Pasquali G, Byrne M, Rigault P, Tibbits J, Spokevicius A, Jones R C, Steane D A, Vaillancourt R E, Potts B M, Joubert F, Barry K, Pappas G J, Strauss S H, Jaiswal P, Grima-Pettenati J, Salse J, Van de Peer Y, Rokhsar D S, Schmutz J. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362. doi: <a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.</div>
    <div class="csl-entry">[7] 中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R].（2012-01-16）. [2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>.</div>
    <div class="csl-entry">[8] Bawden D. Origins and concepts of digital literacy[EB](2008-05-04).</div>
  </div>
</blockquote>


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

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.

      <div class="csl-block">库恩. 科学革命的结构: 第 4 版. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012. (in Chinese)</div>
  </div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.

      <div class="csl-block">贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究//中国图书馆学会. 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52. (in Chinese)</div>
  </div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 刘英敏. “北斗一号”监控管理网设计与实现. 测绘科学, 2008, 33(5): 8-9.

      <div class="csl-block">武丽丽, 华一新, 张亚军, 刘英敏. “北斗一号”监控管理网设计与实现. 测绘科学, 2008, 33(5): 8-9. (in Chinese)</div>
  </div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, Hellsten U, Hayes R D, Grimwood J, Jenkins J, Lindquist E, Tice H, Bauer D, Goodstein D M, Dubchak I, Poliakov A, Mizrachi E, Kullan A R K, Hussey S G, Pinard D, van der Merwe K, Singh P, van Jaarsveld I, Silva-Junior O B, Togawa R C, Pappas M R, Faria D A, Sansaloni C P, Petroli C D, Yang X, Ranjan P, Tschaplinski T J, Ye C Y, Li T, Sterck L, Vanneste K, Murat F, Soler M, Clemente H S, Saidi N, Cassan-Wang H, Dunand C, Hefer C A, Bornberg-Bauer E, Kersting A R, Vining K, Amarasinghe V, Ranik M, Naithani S, Elser J, Boyd A E, Liston A, Spatafora J W, Dharmwardhana P, Raja R, Sullivan C, Romanel E, Alves-Ferreira M, Külheim C, Foley W, Carocha V, Paiva J, Kudrna D, Brommonschenkel S H, Pasquali G, Byrne M, Rigault P, Tibbits J, Spokevicius A, Jones R C, Steane D A, Vaillancourt R E, Potts B M, Joubert F, Barry K, Pappas G J, Strauss S H, Jaiswal P, Grima-Pettenati J, Salse J, Van de Peer Y, Rokhsar D S, Schmutz J. The genome of eucalyptus grandis. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告. (2012-01-16).

      <div class="csl-block">中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告. (2012-01-16). (in Chinese)</div>
  </div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy. (2008-05-04).</div>
  </div>
</blockquote>


## [113acta-microbiologica-sinica.csl]

[微生物学报](https://actamicro.ijournals.cn/actamicrocn/site/menus/20130129090332001?id=20070609220743001)样式。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">[1] 库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2] Fan X, Sommers C H. Food irradiation research and technology[M/OL]. 2 edition. Ames, Iowa: Blackwell Publishing, 2013: 25-26[2014-06-26].</div>
    <div class="csl-entry">[3] 贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会, 编//中国图书馆学会年会论文集. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4] Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5] 武丽丽, 华一新, 张亚军, 刘英敏. “北斗一号”监控管理网设计与实现[J/OL]. 测绘科学, 2008, 33(5): 8-9[2009-10-25].</div>
    <div class="csl-entry">[6] Myburg A A, Grattapaglia D, Tuskan G A, Hellsten U, Hayes R D, Grimwood J, Jenkins J, Lindquist E, Tice H, Bauer D, Goodstein D M, Dubchak I, Poliakov A, Mizrachi E, Kullan A R K, Hussey S G, Pinard D, van der Merwe K, Singh P, van Jaarsveld I, Silva-Junior O B, Togawa R C, Pappas M R, Faria D A, Sansaloni C P, Petroli C D, Yang X, Ranjan P, Tschaplinski T J, Ye C-Y, Li T, Sterck L, Vanneste K, Murat F, Soler M, Clemente H S, Saidi N, Cassan-Wang H, Dunand C, Hefer C A, Bornberg-Bauer E, Kersting A R, Vining K, Amarasinghe V, Ranik M, Naithani S, Elser J, Boyd A E, Liston A, Spatafora J W, Dharmwardhana P, Raja R, Sullivan C, Romanel E, Alves-Ferreira M, Külheim C, Foley W, Carocha V, Paiva J, Kudrna D, Brommonschenkel S H, Pasquali G, Byrne M, Rigault P, Tibbits J, Spokevicius A, Jones R C, Steane D A, Vaillancourt R E, Potts B M, Joubert F, Barry K, Pappas G J, Strauss S H, Jaiswal P, Grima-Pettenati J, Salse J, Van de Peer Y, Rokhsar D S, Schmutz J. The genome of eucalyptus grandis[J/OL]. Nature, 2014, 510: 356-362[2014-06-25].</div>
    <div class="csl-entry">[7] 中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R/OL].（2012-01-16）. [2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>[2013-03-26].</div>
    <div class="csl-entry">[8] Bawden D. Origins and concepts of digital literacy[EB/OL](2008-05-04)[2013-03-08].</div>
  </div>
</blockquote>


## [114food-materials-research.csl]

[Food Materials Research](https://www.maxapress.com/fmr/for_authors)样式。

显示效果：

> [1–8]

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">1. 	库恩, 2012. <i>科学革命的结构: 第 4 版</i>. 北京: 北京大学出版社. 2nd ed.</div>
    <div class="csl-entry">2. 	Fan X, Sommers CH, 2013. <i>Food irradiation research and technology</i>. Ames, Iowa: Blackwell Publishing. 2nd ed.</div>
    <div class="csl-entry">3. 	贾东琴, 柯平. 2011. 面向数字素养的高校图书馆数字服务体系研究</div>
    <div class="csl-entry">4. 	Fourney ME. c1971. Advances in holographic photoelasticity</div>
    <div class="csl-entry">5. 	武丽丽, 华一新, 张亚军, 刘英敏. 2008. “北斗一号”监控管理网设计与实现. 测绘科学. 33(5): 8–9</div>
    <div class="csl-entry">6. 	Myburg AA, Grattapaglia D, Tuskan GA, Hellsten U, Hayes RD, et al. 2014. The genome of eucalyptus grandis. <i>Nature</i>. 510: 356–62</div>
    <div class="csl-entry">7. 	中国互联网络信息中心. 2012. 第 29 次中国互联网络发展现状统计报告</div>
    <div class="csl-entry">8. 	Bawden D. 2008. <i>Origins and concepts of digital literacy</i>. <a href="https://doi.org/www.soi.city.ac.uk">www.soi.city.ac.uk</a></div>
  </div>
</blockquote>


## [115advances-in-water-science.csl]

[003gb-t-7714-2015-numeric-bilingual-no-url-doi.csl]基础上修改，参考了[211journal-of-plant-protection.csl]、[212journal-of-marketing-science.csl]，[《水科学进展》](http://skxjz.nhri.cn/news/tougaozhinan.htm)样式：显示前3作者；英文作者姓氏大写，名首字母；中文文献后面跟随英文翻译。

使用注意：1. 中文文献需要在 `language` 字段填写 `zh` 或 `zh-CN`。英文文献需要在 `language` 字段填写 `en` 或 `en-US`。
2. 中文文献需要将作者姓名、标题、期刊、出版地、出版社的英文翻译分别填写在 `extra` 中的 `original-author`, `original-title`, `original-container-title`, `original-publisher-place`, `original-publisher` 字段。

示例1：
```
original-author: Yu || Meixiu
original-author: Fu || Ting
original-author: Zhang || Jianyun
original-author: Wang || Guoqing
original-author: Dong || Wuxin
original-title: Field experiment-based investigation on hydrological benefits of typical sponge facilities in the Yangtze Delta region
original-container-title: Advances in Water Science
```
示例2：
```
original-author: Liu || Xiaolong
original-title: Research on Megalopolitan Changes and Corresponding Precipitation Response
original-publisher: Southeast University
original-publisher-place: Nanjing
```

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	FAN X, SOMMERS C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	FOURNEY M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
    <div class="csl-entry">[8]	BAWDEN D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [116management-review.csl]

管理学期刊《管理评论》样式，基于北航学位论文样式进行修改

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M].第2版 北京: 北京大学出版社, 2012</div>
    <div class="csl-entry">[2]	Fan X., Sommers C. H. Food Irradiation Research and Technology[M]. 2 edn. Ames, Iowa: Blackwell Publishing, 2013: 25–26</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[A]. 中国图书馆学会年会论文集[C]. 北京: 2011, 2011 年卷: 45–52</div>
    <div class="csl-entry">[4]	Fourney M. E. Advances in Holographic Photoelasticity[A]. Symposium on Applications of Holography in Mechanics[C]. New York: c1971: 17–38</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8–9</div>
    <div class="csl-entry">[6]	Myburg A. A., Grattapaglia D., Tuskan G. A., et al. The Genome of Eucalyptus Grandis[J]. Nature, 2014, 510: 356–362</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R].2012</div>
    <div class="csl-entry">[8]	Bawden D. Origins and Concepts of Digital Literacy[EB/OL]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>, 2008-05-04</div>
  </div>
</blockquote>


## [117chinese-journal-of-eco-agriculture.csl]

[中国生态农业学报](http://www.ecoagri.ac.cn/news_list.htm?column=xiazaizhongxin)样式。在 [gb-t-7714-2015-numeric-bilingual-no-url-doi.csl](http://www.zotero.org/styles/gb-t-7714-2015-numeric-bilingual-no-url-doi) 基础上修改。

显示效果：

> <sup>[1–11]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	ALTIERI M A, NICHOLLS C I. Biodiversity and pest management in agroecosystems[M]. 2nd ed. New York: Food Products Press, 2004</div>
    <div class="csl-entry">[2]	BIESMEIJER J C, ROBERTS S P M, REEMER M, et al. Parallel declines in pollinators and insect-pollinated plants in Britain and the Netherlands[J]. Science, 2006, 313(5785): 351-354</div>
    <div class="csl-entry">[3]	GARNSEY S M, PERMAR T A, CAMBRA M, et al. Direct tissue blot immunoassay (DTBIA) for detection of citrus tristeza virus (CTV)[C]//MORENO P, DE GRACA J V, YOKOMI R K. Proceedings of the 12th Conference on International Organization of Citrus Virologist. Riverside: Vol. 12. Riverside, USA, 1993: 39-50</div>
    <div class="csl-entry">[4]	MCDONALD A H, NICOL J M. Nematode parasites of cereals[M]//LUC M, SIKORA R A, BRIDGE J. Plant parasitic nematodes in subtropical and tropical agriculture. Wallingford, UK: CABI Publishing, 2005: 131-191</div>
    <div class="csl-entry">[5]	钦俊德. 昆虫与植物的关系[M]. 北京: 科学出版社, 1987: 52-78; QIN J D. The relationships between insects and plants[M]. Beijing: Science Press, 1987: 52-78</div>
    <div class="csl-entry">[6]	孙玉凤, 张永军, 陆宴辉, 等. 基于棉花挥发性物质的盲椿象可持续性防治[C]//吴孔明, 郭予元. 植保科技创新与病虫防控专业化——中国植物保护学会2011年学术年会论文集. 北京: 中国农业科学技术出版社, 2011: 823; SUN Y F, ZHANG Y J, LU Y H, et al. The sustainability control of blind stink bug based on the cotton volatile substances[C]//Plant protection science and technology innovation and specialization of the prevention and control of diseases and pests—Academic annual Conference of Botanical China Society of Plant Protection in 2011. Beijing: China Agricultural Science and Technology Press, 2011: 823</div>
    <div class="csl-entry">[7]	TAUTZ D, ARCTANDER P, MINELLI A, et al. DNA points the way ahead in taxonomy[J]. Nature, 2002, 418(6897): 479</div>
    <div class="csl-entry">[8]	吴孔明, 郭予元. 部分GK系列Bt棉对棉铃虫抗性的田间评价[J]. 植物保护学报, 2000, 27(4): 317-321; WU K M, GUO Y Y. Field resistance evaluations of BT transgenic cotton GK series to cotton bollwoam[J]. Journal of Plant Protection, 2000, 27(4): 317-321</div>
    <div class="csl-entry">[9]	叶恭银, 胡萃, 舒庆尧. 转基因抗虫水稻的转育及其合理持续利用[M]//世界农业发展与研究. 北京: 中国环境科学出版社, 1998: 406-414; YE G Y, HU C, SHU Q Y. The development of transgenic rice resistant to insect pests and its wise and sustainable use[M]//Agricultural Development and Research in the 21st Century. Beijing: China Environmental Science Press, 1998: 406-414</div>
    <div class="csl-entry">[10]	曾士迈, 王沛有, 武修英, 等. 小麦对条锈病的水平抗病性研究初报[J]. 植物保护学报, 1979, 6(1): 1-10; ZENG S M, WANG P Y, WU X Y, et al. Preliminary study on the method of evaluation of horizontal resistance of wheat cultivars to stripe rust[J]. Journal of Plant Protection, 1979, 6(1): 1-10</div>
    <div class="csl-entry">[11]	张徐波. Dpp-Omb信号以区域化的方式调控果蝇翅的生长[D]. 北京: 中国农业大学, 2013; ZHANG X B. Dpp-Omb signaling regulates growth in a region specific manner during Drosophila wing development[D]. Beijing: China Agricultural University, 2013</div>
  </div>
</blockquote>


## [118journal-of-china-agricultural-university.csl]

[中国农业大学学报](http://zgnydxxb.ijournals.cn/zgnydxxb/ch/first_menu.aspx?parent_id=20161229035248001)样式。在 [gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl](http://www.zotero.org/styles/gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi) 基础上修改。

显示效果：

> <sup>[1–33]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	张三. 中国心理学的过去与未来[J]. 心理学报, 2008, 40: 210-215; Zhang S. The past and future of Chinese psychology[J]. <i>Acta Psychologica Sinica</i>, 2008, 40: 210-215 (in Chinese)</div>
    <div class="csl-entry">[2]	张三, 李四. 中国心理学的过去与未来[J]. 心理学报, 2008, 40: 210-215; Zhang S, Li S. The past and future of Chinese psychology[J]. <i>Acta Psychologica Sinica</i>, 2008, 40: 210-215 (in Chinese)</div>
    <div class="csl-entry">[3]	Mou W, McNamara T P. Intrinsic frames of reference in spatial memory[J]. <i>Journal of Experimental Psychology: Learning, Memory, and Cognition</i>, 2002, 28: 162-170</div>
    <div class="csl-entry">[4]	赵一, 钱二, 孙三, 李四, 周五, 吴六, 郑七. 中国心理学的过去与未来[J]. 心理学报, 2008, 40: 210-215; Zhao Y, Qian E, Sun S, Li S, Zhou W, Wu L, Zheng Q. The past and future of Chinese psychology[J]. <i>Acta Psychologica Sinica</i>, 2008, 40: 210-215 (in Chinese)</div>
    <div class="csl-entry">[5]	Mou W, Zhang K, McNamara T P. Frames of reference in spatial memories acquired from language[J]. <i>Journal of Experimental Psychology: Learning, Memory, and Cognition</i>, 2004, 30: 171-180</div>
    <div class="csl-entry">[6]	赵一一, 钱二, 孙三, 李四, 周五, 吴六, 郑七, 王八. 中国心理学的过去与未来[J]. 心理学报, 2008, 40: 210-215; Zhao Y Y, Qian E, Sun S, Li S, Zhou W, Wu L, Zheng Q, Wang B. The past and future of Chinese psychology[J]. <i>Acta Psychologica Sinica</i>, 2008, 40: 210-215 (in Chinese)</div>
    <div class="csl-entry">[7]	Wolchik S A, West S G, Sandler I N, Tein J Y, Coatsworth D, Lengua L, Weiss L, Anderson E R, Greene S M, Griffin W A. An experimental evaluation of theory-based mother and mother-child programs for children of divorce[J]. <i>Journal of Consulting and Clinical Psychology</i>, 2000, 68(5): 843-856</div>
    <div class="csl-entry">[8]	张三, 李四. 中国心理学的过去与未来[J]. 心理学报; Zhang S, Li S. The past and future of Chinese psychology[J]. <i>Acta Psychologica Sinica</i> (in Chinese)</div>
    <div class="csl-entry">[9]	Huestegge S M, Raettig T, Huestegge L. Are face-incongruent voices harder to process? Effects of face–voice gender incongruency on basic cognitive information processing[J]. 2019</div>
    <div class="csl-entry">[10]	Burin D, Kilteni K, Rabuffetti M, Slater M, Pia L. Body ownership increases the interference between observed and executed movements[J]. <i>PLoS ONE</i>, 2019, 14(1)</div>
    <div class="csl-entry">[11]	张三. 中国心理学的过去与未来[J]. 心理学报, 2008, 40(增刊): 210-215; Zhang S. The past and future of Chinese psychology[J]. <i>Acta Psychologica Sinica</i>, 2008, 40(增刊): 210-215 (in Chinese)</div>
    <div class="csl-entry">[12]	张三. 心理学史[M]. 北京: 未名出版社, 2008; Zhang S. <i>History of psychology</i>[M]. Beijing: Unnamed Publisher, 2008 (in Chinese)</div>
    <div class="csl-entry">[13]	张三. 心理学史[M]. 北京: 未名出版社, 2008; Zhang S. <i>History of psychology</i>[M]. Beijing: Unnamed Publisher, 2008 (in Chinese)</div>
    <div class="csl-entry">[14]	Gibbs J T, Huang L N. <i>Children of color: Psychological interventions with minority youth</i>[M]. Hoboken,  NJ,  US: Jossey-Bass, 1989</div>
    <div class="csl-entry">[15]	Laplace P S. <i>A philosophical essay on probabilities</i>[M]. Truscott F W, Emory F L, trans. Dover, 1951</div>
    <div class="csl-entry">[16]	拉普拉斯 P S. 概率哲学[M]. 张三, 李四, 译. 北京: 未名出版社, 1951; Laplace P S. <i>A philosophical essay on probabilities</i>[M]. Dover, 1951 (in Chinese)</div>
    <div class="csl-entry">[17]	Klatzky R. Allocentric and egocentric spatial representations: Definitions, distinctions, and interconnections[M]. In: Freksa C, Habel C, Wender K F, eds. <i>Lecture notes in artificial intelligence: Vol. 1404: Spatial cognition: An interdisciplinary approach to representing and processing spatial knowledge</i>. Springer-Verlag, 1998: 1-17</div>
    <div class="csl-entry">[18]	Wang D F, Cui H. Theoretical analysis of the seven factor model of Chinese personality[M]. In: Wang D F, Hou Y B, eds. <i>Selected papers on personality and social psychology: Vol. 1</i>. Beijing: Peking University Press, 2004: 46-84</div>
    <div class="csl-entry">[19]	王登峰, 崔红. 中国人“大七”人格结构的理论分析[M]//王登峰, 侯玉波. 人格与社会心理学论丛: 卷 1. 北京: 北京大学出版社, 2004: 46-84; Wang D F, Cui H. Theoretical analysis of the “seven factor” model of Chinese personality[M]. In: <i>Selected papers on personality and social psychology: 卷 1</i>. Beijing: Peking University Press, 2004: 46-84 (in Chinese)</div>
    <div class="csl-entry">[20]	Auerbach J S. The origins of narcissism and narcissistic personality disorder: A theoretical and empirical reformulation[M]. In: Bornstein M F, ed. <i>Handbook of child psychology: Vol. 4. Socialization, personality, and social development</i>. 4th ed. Washington,  DC,  US: Wiley, 1993: 43-110</div>
    <div class="csl-entry">[21]	Lichstein K L, Johnson R S. Relaxation therapy for polypharmacy use in elderly insomniacs and noninsomniacs[C]. In: <i>Reducing medication in geriatric populations</i>. Uppsala, Sweden, 1990</div>
    <div class="csl-entry">[22]	Lanktree C B, Briere J N. Early data on the Trauma Symptom Checklist for Children (TSC-C)[C]. In: Paper presented at the meeting of the American Professional Society on the Abuse of Children. San Diego, CA, 1991</div>
    <div class="csl-entry">[23]	Ruby J, Fulton C. Beyond redlining: Editing software that works[C]. In: Poster session presented at the annual meeting of the Society for Scholarly Publishing. Washington, DC, 1993</div>
    <div class="csl-entry">[24]	Australian Bureau of Statistics. Estimated resident population by age and sex in statistical local areas, New South Wales, June 1990: 3209.1[R]. Canberra, Australian Capital Territory: Author, 1991</div>
    <div class="csl-entry">[25]	Mitchell T R, Larson J R. <i>People in organizations: An introduction to organizational behavior</i>[M]. 3rd ed. New York: McGraw-Hill, 1987</div>
    <div class="csl-entry">[26]	Bergmann P G. Relativity[M]. In: <i>The new encyclopedia Britannica: Vol. 26</i>. New York: Encyclopedia Britannica, 1993: 501-508</div>
    <div class="csl-entry">[27]	Sadie S. <i>The new Grove dictionary of music and musicians</i>[M]. 6th ed. London : New York: Macmillan, 1980</div>
    <div class="csl-entry">[28]	李行健. 现代汉语规范辞典[M]. 北京: 外语教学与研究出版社, 2004: 255; Li X J. <i>Contemporary Chinese standard dictionary</i>[M]. Beijing: Foreign Language Teaching and Research Press, 2004: 255 (in Chinese)</div>
    <div class="csl-entry">[29]	现代汉语频率词典[M]. 北京: 北京语言学院出版社, 1986; <i>Modern Chinese frequency dictionary</i>[M]. Beijing: Beijing Language and Culture University Press, 1986 (in Chinese)</div>
    <div class="csl-entry">[30]	Yu L. Phonological representation and processing in Chinese spoken language production[D]. Beijing Normal University, 2000</div>
    <div class="csl-entry">[31]	余林. 汉语语言产生中的语音表征与加工[D]. 北京师范大学, 2000; Yu L. Phonological representation and processing in Chinese spoken language production[D]. Beijing Normal University, 2000 (in Chinese)</div>
    <div class="csl-entry">[32]	邱颖文. 遗传与语言学习[D]. 上海: 华东师范大学, 2009; Qiu Y W. Genetics and language learning[D]. Shanghai: East China Normal University, 2009 (in Chinese)</div>
    <div class="csl-entry">[33]	张三, 李四. 中国心理学与奥林匹克[N]. 新华日报, 2008-08-08(2, 5-7); Zhang S, Li S. Chinese psychology and the Olympics[N]. <i>Xinhua Daily</i>, 2008-08-08(2, 5-7) (in Chinese)</div>
  </div>
</blockquote>


## [119studies-in-science-of-science.csl]

[科学学研究](https://journal08.magtechjournal.com/kxxyj/CN/column/column22.shtml)样式。在 [002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl] 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
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
</blockquote>


## [120journal-of-modern-power-systems-and-clean-energy.csl]

[Journal of Modern Power Systems and Clean Energy](http://www.mpce.info/uploadfile/mpce/20240408/MPCE%20Word%20Template.docx)样式。在 [ieee.csl](http://www.zotero.org/styles/ieee) 基础上修改。

显示效果：

> [1], [2], [3], [4], [5], [6], [7], [8]

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩, <i>科学革命的结构: 第 4 版</i>, 2nd ed. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	X. Fan and C. H. Sommers, <i>Food irradiation research and technology</i>, 2nd ed. Ames, Iowa: Blackwell Publishing, 2013, pp. 25–26. Accessed: Jun. 26, 2014. [Online]. Available: <a href="http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary">http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary</a></div>
    <div class="csl-entry">[3]	贾东琴 and 柯平, “面向数字素养的高校图书馆数字服务体系研究,” in 中国图书馆学会年会论文集, 中国图书馆学会, Ed., 北京: 国家图书馆出版社, 2011, pp. 45–52.</div>
    <div class="csl-entry">[4]	M. E. Fourney, “Advances in holographic photoelasticity,” in <i>Symposium on Applications of Holography in Mechanics</i>, New York: ASME, c1971, pp. 17–38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, and 刘英敏, “‘北斗一号’监控管理网设计与实现,” 测绘科学, vol. 33, no. 5, pp. 8–9, 2008, doi: <a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">10.3771/j.issn.1009-2307.2008.05.002</a>.</div>
    <div class="csl-entry">[6]	A. A. Myburg <i>et al.</i>, “The genome of eucalyptus grandis,” <i>Nature</i>, vol. 510, pp. 356–362, Jun. 2014, doi: <a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心, “第 29 次中国互联网络发展现状统计报告,” Jan. 2012. Accessed: Mar. 26, 2013. [Online]. Available: <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a></div>
    <div class="csl-entry">[8]	D. Bawden, “Origins and concepts of digital literacy.” Accessed: Mar. 08, 2013. [Online]. Available: <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a></div>
  </div>
</blockquote>


## [121acta-ecologica-sinica.csl]

[生态学报](https://www.ecologica.cn/stxb/ch/first_menu.aspx?parent_id=20080722101552001)样式。在 [002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl] 基础上修改。

注意，期刊要求“正文内参考文献按顺序号标注在文字右上角时，一旦是连续文献号请一定确认使用一字线符号‘—’。”CSL 无法实现，会固定使用 en dash “–”，只能搜索替换。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 刘英敏. “北斗一号”监控管理网设计与实现. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, Hellsten U, Hayes R D, Grimwood J, Jenkins J, Lindquist E, Tice H, Bauer D, Goodstein D M, Dubchak I, Poliakov A, Mizrachi E, Kullan A R K, Hussey S G, Pinard D, van der Merwe K, Singh P, van Jaarsveld I, Silva-Junior O B, Togawa R C, Pappas M R, Faria D A, Sansaloni C P, Petroli C D, Yang X, Ranjan P, Tschaplinski T J, Ye C Y, Li T, Sterck L, Vanneste K, Murat F, Soler M, Clemente H S, Saidi N, Cassan-Wang H, Dunand C, Hefer C A, Bornberg-Bauer E, Kersting A R, Vining K, Amarasinghe V, Ranik M, Naithani S, Elser J, Boyd A E, Liston A, Spatafora J W, Dharmwardhana P, Raja R, Sullivan C, Romanel E, Alves-Ferreira M, Külheim C, Foley W, Carocha V, Paiva J, Kudrna D, Brommonschenkel S H, Pasquali G, Byrne M, Rigault P, Tibbits J, Spokevicius A, Jones R C, Steane D A, Vaillancourt R E, Potts B M, Joubert F, Barry K, Pappas G J, Strauss S H, Jaiswal P, Grima-Pettenati J, Salse J, Van de Peer Y, Rokhsar D S, Schmutz J. The genome of eucalyptus grandis. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告. 2012.</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [122journal-of-iron-and-steel-research.csl]

[钢铁研究学报](http://www.chinamet.cn/Jweb_gtyjxb_cn/CN/column/column7.shtml)样式。在 [gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl](http://www.zotero.org/styles/gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi) 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
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
</blockquote>


## [123hydro-science-and-engineering.csl]

[水利水运工程学报](http://slsy.nhri.cn/tougaozhinan)样式。在 [gb-t-7714-2005-numeric-bilingual.csl](http://www.zotero.org/styles/gb-t-7714-2005-numeric-bilingual) 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	FAN X, SOMMERS C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	FOURNEY M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
    <div class="csl-entry">[8]	BAWDEN D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08][2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [124transactions-of-nonferrous-metals-society-of-china.csl]

[Transactions of Nonferrous Metals Society of China (中国有色金属学报（英文版）)](https://www.sciencedirect.com/journal/transactions-of-nonferrous-metals-society-of-china/publish/guide-for-authors)样式。在 [003gb-t-7714-2015-numeric-bilingual-no-url-doi.csl] 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版 [M]. 金吾伦, 胡新和, trans. 2nd ed. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	FAN X, SOMMERS C H. Food irradiation research and technology [M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究 [C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	FOURNEY M E. Advances in holographic photoelasticity [C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, et al. “北斗一号”监控管理网设计与实现 [J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. The genome of eucalyptus grandis [J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告 [R]. 2012.</div>
    <div class="csl-entry">[8]	BAWDEN D. Origins and concepts of digital literacy [EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [201comparative-economic-and-social-systems.csl]

[《经济社会体制比较》](http://jjsh.cbpt.cnki.net/EditorGN/index.aspx?t=1)样式，[010gb-t-7714-2015-author-date-bilingual-no-uppercase.csl] 基础上修改，文末中文文献在前，英文在后。作者为首字母大写，支持中文作者超过 3 个为“`等`”，英文为“`et al`”。

存在问题：英文期刊题目要求为所有实词单词首字母大写，但由于采用了两个 `layout`，在 `csl` 中设置为`text-case="capitalize-first"`时
所有单词都会大写，设置为`text-case="title"`时仅第一个单词和最后一个单词大写，因此现在没有设置，大小写与 `Zotero` 中 `Title` 字段相同。

显示效果：

<blockquote>
  （库恩, 2012）<br>
  （Fourney, c1971）<br>
  （贾东琴和柯平, 2011）<br>
  （Fan &#38; Sommers, 2013）<br>
  （武丽丽等, 2008）<br>
  （Myburg et al., 2014）<br>
  （中国互联网络信息中心, 2012; Bawden, 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">Bawden D., 2008. “Origins and concepts of digital literacy.”(2008-05-04)[2013-03-08].</div>
    <div class="csl-entry">Fan X. &#38; Sommers C.H., 2013. “Food irradiation research and technology.”. 2 edition. Ames, Iowa: Blackwell Publishing: 25–26[2014-06-26].</div>
    <div class="csl-entry">Fourney M.E., c1971. “Advances in holographic photoelasticity.”//<i>Symposium on Applications of Holography in Mechanics</i>  New York: ASME: 17–38.</div>
    <div class="csl-entry">Myburg A.A., Grattapaglia D., Tuskan G.A., et al., 2014. “The genome of eucalyptus grandis.” <i>Nature</i>. 510: 356–362[2014-06-25].</div>
    <div class="csl-entry">贾东琴、柯平, 2011：“面向数字素养的高校图书馆数字服务体系研究”. 中国图书馆学会, 编//《中国图书馆学会年会论文集》北京: 国家图书馆出版社: 45–52。</div>
    <div class="csl-entry">库恩, 2012：“科学革命的结构: 第 4 版”. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社。</div>
    <div class="csl-entry">武丽丽、华一新、张亚军等, 2008：“‘北斗一号’监控管理网设计与实现”，《测绘科学》，2008, 5: 8–9[2009-10-25]。</div>
    <div class="csl-entry">中国互联网络信息中心, 2012：“第 29 次中国互联网络发展现状统计报告”. [2013-03-26]。</div>
  </div>
</blockquote>


## [202journal-of-management-world.csl]

《[管理世界](http://www.mwm.net.cn/web/)》样式。

文献语言默为英文，中文文献需要设置 `language` 字段为 `zh` 或 `zh-CN`。

显示效果：

<blockquote>
  （戴治勇，2014）<br>
  （林乐、谢德仁，2017）<br>
  （王化成等，2015）<br>
  （戴治勇，2014；林乐、谢德仁，2017；王化成等，2015）<br>
  （高琳，2016）<br>
  （佐藤宏，2004）<br>
  （黄超，2017）<br>
  （Weiss，2010）<br>
  （Kang and Kim，2008）<br>
  （Banker et al.，2013）<br>
  （Weiss，2010；Kang and Kim，2008；Banker et al.，2013）<br>
  （Krugman，2006）<br>
  （Fama，1989）<br>
  （Skolnik，2008）<br>
  （李实、佐藤宏，2004）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
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

<blockquote>
  （库恩，2012）<br>
  （Fourney, c1971）<br>
  （贾东琴和柯平，2011）<br>
  （Fan &#38; Sommers, 2013）<br>
  （武丽丽等，2008）<br>
  （Myburg et al., 2014）<br>
  （中国互联网络信息中心，2012；Bawden, 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">贾东琴、柯平，2011：《面向数字素养的高校图书馆数字服务体系研究》. 中国图书馆学会, 编//《中国图书馆学会年会论文集》北京: 国家图书馆出版社，2011年。</div>
    <div class="csl-entry">库恩，2012：《科学革命的结构: 第 4 版》. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社，2012年。</div>
    <div class="csl-entry">武丽丽、华一新、张亚军、刘英敏，2008：《“北斗一号”监控管理网设计与实现》，《测绘科学》第5期。</div>
    <div class="csl-entry">中国互联网络信息中心，2012：《第 29 次中国互联网络发展现状统计报告》. 。</div>
    <div class="csl-entry">Bawden, D., 2008, “Origins and Concepts of Digital Literacy”(2008-05-04).</div>
    <div class="csl-entry">Fan, X., and C. H. Sommers, 2013, “Food Irradiation Research and Technology”. 2 edition. Ames, Iowa: Blackwell Publishing: 25—26.</div>
    <div class="csl-entry">Fourney, M. E., c1971, “Advances in Holographic Photoelasticity”//, <i>Symposium on Applications of Holography in Mechanics</i>New York: ASME: 17—38.</div>
    <div class="csl-entry">Myburg, A. A., D. Grattapaglia, G. A. Tuskan, U. Hellsten, R. D. Hayes, J. Grimwood, J. Jenkins, E. Lindquist, H. Tice, D. Bauer, D. M. Goodstein, I. Dubchak, A. Poliakov, E. Mizrachi, A. R. K. Kullan, S. G. Hussey, D. Pinard, K. van der Merwe, P. Singh, I. van Jaarsveld, O. B. Silva-Junior, R. C. Togawa, M. R. Pappas, D. A. Faria, C. P. Sansaloni, C. D. Petroli, X. Yang, P. Ranjan, T. J. Tschaplinski, C.-Y. Ye, T. Li, L. Sterck, K. Vanneste, F. Murat, M. Soler, H. S. Clemente, N. Saidi, H. Cassan-Wang, C. Dunand, C. A. Hefer, E. Bornberg-Bauer, A. R. Kersting, K. Vining, V. Amarasinghe, M. Ranik, S. Naithani, J. Elser, A. E. Boyd, A. Liston, J. W. Spatafora, P. Dharmwardhana, R. Raja, C. Sullivan, E. Romanel, M. Alves-Ferreira, C. Külheim, W. Foley, V. Carocha, J. Paiva, D. Kudrna, S. H. Brommonschenkel, G. Pasquali, M. Byrne, P. Rigault, J. Tibbits, A. Spokevicius, R. C. Jones, D. A. Steane, R. E. Vaillancourt, B. M. Potts, F. Joubert, K. Barry, G. J. Pappas, S. H. Strauss, P. Jaiswal, J. Grima-Pettenati, J. Salse, Y. Van de Peer, D. S. Rokhsar, and J. Schmutz, 2014, “The Genome of Eucalyptus Grandis”, <i>Nature</i>, 510, 356—362.</div>
  </div>
</blockquote>


## [204financial-research-journal.csl]

[《金融研究》](http://www.jryj.org.cn/CN/column/column3.shtml)样式，[《经济研究》](203economic-research-journal.csl)基础上修改，文内为（作者，年代），参考文献列表中文在前，英文在后，作者前加编号。

显示效果：

<blockquote>
  （库恩，2012）<br>
  （Fourney，c1971）<br>
  （贾东琴和柯平，2011）<br>
  （Fan and Sommers，2013）<br>
  （武丽丽等，2008）<br>
  （Myburg et al.，2014）<br>
  （中国互联网络信息中心，2012；Bawden，2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	贾东琴和柯平，2011，《面向数字素养的高校图书馆数字服务体系研究》. 中国图书馆学会, 编//《中国图书馆学会年会论文集》北京: 国家图书馆出版社，2011年。</div>
    <div class="csl-entry">[2]	库恩，2012，《科学革命的结构: 第 4 版》. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社，2012年。</div>
    <div class="csl-entry">[3]	武丽丽、华一新、张亚军和刘英敏，2008，《“北斗一号”监控管理网设计与实现》，《测绘科学》第5期，第8~9页。</div>
    <div class="csl-entry">[4]	中国互联网络信息中心，2012，《第 29 次中国互联网络发展现状统计报告》. 。</div>
    <div class="csl-entry">[5]	Bawden, D. 2008. “Origins and Concepts of Digital Literacy”(2008-05-04).</div>
    <div class="csl-entry">[6]	Fan, X. and C.H. Sommers. 2013. “Food Irradiation Research and Technology”. 2 edition. Ames, Iowa: Blackwell Publishing: 25~26.</div>
    <div class="csl-entry">[7]	Fourney, M.E. c1971. “Advances in Holographic Photoelasticity”//, <i>Symposium on Applications of Holography in Mechanics</i>New York: ASME: 17~38.</div>
    <div class="csl-entry">[8]	Myburg, A.A., D. Grattapaglia, G.A. Tuskan, U. Hellsten, R.D. Hayes, J. Grimwood, J. Jenkins, E. Lindquist, H. Tice, D. Bauer, D.M. Goodstein, I. Dubchak, A. Poliakov, E. Mizrachi, A.R.K. Kullan, S.G. Hussey, D. Pinard, K. van der Merwe, P. Singh, I. van Jaarsveld, O.B. Silva-Junior, R.C. Togawa, M.R. Pappas, D.A. Faria, C.P. Sansaloni, C.D. Petroli, X. Yang, P. Ranjan, T.J. Tschaplinski, C.-Y. Ye, T. Li, L. Sterck, K. Vanneste, F. Murat, M. Soler, H.S. Clemente, N. Saidi, H. Cassan-Wang, C. Dunand, C.A. Hefer, E. Bornberg-Bauer, A.R. Kersting, K. Vining, V. Amarasinghe, M. Ranik, S. Naithani, J. Elser, A.E. Boyd, A. Liston, J.W. Spatafora, P. Dharmwardhana, R. Raja, C. Sullivan, E. Romanel, M. Alves-Ferreira, C. Külheim, W. Foley, V. Carocha, J. Paiva, D. Kudrna, S.H. Brommonschenkel, G. Pasquali, M. Byrne, P. Rigault, J. Tibbits, A. Spokevicius, R.C. Jones, D.A. Steane, R.E. Vaillancourt, B.M. Potts, F. Joubert, K. Barry, G.J. Pappas, S.H. Strauss, P. Jaiswal, J. Grima-Pettenati, J. Salse, Y. Van de Peer, D.S. Rokhsar, and J. Schmutz. 2014. “The Genome of Eucalyptus Grandis,” <i>Nature</i>, 510: pp.356~362.</div>
  </div>
</blockquote>


## [205business-management-journal.csl]

[《经济管理》](http://www.jjgl.cass.cn/CommonBlock/GetSiteDescribeDetail/1207?channelID=1207)样式。正文中包含（作者，年代）<sup>[数字]</sup>两种样式，文末支持中文作者超过 `3` 个为“`等`”，英文为“`et al`”。文章的题目大小写与 `Zotero` 中的 `Title` 字段一致。期刊名称前需要添加出版社城市名，可以将此城市名放在 `Loc. in Archive` 字段。

存在问题：正文中要求英文两个作者之间要求用“`和`”，现在显示为“`&`”，可以后期在 Word 中批量替换。

感谢 [@zepinglee](https://github.com/zepinglee) 的指导和代码，感谢 [@fredericky123](https://github.com/fredericky123) 测试。

显示效果：

<blockquote>
  (库恩, 2012)<sup>[1]</sup><br>
  (Fourney, c1971)<sup>[2]</sup><br>
  (贾东琴和柯平, 2011)<sup>[3]</sup><br>
  (Fan &#38; Sommers, 2013)<sup>[4]</sup><br>
  (武丽丽等, 2008)<sup>[5]</sup><br>
  (Myburg等, 2014)<sup>[6]</sup><br>
  (中国互联网络信息中心, 2012)<sup>[7]</sup>(Bawden, 2008)<sup>[8]</sup><br>
</blockquote>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1] 库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.	</div>
    <div class="csl-entry">[2] Fourney M. E. Advances in Holographic Photoelasticity[C]//Symposium on Applications of Holography in Mechanics. c1971: 17–38New York: ASME, c1971: 17–38.	</div>
    <div class="csl-entry">[3] 贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会, 编//中国图书馆学会年会论文集. 2011, 2011 年卷: 45–52北京: 国家图书馆出版社, 2011: 45–52.	</div>
    <div class="csl-entry">[4] Fan X. and C. H. Sommers. Food Irradiation Research and Technology[M]. 2 edition. Ames, Iowa: Blackwell Publishing, 2013: 25–26[2014-06-26].	</div>
    <div class="csl-entry">[5] 武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8–9[2009-10-25].	</div>
    <div class="csl-entry">[6] Myburg A. A., D. Grattapaglia, G. A. Tuskan, et al. The Genome of Eucalyptus Grandis[J]. Nature, 2014, 510: 356–362[2014-06-25].	</div>
    <div class="csl-entry">[7] 中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. [2013-03-26].	</div>
    <div class="csl-entry">[8] Bawden D. Origins and Concepts of Digital Literacy[EB](2008-05-04)[2013-03-08].	</div>
  </div>
</blockquote>


## [206accounting-research.csl]

[010gb-t-7714-2015-author-date-bilingual-no-uppercase.csl] 版本上修改，应用于[《会计研究》](http://www.asc.net.cn/AccountingResearch/MagazineProfile.aspx?type=tgzn)的样式。~~存在问题：页码为不连续多页，如 `121-129+184`，页码间隔仍为 `-`，不是`～`。~~
对于不连续的多页，需要写为 `128-140, 188` 或 `128-140 & 188`，才可以显示为`～`，不能写为 `128-140+188`，感谢 [@zepinglee](https://github.com/zepinglee) 的指导。

显示效果：

<blockquote>
  (库恩, 2012)<br>
  (Fourney, c1971)<br>
  (贾东琴和柯平, 2011)<br>
  (Fan &#38; Sommers, 2013)<br>
  (武丽丽等, 2008)<br>
  (Myburg et al., 2014)<br>
  (中国互联网络信息中心, 2012; Bawden, 2008)<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">贾东琴, 柯平. 2011. 面向数字素养的高校图书馆数字服务体系研究. 中国图书馆学会, 编//中国图书馆学会年会论文集. 北京: 国家图书馆出版社: 45～52.</div>
    <div class="csl-entry">库恩. 2012. 科学革命的结构: 第 4 版. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社.</div>
    <div class="csl-entry">武丽丽, 华一新, 张亚军, 刘英敏. 2008. “北斗一号”监控管理网设计与实现. 测绘科学, 5: 8～9[2009–10–25].</div>
    <div class="csl-entry">中国互联网络信息中心. 2012. 第 29 次中国互联网络发展现状统计报告. [2013–03–26].</div>
    <div class="csl-entry">Bawden, D. 2008. Origins and Concepts of Digital Literacy(2008–05–04)[2013–03–08].</div>
    <div class="csl-entry">Fan, X., C. H. Sommers. 2013. Food Irradiation Research and Technology. 2 edition. Ames, Iowa: Blackwell Publishing: 25～26[2014–06–26].</div>
    <div class="csl-entry">Fourney, M. E. c1971. Advances in Holographic Photoelasticity//Symposium on Applications of Holography in Mechanics. New York: ASME: 17～38.</div>
    <div class="csl-entry">Myburg, A. A., D. Grattapaglia, G. A. Tuskan, U. Hellsten, R. D. Hayes, J. Grimwood, J. Jenkins, E. Lindquist, H. Tice, D. Bauer, D. M. Goodstein, I. Dubchak, A. Poliakov, E. Mizrachi, A. R. K. Kullan, S. G. Hussey, D. Pinard, K. van der Merwe, P. Singh, I. van Jaarsveld, O. B. Silva-Junior, R. C. Togawa, M. R. Pappas, D. A. Faria, C. P. Sansaloni, C. D. Petroli, X. Yang, P. Ranjan, T. J. Tschaplinski, C.-Y. Ye, T. Li, L. Sterck, K. Vanneste, F. Murat, M. Soler, H. S. Clemente, N. Saidi, H. Cassan-Wang, C. Dunand, C. A. Hefer, E. Bornberg-Bauer, A. R. Kersting, K. Vining, V. Amarasinghe, M. Ranik, S. Naithani, J. Elser, A. E. Boyd, A. Liston, J. W. Spatafora, P. Dharmwardhana, R. Raja, C. Sullivan, E. Romanel, M. Alves-Ferreira, C. Külheim, W. Foley, V. Carocha, J. Paiva, D. Kudrna, S. H. Brommonschenkel, G. Pasquali, M. Byrne, P. Rigault, J. Tibbits, A. Spokevicius, R. C. Jones, D. A. Steane, R. E. Vaillancourt, B. M. Potts, F. Joubert, K. Barry, G. J. Pappas, S. H. Strauss, P. Jaiswal, J. Grima-Pettenati, J. Salse, Y. Van de Peer, D. S. Rokhsar, J. Schmutz. 2014. The Genome of Eucalyptus Grandis. Nature, 510: 356～362[2014–06–25].</div>
  </div>
</blockquote>


## [208chinas-industrial-economics.csl]

《[中国工业经济](http://ciejournal.ajcass.org/Home/Index)》样式，[011gb-t-7714-2015-author-date-bilingual-no-uppercase-no-url-doi-full-width-parentheses.csl] 基础上修改。

1. 正文中 如果出现文献作者名，有 2 个作者，用“(甲和乙, 年份)”（英文名用“(A and B, 年份)”）连接。
2. 有 3 个或者更多作者，用“(甲等, 年份)”（英文名为“(A et al., 年份)”）表示。
3. 文后参考文献表中著录全部姓名。
4. 英文文献的第一作者姓在前（后加“, ”）、名在后（全部用缩写，即首字母加“.”），其余作者则名在前、姓在后。
5. 英文文献的最后一个作者前加“, and”。

显示效果：

<blockquote>
  （陈佳贵，1995）<br>
  （Engers and Gans，1998）<br>
  （蒋一苇，1998）<br>
  （[英]瑟尔沃，2001）<br>
  （Fukuyama，1999）<br>
  （Caselli，2005）<br>
  （Broda et al.，2006）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	陈佳贵. 关于企业生命周期与企业蜕变的探讨[J]. 中国工业经济, 1995(11):5-13.</div>
    <div class="csl-entry">[2]	蒋一苇. 论社会主义的企业模式[M]. 广州: 广东经济出版社, 1998.</div>
    <div class="csl-entry">[3]	[英]瑟尔沃. 增长与发展[M]. 郭熙保译. 北京: 中国财政经济出版社, 2001.</div>
    <div class="csl-entry">[4]	Broda, C., G. Joshua, and W. David. From Groundnuts to Globalization: A Structural Estimate of Trade and Growth[R]. NBER Working Paper, 2006.</div>
    <div class="csl-entry">[5]	Caselli, F. Accounting for Cross-Country Income Differences[A]. Aghion, P., and S. N. Durlauf. Handbook of Economic Growth[C]. Amsterdam: Elsevier, 2005: 679-741.</div>
    <div class="csl-entry">[6]	Engers, M., and J. S. Gans. Why Referees Are Not Paid (Enough)[J]. American Economic Review, 1998, 88(5):1341-1349.</div>
    <div class="csl-entry">[7]	Fukuyama, F. Trust: The Social Virtues and the Creation of Prosperity[M]. New York: Free Press, 1999.</div>
  </div>
</blockquote>


## [209sociological-studies.csl]

《[社会学研究](http://shxyj.ajcass.org/)》样式。

显示效果：

<blockquote>
  （齐美尔，2001）<br>
  （Uslaner，2002）<br>
  （吉登斯，2000）<br>
  （杨国荣，2018）<br>
  （朱力、袁迎春，2014）<br>
  （Winship &#38; Mare，1984）<br>
  （刘江、顾东辉，2022）<br>
  （Drane，1994）<br>
  （王欧，2022）<br>
  （清华大学社会学系课题组，2013）<br>
  （项飙，2018）<br>
  （李启波，2014）<br>
  （张文琪、朱志勇，2022）<br>
  （中国青年报，2016）<br>
  （中华人民共和国教育部，1981）<br>
  （冯钢，2018）<br>
  （马克思，1972a）<br>
  （马克思，1972b）<br>
  （王嘉毅，2017）<br>
  （Ozawa &#38; Sripad，2013）<br>
  （张，2001）<br>
  （张小莲等，2020）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">冯钢，2018，《马克思的“过渡”理论与“卡夫丁峡谷”之谜》，《社会学研究》第2期。</div>
    <div class="csl-entry">吉登斯，2000，《现代性的后果》，北京：译林出版社。</div>
    <div class="csl-entry">李启波，2014，《大学仪式研究》，南京师范大学博士学位论文。</div>
    <div class="csl-entry">刘江、顾东辉，2022，《“约束—内化”vs.反思性实践认知——社会工作伦理守则与留职意愿关系研究》，《社会学研究》第2期。</div>
    <div class="csl-entry">马克思，1972a，《马克思恩格斯全集》第1卷，中共中央马恩列斯著作编译局译，北京：人民出版社。</div>
    <div class="csl-entry">———，1972b，《马克思恩格斯全集》第23卷，中共中央马恩列斯著作编译局译，北京：人民出版社。</div>
    <div class="csl-entry">齐美尔，2001，《时尚的哲学》，费勇译，北京：文化艺术出版社。</div>
    <div class="csl-entry">清华大学社会学系课题组，2013，《行动与困境———新生代农民工与“农民工生产体制”的碰撞》，沈原主编《清华社会学评论》第6卷，北京：社会科学文献出版社。</div>
    <div class="csl-entry">王嘉毅，2017，《吹响建设教育强国的冲锋号———深入学习XXX总书记教育思想( 二)》，《中国教育报》。</div>
    <div class="csl-entry">王欧，2022，《家庭化与新生代农民工生活方式转型》，《社会学研究》第1期。</div>
    <div class="csl-entry">项飙，2018，《跨越边界的社区：北京“浙江村”的生活史》修订版，生活·读书·新知三联书店。</div>
    <div class="csl-entry">杨国荣，2018，《信任及其伦理意义》，《中国社会科学》第3期。</div>
    <div class="csl-entry">张静 2001, 国家政权建设与乡村自治单位——问题与回顾.</div>
    <div class="csl-entry">张文琪、朱志勇，2022，《责任制考试、通过仪式抑或学术仪式?——博士学位论文答辩制度的意义建构》，《社会学研究》第1期。</div>
    <div class="csl-entry">张小莲、任雾、蓝泽齐，2020，《“封城”二十日里的武汉百步亭：一线社区工作者口述_澎湃人物_澎湃新闻-The Paper》，《澎湃新闻》。</div>
    <div class="csl-entry">中国青年报，2016，《博士论文答辩不能成为一场游戏》（<a href="http://zqb.cyol.com/html/2016-06/17/nw.D110000zgqnb_20160617_4-07.htm">http://zqb.cyol.com/html/2016-06/17/nw.D110000zgqnb_20160617_4-07.htm</a>）。</div>
    <div class="csl-entry">中华人民共和国教育部，1981，《中华人民共和国学位条例暂行实施办法》（<a href="http://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyxzfg/202204/t20220422_620528.html">http://www.moe.gov.cn/jyb_sjzl/sjzl_zcfg/zcfg_jyxzfg/202204/t20220422_620528.html</a>）。</div>
    <div class="csl-entry">朱力、袁迎春，2014，《现阶段我国医患矛盾的类型、特征与对策》，《社会科学研究》第6期。</div>
    <div class="csl-entry">Drane, James F. 1994, “Character and Moral Life: A Virtue Approach to Biomedical Ethics.” In Edwin R. DuBose, Ronald P. Hamel &#38; Laurence J. O’Connell (eds.), <i>A Matter of Principles?: Ferment in U.S. Bioethics</i>. Valley Forge: Trinity Press International.</div>
    <div class="csl-entry">Ozawa, Sachiko &#38; Pooja Sripad 2013, “How Do You Measure Trust in the Health System? A Systematic Review of the Literature.” <i>Social Science &#38; Medicine</i> 91.</div>
    <div class="csl-entry">Uslaner, Eric M. 2002, <i>The Moral Fundations of Trust</i>. Cambridge: Cambridge University Press.</div>
    <div class="csl-entry">Winship, Christopher &#38; Robert D. Mare 1984, “Regression Models with Ordinal Variables.” <i>American Sociological Review</i> 49(4).</div>
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
  <div class="csl-bib-body hanging-indent">
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
  （Garnsey et al.，1993）<br>
  （McDonald &#38; Nicol，2005）<br>
  （钦俊德，1987）<br>
  （孙玉凤等，2011）<br>
  （Tautz et al.，2002）<br>
  （吴孔明和郭予元，2000）<br>
  （叶恭银等，1998）<br>
  （曾士迈等，1979）<br>
  （张徐波，2013）<br>
  （曾士迈等，1979；吴孔明和郭予元，2000）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
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

显示效果：

<blockquote>
  （库恩，2012）<br>
  （Fourney M E，c1971）<br>
  （贾东琴 et al.，2011）<br>
  （Fan X et al.，2013）<br>
  （武丽丽 et al.，2008）<br>
  （Myburg A A et al.，2014）<br>
  （中国互联网络信息中心，2012；Bawden D，2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">[1]	贾东琴, 柯平. 2011. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会, ed.//中国图书馆学会年会论文集北京: 国家图书馆出版社，2011年

      <div class="csl-block">贾东琴, 柯平. 2011. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会, ed.//中国图书馆学会年会论文集北京: 国家图书馆出版社，2011年 (In Chinese)</div>
  </div>
    <div class="csl-entry">[2]	库恩. 2012. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, trans.. 2 edition. 北京: 北京大学出版社，2012年

      <div class="csl-block">库恩. 2012. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, trans.. 2 edition. 北京: 北京大学出版社，2012年 (In Chinese)</div>
  </div>
    <div class="csl-entry">[3]	武丽丽, 华一新, 张亚军, 刘英敏. 2008. “北斗一号”监控管理网设计与实现[J]，测绘科学, 33(5): 8-9.

      <div class="csl-block">武丽丽, 华一新, 张亚军, 刘英敏. 2008. “北斗一号”监控管理网设计与实现[J]，测绘科学, 33(5): 8-9. (In Chinese)</div>
  </div>
    <div class="csl-entry">[4]	中国互联网络信息中心. 2012. 第 29 次中国互联网络发展现状统计报告[R]. (2012-01-16) [2013-03-26].

      <div class="csl-block">中国互联网络信息中心. 2012. 第 29 次中国互联网络发展现状统计报告[R]. (2012-01-16) [2013-03-26]. (In Chinese)</div>
  </div>
    <div class="csl-entry">[5]	BAWDEN D. 2008. Origins and concepts of digital literacy[EB/OL](2008-05-04)

      <div class="csl-block">BAWDEN D. 2008. Origins and concepts of digital literacy[EB/OL](2008-05-04) (In Chinese)</div>
  </div>
    <div class="csl-entry">[6]	FAN X, SOMMERS C H. 2013. Food irradiation research and technology[M]. 2 edition. Ames, Iowa: Blackwell Publishing，2013年

      <div class="csl-block">FAN X, SOMMERS C H. 2013. Food irradiation research and technology[M]. 2 edition. Ames, Iowa: Blackwell Publishing，2013年 (In Chinese)</div>
  </div>
    <div class="csl-entry">[7]	FOURNEY M E. c1971. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in MechanicsNew York: ASME，c1971年

      <div class="csl-block">FOURNEY M E. c1971. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in MechanicsNew York: ASME，c1971年 (In Chinese)</div>
  </div>
    <div class="csl-entry">[8]	MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, HELLSTEN U, HAYES R D, SCHMUTZ J, et al. 2014. The genome of eucalyptus grandis[J]，Nature, 510: 356-362.

      <div class="csl-block">MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, HELLSTEN U, HAYES R D, SCHMUTZ J, et al. 2014. The genome of eucalyptus grandis[J]，Nature, 510: 356-362. (In Chinese)</div>
  </div>
  </div>
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
  <div class="csl-bib-body hanging-indent">
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

<blockquote>
  （库恩，2012）<br>
  （Fourney，c1971）<br>
  （贾东琴和柯平，2011）<br>
  （Fan and Sommers，2013）<br>
  （武丽丽等，2008）<br>
  （Myburg <i>et al.</i>，2014）<br>
  （Bawden，2008；中国互联网络信息中心，2012）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">贾东琴、柯平（2011）：《面向数字素养的高校图书馆数字服务体系研究》，载中国图书馆学会主编：《中国图书馆学会年会论文集》，国家图书馆出版社，2011年。</div>
    <div class="csl-entry">库恩（2012）：《科学革命的结构: 第 4 版》，北京大学出版社，2012年。</div>
    <div class="csl-entry">武丽丽、华一新、张亚军、刘英敏（2008）：《“北斗一号”监控管理网设计与实现》，《测绘科学》第5期。</div>
    <div class="csl-entry">中国互联网络信息中心（2012）：《第 29 次中国互联网络发展现状统计报告》，2012年。</div>
    <div class="csl-entry">Bawden, D. <i>Origins and Concepts of Digital Literacy</i>.</div>
    <div class="csl-entry">Fan, X. and Sommers, C. H. <i>Food Irradiation Research and Technology</i> Ames, Iowa: Blackwell Publishing.</div>
    <div class="csl-entry">Fourney, M. E. “Advances in Holographic Photoelasticity.” in <i>Symposium on Applications of Holography in Mechanics</i> New York: ASME.</div>
    <div class="csl-entry">Myburg, A. A.; Grattapaglia, D.; Tuskan, G. A.; Hellsten, U.; Hayes, R. D.; Grimwood, J.; Jenkins, J.; Lindquist, E.; Tice, H.; Bauer, D.; Goodstein, D. M.; Dubchak, I.; Poliakov, A.; Mizrachi, E.; Kullan, A. R. K.; Hussey, S. G.; Pinard, D.; Merwe, K. van der; Singh, P.; Jaarsveld, I. van; Silva-Junior, O. B.; Togawa, R. C.; Pappas, M. R.; Faria, D. A.; Sansaloni, C. P.; Petroli, C. D.; Yang, X.; Ranjan, P.; Tschaplinski, T. J.; Ye, C. Y.; Li, T.; Sterck, L.; Vanneste, K.; Murat, F.; Soler, M.; Clemente, H. S.; Saidi, N.; Cassan-Wang, H.; Dunand, C.; Hefer, C. A.; Bornberg-Bauer, E.; Kersting, A. R.; Vining, K.; Amarasinghe, V.; Ranik, M.; Naithani, S.; Elser, J.; Boyd, A. E.; Liston, A.; Spatafora, J. W.; Dharmwardhana, P.; Raja, R.; Sullivan, C.; Romanel, E.; Alves-Ferreira, M.; Külheim, C.; Foley, W.; Carocha, V.; Paiva, J.; Kudrna, D.; Brommonschenkel, S. H.; Pasquali, G.; Byrne, M.; Rigault, P.; Tibbits, J.; Spokevicius, A.; Jones, R. C.; Steane, D. A.; Vaillancourt, R. E.; Potts, B. M.; Joubert, F.; Barry, K.; Pappas, G. J.; Strauss, S. H.; Jaiswal, P.; Grima-Pettenati, J.; Salse, J.; Van de Peer, Y.; Rokhsar, D. S. and Schmutz, J. “The Genome of Eucalyptus Grandis.” <i>Nature</i>, 2014, vol.510, pp. 356-362.</div>
  </div>
</blockquote>


## [218biotechnology-advances-custom.csl]

[Biotechnology Advances Custom](http://www.elsevier.com/journals/biological-conservation/0006-3207/guide-for-authors#68000)样式。在 [ecology-letters.csl](http://www.zotero.org/styles/ecology-letters) 基础上修改。

显示效果：

<blockquote>
  (库恩, 2012)<br>
  (Fourney, c1971)<br>
  (贾东琴 and 柯平, 2011)<br>
  (Fan and Sommers, 2013)<br>
  (武丽丽 et al., 2008)<br>
  (Myburg et al., 2014)<br>
  (Bawden, 2008; 中国互联网络信息中心, 2012)<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">Bawden, D., 2008. Origins and concepts of digital literacy [WWW Document]. URL <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a> (accessed 3.8.13).</div>
    <div class="csl-entry">Fan, X., Sommers, C.H., 2013. Food irradiation research and technology, 2nd ed. Blackwell Publishing, Ames, Iowa.</div>
    <div class="csl-entry">Fourney, M.E., c1971. Advances in holographic photoelasticity, in: Symposium on Applications of Holography in Mechanics. ASME, New York, pp. 17–38.</div>
    <div class="csl-entry">Myburg, A.A., Grattapaglia, D., Tuskan, G.A., Hellsten, U., Hayes, R.D., Grimwood, J., Jenkins, J., Lindquist, E., Tice, H., Bauer, D., Goodstein, D.M., Dubchak, I., Poliakov, A., Mizrachi, E., Kullan, A.R.K., Hussey, S.G., Pinard, D., van der Merwe, K., Singh, P., van Jaarsveld, I., Silva-Junior, O.B., Togawa, R.C., Pappas, M.R., Faria, D.A., Sansaloni, C.P., Petroli, C.D., Yang, X., Ranjan, P., Tschaplinski, T.J., Ye, C.-Y., Li, T., Sterck, L., Vanneste, K., Murat, F., Soler, M., Clemente, H.S., Saidi, N., Cassan-Wang, H., Dunand, C., Hefer, C.A., Bornberg-Bauer, E., Kersting, A.R., Vining, K., Amarasinghe, V., Ranik, M., Naithani, S., Elser, J., Boyd, A.E., Liston, A., Spatafora, J.W., Dharmwardhana, P., Raja, R., Sullivan, C., Romanel, E., Alves-Ferreira, M., Külheim, C., Foley, W., Carocha, V., Paiva, J., Kudrna, D., Brommonschenkel, S.H., Pasquali, G., Byrne, M., Rigault, P., Tibbits, J., Spokevicius, A., Jones, R.C., Steane, D.A., Vaillancourt, R.E., Potts, B.M., Joubert, F., Barry, K., Pappas, G.J., Strauss, S.H., Jaiswal, P., Grima-Pettenati, J., Salse, J., Van de Peer, Y., Rokhsar, D.S., Schmutz, J., 2014. The genome of eucalyptus grandis. Nature 510, 356–362. <a href="https://doi.org/10.1038/nature13308">https://doi.org/10.1038/nature13308</a></div>
    <div class="csl-entry">中国互联网络信息中心, 2012. 第 29 次中国互联网络发展现状统计报告.</div>
    <div class="csl-entry">库恩, 2012. 科学革命的结构: 第 4 版, 2nd ed. 北京大学出版社, 北京.</div>
    <div class="csl-entry">武丽丽, 华一新, 张亚军, 刘英敏, 2008. “北斗一号”监控管理网设计与实现. 测绘科学 33, 8–9. <a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">https://doi.org/10.3771/j.issn.1009-2307.2008.05.002</a></div>
    <div class="csl-entry">贾东琴, 柯平, 2011. 面向数字素养的高校图书馆数字服务体系研究, in: 中国图书馆学会 (Ed.), 中国图书馆学会年会论文集. 国家图书馆出版社, 北京, pp. 45–52.</div>
  </div>
</blockquote>


## [219china-economic-quarterly.csl]

[《经济学》（季刊）](https://ceq.ccer.pku.edu.cn/)样式。

注意事项：

1. 样式的默认语言为英文。其他语言的文献需要在 `language` 字段填写对应的语言代码（如 `zh-CN`）。
2. CSL 无法实现要求的“参考文献按作者姓名首位字母顺序编号排列（中英文混排）”。

显示效果：

<blockquote>
  Black<br>
  （1948: pp.66）<br>
  （吉登斯，2000：第53页）<br>
  （布伦纳，1999）<br>
  （Ahmad and Wang, 1991）<br>
  （Riskin et al., 2001）<br>
  （王美今和张松，2000）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	布伦纳，“中国农村财产分配的重新考察”，载赵人伟、李实、李思勤主编《中国居民收入分配再研究》。北京：中国财政经济出版社，1999年。</div>
    <div class="csl-entry">[2]	吉登斯，《现代性的后果》。译林出版社，2000年。</div>
    <div class="csl-entry">[3]	王美今、张松，“中国新股弱势问题研究”，《经济研究》，2000年第9期，第49–56页。</div>
    <div class="csl-entry">[4]	Ahmad, E., and Y. Wang, “Inequality and Poverty in China: Institutional Change and Public Policy, 1978 to 1988”, The World Bank Economic Review, 1991, 5(2), 231-257.</div>
    <div class="csl-entry">[5]	Black, D., His Anonymous Life. 1948.</div>
    <div class="csl-entry">[6]	Riskin, C., R. Zhao, and S. Li, China’s Retreat from Equality: Income Distribution and Economic Transition. New York: M.E. Sharpe, 2001.</div>
  </div>
</blockquote>


## [220biodiversity-science.csl]

《[生物多样性](https://ceq.ccer.pku.edu.cn/)》样式。

注意事项：

1. 文献的语言默认为英语。中文文献需要在 `language` 字段填写 `zh` 或 `zh-CN`。
2. 中文文献需要将作者姓名、标题、期刊、出版地、出版社的英文翻译分别填写在 `extra` 中的 `original-author`, `original-title`, `original-container-title`, `original-publisher-place`, `original-publisher` 字段。
3. 期刊格式要求“每卷连续编页码的期刊不引用期号；同一卷内每期均从第 1 页开始编页码的期刊附期号”。但是 CSL 无法区分，需要由作者控制 `issue` 是否为空。
4. 受 CSL 功能的限制，译文无法输出英文译者。

显示效果：

<blockquote>
  (Li &#38; Durbin, 2011)<br>
  (宋永昌等, 2015)<br>
  (张明海和马建章, 2010)<br>
  (Begon et al, 1986)<br>
  (蒋志刚等, 2015)<br>
  (Lawton &#38; Brown, 1993)<br>
  (Mueller-Dombois D和Ellenberg H, 1986)<br>
  (于飞海, 2002)<br>
  (International Union for Conservation of Nature (IUCN), 2000)<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">Begon M, Harper JL, Townsend CR (1986) Ecology: Individuals, Populations and Communities, 2nd edn. Blackwell Scientific Publications, Boston.</div>
    <div class="csl-entry">International Union for Conservation of Nature (IUCN) (2000) Authority Files for Habitats &#38; Threats. <a href="http://www.iucn.org/themes/ssc/sis/authority.html">http://www.iucn.org/themes/ssc/sis/authority.html</a> (2023-07-04)</div>
    <div class="csl-entry">Jiang ZG, Ma Y, Wu Y, Wang YX, Feng ZJ (2015) China’s mammal diversity and geographic distribution. Science Press, Beijing. (in Chinese) [蒋志刚, 马勇, 吴毅, 王应祥, 冯祚建 (2015) 中国哺乳动物多样性. 科学出版社, 北京.]</div>
    <div class="csl-entry">Lawton JH, Brown VK (1993) Redundancy in ecosystems. In: Biodiversity and Ecosystem Function (eds Schulze ED, Mooney HA), pp. 255–270. Springer-Verlag, New York.</div>
    <div class="csl-entry">Li H, Durbin R (2011) Inference of human population history from individual whole-genome sequences. Nature, 475(7357), 493–496.</div>
    <div class="csl-entry">Mueller-Dombois D, Ellenberg H (1986) Aims and Methods of Vegetation Ecology, pp. 153–188. Science Press, Beijing. (in Chinese with English abstract) [鲍显诚, 张绅, 杨邦顺, 金振洲, 唐廷贵, 姚璧君, 姜汉侨 (译) (1986) 植被生态学的目的和方法, pp. 153–188. 科学出版社, 北京.]</div>
    <div class="csl-entry">Song YC, Yan ER, Song K (2015) Synthetic comparison of eight dynamics plots in evergreen broadleaf forests, China. Biodiversity Science, 23(2), 139–148. (in Chinese with English abstract) [宋永昌, 阎恩荣, 宋坤 (2015) 中国常绿阔叶林 8 大动态监测样地植被的综合比较. 生物多样性, 23(2), 139–148.]</div>
    <div class="csl-entry">Yu FH (2002) Adaptive Strategies of Clonal Plants Growing in Heterogeneous Environments. PhD dissertation, Institute of Botany, Chinese Academy of Sciences, Beijing. (in Chinese) [于飞海 (2002) 克隆植物对异质性环境的生态适应对策. 博士学位论文, 中国科学院植物研究所, 北京.]</div>
    <div class="csl-entry">Zhang MH, Ma JZ (2010) Current status and protection vision of wild northeast tiger in China. Chinese Journal of Zoology, 45(1), 165–168. (in Chinese) [张明海, 马建章 (2010) 中国野生东北虎现状及其保护愿景展望. 动物学杂志, 45(1), 165–168.]</div>
  </div>
</blockquote>


## [221new-finance.csl]

《[新金融](https://xjro.cbpt.cnki.net/WKC/WebPublication/wkList.aspx?columnID=eaf499e4-5e56-4b65-bf00-a5305c9c5eaf)》样式。在 [011gb-t-7714-2015-author-date-bilingual-no-uppercase-no-url-doi-full-width-parentheses.csl] 的基础上修改。

显示效果：

<blockquote>
  （作者，2015）<br>
  （作者1 等，2018）<br>
  （作者，2021）<br>
  （Nunn et al., 2014）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">[1] 作者，2015．著作名．上海：上海人民出版社：50-51．</div>
    <div class="csl-entry">[2] 作者，2021．论文标题．城市：授予单位．</div>
    <div class="csl-entry">[3] 作者1，作者2，作者3，等，2018．文章标题．期刊名称（11）：35-50．</div>
    <div class="csl-entry">[4] NUNN N, QIAN N, 2014. US food aid and civil conflict. American Economic Review, 104(6): 1630-1666.</div>
  </div>
</blockquote>


## [222journal-of-finance-and-economics.csl]

[财经研究](https://qks.sufe.edu.cn/J/CJYJ/Channel/12/CN)样式。在 [gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl](http://www.zotero.org/styles/gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi) 基础上修改。

显示效果：

<blockquote>
  （库恩，2012）<br>
  （Fourney，c1971）<br>
  （贾东琴和柯平，2011）<br>
  （Fan和Sommers，2013）<br>
  （武丽丽等，2008）<br>
  （Myburg等，2014）<br>
  （中国互联网络信息中心，2012；Bawden，2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[A]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷[C]. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[2]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[3]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[4]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
    <div class="csl-entry">[5]	Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
    <div class="csl-entry">[6]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[7]	Fourney M E. Advances in holographic photoelasticity[A]//Symposium on Applications of Holography in Mechanics[C]. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[8]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
  </div>
</blockquote>


## [223journal-of-shanghai-university-of-international-business-and-economics.csl]

《[上海对外经贸大学学报](https://xuebao.suibe.edu.cn/shdwjmdxxb/site/menu/20201105133131001)》参考文献著录格式，[208chinas-industrial-economics.csl] 基础上修改。

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	陈晋镳,张惠民,朱士兴,等.蓟县震旦亚界研究[A].中国地质科学院天津地质矿产研究所. 中国震旦亚界[C]. 天津: 天津科学技术出版社, 1980: 56-114.</div>
    <div class="csl-entry">[2]	贾东琴,柯平.面向数字素养的高校图书馆数字服务体系研究[A].中国图书馆学会. 中国图书馆学会年会论文集[C]. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[3]	王临惠.从几组声母的演变看天津方言形成的自然条件和历史条件[A].曹志耘. 汉语方言的地理语言学研究[C]. 北京: 商务印书馆, 2010: 138.</div>
    <div class="csl-entry">[4]	王临惠,支建刚,王忠一.天津方言的源流关系刍议[J].山西师范大学学报(社会科学版), 2010, 37(4):147.</div>
    <div class="csl-entry">[5]	Crane, D., “Invisible College”, Chicago: Univ. of Chicago Press, 1972.</div>
    <div class="csl-entry">[6]	Frese, K. S., H. A. Katus, and B. Meder, “Next-Generation Sequencing: From Understanding Biology to Personalized Medicine”, Biology, 2013, 2(1):378-398.</div>
    <div class="csl-entry">[7]	Kennedy, W. J., and R. E. Garrison, “Morphology and Genesis of Nodular Chalks and Hardgrounds in the Upper Cretaceous of Southern England”, Sedimentology, 1975a, 22:311.</div>
    <div class="csl-entry">[8]	Kennedy, W. J., and R. E. Garrison, “Morphology and Genesis of Nodular Phosphates in the Cenomanian Glauconitic Marl of South-East England”, Lethaia, 1975b, 8(4):339-360.</div>
    <div class="csl-entry">[9]	Myburg, A. A., D. Grattapaglia, G. A. Tuskan, et al., “The Genome of Eucalyptus Grandis”, Nature, 2014, 510:356-362.</div>
  </div>
</blockquote>


## [224journal-of-meteorological-research.csl]

[气象学报英文版（英文版）](http://jmr.cmsjournal.net/author_guide)样式。在 [american-meteorological-society.csl](http://www.zotero.org/styles/american-meteorological-society) 基础上修改。

显示效果：

<blockquote>
  (库恩 2012)<br>
  (Fourney c1971)<br>
  (贾东琴 and 柯平 2011)<br>
  (Fan and Sommers 2013)<br>
  (武丽丽 et al. 2008)<br>
  (Myburg et al. 2014)<br>
  (中国互联网络信息中心 2012; Bawden 2008)<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">Bawden, D., 2008: Origins and concepts of digital literacy. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a> (Accessed March 8, 2013).</div>
    <div class="csl-entry">Fan, X., and C. H. Sommers, 2013: <i>Food irradiation research and technology</i>. 2nd ed. Blackwell Publishing,.</div>
    <div class="csl-entry">Fourney, M. E., c1971: Advances in holographic photoelasticity. <i>Symposium on Applications of Holography in Mechanics</i>, New York, ASME, 17–38.</div>
    <div class="csl-entry">Myburg, A. A., et al., 2014: The genome of eucalyptus grandis. <i>Nature</i>, <b>510</b>, 356–362, <a href="https://doi.org/10.1038/nature13308">https://doi.org/10.1038/nature13308</a>.</div>
    <div class="csl-entry">中国互联网络信息中心, 2012: <i>第 29 次中国互联网络发展现状统计报告</i>. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a> (Accessed March 26, 2013).</div>
    <div class="csl-entry">库恩, 2012: <i>科学革命的结构: 第 4 版</i>. 2nd ed. 北京大学出版社,.</div>
    <div class="csl-entry">武丽丽, 华一新, 张亚军, and 刘英敏, 2008: “北斗一号”监控管理网设计与实现. 测绘科学, <b>33</b>, 8–9, <a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">https://doi.org/10.3771/j.issn.1009-2307.2008.05.002</a>.</div>
    <div class="csl-entry">贾东琴 and 柯平, 2011: 面向数字素养的高校图书馆数字服务体系研究. 中国图书馆学会年会论文集, 中国图书馆学会, Ed., Vol. 2011 年卷 of, 北京, 国家图书馆出版社, 45–52.</div>
  </div>
</blockquote>


## [225acta-geologica-sinica.csl]

《地质学报》样式。

显示效果：

<blockquote>
  （库恩, 2012）<br>
  （Fourney, c1971）<br>
  （贾东琴等, 2011）<br>
  （Fan et al., 2013）<br>
  （武丽丽等, 2008）<br>
  （Myburg et al., 2014）<br>
  （中国互联网络信息中心, 2012; Bawden, 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">贾东琴, 柯平, 2011. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社: 45-52.</div>
    <div class="csl-entry">库恩, 2012. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社.</div>
    <div class="csl-entry">武丽丽, 华一新, 张亚军, 等, 2008. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 33(5): 8-9.</div>
    <div class="csl-entry">中国互联网络信息中心, 2012. 第 29 次中国互联网络发展现状统计报告[R].</div>
    <div class="csl-entry">Bawden D, 2008. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
    <div class="csl-entry">Fan X, Sommers C H, 2013. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing: 25-26.</div>
    <div class="csl-entry">Fourney M E, c1971. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME: 17-38.</div>
    <div class="csl-entry">Myburg A A, Grattapaglia D, Tuskan G A, et al., 2014. The genome of eucalyptus grandis[J]. Nature, 510: 356-362.</div>
  </div>
</blockquote>


## [226communication-and-society.csl]

[傳播與社會學刊](http://cschinese.com/submission03.asp)样式。在 [apa.csl](http://www.zotero.org/styles/apa) 基础上修改。

显示效果：

<blockquote>
  （李金銓，2004：2–4）<br>
  （祝建華，2001）<br>
  （Wilfley, 1989, p. 15）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">李金銓（2004）。《超越西方霸權：傳媒與文化中國的現代性》。香港：牛津大學出版社。</div>
    <div class="csl-entry">祝建華（2001）。〈中文傳播研究之理論化與本土化：以受眾及媒介效果整合理論為例〉。《新聞學研究》，第68期，頁1–22。</div>
    <div class="csl-entry">Wilfley, D. E. (1989). <i>Interpersonal analyses of bulimia: Normal-weight and obese</i>. Unpublished doctoral dissertation, University of Missouri, Columbia.</div>
  </div>
</blockquote>


## [301manual-of-legal-citation-multi-lingual.csl]

《[法学引注手册](https://www.pup.cn/bookDetail?id=910497ac470d4880ab56c6709bb1d7c5)》（2020 年版）。

注意事项：

1. 文献的语言默认为英语，其他语言的文献需要在 `language` 字段填写对应的语言代码。（这是为了避免 `citeproc-js` 无法转换 title case 的 [bug](https://github.com/Juris-M/citeproc-js/issues/211)。）
2. 各类文献的字段信息填写方式可以参考 Zotero 群组“Chinese CSL development”的[“法学引注手册”分类](https://www.zotero.org/groups/4677213/chinese_csl_development/collections/GTTN32IE)，其中录入了《手册》的示例文献。
3. 最高人民法院发布的指导性案例，需要连同“案例编号”、”发布时间”（注意区别于”裁判时间”）分别在填写在 `Extra` 中的 `Series`, `Series Number` 和 `available-date` 字段，比如在 `Extra` 中填写：
```
Series: 最高人民法院指导案例
Series Number: 24
available-date: 2014-01-26
```
4. 《最高人民法院公报》上的案例，发布时间和期号需要分别填写在 `Extra` 的 `available-date` 和 `Issue` 字段。
5. 司法案例的裁判文书名称需要填写在 `Extra` 的 `Genre` 字段，比如 `Genre: 行政判决书`。
6. 英国案例和法文文献的支持尚不完善，需要测试反馈。
7. 德文的“法律评注”使用 book section 文献类型，并将标题留空。
8. 德文的“祝贺文集“与“纪念文集”使用 book section 文献类型，但需要将书名填在 `Series` 字段。

显示效果：

<blockquote>
  <sup>1</sup> 王名扬：《美国行政法》，北京大学出版社2007年版。<br>
  <sup>2</sup> 同上注，第18页。<br>
  <sup>3</sup> 季卫东：《法律程序的意义：对中国法制建设的另一种思考》，载《中国社会科学》1993年第1期。<br>
  <sup>4</sup> 王保树：《股份有限公司机关构造中的董事和董事会》，载梁慧星主编：《民商法论丛》第1卷，法律出版社1994年版。<br>
  <sup>5</sup> 何海波：《判决书上网》，载《法制日报》2000年5月21日，第2版。<br>
  <sup>6</sup> 李松锋：《游走在上帝与凯撒之间：美国宪法第一修正案中的政教关系研究》，中国政法大学2015年博士学位论文。<br>
  <sup>7</sup> 包郑照诉苍南县人民政府强制拆除房屋案，浙江省高级人民法院民事判决书（1988）浙法民上字 7 号。<br>
  <sup>8</sup> 陆红霞诉南通市FGW政府信息公开案，载《最高人民法院公报》2015年第11期。<br>
  <sup>9</sup> Charles A. Reich, <i>The New Property</i>, 73 Yale Law Journal 733, 737-738 (1964).<br>
  <sup>10</sup> Louis D. Brandeis, <i>What Publicity Can Do</i>, Harper’s Weekly, 20 December 1913, p. 10.<br>
  <sup>11</sup> William Alford, <i>To Steal a Book Is an Elegant Offense: Intellectual Property Law in Chinese Civilization</i>, Stanford University Press, 1995, p. 98.<br>
  <sup>12</sup> Department of Transportation Act, Pub. L. No. 89-670, § 9, 80 Stat. 931, 944-947 (1966).<br>
  <sup>13</sup> Natural Resources Defense Council <i>v.</i> Gorsuch, 685 F.2d 718 (D.C. Cir. 1982).<br>
</blockquote>


## [302historical-research.csl]

[历史研究](http://lsyj.ajcass.org/Home/List)样式。在 [china-national-standard-gb-t-7714-2015-note.csl](http://www.zotero.org/styles/china-national-standard-gb-t-7714-2015-note) 基础上修改。

显示效果：

<blockquote>
  <sup>1</sup> 库恩《科学革命的结构: 第 4 版》，金吾伦, 胡新和, 译2 版。北京: 北京大学出版社，2012年。<br>
  <sup>2</sup> Xuetong Fan, Christopher H. Sommers：<i>Food Irradiation Research and Technology</i>2 edition. , Blackwell Publishing 2013: 25–26.<br>
  <sup>3</sup> 贾东琴、柯平《面向数字素养的高校图书馆数字服务体系研究》，中国图书馆学会, 编//《中国图书馆学会年会论文集》北京: 国家图书馆出版社，2011年: 45–52。<br>
  <sup>4</sup> M.E. Fourney：<i>Advances in Holographic Photoelasticity</i>//Symposium on Applications of Holography in Mechanics, ASME c1971: 17–38.<br>
  <sup>5</sup> 武丽丽、华一新、张亚军、刘英敏《“北斗一号”监控管理网设计与实现》，《测绘科学》2008年5期, 8–9页。<br>
  <sup>6</sup> Alexander A. Myburg, Dario Grattapaglia, Gerald A. Tuskan, Uffe Hellsten, Richard D. Hayes, Jane Grimwood, Jerry Jenkins, Erika Lindquist, Hope Tice, Diane Bauer, David M. Goodstein, Inna Dubchak, Alexandre Poliakov, Eshchar Mizrachi, Anand R.K. Kullan, Steven G. Hussey, Desre Pinard, Karen van der Merwe, Pooja Singh, Ida van Jaarsveld, Orzenil B. Silva-Junior, Roberto C. Togawa, Marilia R. Pappas, Danielle A. Faria, Carolina P. Sansaloni, Cesar D. Petroli, Xiaohan Yang, Priya Ranjan, Timothy J. Tschaplinski, Chu-Yu Ye, Ting Li, Lieven Sterck, Kevin Vanneste, Florent Murat, Marçal Soler, Hélène San Clemente, Naijib Saidi, Hua Cassan-Wang, Christophe Dunand, Charles A. Hefer, Erich Bornberg-Bauer, Anna R. Kersting, Kelly Vining, Vindhya Amarasinghe, Martin Ranik, Sushma Naithani, Justin Elser, Alexander E. Boyd, Aaron Liston, Joseph W. Spatafora, Palitha Dharmwardhana, Rajani Raja, Christopher Sullivan, Elisson Romanel, Marcio Alves-Ferreira, Carsten Külheim, William Foley, Victor Carocha, Jorge Paiva, David Kudrna, Sergio H. Brommonschenkel, Giancarlo Pasquali, Margaret Byrne, Philippe Rigault, Josquin Tibbits, Antanas Spokevicius, Rebecca C. Jones, Dorothy A. Steane, René E. Vaillancourt, Brad M. Potts, Fourie Joubert, Kerrie Barry, Georgios J. Pappas, Steven H. Strauss, Pankaj Jaiswal, Jacqueline Grima-Pettenati, Jérôme Salse, Yves Van de Peer, Daniel S. Rokhsar, Jeremy Schmutz：<i>The Genome of Eucalyptus Grandis</i>, 510 Nature 356, 356–362 (2014).<br>
  <sup>7</sup> Id.<br>
  <sup>8</sup> Id.p.357.<br>
  <sup>9</sup> Xuetong Fan, Christopher H. Sommers：<i>Food Irradiation Research and Technology</i>2 edition. , Blackwell Publishing 2013: 326–329.<br>
</blockquote>


## [303gb-t-7714-2015-note-bilingual.csl]

[china-national-standard-gb-t-7714-2015-note.csl] 的修改版，按照语言显示“等”或“et al.”。

显示效果：

<blockquote>
  <sup>1</sup> 库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.<br>
  <sup>2</sup> FAN X, SOMMERS C H. Food irradiation research and technology[M/OL]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26[2014-06-26]. <a href="http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary">http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary</a>.<br>
  <sup>3</sup> 贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.<br>
  <sup>4</sup> FOURNEY M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.<br>
  <sup>5</sup> 武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J/OL]. 测绘科学, 2008, 33(5): 8-9[2009-10-25]. <a href="http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail">http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail</a>. DOI:<a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">10.3771/j.issn.1009-2307.2008.05.002</a>.<br>
  <sup>6</sup> MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. The genome of eucalyptus grandis[J/OL]. Nature, 2014, 510: 356-362[2014-06-25]. <a href="http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf">http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf</a>. DOI:<a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.<br>
  <sup>7</sup> 同上.<br>
  <sup>8</sup> 同上: 357.<br>
  <sup>9</sup> 同2: 326-329.<br>
</blockquote>


## [304gb-t-7714-2015-note-bilingual-no-ibid.csl]

[china-national-standard-gb-t-7714-2015-note.csl] 的修改版，按照语言显示“等”或“et al.”，重复文献不省略，完整显示。

显示效果：

<blockquote>
  <sup>1</sup> 库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.<br>
  <sup>2</sup> FAN X, SOMMERS C H. Food irradiation research and technology[M/OL]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26[2014-06-26]. <a href="http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary">http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary</a>.<br>
  <sup>3</sup> 贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.<br>
  <sup>4</sup> FOURNEY M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.<br>
  <sup>5</sup> 武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J/OL]. 测绘科学, 2008, 33(5): 8-9[2009-10-25]. <a href="http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail">http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail</a>. DOI:<a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">10.3771/j.issn.1009-2307.2008.05.002</a>.<br>
  <sup>6</sup> MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. The genome of eucalyptus grandis[J/OL]. Nature, 2014, 510: 356-362[2014-06-25]. <a href="http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf">http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf</a>. DOI:<a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.<br>
  <sup>7</sup> MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. The genome of eucalyptus grandis[J/OL]. Nature, 2014, 510: 356-362[2014-06-25]. <a href="http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf">http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf</a>. DOI:<a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.<br>
  <sup>8</sup> MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. The genome of eucalyptus grandis[J/OL]. Nature, 2014, 510: 357[2014-06-25]. <a href="http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf">http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf</a>. DOI:<a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.<br>
  <sup>9</sup> FAN X, SOMMERS C H. Food irradiation research and technology[M/OL]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 326-329[2014-06-26]. <a href="http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary">http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary</a>.<br>
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
2. 各类文献的字段信息填写方式可以参考 Zotero 群组“Chinese CSL development”的[“法学引注手册”分类](https://www.zotero.org/groups/4677213/chinese_csl_development/collections/GTTN32IE)，其中录入了《手册》的示例文献。
3. 最高人民法院发布的指导性案例，需要连同“案例编号”、”发布时间”（注意区别于”裁判时间”）分别在填写在 `Extra` 中的 `Series`, `Series Number` 和 `available-date` 字段，比如在 `Extra` 中填写：
```
Series: 最高人民法院指导案例
Series Number: 24
available-date: 2014-01-26
```
4. 《最高人民法院公报》上的案例，发布时间和期号需要分别填写在 `Extra` 的 `available-date` 和 `Issue` 字段。
5. 司法案例的裁判文书名称需要填写在 `Extra` 的 `Genre` 字段，比如 `Genre: 行政判决书`。
6. 英国案例和法文文献的支持尚不完善，需要测试反馈。
7. 德文的“法律评注”使用 book section 文献类型，并将标题留空。
8. 德文的“祝贺文集“与“纪念文集”使用 book section 文献类型，但需要将书名填在 `Series` 字段。

9. 重复引用的文献不略写。

显示效果：

<blockquote>
  <sup>1</sup> 王名扬：《美国行政法》，北京大学出版社2007年版。<br>
  <sup>2</sup> 王名扬：《美国行政法》，北京大学出版社2007年版，第18页。<br>
  <sup>3</sup> 季卫东：《法律程序的意义：对中国法制建设的另一种思考》，载《中国社会科学》1993年第1期。<br>
  <sup>4</sup> 王保树：《股份有限公司机关构造中的董事和董事会》，载梁慧星主编：《民商法论丛》第1卷，法律出版社1994年版。<br>
  <sup>5</sup> 何海波：《判决书上网》，载《法制日报》2000年5月21日，第2版。<br>
  <sup>6</sup> 李松锋：《游走在上帝与凯撒之间：美国宪法第一修正案中的政教关系研究》，中国政法大学2015年博士学位论文。<br>
  <sup>7</sup> 包郑照诉苍南县人民政府强制拆除房屋案，浙江省高级人民法院民事判决书（1988）浙法民上字 7 号。<br>
  <sup>8</sup> 陆红霞诉南通市FGW政府信息公开案，载《最高人民法院公报》2015年第11期。<br>
  <sup>9</sup> Charles A. Reich, <i>The New Property</i>, 73 Yale Law Journal 733, 737-738 (1964).<br>
  <sup>10</sup> Louis D. Brandeis, <i>What Publicity Can Do</i>, Harper’s Weekly, 20 December 1913, p. 10.<br>
  <sup>11</sup> William Alford, <i>To Steal a Book Is an Elegant Offense: Intellectual Property Law in Chinese Civilization</i>, Stanford University Press, 1995, p. 98.<br>
  <sup>12</sup> Department of Transportation Act, Pub. L. No. 89-670, § 9, 80 Stat. 931, 944-947 (1966).<br>
  <sup>13</sup> Natural Resources Defense Council <i>v.</i> Gorsuch, 685 F.2d 718 (D.C. Cir. 1982).<br>
</blockquote>


## [307studies-on-marxism.csl]

《[马克思主义研究](http://www.mkszyyj.net/Home/Index)》样式。

显示效果：

<blockquote>
  <sup>1</sup> 《马克思恩格斯选集》第2卷，北京：人民出版社，1995年，第22、178页。<br>
  <sup>2</sup> 逄先知、金冲及主编：《MZD传》，2003年，第1032页。<br>
  <sup>3</sup> [德]黑格尔：《逻辑学》（上），杨一之译，商务印书馆，2001年，第427-428页。<br>
  <sup>4</sup> 任平：《马克思“反思的问题视域”及其当代意义》，《中国社会科学》2006年第6期。<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	《马克思恩格斯选集》第2卷，北京：人民出版社，1995年。</div>
    <div class="csl-entry">[2]	逄先知、金冲及主编：《MZD传》，2003年。</div>
    <div class="csl-entry">[3]	[德]黑格尔：《逻辑学》（上），杨一之译，商务印书馆，2001年。</div>
    <div class="csl-entry">[4]	任平：《马克思“反思的问题视域”及其当代意义》，《中国社会科学》2006年第6期。</div>
  </div>
</blockquote>


## [308world-history.csl]

[根据fanzhen《历史研究》引文规范、pulipuli制作的APA中文格式以及《世界历史》引文规范改制，具体用法和特性见说明](http://sjlsbjb.ajcass.org/Home/Show/?ChannelID=11735)样式。

显示效果：

<blockquote>
  <sup>1</sup> 库恩著，金吾伦、胡新和译：《科学革命的结构: 第 4 版》2，北京大学出版社2012年版。<br>
  <sup>2</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, Ames, Iowa: Blackwell Publishing, 2013.<br>
  <sup>3</sup> 贾东琴、柯平：《面向数字素养的高校图书馆数字服务体系研究》，北京，2011年，第45–52页。<br>
  <sup>4</sup> M. E. Fourney, “Advances in holographic photoelasticity,” University of Southern California, Los Angeles, California, c1971, pp. 17–38.<br>
  <sup>5</sup> 武丽丽等：《“北斗一号”监控管理网设计与实现》，《测绘科学》2008年第5期，第8–9页。<br>
  <sup>6</sup> Alexander A. Myburg et al., “The genome of eucalyptus grandis,” <i>Nature</i>, vol. 510(June 2014), pp. 356–362.<br>
  <sup>7</sup> Ibid.<br>
  <sup>8</sup> Ibid., p. 357.<br>
  <sup>9</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, pp. 326–329.<br>
</blockquote>


## [309journal-of-world-economics-and-politics.csl]

[世界经济与政治](http://www.iwep.org.cn/cbw/cbw_xsqk/xsqk_sjjjyzz/xsqk_zsgf/)样式。在 [social-sciences-in-china.csl](http://www.zotero.org/styles/social-sciences-in-china) 基础上修改。

显示效果：

<blockquote>
  <sup>1</sup> 王铁崖：《国际法引论》，北京大学出版社1998年版。<br>
  <sup>2</sup> 汉斯·摩根索著，杨岐鸣等译：《国家间的政治: 为权力与和平而斗争》，商务印书馆1993年版。<br>
  <sup>3</sup> 王缉思：《民族与民族主义》，载《欧洲研究》，1993年第5期，第14–19页。<br>
  <sup>4</sup> 赵汀阳：《“天下”概念与世界制度》，载秦亚主编：《中国学者看世界: 国际秩序卷》，新世界出版社2007年版，第3–35页。<br>
  <sup>5</sup> 《论语.学而》。<br>
  <sup>6</sup> 中华人民共和国国务院新闻办公室：《新时代的中国与世界》，载《人民日报》，2019年9月28日。<br>
  <sup>7</sup> 周方银：《国际规范的演化》，清华大学2006年博士学位论文。<br>
  <sup>8</sup> 白云真：《国际关系学科中美国知识霸权的探讨》，第二届中国国际关系学会博士论坛会议论文，中国社会科学院研究生院，2007年5月12日。<br>
  <sup>9</sup> 白云真：《国际关系学科中美国知识霸权的探讨》，第二届中国国际关系学会博士论坛会议论文，中国社会科学院研究生院，2007年5月12日。<br>
  <sup>10</sup> 《傅良佐致国务院电》，1917年9月15日，北洋档案 1011—5961，中国第二历史档案馆藏。<br>
  <sup>11</sup> 《党外人士座谈会记录》，1950年7月，李劼人档案，中共四川省委统战部档案室藏。<br>
  <sup>12</sup> Robert O. Keohane and Joseph S. Nye, <i>Power and Interdependence: World Politics in Transition</i>, Boston: Little Brown Company, 1997.<br>
  <sup>13</sup> Tim Dunne, “New Thinking on International Society,” <i>British Journal of Politics &#38; International Relations</i>, Vol.3, No.2, 2001, pp.223–244.<br>
  <sup>14</sup> Steve Smith, “New Approaches to International Theory,” in John Baylis and Steve Smith, eds., <i>The Globalization of World Politics</i>, Oxford: Oxford University Press, 1998, pp.169–170.<br>
  <sup>15</sup> Henry A. Kissinger, “Nixon’s Key Adviser on Defense,” <i>The New York Times</i>, December 3, 1968.<br>
  <sup>16</sup> Richard W. Weitz, “NATO After the Cold War: State Behavior in a Changing World Order,” Ph.D. Dissertation, Cambridge: Harvard University, 1993.<br>
  <sup>17</sup> G. John Ikenberry and Andrew Moravcsik, “Liberal Theory and the Politics of Security in Northeast Asia,” Paper Prepared for Ford Foundation Project on Non-traditional Security, Seoul, Republic of Korea, January 30, 2004.<br>
  <sup>18</sup> G. John Ikenberry and Andrew Moravcsik, “Liberal Theory and the Politics of Security in Northeast Asia,” Paper Prepared for Ford Foundation Project on Non-traditional Security, Seoul, Republic of Korea, January 30, 2004.<br>
  <sup>19</sup> “United Nations Register of Conventional Arms: Report of the Secretary General,” UN General Assembly Document A/48/344, October 11, 1993.<br>
  <sup>20</sup> Thomas Risse, “Governance Configurations in Areas of Limited Statehood: Actors, Modes, Institutions, and Resources,” SFB-Governance Working Paper Series, No.32, Research Center (SFB) 700, Berlin, March 2012.<br>
  <sup>21</sup> Nixon to Kissinger, February 1, 1969, Box 1032, NSC Files, Nixon Presidential Material Project (NPMP), National Archives II, College Park, MD.<br>
  <sup>22</sup> “USIA: United States Doctrinal Program,” January 15, 1954, CK3100094653, Declassified Documents Reference System, Gale Group, Inc.<br>
  <sup>23</sup> U.S. Department of State, <i>Foreign Relations of United States (FRUS), 1955–1957, Vol.3</i>, Washington, D.C.: U.S. Government Printing Office, 1990.<br>
  <sup>24</sup> 《中国对欧盟政策文件》，<a href="https://www.fmprc.gov.cn/web/ziliao_674904/tytj_674911/zcwj_674915/t1622886.shtml">https://www.fmprc.gov.cn/web/ziliao_674904/tytj_674911/zcwj_674915/t1622886.shtml</a>，访问时间：2020年12月1日。<br>
  <sup>25</sup> The United Nations, “Transforming Our World: The 2030 Agenda for Sustainable Development,” <a href="https://sustainabledevelopment.un.org/post2015/transformingourworld">https://sustainabledevelopment.un.org/post2015/transformingourworld</a>, 访问时间: 2020年12月1日.<br>
  <sup>26</sup> 彼得·卡赞斯坦、罗伯特·基欧汉、斯蒂芬·克拉斯纳主编，秦亚青等译：《世界政治理论的探索与争鸣》，上海：上海人民出版社2006年版。<br>
  <sup>27</sup> 实藤惠秀著，谭汝谦、林启彦译：《中国人留学日本史》，香港：香港中文大学出版社1982年版。<br>
</blockquote>


## [310modern-chinese-literature-studies.csl]

[根据pulipuli制作的APA中文格式、fanzhen《历史研究》引文规范以及《中国现代文学研究丛刊》引文规范改制，具体用法和特性见说明](http://www.zgxdwxyjck.cn/)样式。

显示效果：

<blockquote>
  <sup>1</sup> 库恩，《科学革命的结构: 第 4 版》，金吾伦、胡新和译，2北京大学出版社2012年版。<br>
  <sup>2</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, Ames, Iowa: Blackwell Publishing, 2013.<br>
  <sup>3</sup> 贾东琴、柯平：《面向数字素养的高校图书馆数字服务体系研究》，北京，2011年。<br>
  <sup>4</sup> M. E. Fourney, M. E. Fourney, “Advances in holographic photoelasticity,” University of Southern California, Los Angeles, California, c1971, pp. 17–38.<br>
  <sup>5</sup> 武丽丽等：《“北斗一号”监控管理网设计与实现》，《测绘科学》2008年第5期。<br>
  <sup>6</sup> Alexander A. Myburg et al., “The genome of eucalyptus grandis,” <i>Nature</i>, Vol. 510, 2014, pp. 356–362.<br>
  <sup>7</sup> Ibid.<br>
  <sup>8</sup> Ibid., p. 357.<br>
  <sup>9</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, pp. 326–329.<br>
</blockquote>


## [311social-sciences-in-china.csl]

[中国社会科学](http://sscp.cssn.cn/tgxt/zgshkxtg/)样式。

显示效果：

<blockquote>
  <sup>1</sup> 赵景深：《文坛忆旧》，上海：北新书局，1948年。<br>
  <sup>2</sup> 谢兴尧整理：《荣庆日记》，西安：西北大学出版社，1986年。<br>
  <sup>3</sup> 蒋大兴：《公司法的展开与评判——方法·判例·制度》，北京：法律出版社，2001年。<br>
  <sup>4</sup> 任继愈主编：《中国哲学发展史（先秦卷）》，北京：人民出版社，1983年。<br>
  <sup>5</sup> 实藤惠秀：《中国人留学日本史》，谭汝谦、林启彦译，香港：香港中文大学出版社，1982年。<br>
  <sup>6</sup> 金冲及主编：《周恩来传》，北京：人民出版社、中央文献出版社，1989年。<br>
  <sup>7</sup> 佚名：《晚清洋务运动事类汇钞五十七种》上册，北京：全国图书馆文献缩微复制中心，1998年。<br>
  <sup>8</sup> 狄葆贤：《平等阁笔记》，上海：有正书局，出版时间不详。<br>
  <sup>9</sup> 《马克思恩格斯全集》第31卷，北京：人民出版社，1998年。<br>
  <sup>10</sup> 杜威·佛克马：《走向新世界主义》，王宁、薛晓源主编：《全球化与后殖民批评》，北京：中央编译出版社，1999年，第247—266页。<br>
  <sup>11</sup> 鲁迅：《中国小说的历史的变迁》，《鲁迅全集》第9册，北京：人民文学出版社，1981年，第325页。<br>
  <sup>12</sup> 唐振常：《师承与变法》，《识史集》，上海：上海古籍出版社，1997年，第65页。<br>
  <sup>13</sup> 李鹏程：《当代文化哲学沉思》，北京：人民出版社，1994年。<br>
  <sup>14</sup> 楼适夷：《读家书，想傅雷（代序）》，傅敏主编：《傅雷家书》（增补本），北京：三联书店，1998年，第2页。<br>
  <sup>15</sup> 黄仁宇：《为什么称为“中国大历史”？——中文版自序》，《中国大历史》，北京：三联书店，1997年，第2页。<br>
  <sup>16</sup> 姚际恒：《古今伪书考》卷3，光绪三年苏州文学山房活字本。<br>
  <sup>17</sup> 毛祥麟：《墨余录》，上海：上海古籍出版社，1985年。<br>
  <sup>18</sup> 杨钟羲：《雪桥诗话续集》卷5，沈阳：辽沈书社，1991年影印本。<br>
  <sup>19</sup> 《太平御览》卷690《服章部七》，北京：中华书局，1985年影印本。<br>
  <sup>20</sup> 管志道：《答屠仪部赤水丈书》，《续问辨牍》卷2，《四库全书存目丛书》，济南：齐鲁书社，1997年影印本。<br>
  <sup>21</sup> 乾隆《嘉定县志》卷12《风俗》。<br>
  <sup>22</sup> 民国《上海县续志》卷1《疆域》。<br>
  <sup>23</sup> 万历《广东通志》卷15《郡县志二·广州府·城池》，《稀见中国地方志汇刊》，北京：中国书店，1992年影印本。<br>
  <sup>24</sup> 《旧唐书》卷9《玄宗纪下》，北京：中华书局，1975年标点本。<br>
  <sup>25</sup> 《方苞集》卷6《答程夔州书》，上海：上海古籍出版社，1983年标点本。<br>
  <sup>26</sup> 《清德宗实录》卷435，光绪二十四年十二月上，北京：中华书局，1987年影印本。<br>
  <sup>27</sup> 何龄修：《读顾诚〈南明史〉》，《中国史研究》1998年第3期。<br>
  <sup>28</sup> 汪疑今：《江苏的小农及其副业》，《中国经济》第4卷第6期，1936年6月15日。<br>
  <sup>29</sup> 魏丽英：《论近代西北人口波动的主要原因》，《社会科学》（兰州）1990年第6期。<br>
  <sup>30</sup> 黄义豪：《评黄龟年四劾秦桧》，《福建论坛》（文史哲版）1997年第3期。<br>
  <sup>31</sup> 倪素香：《德育学科的比较研究与理论探索》，《武汉大学学报》（社会科学版）2002年第4期。<br>
  <sup>32</sup> 李眉：《李劼人轶事》，《四川工人日报》1986年8月22日，第2版。<br>
  <sup>33</sup> 伤心人（麦孟华）：《说奴隶》，《清议报》第69册，光绪二十六年十一月二十一日，第1页。<br>
  <sup>34</sup> 《四川会议厅暂行章程》，《广益丛报》第8年第19期，1910年9月3日，“新章”，第1—2版。<br>
  <sup>35</sup> 《上海各路商界总联合会致外交部电》，《民国日报》（上海）1925年8月14日，第4版。<br>
  <sup>36</sup> 《西南中委反对在宁召开五全会》，《民国日报》（上海）1933年8月11日，第1张第4版。<br>
  <sup>37</sup> 方明东：《罗隆基政治思想研究（1913—1949）》，博士学位论文，北京师范大学历史系，2000年。<br>
  <sup>38</sup> 任东来：《对国际体制和国际制度的理解和翻译》，全球化与亚太区域化国际研讨会论文，天津，2000年6月，第9页。<br>
  <sup>39</sup> 任东来：《对国际体制和国际制度的理解和翻译》，《全球化与亚太区域化国际研讨会论文集》，天津，2000年，第9页。<br>
  <sup>40</sup> 《傅良佐致国务院电》，1917年9月15日，北洋档案 1011—5961，中国第二历史档案馆藏。<br>
  <sup>41</sup> 《党外人士座谈会记录》，1950年7月，李劼人档案，中共四川省委统战部档案室藏。<br>
  <sup>42</sup> 王明亮：《关于中国学术期刊标准化数据库系统工程的进展》，1998年8月16日，<a href="http://www.cajcd.cn/pub/wml.txt/980810-2.html">http://www.cajcd.cn/pub/wml.txt/980810-2.html</a>，1998年10月4日。<br>
  <sup>43</sup> 扬之水：《两宋茶诗与茶事》，《文学遗产通讯》（网络版试刊）2006年第1期，<a href="http://www.literature.org.cn/Article.asp?ID=199">http://www.literature.org.cn/Article.asp?ID=199</a>，2007年9月13日。<br>
  <sup>44</sup> Peter Brooks, <i>Troubling Confessions: Speaking Guilt in Law and Literature</i>, Chicago: University of Chicago Press, 2000.<br>
  <sup>45</sup> Marco Polo, <i>The Travels of Marco Polo</i>, trans. William Marsden, Hertfordshire: Cumberland House, 1997.<br>
  <sup>46</sup> Heath B. Chamberlain, “On the Search for Civil Society in China,” <i>Modern China</i>, vol. 19, no. 2 (April 1993), pp. 199-215.<br>
  <sup>47</sup> R. S. Schfield, “The Impact of Scarcity and Plenty on Population Change in England,” in R. I. Rotberg and T. K. Rabb, eds., <i>Hunger and History: The Impact of Changing Food Production and Consumption Pattern on Society</i>, Cambridge, Mass.: Cambridge University Press, 1983, pp. 55-88.<br>
  <sup>48</sup> Nixon to Kissinger, February 1, 1969, Box 1032, NSC Files, Nixon Presidential Material Project (NPMP), National Archives II, College Park, MD.<br>
</blockquote>


## [312journal-of-international-relations.csl]

[根据pulipuli制作的APA中文格式、fanzhen《历史研究》引文规范以及《国际关系研究》引文规范改制，具体用法和特性见说明](https://iir.sass.org.cn/2019/0717/c1653a42491/page.htm)样式。

显示效果：

<blockquote>
  <sup>1</sup> 库恩著，金吾伦、胡新和译：《科学革命的结构: 第 4 版》2，北京大学出版社2012年版。<br>
  <sup>2</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, Blackwell Publishing, 2013.<br>
  <sup>3</sup> 贾东琴、柯平：《面向数字素养的高校图书馆数字服务体系研究》，北京，2011年。<br>
  <sup>4</sup> M. E. Fourney, M. E. Fourney, “Advances in holographic photoelasticity,” University of Southern California, Los Angeles, California, c1971, pp. 17–38.<br>
  <sup>5</sup> 武丽丽等：《“北斗一号”监控管理网设计与实现》，《测绘科学》2008年第5期，第8–9页。<br>
  <sup>6</sup> Alexander A. Myburg et al., “The genome of eucalyptus grandis,” <i>Nature</i>, Vol. 510, 2014, pp. 356–362.<br>
  <sup>7</sup> Ibid.<br>
  <sup>8</sup> Ibid., p. 357.<br>
  <sup>9</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, Blackwell Publishing, 2013, pp. 326–329.<br>
</blockquote>


## [313international-security-studies.csl]

[根据fanzhen《历史研究》引文规范、pulipuli制作的APA中文格式以及《国际安全研究》引文规范改制，具体用法和特性见说明](http://gjaqyj.cnjournals.com/gjaqyj/ch/first_menu.aspx?parent_id=20130701085855001)样式。

显示效果：

<blockquote>
  <sup>1</sup> 库恩：《科学革命的结构: 第 4 版》2，金吾伦、胡新和译，北京：北京大学出版社2012年版。<br>
  <sup>2</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, Ames, Iowa: Blackwell Publishing, 2013.<br>
  <sup>3</sup> 贾东琴、柯平：《面向数字素养的高校图书馆数字服务体系研究》，2011年，第45–52页。<br>
  <sup>4</sup> M. E. Fourney, “Advances in holographic photoelasticity,” University of Southern California, Los Angeles, California, c1971, pp. 17–38.<br>
  <sup>5</sup> 武丽丽等：《“北斗一号”监控管理网设计与实现》，载《测绘科学》，2008年第5期，第8–9页。<br>
  <sup>6</sup> Alexander A. Myburg et al., “The genome of eucalyptus grandis,” <i>Nature</i>, Vol. 510 (June 2014), pp. 356–362.<br>
  <sup>7</sup> Ibid.<br>
  <sup>8</sup> Ibid., p. 357.<br>
  <sup>9</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, pp. 326–329.<br>
</blockquote>


## [314the-journal-of-international-studies.csl]

[国际政治研究](https://www.jis.pku.edu.cn/Zhushi1407/1102984.htm)样式。在 [journal-of-world-economics-and-politics.csl](http://www.zotero.org/styles/journal-of-world-economics-and-politics) 基础上修改。

显示效果：

<blockquote>
  <sup>1</sup> 库恩：《科学革命的结构: 第 4 版》（第2版），北京：北京大学出版社2012年版。<br>
  <sup>2</sup> Xuetong Fan and Christopher H. Sommers, <i>Food Irradiation Research and Technology</i>, Ames, Iowa: Blackwell Publishing, 2013, pp.25–26.<br>
  <sup>3</sup> 贾东琴、柯平：《面向数字素养的高校图书馆数字服务体系研究》，载中国图书馆学会主编：《中国图书馆学会年会论文集》2011 年卷，北京：国家图书馆出版社2011年，第45–52页。<br>
  <sup>4</sup> M. E. Fourney, “Advances in Holographic Photoelasticity,” in <i>Symposium on Applications of Holography in Mechanics</i>, New York: ASME, c1971, pp.17–38.<br>
  <sup>5</sup> 武丽丽等：《“北斗一号”监控管理网设计与实现》，《测绘科学》2008年第5期，第8–9页。<br>
  <sup>6</sup> Alexander A. Myburg et al., “The Genome of Eucalyptus Grandis,” <i>Nature</i>, Vol.510, 2014, pp.356–362.<br>
  <sup>7</sup> Alexander A. Myburg et al., “The Genome of Eucalyptus Grandis.”<br>
  <sup>8</sup> Alexander A. Myburg et al., “The Genome of Eucalyptus Grandis,” p.357.<br>
  <sup>9</sup> Xuetong Fan and Christopher H. Sommers, <i>Food Irradiation Research and Technology</i>, pp.326–329.<br>
</blockquote>


## [315foreign-affairs-review.csl]

[外交评论](https://wjxy.cbpt.cnki.net/WKH/WebPublication/index.aspx)样式。在 [journal-of-world-economics-and-politics.csl](http://www.zotero.org/styles/journal-of-world-economics-and-politics) 基础上修改。

显示效果：

<blockquote>
  <sup>1</sup> 库恩：《科学革命的结构: 第 4 版》（第2版），金吾伦、胡新和译，北京大学出版社，2012年。<br>
  <sup>2</sup> Xuetong Fan and Christopher H. Sommers, <i>Food Irradiation Research and Technology</i>, Blackwell Publishing, 2013, pp.25–26.<br>
  <sup>3</sup> 贾东琴、柯平：《面向数字素养的高校图书馆数字服务体系研究》，载中国图书馆学会主编：《中国图书馆学会年会论文集》2011 年卷，国家图书馆出版社，2011年，第45–52页。<br>
  <sup>4</sup> M. E. Fourney, “Advances in Holographic Photoelasticity,” in <i>Symposium on Applications of Holography in Mechanics</i>, ASME, c1971, pp.17–38.<br>
  <sup>5</sup> 武丽丽等：《“北斗一号”监控管理网设计与实现》，《测绘科学》，2008年第5期，第8–9页。<br>
  <sup>6</sup> Alexander A. Myburg et al., “The Genome of Eucalyptus Grandis,” <i>Nature</i>, Vol.510, 2014, pp.356–362.<br>
  <sup>7</sup> Alexander A. Myburg et al., “The Genome of Eucalyptus Grandis.”<br>
  <sup>8</sup> Alexander A. Myburg et al., “The Genome of Eucalyptus Grandis,” p.357.<br>
  <sup>9</sup> Xuetong Fan and Christopher H. Sommers, <i>Food Irradiation Research and Technology</i>, pp.326–329.<br>
</blockquote>


## [316pacific-journal.csl]

[根据fanzhen《历史研究》引文规范、pulipuli制作的APA中文格式以及《太平洋学报》引文规范改制，具体用法和特性见说明](http://www.pacificjournal.com.cn/CN/column/column41.shtml)样式。

显示效果：

<blockquote>
  <sup>1</sup> 库恩著，金吾伦、胡新和译：《科学革命的结构: 第 4 版》2，北京大学出版社2012年版。<br>
  <sup>2</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, Ames, Iowa: Blackwell Publishing, 2013.<br>
  <sup>3</sup> 贾东琴、柯平：《面向数字素养的高校图书馆数字服务体系研究》，2011年，第45–52页。<br>
  <sup>4</sup> M. E. Fourney, “Advances in holographic photoelasticity,” University of Southern California, Los Angeles, California, c1971, pp. 17–38.<br>
  <sup>5</sup> 武丽丽等：““北斗一号”监控管理网设计与实现”，《测绘科学》，2008年第5期，第8–9页。<br>
  <sup>6</sup> Alexander A. Myburg et al., “The genome of eucalyptus grandis,” <i>Nature</i>, Vol.510, 2014, pp. 356–362.<br>
  <sup>7</sup> Ibid.<br>
  <sup>8</sup> Ibid., p. 357.<br>
  <sup>9</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, pp. 326–329.<br>
</blockquote>


## [317journal-of-contemporary-asia-pacific-studies.csl]

[根据fanzhen《历史研究》引文规范、pulipuli制作的APA中文格式以及《当代亚太》引文规范改制，具体用法和特性见说明]()样式。

显示效果：

<blockquote>
  <sup>1</sup> 库恩：《科学革命的结构: 第 4 版》2，金吾伦、胡新和译，北京大学出版社2012年版。<br>
  <sup>2</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, Ames, Iowa: Blackwell Publishing, 2013.<br>
  <sup>3</sup> 贾东琴、柯平：《面向数字素养的高校图书馆数字服务体系研究》，2011年，第45–52页。<br>
  <sup>4</sup> M. E. Fourney, “Advances in holographic photoelasticity,” University of Southern California, Los Angeles, California, c1971, pp. 17–38.<br>
  <sup>5</sup> 武丽丽等：《“北斗一号”监控管理网设计与实现》，载《测绘科学》2008年第5期，第8–9页。<br>
  <sup>6</sup> Alexander A. Myburg et al., “The genome of eucalyptus grandis,” <i>Nature</i>, Vol. 510, 2014, pp. 356–362.<br>
  <sup>7</sup> Ibid.<br>
  <sup>8</sup> Ibid., p. 357.<br>
  <sup>9</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, pp. 326–329.<br>
</blockquote>


## [318exploration-and-free-views.csl]

[根据fanzhen《历史研究》引文规范以及众多国际问题期刊引文规范改制，支持中英混排，仅支持今人论文、图书、章节、学位论文、网页](http://www.tsyzm.com/CN/column/column6.shtml)样式。

显示效果：

<blockquote>
  <sup>1</sup> 库恩：《科学革命的结构: 第 4 版》，金吾伦、胡新和译，北京：北京大学出版社，2012年<br>
  <sup>2</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, Ames, Iowa: Blackwell Publishing, 2013<br>
  <sup>3</sup> 贾东琴、柯平中国图书馆学会主编：《面向数字素养的高校图书馆数字服务体系研究》北京：国家图书馆出版社，2011年<br>
  <sup>4</sup> M. E. Fourney, “Advances in holographic photoelasticity,” <i>Symposium on Applications of Holography in Mechanics</i>, (c1971), pp. 17–38.<br>
  <sup>5</sup> 武丽丽等：《“北斗一号”监控管理网设计与实现》，《测绘科学》2008年第5期。<br>
  <sup>6</sup> Alexander A. Myburg et al., “The genome of eucalyptus grandis,” <i>Nature</i>, Vol. 510, (2014), pp. 356–362.<br>
  <sup>7</sup> Ibid.<br>
  <sup>8</sup> Ibid.357.<br>
  <sup>9</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, Ames, Iowa: Blackwell Publishing, 2013, pp. 326–329.<br>
</blockquote>


## [319literary-review.csl]

[根据pulipuli制作的APA中文格式、fanzhen《历史研究》引文规范以及《文学评论》引文规范改制，具体用法和特性见说明](http://wxpl.ajcass.org/Home/Index)样式。

显示效果：

<blockquote>
  <sup>1</sup> 库恩，《科学革命的结构: 第 4 版》2，金吾伦、胡新和译，北京大学出版社2012年版。<br>
  <sup>2</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, Ames, Iowa: Blackwell Publishing, 2013.<br>
  <sup>3</sup> 贾东琴、柯平：《面向数字素养的高校图书馆数字服务体系研究》，北京，2011年。<br>
  <sup>4</sup> M. E. Fourney, M. E. Fourney, “Advances in holographic photoelasticity,” University of Southern California, Los Angeles, California, c1971, pp. 17–38.<br>
  <sup>5</sup> 武丽丽等：《“北斗一号”监控管理网设计与实现》，《测绘科学》2008年第5期。<br>
  <sup>6</sup> Alexander A. Myburg et al., “The genome of eucalyptus grandis,” <i>Nature</i>, Vol. 510, 2014, pp. 356–362.<br>
  <sup>7</sup> Ibid.<br>
  <sup>8</sup> Ibid., p. 357.<br>
  <sup>9</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, pp. 326–329.<br>
</blockquote>


## [320literary-and-artistic-contention.csl]

[根据pulipuli制作的APA中文格式、fanzhen《历史研究》引文规范以及《文艺争鸣》引文规范改制，具体用法和特性见说明](http://www.wenyizhengming.com/danye.php?SortID=178&pid=35)样式。

显示效果：

<blockquote>
  <sup>1</sup> 库恩，《科学革命的结构: 第 4 版》，金吾伦、胡新和译2，北京大学出版社，2012年版。<br>
  <sup>2</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, Ames, Iowa: Blackwell Publishing, 2013.<br>
  <sup>3</sup> 贾东琴、柯平：《面向数字素养的高校图书馆数字服务体系研究》，北京，2011年。<br>
  <sup>4</sup> M. E. Fourney, M. E. Fourney, “Advances in holographic photoelasticity,” University of Southern California, Los Angeles, California, c1971, pp. 17–38.<br>
  <sup>5</sup> 武丽丽等：《“北斗一号”监控管理网设计与实现》，《测绘科学》2008年第5期。<br>
  <sup>6</sup> Alexander A. Myburg et al., “The genome of eucalyptus grandis,” <i>Nature</i>, Vol. 510, 2014, pp. 356–362.<br>
  <sup>7</sup> Ibid.<br>
  <sup>8</sup> Ibid., p. 357.<br>
  <sup>9</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, pp. 326–329.<br>
</blockquote>


## [321journalism-and-communication.csl]

[根据fanzhen《历史研究》引文规范、pulipuli制作的APA中文格式以及《新闻与传播研究》引文规范改制，具体用法和特性见说明](http://www.xwycbyj.org/)样式。

显示效果：

<blockquote>
  <sup>1</sup> 库恩，《科学革命的结构: 第 4 版》2，金吾伦、胡新和译，北京：北京大学出版社，2012年。<br>
  <sup>2</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, Ames, Iowa: Blackwell Publishing, 2013.<br>
  <sup>3</sup> 贾东琴、柯平：《面向数字素养的高校图书馆数字服务体系研究》，北京，2011年，第45–52页。<br>
  <sup>4</sup> M. E. Fourney, “Advances in holographic photoelasticity,” University of Southern California, Los Angeles, Californiac1971, pp. 17–38.<br>
  <sup>5</sup> 武丽丽等：《“北斗一号”监控管理网设计与实现》，《测绘科学》2008年第5期，第8–9页。<br>
  <sup>6</sup> Alexander A. Myburg et al., “The genome of eucalyptus grandis,” <i>Nature</i>, Vol. 510, 2014, pp. 356–362.<br>
  <sup>7</sup> Ibid.<br>
  <sup>8</sup> Ibid., p. 357.<br>
  <sup>9</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, pp. 326–329.<br>
</blockquote>


## [322contemporary-international-relations.csl]

[根据fanzhen《历史研究》引文规范、pulipuli制作的APA中文格式以及《现代国际关系》引文规范改制，具体用法和特性见说明]()样式。

显示效果：

<blockquote>
  <sup>1</sup> 库恩著，金吾伦、胡新和译：《科学革命的结构: 第 4 版》2，北京大学出版社，2012年。<br>
  <sup>2</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, Ames, Iowa: Blackwell Publishing, 2013.<br>
  <sup>3</sup> 贾东琴、柯平：《面向数字素养的高校图书馆数字服务体系研究》，2011年，第45–52页。<br>
  <sup>4</sup> M. E. Fourney, “Advances in holographic photoelasticity,” University of Southern California, Los Angeles, California, c1971, pp. 17–38.<br>
  <sup>5</sup> 武丽丽等：《“北斗一号”监控管理网设计与实现》，《测绘科学》，2008年第5期，第8–9页。<br>
  <sup>6</sup> Alexander A. Myburg et al., “The genome of eucalyptus grandis,” <i>Nature</i>, Vol.510, 2014, pp. 356–362.<br>
  <sup>7</sup> Ibid.<br>
  <sup>8</sup> Ibid., p. 357.<br>
  <sup>9</sup> Xuetong Fan and Christopher H. Sommers, <i>Food irradiation research and technology</i>, pp. 326–329.<br>
</blockquote>


## [323gb-t-7714-2015-note-fullwidth-punctuations.csl]

[GB/T 7714-2015（脚注，全角标点）](https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D8055ED3A7E05397BE0A0AB82A)样式。在 [china-national-standard-gb-t-7714-2015-note.csl](http://www.zotero.org/styles/china-national-standard-gb-t-7714-2015-note) 基础上修改。

显示效果：

<blockquote>
  <sup>1</sup> 库恩．科学革命的结构: 第 4 版［M］．金吾伦，胡新和，译．2 版．北京：北京大学出版社，2012．<br>
  <sup>2</sup> FAN X, SOMMERS C H. Food irradiation research and technology[M/OL]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25—26[2014-06-26]. <a href="http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary">http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary</a>.<br>
  <sup>3</sup> 贾东琴，柯平．面向数字素养的高校图书馆数字服务体系研究［C］//中国图书馆学会．中国图书馆学会年会论文集：2011 年卷．北京：国家图书馆出版社，2011：45—52．<br>
  <sup>4</sup> FOURNEY M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17—38.<br>
  <sup>5</sup> 武丽丽，华一新，张亚军，等．“北斗一号”监控管理网设计与实现［J/OL］．测绘科学，2008，33（5）：8—9［2009-10-25］．<a href="http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail">http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail</a>．DOI:<a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">10.3771/j.issn.1009-2307.2008.05.002</a>．<br>
  <sup>6</sup> MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. The genome of eucalyptus grandis[J/OL]. Nature, 2014, 510: 356—362[2014-06-25]. <a href="http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf">http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf</a>. DOI:<a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.<br>
  <sup>7</sup> Ibid.<br>
  <sup>8</sup> Ibid.: 357.<br>
  <sup>9</sup> 同2: 326—329.<br>
</blockquote>


## [324peoples-publishing-house.csl]

人民出版社书稿样式，在 [311social-sciences-in-china.csl] 的基础上修改。

显示效果：

<blockquote>
  <sup>1</sup> 李铁映：《中国经济改革的双重探索》，《经济研究》2004年第2期。<br>
  <sup>2</sup> 国际货币基金组织：《国际资本市场发展、前景和政策》中译本，中国金融出版社1996年版，第116页。<br>
  <sup>3</sup> Steinberg, Richard H., “In the Shadow of Law or Power? Consensus-Based Bargaining and Outcomes in the GATT/WTO”, <i>International Organization</i>, Vol.56, No.2, Spring 2001, pp.339-374.<br>
  <sup>4</sup> Preeg, Ernest H., <i>Traders in a Brave New World: The Uruguay Round and the Future of the International Trading System</i>, Chicago, IL: University of Chicago Press, 1995, p.234.<br>
</blockquote>


## [325educational-history-studies.csl]

[教育史研究](https://kns.cnki.net/KCMS/detail/detail.aspx?dbcode=CJFD&dbname=CJFDLAST2020&filename=JYUY202001020)样式。在 [social-sciences-in-china.csl](http://www.zotero.org/styles/social-sciences-in-china) 基础上修改。

显示效果：

<blockquote>
  <sup>1</sup> 布鲁纳著，邵瑞珍、张渭城译：《布鲁纳教育论著选》，人民教育出版社，2018年，第35—36页。<br>
  <sup>2</sup> 廖哲勋：《实事求是地评价普通高中新课程改革》，《课程·教材·教法》2010年第9期。<br>
  <sup>3</sup> Burton J. Bledstein. The Culture of Professionalism: The Middle Class and the Development of Higher Education in America. New York: W. W. Norton &#38; Company, Inc. 1976. pp. 33-39.<br>
  <sup>4</sup> Alexander J. Inglis. The Socialization of the High School. Teachers College Record, 1915, 16(3). p. 216.<br>
</blockquote>


## [401cas-like-thesis.csl]

[cas-like-thesis](http://yjs.hzau.edu.cn/info/1202/3774.htm)样式。

显示效果：

<blockquote>
  （库恩, 2012）<br>
  （Fourney, c1971）<br>
  （贾东琴 和柯平, 2011）<br>
  （Fan and Sommers, 2013）<br>
  （武丽丽 等, 2008）<br>
  （Myburg et al, 2014）<br>
  （中国互联网络信息中心, 2012; Bawden, 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">1. Fourney ME. Advances in holographic photoelasticity//New York: ASME, c1971: 17–38	</div>
    <div class="csl-entry">2. Fan X, Sommers CH. Food irradiation research and technology. 2 edition. Ames, Iowa: Blackwell Publishing, 2013: 25–26	</div>
    <div class="csl-entry">3. Myburg AA, Grattapaglia D, Tuskan GA, et al. The genome of eucalyptus grandis. <b>Nature</b>. 2014, 510: 356–362.	 </div>
    <div class="csl-entry">4. Bawden D. Origins and concepts of digital literacy(2008-05-04)	</div>
    <div class="csl-entry">5. 库恩. 科学革命的结构: 第 4 版. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012	</div>
    <div class="csl-entry">6. 贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究. 中国图书馆学会, 编//<b>中国图书馆学会年会论文集</b>. 北京: 国家图书馆出版社, 2011: 45–52	</div>
    <div class="csl-entry">7. 武丽丽, 华一新, 张亚军,  等. “北斗一号”监控管理网设计与实现. <b>测绘科学</b>. 2008, 33(5): 8–9	</div>
    <div class="csl-entry">8. 中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告. 	</div>
  </div>
</blockquote>


## [402cas-like-thesis-zotero-ask.csl]

[cas-like-thesisaa](http://yjs.hzau.edu.cn/info/1202/3774.htm)样式。

显示效果：

<blockquote>
  （库恩, 2012）<br>
  （Fourney ME, c1971）<br>
  （贾东琴和柯平, 2011）<br>
  （Fan X和Sommers CH, 2013）<br>
  （武丽丽等, 2008）<br>
  （Myburg AA等, 2014）<br>
  （中国互联网络信息中心, 2012; Bawden D, 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">1. Fourney ME. Advances in holographic photoelasticity//<b>Symposium on Applications of Holography in Mechanics</b>. New York: ASME, c1971: 17–38	</div>
    <div class="csl-entry">2. Fan X, Sommers CH. Food irradiation research and technology. 2 版本. Ames, Iowa: Blackwell Publishing, 2013: 25–26	</div>
    <div class="csl-entry">3. Myburg AA, Grattapaglia D, Tuskan GA, 等. The genome of eucalyptus grandis. <b>Nature</b>. 2014, 510: 356–362	</div>
    <div class="csl-entry">4. Bawden D. Origins and concepts of digital literacy(2008-05-04)	</div>
    <div class="csl-entry">5. 库恩. 科学革命的结构: 第 4 版. 金吾伦, 胡新和, 译. 2 版本. 北京: 北京大学出版社, 2012	</div>
    <div class="csl-entry">6. 贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究. 中国图书馆学会, 编//<b>中国图书馆学会年会论文集</b>. 北京: 国家图书馆出版社, 2011: 45–52	</div>
    <div class="csl-entry">7. 武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现. <b>测绘科学</b>. 2008, 33(5): 8–9	</div>
    <div class="csl-entry">8. 中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告. 	</div>
  </div>
</blockquote>


## [403huazhong-agricultural-university.csl]

[407nanjing-agricultural-university-old.csl] 的修改版，适用于华中农业大学
学位论文，规则见 <http://yjs.hzau.edu.cn/info/1202/3774.htm>，正文中为作者年代格式，文末列表为数字格式。
中文文献排在前面，英文文献排在后面（需要在条目中将 `language` 英文设为 `en-US`，中文为`zh-CN`，否则无法实现按语言排序）。作者为首字母大写，支持中文作者超过 `20` 个为“`等`”，英文为“`et al`”。文章的题目大小写与 `Zotero` 中的 `Title` 字段一致，不显示 `URL` 和 `DOI`。英文期刊名称为斜体，缩写（需要将期刊缩写放在 `Zotero` 条目 `Info` 的 `Journal Abbr` 的字段才会缩写）。待提供更多文献类型进行测试。

显示效果：

<blockquote>
  （库恩 2012）<br>
  （Fourney c1971）<br>
  （贾东琴和柯平 2011）<br>
  （Fan and Sommers 2013）<br>
  （武丽丽等 2008）<br>
  （Myburg et al 2014）<br>
  （中国互联网络信息中心 2012, Bawden 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">1.	贾东琴，柯平．面向数字素养的高校图书馆数字服务体系研究．中国图书馆学会, 编//中国图书馆学会年会论文集．北京: 国家图书馆出版社, 2011: 45–52</div>
    <div class="csl-entry">2.	库恩．科学革命的结构: 第 4 版．金吾伦, 胡新和, 译．2 版．北京: 北京大学出版社, 2012</div>
    <div class="csl-entry">3.	武丽丽，华一新，张亚军，刘英敏．“北斗一号”监控管理网设计与实现．测绘科学，2008，33:8–9</div>
    <div class="csl-entry">4.	中国互联网络信息中心．第 29 次中国互联网络发展现状统计报告．</div>
    <div class="csl-entry">5.	Bawden D. Origins and concepts of digital literacy(2008-05-04)</div>
    <div class="csl-entry">6.	Fan X, Sommers CH. Food irradiation research and technology. 2 edition. Ames, Iowa: Blackwell Publishing, 2013: 25–26</div>
    <div class="csl-entry">7.	Fourney ME. Advances in holographic photoelasticity//New York: ASME, c1971: 17–38</div>
    <div class="csl-entry">8.	Myburg AA, Grattapaglia D, Tuskan GA, Hellsten U, Hayes RD, Grimwood J, Jenkins J, Lindquist E, Tice H, Bauer D, Goodstein DM, Dubchak I, Poliakov A, Mizrachi E, Kullan ARK, Hussey SG, Pinard D, van der Merwe K, Singh P, van Jaarsveld I, et al. The genome of eucalyptus grandis. <i>Nature</i>. 2014, 510:356–362. </div>
  </div>
</blockquote>


## [404jinan-university.csl]

[4zhongnan-university-of-economics-and-law] 基础上修改。暨南大学学位论文样式，正文中作者年代格式，文末序号，英文文献在前，中文在后，显示全部作者。

显示效果：

<blockquote>
  （库恩, 2012）<br>
  （Fourney, c1971）<br>
  （贾东琴和柯平, 2011）<br>
  （Fan &#38; Sommers, 2013）<br>
  （武丽丽等, 2008）<br>
  （Myburg et al., 2014）<br>
  （中国互联网络信息中心, 2012; Bawden, 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会, 编//中国图书馆学会年会论文集, 北京: 国家图书馆出版社, 2011: 45–52.</div>
    <div class="csl-entry">[2]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[3]	武丽丽, 华一新, 张亚军, 刘英敏. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8–9.</div>
    <div class="csl-entry">[4]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. .</div>
    <div class="csl-entry">[5]	Bawden D. Origins and concepts of digital literacy[EB](2008-05-04).</div>
    <div class="csl-entry">[6]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2 edition. Ames, Iowa: Blackwell Publishing, 2013: 25–26.</div>
    <div class="csl-entry">[7]	Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, New York: ASME, c1971: 17–38.</div>
    <div class="csl-entry">[8]	Myburg A A, Grattapaglia D, Tuskan G A, Hellsten U, Hayes R D, Grimwood J, Jenkins J, Lindquist E, Tice H, Bauer D, Goodstein D M, Dubchak I, Poliakov A, Mizrachi E, Kullan A R K, Hussey S G, Pinard D, van der Merwe K, Singh P, van Jaarsveld I, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356–362.</div>
  </div>
</blockquote>


## [405nanjing-agricultural-university-numeric.csl]

[南京农业大学研究生学位论文](https://grasch.njau.edu.cn/info/1011/4128.htm)新样式见[445nanjing-agricultural-university.csl]

南京农业大学学位论文用，在 [000gb-t-7714-2015-numeric-bilingual.csl] 基础上修改（原样式见[407nanjing-agricultural-university-old.csl]），作者为首字母大写，支持中文作者超过 `3` 个为“`等`”，英文为“`et al`”。文章的题目大小写与 `Zotero` 中的 `Title` 字段一致，不显示 `URL` （在线报告、网页条目如果有`URL`不空则显示`URL`）和 `DOI`。如果引用国家标准，可以将文献类型设为 `Bill`，`Code` 中填入出版地和出版社，如`北京：中国标准出版社`，`Code Pages` 中填入引用的页码。`专著`（`Book`）可添加`页码`，放入`Zotero 总页数`（`# of Pages`）字段中。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
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
</blockquote>


## [406nanjing-agricultural-university-author-date.csl]

南京农业大学学位论文用（作者年代样式），[415zhejiang-university.csl]上修改。引文中文两个老者之间为`和`，英文为`and`，参考文献列表英文在前中文在后，支持中文作者超过 3 个为`等`，英文为`et al`。

显示效果：

<blockquote>
  （库恩，2012）<br>
  （Fourney, c1971）<br>
  （贾东琴和柯平，2011）<br>
  （Fan and Sommers, 2013）<br>
  （武丽丽等，2008）<br>
  （Myburg et al., 2014）<br>
  （Bawden, 2008; 中国互联网络信息中心，2012）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">Bawden D. Origins and concepts of digital literacy[EB](2008–05–04).</div>
    <div class="csl-entry">Fan X, Sommers C H. Food irradiation research and technology[M]. 2 edition. Ames, Iowa: Blackwell Publishing, 2013.25–26.</div>
    <div class="csl-entry">Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics. New York: ASME, c1971.17–38.</div>
    <div class="csl-entry">Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. <i><span style="font-style:normal;">Nature</span></i>, 2014, 510: 356–362.</div>
    <div class="csl-entry">贾东琴，柯平.面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会, 编//中国图书馆学会年会论文集. 北京: 国家图书馆出版社， 2011.45–52.</div>
    <div class="csl-entry">库恩.科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社， 2012.</div>
    <div class="csl-entry">武丽丽，华一新，张亚军，等.“北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8–9.</div>
    <div class="csl-entry">中国互联网络信息中心.第 29 次中国互联网络发展现状统计报告[R]. .</div>
  </div>
</blockquote>


## [407nanjing-agricultural-university-old.csl]

[南京农业大学（旧版）](http://grasch.njau.edu.cn/info/1011/1839.htm)样式。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2 edition. Ames, Iowa: Blackwell Publishing, 2013: 25–26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会 中国图书馆学会年会论文集. 北京: 国家图书馆出版社, 2011, 2011 年卷: 45–52.</div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics. New York: ASME, c1971: 17–38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8–9.</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356–362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R/OL].（2012-01-16）[2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>.</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [408nanjing-agricultural-university-online-first.csl]

与[407nanjing-agricultural-university-old.csl]

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2 edition. Ames, Iowa: Blackwell Publishing, 2013: 25–26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会, 编//中国图书馆学会年会论文集. 国家图书馆出版社, 2011, 2011 年卷: 45–52.</div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics. ASME, c1971: 17–38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8–9.</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356–362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R].（2012-01-16）. [2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>.</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [409northwest-a-and-f-university.csl]

《[西北农林科技大学研究生学位论文撰写规范指导意见](https://yjshy.nwafu.edu.cn/xwgl/xwsy/xwlwxzgf/8ae4dda6e6be4ac6895f509d84bc68c3.htm)》（2024-03-14）附件2. 参考文献著录规则。在 [011gb-t-7714-2015-author-date-bilingual-no-uppercase-no-url-doi-full-width-parentheses.csl] 的基础上修改。

显示效果：

<blockquote>
  （库恩 2012）<br>
  （Fourney c1971）<br>
  （贾东琴和柯平 2011）<br>
  （Fan and Sommers 2013）<br>
  （武丽丽等 2008）<br>
  （Myburg et al. 2014）<br>
  （中国互联网络信息中心 2012; Bawden 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">贾东琴,柯平.2011.面向数字素养的高校图书馆数字服务体系研究[C].中国图书馆学会年会论文集:2011 年卷,45-52.</div>
    <div class="csl-entry">库恩.2012.科学革命的结构: 第 4 版[M].2版.金吾伦,胡新和译.北京:北京大学出版社.</div>
    <div class="csl-entry">武丽丽,华一新,张亚军,刘英敏.2008.“北斗一号”监控管理网设计与实现[J].测绘科学,33(5):8-9.</div>
    <div class="csl-entry">中国互联网络信息中心.2012.第 29 次中国互联网络发展现状统计报告[R].</div>
    <div class="csl-entry">Bawden D. 2008. Origins and concepts of digital literacy[EB/OL]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
    <div class="csl-entry">Fan X, Sommers CH. 2013. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing.</div>
    <div class="csl-entry">Fourney ME. c1971. Advances in holographic photoelasticity[C]. Symposium on Applications of Holography in Mechanics, pp. 17-38.</div>
    <div class="csl-entry">Myburg AA, Grattapaglia D, Tuskan GA, Hellsten U, Hayes RD, Grimwood J, Jenkins J, Lindquist E, Tice H, Bauer D, Goodstein DM, Dubchak I, Poliakov A, Mizrachi E, Kullan ARK, Hussey SG, Pinard D, van der Merwe K, Singh P, van Jaarsveld I, Silva-Junior OB, Togawa RC, Pappas MR, Faria DA, Sansaloni CP, Petroli CD, Yang X, Ranjan P, Tschaplinski TJ, Ye CY, Li T, Sterck L, Vanneste K, Murat F, Soler M, Clemente HS, Saidi N, Cassan-Wang H, Dunand C, Hefer CA, Bornberg-Bauer E, Kersting AR, Vining K, Amarasinghe V, Ranik M, Naithani S, Elser J, Boyd AE, Liston A, Spatafora JW, Dharmwardhana P, Raja R, Sullivan C, Romanel E, Alves-Ferreira M, Külheim C, Foley W, Carocha V, Paiva J, Kudrna D, Brommonschenkel SH, Pasquali G, Byrne M, Rigault P, Tibbits J, Spokevicius A, Jones RC, Steane DA, Vaillancourt RE, Potts BM, Joubert F, Barry K, Pappas GJ, Strauss SH, Jaiswal P, Grima-Pettenati J, Salse J, Van de Peer Y, Rokhsar DS, Schmutz J. 2014. The genome of eucalyptus grandis[J]. Nature, 510: 356-362.</div>
  </div>
</blockquote>


## [410shanghai-jiao-tong-university.csl]

[上海交通大学](https://gk.sjtu.edu.cn/Data/View/648)样式。在 [china-national-standard-gb-t-7714-2015-numeric.csl](http://www.zotero.org/styles/china-national-standard-gb-t-7714-2015-numeric) 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	X Fan, C H Sommers. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	M E Fourney. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	A A Myburg, D Grattapaglia, G A Tuskan, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. (2012-01-16).</div>
    <div class="csl-entry">[8]	D Bawden. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [411southwest-university.csl]

网友**洋芋**（__chivele.lee@gmail.com__）分享，[西南大学学位论文](http://pgs.swu.edu.cn/info/1052/2292.htm
)样式，正文中两个中文作者之间为“`和`”，英文作者为“`and`”。参考文献列表中文文献排在前面，英文文献排在后面（需要在条目中将 `language` 英文设为 `en-US`，中文为`zh-CN`，否则无法实现按语言排序）。英文期刊名称为斜体。支持中文作者超过 3 个为“`等`”，英文为“`et al`”。

显示效果：

<blockquote>
  （库恩, 2012）<br>
  （Fourney, c1971）<br>
  （贾东琴和柯平, 2011）<br>
  （Fan &#38; Sommers, 2013）<br>
  （武丽丽等, 2008）<br>
  （Myburg et al., 2014）<br>
  （中国互联网络信息中心, 2012; Bawden, 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会, 编. 北京: 国家图书馆出版社, 2011: 45-522011, 2011 年卷: 45-52.</div>
    <div class="csl-entry">库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J/OL]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R/OL]. .</div>
    <div class="csl-entry">Bawden D. Origins and concepts of digital literacy[EB/OL](2008-05-04).</div>
    <div class="csl-entry">Fan X, Sommers C H. Food irradiation research and technology[M/OL]. 2 edition. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">Fourney M E. Advances in holographic photoelasticity[C]. New York: ASME, c1971: 17-38c1971: 17-38.</div>
    <div class="csl-entry">Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J/OL]. <i>Nature</i>, 2014, 510: 356-362.</div>
  </div>
</blockquote>


## [412tsinghua-university-author-date.csl]

[清华大学（著者-出版年）](http://yjsy.cic.tsinghua.edu.cn/docinfo/board/boarddetail.jsp?columnId=001050603&parentColumnId=0010506&itemSeq=5365)样式。在 [china-national-standard-gb-t-7714-2015-author-date.csl](http://www.zotero.org/styles/china-national-standard-gb-t-7714-2015-author-date) 基础上修改。

显示效果：

<blockquote>
  (汪冰, 1997)<br>
  (杨宗英, 1996)<br>
  (Baker et al., 1995)<br>
  (Crane, 1972)<br>
  (Jha et al., 2004)<br>
  (Kennedy et al., 1975)<br>
  (Stieg, 1981)<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">汪冰, 1997. 电子图书馆理论与实践研究[M]. 北京: 北京图书馆出版社: 16.</div>
    <div class="csl-entry">杨宗英, 1996. 电子图书馆的现实模型[J]. 中国图书馆学报(2): 24-29.</div>
    <div class="csl-entry">Baker S K, Jackson M E, 1995. The future of resource sharing[M]. New York: The Haworth Press.</div>
    <div class="csl-entry">Crane D, 1972. Invisible college[M]. Chicago: Univ. of Chicago Press.</div>
    <div class="csl-entry">Jha M, Gassman P W, Secchi S, et al., 2004. Effect of watershed subdivision on SWAT flow, sediment, and nutrient predictions[J/OL]. JAWRA Journal of the American Water Resources Association, 40(3): 811-825. DOI:<a href="https://doi.org/10/bj78p4">10/bj78p4</a>.</div>
    <div class="csl-entry">Kennedy W J, Garrison R E, 1975. Morphology and genesis of nodular chalks and hardgrounds in the Upper Cretaceous of southern England[J/OL]. Sedimentology, 22: 311. DOI:<a href="https://doi.org/10.1111/j.1365-3091.1975.tb01637.x">10.1111/j.1365-3091.1975.tb01637.x</a>.</div>
    <div class="csl-entry">Stieg M F, 1981. The information needs of historians[J/OL]. College &#38; Research Libraries, 42(6): 549-560. DOI:<a href="https://doi.org/10.5860/crl_42_06_549">10.5860/crl_42_06_549</a>.</div>
  </div>
</blockquote>


## [413tsinghua-university-numeric.csl]

[清华大学（顺序编码）](http://yjsy.cic.tsinghua.edu.cn/docinfo/board/boarddetail.jsp?columnId=001050603&parentColumnId=0010506&itemSeq=5365)样式。在 [china-national-standard-gb-t-7714-2015-numeric.csl](http://www.zotero.org/styles/china-national-standard-gb-t-7714-2015-numeric) 基础上修改。

显示效果：

> <sup>[1–34]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	张昆, 冯立群, 余昌钰, 等. 机器人柔性手腕的球面齿轮设计研究[J]. 清华大学学报: 自然科学版, 1994, 34(2): 1-7.</div>
    <div class="csl-entry">[2]	竺可桢. 物理学论[M]. 北京: 科学出版社, 1973: 56-60.</div>
    <div class="csl-entry">[3]	Dupont B. Bone marrow transplantation in severe combined immunodeficiency with an unrelated MLC compatible donor[C]//White H J, Smith R. Proceedings of the third annual meeting of the International Society for Experimental Hematology. Houston: International Society for Experimental Hematology, 1974: 44-46.</div>
    <div class="csl-entry">[4]	郑开青. 通讯系统模拟及软件[D]. 北京: 清华大学无线电系, 1987.</div>
    <div class="csl-entry">[5]	中华人民共和国国家技术监督局. 中华人民共和国国家标准-量与单位: GB 3100—3102[S]. 北京: 中国标准出版社, 1994.</div>
    <div class="csl-entry">[6]	姜锡洲. 一种温热外敷药制备方案: 中国, 88105607.3[P]. 1980-07-26.</div>
    <div class="csl-entry">[7]	Merkt F, Mackenzie S R, Softley T P. Rotational autoionization dynamics in high rydberg states of nitrogen[J/OL]. The Journal of chemical physics, 1995, 103: 4509-4518. DOI:<a href="https://doi.org/10/c3dxcn">10/c3dxcn</a>.</div>
    <div class="csl-entry">[8]	Mellinger A, Vidal C R, Jungen C. Laser reduced fluorescence study of the carbon monoxide nd triplet Rydberg series - Experimental results and multichannel quantum defect analysis[J/OL]. The Journal of chemical physics, 1996, 104: 8913-8921. DOI:<a href="https://doi.org/10/cc8rc3">10/cc8rc3</a>.</div>
    <div class="csl-entry">[9]	Bixon M, Jortner J. The dynamics of predissociating high Rydberg states of NO[J/OL]. The Journal of chemical physics, 1996, 105: 1363-1382. DOI:<a href="https://doi.org/10/cth23q">10/cth23q</a>.</div>
    <div class="csl-entry">[10]	马辉, 李俭, 刘耀明, 等. 利用 REMPI 方法测量 BaF 高里德堡系列光谱[J]. 化学物理学报, 1995, 8: 308-311.</div>
    <div class="csl-entry">[11]	Carlson N W, Taylor A J, Jones K M, et al. Two-step polarization-labeling spectroscopy of excited states of Na2[J/OL]. Physical review. A, 1981, 24: 822-834. DOI:<a href="https://doi.org/10/bx9bbg">10/bx9bbg</a>.</div>
    <div class="csl-entry">[12]	Taylor A J, Jones K M, Schawlow A L. Scanning pulsed-polarization spectrometer applied to Na2[J/OL]. Journal of the Optical Society of America, 1983, 73: 994-998. DOI:<a href="https://doi.org/10/dv2fcd">10/dv2fcd</a>.</div>
    <div class="csl-entry">[13]	Taylor A J, Jones K M, Schawlow A L. A study of the excited 1Σg+ states in Na2[J/OL]. Optics communications, 1981, 39: 47-50. DOI:<a href="https://doi.org/10/csrhhm">10/csrhhm</a>.</div>
    <div class="csl-entry">[14]	Shimizu K, Shimizu F. Laser induced fluorescence spectra of the a 3Πu–X 1Σg+ band of Na2 by molecular beam[J/OL]. The Journal of chemical physics, 1983, 78: 1126-1131. DOI:<a href="https://doi.org/10/c4whdm">10/c4whdm</a>.</div>
    <div class="csl-entry">[15]	Atkinson J B, Becker J, Demtröder W. Experimental observation of the a 3Πu state of Na2[J/OL]. Chemical physics letters, 1982, 87: 92-97. DOI:<a href="https://doi.org/10/ct7r9b">10/ct7r9b</a>.</div>
    <div class="csl-entry">[16]	Kusch P, Hessel M M. Perturbations in the A 1Σu+ state of Na2[J/OL]. The Journal of chemical physics, 1975, 63: 4087-4088. DOI:<a href="https://doi.org/10/dz92nq">10/dz92nq</a>.</div>
    <div class="csl-entry">[17]	广西壮族自治区林业厅. 广西自然保护区[M]. 北京: 中国林业出版社, 1993.</div>
    <div class="csl-entry">[18]	霍斯尼. 谷物科学与工艺学原理[M]. 李庆龙, 译. 2 版. 北京: 中国食品出版社, 1989: 15-20.</div>
    <div class="csl-entry">[19]	王夫之. 宋论[M]. 刻本. 金陵: 曾氏, 1865.</div>
    <div class="csl-entry">[20]	赵耀东. 新时代的工业工程师[M/OL]. 台北: 天下文化出版社, 1998[1998-09-26]. <a href="http://www.ie.nthu.edu.tw/info/ie.newie.htm">http://www.ie.nthu.edu.tw/info/ie.newie.htm</a>.</div>
    <div class="csl-entry">[21]	全国信息与文献工作标准化技术委员会出版物格式分委员会. 图书书名页: GB/T 12450-2001[S]. 北京: 中国标准出版社, 2002: 1.</div>
    <div class="csl-entry">[22]	全国出版专业职业资格考试办公室. 全国出版专业职业资格考试辅导教材: 出版专业理论与实务•中级[M]. 2014 版. 上海: 上海辞书出版社, 2004: 299-307.</div>
    <div class="csl-entry">[23]	World Health Organization. Factors regulating the immune response: Report of WHO Scientific Group[R]. Geneva: WHO, 1970.</div>
    <div class="csl-entry">[24]	Peebles, Jr P Z. Probability, random variables, and random signal principles[M]. 4th ed. New York: McGraw Hill, 2001.</div>
    <div class="csl-entry">[25]	白书农. 植物开花研究[M]//李承森. 植物科学进展. 北京: 高等教育出版社, 1998: 146-163.</div>
    <div class="csl-entry">[26]	Weinstein L, Swertz M N. Pathogenic properties of invading microorganism[M]//Sodeman, Jr W A, Sodeman W A. Pathologic physiology: mechanisms of disease. Philadelphia: Saunders, 1974: 745-772.</div>
    <div class="csl-entry">[27]	韩吉人. 论职工教育的特点[C]//中国职工教育研究会. 职工教育研究论文集. 北京: 人民教育出版社, 1985: 90-99.</div>
    <div class="csl-entry">[28]	中国地质学会. 地质评论[J]. 1936, 1(1). 北京: 地质出版社, 1936.</div>
    <div class="csl-entry">[29]	中国图书馆学会. 图书馆学通讯[J]. 1957. 北京: 北京图书馆, 1957: 98-106.</div>
    <div class="csl-entry">[30]	American Association for the Advancement of Science. Science[J]. 1883, 1(1). Washington, D.C.: American Association for the Advancement of Science, 1883.</div>
    <div class="csl-entry">[31]	傅刚, 赵承, 李佳路. 大风沙过后的思考[N/OL]. 2000-04-12(14)[2002-03-06]. <a href="http://www.bjyouth.com.cn/Bqb/20000412/B/4216%5ED0412B1401.htm">http://www.bjyouth.com.cn/Bqb/20000412/B/4216%5ED0412B1401.htm</a>.</div>
    <div class="csl-entry">[32]	萧钰. 出版业信息化迈入快车道[EB/OL]. (2001-12-19)[2002-04-15]. <a href="http://www.creader.com/news/20011219/200112190019.htm">http://www.creader.com/news/20011219/200112190019.htm</a>.</div>
    <div class="csl-entry">[33]	Online Computer Library Center, Inc. About OCLC: History of cooperation[EB/OL]. [2000-01-08]. <a href="http://www.oclc.org/about/cooperation.en.htm">http://www.oclc.org/about/cooperation.en.htm</a>.</div>
    <div class="csl-entry">[34]	Scitor Corporation. Project scheduler[CP]. Sunnyvale, Calif.: Scitor Corporation, 1983.</div>
  </div>
</blockquote>


## [414yunnan-university.csl]

云南大学理科类参考文献样式，[010gb-t-7714-2015-author-date-bilingual-no-uppercase.csl] 基础上修改，网友 @Sunny-27 分享。文中引用中文两个作者之间为“和”，英文为 “et”。

显示效果：

<blockquote>
  （库恩，2012）<br>
  （Fourney，c1971）<br>
  （贾东琴和柯平，2011）<br>
  （Fan and Sommers，2013）<br>
  （武丽丽等，2008）<br>
  （Myburg et al.，2014）<br>
  （Bawden，2008；中国互联网络信息中心，2012）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">贾东琴, 柯平. 2011. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会, 编//中国图书馆学会年会论文集. 北京: 国家图书馆出版社: 45–52.</div>
    <div class="csl-entry">库恩. 2012. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社.</div>
    <div class="csl-entry">武丽丽, 华一新, 张亚军, 等. 2008. “北斗一号”监控管理网设计与实现[J]. 测绘科学. 33(5): 8–9.</div>
    <div class="csl-entry">中国互联网络信息中心. 2012. 第 29 次中国互联网络发展现状统计报告[R]. .</div>
    <div class="csl-entry">BAWDEN D. 2008. Origins and concepts of digital literacy[EB](2008–05–04).</div>
    <div class="csl-entry">FAN X, SOMMERS C H. 2013. Food irradiation research and technology[M]. 2 edition. Ames, Iowa: Blackwell Publishing: 25–26.</div>
    <div class="csl-entry">FOURNEY M E. c1971. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics. New York: ASME: 17–38.</div>
    <div class="csl-entry">MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. 2014. The genome of eucalyptus grandis[J]. Nature. 510: 356–362.</div>
  </div>
</blockquote>


## [415zhejiang-university.csl]

浙江大学学位论文样式（<http://grs.zju.edu.cn/redir.php?catalog_id=10038&object_id=12782>），
网友**yc**（__ycnotion@protonmail.com__）分享，
正文中作者年代格式，文末参考文献列表英文文献在前，中文在后，作者数量超过`3`个，英文显示为`et al`，中文显示`等`。

显示效果：

<blockquote>
  （库恩，2012）<br>
  （Fourney, c1971）<br>
  （贾东琴、柯平，2011）<br>
  （Fan &#38; Sommers, 2013）<br>
  （武丽丽等，2008）<br>
  （Myburg et al., 2014）<br>
  （Bawden, 2008; 中国互联网络信息中心，2012）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">Bawden D. Origins and concepts of digital literacy[EB](2008–05–04). </div>
    <div class="csl-entry">Fan X, Sommers C H. Food irradiation research and technology[M]. 2 edition. Ames, Iowa: Blackwell Publishing, 2013. 25–26. </div>
    <div class="csl-entry">Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics. New York: ASME, c1971. 17–38. </div>
    <div class="csl-entry">Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. <i><span style="font-style:normal;">Nature</span></i>, 2014, 510: 356–362. </div>
    <div class="csl-entry">贾东琴，柯平. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会, 编//中国图书馆学会年会论文集. 北京: 国家图书馆出版社，2011. 45–52. </div>
    <div class="csl-entry">库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社，2012. . </div>
    <div class="csl-entry">武丽丽，华一新，张亚军，等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8–9. </div>
    <div class="csl-entry">中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. . </div>
  </div>
</blockquote>


## [416zhongnan-university-of-economics-and-law.csl]

网友**李刚**（__gang.li.0814@gmail.com__）分享，[中南财经政法大学学位论文](http://yjsy.zuel.edu.cn/_upload/article/files/91/48/4c466ac54413adece8865a87def4/43ec08b9-9d6f-41fc-95a3-a78c054e51fb.pdf
)样式，中文文献排在前面，英文文献排在后面（需要在条目中将 `language` 英文设为 `en-US`，中文为`zh-CN`，否则无法实现按语言排序）。支持中文作者超过 3 个为“`等`”，英文为“`et al`”。

显示效果：

<blockquote>
  （库恩, 2012）<br>
  （Fourney, c1971）<br>
  （贾东琴和柯平, 2011）<br>
  （Fan and Sommers, 2013）<br>
  （武丽丽等, 2008）<br>
  （Myburg et al, 2014）<br>
  （中国互联网络信息中心, 2012; Bawden, 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1] 贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会, 编//中国图书馆学会年会论文集, 北京: 国家图书馆出版社, 2011: 45–52.	</div>
    <div class="csl-entry">[2] 库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.	</div>
    <div class="csl-entry">[3] 武丽丽, 华一新, 张亚军, 刘英敏. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8–9.	</div>
    <div class="csl-entry">[4] 中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. .	</div>
    <div class="csl-entry">[5] Bawden D. Origins and concepts of digital literacy[EB](2008-05-04).	</div>
    <div class="csl-entry">[6] Fan X, Sommers C H. Food irradiation research and technology[M]. 2 edition. Ames, Iowa: Blackwell Publishing, 2013: 25–26.	</div>
    <div class="csl-entry">[7] Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, New York: ASME, c1971: 17–38.	</div>
    <div class="csl-entry">[8] Myburg A A, Grattapaglia D, Tuskan G A, Hellsten U, Hayes R D, Grimwood J, Jenkins J, Lindquist E, Tice H, Bauer D, Goodstein D M, Dubchak I, Poliakov A, Mizrachi E, Kullan A R K, Hussey S G, Pinard D, van der Merwe K, Singh P, van Jaarsveld I, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356–362.	</div>
  </div>
</blockquote>


## [418huazhong-university-of-science-and-technology.csl]

[理工科-博士-华中科技大学学位论文参考模板.docx](http://gs.hust.edu.cn/info/1041/5462.htm)（2023-02-10 发布）样式：6 人以内须列出全部作者，6 人以上写 6 人再加“等”（英文加“et al.”）。

显示效果：

> <sup>[1–9]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	闫明礼, 张东刚. CFG桩复合地基技术及工程实践（第二版）. 北京: 中国水利水电出版社, 2006</div>
    <div class="csl-entry">[2]	M. Chalfie, S. Kain. Green fluorescent protein: properties, applications, and protocols. Hoboken, New Jersey: Wiley-Interscience, 1998</div>
    <div class="csl-entry">[3]	詹向红, 李德新. 中医药防治阿尔茨海默病实验研究述要. 中华中医药学刊, 2004, 22(11): 2094-2096</div>
    <div class="csl-entry">[4]	E. S. Lein, M. J. Hawrylycz, N. Ao, M. Ayres, A. Bensinger, A. Bernard, et al. Genome-wide atlas of gene expression in the adult mouse brain. Nature, 2007, 445(7124): 168-176</div>
    <div class="csl-entry">[5]	M. L. Bouxsein, S. K. Boyd, B. A. Christiansen, R. E. Guldberg, K. J. Jepsen, R. Müller. Guidelines for assessment of bone microstructure in rodents using micro-computed tomography. Journal of Bone and Mineral Research, 2010, 25(7): 1468-1486</div>
    <div class="csl-entry">[6]	S. Yamaki, M. Abet, M. Kawamata, M. Yoshizawa. Performance evaluation of phase-only correlation functions from the viewpoint of correlation Filters, in: 2018 Asia-Pacific Signal and Information Processing Association Annual Summit and Conference (APSIPA ASC), Honolulu, HI, USA, 12–15 Nov. 2018, IEEE, 2019: 1361-1364</div>
    <div class="csl-entry">[7]	T. Yao, J. Wan, P. Huang, X. He, F. Wu, C. Xie. Building efficient key-value stores via a lightweight compaction tree. ACM Transactions on Storage, 2018, 13(4): 1-28</div>
    <div class="csl-entry">[8]	刘加林, 刘乃安. 多功能一次性压舌板. 中国, 发明专利, ZL92214985.2, 1993</div>
    <div class="csl-entry">[9]	李清泉. 基于混合结构的三维GIS数据模型与空间分析研究[博士学位论文]. 武汉: 武汉测绘科技大学, 1998</div>
  </div>
</blockquote>


## [419beijing-normal-university.csl]

[北京师范大学](http://bs.bnu.edu.cn/docs/20150408171708698394.pdf)作者年代参考文献样式，[011gb-t-7714-2015-author-date-bilingual-no-uppercase-no-url-doi-full-width-parentheses.csl] 基础上修改，
正文中两个中文作者之间为`和`，英文为`&`。

显示效果：

<blockquote>
  （库恩, 2012）<br>
  （Fourney, c1971）<br>
  （贾东琴和柯平, 2011）<br>
  （Fan &#38; Sommers, 2013）<br>
  （武丽丽 等, 2008）<br>
  （Myburg et al., 2014）<br>
  （中国互联网络信息中心, 2012; Bawden, 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">贾东琴, 柯平, 2011. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社: 45-52.</div>
    <div class="csl-entry">库恩, 2012. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社.</div>
    <div class="csl-entry">武丽丽, 华一新, 张亚军, 等, 2008. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 33(5): 8-9.</div>
    <div class="csl-entry">中国互联网络信息中心, 2012. 第 29 次中国互联网络发展现状统计报告[R].</div>
    <div class="csl-entry">Bawden D, 2008. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
    <div class="csl-entry">Fan X, Sommers C H, 2013. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing: 25-26.</div>
    <div class="csl-entry">Fourney M E, c1971. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME: 17-38.</div>
    <div class="csl-entry">Myburg A A, Grattapaglia D, Tuskan G A, et al., 2014. The genome of eucalyptus grandis[J]. Nature, 510: 356-362.</div>
  </div>
</blockquote>


## [420beihang-university.csl]

[北京航空航天大学](http://graduate.buaa.edu.cn/info/1039/7831.htm)作者年代参考文献样式，
[017gb-t-7714-2005-numeric-bilingual.csl]基础上修改，作者首字母大写，题目词首字母大写，结尾无点。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012</div>
    <div class="csl-entry">[2]	Fan X., Sommers C. H. Food Irradiation Research and Technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[A]. 中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷[C]. 北京: 国家图书馆出版社, 2011: 45-52</div>
    <div class="csl-entry">[4]	Fourney M. E. Advances in Holographic Photoelasticity[A]. Symposium on Applications of Holography in Mechanics, August 23—25, 1971, University of Southern California, Los Angeles, California[C]. New York: ASME, c1971: 17-38</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008,33(5): 8-9</div>
    <div class="csl-entry">[6]	Myburg A. A., Grattapaglia D., Tuskan G. A., et al. The Genome of Eucalyptus Grandis[J]. Nature, 2014,510: 356-362</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012</div>
    <div class="csl-entry">[8]	Bawden D. Origins and Concepts of Digital Literacy[EB/OL]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>, 2008-05-04/2013-03-08</div>
  </div>
</blockquote>


## [421hebei-agricultural-university.csl]

[河北农业大学](https://www.hebau.edu.cn/)学位论文参考文献样式。


## [422chinese-academy-of-agricultural-sciences.csl]

[中国农业科学院](https://gs.caas.cn/xwxk/xwsy/227175.htm)作者年代学位论文参考文献样式，按著者字顺和出版年排序
中文文献在前，按汉语拼音升序排序，英文文献在后，按字母升序排序。使用时需要将英文条目语言改为`en-US`，中文改为`zh-CN`。

显示效果：

<blockquote>
  （全国信息与文献标准化技术委员会, 2010）<br>
  （中国造纸学会, 2003）<br>
  （CHEN F F, 2016）<br>
  （刘彻东, 1998）<br>
  （余建斌, 2013）<br>
  （邓一刚, 2006）<br>
  （西安电子科技大学, 2002）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">邓一刚, 2006. 全智能节电器: 200610171314.3.</div>
    <div class="csl-entry">刘彻东, 1998. 中国的青年刊物:个性特色为本. 中国出版(5): 38-39.</div>
    <div class="csl-entry">全国信息与文献标准化技术委员会, 2010. 信息与文献 都柏林核心元数 据元素集: GB/T 25100-2010. 北京: 中国标准出版社: 2-3.</div>
    <div class="csl-entry">西安电子科技大学, 2002. 光折变自适应光外差探测方法: 01128777.2.</div>
    <div class="csl-entry">余建斌, 2013. 我们的科技一直在追赶: 访中国工程院院长周济. 人民日报, 2013.</div>
    <div class="csl-entry">中国造纸学会, 2003. 中国造纸年鉴. 北京: 中国轻工业出版社.</div>
    <div class="csl-entry">CHEN F F, 2016. 等离子体物理学导论. 北京: 科学出版社: 29.</div>
  </div>
</blockquote>


## [423ningbo-university.csl]

[宁波大学](http://graduate.nbu.edu.cn/info/1049/15542.htm)样式。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.

      <div class="csl-block">科学革命的结构</div>
  .</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M/OL]. 2 edition. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会, 编//中国图书馆学会年会论文集. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J/OL]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J/OL]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R/OL].</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB/OL].</div>
  </div>
</blockquote>


## [424harbin-university-of-science-and-technology.csl]

[哈尔滨理工大学](http://graduate.hrbust.edu.cn/info/1245/5420.htm)学位论文样式，**未经完整测试**。


## [425shenyang-agricultural-university.csl]

[沈阳农业大学](https://grs.syau.edu.cn/info/1173/5583.htm)学位论文样式，[403huazhong-agricultural-university.csl]基础上修改，中文两个作者之间为`与`，英文为`and`，作者首字母大写，参考文献表显示全部作者。

显示效果：

<blockquote>
  （库恩, 2012）<br>
  （Fourney, c1971）<br>
  （贾东琴与柯平, 2011）<br>
  （Fan and Sommers, 2013）<br>
  （武丽丽等, 2008）<br>
  （Myburg et al, 2014）<br>
  （Bawden, 2008, 中国互联网络信息中心, 2012）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">1. Bawden D. Origins and concepts of digital literacy(2008-05-04).	</div>
    <div class="csl-entry">2. Fan X, Sommers CH. Food irradiation research and technology. 2 edition. Ames, Iowa: Blackwell Publishing, 2013: 25–26.	</div>
    <div class="csl-entry">3. Fourney ME. Advances in holographic photoelasticity//New York: ASME, c1971: 17–38.	</div>
    <div class="csl-entry">4. Myburg AA, Grattapaglia D, Tuskan GA, Hellsten U, Hayes RD, Grimwood J, Jenkins J, Lindquist E, Tice H, Bauer D, Goodstein DM, Dubchak I, Poliakov A, Mizrachi E, Kullan ARK, Hussey SG, Pinard D, van der Merwe K, Singh P, van Jaarsveld I, et al. The genome of eucalyptus grandis. <i>Nature</i>. 2014, 510: 356–362. .	</div>
    <div class="csl-entry">5. 中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告. .	</div>
    <div class="csl-entry">6. 库恩. 科学革命的结构: 第 4 版. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.	</div>
    <div class="csl-entry">7. 武丽丽, 华一新, 张亚军, 刘英敏. “北斗一号”监控管理网设计与实现. 测绘科学. 2008, 33(5): 8–9.	</div>
    <div class="csl-entry">8. 贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究. 中国图书馆学会, 编//中国图书馆学会年会论文集. 北京: 国家图书馆出版社, 2011: 45–52.	</div>
  </div>
</blockquote>


## [426beijing-forestry-university.csl]

《[北京林业大学研究生学位论文写作指南](http://graduate.bjfu.edu.cn/xwgl/xwlw/349457.html)》（2023年修订）样式，在 [002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl] 基础上修改。

显示效果：

> <sup>[1–4]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	Jeon S H, Kim S, Kim D. Real-time Optimal Landing Control of the MIT Mini Cheetah[J]. arXiv preprint arXiv:2110.02799, 2021.</div>
    <div class="csl-entry">[2]	张三. 如何有效学习英语[EB]. 微信公众号“英语学习指南”, 2022-06-20.</div>
    <div class="csl-entry">[3]	Innfos. Robots[EB/OL]. 2020-01-01[2020-04-30]. <a href="https://innfos.com/">https://innfos.com/</a>.</div>
    <div class="csl-entry">[4]	萧钰. 出版业信息化迈入快车道[EB/OL]. 2001-12-19[2002-04-15]. <a href="http://www.reader.com/news/20011219/200112190019.html">http://www.reader.com/news/20011219/200112190019.html</a>.</div>
  </div>
</blockquote>


## [427university-of-electronic-science-and-technology-of-china.csl]

网友**不秃燃的小老弟**（__yanglun2019@126.com__）分享，[电子科技大学学位论文](https://gr.uestc.edu.cn/xiazai/114/3917/)样式，[404jinan-university.csl]基础上修改。
学位论文、报告、专利的地点补充到【地点/Place】字段，如[11]中的地点为南京。<br>
专著的页码补充到【存档位置/Loc.in Archive】字段，如[8]中的页码为520。<br>
专著和会议集中析出的文献的页码补充到【页数/Pages】字段，如[12]中的页码为220-226。<br>

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 2. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2. Ames, Iowa: Blackwell Publishing, 2013.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会年会论文集, 北京, 2011: 45-52.</div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity[C]. Symposium on Applications of Holography in Mechanics, New York, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB/OL](2008-05-04).</div>
  </div>
</blockquote>


## [428fujian-agriculture-and-forestry-university.csl]

网友**不秃燃的小老弟**（__yanglun2019@126.com__）分享，[福建农林大学学位论文](https://yjsy.fafu.edu.cn/fa/05/c8301a195077/page.htm)样式，[404jinan-university.csl]基础上修改。
学位论文、报告、专利的地点补充到【地点/Place】字段，如[11]中的地点为南京。<br>
专著的页码补充到【存档位置/Loc.in Archive】字段，如[8]中的页码为520。<br>
专著和会议集中析出的文献的页码补充到【页数/Pages】字段，如[12]中的页码为220-226。<br>

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M]. Ames, Iowa: Blackwell Publishing, 2013.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会年会论文集. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB/OL](2008-05-04).</div>
  </div>
</blockquote>


## [429guizhou-university.csl]

网友**不秃燃的小老弟**（__yanglun2019@126.com__）分享，[贵州大学学位论文](http://gs.gzu.edu.cn/2021/0518/c11830a151778/page.htm)样式，<br>
[201comparative-economic-and-social-systems.csl]基础上修改。参考文献表按照引用顺序编码并排序<br>
**注意**：学位论文、报告、专利的地点补充到【地点/Place】字段，如[11]中的地点为南京。<br>
专著的页码补充到【存档位置/Loc.in Archive】字段，如[8]中的页码为520。<br>
专著和会议集中析出的文献的页码补充到【页数/Pages】字段，如[12]中的页码为220-226。<br>

显示效果：

<blockquote>
  （库恩, 2012）<br>
  （Fourney, c1971）<br>
  （贾东琴和柯平, 2011）<br>
  （Fan &#38; Sommers, 2013）<br>
  （武丽丽等, 2008）<br>
  （Myburg et al., 2014）<br>
  （中国互联网络信息中心, 2012; Bawden, 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">1.	库恩. 科学革命的结构: 第 4 版[M]. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">2.	Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics. New York: ASME, c1971: 17–38.</div>
    <div class="csl-entry">3.	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会年会论文集. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">4.	Fan X, Sommers C H. Food irradiation research and technology[M]. Ames, Iowa: Blackwell Publishing, 2013.</div>
    <div class="csl-entry">5.	武丽丽, 华一新, 张亚军, 刘英敏. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">6.	Myburg A A, Grattapaglia D, Tuskan G A, Hellsten U, Hayes R D, Grimwood J, Jenkins J, Lindquist E, Tice H, Bauer D, Goodstein D M, Dubchak I, Poliakov A, Mizrachi E, Kullan A R K, Hussey S G, Pinard D, van der Merwe K, Singh P, van Jaarsveld I, Silva-Junior O B, Togawa R C, Pappas M R, Faria D A, Sansaloni C P, Petroli C D, Yang X, Ranjan P, Tschaplinski T J, Ye C-Y, Li T, Sterck L, Vanneste K, Murat F, Soler M, Clemente H S, Saidi N, Cassan-Wang H, Dunand C, Hefer C A, Bornberg-Bauer E, Kersting A R, Vining K, Amarasinghe V, Ranik M, Naithani S, Elser J, Boyd A E, Liston A, Spatafora J W, Dharmwardhana P, Raja R, Sullivan C, Romanel E, Alves-Ferreira M, Külheim C, Foley W, Carocha V, Paiva J, Kudrna D, Brommonschenkel S H, Pasquali G, Byrne M, Rigault P, Tibbits J, Spokevicius A, Jones R C, Steane D A, Vaillancourt R E, Potts B M, Joubert F, Barry K, Pappas G J, Strauss S H, Jaiswal P, Grima-Pettenati J, Salse J, Van de Peer Y, Rokhsar D S, Schmutz J. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356–362.</div>
    <div class="csl-entry">7.	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告2012.</div>
    <div class="csl-entry">8.	Bawden D. Origins and concepts of digital literacy(2008-05-04)[03/08/2013].</div>
  </div>
</blockquote>


## [430hainan-university.csl]

网友**不秃燃的小老弟**（__yanglun2019@126.com__）分享，[海南大学学位论文](https://www.doc88.com/p-1813465766850.html)样式，[404jinan-university.csl]基础上修改。<br>
参考文献表部分按照中文文献排在前面，英文文献排在后面，并按第一作者的姓氏首字母排序。<br>
**注意**：学位论文、报告、专利的地点补充到【地点/Place】字段，如[2]中的地点为南京。<br>
专著的页码补充到【存档位置/Loc.in Archive】字段，如[11]中的页码为520。<br>
专著和会议集中析出的文献的页码补充到【页数/Pages】字段，如[6]中的页码为220-226。<br>

显示效果：

<blockquote>
  （库恩, 2012）<br>
  （Fourney, c1971）<br>
  （贾东琴和柯平, 2011）<br>
  （Fan and Sommers, 2013）<br>
  （武丽丽等, 2008）<br>
  （Myburg et al., 2014）<br>
  （中国互联网络信息中心, 2012; Bawden, 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[A]. 中国图书馆学会年会论文集[C]. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[2]	库恩. 科学革命的结构: 第 4 版[M]. 2. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[3]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[4]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
    <div class="csl-entry">[5]	Bawden D. Origins and concepts of digital literacy[Z](2008-05-04).</div>
    <div class="csl-entry">[6]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2. Ames, Iowa: Blackwell Publishing, 2013.</div>
    <div class="csl-entry">[7]	Fourney M E. Advances in holographic photoelasticity[A]. Symposium on Applications of Holography in Mechanics[C]. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[8]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
  </div>
</blockquote>


## [431hohai-university.csl]

网友**不秃燃的小老弟**（__yanglun2019@126.com__）分享，[河海大学学位论文](https://gs.hhu.edu.cn/_upload/article/files/30/7d/e5eafe3b4ef28e40f4569d9f928b/8ce9b41e-9c28-44e4-81a5-fff20722ab93.pdf)样式，<br>
[china-national-standard-gb-t-7714-2015-numeric.csl]基础上修改。<br>
学位论文、报告、专利的地点补充到【地点/Place】字段，如[11]中的地点为南京。<br>
专著的页码补充到【存档位置/Loc.in Archive】字段，如[8]中的页码为520。<br>
专著和会议集中析出的文献的页码补充到【页数/Pages】字段，如[12]中的页码为220-226。<br>

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M]. Ames, Iowa: Blackwell Publishing, 2013.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会年会论文集. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 刘英敏. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, Hellsten U, Hayes R D, Grimwood J, Jenkins J, Lindquist E, Tice H, Bauer D, Goodstein D M, Dubchak I, Poliakov A, Mizrachi E, Kullan A R K, Hussey S G, Pinard D, van der Merwe K, Singh P, van Jaarsveld I, Silva-Junior O B, Togawa R C, Pappas M R, Faria D A, Sansaloni C P, Petroli C D, Yang X, Ranjan P, Tschaplinski T J, Ye C Y, Li T, Sterck L, Vanneste K, Murat F, Soler M, Clemente H S, Saidi N, Cassan-Wang H, Dunand C, Hefer C A, Bornberg-Bauer E, Kersting A R, Vining K, Amarasinghe V, Ranik M, Naithani S, Elser J, Boyd A E, Liston A, Spatafora J W, Dharmwardhana P, Raja R, Sullivan C, Romanel E, Alves-Ferreira M, Külheim C, Foley W, Carocha V, Paiva J, Kudrna D, Brommonschenkel S H, Pasquali G, Byrne M, Rigault P, Tibbits J, Spokevicius A, Jones R C, Steane D A, Vaillancourt R E, Potts B M, Joubert F, Barry K, Pappas G J, Strauss S H, Jaiswal P, Grima-Pettenati J, Salse J, Van de Peer Y, Rokhsar D S, Schmutz J. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB/OL](2008-05-04).</div>
  </div>
</blockquote>


## [432east-china-normal-university.csl]

网友**不秃燃的小老弟**（__yanglun2019@126.com__）分享，[华东师范大学学位论文](http://phy.ecnu.edu.cn/c2/3f/c24394a246335/page.htm)样式，<br>
[404jinan-university.csl]基础上修改。英文文献排在前面，中文文献排在后面，<br>
并按第一作者的姓氏首字母排序。文献条目语言字段：中文文献设为zh-CN，英文文献设为en-US。<br>
学位论文、报告、专利的地点补充到【地点/Place】字段，如第二篇文献中的地点为南京。<br>
专著和会议集中析出的文献的页码补充到【页数/Pages】字段，如倒数第二篇文献的页码为220-226。<br>

显示效果：

<blockquote>
  （库恩, 2012）<br>
  （Fourney, c1971）<br>
  （贾东琴和柯平, 2011）<br>
  （Fan and Sommers, 2013）<br>
  （武丽丽等, 2008）<br>
  （Myburg et al., 2014）<br>
  （中国互联网络信息中心, 2012; Bawden, 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent second-field-align-flush">
    <div class="csl-entry">Bawden D. Origins and concepts of digital literacy[EB](2008-05-04)	</div>
    <div class="csl-entry">Fan X, Sommers C H. Food irradiation research and technology[M]. 2 edition. Ames, Iowa: Blackwell Publishing, 2013: 25–26	</div>
    <div class="csl-entry">Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, New York: ASME, c1971: 17–38	</div>
    <div class="csl-entry">Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356–362	</div>
    <div class="csl-entry">贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会, 编//中国图书馆学会年会论文集, 北京: 国家图书馆出版社, 2011: 45–52	</div>
    <div class="csl-entry">库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012	</div>
    <div class="csl-entry">武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8–9	</div>
    <div class="csl-entry">中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 	</div>
  </div>
</blockquote>


## [433jiangxi-university-of-finance-and-economics.csl]

网友**不秃燃的小老弟**（__yanglun2019@126.com__）分享，[江西财经大学学位论文](http://grs.jxufe.edu.cn/news-show-3761.html)样式，[404jinan-university.csl]基础上修改。<br>
参考文献表部分按照中文文献排在前面，英文文献排在后面，并按第一作者的姓氏首字母排序。<br>
**注意**：学位论文、报告、专利的地点补充到【地点/Place】字段，如[2]中的地点为南京。<br>
专著的页码补充到【存档位置/Loc.in Archive】字段，如[11]中的页码为520。<br>
专著和会议集中析出的文献的页码补充到【页数/Pages】字段，如[6]中的页码为220-226。<br>

显示效果：

<blockquote>
  （库恩，2012）<br>
  （Fourney，c1971）<br>
  （贾东琴和柯平，2011）<br>
  （Fan and Sommers，2013）<br>
  （武丽丽等，2008）<br>
  （Myburg et al.，2014）<br>
  （中国互联网络信息中心，2012; Bawden，2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会年会论文集. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[2]	库恩. 科学革命的结构: 第 4 版[M]. 2. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[3]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[4]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
    <div class="csl-entry">[5]	Bawden D. Origins and concepts of digital literacy[EB/OL](2008-05-04).</div>
    <div class="csl-entry">[6]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2. Ames, Iowa: Blackwell Publishing, 2013.</div>
    <div class="csl-entry">[7]	Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[8]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
  </div>
</blockquote>


## [434shandong-agricultural-university.csl]

网友**不秃燃的小老弟**（__yanglun2019@126.com__）分享，[山东农业大学学位论文](http://yjsc.sdau.edu.cn/info/46/117.htm)样式，<br>
[201comparative-economic-and-social-systems.csl]基础上修改。引文的*et al*为斜体。<br>
中文文献排在前面，英文文献排在后面，并按第一作者的姓氏首字母排序。<br>
**注意**：学位论文、报告、专利的地点补充到【地点/Place】字段，如第二篇文献的地点为南京。<br>
专著的页码补充到【存档位置/Loc.in Archive】字段，如倒数第二篇文献的页码为520。<br>
专著和会议集中析出的文献的页码补充到【页数/Pages】字段，如第六篇文献的页码为220-226。<br>

显示效果：

<blockquote>
  （库恩，2012）<br>
  （Fourney，c1971）<br>
  （贾东琴和柯平，2011）<br>
  （Fan and Sommers，2013）<br>
  （武丽丽等，2008）<br>
  （Myburg <i>et al.</i>，2014）<br>
  （中国互联网络信息中心，2012; Bawden，2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent second-field-align-flush">
    <div class="csl-entry">贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会年会论文集. 北京: 国家图书馆出版社, 2011: 45-52	</div>
    <div class="csl-entry">库恩. 科学革命的结构: 第 4 版[M]. 北京: 北京大学出版社, 2012	</div>
    <div class="csl-entry">武丽丽, 华一新, 张亚军, 刘英敏. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9	</div>
    <div class="csl-entry">中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告2012	</div>
    <div class="csl-entry">Bawden D. Origins and concepts of digital literacy(2008-05-04)[03/08/2013]	</div>
    <div class="csl-entry">Fan X., Sommers C. H. Food irradiation research and technology[M]. Ames, Iowa: Blackwell Publishing, 2013	</div>
    <div class="csl-entry">Fourney M. E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics. New York: ASME, c1971: 17–38	</div>
    <div class="csl-entry">Myburg A. A., Grattapaglia D., Tuskan G. A., Hellsten U., Hayes R. D., Grimwood J., Jenkins J., Lindquist E., Tice H., Bauer D., Goodstein D. M., Dubchak I., Poliakov A., Mizrachi E., Kullan A. R. K., Hussey S. G., Pinard D., van der Merwe K., Singh P., van Jaarsveld I., Silva-Junior O. B., Togawa R. C., Pappas M. R., Faria D. A., Sansaloni C. P., Petroli C. D., Yang X., Ranjan P., Tschaplinski T. J., Ye C.-Y., Li T., Sterck L., Vanneste K., Murat F., Soler M., Clemente H. S., Saidi N., Cassan-Wang H., Dunand C., Hefer C. A., Bornberg-Bauer E., Kersting A. R., Vining K., Amarasinghe V., Ranik M., Naithani S., Elser J., Boyd A. E., Liston A., Spatafora J. W., Dharmwardhana P., Raja R., Sullivan C., Romanel E., Alves-Ferreira M., Külheim C., Foley W., Carocha V., Paiva J., Kudrna D., Brommonschenkel S. H., Pasquali G., Byrne M., Rigault P., Tibbits J., Spokevicius A., Jones R. C., Steane D. A., Vaillancourt R. E., Potts B. M., Joubert F., Barry K., Pappas G. J., Strauss S. H., Jaiswal P., Grima-Pettenati J., Salse J., Van de Peer Y., Rokhsar D. S., Schmutz J. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356–362	</div>
  </div>
</blockquote>


## [435yangzhou-university.csl]

网友**不秃燃的小老弟**（__yanglun2019@126.com__）分享，[扬州大学学位论文](http://yjsc.yzu.edu.cn/info/1043/2151.htm)样式，<br>
[201comparative-economic-and-social-systems.csl]基础上修改。<br>
学位论文、报告、专利的地点补充到【地点/Place】字段，如[11]中的地点为南京。<br>
专著的页码补充到【存档位置/Loc.in Archive】字段，如[8]中的页码为520。<br>
专著和会议集中析出的文献的页码补充到【页数/Pages】字段，如[12]中的页码为220-226。<br>
对于英文文献中的中文作者姓名，如需呈现出Yueyao Wang形式，使用茉莉花插件的合并姓名。<br>

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	Fan X, Sommers CH. Food irradiation research and technology[M]. Ames, Iowa: Blackwell Publishing, 2013.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会年会论文集. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	Fourney ME. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics. New York: ASME, c1971: 17–38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	Myburg AA, Grattapaglia D, Tuskan GA, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356–362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告2012.</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy(2008-05-04)[03/08/2013].</div>
  </div>
</blockquote>


## [436wuhan-university-undergraduate.csl]

《[武汉大学本科生毕业论文（设计）](https://civ.whu.edu.cn/__local/7/65/BE/EBE513F22AD878EAE587C0D0081_14AFF292_28400.doc?e=..doc)》样式。

显示效果：

> <sup>[1–9]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	戴军, 袁惠新, 俞建峰. 膜技术在含油废水处理中的应用[J]. 膜科学与技术, 2002(01): 59-64.</div>
    <div class="csl-entry">[2]	毛峡, 孙赟. 和谐图案的自动生成研究[A]. 第一届中国情感计算及智能交互学术会议论文集[C]. 北京: 中国科学院自动化研究所, 2003: 293-297.</div>
    <div class="csl-entry">[3]	王湛. 膜分离技术基础[M]. 北京: 化学工业出版社, 2019.</div>
    <div class="csl-entry">[4]	张志祥. 间断动力系统的随机扰动及其在守恒律方程中的应用[D]. 北京大学.</div>
    <div class="csl-entry">[5]	World Health Organization. Factors regulating the immune response : report of a WHO scientific group[R]. Geneva: WHO, 1970.</div>
    <div class="csl-entry">[6]	河北绿洲生态环境科技有限公司. 一种荒漠化地区生态植被综合培育种植方法: 中国, 01129210.5[P]. 2001-10-24.</div>
    <div class="csl-entry">[7]	GB/T 16159—1996, 拼音正词法基本规则[S]. 北京: 中国标准出版社, 1996.</div>
    <div class="csl-entry">[8]	毛侠. 情感工学破解“舒服”之谜[N]. 光明日报, 2004-04-17(B1).</div>
    <div class="csl-entry">[9]	陈剑. 上博简《民之父母》“而得既塞於四海矣”句解释[EB/OL]. 简帛研究网站. <a href="https://www.bamboosilk.org/Wssf/2003/chenjian03.htm">https://www.bamboosilk.org/Wssf/2003/chenjian03.htm</a>. 2003-01-18.</div>
  </div>
</blockquote>


## [437zhejiang-university-chinese-punctuation.csl]

[浙江大学-中文标点](http://grs.zju.edu.cn/redir.php?catalog_id=10038&object_id=12782)样式。在 [china-national-standard-gb-t-7714-2015-author-date.csl](http://www.zotero.org/styles/china-national-standard-gb-t-7714-2015-author-date) 基础上修改。

显示效果：

<blockquote>
  （库恩，2012）<br>
  （Fourney，c1971）<br>
  （贾东琴、柯平，2011）<br>
  （Fan &#38; Sommers，2013）<br>
  （武丽丽等，2008）<br>
  （Myburg et al.，2014）<br>
  （Bawden，2008；中国互联网络信息中心，2012）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">贾东琴，柯平.面向数字素养的高校图书馆数字服务体系研究[C].中国图书馆学会, 编//中国图书馆学会年会论文集.北京：国家图书馆出版社，2011. 45–52.</div>
    <div class="csl-entry">库恩.科学革命的结构: 第 4 版[M].金吾伦, 胡新和, 译.2 版.北京：北京大学出版社，2012. .</div>
    <div class="csl-entry">武丽丽，华一新，张亚军，等.“北斗一号”监控管理网设计与实现[J].测绘科学，2008，33（5）：8–9.</div>
    <div class="csl-entry">中国互联网络信息中心.第 29 次中国互联网络发展现状统计报告[R].</div>
    <div class="csl-entry">Bawden D. Origins and concepts of digital literacy[EB](2008–05–04). </div>
    <div class="csl-entry">Fan X, Sommers C H. Food irradiation research and technology[M]. 2 edition. Ames, Iowa: Blackwell Publishing, 2013. 25–26. </div>
    <div class="csl-entry">Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics. New York: ASME, c1971. 17–38. </div>
    <div class="csl-entry">Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. <i><span style="font-style:normal;">Nature</span></i>, 2014, 510: 356–362. </div>
  </div>
</blockquote>


## [438xi-an-jiaotong-university.csl]

根据《[西安交通大学硕士、博士学位论文模板-2021版](https://gs.xjtu.edu.cn/info/1209/7605.htm)》修订。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	Fan X, Sommers CH. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴，柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	Fourney ME. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23—25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽，华一新，张亚军等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	Myburg AA, Grattapaglia D, Tuskan GA, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04) [2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [439hebei-medical-university.csl]

根据《[河北医科大学研究生院引发通知 专业学位论文模板97-2003版Word](https://gschool.hebmu.edu.cn/a/2020/03/06/0774B2A85AC24B679BF1A9DA7363AA33.html)》修订。

基于北航大佬的版本稍微修改了一丢丢

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和. 第2版 北京: 北京大学出版社, 2012</div>
    <div class="csl-entry">2.	Fan X, Sommers C H. Food Irradiation Research and Technology[M]. 2 edn. Ames, Iowa: Blackwell Publishing, 2013: 25–26</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[A]. 中国图书馆学会. 中国图书馆学会年会论文集[C]. 北京: 国家图书馆出版社, 2011, 2011 年卷: 45–52</div>
    <div class="csl-entry">4.	Fourney M E. Advances in Holographic Photoelasticity[A]. Symposium on Applications of Holography in Mechanics[C]. New York: ASME, c1971: 17–38</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8–9</div>
    <div class="csl-entry">6.	Myburg A A, Grattapaglia D, Tuskan G A, et al. The Genome of Eucalyptus Grandis[J]. Nature, 2014, 510: 356–362</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R].2012</div>
    <div class="csl-entry">8.	Bawden D. Origins and Concepts of Digital Literacy[EB/OL]. (2008-05-04)[2013-03-08] . <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a></div>
  </div>
</blockquote>


## [440university-of-chinese-academy-of-sciences-author-date.csl]

《[中国科学院大学研究生学位论文撰写规范指导意见](http://www.amss.ac.cn/yjsjy/xwxx/202207/t20220719_6482878.html)》（2022 年 3 月 7 日修订）著者-出版年制样式。在 [011gb-t-7714-2015-author-date-bilingual-no-uppercase-no-url-doi-full-width-parentheses.csl] 基础上修改。

显示效果：

<blockquote>
  （田婉淑, 1986）<br>
  （赵耀东, 1998）<br>
  （辛希孟, 1994）<br>
  （Peebles, 2001）<br>
  （程根伟, 1999）<br>
  （中国地质学会, 1936）<br>
  （中国图书馆学会, 1957）<br>
  （王静 等, 2011）<br>
  （郑本兴, 2000）<br>
  （傅刚 等, 2000）<br>
  （江锡洲, 1989）<br>
  （西安电子科技大学, 2002）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">程根伟. 1998 年长江洪水的成因与减灾对策[M]//许厚泽, 赵其国. 长江流域洪涝灾害与科技对策. 北京: 科学出版社, 1999: 32-36.</div>
    <div class="csl-entry">傅刚, 赵承, 李佳路. 大风沙过后的思考[N]. 2000-04-12(14).</div>
    <div class="csl-entry">江锡洲. 一种温热外敷药制备方案: 88105607.3[P]. 1989-07-26.</div>
    <div class="csl-entry">田婉淑. 中国两栖爬行动物鉴定手册[M]. 北京: 科学出版社, 1986: 98-106.</div>
    <div class="csl-entry">王静, 周启心, 田孟, 等. 树鼩模型:抑郁症的社会竞争失败与学习和记忆的被捕获条件反射[J]. 动物学研究, 2011, 32(1): 24-30.</div>
    <div class="csl-entry">西安电子科技大学. 光折变自适应光外差探测方法: 01128777.2[P]. 2002.</div>
    <div class="csl-entry">辛希孟. 信息技术与信息服务国际研讨会论文集 A集[M]. 北京: 中国社会科学出版社, 1994.</div>
    <div class="csl-entry">赵耀东. 新时代的工业工程师[M]. 台北: 天下文化出版社, 1998.</div>
    <div class="csl-entry">郑本兴. 云南玉龙雪山第四纪冰期与冰川演化模式[J]. 冰川冻土, 2000, 22(1): 53-61.</div>
    <div class="csl-entry">中国地质学会. 地质评论[J]. 1936, 1(1). 北京: 地质出版社, 1936.</div>
    <div class="csl-entry">中国图书馆学会. 图书馆学通讯[J]. 1957. 北京: 北京图书馆, 1957: 98-106.</div>
    <div class="csl-entry">Peebles P Z Jr. Probability, random variables, and random signal principles[M]. 4th ed. New York: McGraw Hill, 2001.</div>
  </div>
</blockquote>


## [441huazhong-university-of-science-and-technology-tongji-medical-college.csl]

[华中科技大学同济医学院学位论文](http://jcyxy.tjmu.edu.cn/info/1573/6839.htm)样式。在 [418huazhong-university-of-science-and-technology-school-of-artificial-intelligence-and-automation.csl] 的基础上修改：作者 3 人以上写 3 人再加“等”或“et al.”。

显示效果：

> <sup>[1–9]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	闫明礼, 张东刚. CFG桩复合地基技术及工程实践（第二版）. 北京: 中国水利水电出版社, 2006</div>
    <div class="csl-entry">[2]	M. Chalfie, S. Kain. Green fluorescent protein: properties, applications, and protocols. Hoboken, New Jersey: Wiley-Interscience, 1998</div>
    <div class="csl-entry">[3]	詹向红, 李德新. 中医药防治阿尔茨海默病实验研究述要. 中华中医药学刊, 2004, 22(11): 2094-2096</div>
    <div class="csl-entry">[4]	E. S. Lein, M. J. Hawrylycz, N. Ao, et al. Genome-wide atlas of gene expression in the adult mouse brain. Nature, 2007, 445(7124): 168-176</div>
    <div class="csl-entry">[5]	M. L. Bouxsein, S. K. Boyd, B. A. Christiansen, et al. Guidelines for assessment of bone microstructure in rodents using micro-computed tomography. Journal of Bone and Mineral Research, 2010, 25(7): 1468-1486</div>
    <div class="csl-entry">[6]	S. Yamaki, M. Abet, M. Kawamata, et al. Performance evaluation of phase-only correlation functions from the viewpoint of correlation Filters. in: 2018 Asia-Pacific Signal and Information Processing Association Annual Summit and Conference (APSIPA ASC), Honolulu, HI, USA, 12–15 Nov. 2018, IEEE, 2019: 1361-1364</div>
    <div class="csl-entry">[7]	T. Yao, J. Wan, P. Huang, et al. Building efficient key-value stores via a lightweight compaction tree. ACM Transactions on Storage, 2018, 13(4): 1-28</div>
    <div class="csl-entry">[8]	刘加林, 刘乃安. 多功能一次性压舌板. 中国, 发明专利, ZL92214985.2, 1993</div>
    <div class="csl-entry">[9]	李清泉. 基于混合结构的三维GIS数据模型与空间分析研究[博士学位论文]. 武汉: 武汉测绘科技大学, 1998</div>
  </div>
</blockquote>


## [442chongqing-university-of-posts-and-telecommunications.csl]

重庆邮电大学研究生学位论文样式。在 [003gb-t-7714-2015-numeric-bilingual-no-url-doi.csl] 的基础上修改：
1. 会议论文的格式改为“会议名, 会议地, 会议年”；
2. 除电子资源外，不显示“OL”、引用日期、URL 或 DOI。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	FAN X, SOMMERS C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会年会论文集, 北京, 2011: 45-52.</div>
    <div class="csl-entry">[4]	FOURNEY M E. Advances in holographic photoelasticity[C]. Symposium on Applications of Holography in Mechanics, University of Southern California, Los Angeles, California, 1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
    <div class="csl-entry">[8]	BAWDEN D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [443chengdu-university-of-technology.csl]

[成都理工大学](http://www.gra.cdut.edu.cn/info/1023/2130.htm)样式。在 [china-national-standard-gb-t-7714-2015-author-date.csl](http://www.zotero.org/styles/china-national-standard-gb-t-7714-2015-author-date) 基础上修改。

显示效果：

<blockquote>
  （库恩，2012）<br>
  （Fourney, c1971）<br>
  （贾东琴等，2011）<br>
  （Fan et al., 2013）<br>
  （武丽丽等，2008）<br>
  （Myburg et al., 2014）<br>
  （中国互联网络信息中心，2012; Bawden, 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">贾东琴, 柯平, 2011. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社: 45-52.</div>
    <div class="csl-entry">库恩, 2012. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社.</div>
    <div class="csl-entry">武丽丽, 华一新, 张亚军, 等, 2008. “北斗一号”监控管理网设计与实现[J/OL]. 测绘科学, 33(5): 8-9[2009-10-25]. <a href="http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail">http://vip.calis.edu.cn/CSTJ/Sear.dll?OPAC_CreateDetail</a>. DOI:<a href="https://doi.org/10.3771/j.issn.1009-2307.2008.05.002">10.3771/j.issn.1009-2307.2008.05.002</a>.</div>
    <div class="csl-entry">中国互联网络信息中心, 2012. 第 29 次中国互联网络发展现状统计报告[R/OL]. (2012-01-16)[2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>.</div>
    <div class="csl-entry">Bawden D, 2008. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
    <div class="csl-entry">Fan X, Sommers C H, 2013. Food irradiation research and technology[M/OL]. 2nd ed. Ames, Iowa: Blackwell Publishing: 25-26[2014-06-26]. <a href="http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary">http://onlinelibrary.wiley.com/doi/10.1002/9781118422557.ch2/summary</a>.</div>
    <div class="csl-entry">Fourney M E, c1971. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME: 17-38.</div>
    <div class="csl-entry">Myburg A A, Grattapaglia D, Tuskan G A, et al., 2014. The genome of eucalyptus grandis[J/OL]. Nature, 510: 356-362[2014-06-25]. <a href="http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf">http://www.nature.com/nature/journal/v510/n7505/pdf/nature13308.pdf</a>. DOI:<a href="https://doi.org/10.1038/nature13308">10.1038/nature13308</a>.</div>
  </div>
</blockquote>


## [444chongqing-university-numeric.csl]

《[重庆大学博士、硕士学位论文格式标准（2023年修订）](http://graduate.cqu.edu.cn/xwsy/xwsq.htm)》顺序编码制样式。在 [003gb-t-7714-2015-numeric-bilingual-no-url-doi.csl] 的基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	FAN X, SOMMERS C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	FOURNEY M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
    <div class="csl-entry">[8]	BAWDEN D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [445nanjing-agricultural-university.csl]

[南京农业大学研究生学位论文](https://grasch.njau.edu.cn/info/1011/4128.htm)新样式。在 [011gb-t-7714-2015-author-date-bilingual-no-uppercase-no-url-doi-full-width-parentheses.csl] 的基础上修改。正文作者年代格式，中文参考文献为中文标点，英文为英文标点。参考文献列表中文在前，英文在后。中文按作者拼音排序，英文按作者字母排序。作者 3 人以上写 3 人再加`等`或`et al.`。学位论文、书籍显示页码需要在Extra中输入：`pages: 88-120`，需要用自动根据题目批量修改语言的插件：<https://github.com/redleafnew/delitemwithatt>，将条目语言设置为`en-US`或`zh-CN`才可以正常排序。

显示效果：

<blockquote>
  （Andolfo et al., 2014）<br>
  （Bethke et al., 2016）<br>
  （杨安钢等，2001）<br>
  （杨月等，2014）<br>
  （曹向锋，2010）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	曹向锋．外来入侵植物黄顶菊在中国潜在适生区预测及其风险评估［D］．南京：南京农业大学，2010：88－120．</div>
    <div class="csl-entry">[2]	杨安钢，毛积芳，药立波．生物化学与分子生物学实验技术［M］．北京：高等教育出版社，2001：28－59．</div>
    <div class="csl-entry">[3]	杨月，刘兵，刘小军，等．小麦生育期模拟模型的比较研究［J］．南京农业大学学报，2014，37（1）：6－14．</div>
    <div class="csl-entry">[4]	Andolfo G, Jupe F, Witek K, et al. Defining the full tomato NB-LRR resistance gene repertoire using genomic and cDNA RenSeq[J]. BMC plant biology, 2014, 14: 120.</div>
    <div class="csl-entry">[5]	Bethke G, Thao A, Xiong G, et al. Pectin biosynthesis is critical for cell wall integrity and immunity in arabidopsis thaliana[J]. The Plant Cell, 2016, 28(2): 537-556.</div>
  </div>
</blockquote>


## [446tsinghua-university-academy-of-arts-and-design.csl]

[清华大学 - 美术学院](https://www.ad.tsinghua.edu.cn/)样式。在 [social-sciences-in-china.csl](http://www.zotero.org/styles/social-sciences-in-china) 基础上修改。

显示效果：

<blockquote>
  <sup>1</sup> R. Starn and L. W. Partridge, <i>Arts of Power: Three Halls of State in Italy, 1300-1600</i>, University of California Press, 1992, pp. 19–28.<br>
  <sup>2</sup> M. Polo, <i>The Travels of Marco Polo</i>, trans. by William Marsden, Hertfordshire: Cumberland House, 1997, pp. 55, 88.<br>
  <sup>3</sup> T. H. Aston and C. H. E. Philpin (eds.), <i>The Brenner Debate: Agrarian Class Structure and Economic Development in Pre-Industrial Europe</i>, Cambridge University Press, 1987, p. 35.<br>
  <sup>4</sup> R. Schofield, “The Impact of Scarcity and Plenty on Population Change in England, 1541-1871,” in R. I. Rotberg and T. K. Rabb (eds.), <i>Hunger and History: The Impact of Changing Food Production and Consumption Patterns on Society</i>, Cambridge: Cambridge University Press, 1983, p. 79.<br>
  <sup>5</sup> H. B. Chamberlain, “On the Search for Civil Society in China,” <i>Modern China</i>, vol. 19, no. 2 (April 1993), pp. 199–215.<br>
  <sup>6</sup> R. Starn and L. W. Partridge, <i>Arts of Power: Three Halls of State in Italy, 1300-1600</i>.<br>
  <sup>7</sup> R. Schofield, “The Impact of Scarcity and Plenty on Population Change in England, 1541-1871,” in R. I. Rotberg and T. K. Rabb (eds.), <i>Hunger and History: The Impact of Changing Food Production and Consumption Patterns on Society</i>.<br>
  <sup>8</sup> H. B. Chamberlain, “On the Search for Civil Society in China,” <i>Modern China</i>, vol. 19, no. 2 (April 1993).<br>
</blockquote>


## [447anhui-university-of-science-and-technology.csl]

[安徽理工大学研究生学位论文](https://yjsc.aust.edu.cn/info/1013/4736.htm)样式。

显示效果：

<blockquote>
  <sup>[1]</sup><br>
  <sup>[2]</sup><br>
  <sup>[3]</sup><br>
  <sup>[4]</sup><br>
  <sup>[5]</sup><br>
  <sup>[6]</sup><br>
  <sup>[7]</sup><br>
  <sup>[8]</sup><br>
</blockquote>

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

> <sup>[1–8]</sup>

<blockquote>
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
</blockquote>


## [450tianjin-university-numberic.csl]

[天津大学研究生学位论文](http://gs.tju.edu.cn/info/1013/1100.htm)顺序编码样式。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
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
</blockquote>


## [451lanzhou-university.csl]

[兰州大学研究生学位论文](https://ge.lzu.edu.cn/yjsxw/upload/files/20230404/61cd8e5356084aa28c55ed238ba871bc.pdf)样式。[420beihang-university.csl]基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和. 第2版 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	Fan, X., Sommers, C.H. Food irradiation research and technology[M]. 2 edn. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[A]. 中国图书馆学会. 中国图书馆学会年会论文集[C]. 北京: 国家图书馆出版社, 2011, 2011 年卷: 45-52.</div>
    <div class="csl-entry">[4]	Fourney, M.E. Advances in holographic photoelasticity[A]. Symposium on Applications of Holography in Mechanics[C]. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	Myburg, A.A., Grattapaglia, D., Tuskan, G.A., et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R].2012.</div>
    <div class="csl-entry">[8]	Bawden, D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08] . <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [452dalian-university-of-technology.csl]

[《大连理工大学学位论文格式规范》](https://gs.dlut.edu.cn/info/1210/13319.htm)（2024-02-26）样式。[002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl]基础上修改。

显示效果：

> <sup>[1–12]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	蒋有绪, 郭泉水, 马娟, et al. 中国森林群落分类及其群落学特征[M]. 北京: 科学出版社, 1998: 23-30.</div>
    <div class="csl-entry">[2]	Chaplin A. H., Anderson D. Names of Persons: National Usages for Entry in Catalogues[M]. International Federation of Library Associations, 1967.</div>
    <div class="csl-entry">[3]	李炳穆. 理想的图书馆员和信息专家的素质与形象[J]. 图书情报工作, 2000(2): 5-8.</div>
    <div class="csl-entry">[4]	Des Marais D. J., Strauss H., Summons R. E., et al. Carbon isotope evidence for the stepwise oxidation of the Proterozoic environment[J]. Nature, 1992, 359(6396): 605-609.</div>
    <div class="csl-entry">[5]	陈元洪. 探究“双减”之下如何进行初中英语作业的优化设计. 广东省教师继续教育学会第六届教学研讨会[C], 中国广东广州. 2023: 230-232.</div>
    <div class="csl-entry">[6]	方鸿强. 预应力张拉施工过程中索力损失问题分析与研究. 广东省教师继续教育学会第六届教学研讨会[C], 中国陕西西安. 2010: 437-440.</div>
    <div class="csl-entry">[7]	国家发展改革委. 中华人民共和国国民经济和社会发展第十四个五年规划和2035年远景目标纲要[EB/OL]. 2021[2023-04-09]. <a href="http://www.gov.cn/xinwen/2021-03/13/content_5592681.htm">http://www.gov.cn/xinwen/2021-03/13/content_5592681.htm</a>.</div>
    <div class="csl-entry">[8]	张志祥. 间断动力系统的随机扰动及其在守恒律方程中的应用[D]. 北京: 北京大学, 1998.</div>
    <div class="csl-entry">[9]	Cairns B. R. Infrared Spectroscopic Studies of Solid Oxygen[D]. University of California, Berkeley, 1965.</div>
    <div class="csl-entry">[10]	刘加林. 多功能一次性压舌板: 92214985.2[P]. 1993-04-14.</div>
    <div class="csl-entry">[11]	World Health Organization. Factors regulating the immune response: report of WHO Scientific Group[R]. Geneva: WHO, 1970.</div>
    <div class="csl-entry">[12]	丁文祥. 数字革命与竞争国际化[N]. 中国青年报, 2000,11,20(15).</div>
  </div>
</blockquote>


## [453central-south-university-of-forestry-and-technology.csl]

[中南林业科技大学研究生学位论文](https://yjsb.csuft.edu.cn/zlxz/zlxz1/201710/t20171016_66849.html)样式。[003gb-t-7714-2015-numeric-bilingual-no-url-doi.csl] 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
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
</blockquote>


## [454dalian-maritime-university.csl]

[大连海事大学研究生学位论文]样式。[002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl]基础上修改。

使用说明：
 <div>1.图书，（1）图书需要在“其他”填入所引页码 “Pages:11-20” 或者是在“存档位置” 直接填入“11-20” 即可，两个方法二选一；（2）如果“地点”抓取不到，需要手动填写。</div>
 <div>2.专利，英文专利 在“地点”填入国家 例如“US”  中文专利，按照知网显示的7714-2015格式，需要在“地点” 填入 “四川省” 如果不填，默认显示中国。</div>
 <div>3.其他的期刊等类型，能自动抓取题录信息的，一般不需要手动填写，如果抓取不到，再手动对应填写。</div>

显示效果：

> <sup>[1–26]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	广西壮族自治区林业厅. 广西自然保护区[M]. 北京: 中国林业出版社, 1993:45-47.</div>
    <div class="csl-entry">[2]	蒋有绪, 郭泉水, 马娟, 等. 中国森林群落分类及其群落学特征[M]. 北京: 科学出版社, 1998:23-30.</div>
    <div class="csl-entry">[3]	International Federation of Library Association and Institutions. Names of persons: National usages for entry in catalogues[M]. 3rd ed. London: IFLA International Office for UBC, 1977:56-70.</div>
    <div class="csl-entry">[4]	李炳穆. 理想的图书馆员和信息专家的素质与形象[J]. 图书情报工作, 2000, 2(6): 5-8.</div>
    <div class="csl-entry">[5]	陶仁骥. 密码学与数学[J]. 自然杂志, 1984, 7(7): 527.</div>
    <div class="csl-entry">[6]	亚洲地质图编图组. 亚洲地层与地质历史概述[J]. 地质学报, 1978, 3: 194-208.</div>
    <div class="csl-entry">[7]	Des Marais D J, Strauss H, Summons R E, et al. Carbon isotope evidence for the stepwise oxidation of the Proterozoic environment[J]. Nature, 1992, 359(6396): 605-609.</div>
    <div class="csl-entry">[8]	中国力学学会. 第 3 届全国实验流体力学学术会议论文集[M]. 天津: 1990.</div>
    <div class="csl-entry">[9]	Rosenthall E M. Proceedings of the Fifth Canadian Mathematical Congress: University of Montreal, 1961[M]. Toronto: University of Toronto Press, 1963.</div>
    <div class="csl-entry">[10]	国家标准局信息分类编码研究所. 世界各国和地区名称代码: GB/T 2659—1986[S]. 北京: 中国标准出版社, 1988: 59-92.</div>
    <div class="csl-entry">[11]	韩吉人. 论职工教育的特点[C]//中国职工教育研究会. 职工教育研究论文集. 北京: 人民教育出版社, 1985: 90-99.</div>
    <div class="csl-entry">[12]	Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[13]	Martin G. Control of electronic resources in Australia[M]//Pattie L Y W, Cox B J. Electronic resources: selection and bibliographic control. New York: The Haworth Press, 1996.</div>
    <div class="csl-entry">[14]	张志祥. 间断动力系统的随机扰动及其在守恒律方程中的应用[D]. 北京: 北京大学, 1998.</div>
    <div class="csl-entry">[15]	Cairns B R. Infrared spectroscopic studies on solid oxygen[D]. Berkeley: University of California, 1965.</div>
    <div class="csl-entry">[16]	刘加林. 多功能一次性压舌板[P]. 中国: 92214985.2, 1993-04-14.</div>
    <div class="csl-entry">[17]	河北绿洲生态环境科技有限公司. 一种荒漠化地区生态植被综合培育种植方法[P]. 中国: 01129210.5, 2001-10-24.</div>
    <div class="csl-entry">[18]	Koseki A, Momose H, Kawahito M, et al. Compiler[P]. US: US828402, 2002-05-25.</div>
    <div class="csl-entry">[19]	U. S. Department of Transportation Federal Highway Administration. Guidelines for handling excavated acid-producing materials: PB 91-194001[R]. Springfield: U.S. Department of Commerce National Information Service, 1990.</div>
    <div class="csl-entry">[20]	World Health Organization. Factors regulating the immune response: Report of WHO Scientific Group[R]. Geneva: WHO, 1970.</div>
    <div class="csl-entry">[21]	丁文详. 数字革命与竞争国际化[N]. 中国青年报, 2000-11-20(15).</div>
    <div class="csl-entry">[22]	张田勤. 罪犯 DNA 库与生命伦理学计划[N]. 大众科技报, 2000-11-12(7).</div>
    <div class="csl-entry">[23]	江向东. 互联网环境下的信息处理与图书管理系统解决方案[J]. 情报学报, 1999, 18(2): 4.</div>
    <div class="csl-entry">[24]	萧钰. 出版业信息化迈入快车道[EB/OL]. (2001-12-19)[2002-04-15]. <a href="http://www.creader.com/news/20011219/200112190019.html">http://www.creader.com/news/20011219/200112190019.html</a>.</div>
    <div class="csl-entry">[25]	Metcalf S W. The Tort Hall air emission study[C]//Impact on human and ecological health. Atlanta Marriott Marquis Hotel, Atlanta, Georgia, 1995.</div>
    <div class="csl-entry">[26]	Turcotte D L. Fractals and chaos in geology and geophysics[M]. New York: Cambridge University Press, 1992.</div>
  </div>
</blockquote>


## [455china-pharmaceutical-university.csl]

[中国药科大学本科毕业论文（设计）](http://jwc.cpu.edu.cn/23/27/c924a140071/page.htm)样式。[002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl] 基础上修改。

显示效果：

> <sup>[1–9]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	Zhang JY, Zhang JS, Zhang Y, <i>et al.</i> Studies on the intestinal absorption of crocin in rats and determination of the partition coefficient [J]. <i>J China Pharm Univ</i> (中国药科大学学报), 2004(3): 89-90.</div>
    <div class="csl-entry">[2]	Zhang HH, Kumar S, Barnett AH, <i>et al.</i> Ceiling culture of mature human adipocytes: use in studies of adipocyte functions [J]. <i>J Endocrinol</i>, 2000, 164(1/2): 119-128.</div>
    <div class="csl-entry">[3]	Qi RM, Wang ZG, Wang SQ. <i>Advances in Pharmacology</i> (药理学进展) [M]. Beijing: People’s Medical Publishing House, 2003: 74.</div>
    <div class="csl-entry">[4]	Peebles PZ. <i>Probability, random variables, and random signal principles</i> [M]. 4th ed. New York: McGraw Hill, 2001: 149.</div>
    <div class="csl-entry">[5]	China Association for Standardization. GB/T 21853-2008 <i>Chemicals—Partition  Coefficient (n-octanol/water)—Shake Flask Method</i> (化学品 分配系数(正辛醇-水)摇瓶法试验) [S]. Beijing: Standards Press of China, 2008.</div>
    <div class="csl-entry">[6]	Chinese Pharmacopoeia Commission. <i>Chinese Pharmacopoeia</i>: part 2 (中华人民共和国药典：二部) [S]. Beijing: China Medical Science Press, 2010: 310-312.</div>
    <div class="csl-entry">[7]	Lafon L. New benzhydrysulphinyl derivatives: <i>US</i>, 4066686A [P]. 1978-01-03 [2011-10-25].</div>
    <div class="csl-entry">[8]	U.S. Food and Drug Administration. FDA approves shard system REMS for TIRF products [EB/OL]. (2011-12-29) [2012-01-13]. <a href="http://www.fda.gov/NewsEvents/Newsroom/PressAnnouncements/ucm285345.htm">http://www.fda.gov/NewsEvents/Newsroom/PressAnnouncements/ucm285345.htm</a>.</div>
    <div class="csl-entry">[9]	Tian Z. Study of the clinical anti-aggregating effect of picotamide on platelet (吡考他胺抗血小板聚集性的临床研究) [D]. Changchun: Jilin University, 2004.</div>
  </div>
</blockquote>


## [456southwest-university-of-political-science-and-law.csl]

[西南政法大学](https://www.pup.cn/bookDetail?id=910497ac470d4880ab56c6709bb1d7c5)样式。在 [manual-of-legal-citation-multi-lingual.csl](http://www.zotero.org/styles/manual-of-legal-citation-multi-lingual) 基础上修改。

显示效果：

<blockquote>
  <sup>1</sup> 王名扬：《美国行政法》，北京大学出版社，2007年版。<br>
  <sup>2</sup> 同上注，第18页。<br>
  <sup>3</sup> 季卫东：“法律程序的意义：对中国法制建设的另一种思考”，《中国社会科学》，1993年第1期。<br>
  <sup>4</sup> 王保树：“股份有限公司机关构造中的董事和董事会”，梁慧星主编：《民商法论丛》第1卷，法律出版社，1994年版。<br>
  <sup>5</sup> 何海波：“判决书上网”，《法制日报》2000年5月21日，第2版。<br>
  <sup>6</sup> 李松锋：“游走在上帝与凯撒之间：美国宪法第一修正案中的政教关系研究”，中国政法大学博士学位论文，2015年。<br>
  <sup>7</sup> 包郑照诉苍南县人民政府强制拆除房屋案，浙江省高级人民法院民事判决书（1988）浙法民上字 7 号。<br>
  <sup>8</sup> 陆红霞诉南通市FGW政府信息公开案，《最高人民法院公报》2015年7月6日第11期。<br>
  <sup>9</sup> Reich, C. A., “The new property,” <i>Yale Law Journal</i>, (73)5, 1964, 737-738.<br>
  <sup>10</sup> Brandeis, L. D., “What publicity can do,” <i>Harper’s Weekly</i>, 20 December 1913, p. 10.<br>
  <sup>11</sup> Alford, W., <i>To Steal a Book Is an Elegant Offense: Intellectual Property Law in Chinese Civilization</i>, Stanford University Press, 1995, p. 98.<br>
  <sup>12</sup> Department of Transportation Act, Pub. L. No. 89-670, § 9, 80 Stat. 931, 944-947 (1966).<br>
  <sup>13</sup> Natural Resources Defense Council <i>v.</i> Gorsuch, 685 F.2d 718 (D.C. Cir. 1982).<br>
</blockquote>


## [457hunan-university-numeric.csl]

《[湖南大学研究生学位论文撰写规范](http://gra.hnu.edu.cn/info/1276/3444.htm)》顺序编码制样式。[019gb-t-7714-1987-numeric-bilingual.csl]基础上修改。

显示效果：

> <sup>[1–11]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	张直明，张言，陈北熊．滑动轴承的流体动力润滑理论．北京：高等教育出版社，1986，104-105</div>
    <div class="csl-entry">[2]	Mitchell A L. Introduction to genetic algorithms. Cambridge: MIT Press, 1996, 35-40</div>
    <div class="csl-entry">[3]	李斌，沙键，张其瑞，等．介观耦合电路的量子压缩效应．科学通报，1996，41(14)：1275-1277</div>
    <div class="csl-entry">[4]	Chen D H, Bogy D B, Wang K C, et al. Singular stress field  near the comer of jointed dissimilar materials. Journal of  Applied Mechanics, 1993, 60(3): 607-613</div>
    <div class="csl-entry">[5]	张筑生．微分半动力系统的不变集：［北京大学硕士学位论文］．北京：北京大学数学系数学研究所，1995，60-65</div>
    <div class="csl-entry">[6]	Cairns B R. Infrared spectroscopic studies of solid oxygen: [dissertation]. Berkeley: Univ. of California, 1965, 89-91</div>
    <div class="csl-entry">[7]	田荣．连续与非连续变形分析的流形方法及其在土力学中的应用．见：中国土木工程学会第八届全国土力学及岩土工程学术会议论文集．北京：万国学术出版社，1999，51-53</div>
    <div class="csl-entry">[8]	Melbourne C. Load relieving systems. In: Proc of Int Conf on  Non conventional Structures. London, 1987, 93-95</div>
    <div class="csl-entry">[9]	姚光起．一种氧化锆材料的制备方法．中国专利．891056088，1980-07-03</div>
    <div class="csl-entry">[10]	Jenkins L. Testimony of Emund Chairman of FASB. <a href="https://doi.org/www.fasb.org.uk">www.fasb.org.uk</a>, 2002-02-14</div>
    <div class="csl-entry">[11]	福轩．中国汽车工业核心竞争力评析．中国机电日报，2002-04-20</div>
  </div>
</blockquote>


## [458hunan-university-note.csl]

《[湖南大学研究生学位论文撰写规范](http://gra.hnu.edu.cn/info/1276/3444.htm)》脚注样式。[457hunan-university-numeric.csl] 基础上修改。

显示效果：

<blockquote>
  <sup>1</sup> 张直明，张言，陈北熊．滑动轴承的流体动力润滑理论．北京：高等教育出版社，1986，104-105<br>
  <sup>2</sup> Mitchell A L. Introduction to genetic algorithms. Cambridge: MIT Press, 1996, 35-40<br>
  <sup>3</sup> 李斌，沙键，张其瑞，陈斌．介观耦合电路的量子压缩效应．科学通报，1996，41(14)：1275-1277<br>
  <sup>4</sup> Chen D H, Bogy D B, Wang K C, Geng X. Singular stress field  near the comer of jointed dissimilar materials. Journal of  Applied Mechanics, 1993, 60(3): 607-613<br>
  <sup>5</sup> 张筑生．微分半动力系统的不变集：［北京大学硕士学位论文］．北京：北京大学数学系数学研究所，1995，60-65<br>
  <sup>6</sup> Cairns B R. Infrared spectroscopic studies of solid oxygen: [dissertation]. Berkeley: Univ. of California, 1965, 89-91<br>
  <sup>7</sup> 田荣．连续与非连续变形分析的流形方法及其在土力学中的应用．见：中国土木工程学会第八届全国土力学及岩土工程学术会议论文集．北京：万国学术出版社，1999，51-53<br>
  <sup>8</sup> Melbourne C. Load relieving systems. In: Proc of Int Conf on  Non conventional Structures. London, 1987, 93-95<br>
  <sup>9</sup> 姚光起．一种氧化锆材料的制备方法．中国专利．891056088，1980-07-03<br>
  <sup>10</sup> Jenkins L. Testimony of Emund Chairman of FASB. <a href="https://doi.org/www.fasb.org.uk">www.fasb.org.uk</a>, 2002-02-14<br>
  <sup>11</sup> 福轩．中国汽车工业核心竞争力评析．中国机电日报，2002-04-20<br>
</blockquote>


## [459shanghai-university.csl]

《[上海大学](https://gs.shu.edu.cn/pygl.htm)》研究生学位论文样式。

显示效果：

<blockquote>
  <sup>[1]</sup><br>
  <sup>[2]</sup><br>
  <sup>[3]</sup><br>
  <sup>[4]</sup><br>
  <sup>[5]</sup><br>
  <sup>[6]</sup><br>
  <sup>[7,8]</sup><br>
</blockquote>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和译. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	FOURNEY M E. Advances in Holographic Photoelasticity[A]. Symposium on Applications of Holography in Mechanics[C]. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[A]. 中国图书馆学会. 中国图书馆学会年会论文集[C]. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	FAN X, SOMMERS C H. Food Irradiation Research and Technology[M]. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5):8-9.</div>
    <div class="csl-entry">[6]	MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. The Genome of Eucalyptus Grandis[J]. Nature, 2014, 510:356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[M]. 2012.</div>
    <div class="csl-entry">[8]	BAWDEN D. Origins and Concepts of Digital Literacy[EB/OL]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>. 2008.</div>
  </div>
</blockquote>


## [460beijing-institute-of-technology.csl]

《[北京理工大学博士、硕士学位论文撰写规范](https://grd.bit.edu.cn/docs/2017-12/20171212070921798998.pdf)》

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, trans. 2nd ed. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究. 中国图书馆学会. 中国图书馆学会年会论文集[C]. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity. Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California[C]. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, et al. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. (2012-01-16).</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB]. (2008-05-04).</div>
  </div>
</blockquote>


## [461northwestern-polytechnical-university.csl]

《[西北工业大学研究生学位论文](https://gs.nwpu.edu.cn/info/2283/15345.htm)》样式，基于 [002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl] 修改。

显示效果：

> <sup>[1–3]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	姜锡洲. 一种温热外敷药制备方案[P]. 中国专利: 88105607.3, 1989-07-26.</div>
    <div class="csl-entry">[2]	GB/T 16159—1996, 汉语拼音正词法基本规则[S].</div>
    <div class="csl-entry">[3]	中华人民共和国科学技术委员会. 科学技术期刊管理办法[A]. 1991-06-05.</div>
  </div>
</blockquote>


## [462huazhong-university-of-science-and-technology-school-of-cyber-science-and-engineering.csl]

[华中科技大学网络空间安全学院学位论文](http://cse.hust.edu.cn/yjsjy/wjxz.htm)样式。[418huazhong-university-of-science-and-technology-school-of-artificial-intelligence-and-automation.csl] 基础上修改。

中文文献（含图书、期刊论文、会议论文、专利等）：作者按中文写法，姓在前、名在后；英文文献（含图书、期刊论文、会议论文、专利等）：作者按英文习惯写法，名在前、姓在后，名和姓均用全称，如果作者名超过两个单词，中间名使用简称，如“C.”，不要混用。3人以内列出全部作者，3人以上列出3人再加“等”（英文加“et al”）。每个参考文献的最后不加标点符号。

显示效果：

> <sup>[1–9]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	闫明礼, 张东刚. CFG桩复合地基技术及工程实践（第二版）. 北京: 中国水利水电出版社, 2006</div>
    <div class="csl-entry">[2]	Martin Chalfie, Steven Kain. Green fluorescent protein: properties, applications, and protocols. Hoboken, New Jersey: Wiley-Interscience, 1998</div>
    <div class="csl-entry">[3]	詹向红, 李德新. 中医药防治阿尔茨海默病实验研究述要. 中华中医药学刊, 2004, 22(11): 2094-2096</div>
    <div class="csl-entry">[4]	Ed S. Lein, Michael J. Hawrylycz, Nancy Ao, et al. Genome-wide atlas of gene expression in the adult mouse brain. Nature, 2007, 445(7124): 168-176</div>
    <div class="csl-entry">[5]	Mary L. Bouxsein, Stephen K. Boyd, Blaine A. Christiansen, et al. Guidelines for assessment of bone microstructure in rodents using micro-computed tomography. Journal of Bone and Mineral Research, 2010, 25(7): 1468-1486</div>
    <div class="csl-entry">[6]	Suli Yang, Jing Liu, Andrea Arpaci-Dusseau, et al. Principled schedulability analysis for distributed storage systems using thread architecture models. In: Proceedings of the 13th USENIX Symposium on Operating Systems Design and Implementation (OSDI 2018), Carlsbad, CA, USA, October 8–10, 2018, USENIX Association, 2018: 161-176</div>
    <div class="csl-entry">[7]	Ting Yao, Jiguang Wan, Ping Huang, et al. Building efficient key-value stores via a lightweight compaction tree. ACM Transactions on Storage, 2018, 13(4): 1-28</div>
    <div class="csl-entry">[8]	刘德林, 李德奎. 多功能可擦写存储器. 中国, 发明专利, 202010575613.3, 2020</div>
    <div class="csl-entry">[9]	李清泉. 基于混合结构的三维GIS数据模型与空间分析研究[博士学位论文]. 武汉: 武汉测绘科技大学, 1998</div>
  </div>
</blockquote>


## [463tongji-university.csl]

[同济大学](https://gs.tongji.edu.cn/info/1063/1754.htm)样式。在 [chinese-gb7714-1987-numeric.csl](http://www.zotero.org/styles/chinese-gb7714-1987-numeric) 基础上修改。

显示效果：

> <sup>[1–11]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	陈建军，车建文，陈勇．具有频率和振型概率约束的工程结构动力优化设计．计算力学学报，2001，18（1）：74～80</div>
    <div class="csl-entry">[2]	Nadkarni M A, Nair C K K, Pandey V N, et al. Characterization of alpha-galactosidase from corynebacterium murisepticum and mechanism of its induction. J Gen App Microbiol, 1992, 38(1): 23～34</div>
    <div class="csl-entry">[3]	华罗庚，王元．论一致分布与近似分析：数论方法（I）．中国科学，1973（4）：339～357</div>
    <div class="csl-entry">[4]	竺可桢．物候学．北京：科学出版社，1973</div>
    <div class="csl-entry">[5]	霍夫斯塔主编．禽病学：下册．第7版．胡祥壁译．北京：农业出版社，1981：798～799</div>
    <div class="csl-entry">[6]	Timoshenko S P. Theory of plate and shells. 2nd ed. New York: McGraw-Hill, 1959: 17～36</div>
    <div class="csl-entry">[7]	张全福，王里青．“百家争鸣”与理工科学报编辑工作．见：郑福寿主编．学报编辑论丛：第 2 集．南京：河海大学出版社，1991：1～4</div>
    <div class="csl-entry">[8]	丁光莹．钢筋混凝土框架结构非线性反应分析的随机模拟分析：[博士学位论文]．上海：同济大学，2001</div>
    <div class="csl-entry">[9]	Cairns B R. Infrared spectroscopic studies on solid oxygen: [dissertation]. Berkeley: Univ of California, 1965</div>
    <div class="csl-entry">[10]	姜锡洲．一种温热外敷药制备方法．中国专利，881056073．1989-07-26</div>
    <div class="csl-entry">[11]	全国文献工作标准化技术委员会第六分委员会．GB 6447—86 文摘编写规则．北京：中国标准出版社，1986</div>
  </div>
</blockquote>


## [464hunan-normal-university.csl]

[湖南师范大学](https://yjsy.hunnu.edu.cn/__local/3/04/8A/26688DAF90A1EDD477ADBE21D15_88680BF7_56B1F.pdf)样式。在 [gb-t-7714-2005-numeric-bilingual.csl](http://www.zotero.org/styles/gb-t-7714-2005-numeric-bilingual) 基础上修改。

显示效果：

> <sup>[1–6]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	夏鲁惠. 高等学校毕业设计(论文)教学情况调研报告[J]. 高等理科教育, 2004(1): 46-48, 52.</div>
    <div class="csl-entry">[2]	Heider, E.R. &#38; D.C. Olivier. The structure of the color space in naming and memory for two languages [J]. <i>Cognitive Psychology</i>, 1972, 3(2): 337-354.</div>
    <div class="csl-entry">[3]	伍蠡甫. 西方文论选[M]. 上海: 上海译文出版社, 1979: 12-17.</div>
    <div class="csl-entry">[4]	张筑生. 微分半动力系统的不变集[D]. 北京: 北京大学数学系数学研究所, 1983: 1-7.</div>
    <div class="csl-entry">[5]	冯西桥, 何树延. 核反应堆管道和压力容器的LBB分析[R]. 北京: 清华大学核能技术设计研究院, 1998: 9-10.</div>
    <div class="csl-entry">[6]	GB/T 16159—1996, 汉语拼音正词法基本规则[S].</div>
  </div>
</blockquote>


## [465south-china-agricultural-university-undergraduate.csl]

[华南农业大学（本科生）](https://jwc.scau.edu.cn/2016/0331/c5197a147427/page.htm)样式。在 [gb-t-7714-2005-author-date-bilingual.csl](http://www.zotero.org/styles/gb-t-7714-2005-author-date-bilingual) 基础上修改。

显示效果：

<blockquote>
  (库恩, 2012)<br>
  (Fourney, c1971)<br>
  (贾东琴, 柯平, 2011)<br>
  (Fan and Sommers, 2013)<br>
  (武丽丽, 华一新, 张亚军等, 2008)<br>
  (Myburg, Grattapaglia, Tuskan et al., 2014)<br>
  (中国互联网络信息中心, 2012; Bawden, 2008)<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[A]//中国图书馆学会. 中国图书馆学会年会论文集[C]: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
    <div class="csl-entry">Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
    <div class="csl-entry">Fan X, Sommers C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">Fourney M E. Advances in holographic photoelasticity[A]//Symposium on Applications of Holography in Mechanics[C], August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
  </div>
</blockquote>


## [466china-agriculture-university-natural-science.csl]

[中国农业大学（自然科学）](https://gradsch1.cau.edu.cn/art/2019/3/18/art_41503_770264.html)样式。在 [gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl](http://www.zotero.org/styles/gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi) 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 刘英敏. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, Hellsten U, Hayes R D, Grimwood J, Jenkins J, Lindquist E, Tice H, Bauer D, Goodstein D M, Dubchak I, Poliakov A, Mizrachi E, Kullan A R K, Hussey S G, Pinard D, van der Merwe K, Singh P, van Jaarsveld I, Silva-Junior O B, Togawa R C, Pappas M R, Faria D A, Sansaloni C P, Petroli C D, Yang X, Ranjan P, Tschaplinski T J, Ye C Y, Li T, Sterck L, Vanneste K, Murat F, Soler M, Clemente H S, Saidi N, Cassan-Wang H, Dunand C, Hefer C A, Bornberg-Bauer E, Kersting A R, Vining K, Amarasinghe V, Ranik M, Naithani S, Elser J, Boyd A E, Liston A, Spatafora J W, Dharmwardhana P, Raja R, Sullivan C, Romanel E, Alves-Ferreira M, Külheim C, Foley W, Carocha V, Paiva J, Kudrna D, Brommonschenkel S H, Pasquali G, Byrne M, Rigault P, Tibbits J, Spokevicius A, Jones R C, Steane D A, Vaillancourt R E, Potts B M, Joubert F, Barry K, Pappas G J, Strauss S H, Jaiswal P, Grima-Pettenati J, Salse J, Van de Peer Y, Rokhsar D S, Schmutz J. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [467university-of-chinese-academy-of-sciences-numeric.csl]

《[中国科学院大学研究生学位论文撰写规范指导意见](http://www.amss.ac.cn/yjsjy/xwxx/202207/t20220719_6482878.html)》（2022 年 3 月 7 日修订）顺序编码制样式。在 [002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl] 基础上修改。

显示效果：

> <sup>[1–12]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	田婉淑. 中国两栖爬行动物鉴定手册[M]. 北京: 科学出版社, 1986: 98-106.</div>
    <div class="csl-entry">[2]	赵耀东. 新时代的工业工程师[M]. 台北: 天下文化出版社, 1998.</div>
    <div class="csl-entry">[3]	辛希孟. 信息技术与信息服务国际研讨会论文集 A集[M]. 北京: 中国社会科学出版社, 1994.</div>
    <div class="csl-entry">[4]	Peebles P Z Jr. Probability, random variables, and random signal principles[M]. 4th ed. New York: McGraw Hill, 2001.</div>
    <div class="csl-entry">[5]	程根伟. 1998 年长江洪水的成因与减灾对策[M]//许厚泽, 赵其国. 长江流域洪涝灾害与科技对策. 北京: 科学出版社, 1999: 32-36.</div>
    <div class="csl-entry">[6]	中国地质学会. 地质评论[J]. 1936, 1(1). 北京: 地质出版社, 1936.</div>
    <div class="csl-entry">[7]	中国图书馆学会. 图书馆学通讯[J]. 1957. 北京: 北京图书馆, 1957: 98-106.</div>
    <div class="csl-entry">[8]	王静, 周启心, 田孟, 等. 树鼩模型:抑郁症的社会竞争失败与学习和记忆的被捕获条件反射[J]. 动物学研究, 2011, 32(1): 24-30.</div>
    <div class="csl-entry">[9]	郑本兴. 云南玉龙雪山第四纪冰期与冰川演化模式[J]. 冰川冻土, 2000, 22(1): 53-61.</div>
    <div class="csl-entry">[10]	傅刚, 赵承, 李佳路. 大风沙过后的思考[N]. 2000-04-12(14).</div>
    <div class="csl-entry">[11]	江锡洲. 一种温热外敷药制备方案: 88105607.3[P]. 1989-07-26.</div>
    <div class="csl-entry">[12]	西安电子科技大学. 光折变自适应光外差探测方法: 01128777.2[P]. 2002.</div>
  </div>
</blockquote>


## [468renmin-university-of-china.csl]

《[中国人民大学研究生手册](https://grs.ruc.edu.cn/info/1140/2509.htm)》（2021级）样式。

显示效果：

<blockquote>
  (姜明安, 1986)<br>
  (Gellhorn and Boyer, 1959)<br>
  (刘艺, 2001)<br>
  (Smith, 1987)<br>
  (马怀德, 2002)<br>
  (Wright, 1986)<br>
  (王常委, 1996)<br>
  (Rignall, 1991)<br>
  (温晓莉, 2001)<br>
  (CIA, 1997)<br>
  (王常委, 1996)<br>
  (Janet, 1999)<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">姜明安，《行政法概要》，北京，北京大学出版社，1986。</div>
    <div class="csl-entry">刘艺，“高校被诉引起的行政法思考”，《现代法学》，2001年第二期，93–97页。</div>
    <div class="csl-entry">马怀德，“公务法人问题研究”，劳凯声，《中国教育法制评论》，北京，教育科学出版社，2002，31–42。</div>
    <div class="csl-entry">王常委，“评家用汽车热销”（非出版物），中国人民大学红楼，1996。</div>
    <div class="csl-entry">王常委，1996年10月12日，“汽车”，评家用汽车热销，互联网，<a href="https://doi.org/writin-dev-h@mailbase.ac.uk">writin-dev-h@mailbase.ac.uk</a>，2001年5月4日。</div>
    <div class="csl-entry">温晓莉，“论知识经济社会微观公共权力的法律规则”，《法学》，2001年第十二期，11–16页。</div>
    <div class="csl-entry">CIA, “Australia”, In: <i>World Factbook</i>. [Online], 1997, Available at <a href="http://www.odci.gov/cia/publications/factbook/index.html">http://www.odci.gov/cia/publications/factbook/index.html</a> [January 14, 1999].</div>
    <div class="csl-entry">Gellhorn, E. and B. B. Boyer, <i>Administrative Law and Process in a Nutshell</i>, West Publishing Company, 1959.</div>
    <div class="csl-entry">Janet, S., “Essay Writing:Fred Astaire&#38; Gene Kelly”, 1999, Available <a href="https://doi.org/writin-dev-h@mailbase.ac.uk">writin-dev-h@mailbase.ac.uk</a>.</div>
    <div class="csl-entry">Rignall, M., <i>Oral Narratives in English and Greek</i>. Unpublished MA thesis (C.A.L.S), University of Reading, 1991.</div>
    <div class="csl-entry">Smith, M. L., “Publishing qualitative research”, <i>American Educational Research Journal</i> 24(2), 1987, 173–183.</div>
    <div class="csl-entry">Wright, P., “Reactions to an Ads contents versus judgements of Ads impact”, In: J. C. Olson and K. Sentis, eds. <i>Advertising and Consumer Psychology</i>. Vol. 3, New York: Praeger, 1986, 108–117.</div>
  </div>
</blockquote>


## [469college-of-animal-science-xinjiang-agricultural-university.csl]

新疆农业大学动科学院论文样式，要求中文条目作者要合并。

显示效果：

<blockquote>
  （库恩, 2012）<br>
  （Fourney, c1971）<br>
  （贾东琴和柯平, 2011）<br>
  （Fan和Sommers, 2013）<br>
  （武丽丽等, 2008）<br>
  （Myburg等, 2014）<br>
  （中国互联网络信息中心, 2012; Bawden, 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	Bawden D. Origins and concepts of digital literacy[Z](2008-05-04).</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2. Ames, Iowa: Blackwell Publishing, 2013.</div>
    <div class="csl-entry">[3]	Fourney M E. Advances in holographic photoelasticity[A]. Symposium on Applications of Holography in Mechanics[C]. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[4]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[5]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[A]. 中国图书馆学会年会论文集[C]. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[6]	库恩. 科学革命的结构: 第 4 版[M]. 2. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[7]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[8]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
  </div>
</blockquote>


## [470shanxi-agricultural-university.csl]

[山西农业大学](https://grs.sxau.edu.cn/info/1056/1397.htm)样式。

显示效果：

<blockquote>
  （库恩, 2012）<br>
  （Fourney, c1971）<br>
  （贾东琴和柯平, 2011）<br>
  （Fan &#38; Sommers, 2013）<br>
  （武丽丽等, 2008）<br>
  （Myburg et al., 2014）<br>
  （中国互联网络信息中心, 2012; Bawden, 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, New York: ASME, c1971: 17–38.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会, 编//中国图书馆学会年会论文集, 北京: 国家图书馆出版社, 2011: 45–52.</div>
    <div class="csl-entry">[4]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2 edition. Ames, Iowa: Blackwell Publishing, 2013: 25–26.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8–9.</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356–362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. .</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB](2008-05-04).</div>
  </div>
</blockquote>


## [471south-china-agricultural-university.csl]

《[华南农业大学研究生学位论文写作指南（2019年12月）](https://yjsy.scau.edu.cn/286/list.htm)》 样式，基于 [018gb-t-7714-2005-author-date-bilingual.csl] 进行修改。

显示效果：

<blockquote>
  （库恩，2012）<br>
  （Fourney，c1971）<br>
  （贾东琴和柯平，2011）<br>
  （Fan and Sommers，2013）<br>
  （武丽丽 等，2008）<br>
  （Myburg et al.，2014）<br>
  （中国互联网络信息中心，2012；Bawden，2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">贾东琴, 柯平. 2011. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社: 45-52.</div>
    <div class="csl-entry">库恩. 2012. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社.</div>
    <div class="csl-entry">武丽丽, 华一新, 张亚军, 等. 2008. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 33(5): 8-9.</div>
    <div class="csl-entry">中国互联网络信息中心. 2012. 第 29 次中国互联网络发展现状统计报告[R].</div>
    <div class="csl-entry">Bawden D. 2008. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
    <div class="csl-entry">Fan X, Sommers C H. 2013. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing: 25-26.</div>
    <div class="csl-entry">Fourney M E. c1971. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME: 17-38.</div>
    <div class="csl-entry">Myburg A A, Grattapaglia D, Tuskan G A, et al. 2014. The genome of eucalyptus grandis[J]. Nature, 510: 356-362.</div>
  </div>
</blockquote>


## [472china-agricultural-university-college-of-humanities-and-development-studies.csl]

中国农业大学《[人文与发展学院研究生学位论文参考文献格式要求](https://cohd.cau.edu.cn/art/2020/2/25/art_48083_939202.html)》（院发〔2020〕04号）样式，在 [011gb-t-7714-2015-author-date-bilingual-no-uppercase-no-url-doi-full-width-parentheses.csl] 基础上修改。

显示效果：

<blockquote>
  （费孝通，2012）<br>
  （爱德华·W. 萨义德，2007）<br>
  （Bernstein, 2010）<br>
  （费孝通，2000）<br>
  （郁建兴等，2009）<br>
  （Shanin, 2018）<br>
  （陈幸，2014）<br>
  （XXX，2019）<br>
  （周凡，2008）<br>
  （Bernstein, 2012）<br>
  （尹稚，2019）<br>
  （吴业苗，2018）<br>
  （van der Ploeg, 2016）<br>
  （洪银兴等，2018）<br>
  （Bernstein <i>et al.</i>, 2018）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">爱德华·W. 萨义德. 2007. 东方学[M]. 王宇根译. 上海: 生活·读书·新知三联书店.</div>
    <div class="csl-entry">陈幸. 2014. 浅析我国地理标志的保护模式[D]. 中国社会科学院研究生院硕士学位论文.</div>
    <div class="csl-entry">费孝通. 2000. 重建社会学与人类学的回顾和体会[J]. 中国社会科学, (1): 37-51.</div>
    <div class="csl-entry">费孝通. 2012. 乡土中国[M]. 北京: 北京大学出版社.</div>
    <div class="csl-entry">洪银兴, 刘伟, 高培勇等. 2018. “XXX新时代中国特色社会主义经济思想”笔谈[J]. 中国社会科学, (9): 4-73, 204-205.</div>
    <div class="csl-entry">吴业苗. 2018. 乡村振兴的别样探寻——江苏特色田园乡村建设及其推进[Z]. 中国社会学会 2018 年学术年会发展社会学分论坛：国家发展与乡村振兴. 南京, 7月16日.</div>
    <div class="csl-entry">XXX. 2019. 齐心开创共建“一带一路 美好未来——在第二届“一带一路”国际合作高峰论坛开幕式上的主旨演讲[EB/OL]. <a href="http://cpc.people.com.cn/n1/2019/0427/c64094-31053291.html">http://cpc.people.com.cn/n1/2019/0427/c64094-31053291.html</a>, 2019年4月27日.</div>
    <div class="csl-entry">尹稚. 2019. 更好实现以人为核心的城镇化[N]. 人民日报, 4月19日(9).</div>
    <div class="csl-entry">郁建兴, 高翔. 2009. 农业农村发展中的政府与市场、社会：一个分析框架[J]. 中国社会科学, (6): 89-103.</div>
    <div class="csl-entry">周凡. 2008. 导论: 激进政治视域中的农业与农民问题[A]. 何增科, 周凡主编. 农业的政治经济分析[C]. 重庆: 重庆出版社: 1-32.</div>
    <div class="csl-entry">Bernstein H. 2010. <i>Class Dynamics of Agrarian Change</i>[M]. Halifax: Fernwood Publishing.</div>
    <div class="csl-entry">Bernstein H. 2012. Agrarian Questions from Transition to Globalization[A]. In A. Haroon Akram-Lodhi and Cristobal Kay eds. <i>Peasants and Globalization: Political Economy, Rural Transformation, and the Agrarian Question</i>[C]. London: Routledge: 239-261.</div>
    <div class="csl-entry">Bernstein H., H. Friedmann, J. D. van der Ploeg, <i>et al.</i> 2018. Forum: Fifty Years of Debate on Peasantries, 1966–2016[J]. <i>The Journal of Peasant Studies</i>, 45(4): 689-714.</div>
    <div class="csl-entry">Shanin T. 2018. Marxism and the Vernacular Revolutionary Traditions[J]. <i>The Journal of Peasant Studies</i>, 45(7): 1151-1176.</div>
    <div class="csl-entry">van der Ploeg J. D. 2016. Family Farming in Europe and Central Asia: History, Characteristics, Threats and Potentials[Z/OL]. <i>Working Paper No. 153</i>, International Policy Centre for Inclusive Growth (IPC-IG). <a href="http://www.fao.org/3/a-i6536e.pdf">http://www.fao.org/3/a-i6536e.pdf</a>, 2020年2月16日.</div>
  </div>
</blockquote>


## [473chongqing-university-author-date.csl]

《[重庆大学博士、硕士学位论文格式标准（2023年修订）](http://graduate.cqu.edu.cn/xwsy/xwsq.htm)》著者-出版年制样式。在 [011gb-t-7714-2015-author-date-bilingual-no-uppercase-no-url-doi-full-width-parentheses.csl] 的基础上修改。

显示效果：

<blockquote>
  （库恩, 2012）<br>
  （Fourney, c1971）<br>
  （贾东琴 等, 2011）<br>
  （Fan et al., 2013）<br>
  （武丽丽 等, 2008）<br>
  （Myburg et al., 2014）<br>
  （中国互联网络信息中心, 2012; Bawden, 2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">贾东琴等, 2011. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社: 45-52.</div>
    <div class="csl-entry">库恩, 2012. 科学革命的结构: 第 4 版[M]. 金吾伦等, 译. 2 版. 北京: 北京大学出版社.</div>
    <div class="csl-entry">武丽丽等, 2008. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 33(5): 8-9.</div>
    <div class="csl-entry">中国互联网络信息中心, 2012. 第 29 次中国互联网络发展现状统计报告[R].</div>
    <div class="csl-entry">Bawden, D., 2008. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
    <div class="csl-entry">Fan, X. et al., 2013. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing: 25-26.</div>
    <div class="csl-entry">Fourney, M. E., c1971. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME: 17-38.</div>
    <div class="csl-entry">Myburg, A. A. et al., 2014. The genome of eucalyptus grandis[J]. Nature, 510: 356-362.</div>
  </div>
</blockquote>


## [474east-china-university-of-science-and-technology-undergraduate.csl]

[华东理工大学本科毕业论文](https://jwc.ecust.edu.cn/2023/1128/c3975a163108/page.htm) 样式，在 [002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl] 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	Fan X., Sommers C. H. Food Irradiation Research and Technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[A]. 见: 中国图书馆学会编. 中国图书馆学会年会论文集: 2011 年卷[C]. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	Fourney M. E. Advances in Holographic Photoelasticity[A]. In: Symposium on Applications of Holography in Mechanics[C]. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	Myburg A. A., Grattapaglia D., Tuskan G. A., et al. The Genome of Eucalyptus Grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
    <div class="csl-entry">[8]	Bawden D. Origins and Concepts of Digital Literacy[EB/OL]. 2008-05-04.</div>
  </div>
</blockquote>


## [475huazhong-university-of-science-and-technology-school-of-electrical-and-electronic-engineering.csl]

华中科技大学电气与电子工程学院样式（[#276](https://github.com/redleafnew/Chinese-STD-GB-T-7714-related-csl/issues/276)）。在 [003gb-t-7714-2015-numeric-bilingual-no-url-doi.csl] 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩．科学革命的结构: 第 4 版［M］．金吾伦，胡新和，译．第2版．北京：北京大学出版社，2012．</div>
    <div class="csl-entry">[2]	FAN X, SOMMERS C H. Food irradiation research and technology[M]. 2nd Edition. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴，柯平．面向数字素养的高校图书馆数字服务体系研究［C］//中国图书馆学会．中国图书馆学会年会论文集：2011 年卷．北京：国家图书馆出版社，2011：45-52．</div>
    <div class="csl-entry">[4]	FOURNEY M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽，华一新，张亚军，等．“北斗一号”监控管理网设计与实现［J］．测绘科学，2008，33（5）：8-9．</div>
    <div class="csl-entry">[6]	MYBURG A A, GRATTAPAGLIA D, TUSKAN G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心．第 29 次中国互联网络发展现状统计报告［R］．2012．</div>
    <div class="csl-entry">[8]	BAWDEN D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [476south-western-university-of-finance-and-ecnomics-authr-date.csl]

[西南财经大学毕业论文](https://gs.swufe.edu.cn/system/_content/download.jsp?urltype=news.DownloadAttachUrl&owner=1975186424&wbfileid=7C9185235E6B5CD0FDF7311006495CF6)样式。在 [journal-of-management-world.csl](http://www.zotero.org/styles/journal-of-management-world) 基础上修改。

显示效果：

<blockquote>
  （库恩，2012）<br>
  （Fourney，c1971）<br>
  （贾东琴、柯平，2011）<br>
  （Fan and Sommers，2013）<br>
  （武丽丽等，2008）<br>
  （Myburg et al.，2014）<br>
  （中国互联网络信息中心，2012；Bawden，2008）<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">[1]贾东琴、柯平：《面向数字素养的高校图书馆数字服务体系研究》，载中国图书馆学会主编：《中国图书馆学会年会论文集》，国家图书馆出版社，2011年.</div>
    <div class="csl-entry">[2]库恩：《科学革命的结构: 第 4 版》，北京大学出版社，2012年.</div>
    <div class="csl-entry">[3]武丽丽、华一新、张亚军、刘英敏：《“北斗一号”监控管理网设计与实现》，《测绘科学》，2008年第5期.</div>
    <div class="csl-entry">[4]中国互联网络信息中心：《第 29 次中国互联网络发展现状统计报告》，2012年.</div>
    <div class="csl-entry">[5]Bawden, D., 2008, <i>Origins and Concepts of Digital Literacy</i>.</div>
    <div class="csl-entry">[6]Fan, X. and Sommers, C. H., 2013, <i>Food Irradiation Research and Technology</i>, Ames, Iowa: Blackwell Publishing.</div>
    <div class="csl-entry">[7]Fourney, M. E., c1971, “Advances in Holographic Photoelasticity”, in <i>Symposium on Applications of Holography in Mechanics</i>, New York: ASME.</div>
    <div class="csl-entry">[8]Myburg, A. A., Grattapaglia, D., Tuskan, G. A., Hellsten, U., Hayes, R. D., Grimwood, J., Jenkins, J., Lindquist, E., Tice, H., Bauer, D., Goodstein, D. M., Dubchak, I., Poliakov, A., Mizrachi, E., Kullan, A. R. K., Hussey, S. G., Pinard, D., Merwe, K. van der, Singh, P., Jaarsveld, I. van, Silva-Junior, O. B., Togawa, R. C., Pappas, M. R., Faria, D. A., Sansaloni, C. P., Petroli, C. D., Yang, X., Ranjan, P., Tschaplinski, T. J., Ye, C. Y., Li, T., Sterck, L., Vanneste, K., Murat, F., Soler, M., Clemente, H. S., Saidi, N., Cassan-Wang, H., Dunand, C., Hefer, C. A., Bornberg-Bauer, E., Kersting, A. R., Vining, K., Amarasinghe, V., Ranik, M., Naithani, S., Elser, J., Boyd, A. E., Liston, A., Spatafora, J. W., Dharmwardhana, P., Raja, R., Sullivan, C., Romanel, E., Alves-Ferreira, M., Külheim, C., Foley, W., Carocha, V., Paiva, J., Kudrna, D., Brommonschenkel, S. H., Pasquali, G., Byrne, M., Rigault, P., Tibbits, J., Spokevicius, A., Jones, R. C., Steane, D. A., Vaillancourt, R. E., Potts, B. M., Joubert, F., Barry, K., Pappas, G. J., Strauss, S. H., Jaiswal, P., Grima-Pettenati, J., Salse, J., Van de Peer, Y., Rokhsar, D. S. and Schmutz, J., 2014, “The Genome of Eucalyptus Grandis”, <i>Nature</i>, vol.510, pp.356~362.</div>
  </div>
</blockquote>


## [477renmin-university-of-china-undergranduate.csl]

中国人民大学《[本科毕业论文(设计)管理办法补充说明及指导手册填写要求](http://jiaowu.ruc.edu.cn/docs/2023-01/f90c79b8b21c4229bbe7f9c79abb7c14.doc)》（2014-2015学年校办字33号）样式。基于 [002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl] 和 APA 进行修改。

显示效果：

> [1–15]

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	王众托. 企业信息化与管理变革[M]. 北京: 中国人民大学出版社, 2001.</div>
    <div class="csl-entry">[2]	夸美纽斯. 大教学论[M]. 傅任敢, 译. 教育科学出版社, 1999.</div>
    <div class="csl-entry">[3]	Powell, W. W., &#38; DiMaggio, P. J. (1991). <i>The New Institutionalism in Organizational Analysis</i> (pp. 78–80). University of Chicago Press.</div>
    <div class="csl-entry">[4]	孙立平. 总体性社会研究——对改革前中国社会结构的概要分析[J]. 中国社会科学, 1993, (1): 190–192.</div>
    <div class="csl-entry">[5]	Bloland, H. G. (1979). Interpretive Sociologies and the Study of Higher Education Organizations. <i>The Review of Higher Education</i>, <i>3</i>(1), 1–14.</div>
    <div class="csl-entry">[6]	张永平. 全球化背景下中国高等教育市场化的特点分析——独立学院的个案研究[D]. 香港: 香港中文大学, 2009: 105–109, 137–147.</div>
    <div class="csl-entry">[7]	陈志平. 减灾设计研究新动态[N]. 科技日报, 1997-12-12(5).</div>
    <div class="csl-entry">[8]	王大泉. 我国高等学校章程建设的现状、问题与发展路径[A]. 北京大学教育法研究中心, 北京大学宪法与行政法研究中心. 大学治理与大学章程理论研讨会论文集[C]. 2011: 227.</div>
    <div class="csl-entry">[9]	北京大学现行章程[A]. 王学珍, 郭建荣. 北京大学史料(第2卷)[M]. 北京: 北京大学出版社, 2000: 92.</div>
    <div class="csl-entry">[10]	中华人民共和国高等教育法[A]. 教育部法制办公室. 教育法律法规规章汇编[M]. 北京: 教育科学出版社, 2004: 75.</div>
    <div class="csl-entry">[11]	卢晖林, 郭于华, 潘毅. “两岸三地”高校富士康调查报告[R]. 北京: 北京大学社会学系, 2010.</div>
    <div class="csl-entry">[12]	王旭明. 关于高考的六点思考[EB/OL]. <a href="http://www.edu.cn/gaokao30_5897/20070719/t20070719_244190.shtml">http://www.edu.cn/gaokao30_5897/20070719/t20070719_244190.shtml</a>. 2008年12月9日访问.</div>
    <div class="csl-entry">[13]	中共温州市委, 温州市人民政府. 温州市关于实施国家民办教育综合改革试点加快教育改革与发展的若干意见[Z]. 温委〔2011〕8 号. 2010-10-20.</div>
    <div class="csl-entry">[14]	GB/T 16159—1996, 汉语拼音正词法基本规则[S].</div>
    <div class="csl-entry">[15]	姜锡洲. 一种温热外敷药制备方案: 881056073[P]. 中国专利: 1989-07-26.</div>
  </div>
</blockquote>


## [478capital-medical-university.csl]

《[首都医科大学研究生学位论文](https://yjsh.ccmu.edu.cn/xwgz/lwdb/65d371968cab4a54ad9a1531f3538700.htm)》（2023-04-26）样式，在 [019gb-t-7714-1987-numeric-bilingual.csl] 基础上修改。

显示效果：

> <sup>[1–7]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	张昆, 冯立群, 余昌钰, 徐晓东. 机器人柔性手腕的球面齿轮设计研究. 清华大学学报, 1994, 34(2): 1-7.</div>
    <div class="csl-entry">[2]	竺可桢. 物理学论. 北京: 科学出版社, 1973: 56-60.</div>
    <div class="csl-entry">[3]	Dupont B. Bone marrow transplantation in severe combined immunodeficiency with an unrelated MLC compatible donor. In: White H J, Smith R, eds. Proceedings of the third annual meeting of the International Society for Experimental Hematology. Houston: International Society for Experimental Hematology, 1974: 44-46.</div>
    <div class="csl-entry">[4]	郑开青. 通讯系统模拟及软件: [硕士学位论文]. 北京: 清华大学无线电系, 1987.</div>
    <div class="csl-entry">[5]	姜锡洲. 一种温热外敷药制备方案. 中国专利, 88105607.3, 1980-07-26.</div>
    <div class="csl-entry">[6]	国家市场监督管理总局. GB 3100—1993. 国际单位制及其应用. 北京: 中国标准出版社, 1993.</div>
    <div class="csl-entry">[7]	Ratziu V, Francque S, Sanyal A. Breakthroughs in therapies for NASH and remaining challenges. J Hepatol, 2022, 76(6): 1263-1278.</div>
  </div>
</blockquote>


## [479sichuan-agricultural-university.csl]

《[四川农业大学研究生学位论文写作指南](https://github.com/redleafnew/Chinese-STD-GB-T-7714-related-csl/issues/283)》（研发〔2024〕1 号，2024-03-26）样式。在 [002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl] 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity[C]. Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [480northwest-a-and-f-university-undergraduate.csl]

西北农林科技大学《[关于2024届本科毕业论文（设计）开题工作安排的通知](https://sjxy.nwsuaf.edu.cn/tzggB/c371c167584f4a6aba1575243b38e8a1.htm)》（2023-10-31）附表5 本科生毕业论文（设计）撰写规范。
在 [409northwest-a-and-f-university.csl] 的基础上修改。

显示效果：

<blockquote>
  (库恩 2012)<br>
  (Fourney c1971)<br>
  (贾东琴和柯平 2011)<br>
  (Fan and Sommers 2013)<br>
  (武丽丽等 2008)<br>
  (Myburg et al. 2014)<br>
  (中国互联网络信息中心 2012; Bawden 2008)<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">贾东琴, 柯平. 2011. 面向数字素养的高校图书馆数字服务体系研究. 见: 中国图书馆学会 (主编). 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社: 45~52</div>
    <div class="csl-entry">库恩. 2012. 科学革命的结构: 第 4 版. 第二版. 金吾伦, 胡新和译. 北京: 北京大学出版社</div>
    <div class="csl-entry">武丽丽, 华一新, 张亚军, 刘英敏. 2008. “北斗一号”监控管理网设计与实现. 测绘科学, 33(5): 8~9</div>
    <div class="csl-entry">中国互联网络信息中心. 2012. 第 29 次中国互联网络发展现状统计报告</div>
    <div class="csl-entry">Bawden D. 2008. Origins and concepts of digital literacy. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a> [2013-03-08]</div>
    <div class="csl-entry">Fan X, Sommers C H. 2013. Food irradiation research and technology. 2nd ed. Ames, Iowa: Blackwell Publishing: 25~26</div>
    <div class="csl-entry">Fourney M E. c1971. Advances in holographic photoelasticity. In: Symposium on Applications of Holography in Mechanics. New York: ASME: 17~38</div>
    <div class="csl-entry">Myburg A A, Grattapaglia D, Tuskan G A, Hellsten U, Hayes R D, Grimwood J, Jenkins J, Lindquist E, Tice H, Bauer D, Goodstein D M, Dubchak I, Poliakov A, Mizrachi E, Kullan A R K, Hussey S G, Pinard D, van der Merwe K, Singh P, van Jaarsveld I, Silva-Junior O B, Togawa R C, Pappas M R, Faria D A, Sansaloni C P, Petroli C D, Yang X, Ranjan P, Tschaplinski T J, Ye C Y, Li T, Sterck L, Vanneste K, Murat F, Soler M, Clemente H S, Saidi N, Cassan-Wang H, Dunand C, Hefer C A, Bornberg-Bauer E, Kersting A R, Vining K, Amarasinghe V, Ranik M, Naithani S, Elser J, Boyd A E, Liston A, Spatafora J W, Dharmwardhana P, Raja R, Sullivan C, Romanel E, Alves-Ferreira M, Külheim C, Foley W, Carocha V, Paiva J, Kudrna D, Brommonschenkel S H, Pasquali G, Byrne M, Rigault P, Tibbits J, Spokevicius A, Jones R C, Steane D A, Vaillancourt R E, Potts B M, Joubert F, Barry K, Pappas G J, Strauss S H, Jaiswal P, Grima-Pettenati J, Salse J, Van de Peer Y, Rokhsar D S, Schmutz J. 2014. The genome of eucalyptus grandis. <i>Nature</i>, 510: 356~362</div>
  </div>
</blockquote>


## [481guangdong-university-of-technology.csl]

[广东工业大学](https://yjs.gdut.edu.cn/info/1124/3127.htm)样式。在 [china-national-standard-gb-t-7714-2015-numeric.csl](http://www.zotero.org/styles/china-national-standard-gb-t-7714-2015-numeric) 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity[C]. Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [482china-university-of-mining-and-technology.csl]

[中国矿业大学研究生学位论文](https://gs.cumt.edu.cn/info/1049/3149.htm)样式。在 [china-national-standard-gb-t-7714-2015-numeric.csl](http://www.zotero.org/styles/china-national-standard-gb-t-7714-2015-numeric) 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
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
</blockquote>


## [483guangdong-university-of-technology.csl]

《[广东工业大学研究生学位论文撰写规范](https://yjs.gdut.edu.cn/info/1124/3127.htm)》（2023年9月修订）样式。在 [002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl] 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity[C]. Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [484china-agricultural-university-natural-sciences.csl]

[《中国农业大学研究生学位论文格式及书写规范》（研生 (2019) 10 号）](http://gradsch.cau.edu.cn/homepage/infoSingleArticle.do?articleId=4316)样式。在 [002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl] 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52</div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 刘英敏. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, Hellsten U, Hayes R D, Grimwood J, Jenkins J, Lindquist E, Tice H, Bauer D, Goodstein D M, Dubchak I, Poliakov A, Mizrachi E, Kullan A R K, Hussey S G, Pinard D, van der Merwe K, Singh P, van Jaarsveld I, Silva-Junior O B, Togawa R C, Pappas M R, Faria D A, Sansaloni C P, Petroli C D, Yang X, Ranjan P, Tschaplinski T J, Ye C Y, Li T, Sterck L, Vanneste K, Murat F, Soler M, Clemente H S, Saidi N, Cassan-Wang H, Dunand C, Hefer C A, Bornberg-Bauer E, Kersting A R, Vining K, Amarasinghe V, Ranik M, Naithani S, Elser J, Boyd A E, Liston A, Spatafora J W, Dharmwardhana P, Raja R, Sullivan C, Romanel E, Alves-Ferreira M, Külheim C, Foley W, Carocha V, Paiva J, Kudrna D, Brommonschenkel S H, Pasquali G, Byrne M, Rigault P, Tibbits J, Spokevicius A, Jones R C, Steane D A, Vaillancourt R E, Potts B M, Joubert F, Barry K, Pappas G J, Strauss S H, Jaiswal P, Grima-Pettenati J, Salse J, Van de Peer Y, Rokhsar D S, Schmutz J. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a></div>
  </div>
</blockquote>


## [485chinese-academy-of-forestry.csl]

[中国林业科学研究院](https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D8055ED3A7E05397BE0A0AB82A)样式。在 [china-national-standard-gb-t-7714-2015-numeric.csl](http://www.zotero.org/styles/china-national-standard-gb-t-7714-2015-numeric) 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩．科学革命的结构: 第 4 版［M］．金吾伦，胡新和，译．2 版．北京：北京大学出版社，2012．</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴，柯平．面向数字素养的高校图书馆数字服务体系研究［C］//中国图书馆学会．中国图书馆学会年会论文集：2011 年卷．北京：国家图书馆出版社，2011：45-52．</div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽，华一新，张亚军，等．“北斗一号”监控管理网设计与实现［J］．测绘科学，2008，33（5）：8-9．</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心．第 29 次中国互联网络发展现状统计报告［R］．2012．</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [486peking-university-numeric.csl]

[《北京大学研究生学位论文写作指南》](https://grs.pku.edu.cn/xwgz11/xwsy11/ssxw111/clxz08/346392.htm)样式。在 [tsinghua-university-numeric.csl](http://www.zotero.org/styles/tsinghua-university-numeric) 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
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
</blockquote>


## [487heilongjiang-university-undergraduate.csl]

[《黑龙江大学本科生毕业论文（设计）撰写规范》（2015-06-24）](https://jsjrj.hlju.edu.cn/info/1975/1236.htm)样式。在 [002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl] 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版[M]. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	X. Fan, C. H. Sommers. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究[C]. 中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011: 45-52.</div>
    <div class="csl-entry">[4]	M. E. Fourney. Advances in holographic photoelasticity[C]. Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现[J]. 测绘科学, 2008, 33(5): 8-9.</div>
    <div class="csl-entry">[6]	A. A. Myburg, D. Grattapaglia, G. A. Tuskan, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告[R]. 2012.</div>
    <div class="csl-entry">[8]	D. Bawden. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [488xi-an-university-of-technology.csl]

[《西安理工大学研究生学位论文撰写规范》（2018-07-18）附录H-图书馆提供的《文后参考文献著录规则》](https://gitee.com/link?target=https%3A%2F%2Fyjsy.xaut.edu.cn%2Finfo%2F1080%2F1732.htm)样式。在 [002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl] 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩．科学革命的结构: 第 4 版［M］．金吾伦，胡新和，译．2 版．北京：北京大学出版社，2012.</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴，柯平．面向数字素养的高校图书馆数字服务体系研究［C］，中国图书馆学会，中国图书馆学会年会论文集：2011 年卷．北京：国家图书馆出版社，2011：45-52.</div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity[C], Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽，华一新，张亚军，等．“北斗一号”监控管理网设计与实现［J］．测绘科学，2008，33（5）：8-9.</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心．第 29 次中国互联网络发展现状统计报告［R］．2012.</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [489wuhan-university-of-technology.csl]

[武汉理工大学（本科生）](http://jwc.whut.edu.cn/Web/Details?id=41&type=010205)样式。在 [002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl] 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩．科学革命的结构: 第 4 版[M]．金吾伦，胡新和，译．2 版．北京：北京大学出版社，2012.</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology[M]. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013: 25-26.</div>
    <div class="csl-entry">[3]	贾东琴，柯平．面向数字素养的高校图书馆数字服务体系研究[C]//中国图书馆学会．中国图书馆学会年会论文集：2011 年卷．北京：国家图书馆出版社，2011：45-52.</div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity[C]//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971: 17-38.</div>
    <div class="csl-entry">[5]	武丽丽，华一新，张亚军，等．“北斗一号”监控管理网设计与实现[J]．测绘科学，2008，33（5）：8-9.</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis[J]. Nature, 2014, 510: 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心．第 29 次中国互联网络发展现状统计报告[R]．2012.</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy[EB/OL]. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [490xidian-university-undergraduate.csl]

[《西安电子科技大学本科生毕业设计（论文）撰写规范》（2009-05-16）](https://see.xidian.edu.cn/html/news/2703.html)样式。在 [002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl] 基础上修改。

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. 科学革命的结构: 第 4 版. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	Fan X, Sommers C H. Food irradiation research and technology. 2nd ed. Ames, Iowa: Blackwell Publishing, 2013. 25-26.</div>
    <div class="csl-entry">[3]	贾东琴, 柯平. 面向数字素养的高校图书馆数字服务体系研究//中国图书馆学会. 中国图书馆学会年会论文集: 2011 年卷. 北京: 国家图书馆出版社, 2011. 45-52.</div>
    <div class="csl-entry">[4]	Fourney M E. Advances in holographic photoelasticity//Symposium on Applications of Holography in Mechanics, August 23–25, 1971, University of Southern California, Los Angeles, California. New York: ASME, c1971. 17-38.</div>
    <div class="csl-entry">[5]	武丽丽, 华一新, 张亚军, 等. “北斗一号”监控管理网设计与实现. 测绘科学, 2008, 33(5). 8-9.</div>
    <div class="csl-entry">[6]	Myburg A A, Grattapaglia D, Tuskan G A, et al. The genome of eucalyptus grandis. Nature, 2014, 510. 356-362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. 第 29 次中国互联网络发展现状统计报告. 2012.</div>
    <div class="csl-entry">[8]	Bawden D. Origins and concepts of digital literacy. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [501yuzuc-at-title-at-author-at-year.csl]

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body hanging-indent">
    <div class="csl-entry">@科学革命的结构: 第 4 版@库恩. (@2012)</div>
    <div class="csl-entry">@Food irradiation research and technology@Fan X, Sommers C H. (@2013)</div>
    <div class="csl-entry">@面向数字素养的高校图书馆数字服务体系研究@贾东琴, 柯平. (@2011)</div>
    <div class="csl-entry">@Advances in holographic photoelasticity@Fourney M E. (@c1971)</div>
    <div class="csl-entry">@“北斗一号”监控管理网设计与实现@武丽丽, 华一新, 等. (@2008)</div>
    <div class="csl-entry">@The genome of eucalyptus grandis@Myburg A A, Grattapaglia D, et al. (@2014)</div>
    <div class="csl-entry">@第 29 次中国互联网络发展现状统计报告@中国互联网络信息中心. (@2012)</div>
    <div class="csl-entry">@Origins and concepts of digital literacy@Bawden D. (@2008)</div>
  </div>
</blockquote>


## [502export-authors.csl]

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">库恩	</div>
    <div class="csl-entry">Fan Xuetong, Sommers Christopher H	</div>
    <div class="csl-entry">贾东琴, 柯平	</div>
    <div class="csl-entry">Fourney M E	</div>
    <div class="csl-entry">武丽丽, 华一新, 张亚军, 刘英敏	</div>
    <div class="csl-entry">Myburg Alexander A, Grattapaglia Dario, Tuskan Gerald A, Hellsten Uffe, Hayes Richard D, Grimwood Jane, Jenkins Jerry, Lindquist Erika, Tice Hope, Bauer Diane, Goodstein David M, Dubchak Inna, Poliakov Alexandre, Mizrachi Eshchar, Kullan Anand R K, Hussey Steven G, Pinard Desre, van der Merwe Karen, Singh Pooja, van Jaarsveld Ida, Silva-Junior Orzenil B, Togawa Roberto C, Pappas Marilia R, Faria Danielle A, Sansaloni Carolina P, Petroli Cesar D, Yang Xiaohan, Ranjan Priya, Tschaplinski Timothy J, Ye Chu-Yu, Li Ting, Sterck Lieven, Vanneste Kevin, Murat Florent, Soler Marçal, Clemente Hélène San, Saidi Naijib, Cassan-Wang Hua, Dunand Christophe, Hefer Charles A, Bornberg-Bauer Erich, Kersting Anna R, Vining Kelly, Amarasinghe Vindhya, Ranik Martin, Naithani Sushma, Elser Justin, Boyd Alexander E, Liston Aaron, Spatafora Joseph W, Dharmwardhana Palitha, Raja Rajani, Sullivan Christopher, Romanel Elisson, Alves-Ferreira Marcio, Külheim Carsten, Foley William, Carocha Victor, Paiva Jorge, Kudrna David, Brommonschenkel Sergio H, Pasquali Giancarlo, Byrne Margaret, Rigault Philippe, Tibbits Josquin, Spokevicius Antanas, Jones Rebecca C, Steane Dorothy A, Vaillancourt René E, Potts Brad M, Joubert Fourie, Barry Kerrie, Pappas Georgios J, Strauss Steven H, Jaiswal Pankaj, Grima-Pettenati Jacqueline, Salse Jérôme, Van de Peer Yves, Rokhsar Daniel S, Schmutz Jeremy	</div>
    <div class="csl-entry">中国互联网络信息中心	</div>
    <div class="csl-entry">Bawden D	</div>
  </div>
</blockquote>


## [503export-journal-year-vol-pages.csl]

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">. 金吾伦, 胡新和, 译. 2 版. 北京: 北京大学出版社, 2012	</div>
    <div class="csl-entry">. 2 版. Ames, Iowa: Blackwell Publishing, 2013: 25–26	</div>
    <div class="csl-entry">. 中国图书馆学会, 编//中国图书馆学会年会论文集. 北京: 国家图书馆出版社, 2011: 45–52	</div>
    <div class="csl-entry">//Symposium on Applications of Holography in Mechanics. New York: ASME, c1971: 17–38	</div>
    <div class="csl-entry">测绘科学 (2008, 33(5): 8–9)	 </div>
    <div class="csl-entry">Nature (2014, 510: 356–362)	 </div>
    <div class="csl-entry">. (2012-01-16) . [2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>	</div>
    <div class="csl-entry">. (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>	</div>
  </div>
</blockquote>


## [504expport-author-journal-vol-issue-pages.csl]

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">[1]	库恩. . 金吾伦等, 译. 2 版. 北京: 北京大学出版社, 2012.</div>
    <div class="csl-entry">[2]	Fan et al. . 2 edition. Ames, Iowa: Blackwell Publishing, 2013: 25–26.</div>
    <div class="csl-entry">[3]	贾东琴等. . 中国图书馆学会, 编//中国图书馆学会年会论文集. 北京: 国家图书馆出版社, 2011: 45–52.</div>
    <div class="csl-entry">[4]	Fourney. //Symposium on Applications of Holography in Mechanics. New York: ASME, c1971: 17–38.</div>
    <div class="csl-entry">[5]	武丽丽等. 测绘科学, 2008, 33(5): 8–9.</div>
    <div class="csl-entry">[6]	Myburg et al. Nature, 2014, 510: 356–362.</div>
    <div class="csl-entry">[7]	中国互联网络信息中心. . (2012-01-16) . [2013-03-26]. <a href="http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680">http://www.cnnic.net.cn/hlwfzyj/hlwxzbg/201201/P020120709345264469680</a>.</div>
    <div class="csl-entry">[8]	Bawden. . (2008-05-04)[2013-03-08]. <a href="http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf">http://www.soi.city.ac.uk/~dbawden/digital%20literacy%20chapter.pdf</a>.</div>
  </div>
</blockquote>


## [505export-title.csl]

显示效果：

> <sup>[1–8]</sup>

<blockquote>
  <div class="csl-bib-body second-field-align-flush">
    <div class="csl-entry">科学革命的结构: 第 4 版	</div>
    <div class="csl-entry">Food irradiation research and technology	</div>
    <div class="csl-entry">面向数字素养的高校图书馆数字服务体系研究	</div>
    <div class="csl-entry">Advances in holographic photoelasticity	</div>
    <div class="csl-entry">“北斗一号”监控管理网设计与实现	</div>
    <div class="csl-entry">The genome of eucalyptus grandis	</div>
    <div class="csl-entry">第 29 次中国互联网络发展现状统计报告	</div>
    <div class="csl-entry">Origins and concepts of digital literacy	</div>
  </div>
</blockquote>


## [506export-author-et-al-year.csl]

显示效果：

<blockquote>
  (库恩, 2012)<br>
  (Fourney, c1971)<br>
  (贾东琴 等, 2011)<br>
  (Fan et al., 2013)<br>
  (武丽丽 等, 2008)<br>
  (Myburg et al., 2014)<br>
  (中国互联网络信息中心, 2012; Bawden, 2008)<br>
</blockquote>

<blockquote>
  <div class="csl-bib-body">
    <div class="csl-entry">贾东琴等, 2011.</div>
    <div class="csl-entry">库恩, 2012.</div>
    <div class="csl-entry">武丽丽等, 2008.</div>
    <div class="csl-entry">中国互联网络信息中心, 2012.</div>
    <div class="csl-entry">Bawden, 2008.</div>
    <div class="csl-entry">Fan <i>et al.</i>, 2013.</div>
    <div class="csl-entry">Fourney, c1971.</div>
    <div class="csl-entry">Myburg <i>et al.</i>, 2014.</div>
  </div>
</blockquote>


## [507expport-journal-name.csl]

显示效果：

<div class="csl-bib-body">
  <div class="csl-entry">Symposium on Applications of Holography in Mechanics</div>
  <div class="csl-entry">中国图书馆学会年会论文集</div>
  <div class="csl-entry">测绘科学</div>
  <div class="csl-entry">Nature</div>
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

`Zotero` 第三方工具条：（作者，年代）→作者（年代）快速切换，支持`WPS Office` https://zhuanlan.zhihu.com/p/648205028

`WPS Office`中使用`Zotero`插入参考文献不报错的方法<https://zhuanlan.zhihu.com/p/580194390>。

`WPS Office`中`Zotero`工具条显示全部图标的方法<https://zhuanlan.zhihu.com/p/580527678>。

WPS Office中添加Zotero工具条的方法<https://zhuanlan.zhihu.com/p/580205995>。

`Zotero`+`Word 2016` 参考文献中英文混排，解决 `et al` 和`等`的问题 <https://zhuanlan.zhihu.com/p/58237038>。

`Zotero` 参考文献中论文题目部分单词实现斜体及上标、下标效果 <https://zhuanlan.zhihu.com/p/57638901>。

`Zotero` 通过 `DOI` 导入文献时能否带摘要 <https://zhuanlan.zhihu.com/p/56981700>。

`Word` 中加载 `Zotero` 工具条时提示加载宏的取消方法 <https://zhuanlan.zhihu.com/p/56551176>。

给 `Word` 中的 `Zotero` 设置快捷键 <https://zhuanlan.zhihu.com/p/55259481>。


[000gb-t-7714-2015-numeric-bilingual.csl]: 000gb-t-7714-2015-numeric-bilingual.csl
[001gb-t-7714-2015-author-date-bilingual.csl]: 001gb-t-7714-2015-author-date-bilingual.csl
[002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl]: 002gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi.csl
[003gb-t-7714-2015-numeric-bilingual-no-url-doi.csl]: 003gb-t-7714-2015-numeric-bilingual-no-url-doi.csl
[007gb-t-7714-2015-numeric-bilingual-no-uppercase.csl]: 007gb-t-7714-2015-numeric-bilingual-no-uppercase.csl
[009gb-t-7714-2015-numeric-bilingual-no-uppercase-page-out.csl]: 009gb-t-7714-2015-numeric-bilingual-no-uppercase-page-out.csl
[010gb-t-7714-2015-author-date-bilingual-no-uppercase.csl]: 010gb-t-7714-2015-author-date-bilingual-no-uppercase.csl
[011gb-t-7714-2015-author-date-bilingual-no-uppercase-no-url-doi-full-width-parentheses.csl]: 011gb-t-7714-2015-author-date-bilingual-no-uppercase-no-url-doi-full-width-parentheses.csl
[016nsfc-author-date.csl]: 016nsfc-author-date.csl
[017gb-t-7714-2005-numeric-bilingual.csl]: 017gb-t-7714-2005-numeric-bilingual.csl
[018gb-t-7714-2005-author-date-bilingual.csl]: 018gb-t-7714-2005-author-date-bilingual.csl
[019gb-t-7714-1987-numeric-bilingual.csl]: 019gb-t-7714-1987-numeric-bilingual.csl
[020gb-t-7714-2015-numeric-fullwidth-punctuations.csl]: 020gb-t-7714-2015-numeric-fullwidth-punctuations.csl
[021gb-t-7714-2015-author-date-fullwidth-punctuations.csl]: 021gb-t-7714-2015-author-date-fullwidth-punctuations.csl
[022journals-of-natural-sciences-in-chinese-universities.csl]: 022journals-of-natural-sciences-in-chinese-universities.csl
[023gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi-with-locator.csl]: 023gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi-with-locator.csl
[101chinese-medical-association.csl]: 101chinese-medical-association.csl
[102transactions-of-the-chinese-society-of-agricultural-engineering.csl]: 102transactions-of-the-chinese-society-of-agricultural-engineering.csl
[103ieee-bl.csl]: 103ieee-bl.csl
[104acta-physica-sinica.csl]: 104acta-physica-sinica.csl
[105acta-physica-sinica-zotero-res.csl]: 105acta-physica-sinica-zotero-res.csl
[106journal-of-inorganic-materials.csl]: 106journal-of-inorganic-materials.csl
[107chinese-journal-of-cardiology.csl]: 107chinese-journal-of-cardiology.csl
[108journal-of-nuclear-agricultural-sciences.csl]: 108journal-of-nuclear-agricultural-sciences.csl
[109chinese-public-administration.csl]: 109chinese-public-administration.csl
[110food-science.csl]: 110food-science.csl
[111acta-agriculurae-boreali-sinica.csl]: 111acta-agriculurae-boreali-sinica.csl
[112scientia-agricultura-sinica.csl]: 112scientia-agricultura-sinica.csl
[113acta-microbiologica-sinica.csl]: 113acta-microbiologica-sinica.csl
[114food-materials-research.csl]: 114food-materials-research.csl
[115advances-in-water-science.csl]: 115advances-in-water-science.csl
[116management-review.csl]: 116management-review.csl
[117chinese-journal-of-eco-agriculture.csl]: 117chinese-journal-of-eco-agriculture.csl
[118journal-of-china-agricultural-university.csl]: 118journal-of-china-agricultural-university.csl
[119studies-in-science-of-science.csl]: 119studies-in-science-of-science.csl
[120journal-of-modern-power-systems-and-clean-energy.csl]: 120journal-of-modern-power-systems-and-clean-energy.csl
[121acta-ecologica-sinica.csl]: 121acta-ecologica-sinica.csl
[122journal-of-iron-and-steel-research.csl]: 122journal-of-iron-and-steel-research.csl
[123hydro-science-and-engineering.csl]: 123hydro-science-and-engineering.csl
[124transactions-of-nonferrous-metals-society-of-china.csl]: 124transactions-of-nonferrous-metals-society-of-china.csl
[201comparative-economic-and-social-systems.csl]: 201comparative-economic-and-social-systems.csl
[202journal-of-management-world.csl]: 202journal-of-management-world.csl
[203economic-research-journal.csl]: 203economic-research-journal.csl
[204financial-research-journal.csl]: 204financial-research-journal.csl
[205business-management-journal.csl]: 205business-management-journal.csl
[206accounting-research.csl]: 206accounting-research.csl
[208chinas-industrial-economics.csl]: 208chinas-industrial-economics.csl
[209sociological-studies.csl]: 209sociological-studies.csl
[210advances-in-psychological-science.csl]: 210advances-in-psychological-science.csl
[211journal-of-plant-protection.csl]: 211journal-of-plant-protection.csl
[212journal-of-marketing-science.csl]: 212journal-of-marketing-science.csl
[215international-economics-and-trade-research.csl]: 215international-economics-and-trade-research.csl
[216acta-psychologica-sinica.csl]: 216acta-psychologica-sinica.csl
[217the-journal-of-world-economy.csl]: 217the-journal-of-world-economy.csl
[218biotechnology-advances-custom.csl]: 218biotechnology-advances-custom.csl
[219china-economic-quarterly.csl]: 219china-economic-quarterly.csl
[220biodiversity-science.csl]: 220biodiversity-science.csl
[221new-finance.csl]: 221new-finance.csl
[222journal-of-finance-and-economics.csl]: 222journal-of-finance-and-economics.csl
[223journal-of-shanghai-university-of-international-business-and-economics.csl]: 223journal-of-shanghai-university-of-international-business-and-economics.csl
[224journal-of-meteorological-research.csl]: 224journal-of-meteorological-research.csl
[225acta-geologica-sinica.csl]: 225acta-geologica-sinica.csl
[226communication-and-society.csl]: 226communication-and-society.csl
[301manual-of-legal-citation-multi-lingual.csl]: 301manual-of-legal-citation-multi-lingual.csl
[302historical-research.csl]: 302historical-research.csl
[303gb-t-7714-2015-note-bilingual.csl]: 303gb-t-7714-2015-note-bilingual.csl
[304gb-t-7714-2015-note-bilingual-no-ibid.csl]: 304gb-t-7714-2015-note-bilingual-no-ibid.csl
[305gb-t-7714-2015-note-bilingual-no-uppercase-no-url-doi.csl]: 305gb-t-7714-2015-note-bilingual-no-uppercase-no-url-doi.csl
[306manual-of-legal-citation-multi-lingual-no-ibid.csl]: 306manual-of-legal-citation-multi-lingual-no-ibid.csl
[307studies-on-marxism.csl]: 307studies-on-marxism.csl
[308world-history.csl]: 308world-history.csl
[309journal-of-world-economics-and-politics.csl]: 309journal-of-world-economics-and-politics.csl
[310modern-chinese-literature-studies.csl]: 310modern-chinese-literature-studies.csl
[311social-sciences-in-china.csl]: 311social-sciences-in-china.csl
[312journal-of-international-relations.csl]: 312journal-of-international-relations.csl
[313international-security-studies.csl]: 313international-security-studies.csl
[314the-journal-of-international-studies.csl]: 314the-journal-of-international-studies.csl
[315foreign-affairs-review.csl]: 315foreign-affairs-review.csl
[316pacific-journal.csl]: 316pacific-journal.csl
[317journal-of-contemporary-asia-pacific-studies.csl]: 317journal-of-contemporary-asia-pacific-studies.csl
[318exploration-and-free-views.csl]: 318exploration-and-free-views.csl
[319literary-review.csl]: 319literary-review.csl
[320literary-and-artistic-contention.csl]: 320literary-and-artistic-contention.csl
[321journalism-and-communication.csl]: 321journalism-and-communication.csl
[322contemporary-international-relations.csl]: 322contemporary-international-relations.csl
[323gb-t-7714-2015-note-fullwidth-punctuations.csl]: 323gb-t-7714-2015-note-fullwidth-punctuations.csl
[324peoples-publishing-house.csl]: 324peoples-publishing-house.csl
[325educational-history-studies.csl]: 325educational-history-studies.csl
[401cas-like-thesis.csl]: 401cas-like-thesis.csl
[402cas-like-thesis-zotero-ask.csl]: 402cas-like-thesis-zotero-ask.csl
[403huazhong-agricultural-university.csl]: 403huazhong-agricultural-university.csl
[404jinan-university.csl]: 404jinan-university.csl
[405nanjing-agricultural-university-numeric.csl]: 405nanjing-agricultural-university-numeric.csl
[406nanjing-agricultural-university-author-date.csl]: 406nanjing-agricultural-university-author-date.csl
[407nanjing-agricultural-university-old.csl]: 407nanjing-agricultural-university-old.csl
[408nanjing-agricultural-university-online-first.csl]: 408nanjing-agricultural-university-online-first.csl
[409northwest-a-and-f-university.csl]: 409northwest-a-and-f-university.csl
[410shanghai-jiao-tong-university.csl]: 410shanghai-jiao-tong-university.csl
[411southwest-university.csl]: 411southwest-university.csl
[412tsinghua-university-author-date.csl]: 412tsinghua-university-author-date.csl
[413tsinghua-university-numeric.csl]: 413tsinghua-university-numeric.csl
[414yunnan-university.csl]: 414yunnan-university.csl
[415zhejiang-university.csl]: 415zhejiang-university.csl
[416zhongnan-university-of-economics-and-law.csl]: 416zhongnan-university-of-economics-and-law.csl
[418huazhong-university-of-science-and-technology.csl]: 418huazhong-university-of-science-and-technology.csl
[419beijing-normal-university.csl]: 419beijing-normal-university.csl
[420beihang-university.csl]: 420beihang-university.csl
[421hebei-agricultural-university.csl]: 421hebei-agricultural-university.csl
[422chinese-academy-of-agricultural-sciences.csl]: 422chinese-academy-of-agricultural-sciences.csl
[423ningbo-university.csl]: 423ningbo-university.csl
[424harbin-university-of-science-and-technology.csl]: 424harbin-university-of-science-and-technology.csl
[425shenyang-agricultural-university.csl]: 425shenyang-agricultural-university.csl
[426beijing-forestry-university.csl]: 426beijing-forestry-university.csl
[427university-of-electronic-science-and-technology-of-china.csl]: 427university-of-electronic-science-and-technology-of-china.csl
[428fujian-agriculture-and-forestry-university.csl]: 428fujian-agriculture-and-forestry-university.csl
[429guizhou-university.csl]: 429guizhou-university.csl
[430hainan-university.csl]: 430hainan-university.csl
[431hohai-university.csl]: 431hohai-university.csl
[432east-china-normal-university.csl]: 432east-china-normal-university.csl
[433jiangxi-university-of-finance-and-economics.csl]: 433jiangxi-university-of-finance-and-economics.csl
[434shandong-agricultural-university.csl]: 434shandong-agricultural-university.csl
[435yangzhou-university.csl]: 435yangzhou-university.csl
[436wuhan-university-undergraduate.csl]: 436wuhan-university-undergraduate.csl
[437zhejiang-university-chinese-punctuation.csl]: 437zhejiang-university-chinese-punctuation.csl
[438xi-an-jiaotong-university.csl]: 438xi-an-jiaotong-university.csl
[439hebei-medical-university.csl]: 439hebei-medical-university.csl
[440university-of-chinese-academy-of-sciences-author-date.csl]: 440university-of-chinese-academy-of-sciences-author-date.csl
[441huazhong-university-of-science-and-technology-tongji-medical-college.csl]: 441huazhong-university-of-science-and-technology-tongji-medical-college.csl
[442chongqing-university-of-posts-and-telecommunications.csl]: 442chongqing-university-of-posts-and-telecommunications.csl
[443chengdu-university-of-technology.csl]: 443chengdu-university-of-technology.csl
[444chongqing-university-numeric.csl]: 444chongqing-university-numeric.csl
[445nanjing-agricultural-university.csl]: 445nanjing-agricultural-university.csl
[446tsinghua-university-academy-of-arts-and-design.csl]: 446tsinghua-university-academy-of-arts-and-design.csl
[447anhui-university-of-science-and-technology.csl]: 447anhui-university-of-science-and-technology.csl
[448nanjing-agricultural-university-note.csl]: 448nanjing-agricultural-university-note.csl
[449nanjing-university-of-posts-and-telecommunications.csl]: 449nanjing-university-of-posts-and-telecommunications.csl
[450tianjin-university-numberic.csl]: 450tianjin-university-numberic.csl
[451lanzhou-university.csl]: 451lanzhou-university.csl
[452dalian-university-of-technology.csl]: 452dalian-university-of-technology.csl
[453central-south-university-of-forestry-and-technology.csl]: 453central-south-university-of-forestry-and-technology.csl
[454dalian-maritime-university.csl]: 454dalian-maritime-university.csl
[455china-pharmaceutical-university.csl]: 455china-pharmaceutical-university.csl
[456southwest-university-of-political-science-and-law.csl]: 456southwest-university-of-political-science-and-law.csl
[457hunan-university-numeric.csl]: 457hunan-university-numeric.csl
[458hunan-university-note.csl]: 458hunan-university-note.csl
[459shanghai-university.csl]: 459shanghai-university.csl
[460beijing-institute-of-technology.csl]: 460beijing-institute-of-technology.csl
[461northwestern-polytechnical-university.csl]: 461northwestern-polytechnical-university.csl
[462huazhong-university-of-science-and-technology-school-of-cyber-science-and-engineering.csl]: 462huazhong-university-of-science-and-technology-school-of-cyber-science-and-engineering.csl
[463tongji-university.csl]: 463tongji-university.csl
[464hunan-normal-university.csl]: 464hunan-normal-university.csl
[465south-china-agricultural-university-undergraduate.csl]: 465south-china-agricultural-university-undergraduate.csl
[466china-agriculture-university-natural-science.csl]: 466china-agriculture-university-natural-science.csl
[467university-of-chinese-academy-of-sciences-numeric.csl]: 467university-of-chinese-academy-of-sciences-numeric.csl
[468renmin-university-of-china.csl]: 468renmin-university-of-china.csl
[469college-of-animal-science-xinjiang-agricultural-university.csl]: 469college-of-animal-science-xinjiang-agricultural-university.csl
[470shanxi-agricultural-university.csl]: 470shanxi-agricultural-university.csl
[471south-china-agricultural-university.csl]: 471south-china-agricultural-university.csl
[472china-agricultural-university-college-of-humanities-and-development-studies.csl]: 472china-agricultural-university-college-of-humanities-and-development-studies.csl
[473chongqing-university-author-date.csl]: 473chongqing-university-author-date.csl
[474east-china-university-of-science-and-technology-undergraduate.csl]: 474east-china-university-of-science-and-technology-undergraduate.csl
[475huazhong-university-of-science-and-technology-school-of-electrical-and-electronic-engineering.csl]: 475huazhong-university-of-science-and-technology-school-of-electrical-and-electronic-engineering.csl
[476south-western-university-of-finance-and-ecnomics-authr-date.csl]: 476south-western-university-of-finance-and-ecnomics-authr-date.csl
[477renmin-university-of-china-undergranduate.csl]: 477renmin-university-of-china-undergranduate.csl
[478capital-medical-university.csl]: 478capital-medical-university.csl
[479sichuan-agricultural-university.csl]: 479sichuan-agricultural-university.csl
[480northwest-a-and-f-university-undergraduate.csl]: 480northwest-a-and-f-university-undergraduate.csl
[481guangdong-university-of-technology.csl]: 481guangdong-university-of-technology.csl
[482china-university-of-mining-and-technology.csl]: 482china-university-of-mining-and-technology.csl
[483guangdong-university-of-technology.csl]: 483guangdong-university-of-technology.csl
[484china-agricultural-university-natural-sciences.csl]: 484china-agricultural-university-natural-sciences.csl
[485chinese-academy-of-forestry.csl]: 485chinese-academy-of-forestry.csl
[486peking-university-numeric.csl]: 486peking-university-numeric.csl
[487heilongjiang-university-undergraduate.csl]: 487heilongjiang-university-undergraduate.csl
[488xi-an-university-of-technology.csl]: 488xi-an-university-of-technology.csl
[489wuhan-university-of-technology.csl]: 489wuhan-university-of-technology.csl
[490xidian-university-undergraduate.csl]: 490xidian-university-undergraduate.csl
[501yuzuc-at-title-at-author-at-year.csl]: 501yuzuc-at-title-at-author-at-year.csl
[502export-authors.csl]: 502export-authors.csl
[503export-journal-year-vol-pages.csl]: 503export-journal-year-vol-pages.csl
[504expport-author-journal-vol-issue-pages.csl]: 504expport-author-journal-vol-issue-pages.csl
[505export-title.csl]: 505export-title.csl
[506export-author-et-al-year.csl]: 506export-author-et-al-year.csl
[507expport-journal-name.csl]: 507expport-journal-name.csl
[china-national-standard-gb-t-7714-2015-author-date.csl]: https://github.com/citation-style-language/styles/blob/master/china-national-standard-gb-t-7714-2015-author-date.csl
[china-national-standard-gb-t-7714-2015-note.csl]: https://github.com/citation-style-language/styles/blob/master/china-national-standard-gb-t-7714-2015-note.csl
[china-national-standard-gb-t-7714-2015-numeric.csl]: https://github.com/citation-style-language/styles/blob/master/china-national-standard-gb-t-7714-2015-numeric.csl
