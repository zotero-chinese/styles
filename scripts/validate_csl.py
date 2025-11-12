# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "lxml<7",
# ]
# ///

import argparse
from pathlib import Path

from lxml import etree

# CSL_SCHEMA_PATH = (
#     "node_modules/@zotero-chinese/csl-m-schema-rng/generated-schemas/merged/csl-mlz.rng"
# )
CSL_SCHEMA_PATH = "../csl-m-schema-rng/generated-schemas/merged/csl-mlz.rng"


def validate_csl(csl_schema, path: Path):
    style = etree.parse(str(path))

    # csl_schema.assertValid(style)
    valid = csl_schema.validate(style)
    if not valid:
        print(f'File "{path}", line {csl_schema.error_log.last_error.line}')


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("files", nargs="+")
    args = parser.parse_args()

    csl_schema = etree.RelaxNG(etree.parse(CSL_SCHEMA_PATH))

    for path in args.files:
        validate_csl(csl_schema, Path(path))


if __name__ == "__main__":
    main()
