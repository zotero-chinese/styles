import { basename } from "node:path";

export function getFileName(path: string) {
  if (path.startsWith("src") && path.endsWith(".csl")) {
    return basename(path, ".csl");
  }
  return basename(path);
}
