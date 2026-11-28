/**
 * 校验 `src` 目录下的 CSL 样式是否符合 Relax NG schema。
 *
 * 参考 <https://validator.citationstyles.org/>：官方校验器把样式提交给
 * validator.w3.org/nu（Java 实现的 Nu HTML Checker）并用 Relax NG 校验，
 * 本项目不依赖 Java，因此改用 libxml2 的 WebAssembly 版本在 Node 内直接做
 * Relax NG 校验（与 `xmllint --relaxng` 同一引擎）。官方校验器额外运行的
 * Schematron（csl.sch）检查不在此脚本范围内。
 *
 * 用法：
 *
 *   pnpm validate                       # 校验 src 下所有 .csl
 *   pnpm validate src/xxx/xxx.csl       # 校验单个文件
 *   pnpm validate "src/GB-T-7714*"      # 校验目录或 glob
 *   pnpm validate --schema ./my.rng     # 指定 schema
 *
 * 全部通过时退出码为 0，存在不符合 schema 的样式为 1，
 * schema 无法加载等脚本自身错误为 2。
 */

import { closeSync, openSync, readFileSync, readSync, statSync } from "node:fs";
import path from "node:path";
import { argv, cwd, exit, stderr, stdout } from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";
import FastGlob from "fast-glob";
import {
  RelaxNGValidator,
  XmlDocument,
  XmlLibError,
  xmlCleanupInputProvider,
  xmlRegisterInputProvider,
  type ErrorDetail,
  type XmlInputProvider,
} from "libxml2-wasm";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const schemaPath = path.resolve(
  rootDir,
  "node_modules/@zotero-chinese/csl-m-schema-rng/generated-schemas/merged/csl-mlz.rng"
);
const sourceDir = path.join(rootDir, "src");

/** 一个校验问题。 */
interface Issue {
  line: number;
  col: number;
  level: number;
  message: string;
}

/** 让 libxml2 在解析 Relax NG 的 `<include href="...">` 时能读到本地文件。 */
function createFileInputProvider(): XmlInputProvider {
  const toPath = (fileName: string): string =>
    fileName.startsWith("file:") ? fileURLToPath(fileName) : fileName;

  return {
    match(fileName) {
      try {
        return statSync(toPath(fileName)).isFile();
      } catch {
        return false;
      }
    },
    open(fileName) {
      try {
        return openSync(toPath(fileName), "r");
      } catch {
        return undefined;
      }
    },
    read(fd, buffer) {
      try {
        return readSync(Number(fd), buffer, 0, buffer.length, null);
      } catch {
        return -1;
      }
    },
    close(fd) {
      try {
        closeSync(Number(fd));
        return true;
      } catch {
        return false;
      }
    },
  };
}

function toIssues(details: ErrorDetail[]): Issue[] {
  return details.map((detail) => ({
    line: detail.line,
    col: detail.col,
    level: detail.level,
    message: detail.message.trim(),
  }));
}

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
        stderr.write(`警告：${pattern} 不匹配任何文件\n`);
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
      "用法： pnpm validate [选项] [文件 | 目录 | glob ...]",
      "",
      "选项：",
      "  --schema <path>  指定 Relax NG schema（默认：",
      `                   ${path.relative(cwd(), schemaPath)}）`,
      "  -v, --verbose    同时列出通过校验的文件",
      "  -h, --help       显示帮助",
      "",
    ].join("\n")
  );
}

function main(): number {
  let verbose = false;
  let customSchema: string | undefined;
  const patterns: string[] = [];

  const args = argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "-h" || arg === "--help") {
      printHelp();
      return 0;
    } else if (arg === "-v" || arg === "--verbose") {
      verbose = true;
    } else if (arg === "--schema") {
      customSchema = args[++i];
      if (!customSchema) {
        stderr.write("错误：--schema 需要参数\n");
        return 2;
      }
    } else if (arg.startsWith("-")) {
      stderr.write(`错误：未知选项 ${arg}\n`);
      printHelp();
      return 2;
    } else {
      patterns.push(arg);
    }
  }

  const rngPath = path.resolve(customSchema ?? schemaPath);
  let rngIsFile = false;
  try {
    rngIsFile = statSync(rngPath).isFile();
  } catch {
    rngIsFile = false;
  }
  if (!rngIsFile) {
    stderr.write(
      `找不到 schema：${rngPath}\n请先运行 pnpm install 安装 @zotero-chinese/csl-m-schema-rng。\n`
    );
    return 2;
  }

  const styleFiles = collectStyleFiles(
    patterns.length > 0 ? patterns : [sourceDir]
  );
  if (styleFiles.length === 0) {
    stderr.write("没有找到任何 .csl 文件\n");
    return 2;
  }

  let schemaDoc: XmlDocument | undefined;
  let validator: RelaxNGValidator | undefined;
  xmlRegisterInputProvider(createFileInputProvider());
  try {
    try {
      schemaDoc = XmlDocument.fromBuffer(readFileSync(rngPath), {
        url: pathToFileURL(rngPath).href,
      });
    } catch (error) {
      if (error instanceof XmlLibError) {
        stderr.write(
          `无法解析 schema ${rngPath}：\n${error.details.map((d) => d.message).join("")}`
        );
      } else {
        stderr.write(`无法解析 schema ${rngPath}：${error}\n`);
      }
      return 2;
    }

    try {
      validator = RelaxNGValidator.fromDoc(schemaDoc);
    } catch (error) {
      stderr.write(
        `无法加载 schema ${rngPath}：\n${error instanceof XmlLibError ? error.details.map((d) => d.message).join("") : error}\n`
      );
      schemaDoc.dispose();
      return 2;
    }

    const started = performance.now();
    const failures: { file: string; issues: Issue[] }[] = [];

    for (const file of styleFiles) {
      let document: XmlDocument;
      try {
        document = XmlDocument.fromBuffer(readFileSync(file), {
          url: pathToFileURL(file).href,
        });
      } catch (error) {
        failures.push({
          file,
          issues:
            error instanceof XmlLibError
              ? toIssues(error.details)
              : [{ line: 0, col: 0, level: 3, message: String(error) }],
        });
        continue;
      }

      try {
        validator.validate(document);
        if (verbose) {
          stdout.write(`✓ ${formatPath(file)}\n`);
        }
      } catch (error) {
        if (error instanceof XmlLibError) {
          const issues = toIssues(error.details);
          failures.push({
            file,
            issues:
              issues.length > 0
                ? issues
                : [{ line: 0, col: 0, level: 3, message: "不符合 schema" }],
          });
        } else {
          throw error;
        }
      } finally {
        document.dispose();
      }
    }

    const elapsed = performance.now() - started;
    for (const { file, issues } of failures) {
      const name = formatPath(file);
      stdout.write(`✗ ${name}\n`);
      for (const issue of issues) {
        const severity = issue.level >= 2 ? "error" : "warning";
        const position =
          issue.line > 0
            ? `${name}:${issue.line}${issue.col > 0 ? `:${issue.col}` : ""}`
            : name;
        stdout.write(`    ${position}: ${severity}: ${issue.message}\n`);
      }
    }

    const errorCount = failures.reduce(
      (sum, { issues }) => sum + issues.length,
      0
    );
    const passed = styleFiles.length - failures.length;
    stdout.write(
      `\n共校验 ${styleFiles.length} 个样式：通过 ${passed} 个，失败 ${failures.length} 个` +
        `（${errorCount} 条问题，耗时 ${(elapsed / 1000).toFixed(2)} 秒）。\n`
    );
    if (failures.length > 0) {
      stdout.write("存在不符合 schema 的样式。\n");
      return 1;
    }
    stdout.write("全部样式均符合 schema。\n");
    return 0;
  } finally {
    validator?.dispose();
    schemaDoc?.dispose();
    xmlCleanupInputProvider();
  }
}

function formatPath(file: string): string {
  return file.startsWith(rootDir + path.sep)
    ? path.relative(rootDir, file)
    : file;
}

try {
  exit(main());
} catch (error) {
  stderr.write(
    `${error instanceof Error ? (error.stack ?? error.message) : error}\n`
  );
  exit(2);
}
