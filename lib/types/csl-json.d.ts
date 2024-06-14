interface Item {
  id: string;
  [key: string]: any;
}

interface CitationItem {
  id: string;
  locator?: number | string;
  label?: string;
  "suppress-author"?: boolean;
  "author-only"?: boolean;
  prefix?: string;
  suffix?: string;
  position?: number;
  "near-note"?: boolean;

  /**
   * 此属性不是 CSL-JSON 的属性，是 cites.json 里自定义的快捷方式，
   *
   * 存在此属性的 citationItem，将会传递到 Citation.properties.mode
   */
  mode?: string;
}

type CitationItems = CitationItem[][];

interface Citation {
  citationItems: CitationItems;
  properties: {
    noteIndex: number;
    mode?: string;
    [key: string]: any;
  };
  citationID?: string;
  sortedItems?: Item[];
}
