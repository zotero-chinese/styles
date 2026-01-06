import { getCiteproc } from "./citeproc";

const items = [
  {
    id: "apa.10.1:1",
    type: "article-journal",
    "container-title": "Psychological Review",
    DOI: "10.1037/rev0000126",
    ISSN: "1939-1471",
    issue: "1",
    journalAbbreviation: "Psychol. Rev.",
    language: "en-US",
    page: "1-51",
    title:
      "Language learning as language use: A cross-linguistic model of child language development",
    "title-short": "Language learning as language use",
    URL: "https://psycnet.apa.org/doiLanding?doi=10.1037%2Frev0000126",
    volume: "126",
    author: [
      {
        family: "McCauley",
        given: "Stewart M.",
      },
      {
        family: "Christiansen",
        given: "Morten H.",
      },
    ],
    issued: {
      "date-parts": [["2019"]],
    },
  },
  {
    id: "gbt7714-2025.b.4:3",
    type: "article-journal",
    "container-title": "清华大学学报（自然科学版）",
    issue: "11",
    language: "zh-CN",
    note: "original-author: Yu || Xiao\noriginal-author: Liu || Yi\noriginal-author: Chai || Yue Ting\noriginal-author: Sun || Hong Bo\noriginal-title: The model for reviewing and registering the qualifications of entities in a trustworthy online pharmaceutical trading environment\noriginal-container-title: Journal of Tsinghua University (Science and Technology)",
    page: "1518-1523",
    title: "互联网药品可信交易环境中主体资质审核备案模式",
    volume: "52",
    author: [
      {
        literal: "于潇",
      },
      {
        literal: "刘义",
      },
      {
        literal: "柴跃廷",
      },
      {
        literal: "孙宏波",
      },
    ],
    issued: {
      "date-parts": [["2012"]],
    },
  },
];

export function getTags(style: string) {
  const citeproc = getCiteproc(items, style);

  let citation = citeproc.processCitationCluster(
    {
      citationID: "CITATION-1",
      citationItems: [{ id: "apa.10.1:1" }, { id: "gbt7714-2025.b.4:3" }],
      properties: { noteIndex: 0 },
    },
    [],
    []
  );
  let cite_str = citation[1][0][1];
  // console.log(cite_str);

  let bib = citeproc.makeBibliography();
  let bib_str = bib[1].join("");
  // console.log(bib_str);

  let result = bib_str;
  if (citeproc.opt.xclass === "note") {
    result = cite_str;
  }

  let _tags = {
    author_initilized: !result.includes("Stewart M"),
  };

  const tags: Tag[] = [
    result.includes("MCCAULEY") ? "姓名大写" : "姓名小写",
    result.match(/Language learning as language use/i) ? "有标题" : "无标题",
    result.includes("Psychological Review") ? "期刊全称" : "期刊缩写",
    result.includes("https://psycnet.apa.org") ||
    result.includes("https://doi.org")
      ? "有URL"
      : "无URL",
    result.includes("10.1037/rev0000126") ? "有DOI" : "无DOI",
    result.match(/Journal of Tsinghua University/i) ? "有英文翻译" : "无英文翻译",
  ];

  return { tags };
}
