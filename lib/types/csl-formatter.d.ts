declare module "csl-formatter" {
  interface CslFormatter {
    /** 按 CSL 官方仓库的格式规范重新格式化样式 XML。 */
    formatStyle(style: string): string;

    /** 美化 XML 字符串。 */
    vkbeautify(xml: string): string;
  }

  const formatter: CslFormatter;
  export default formatter;
}
