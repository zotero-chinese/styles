import glob
import os
import shutil
import sys

TEST_DIR = os.path.join('tests', 'styles')


def prepare_style_dir(style_name):
    style_test_dir = os.path.join(TEST_DIR, style_name)
    if not os.path.exists(style_test_dir):
        print(f'Creating "{style_test_dir}"', file=sys.stderr)
        os.makedirs(style_test_dir)


def test_style(style_name):
    prepare_style_dir(style_name)
    os.system(f'node tests/test-style.js {style_name}.csl')


def remove_non_existing_style_dirs():
    for style_name in os.listdir(TEST_DIR):
        if not os.path.join(style_name + '.csl'):
            style_test_dir = os.path.join(TEST_DIR, style_name)
            print(f'Removing "{style_test_dir}"', file=sys.stderr)
            shutil.rmtree(style_test_dir)


def main():
    files = []
    if len(sys.argv) >= 2:
        files = sys.argv[1:]
    else:
        files = list(sorted(glob.glob('*.csl')))

    for file in files:
        style_name, ext = os.path.splitext(file)
        if ext != '.csl':
            raise ValueError(f'Invalid CSL style "{file}"')
        test_style(style_name)


if __name__ == '__main__':
    main()
