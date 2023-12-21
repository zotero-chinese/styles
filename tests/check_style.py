import argparse
import datetime
import glob
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
            num_conditions = 0
            num_condition_types = 0
            for attr, value in condition.attrib.items():
                if attr != "match":
                    num_conditions += len(value.split())
                    num_condition_types += 1

            attributes_info = " ".join(
                [f'{key}="{value}"' for key, value in condition.attrib.items()]
            )

            if num_conditions > 1 and "match" not in condition.attrib:
                warning(
                    f'File "{path}", line {condition.sourceline}: condition \'{attributes_info}\' has no "match".'
                )
                if num_condition_types == 1 and "type" in condition.attrib:
                    condition.attrib["match"] = "any"
                else:
                    condition.attrib["match"] = "all"

            elif num_conditions == 1 and "match" in condition.attrib:
                if condition.attrib["match"] != "none":
                    warning(
                        f'File "{path}", line {condition.sourceline}: condition \'{attributes_info}\' has extra "match".'
                    )
                    condition.attrib.pop("match")


def reorder_condition_values(root):
    for element_name in ["if", "else-if"]:
        for condition in root.xpath(f".//cs:{element_name}", namespaces=ns):
            for condition_name in [
                "is-numeric",
                "is-uncertain-date",
                "locator",
                "position",
                "type",
                # "variable",
            ]:
                if condition_name in condition.attrib:
                    value = condition.attrib[condition_name]
                    new_value = " ".join(sorted(value.split(), key=lambda x: x.lower()))
                    if new_value != value:
                        condition.attrib[condition_name] = new_value


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


def swap_locale_layouts(root):
    root.attrib["default-locale"] = "en-US"

    for area_name in ["citation", "bibliography"]:
        areas = root.xpath(f"./cs:{area_name}", namespaces=ns)
        if areas:
            area = areas[0]
            layouts = area.xpath("./cs:layout", namespaces=ns)
            if len(layouts) != 2:
                continue
            layout_en = layouts[0]
            layout_zh = layouts[1]

            del layout_en.attrib["locale"]
            layout_zh.attrib["locale"] = "zh"

            area.insert(-2, layout_zh)
            etree.indent(area, level=1)


def check_text_case(path: str, csl_content: str, element_tree):
    root = element_tree.getroot()
    default_locale = root.attrib.get("default-locale", "en-US")

    for element in root.xpath(".//*[@text-case]"):
        text_case = element.attrib["text-case"]

        if text_case == "sentence":
            warning(
                f'File "{path}", line {element.sourceline}: Obsolete \'text-case="sentence"\'.'
            )
            del element.attrib["text-case"]

        elif (
            element.tag == "{http://purl.org/net/xbiblio/csl}text"
            and "macro" in element.attrib
        ):
            warning(
                f'File "{path}", line {element.sourceline}: Invalid text-case with macro.'
            )
            del element.attrib["text-case"]

        elif text_case == "title":
            if default_locale not in ["en", "en-US"]:
                warning(
                    f'File "{path}", line {element.sourceline}: text-case="title" does\' work with default-locale="{default_locale}".'
                )
                # swap_locale_layouts(root)
                # return

        elif text_case in ["capitalize-first", "capitalize-all"]:
            variable = None
            if element.tag == "name-part":
                warning(
                    f'File "{path}", line {element.sourceline}: \'text-case="{text_case}"\' should not be applied to "name-part"'
                )
                del element.attrib["text-case"]
            elif "variable" in element.attrib:
                variable = element.attrib["variable"]
                if variable in ["title", "title-short", "container-title"]:
                    warning(
                        f'File "{path}", line {element.sourceline}: \'text-case="{text_case}"\' should not be applied to "{variable}"'
                    )
                    del element.attrib["text-case"]

        elif text_case not in [
            "lowercase",
            "uppercase",
            "capitalize-first",
            "capitalize-all",
        ]:
            warning(
                f'File "{path}", line {element.sourceline}: invalid \'text-case="{text_case}"\'.'
            )
            del element.attrib["text-case"]


def check_style(file):
    with open(file) as f:
        csl_content = f.read()

    # parser = etree.XMLParser(remove_blank_text=True)
    parser = etree.XMLParser()
    style = etree.parse(file, parser)
    root = style.getroot()

    # info(f'Running test of "{style_name}.csl"')

    check_conditions(file, csl_content, style)

    reorder_condition_values(root)

    check_groups(file, csl_content, style)

    check_macros(file, csl_content, style)

    # check_medium(file, csl_content)

    check_text_case(file, csl_content, style)

    write_style(style, file)


def write_style(style, path):
    with open(path) as f:
        original_content = f.read()
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

    if style_str != original_content:
        now = datetime.datetime.now().astimezone().isoformat(timespec="seconds")
        style_str = re.sub(
            r"<updated>[^<]*</updated>", f"<updated>{now}</updated>", style_str
        )
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
