import datetime
from pathlib import Path
import re
from xml.dom.minidom import Element

from lxml import etree

CSL_NAMESPACE = "http://purl.org/net/xbiblio/csl"
CSL_PREFIX = "{http://purl.org/net/xbiblio/csl}"
NSMAP = {"cs": "http://purl.org/net/xbiblio/csl"}
ZOTERO_STYLE_PREFIX = "http://www.zotero.org/styles/"


class CslStyle:
    def __init__(self, style_id="", title="", citation_format=None):
        self.style_id = style_id
        self.style_attrib = {
            # "xmlns": "http://purl.org/net/xbiblio/csl",
            "class": "in-text",
            "version": "1.0",
        }
        self.title = title
        self.title_short = ""
        self.template_links = []
        self.documentation_links = []
        self.author = {"name": "John Doe", "email": "john_doe@gmail.com"}
        self.contributors = []
        self.citation_format = citation_format or "numeric"
        self.fields = []
        self.issn = None
        self.eissn = None
        self.summary = style_id
        # now = datetime.datetime.now().astimezone()
        self.published = None
        self.updated = datetime.datetime.now().astimezone()
        self.locales = []
        self.macros = []
        self.citation = self._make_citation_element()
        self.intext = None
        self.bibliography = None

    def _make_citation_element(self):
        citation = etree.Element(f"{CSL_PREFIX}citation")
        layout = etree.SubElement(citation, f"{CSL_PREFIX}layout")
        text = etree.SubElement(layout, f"{CSL_PREFIX}text")
        text.attrib["variable"] = "title"
        return citation

    @classmethod
    def from_file(cls, path: str | Path):
        style = CslStyle()
        tree = etree.parse(str(path))
        root = tree.getroot()

        for attr, value in root.attrib.items():
            if attr == "xmlns":
                continue
            style.style_attrib[attr] = value

        for info in root.xpath("./cs:info", namespaces=NSMAP)[0]:
            if info.tag == f"{CSL_PREFIX}title":
                style.title = info.text
            elif info.tag == f"{CSL_PREFIX}title-short":
                style.title_short = info.text
            elif info.tag == f"{CSL_PREFIX}id":
                style.style_id = info.text.removeprefix(ZOTERO_STYLE_PREFIX)
            elif info.tag == f"{CSL_PREFIX}link":
                if info.attrib["rel"] == "template":
                    style.template_links.append(info.attrib["href"])
                elif info.attrib["rel"] == "documentation":
                    style.documentation_links.append(info.attrib["href"])
            elif info.tag == f"{CSL_PREFIX}author":
                style.author = get_contributor(info) or {"name": "John Doe"}
            elif info.tag == f"{CSL_PREFIX}contributor":
                contributor = get_contributor(info)
                if contributor:
                    style.contributors.append(contributor)
            elif info.tag == f"{CSL_PREFIX}category":
                if "citation-format" in info.attrib:
                    style.citation_format = info.attrib["citation-format"]
                    assert (style.citation_format == "note") == (
                        style.style_attrib["class"] == "note"
                    )
                elif "field" in info.attrib:
                    style.fields.append(info.attrib["field"])
            elif info.tag == f"{CSL_PREFIX}issn":
                style.issn = info.text
            elif info.tag == f"{CSL_PREFIX}eissn":
                style.eissn = info.text
            elif info.tag == f"{CSL_PREFIX}summary":
                style.summary = info.text
            elif info.tag == f"{CSL_PREFIX}published":
                style.published = datetime.datetime.fromisoformat(str(info.text))
            elif info.tag == f"{CSL_PREFIX}updated":
                style.updated = datetime.datetime.fromisoformat(str(info.text))

        comment = ""
        for element in root:
            if isinstance(element, etree._Comment):
                comment = element.text
            else:
                if element.tag == f"{CSL_PREFIX}locale":
                    style.locales.append(element)
                elif element.tag == f"{CSL_PREFIX}macro":
                    style.macros.append(element)
                elif element.tag == f"{CSL_PREFIX}citation":
                    style.citation = element
                elif element.tag == f"{CSL_PREFIX}intext":
                    style.intext = element
                elif element.tag == f"{CSL_PREFIX}bibliography":
                    style.bibliography = element
                if comment:
                    element.tail = comment
                    comment = ""

        return style

    def to_file(self, path):
        xml_style = etree.Element(f"{CSL_PREFIX}style", nsmap={None: CSL_NAMESPACE})

        for attr, value in self.style_attrib.items():
            xml_style.attrib[attr] = value

        info = etree.SubElement(xml_style, f"{CSL_PREFIX}info")

        title = etree.SubElement(info, f"{CSL_PREFIX}title")
        title.text = self.title

        if self.title_short:
            title_short = etree.SubElement(info, f"{CSL_PREFIX}title-short")
            title_short.text = self.title_short

        id_elem = etree.SubElement(info, f"{CSL_PREFIX}id")
        id_elem.text = f"{ZOTERO_STYLE_PREFIX}{self.style_id}"

        self_link = etree.SubElement(info, f"{CSL_PREFIX}link")
        self_link.attrib["href"] = f"{ZOTERO_STYLE_PREFIX}{self.style_id}"
        self_link.attrib["rel"] = "self"

        for template_link in self.template_links:
            link = etree.SubElement(info, f"{CSL_PREFIX}link")
            link.attrib["href"] = template_link
            link.attrib["rel"] = "template"

        for document_link in self.documentation_links:
            link = etree.SubElement(info, f"{CSL_PREFIX}link")
            link.attrib["href"] = document_link
            link.attrib["rel"] = "documentation"

        self._make_contributor_element(info, "author", self.author)

        for contributor in self.contributors:
            self._make_contributor_element(info, "contributor", contributor)

        category = etree.SubElement(info, f"{CSL_PREFIX}category")
        category.attrib["citation-format"] = self.citation_format

        for field in self.fields:
            category = etree.SubElement(info, f"{CSL_PREFIX}category")
            category.attrib["field"] = field

        if self.issn:
            issn = etree.SubElement(info, f"{CSL_PREFIX}issn")
            issn.text = self.issn

        if self.eissn:
            eissn = etree.SubElement(info, f"{CSL_PREFIX}eissn")
            eissn.text = self.eissn

        if self.summary:
            summary = etree.SubElement(info, f"{CSL_PREFIX}summary")
            summary.text = self.summary

        if self.published:
            published = etree.SubElement(info, f"{CSL_PREFIX}published")
            published.text = self.published.isoformat(timespec="seconds")

        updated = etree.SubElement(info, f"{CSL_PREFIX}updated")
        updated.text = self.updated.isoformat(timespec="seconds")

        rights = etree.SubElement(info, f"{CSL_PREFIX}rights")
        rights.attrib["license"] = "http://creativecommons.org/licenses/by-sa/3.0/"
        rights.text = "This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License"

        for element in (
            self.locales + self.macros + [self.citation, self.intext, self.bibliography]
        ):
            if element is None:
                continue
            if element.tail:
                comment = element.tail.strip()
                if comment:
                    xml_style.append(etree.Comment(comment))
                element.tail = ""
            xml_style.append(element)

        etree.indent(xml_style)
        style_str = etree.tostring(
            xml_style, pretty_print=True, xml_declaration=True, encoding="utf-8"
        ).decode("utf-8")

        style_str = style_str.replace("'", '"', 4)
        style_str = style_str.replace(" ", "&#160;")  # no-break space
        style_str = style_str.replace(" ", "&#8195;")  # em space
        style_str = style_str.replace("ᵉ", "&#7497;")
        style_str = style_str.replace("‑", "&#8209;")  # non-breaking hyphen
        # style_str = style_str.replace("–", "&#8211;")  # en dash
        style_str = style_str.replace("&#8211;", "–")  # en dash
        style_str = style_str.replace("—", "&#8212;")  # em dash
        style_str = re.sub(r"(<title>.*?)&#8212;", r"\1—", style_str)
        style_str = re.sub(r"(\S)[ \t]+<!--", r"\1 <!--", style_str)
        style_str = re.sub(r"<!--\s*(\S)", r"<!-- \1", style_str)
        style_str = re.sub(r"(\S)[ \t]*-->", r"\1 -->", style_str)

        # style_str = re.sub(r"/>\s*<!--(?! <)", r"/>  <!--", style_str)

        Path(path).write_text(style_str)

    def _make_contributor_element(self, root, elem_name, contributor):
        contributor_elem = etree.SubElement(root, f"{CSL_PREFIX}{elem_name}")
        name = etree.SubElement(contributor_elem, f"{CSL_PREFIX}name")
        name.text = contributor["name"]
        if contributor["email"]:
            email = etree.SubElement(contributor_elem, f"{CSL_PREFIX}email")
            email.text = contributor["email"]
        if contributor["uri"]:
            uri = etree.SubElement(contributor_elem, f"{CSL_PREFIX}uri")
            uri.text = contributor["uri"]
        return contributor_elem

def get_contributor(element):
    contributor = {
        "name": None,
        "email": None,
        "uri": None,
    }
    for info_item in element:
        if info_item.tag == f"{CSL_PREFIX}name":
            contributor["name"] = info_item.text
        elif info_item.tag == f"{CSL_PREFIX}email":
            contributor["email"] = info_item.text
        elif info_item.tag == f"{CSL_PREFIX}uri":
            contributor["uri"] = info_item.text

    if not contributor["name"]:
        return None
    return contributor


if __name__ == "__main__":
    for path in Path("src").glob("**/*.csl"):
        print(path)
        style = CslStyle.from_file(path)
        style.to_file(path)
