import { dirname, join } from "node:path";
import fs from "fs-extra";
import { isEmpty } from "radash";

const collator = Intl.Collator("en", { numeric: true });

// CSL-JSON Items
import apsItems from "./items/acta-psychologica-sinica-data.json";
import apaItems from "./items/apa-data.json";
import gbItems from "./items/gbt7714-data.json";
import mlcItems from "./items/manual-of-legal-citation-data.json";
import sscItems from "./items/social-sciences-in-china-data.json";
import authorDateItems from "./items/default-test-cites-author-date-data.json";

// CSL-JSON Citations
import sampleNumeric from "./citations/default-sample-cites-numeric.json";
import sampleAuthorDate from "./citations/default-sample-cites-author-date.json";
import sampleNote from "./citations/default-sample-cites-note.json";
import testNumeric from "./citations/default-test-cites-numeric.json";
import testAuthorDate from "./citations/default-test-cites-author-date.json";
import testNote from "./citations/default-test-cites-note.json";

export const allDefaultItems: Item[] = [
  ...apsItems,
  ...apaItems,
  ...gbItems,
  ...mlcItems,
  ...sscItems,
  ...authorDateItems,
];

export function getAllDefaultCitationItems(citation_format: string): {
  [key: string]: CitationItem[] | any;
} {
  return {
    sampleAuthorDate,
    sampleNote,
    sampleNumeric,
    testAuthorDate,
    testNote,
    testNumeric,

    aps: getCitationItems(apsItems, citation_format),
    apa: getCitationItems(apaItems, citation_format),
    gb: getCitationItems(gbItems, citation_format),
    mlc: getCitationItems(mlcItems, citation_format),
    ssc: getCitationItems(sscItems, citation_format),
  };
}

export function getCustomItems(cslPath: string): Item[] {
  const dirName = dirname(cslPath);
  const itemsFilePath = join(dirName, "items.json");
  if (fs.existsSync(itemsFilePath)) {
    return fs.readJsonSync(itemsFilePath);
  } else {
    return [];
  }
}

export function getCustomCites(
  cslPath: string,
  items?: Item[],
  citation_format?: string
): CitationItems {
  const dirName = dirname(cslPath);
  const citesFilePath = join(dirName, "cites.json");

  if (fs.existsSync(citesFilePath)) {
    // 存在 cites.json
    return fs.readJsonSync(citesFilePath);
  } else if (items && !isEmpty(items.length)) {
    // 不存在 cites.json 但存在 items.json
    return getCitationItems(items, citation_format);
  } else {
    // cites.json 和 items.json 都不存在
    return [];
  }
}

export function getCitationItems(
  items: Item[],
  citation_format?: string
): CitationItems {
  let ids = getIds(items);

  if (citation_format === "numeric") {
    return [
      ...[
        ids.map((id) => {
          return { id };
        }),
      ],
    ];
  }

  return ids.map((id) => {
    return [{ id }];
  });
}

export function getIds(items: Item[]): string[] {
  return items.map((item) => item.id).sort(collator.compare);
}
