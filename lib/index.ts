import { argv, exit } from "node:process";
import { watch } from "chokidar";
import FastGlob from "fast-glob";
import consola from "consola";
import ora from "ora";
import Tinypool from "tinypool";
import { generateAndWrite } from "./generate.js";
import { getFileName } from "./utils/string.js";
import { fileURLToPath } from "node:url";
import path from "node:path";

const arg = argv[2];
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = path.resolve(__dirname, "./worker.mjs");
const pool = new Tinypool({
  filename: workerPath,
  // execArgv: ["--import", "tsx"],
  runtime: "child_process",
});

async function main() {
  if (arg == "watch") {
    serve();
  } else if (arg == "all") {
    await build();
  } else if (typeof arg == "string") {
    generateAndWrite(arg);
  } else {
    consola.error("需要指明参数");
    exit(1);
  }
}

function serve() {
  const spinner = ora();
  watch(["./src/**/*.csl", "./src/**/items.json", "./src/**/cites.json"], {
    persistent: true, // 保持监听
    ignoreInitial: true, // 初始化时忽略已有文件的 add 和 adddir 事件
  })
    .on("ready", () => {
      console.clear();
      consola.ready("已监听 src 目录");
    })
    .on("change", (path, stats) => {
      console.clear();
      try {
        spinner.start(`${getFileName(path)} changed`);
        const result = generateAndWrite(path);
        spinner.succeed(`${getFileName(path)} changed - done`);
      } catch (e) {
        spinner.fail(e);
      }
    });
}

export async function build() {
  console.time("build");
  const result = await Promise.all(
    FastGlob.globSync("**/*.csl").map(async (path) => {
      try {
        const result = await pool.run({ filePath: `${path}` });
        consola.success(`${getFileName(path)} - done`);
        return result;
      } catch (e) {
        consola.error(path, e);
        throw new Error(e);
      }
    })
  );
  console.timeEnd("build");
}

main().catch((err) => {
  consola.error(err);
  exit(1);
});
