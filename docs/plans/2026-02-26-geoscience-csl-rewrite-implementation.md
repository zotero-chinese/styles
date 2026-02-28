# Geoscience CSL Rewrite Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Produce two new CSL files that implement the journal rules for Earth Science and Seismology and Geology, ready for local preview.

**Architecture:** Base on GB/T 7714-2015 author-date template patterns, but override author/title/container macros and bilingual layout to match journal rules. Output new files rather than replacing existing styles.

**Tech Stack:** CSL 1.0.2, Zotero CSL-M features (if needed), local preview via `pnpm preview`.

---

### Task 1: Create new CSL file scaffolds

**Files:**
- Create: `src/地球科学/地球科学-重写.csl`
- Create: `src/地震地质/地震地质-重写.csl`

**Step 1: Write minimal CSL skeletons**

Include `<info>` with self/template/documentation links, author, categories, summary, updated, rights. Set locale terms for `et-al`, `and`, and `page-range-delimiter`.

**Step 2: Verify files load**

Run: `pnpm preview "src/地球科学/地球科学-重写.csl"`
Expected: preview output renders without schema errors.

Run: `pnpm preview "src/地震地质/地震地质-重写.csl"`
Expected: preview output renders without schema errors.

---

### Task 2: Implement shared bilingual macros

**Files:**
- Modify: `src/地球科学/地球科学-重写.csl`
- Modify: `src/地震地质/地震地质-重写.csl`

**Step 1: Add bilingual author macros**

- English author: family full, given initialized; `et-al` rules per journal.
- Chinese author: use `original-author` with Chinese delimiter and `et-al`.

**Step 2: Add bilingual title/container macros**

- Chinese title from `title`.
- English title from `title-short` (Title Case for Earth Science).
- Chinese journal from `container-title`.
- English journal from `container-title-short` (italic for Earth Science).

**Step 3: Add bilingual layout**

- For `language=zh-CN` entries: output Chinese line, then English line.
- For `language=en-US` entries: output English line only.

**Step 4: Verify preview**

Run: `pnpm preview "src/地球科学/地球科学-重写.csl"`
Expected: bilingual output for `zh-CN` entries.

Run: `pnpm preview "src/地震地质/地震地质-重写.csl"`
Expected: bilingual output for `zh-CN` entries.

---

### Task 3: Implement Earth Science rules

**Files:**
- Modify: `src/地球科学/地球科学-重写.csl`

**Step 1: In-text citation rules**

- 2 authors: list both.
- 3+ authors: first author + et-al.
- Same author multiple works: order by year.

**Step 2: English formatting**

- Journal name italic.
- Author family full, given initials.
- Title Case for English titles (all years).
- DOI appended at end when present.

**Step 3: Sorting**

- Sort bibliography by author family, then year.

**Step 4: Verify preview**

Run: `pnpm preview "src/地球科学/地球科学-重写.csl"`
Expected: English journal italic, DOI at end, author-year sorting.

---

### Task 4: Implement Seismology and Geology rules

**Files:**
- Modify: `src/地震地质/地震地质-重写.csl`

**Step 1: Type-specific layouts**

- Journal, book, chapter, translation, thesis with exact punctuation and order.
- Use `[J]`, `[M]`, `[A]`, `[D]` markers as required.

**Step 2: DOI appending**

- Append DOI to both Chinese and English lines when DOI exists.

**Step 3: Sorting**

- Chinese entries before English entries.
- Within language: author (pinyin/English) then year.

**Step 4: Verify preview**

Run: `pnpm preview "src/地震地质/地震地质-重写.csl"`
Expected: bilingual lines, punctuation matching journal examples.

---

### Task 5: Create local preview fixtures

**Files:**
- Create: `src/地球科学/items.json`
- Create: `src/地球科学/cites.json`
- Create: `src/地震地质/items.json`
- Create: `src/地震地质/cites.json`

**Step 1: Add sample items**

Include:
- Chinese journal with English translation
- English journal
- Book
- Chapter
- Translation
- Thesis

**Step 2: Add citation items**

Include multiple authors to validate et-al rules and ordering.

**Step 3: Run previews**

Run: `pnpm preview "src/地球科学/地球科学-重写.csl"`
Run: `pnpm preview "src/地震地质/地震地质-重写.csl"`

Expected: output matches journal examples (punctuation, ordering, italics, DOI placement).

---

### Task 6: Document local run instructions

**Files:**
- Modify: `PROJECT_PROGRESS.md`

**Step 1: Add run steps**

Add brief steps for local preview using the new CSL files and sample fixtures.

**Step 2: Verify working tree**

Run: `git status`
Expected: only the new files are modified.
