import argparse
import glob
import os
import re
import sys

from lxml import etree


ns = {
    "cs": "http://purl.org/net/xbiblio/csl",
}


def info(s):
    print(f"Info: {s}", file=sys.stderr)


def warning(s):
    print(f"Warning: {s}", file=sys.stderr)


def check_conditions(path: str, csl_content: str, element_tree):
    root = element_tree.getroot()
    for cond_xpath in [".//cs:if", ".//cs:else-if"]:
        for condition in root.findall(cond_xpath, ns):
            num_conds = 0
            num_condition_types = 0
            for attr, value in condition.attrib.items():
                if attr != "match":
                    num_conds += len(value.split())
                    num_condition_types += 1
            attributes = " ".join(
                [f'{key}="{value}"' for key, value in condition.attrib.items()]
            )
            # tag_info = f'<{condition.tag} {attributes}>'
            tag_info = f"{attributes}"
            # if num_conds > 1 and 'match' not in condition.attrib:
            #     warning(
            #         f'File "{path}": multiple conditions \'{tag_info}\' does not include "match".'
            #     )
            if (
                num_conds == 1
                and "match" in condition.attrib
                and condition.attrib["match"] != "none"
            ):
                pass
                # warning(
                #     f'File "{path}", line {condition.sourceline}: condition \'{tag_info}\' has extra "match".'
                # )
            elif num_conds > 1 and "match" not in condition.attrib:
                warning(
                    f'File "{path}", line {condition.sourceline}: condition \'{tag_info}\' has no "match".'
                )


def check_groups(path: str, csl_content: str, element_tree):
    root = element_tree.getroot()
    for group in root.xpath(".//cs:macro/cs:group", namespaces=ns):
        if len(group.getparent().xpath("./*")) == 1:
            if not group.attrib:
                warning(f'File "{path}", line {group.sourceline}: extra empty group.')


def check_macros(path: str, csl_content: str, element_tree):
    root = element_tree.getroot()

    unique_macros = set()

    for macro in root.findall(".//cs:macro", ns):
        name = macro.attrib["name"]
        if name in unique_macros:
            warning(
                f'File "{path}", line {macro.sourceline}: Duplicate macro "{name}".'
            )
        unique_macros.add(name)
        if not root.xpath(f".//*[@macro='{name}']"):
            warning(
                f'File "{path}", line {macro.sourceline}: The macro "{name}" is not used.'
            )

    for macro_call in root.xpath(".//*[@macro]"):
        name = macro_call.attrib["macro"]
        if name not in unique_macros:
            warning(
                f'File "{path}", line {macro_call.sourceline}: The macro "{name}" is not defined.'
            )

    # cleanup_unsed_macros(path, csl_content, called_macros)


def check_medium(path: str, csl_content: str):
    if '"OL"' in csl_content and 'text variable="medium"' not in csl_content:
        warning(f'File "{path}" does not contain "medium" variable.')


def cleanup_unsed_macros(path, csl_content: str, called_macros):
    lines = csl_content.splitlines(keepends=True)
    macros = []

    preamble = []
    macro = ""
    postamble = []
    state = 0
    for line in lines:
        if '<macro name="' in line:
            if state == 0 and preamble[-1].startswith("  <!--"):
                macro += preamble[-1]
                preamble.pop()
            state = 1
        elif "<citation" in line or "<bibliography" in line:
            if state == 1 and macro and macro.startswith("  <!--"):
                postamble.append(macro)
                macro = ""
            state = 2

        if state == 0:
            preamble.append(line)
        elif state == 2:
            postamble.append(line)
        else:
            macro += line
            if "</macro>" in line or re.match(r"\s*<macro .*/>", line):
                macros.append(macro)
                macro = ""

    new_macros = []
    for macro in macros:
        name = macro.split('<macro name="')[1].split('"', maxsplit=1)[0]
        if name in called_macros:
            new_macros.append(macro)

    csl_content = "".join(preamble + new_macros + postamble)
    with open(path, "w") as f:
        f.write(csl_content)


def check_text_case(path: str, csl_content: str, element_tree):
    default_locale = re.search(r'default-locale="([a-zA-Z-]+)"', csl_content)
    if default_locale:
        default_locale = default_locale.group(1)
    else:
        default_locale = None

    lines = csl_content.splitlines()
    for i, line in enumerate(lines):
        line_number = i + 1

        if 'text-case="sentence"' in line:
            warning(
                f'File "{path}", line {line_number}: Obsolete \'text-case="sentence"\'.'
            )

        # if 'text-case="title"' in line and default_locale not in [
        #         'en', 'en-US'
        # ]:
        #     warning(
        #         f'File "{path}", line {line_number}: \'text-case="title"\' may fail with current default locale "{default_locale}".'
        #     )

        # if '<text macro="' in line and 'text-case="' in line:
        #     warning(
        #         f'File "{path}", line {line_number}: \'text-case\' should not be applied to <text macro="">.'
        #     )


def check_style(file):
    with open(file) as f:
        csl_content = f.read()

    parser = etree.XMLParser()
    style = etree.parse(file, parser)

    # info(f'Running test of "{style_name}.csl"')

    check_conditions(file, csl_content, style)

    check_groups(file, csl_content, style)

    check_macros(file, csl_content, style)

    # check_medium(file, csl_content)

    # check_text_case(file, csl_content, element_tree)

    write_style(style, file)


def write_style(style, path):
    style_str = etree.tostring(
        style, pretty_print=True, xml_declaration=True, encoding="utf-8"
    ).decode("utf-8")
    style_str = style_str.replace("'", '"', 4)
    style_str = style_str.replace(" ", "&#160;")  # no-break space
    style_str = style_str.replace(" ", "&#8195;")  # em space
    style_str = style_str.replace("ᵉ", "&#7497;")
    style_str = style_str.replace("‑", "&#8209;")  # non-breaking hyphen
    # style_str = style_str.replace("–", "&#8211;")  # en dash
    style_str = style_str.replace("&#8211;", "–")  # en dash
    style_str = style_str.replace("—", "&#8212;")  # em dash
    style_str = re.sub(r"(\S)[ \t]+<!--", r"\1 <!--", style_str)
    style_str = re.sub(r"<!--\s*(\S)", r"<!-- \1", style_str)
    style_str = re.sub(r"(\S)\s*-->", r"\1 -->", style_str)
    with open(path, "w") as f:
        f.write(style_str)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("files", nargs="*")
    args = parser.parse_args()

    files = args.files
    if not files:
        files = list(sorted(glob.glob("*.csl")))

    for file in files:
        check_style(file)


if __name__ == "__main__":
    main()
