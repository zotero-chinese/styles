import json
import os
import sys


# python3 make_cites.py tests/styles/301manual-of-legal-citation-multi-lingual/test-data.json


TEST_DIR = os.path.join('tests', 'styles')


def main():
    paths = []
    if len(sys.argv) < 2:
        raise ValueError

    data_paths = sys.argv[1:]

    for data_path in data_paths:
        with open(data_path) as f:
            data = json.load(f)
        cites = [[{'id': item['id']}] for item in sorted(data, key=lambda x: x['id'])]

        test_dir, data_file = os.path.split(data_path)
        cites_path = os.path.join(test_dir, 'test-cites.json')
        with open(cites_path, 'w') as f:
            json.dump(cites, f, indent='\t', ensure_ascii=False)
            f.write('\n')


if __name__ == '__main__':
    main()
