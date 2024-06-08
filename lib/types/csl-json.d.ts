interface Item {
  id: string;
  [key: string]: any;
}

interface CitationItem {
  "id": string;
  "locator"?: number | string;
  "label"?: string;
  "suppress-author"?: boolean;
  "author-only"?: boolean;
  "prefix"?: string;
  "suffix"?: string;
  "position"?: number;
  "near-note"?: boolean;
}

interface Citation {
  citationsItems: CitationItem[];
  properties: {
    noteIndex: number;
  };
  citationID?: string;
  sortedItems?: Item[];
}
