import argparse
from pathlib import Path
import re
import shutil


DEFAULT_BASE_STYLE = "gb-t-7714-2015-numeric-bilingual-no-uppercase-no-url-doi"


def make_style_id(style_name: str):
    style_id = style_name.lower()
    style_id = style_id.replace("&", " and ")
    style_id = re.sub(r"[^0-9A-Za-z]+", "-", style_id)
    style_id = re.sub(r"^-*", "", style_id)
    style_id = re.sub(r"-*$", "", style_id)
    return style_id


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("style")
    parser.add_argument("base_style", nargs="?")
    args = parser.parse_args()

    style = make_style_id(args.style)

    base_style = args.base_style or DEFAULT_BASE_STYLE
    if base_style.startswith("src/"):
        base_style = base_style.removeprefix("src/").removesuffix("/")

    shutil.copytree(f"src/{base_style}", f"src/{style}")
    shutil.move(f"src/{style}/{base_style}.csl", f"src/{style}/{style}.csl")
    style_file = Path(f"src/{style}/{style}.csl")

    style_content = style_file.read_text()

    style_content = re.sub(
        r"<title>.*?</title>", f"<title>{style}</title>", style_content
    )
    style_content = re.sub(
        r"<id>.*?</id>",
        f"<id>http://www.zotero.org/styles/{style}</id>",
        style_content,
    )
    style_content = re.sub(
        r'<link .*? rel="self"/>',
        f'<link href="http://www.zotero.org/styles/{style}" rel="self"/>',
        style_content,
    )
    if 'rel="template"' in style_content:
        style_content = re.sub(
            r'<link .*? rel="template"/>',
            f'<link href="http://www.zotero.org/styles/{base_style}" rel="template"/>',
            style_content,
        )
    else:
        style_content = re.sub(
            r'rel="self"/>',
            f'rel="self"/>\n    <link href="http://www.zotero.org/styles/{base_style}" rel="template"/>',
            style_content,
        )
    if "<summary>" in style_content:
        style_content = re.sub(
            r"<summary>.*?</summary>", f"<summary>{style}</summary>", style_content
        )
    else:
        style_content = re.sub(
            r"<updated>",
            f"<summary>{style}</summary>\n    <updated>",
            style_content,
        )

    style_file.write_text(style_content)


if __name__ == "__main__":
    main()
