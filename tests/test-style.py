import glob
import os
import re
import shutil
import sys
import xml.etree.ElementTree as ET

TEST_DIR = os.path.join('tests', 'styles')

ns = {
    'cs': 'http://purl.org/net/xbiblio/csl',
}


def info(str):
    print(f'Info: {str}', file=sys.stderr)


def warning(str):
    print(f'Warning: {str}', file=sys.stderr)


def prepare_style_dir(style_name):
    style_test_dir = os.path.join(TEST_DIR, style_name)
    if not os.path.exists(style_test_dir):
        info(f'Creating "{style_test_dir}"')
        os.makedirs(style_test_dir)


def find_line_numbers(content, str):
    lines = content.splitlines()
    for i, line in enumerate(lines):
        if str in line:
            yield i + 1


def check_macros(path: str, csl_content: str):
    root = ET.parse(path).getroot()

    defined_macros = [
        macro.attrib['name'] for macro in root.findall('.//cs:macro', ns)
    ]
    called_macros = sorted([
        text.attrib['macro']
        for text in root.findall('.//cs:text', ns) if 'macro' in text.attrib
    ] + [
        key.attrib['macro']
        for key in root.findall('.//cs:key', ns) if 'macro' in key.attrib
    ])

    unique_macros = set()
    for macro in defined_macros:
        if macro in unique_macros:
            for line_number in find_line_numbers(csl_content,
                                                 f'<macro name="{macro}"'):
                warning(
                    f'File "{path}", line {line_number}: Duplicate macro "{macro}".'
                )
        else:
            unique_macros.add(macro)

    defined_macros = sorted(unique_macros)

    for macro in defined_macros:
        if macro not in called_macros:
            for line_number in find_line_numbers(csl_content,
                                                 f'<macro name="{macro}"'):
                warning(
                    f'File "{path}", line {line_number}: The macro "{macro}" is not used.'
                )

    for macro in called_macros:
        if macro not in defined_macros:
            for line_number in find_line_numbers(csl_content,
                                                 f'macro="{macro}"'):
                warning(
                    f'File "{path}", line {line_number}: The macro "{macro}" is not defined.'
                )


def test_style(path):
    style_name, ext = os.path.splitext(os.path.split(path)[1])
    if ext != '.csl':
        raise ValueError(f'Invalid CSL style "{path}"')

    with open(path) as f:
        csl_content = f.read()

    # info(f'Running test of "{style_name}.csl"')
    prepare_style_dir(style_name)
    os.system(f'node tests/test-style.js {style_name}.csl')

    check_macros(path, csl_content)


def remove_non_existing_style_dirs():
    for style_name in os.listdir(TEST_DIR):
        if style_name.startswith('.'):
            continue
        if not os.path.exists(os.path.join(style_name + '.csl')):
            style_test_dir = os.path.join(TEST_DIR, style_name)
            warning(f'Removing "{style_test_dir}"')
            shutil.rmtree(style_test_dir)


def main():
    paths = []
    if len(sys.argv) >= 2:
        paths = sys.argv[1:]
    else:
        paths = list(sorted(glob.glob('*.csl')))

    remove_non_existing_style_dirs()

    for path in paths:
        test_style(path)


if __name__ == '__main__':
    main()
