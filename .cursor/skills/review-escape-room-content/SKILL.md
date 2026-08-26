---
name: review-escape-room-content
description: >-
  Proofreads student-facing copy in escape-room style resource modules (passages,
  dialogue, MC/crossword/decoder stems, hints). Flags concrete errors only—spelling,
  grammar, word choice, copy hygiene, answer-key fairness. Use when the user asks
  for a content review, proofread, or QA pass on resource files under resource/ or
  similar escape-room JSON/JS content bundles.
---

# Escape room content review

## Scope

Apply to **player- or student-facing text** inside escape room resources: `passage`, `dialogue`, `title` (questions, notes, poems), `hint`, `paragraph` (answer choices), `text` in activities—not code style, asset paths, or engine config unless the user asks.

Typical files: `resource/**/**Grade.js` (or sibling bundles) where a `resource` object holds `challengeArray` with nested `intro`, `activity`, `questions`.

## What to flag (hard errors only)

Report issues that would read as **mistakes** to a teacher or learner:

1. **Spelling** — typos, inconsistent proper nouns for the **same** entity (e.g. title says "Blaze Flower" but the passage uses "Blazeflower").
2. **Grammar and word choice** — subject–verb agreement, wrong preposition or verb valency (e.g. "sit one person" → "seat one person" / "fit one person"), clear tense problems.
3. **Punctuation that breaks meaning** — missing closing quote in dialogue, doubled punctuation in displayed strings.
4. **Copy hygiene** — stray **leading/trailing spaces** in options or labels; accidental `,,` in arrays if it surfaces in UI. **Exception:** a space between a closing escaped quote (`\"`) and end punctuation (`.`, `?`, `!`) is intentional—see below; do not flag it.
5. **Logic / fairness** — answer key contradicts the passage; a stem says "paragraph two" but the keyed answer maps to a different block; crossword or code letters no longer match after a copy edit (call out when a text change would desync yellow-letter codes).

## What not to flag

Do **not** treat these as review findings unless the user explicitly asks for stylistic or editorial expansion:

- **Optional style** — debatable commas (e.g. comma before *or* in compound predicates), "sounds smoother if…" rewrites when the original is already acceptable English.
- **Informal or dialect voice** — contractions, playful tone, "arch enemy" vs hyphenated forms, character grammar that matches voice.
- **Punctuation inside styled/markup tokens** — colons, question marks, or periods inside `[<i>…]` (or similar) wrappers are fine if the product supports them.
- **Red vs salmon highlights** — `[<sal>]` is dev-facing markup (salmon in CSS); student-facing copy correctly says **"red"** ("red text," "red sentence," etc.). Do **not** flag a mismatch between `[<sal>]` in source and "red" in question stems or hints.
- **Area / perimeter markup vs display** — engineer-facing markup in area and perimeter math problems (dimensions in `[<u>…]`, grid labels, etc.) does **not** need to exactly match the customer-facing question text. Check that **proportions** match (same relative sizes, same shape relationships); do not flag literal dimension-string mismatches when the visual/math setup is consistent.
- **The Frozen Knight** — this character is a **woman**; use **she/her** pronouns in all student-facing copy. Flag he/him or other mismatches.
- **Space before end punctuation after `\"`** — in question stems and similar strings, a space between a closing escaped quote and terminal punctuation is a deliberate visual separator so the mark renders cleanly apart from the quoted text (e.g. `"Magic Pumpkin\" ?`, `"fortress\" ?`, `"Advice for Fall\" ?`). Do **not** suggest removing it.
- **Empty placeholders** — `education.topic: ""`, `commonCore: ["XXX"]`, or other metadata left blank during production; do not nag unless the user asked to fill curriculum fields.
- **No reassurance** — if nothing meets the bar above, output nothing (no "all clear"); see project `editorial-content-review` skill for the same "issues only" habit.

## How to deliver results

- Group by **file** or **challenge** (match how the user referenced the work).
- Use short bullets: **what's wrong**, **where** (challenge title or string role), **minimal fix**.
- Prefer a **markdown deliverable** when the user asked for a written report; apply fixes in source only when they ask you to implement.
- **Never narrate the absence of errors.** Do not write "no issues here," "this looks correct," "the answer key is valid," or any other confirmation that something passed review. If an item has no concrete error, say nothing about it at all. Only items with a real error appear in the output.

## Quick self-check before sending

- Is this a **concrete** error a careful reader would agree is wrong?
- Am I avoiding **tone**, **optional polish**, and **workflow placeholders**?
- If I change assessment text, did I **re-verify** codes / `correctIndex` / crossword grids still match?
- Did I include **any statement confirming something is correct or error-free**? If so, delete it before sending.
