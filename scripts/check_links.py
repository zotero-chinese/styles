from pathlib import Path

from csl_style import (
    ZOTERO_CHINESE_STYLE_PREFIX,
    ZOTERO_STYLE_PREFIX,
    CslStyle,
    make_style_id,
)


def check_file_name(style: CslStyle, path: Path):
    if path.stem != path.parent.name:
        print(
            f'File "{path}": file name does not match its parent directory\n'
            f"{path.parent.name}\n{path.stem}\n"
        )

    style_id = make_style_id(style.title)
    if path.stem != style_id:
        print(
            f'File "{path}": file name does not match its title\n'
            f"{path.stem}\n{style_id}\n"
        )


def check_id(style: CslStyle, path: Path):
    expected_id = f"{ZOTERO_CHINESE_STYLE_PREFIX}{make_style_id(style.title)}"
    if style.style_id != expected_id:
        print(
            f'File "{path}": style id does not match its title\n'
            f"{style.style_id}\n{expected_id}\n"
        )


def check_template_links(style: CslStyle, path: Path):
    for link in style.template_links:
        if link.startswith(ZOTERO_CHINESE_STYLE_PREFIX):
            name = link.removeprefix(ZOTERO_CHINESE_STYLE_PREFIX)
            if not Path(f"src/{name}/{name}.csl").exists():
                print(f"File {path}: template link {link} is missing.")
        elif link.startswith(ZOTERO_STYLE_PREFIX):
            name = link.removeprefix(ZOTERO_STYLE_PREFIX)
            if not Path(f"../styles/{name}.csl").exists():
                print(f"File {path}: template link {link} is missing.")
        else:
            print(f"File {path}: template link {link} is not a Zotero style link.")


def main():
    for path in Path("src").glob("**/*.csl"):
        style = CslStyle.from_file(path)
        check_file_name(style, path)
        # check_id(style, path)
        check_template_links(style, path)


if __name__ == "__main__":
    main()
