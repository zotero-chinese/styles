import argparse
import glob
import re


def reorder_conditions(matchobj):
    conditions = matchobj.group(1)
    ordered_conditions = " ".join(sorted(conditions.split()))
    return matchobj.group(0).replace(conditions, ordered_conditions)


def format_style(file):
    with open(file) as f:
        style = f.read()

    style = re.sub(r"\s+\n", "\n", style)
    style = style.strip() + "\n"

    style = re.sub(r'is-numeric="([^"]*)"', reorder_conditions, style)
    # style = re.sub(r'variable="([^"]*)"', reorder_conditions, style)
    style = re.sub(r'type="([^"]*)"', reorder_conditions, style)

    style = re.sub(r'(<(date|group).*?) delimiter=""', r"\1", style)
    style = re.sub(r'(<(date|group).*?) prefix=""', r"\1", style)
    style = re.sub(r'(<(date|group).*?) suffix=""', r"\1", style)

    style = style.replace(' prefix=""', "")
    style = style.replace(' suffix=""', "")

    with open(file, "w", newline="\n") as f:
        f.write(style)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("files", nargs="*")
    args = parser.parse_args()

    files = args.files
    if not files:
        files = list(sorted(glob.glob("*.csl")))

    for file in files:
        format_style(file)


if __name__ == "__main__":
    main()
