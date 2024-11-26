from copy import deepcopy
import datetime
import json
from pprint import pprint
import re
import argparse

from lxml import etree


NSMAP = {
    "cs": "http://purl.org/net/xbiblio/csl",
}


def find_all_macro_dependencies(elements, macro_dict):
    elements_to_visit = list(reversed(elements))
    visted_macros = {}
    called_macros = []
    while elements_to_visit:
        # print(
        #     [
        #         e.attrib["name"]
        #         if e.tag == "{http://purl.org/net/xbiblio/csl}macro"
        #         else e.tag
        #         for e in elements_to_visit
        #     ]
        # )
        element = elements_to_visit.pop()

        if element.tag == "{http://purl.org/net/xbiblio/csl}macro":
            macro_name = element.attrib["name"]
            if macro_name not in visted_macros:
                called_macros.append(element)
                visted_macros[macro_name] = True

        for text_macro in reversed(
            element.xpath(".//cs:text[@macro]", namespaces=NSMAP)
        ):
            macro_name = text_macro.attrib["macro"]
            child_macro = macro_dict[macro_name]
            elements_to_visit.append(child_macro)
    return called_macros


def find_reversed_dependencies(elements, macro_dict, reverse_macro_dependencies):
    elements_to_visit = list(reversed(elements))
    visted_macros = {}
    res = []
    while elements_to_visit:
        # print(
        #     [
        #         e.attrib["name"]
        #         if e.tag == "{http://purl.org/net/xbiblio/csl}macro"
        #         else e.tag
        #         for e in elements_to_visit
        #     ]
        # )
        element = elements_to_visit.pop()

        if element.tag != "{http://purl.org/net/xbiblio/csl}macro":
            continue
        macro_name = element.attrib["name"]
        if macro_name not in visted_macros:
            res.append(element)
            visted_macros[macro_name] = True

            for reverse_macro_dep in reversed(reverse_macro_dependencies[macro_name]):
                elements_to_visit.append(macro_dict[reverse_macro_dep])
    return res


def get_english_layouts(root):
    res = []
    for area in ["citation", "intext", "bibliography"]:
        for locale in ["@locale='en'", "not(@locale)"]:
            layouts = list(
                root.xpath(f"./cs:{area}/cs:layout[{locale}]", namespaces=NSMAP)
            )
            if layouts:
                res.extend(layouts)
                break
    return res


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

    macro_dict = {}
    macro_dependencies = dict()
    reverse_macro_dependencies = dict()

    for macro in list(macros):
        macro_name = macro.attrib["name"]
        macro_dict[macro_name] = macro

        macro_dependencies[macro_name] = []
        reverse_macro_dependencies[macro_name] = []

    for macro_name, macro in macro_dict.items():
        macro_name = macro.attrib["name"]
        for element in macro.xpath(".//*[@macro]", namespaces=NSMAP):
            called_macro_name = element.attrib["macro"]
            assert called_macro_name in macro_dict
            if called_macro_name not in macro_dependencies[macro_name]:
                macro_dependencies[macro_name].append(called_macro_name)
                reverse_macro_dependencies[called_macro_name].append(macro_name)

    # pprint(macro_dependencies)
    # pprint(reverse_macro_dependencies)

    en_layouts = get_english_layouts(root)

    en_macros = find_all_macro_dependencies(en_layouts, macro_dict)
    # print([macro.attrib["name"] for macro in en_macros])

    original_variables = [
        "author",
        "title",
        "container-title",
        "publisher",
        "publisher-place",
        # "genre",
        # "event-title",
    ]

    affected_macros = []

    for macro in en_macros:
        for element in macro.xpath(".//*[@variable]", namespaces=NSMAP):
            if any(
                var in original_variables for var in element.attrib["variable"].split()
            ):
                affected_macros.append(macro)
                break

    affected_macros = find_reversed_dependencies(
        affected_macros, macro_dict, reverse_macro_dependencies
    )
    affected_macro_names = [macro.attrib["name"] for macro in affected_macros]

    # print(affected_macro_names)
    # quit()

    modified_macro_name = {}
    for macro_name in affected_macro_names:
        if macro_name.endswith("-en"):
            modified_macro_name[macro_name] = macro_name.replace("-en", "-ZHtoEN")
        else:
            modified_macro_name[macro_name] = macro_name + "-ZHtoEN"

    # print(modified_macro_name)

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
