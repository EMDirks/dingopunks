---
name: check-standards
description: >-
  Reviews education.commonCore tags on escape-room resource challenges for
  mismatches. Two modes: wide band (default — per-standard review, partial match
  OK) and narrow band (stricter strand/topic fit). Use when the user asks to
  check, audit, or verify Common Core standards on resource files under resource/.
---

# Check Common Core standards

## Choose a mode

| Mode | When to use | Default? |
|------|-------------|----------|
| **Wide band** | General audit, teacher-facing tags; each standard checked, partial fit OK | **Yes** — use unless the user asks for narrow/strict |
| **Narrow band** | Trim misleading tags, pre-publish QA, user says "strict" / "narrow" | Only when requested |

If the user does not specify, use **wide band**.

---

## Shared setup

For each `challengeArray` item with `education.commonCore` (skip `code-box` nodes):

1. `education.topic` (the stated skill focus)
2. `activity` (passage type, poem, visuals, puzzle mechanics)
3. `questions` (MC, crossword, decoder, etc.)

Infer **grade band** from the filename (e.g. `2nd3rdGrade` → 2 and/or 3; `2ndGrade` → 2).

Judge at **challenge level** — you are not item-mapping every bullet in a standard, but **both modes review every code in `commonCore` one by one**.

For **missing** standards, use **suggest-standards** — not this skill.

### Dingo Punks project convention: `CCRA.R.7`

Dingo Punks is a **digital media** resource — every challenge is presented through images, themed layouts, character art, and on-screen text. **`CCRA.R.7` applies to essentially every activity** in this repo.

**Do not flag `CCRA.R.7`** in either mode merely because:
- Theme or character art is decorative rather than quoted in a question stem
- A passage block is text-only while other UI elements carry visuals
- Students are not asked to explicitly describe an image

Treat `CCRA.R.7` as a standing anchor for the digital reading environment. Still flag **grade-level** visual standards (`RI.2.7`, `RL.2.7`, etc.) in narrow band when there is no plausible hook to visuals **and** the challenge has no `CCRA.R.7`-level digital presentation (rare in this repo).

---

## Wide band

### Mindset

These escape rooms are **fun engagement tools**, not formal assessments. Still, **walk every tagged standard** and ask whether **some part** of that standard plausibly or defensibly connects to this challenge.

**Pass bar: partial match.** The whole standard does not need to be assessed. One defensible slice is enough — e.g. fluency tags fit when students read connected text, even if items only test comprehension; `CCRA.R.2` fits a main-idea challenge even without a dedicated central-idea item for every passage.

**Fail bar: no hook.** Flag a standard only when you cannot point to any plausible link to the topic, passage type, activity, or question skills.

### How to review each standard

For **every** code in `commonCore`:

1. Recall what that standard generally asks (strand, text type, skill).
2. Check whether **any** aspect of the challenge could reasonably sit under it.
3. **Keep** if yes — briefly note the hook in your head; only write it out when useful for borderline cases.
4. **Flag** if no — explain which part is missing in one line.

Do **not** skip standards because they are anchors, fluency tags, or copied from a sibling file. Parity lists still get per-code review in wide band.

### Partial-match examples (keep)

- **`RF.2.4` / `RF.2.4a` / `RF.2.4b`** — students read real passages to play; oral fluency need not be tested.
- **`CCRA.R.2`** on a main-idea challenge — central idea / theme neighborhood fits even if items are informal.
- **`CCRA.R.7`** — always keep in this repo; digital media presentation is the default hook (see project convention above).
- **`RI.2.8` / `RI.3.8`** — questions ask which sentences support an idea, even if items do not use the word "evidence."
- **`CCRA.R.5`** — passage has paragraphs, stanzas, or labeled sections; structure need not be the main question type.
- **Mixed `RI` + `RL`** — keep each code only if **that** code has its own partial hook (poem + prose challenge may keep both; fiction-only challenge may keep `RL` codes and flag orphan `RI` codes).

### Flag (wide band)

Always flag:

1. **Wrong subject** — math standards on reading challenges, etc.
2. **Wrong grade band** — e.g. `RI.5.x` on a `2ndGrade` bundle (unless the file explicitly spans grades).
3. **Typos / invalid codes** — malformed standard strings, duplicates that look accidental.
4. **Empty or placeholder values** — `["XXX"]` when the user asked to verify filled-in standards.
5. **No partial match** — after per-standard review, the code has no plausible link to this challenge's topic, text type, or questions (e.g. `RI.2.6` author's purpose on a challenge with no purpose angle at all; `CCRA.R.9` on a single short passage with no cross-text work).

Do **not** flag merely because:
- No single question verbatim tests the full standard
- Only one bullet of a multi-part standard is in play
- The fit is loose but still defensible
- An anchor is broader than the items

Wide band is **less strict than narrow band** on strand purity and parity drift — a debatable `RI` tag on literary-ish text may pass wide band if you can name a partial hook; narrow band may still flag it.

---

## Narrow band

### Mindset

Still not a formal test blueprint — but **each tagged standard should have a defensible link** to this challenge's passage type, topic, or question skills. Teachers using narrow-band output for lesson planning should not see tags that feel copied or generic.

**Default to skeptical.** If you cannot point to the passage, topic, or at least one question cluster that motivates the tag, flag it.

Parity copies from sibling files are **not** automatic passes in narrow band. Re-validate each standard against **this** challenge's content.

### Usually OK (do not flag)

- **CCRA anchors** only when at least one grade-level standard in the same strand family is also tagged and clearly fits (e.g. `CCRA.R.2` with `RI.2.2` on a main-idea informational passage).
- **RF.2.4 / RF.3.4** (and sub-bullets) when students read **substantial** connected text (roughly a paragraph or more, or multiple short passages)—not a single label or one-line blurb alone.
- **RI vs RL** — prefer the strand that matches the **primary** passage(s). Mixed tags are OK only when the challenge **meaningfully** uses both informational and literary text (e.g. prose + poem, product note + story).
- **`CCRA.R.7`** — never flag; digital media is the project default (see project convention above).
- **Grade-level visual standards** (`RI.2.7`, `RL.2.7`, etc.) only when images or diagrams are part of the reading task—not decorative theme art students never interpret.
- **Structure standards** (`CCRA.R.5`, `RI.2.5`, `RL.2.5`, `RI.3.5`, `RL.3.5`) only when questions or obvious passage layout involve sequence, sections, paragraphs, stanzas, or text features.
- **Integration / comparison** (`CCRA.R.8`, `CCRA.R.9`, `RI.3.8`, `RL.2.9`) only when students work across sentences, paragraphs, or **multiple texts** in a way the questions reflect.

### Flag (narrow band)

Flag when **any** of these apply:

1. **Everything in wide-band "Flag"** — wrong subject, wrong grade, typos, placeholders, obvious topic contradiction.
2. **Wrong strand** — e.g. multiple `RI.*` tags on a challenge whose only text is a fictional story and whose topic says "Story"; or `RL.*` on a challenge with only informational blurbs and no literary text.
3. **Orphan standard** — no reasonable link to topic, passage type, or question skills (state the missing link in one line).
4. **Fluency without reading load** — `RF.*.4` tags when the challenge is mostly vocabulary matching or single-word prompts with no real reading passage.
5. **Purpose / craft mismatch** — e.g. `RI.2.6` (author's purpose) with no purpose angle; `RL.2.3` (character) with no character-focused content or questions.
6. **Structure without structure** — `RI.2.5` / `RL.2.5` / `RI.3.5` when the text is a single undifferentiated block and questions never touch layout or sequence.
7. **Integration without integration** — `CCRA.R.8`, `CCRA.R.9`, or `RI.3.8` on single short passages with no cross-sentence or cross-text reasoning in the items.
8. **Parity drift** — a standard clearly carried over from a sibling challenge whose passage type or topic differs (e.g. nonfiction paragraph-focus tags on a fiction-only story challenge).

When flagging in narrow band, add a **Keep** note only for standards that are borderline but defensible—keep those notes short.

Do **not** flag merely because:
- Not every question tests the standard
- An anchor is broader than the items (if a grade-level sibling in the list fits)

---

## Workflow

1. Confirm mode (wide or narrow); default wide.
2. Read each challenge's topic, activity, and questions.
3. **Loop every code** in `commonCore` and apply that mode's pass/fail bar.
4. List **only flagged** standards — don't invent problems; don't list every kept code unless narrow band **Keep** notes help.
5. Wide band: if nothing fails, say **No standards to flag.**
6. Narrow band: if nothing fails, say **No standards to trim.** Optionally note 1–2 strongest fits.

---

## Output format

State the mode at the top: `**Mode:** wide band` or `**Mode:** narrow band`.

Per challenge:

```markdown
### [Challenge title] — [topic]

**Keep:** (optional — only for borderline standards you considered flagging)

**Flag:**
- `STANDARD` — one-line reason (which part of the standard has no plausible hook)

If no flags:
- Wide band → **No standards to flag.**
- Narrow band → **No standards to trim.**
```

Keep the whole review concise. Prefer a short bullet list over per-standard essays.

---

## Anti-patterns

### Wide band — avoid two failure modes

**Too permissive:**
- ❌ Approving a whole list without checking each code
- ❌ Auto-keeping parity copies, anchors, or fluency tags with no text to read
- ❌ "Same strand family" as a blanket excuse for every code in the array

**Too strict:**
- ❌ "RF.2.4 isn't tested because questions don't measure fluency"
- ❌ Flagging `CCRA.R.7` because the image isn't in a question stem (digital media is the hook in this repo)
- ❌ Requiring every bullet of a standard to appear in an item

### Narrow band — avoid fake strictness

- ❌ Demanding a dedicated question for every bullet in a standard
- ❌ Flagging every CCRA anchor as redundant
- ❌ Flagging all RF tags on any challenge that includes reading

### Both modes

- ✅ Name the passage type and topic when explaining a flag
- ✅ Pair with **suggest-standards** when the user also wants gap analysis
