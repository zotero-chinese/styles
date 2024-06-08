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

export const allDefaultCitationItems: { [key: string]: CitationItem[] | any } =
  {
    sampleAuthorDate,
    sampleNote,
    sampleNumeric,
    testAuthorDate,
    testNote,
    testNumeric,

    aps: getCitationItems(apsItems),
    apa: getCitationItems(apaItems),
    gb: getCitationItems(gbItems),
    mlc: getCitationItems(mlcItems),
    ssc: getCitationItems(sscItems),
  };

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
  items?: Item[]
): CitationItem[] {
  const dirName = dirname(cslPath);
  const citesFilePath = join(dirName, "cites.json");

  if (fs.existsSync(citesFilePath)) {
    return fs.readJsonSync(citesFilePath);
  } else if (!isEmpty(items.lenth)) {
    return [getCitationItems(items)];
  } else {
    return [];
  }
}

export function getCitationItems(
  items: Item[],
  citation_format?: string
): { id: string }[] {
  let ids = getIds(items);

  if (citation_format === "numeric") {
    return [
      ...ids.map((id) => {
        return { id };
      }),
    ];
  }

  return ids.map((id) => {
    return { id };
  });
}

export function getIds(items: Item[]): string[] {
  return items.map((item) => item.id).sort(collator.compare);
}
