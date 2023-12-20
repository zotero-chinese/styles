import glob
import os
import re
import shutil
import sys

from lxml import etree

from check_style import check_style


TEST_DIR = os.path.join("tests", "styles")

ns = {
    "cs": "http://purl.org/net/xbiblio/csl",
}


def info(s):
    print(f"Info: {s}", file=sys.stderr)


def warning(s):
    print(f"Warning: {s}", file=sys.stderr)


def find_line_numbers(content, s):
    lines = content.splitlines()
    for i, line in enumerate(lines):
        if s in line:
            yield i + 1


def prepare_style_dir(style_name):
    style_test_dir = os.path.join(TEST_DIR, style_name)
    if not os.path.exists(style_test_dir):
        info(f'Creating "{style_test_dir}"')
        os.makedirs(style_test_dir)


def test_style(path):
    style_name, ext = os.path.splitext(os.path.split(path)[1])
    if ext != ".csl":
        raise ValueError(f'Invalid CSL style "{path}"')

    # info(f'Running test of "{style_name}.csl"')

    check_style(path)

    prepare_style_dir(style_name)
    os.system(f"node tests/test-style.js {style_name}.csl")


def remove_non_existing_style_dirs():
    for style_name in os.listdir(TEST_DIR):
        if style_name.startswith("."):
            continue
        if not os.path.exists(os.path.join(style_name + ".csl")):
            style_test_dir = os.path.join(TEST_DIR, style_name)
            warning(f'Removing "{style_test_dir}"')
            shutil.rmtree(style_test_dir)


def main():
    paths = []
    if len(sys.argv) >= 2:
        paths = sys.argv[1:]
    else:
        paths = list(sorted(glob.glob("*.csl")))

    remove_non_existing_style_dirs()

    for path in paths:
        test_style(path)


if __name__ == "__main__":
    main()
