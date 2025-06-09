import "tsx";
import { generateAndWrite } from "./generate.ts";

export default async function ({ filePath }) {
  return generateAndWrite(filePath);
}
