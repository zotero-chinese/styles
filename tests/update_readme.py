import glob
import os
import re

from lxml import etree


NSMAP = {
    "cs": "http://purl.org/net/xbiblio/csl",
}


def indent_text(text, indent=2):
    return "\n".join([" " * indent + line for line in text.splitlines()])


def get_sample(file):
    assert file
    sample_path = os.path.join(
        "tests", "styles", os.path.splitext(file)[0], "README.md"
    )
    with open(sample_path) as f:
        sample_content = f.read()
    cite_and_bib = sample_content.split("## 引注")[1].strip()
    cite, bib = cite_and_bib.split("## 参考文献表")
    cite, bib = cite.strip(), bib.strip()

    if len(cite.splitlines()) == 1:
        cite = f"> {cite}"
    else:
        cite = "<blockquote>\n" + indent_text(cite) + "\n</blockquote>"

    res = ""
    if not cite or "NO_PRINTED_FORM" in cite:
        res = bib
    elif len(cite) >= len(bib) * 0.8 or not bib or "NO_PRINTED_FORM" in bib:
        res = cite
    else:
        bib = "<blockquote>\n" + indent_text(bib) + "\n</blockquote>"
        res = f"{cite}\n\n{bib}"

    # 敏感词
    res = res.replace("毛泽东", "MZD")
    res = res.replace("习近平", "XXX")
    res = res.replace("发改委", "FGW")

    res = re.sub(r"[ \t]+\n", "\n", res)

    return res


def get_info(file, csl_files):
    if file.startswith("5"):
        return ""
    style = etree.parse(file)

    title = ""
    title_elements = style.xpath(".//cs:title", namespaces=NSMAP)
    if title_elements:
        title = title_elements[0].text or ""

    summary = ""
    summary_elements = style.xpath(".//cs:summary", namespaces=NSMAP)
    if summary_elements:
        summary = summary_elements[0].text or ""

    doc_link = ""
    doc_link_elements = style.xpath(
        ".//cs:link[@rel='documentation']", namespaces=NSMAP
    )
    if doc_link_elements:
        doc_link = doc_link_elements[0].attrib["href"]

    template_link = ""
    template_link_elements = style.xpath(
        ".//cs:link[@rel='template']", namespaces=NSMAP
    )
    if template_link_elements:
        template_link = template_link_elements[0].attrib["href"]
    template_file = ""
    if template_link:
        template_file = template_link.split("/")[-1] + ".csl"

    if "《" in summary:
        info = f"[{summary}]({doc_link})样式。"
    else:
        info = f"[{title}]({doc_link})样式。"

    if template_link:
        if template_file in csl_files:
            info += f"在 [{template_file}] 基础上修改。"
        else:
            info += f"在 [{template_file}]({template_link}) 基础上修改。"
    return info


class Readme:
    preamble = ""
    style_samples = {}
    postamble = ""
    links = {}


def parse_readme(lines):
    state = "PREAMBLE"
    block = ""
    style_file = ""

    readme = Readme()

    for line in lines:
        matched = re.match(r"## \[(\d\d\d.*?\.csl)\]", line)
        if matched:
            if state == "PREAMBLE":
                readme.preamble = block.strip()
                style_file = matched.group(1)
                block = ""
                state = "STYLE-SAMPLE"
            elif state == "STYLE-SAMPLE":
                readme.style_samples[style_file] = block.strip()
                style_file = matched.group(1)
                block = ""
            block += line
            continue

        matched = re.match(r"^\[(.*?\.csl)\]:\s*(.*)", line)
        if matched:
            if state == "POSTAMBLE":
                readme.postamble = block.strip()
                block = ""
                state = "LINKS"

            readme.links[matched.group(1)] = matched.group(2)
            block += line
            continue

        matched = re.match(r"^## 501", line)
        if matched:
            if state == "STYLE-SAMPLE":
                readme.style_samples[style_file] = block.strip()
                block = ""
                state = "POSTAMBLE"
        block += line

    return readme


def main():
    readme_file = "README.md"
    with open(readme_file) as f:
        lines = f.readlines()

    readme = parse_readme(lines)
    # print(readme.postamble)
    # print(readme.style_samples)

    csl_files = list(glob.glob("*.csl"))

    for file, description in list(readme.style_samples.items()):
        if file not in csl_files:
            del readme.style_samples[file]
            continue

        matched = re.match(
            r"(## \[.*?\])\s*(.*?)显示效果：?(.*)", description, flags=re.DOTALL
        )
        if matched:
            heading = matched.group(1).strip()
            info = matched.group(2).strip()
            sample = matched.group(3).strip()

            if not info:
                info = get_info(file, csl_files)

            sample = get_sample(file)
            description = f"{heading}"
            if info:
                description += f"\n\n{info}"
            description += f"\n\n显示效果：\n\n{sample}"
            readme.style_samples[file] = description

    for file in csl_files:
        if file not in readme.style_samples:
            description = f"## [{file}]"
            info = get_info(file, csl_files)
            if info:
                description += f"\n\n{info}"
            sample = get_sample(file)
            description += f"\n\n显示效果：\n\n{sample}"
            readme.style_samples[file] = description

    for file in csl_files:
        if file not in readme.links:
            readme.links[file] = file
    for text, link in list(readme.links.items()):
        if text not in csl_files and not link.startswith("http"):
            del readme.links[text]

    output = (
        [readme.preamble]
        + list(sorted(readme.style_samples.values()))
        + [readme.postamble]
        + [
            "\n".join(
                [f"[{text}]: {link}" for text, link in sorted(readme.links.items())]
            )
        ]
    )

    with open(readme_file, "w") as f:
        f.write("\n\n\n".join(output))
        f.write("\n")
