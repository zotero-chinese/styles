import argparse
import datetime
import re
from copy import deepcopy

from lxml import etree

NSMAP = {
    'cs': 'http://purl.org/net/xbiblio/csl',
}

halfwidth_chars = ',.!?:;()[]–'


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("file")
    parser.add_argument("new_file", nargs="?")
    args = parser.parse_args()

    path = args.file
    new_path = args.new_file or path

    parser = etree.XMLParser(remove_blank_text=True)
    style = etree.parse(path, parser=parser)
    root = style.getroot()

    macros: list[etree._Element] = list(root.xpath(".//cs:macro", namespaces=NSMAP))

    halwidth_macro_names = get_half_width_macros(macros)

    for macro in macros:
        macro_name = macro.attrib["name"]
        if macro.attrib["name"] not in halwidth_macro_names:
            continue

        macro_zh = deepcopy(macro)

        macro.attrib["name"] = macro.attrib["name"] + "-en"
        modify_macro_en(macro, halwidth_macro_names)

        macro_zh.attrib["name"] = macro_zh.attrib["name"] + "-zh"
        modify_macro_zh(macro_zh, halwidth_macro_names)
        macro.addnext(macro_zh)

    for sort_element in root.xpath(".//cs:sort", namespaces=NSMAP):
        modify_macro_en(sort_element, halwidth_macro_names)

    modify_layouts(root, halwidth_macro_names)

    write_style(style, path, new_path)


def get_half_width_macros(macros):
    halwidth_macro_names: set[str] = set()

    new_halwidth_macro_names: set[str] = set()
    # macro_names =
    # to_do = [macro.attrib['name'] for macro in macros]

    called_macros_dict, called_macros_reverse_dict = get_called_macro_dict(macros)

    for macro in macros:
        macro_name: str = macro.attrib["name"]
        if macro_name.endswith("-en") or macro_name.endswith("-zh"):
            continue

        has_halfwith_char = False

        if macro.xpath(".//cs:name[not(@delimiter)]", namespaces=NSMAP):
            has_halfwith_char = True

        for element in macro.xpath('.//*[@*]'):
            attribute_values = "".join(element.attrib.values())
            if any([char in attribute_values for char in halfwidth_chars]):
                has_halfwith_char = True
                break

        if has_halfwith_char:
            new_halwidth_macro_names.add(macro_name)

    # print(new_halwidth_macro_names)

    while new_halwidth_macro_names:
        halwidth_macro_names = halwidth_macro_names.union(new_halwidth_macro_names)
        new_halwidth_macro_names = set()
        for macro in halwidth_macro_names:
            for calling_macro in called_macros_reverse_dict[macro]:
                if calling_macro not in halwidth_macro_names:
                    new_halwidth_macro_names.add(calling_macro)

    # print(halwidth_macro_names)

    print(
        "Modified macros:\n    "
        + "\n    ".join([macro.attrib["name"] for macro in macros if macro.attrib["name"] in halwidth_macro_names])
    )
    return halwidth_macro_names

    # csl.write(new_path, pretty_print=True, xml_declaration=True, encoding='utf-8')


def get_called_macro_dict(macros):
    called_macros_dict: dict[str, list[str]] = {}
    called_macros_reverse_dict: dict[str, list[str]] = {}
    for macro in macros:
        macro_name = macro.attrib["name"]
        called_macro_names: list[str] = list(macro.xpath(".//@macro"))

        called_macros_dict[macro_name] = called_macro_names

        if macro_name not in called_macros_reverse_dict:
            called_macros_reverse_dict[macro_name] = []

        for called_macro in called_macro_names:
            if called_macro not in called_macros_reverse_dict:
                called_macros_reverse_dict[called_macro] = []
            if macro_name not in called_macros_reverse_dict[called_macro]:
                called_macros_reverse_dict[called_macro].append(macro_name)
    # print(called_macros_dict)
    # print(called_macros_reverse_dict)

    return called_macros_dict, called_macros_reverse_dict


def modify_macro_en(macro, halwidth_macro_names):
    for macro_name in halwidth_macro_names:
        for text in macro.xpath(f'.//*[@macro="{macro_name}"]', namespaces=NSMAP):
            text.attrib["macro"] = text.attrib["macro"] + "-en"


def modify_macro_zh(macro, halwidth_macro_names):
    for macro_name in halwidth_macro_names:
        for text in macro.xpath(f'.//*[@macro="{macro_name}"]', namespaces=NSMAP):
            text.attrib["macro"] = text.attrib["macro"] + "-zh"
    for element in macro.xpath(".//*[@*]"):
        for attr, value in element.attrib.items():
            fullwidth_value = make_fullwidth_str(value)
            if fullwidth_value != value:
                # print(f'"{value}" => "{fullwidth_value}"')
                element.attrib[attr] = fullwidth_value
    for element in macro.xpath(".//cs:group[@delimiter=' ']", namespaces=NSMAP):
        del element.attrib["delimiter"]
    for element in macro.xpath(".//cs:name[not(@delimiter)]", namespaces=NSMAP):
        element.attrib["delimiter"] = "，"
    for element in macro.xpath(".//cs:name", namespaces=NSMAP):
        if element.attrib.get("name-as-sort-order") == "first":
            del element.attrib["name-as-sort-order"]
        if "sort-separator" in element.attrib:
            del element.attrib["sort-separator"]
        if element.attrib.get("initialize") == "true":
            del element.attrib["initialize"]
        if "initialize-with" in element.attrib:
            del element.attrib["initialize-with"]
        if element.attrib.get("form") == "short":
            del element.attrib["form"]
    for element in macro.xpath(".//*[@text-case]", namespaces=NSMAP):
        text_case = element.attrib["text-case"]
        if text_case == "title" or text_case == "sentence":
            del element.attrib["text-case"]
    for comment in macro.xpath(".//comment()"):
        text = comment.text
        fullwidth_text = make_fullwidth_str(text)
        if fullwidth_text != text:
            # print(f'"{text}" => "{fullwidth_text}"')
            comment.text = fullwidth_text


def make_fullwidth_str(s: str) -> str:
    s = re.sub(r",\s*", "，", s)
    s = re.sub(r"(?<![a-zA-Z0-9])\.\s*", "．", s)
    s = re.sub(r"\?\s*", "？", s)
    s = re.sub(r"!\s*", "！", s)
    s = re.sub(r"(?<![a-zA-Z]):\s*", "：", s)
    s = re.sub(r";\s*", "；", s)
    s = re.sub(r"\s*–\s*", "—", s)
    s = re.sub(r"\s*\(", "（", s)
    s = re.sub(r"\)\s*", "）", s)
    s = re.sub(r"\s*\[", "［", s)
    s = re.sub(r"\]\s*", "］", s)
    return s


def modify_layouts(root, halwidth_macro_names):
    default_locale = root.attrib.get("default-locale", "")
    main_locale = "zh"
    if default_locale.startswith("en"):
        main_locale = "en"
    if root.xpath(".//*[@text-case='title']", namespaces=NSMAP):
        main_locale = "en"

    if main_locale == "zh":
        if not default_locale.startswith("zh"):
            root.attrib["default-locale"] = "zh-CN"
    else:
        if not default_locale.startswith("en"):
            root.attrib["default-locale"] = "en-US"
            root.attrib["default-locale-sort"] = "zh-CN"

    for area in ["citation", "bibliography"]:
        layouts: list[etree._Element] = list(
            root.xpath(f".//cs:{area}/cs:layout", namespaces=NSMAP)
        )
        if len(layouts) == 1:
            if layouts[0].xpath(".//*[@variable='citation-number']", namespaces=NSMAP):
                break
            if main_locale == "zh":
                layout_zh = layouts[0]
                layout_en = deepcopy(layout_zh)
                layout_en.attrib["locale"] = "en"
                layout_zh.addprevious(layout_en)
            else:
                layout_en = layouts[0]
                layout_zh = deepcopy(layout_en)
                layout_zh.attrib["locale"] = "zh"
                layout_en.addprevious(layout_zh)

        elif len(layouts) == 2:
            layout_en = layouts[0]
            layout_zh = layouts[1]
            if "locale" in layout_en.attrib and "zh" in layout_en.attrib["locale"]:
                layout_en, layout_zh = layout_zh, layout_en
        else:
            raise ValueError

        modify_macro_en(layout_en, halwidth_macro_names)
        modify_macro_zh(layout_zh, halwidth_macro_names)

def write_style(style, path, new_path):
    with open(path) as f:
        original_content = f.read()
    style_str = etree.tostring(style, pretty_print=True, xml_declaration=True, encoding="utf-8").decode("utf-8")
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
    style_str = re.sub(r"(\S)[ \t]*-->", r"\1 -->", style_str)

    if style_str != original_content:
        now = datetime.datetime.now().astimezone().isoformat(timespec="seconds")
        style_str = re.sub(r"<updated>[^<]*</updated>", f"<updated>{now}</updated>", style_str)
    with open(new_path, "w") as f:
        f.write(style_str)


if __name__ == '__main__':
    main()
