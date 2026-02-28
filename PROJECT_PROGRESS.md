# PROJECT PROGRESS

## 2026-02-26
- 完成事项：生成两份重写 CSL 文件与本地预览示例数据。
- 修改文件：`src/地球科学/地球科学-重写.csl`、`src/地球科学/items.json`、`src/地球科学/cites.json`、`src/地震地质/地震地质-重写.csl`、`src/地震地质/items.json`、`src/地震地质/cites.json`、`PROJECT_PROGRESS.md`。
- 下一步：本地运行 `pnpm preview` 验证输出格式；如无问题再替换正式样式。
- 风险/阻塞：依赖安装失败（缺少 GitHub SSH key），预览需要先解决依赖拉取。

### 本地预览步骤
1. 在工作区安装依赖（需 GitHub SSH 权限）。
2. 运行：`pnpm preview "src/地球科学/地球科学-重写.csl"`
3. 运行：`pnpm preview "src/地震地质/地震地质-重写.csl"`
