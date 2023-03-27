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


def find_line_numbers(content, str):
    lines = content.splitlines()
    for i, line in enumerate(lines):
        if str in line:
            yield i + 1


def check_macros(path: str, csl_content: str, etree):
    root = etree.getroot()

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
                if os.path.split(path)[1].startswith('5'):
                    continue
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

    # cleanup_unsed_macros(path, csl_content, called_macros)


def cleanup_unsed_macros(path, csl_content: str, called_macros):
    lines = csl_content.splitlines(keepends=True)
    macros = []

    preamble = []
    macro = ''
    postamble = []
    previous_line = None
    state = 0
    for line in lines:
        if '<macro name="' in line:
            if state == 0 and preamble[-1].startswith('  <!--'):
                macro += preamble[-1]
                preamble.pop()
            state = 1
        elif '<citation' in line or '<bibliography' in line:
            if state == 1 and macro and macro.startswith('  <!--'):
                postamble.append(macro)
                macro = ''
            state = 2

        if state == 0:
            preamble.append(line)
        elif state == 2:
            postamble.append(line)
        else:
            macro += line
            if '</macro>' in line or re.match(r'\s*<macro .*/>', line):
                macros.append(macro)
                macro = ''

    new_macros = []
    for macro in macros:
        name = macro.split('<macro name="')[1].split('"', maxsplit=1)[0]
        if name in called_macros:
            new_macros.append(macro)

    csl_content = ''.join(preamble + new_macros + postamble)
    with open(path, 'w') as f:
        f.write(csl_content)


def check_medium(path: str, csl_content: str):
    if '"OL"' in csl_content and 'text variable="medium"' not in csl_content:
        warning(f'File "{path}" does not contain "medium" variable.')


def check_conditions(path: str, csl_content: str, etree):
    root = etree.getroot()
    for cond_xpath in ['.//cs:if', './/cs:else-if']:
        for condition in root.findall('.//cs:if', ns):
            num_conds = 0
            for attr, value in condition.attrib.items():
                if attr != 'match':
                    num_conds += len(value.split())
            attributes = ' '.join([
                f'{key}="{value}"' for key, value in condition.attrib.items()
            ])
            # tag_info = f'<{condition.tag} {attributes}>'
            tag_info = f'{attributes}'
            # if num_conds > 1 and 'match' not in condition.attrib:
            #     warning(
            #         f'File "{path}": multiple conditions \'{tag_info}\' does not include "match".'
            #     )
            if num_conds == 1 and 'match' in condition.attrib and condition.attrib[
                    'match'] != 'none':
                warning(
                    f'File "{path}": condition \'{tag_info}\' has extra "match".'
                )


def check_text_case(path: str, csl_content: str, etree):
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



def prepare_style_dir(style_name):
    style_test_dir = os.path.join(TEST_DIR, style_name)
    if not os.path.exists(style_test_dir):
        info(f'Creating "{style_test_dir}"')
        os.makedirs(style_test_dir)


def test_style(path):
    style_name, ext = os.path.splitext(os.path.split(path)[1])
    if ext != '.csl':
        raise ValueError(f'Invalid CSL style "{path}"')

    with open(path) as f:
        csl_content = f.read()

    etree = ET.parse(path)

    # info(f'Running test of "{style_name}.csl"')

    check_macros(path, csl_content, etree)

    # check_conditions(path, csl_content, etree)

    # check_text_case(path, csl_content, etree)

    # check_medium(path, csl_content)

    prepare_style_dir(style_name)
    os.system(f'node tests/test-style.js {style_name}.csl')


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
