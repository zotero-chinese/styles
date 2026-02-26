# PROJECT RULES

## 用户偏好
- 解释与步骤使用中文。
- 代码保留原始语言。
- 文件命名默认中文（除非生态约束）。

## 目录规范
- 新样式放在 `src/期刊名/期刊名.csl`。
- `metadata.json` 与 `index.md` 由脚本生成，不手动修改。

## 工作流
- 处理维护者反馈优先，必要时调整 `<info>` 元数据。
- 只在用户明确要求时提交或 push。

## 测试与提交
- 如需验证，使用仓库脚本 `pnpm preview` 或 `pnpm build`。
- 提交前明确 commit message。
