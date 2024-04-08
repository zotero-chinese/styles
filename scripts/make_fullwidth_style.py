from copy import deepcopy
import re
import argparse

from lxml import etree

NSMAP = {
    'cs': 'http://purl.org/net/xbiblio/csl',
}

halfwidth_chars = ',.!?:;()[]–'


def make_fullwidth_str(s: str) -> str:
    s = re.sub(r',\s*', '，', s)
    s = re.sub(r'(?<![a-zA-Z0-9])\.\s*', '．', s)
    s = re.sub(r'\?\s*', '？', s)
    s = re.sub(r'!\s*', '！', s)
    s = re.sub(r'(?<![a-zA-Z]):\s*', '：', s)
    s = re.sub(r';\s*', '；', s)
    s = re.sub(r'\s*–\s*', '—', s)
    s = re.sub(r'\s*\(', '（', s)
    s = re.sub(r'\)\s*', '）', s)
    s = re.sub(r'\s*\[', '［', s)
    s = re.sub(r'\]\s*', '］', s)
    return s


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('file')
    parser.add_argument('new_file')
    args = parser.parse_args()

    path = args.file
    new_path = args.new_file

    parser = etree.XMLParser(remove_blank_text=True)
    csl = etree.parse(path, parser=parser)
    root = csl.getroot()

    macros = root.xpath('.//cs:macro', namespaces=NSMAP)
    halwidth_macro_names = []
    new_halwidth_macro_names = []
    # macro_names =
    # to_do = [macro.attrib['name'] for macro in macros]

    for macro in macros:
        has_halfwith_char = False
        for element in macro.xpath('.//*[@*]'):
            for attr, value in element.attrib.items():
                for char in halfwidth_chars:
                    if char in value:
                        has_halfwith_char = True
                        break
            if has_halfwith_char:
                break
        if has_halfwith_char or macro.xpath('.//cs:name[not(@delimiter)]',
                                            namespaces=NSMAP) \
                and not macro.attrib['name'].endswith('-en') \
                and not macro.attrib['name'].endswith('-zh'):
            new_halwidth_macro_names.append(macro.attrib['name'])

    while new_halwidth_macro_names:
        halwidth_macro_names.extend(new_halwidth_macro_names)
        new_halwidth_macro_names = []
        for macro in macros:
            if macro.attrib['name'] in halwidth_macro_names:
                continue

            for macro_name in new_halwidth_macro_names:
                if macro.xpath(f'.//*[@macro="{macro_name}"]'):
                    new_halwidth_macro_names.append(macro.attib['name'])
                    break

    print('Modified macros:\n    ' + '\n    '.join(halwidth_macro_names))

    for macro in macros:
        if macro.attrib['name'] in halwidth_macro_names:
            macro_zh = deepcopy(macro)

            macro.attrib['name'] = macro.attrib['name'] + '-en'
            for macro_name in halwidth_macro_names:
                for text in macro.xpath(f'.//cs:text[@macro="{macro_name}"]',
                                        namespaces=NSMAP):
                    text.attrib['macro'] = text.attrib['macro'] + '-en'

            macro_zh.attrib['name'] = macro_zh.attrib['name'] + '-zh'
            for macro_name in halwidth_macro_names:
                for text in macro_zh.xpath(
                        f'.//cs:text[@macro="{macro_name}"]',
                        namespaces=NSMAP):
                    text.attrib['macro'] = text.attrib['macro'] + '-zh'
                for element in macro_zh.xpath('.//*[@*]'):
                    for attr, value in element.attrib.items():
                        fullwidth_value = make_fullwidth_str(value)
                        if fullwidth_value != value:
                            # print(f'"{value}" => "{fullwidth_value}"')
                            element.attrib[attr] = fullwidth_value
                for element in macro_zh.xpath('.//cs:name[not(@delimiter)]',
                                              namespaces=NSMAP):
                    element.attrib['delimiter'] = '，'
                for comment in macro_zh.xpath('.//comment()'):
                    text = comment.text
                    fullwidth_text = make_fullwidth_str(text)
                    if fullwidth_text != text:
                        # print(f'"{text}" => "{fullwidth_text}"')
                        comment.text = fullwidth_text
            macro.addnext(macro_zh)

    output_str = etree.tostring(csl,
                                pretty_print=True,
                                xml_declaration=True,
                                encoding='utf-8').decode()
    output_str = output_str.replace("version='1.0'", 'version="1.0"', 1)
    output_str = output_str.replace("encoding='utf-8'", 'encoding="utf-8"', 1)
    output_str = output_str.replace(' ', '&#160;')  # no-break space
    output_str = output_str.replace('ᵉ', '&#7497;')
    output_str = output_str.replace(' ', '&#8195;')  # em space
    output_str = output_str.replace('‑', '&#8209;')  # non-breaking hyphen
    # output_str = output_str.replace('–', '&#8211;')  # en dash
    output_str = output_str.replace('—', '&#8212;')  # em dash

    with open(new_path, 'w') as f:
        f.write(output_str)

    # csl.write(new_path, pretty_print=True, xml_declaration=True, encoding='utf-8')


if __name__ == '__main__':
    main()
