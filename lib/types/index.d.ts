interface Path {
  dir: string;
  file: string;
}

declare interface StyleInfo {
  style_class: string;
  title: string;
  id: string;
  link_self?: string;
  link_template?: string;
  link_documentation?: string;
  author?: {
    name?: string;
    email?: string;
  }[];
  contributor?: {
    name?: string;
    email?: string;
  }[];
  citation_format?: string;
  field?: string;
  summary?: string;
  updated?: string;
}

interface StyleTestResult {
  citations: string;
  bibliography: string;
  default_test_citations?: string;
  gb_result?: string;
  aps_result?: string;
  ssc_result?: string;
  mlc_result?: string;
  apa_result?: string;
}

interface StyleCustomFields {
  tags: Tag[];
}

type Tag =
  | "姓名大写"
  | "姓名小写"
  | "名缩写"
  | "省略3人以上"
  | "有标题"
  | "无标题"
  | "期刊全称"
  | "期刊缩写"
  | "有DOI"
  | "无DOI"
  | "有URL"
  | "无URL"
  | "测试";

interface StyleFullResult
  extends Path,
    StyleInfo,
    StyleTestResult,
    StyleCustomFields {}

interface Chind {
  name: string;
  attrs: {
    [key: string]: string;
  };
  children: (Chind | string)[];
}

interface CslXml {
  dataObj: {
    name: string;
    attrs: {
      [key: string]: string;
    };
    children: Chind;
  };
  institution: Chind;

  getNodesByName(xmlObj: CslXml["dataObj"], name: string): Chind[];
}
