/**
 * 按照 CSL 官方仓库的格式规范格式化 `src` 目录下的 CSL 样式。
 *
 * 官方 CSL 仓库要求样式统一缩进、属性顺序和 `<info>` 子元素顺序，并转义
 * 部分特殊字符，这些规则由 citation-style-language/formatter 实现。本脚本
 * 调用该库批量格式化样式，使提交到本仓库的样式与上游规范保持一致。
 *
 * 上游 formatter 会把 em dash（`—`，U+2014）和 em space（U+2003）等字符
 * 转义为字符实体；本仓库 `<info>`（标题、ID、链接等）和 XML 注释中的内容
 * 保留原来的 Unicode 字符，因此格式化后会把这些实体还原。
 *
 * 用法：
 *
 *   pnpm format:csl                      # 格式化 src 下所有 .csl
 *   pnpm format:csl src/xxx/xxx.csl      # 格式化单个文件
 *   pnpm format:csl "src/GB-T-7714*"     # 格式化目录或 glob
 *   pnpm format:csl --check              # 只检查，不写入文件
 *
 * 格式化成功时退出码为 0；样式 XML 无法解析、或 `--check` 时存在未按规范
 * 格式化的样式为 1；脚本自身错误（如参数错误）为 2。
 */

import { readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { argv, exit, stderr, stdout } from "node:process";
import { fileURLToPath } from "node:url";
import cslFormatter from "csl-formatter";
import FastGlob from "fast-glob";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const sourceDir = path.join(rootDir, "src");

const colorEnabled =
  Boolean(stdout.isTTY) && !process.env.NO_COLOR && process.env.TERM !== "dumb";
const red = (text: string): string =>
  colorEnabled ? `\x1b[31m${text}\x1b[39m` : text;
const green = (text: string): string =>
  colorEnabled ? `\x1b[32m${text}\x1b[39m` : text;
const yellow = (text: string): string =>
  colorEnabled ? `\x1b[33m${text}\x1b[39m` : text;

/** 展开命令行参数中的文件、目录和 glob，得到去重排序后的 .csl 路径。 */
function collectStyleFiles(patterns: string[]): string[] {
  const found = new Set<string>();
  const add = (file: string) => {
    if (path.extname(file).toLowerCase() === ".csl") {
      found.add(path.resolve(file));
    }
  };

  for (const pattern of patterns) {
    const resolved = path.resolve(pattern);
    let stats;
    try {
      stats = statSync(resolved);
    } catch {
      stats = undefined;
    }

    if (stats?.isDirectory()) {
      for (const file of FastGlob.globSync("**/*.csl", {
        cwd: resolved,
        absolute: true,
      })) {
        add(file);
      }
    } else if (stats?.isFile()) {
      add(resolved);
    } else {
      // shell 未展开的 glob（Windows 或带引号时）。
      const matches = FastGlob.globSync(pattern.replace(/\\/g, "/"), {
        absolute: true,
        onlyFiles: true,
      });
      if (matches.length === 0) {
        stderr.write(`Warning: ${pattern} does not match any files\n`);
      }
      for (const file of matches) {
        add(file);
      }
    }
  }

  return [...found].sort((a, b) => a.localeCompare(b));
}

function printHelp(): void {
  stdout.write(
    [
      "Usage: pnpm format:csl [options] [file | directory | glob ...]",
      "",
      "Without arguments, formats all .csl styles under src.",
      "",
      "Options:",
      "  --check      Check whether styles are formatted, without writing files",
      "  -h, --help   Show this help",
      "",
    ].join("\n")
  );
}

function formatPath(file: string): string {
  return file.startsWith(rootDir + path.sep)
    ? path.relative(rootDir, file)
    : file;
}

/** 一个格式化失败的样式。 */
interface Failure {
  file: string;
  message: string;
}

/** `<info>` 和 XML 注释中，把 em dash 和 em space 的字符实体还原为 Unicode 字符。 */
function restoreSpecialCharacters(formatted: string): string {
  const toUnicode = (text: string): string =>
    text.replaceAll("&#8195;", "\u2003").replaceAll("&#8211;", "\u2013")
      .replaceAll("&#8212;", "\u2014");

  return formatted
    .replace(/<info>.*?<\/info>/s, toUnicode)
    .replace(/<!--.*?-->/gs, toUnicode);
}

function main(): number {
  let check = false;
  const patterns: string[] = [];

  for (const arg of argv.slice(2)) {
    if (arg === "-h" || arg === "--help") {
      printHelp();
      return 0;
    } else if (arg === "--check") {
      check = true;
    } else if (arg.startsWith("-")) {
      stderr.write(`Error: unknown option ${arg}\n`);
      printHelp();
      return 2;
    } else {
      patterns.push(arg);
    }
  }

  const styleFiles = collectStyleFiles(
    patterns.length > 0 ? patterns : [sourceDir]
  );
  if (styleFiles.length === 0) {
    stderr.write("No .csl files found\n");
    return 2;
  }

  const started = performance.now();
  const changed: string[] = [];
  const failures: Failure[] = [];
  let unchanged = 0;

  for (const file of styleFiles) {
    const source = readFileSync(file, "utf8");
    let formatted: string;
    try {
      formatted = restoreSpecialCharacters(cslFormatter.formatStyle(source));
    } catch (error) {
      failures.push({
        file,
        message: `Failed to format: ${
          error === "invalidXML"
            ? "invalid XML"
            : error instanceof Error
              ? error.message
              : String(error)
        }`,
      });
      continue;
    }

    if (formatted === source) {
      unchanged++;
      continue;
    }

    changed.push(file);
    if (!check) {
      writeFileSync(file, formatted);
    }
  }

  for (const { file, message } of failures) {
    stdout.write(`${red("✗")} ${formatPath(file)}: ${message}\n`);
  }

  for (const file of changed) {
    stdout.write(
      check
        ? `${yellow("✗")} ${formatPath(file)} (needs formatting)\n`
        : `${green("✓")} ${formatPath(file)} (formatted)\n`
    );
  }

  const elapsed = ((performance.now() - started) / 1000).toFixed(2);
  const summary = [
    check ? `${changed.length} need formatting` : `${changed.length} formatted`,
    `${unchanged} unchanged`,
  ];
  if (failures.length > 0) {
    summary.push(`${failures.length} failed`);
  }
  const styleWord = styleFiles.length === 1 ? "style" : "styles";
  stdout.write(
    `\nProcessed ${styleFiles.length} ${styleWord}: ${summary.join(", ")} (${elapsed}s).\n`
  );

  if (failures.length > 0) {
    stdout.write(
      "Some styles could not be formatted; check the XML syntax (run pnpm validate to locate errors).\n"
    );
    return 1;
  }
  if (check && changed.length > 0) {
    stdout.write(
      "Some styles are not formatted according to the CSL conventions; run pnpm format:csl.\n"
    );
    return 1;
  }
  stdout.write("All styles are formatted according to the CSL conventions.\n");
  return 0;
}

try {
  exit(main());
} catch (error) {
  stderr.write(
    `${error instanceof Error ? (error.stack ?? error.message) : error}\n`
  );
  exit(2);
}
