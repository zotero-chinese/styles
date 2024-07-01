from copy import deepcopy
import datetime
import re
import argparse

from lxml import etree


NSMAP = {
    "cs": "http://purl.org/net/xbiblio/csl",
}


def get_english_elements(root):
    new_elements = list(root.xpath(".//cs:layout[@locale='en']", namespaces=NSMAP))
    if not new_elements:
        new_elements = list(root.xpath(".//cs:layout[not(@locale)]", namespaces=NSMAP))
    en_macros = []
    en_macro_names = set()
    while new_elements:
        added_elements = []
        for element in new_elements:
            en_macros.append(element)
            macro_calls = element.xpath(".//cs:text[@macro]", namespaces=NSMAP)
            for macro_call in macro_calls:
                macro_name = macro_call.attrib["macro"]
                # print(macro_name)
                if macro_name not in en_macro_names:
                    # print(macro_name)
                    en_macro_names.add(macro_name)
                    macro = root.xpath(
                        f".//cs:macro[@name='{macro_name}']", namespaces=NSMAP
                    )[0]
                    added_elements.append(macro)
        new_elements = added_elements
    return en_macros, en_macro_names


def write_style(style, path):
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
    with open(path, "w") as f:
        f.write(style_str)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("file")
    args = parser.parse_args()

    path = args.file

    parser = etree.XMLParser()
    style = etree.parse(path, parser=parser)
    root = style.getroot()

    macros = root.xpath(".//cs:macro", namespaces=NSMAP)

    macro_calling_dict = dict()
    macro_called_dict = dict()

    for macro in macros:
        macro_name = macro.attrib["name"]
        macro_calling_dict[macro_name] = set()
        macro_called_dict[macro_name] = set()
        for element in macro.xpath(".//*[@macro]", namespaces=NSMAP):
            called_macro_name = element.attrib["macro"]

            macro_calling_dict[macro_name].add(called_macro_name)

            if called_macro_name not in macro_called_dict:
                macro_called_dict[called_macro_name] = set()
            macro_called_dict[called_macro_name].add(macro_name)

    # print(macro_calling_dict)
    # print(macro_called_dict)
    # quit()

    en_macros, en_macro_names = get_english_elements(root)
    print(en_macros)

    original_variables = [
        "author",
        "title",
        "container-title",
        "publisher",
        "publisher-place",
    ]

    affected_macros = []
    affected_macro_names = []

    for macro in en_macros:
        for element in macro.xpath(".//*[@variable]", namespaces=NSMAP):
            if any(
                var in original_variables for var in element.attrib["variable"].split()
            ):
                affected_macros.append(macro)
                affected_macro_names.append(macro.attrib["name"])
                break

    # print(affected_macro_names)

    new_affected_macro_names = affected_macro_names
    affected_macro_names = []
    while new_affected_macro_names:
        affected_macro_names.extend(new_affected_macro_names)
        new_affected_macro_names = []

        for macro_name in affected_macro_names:
            for called_macro_name in macro_called_dict[macro_name]:
                if (
                    called_macro_name not in affected_macro_names
                    and called_macro_name not in new_affected_macro_names
                    and called_macro_name in en_macro_names
                ):
                    new_affected_macro_names.append(called_macro_name)

    # print(affected_macro_names)

    modified_macro_name = {}
    for macro_name in affected_macro_names:
        if macro_name.endswith("-en"):
            modified_macro_name[macro_name] = macro_name.replace("-en", "-ZHtoEN")
        else:
            modified_macro_name[macro_name] = macro_name + "-ZHtoEN"

    print(modified_macro_name)

    for macro in macros:
        macro_name = macro.attrib["name"]
        if macro_name in affected_macro_names:
            new_macro = deepcopy(macro)
            macro.addnext(new_macro)

            new_macro.attrib["name"] = modified_macro_name[macro_name]

            for element in new_macro.xpath(".//*"):
                if "variable" in element.attrib:
                    variable = element.attrib["variable"]
                    vars = variable.split()
                    for i, var in enumerate(vars):
                        if var in original_variables:
                            vars[i] = "original-" + var
                    element.attrib["variable"] = " ".join(vars)
                if "macro" in element.attrib:
                    name = element.attrib["macro"]
                    if name in affected_macro_names:
                        element.attrib["macro"] = modified_macro_name[name]

    write_style(style, path)


if __name__ == "__main__":
    main()
