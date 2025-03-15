import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";
import { basename, dirname } from "node:path";
import fs from "fs-extra";
import { generateAndWrite } from "../lib/generate";
import ora from "ora";
import FastGlob from "fast-glob";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CSL-M 预览",
  description: "CSL-M Style Preview - Zotero Cinese",
  srcDir: "src",
  themeConfig: {
    nav: [{ text: "首页", link: "/" }],
    socialLinks: [
      { icon: "github", link: "https://github.com/zotero-chinese/styles" },
    ],
    footer: {
      message: "此页面仅供 CSL 样式预览之用",
    },
    outline: {
      label: "页面导航",
      level: [2, 3],
    },
  },

  vite: {
    resolve: {
      alias: [
        // 替换首页为样式列表
        {
          find: /^.*\/VPHome\.vue$/,
          replacement: fileURLToPath(
            new URL("./components/Home.vue", import.meta.url)
          ),
        },
      ],
    },
    plugins: [
      {
        name: "zotero-chinese-csl-markdown",
        enforce: "pre",
        async transform(code, id) {
          // id 为文件磁盘绝对路径

          // 不处理非 md 页面
          if (!id.match(/\.md\b/)) return null;
          // 不处理首页等页面
          if (dirname(id).endsWith("src")) return null;

          // CSL 样式详情部分
          if (id.match(/src\/.*\/index\.md/)) {
            const metadataPath = `${dirname(id)}/metadata.json`;
            const metadata = fs.readJSONSync(metadataPath);

            // 为详情页增加 md 前言
            code = [
              "---",
              "sidebar: false",
              "comments: false",
              "editLink: false",
              "---",
              "",
              `# ${metadata.title}`,
              "",
              code,
              "---",
              "::: warning 非正式文档页面",
              "该页面仅供文档撰写和协作时预览之用，不是正式发布的文档，正式发布的文档请访问：[Zotero 中文文档](https://zotero-chinese.com/)",
              ":::",
            ].join("\n");

            // CSL 详情页的折叠块
            // code = code
            //   .replaceAll(
            //     "<!-- PLACEHOLDER FOR WEBSITE - BEFORE RESULT -->",
            //     "::: details\n\n"
            //   )
            //   .replaceAll(
            //     "<!-- PLACEHOLDER FOR WEBSITE - AFTER RESULT -->",
            //     ":::\n\n"
            //   );

            // escape: （张三，2008）<sup>[1](42)</sup>
            code = code.replaceAll(
              /\[(\d+)\]\(([\d-]*)\)/g,
              "\\[$1\\]\\($2\\)"
            );
          }

          return code;
        },
      },
      {
        name: "zotero-chinese-csl-dev",
        apply: "serve",
        async watchChange(id, change) {
          if (id.endsWith(".csl")) {
            console.log(`${id} changed`);

            await generateAndWrite(id);
            return;
          }

          if (id.match(/src\/.*\/(?!metadata).*\.json/)) {
            console.log(`${id} changed`);

            const dir = dirname(id);
            const cslPath = fs
              .readdirSync(dir)
              .filter((p) => p.endsWith(".csl"))
              .map((p) => `${dir}/${p}`)[0];

            await generateAndWrite(cslPath);
            return;
          }
        },
      },
      // {
      //   name: "zotero-chinese-csl-build",
      //   apply: "build",
      //   async buildStart() {
      //     console.time("build");
      //     const spinner = ora();
      //     const result = await Promise.all(
      //       FastGlob.globSync("**/*.csl").map(async (path) => {
      //         try {
      //           spinner.start(`${basename(path)}`);
      //           const result = generateAndWrite(path);
      //           spinner.succeed(`${basename(path)} - done`);
      //           return result;
      //         } catch (e) {
      //           throw new Error(e);
      //         }
      //       })
      //     );
      //     // fs.outputJSONSync(`${dist}/result.json`, result, { spaces: 2 });
      //     console.timeEnd("build");
      //   },
      // },
    ],
  },
});
