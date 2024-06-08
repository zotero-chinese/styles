import { argv, exit } from "node:process";
import { watch } from "chokidar";
import FastGlob from "fast-glob";
import fs from "fs-extra";
import consola from "consola";
import ora from "ora";

// import { isMainThread } from "worker_threads";
// import Tinypool from "tinypool";

import { generateAndWrite } from "./generate.js";
import { getFileName } from "./utils/string.js";

const arg = argv[2],
  src = "src",
  dist = "dist";

async function main() {
  // fs.ensureDir(dist);

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

async function build() {
  console.time("build");
  const spinner = ora();
  const result = await Promise.all(
    FastGlob.globSync("**/*.csl").map(async (path) => {
      try {
        spinner.start(`${getFileName(path)}`);
        const result = generateAndWrite(path);
        spinner.succeed(`${getFileName(path)} - done`);
        return result;
      } catch (e) {
        consola.error(path, e);
        throw new Error(e);
      }
    })
  );
  // fs.outputJSONSync(`${dist}/result.json`, result, { spaces: 2 });
  console.timeEnd("build");
}

// 尝试使用 worker 运行缩短时间
// async function build() {
//   if (isMainThread) {
//     console.time("build");
//     let result: StyleFullResult[] = [];

//     const pool = new Tinypool({
//       filename: "./dist/generate.js",
//     });

//     result = await Promise.all(
//       FastGlob.globSync("**/*.csl").map((path) => {
//         // (async function () {
//         //   console.log(await  pool.run( path ););
//         // })();

//         return pool.run(path);
//       })
//     );
//     fs.outputJSONSync(`${dist}/result.json`, result, { spaces: 2 });
//     console.timeEnd("build");
//   } else {
//     module.exports = (path: string) => {
//       return run(path);
//     };
//   }
// }

main().catch((err) => {
  consola.error(err);
  exit(1);
});
