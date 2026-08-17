---
name: suggest-standards
description: >-
  Compares each escape-room challenge's activity and questions to its
  education.commonCore array and suggests standards that plausibly apply but are
  missing. Uses the same broad, engagement-first lens as check-standards. Use when
  the user asks what standards to add, wants gap analysis, or asks to complete
  commonCore tags on resource files under resource/.
---

# Suggest missing Common Core standards

Companion to **check-standards** (audit for wrong tags). This skill finds **gaps**—standards a teacher might reasonably cite that aren't in the code yet.

## Mindset

Same as check-standards: these are **fun engagement tools**. Suggestions describe the challenge's **learning neighborhood**, not a formal test blueprint.

**Default to selective.** Suggest a standard only when it clearly fits the challenge's topic, passage, and questions—and would look like an obvious omission on a lesson plan. Do not pad lists to be exhaustive.

## What to review together

For each `challengeArray` item (skip `code-box` and similar non-challenge nodes):

1. `education.topic`
2. `activity` — passage type, visuals, mechanics
3. `questions` — MC stems, crossword clues, decoder logic
4. `education.commonCore` — what's already tagged

Infer **grade band** from the filename (e.g. `reading_2ndGrade.js` → `RF.2`, `RI.2`, `RL.2`, `L.2`) unless the file name says otherwise.

## When to suggest (narrow bar)

Propose a standard **only if all** of these are true:

1. **Clear topical fit** — the challenge's stated topic or obvious activity skill maps to that standard.
2. **Not already listed** — exact code absent from `commonCore` (check string match; arrays use plain codes like `"RI.2.2"`).
3. **Same grade band** — match the file's grade (or explicit span in the path, e.g. `2nd3rdGrade` → 2 and/or 3).
4. **Plausible for teachers** — adding it would help someone discover or assign the activity, not just tick a box.

## When not to suggest

Do **not** recommend a standard merely because:

- A CCRA anchor in the same family is already present (e.g. don't push `CCRA.R.1` when `RI.2.1` exists, or vice versa, unless the project's sibling challenges consistently include **both** and this one doesn't).
- The fit is tangential or requires stretching past what the activity and questions actually do.
- It's a distant cousin in the strand (e.g. `RL.2.9` on a **single** poem with no second text and no which/who/both item).
- The list already looks complete for the topic compared to **sibling challenges** in the same repo (e.g. matching `escape-the-midnight-mall` ↔ `the-hasty-harvest` parity) — but still add codes the sibling omitted when **this** challenge clearly does the skill (see conventions below).

**Placeholder arrays** (`["XXX"]`): treat as empty; suggest a full reasonable set guided by topic and sibling files, but keep it concise.

## Topic → common suggestions (2nd grade ELA)

Use as hints, not checklists. Only surface standards that match **this** challenge's content.

| Topic (typical) | Often relevant if not already tagged |
|-----------------|--------------------------------------|
| Main Idea and Supporting Details | `RI.2.2`, `RI.2.1`, `CCRA.R.2`, `CCRA.R.1`, `RI.2.10`, `RF.2.4*` |
| Poetry | `RL.2.4`, `CCRA.L.5`, `CCRA.R.4`, `RL.2.10`, `RF.2.3` (syllables/rhyme), `RF.2.4*` |
| Context Clues and Vocabulary | `L.2.4`, `L.2.4a`, `CCRA.L.4`, `CCRA.L.6`, `L.2.5`, `L.2.6`, `CCRA.R.4`, `RF.2.4*` |
| Text Features | `RI.2.5`, `RI.2.7`, `CCRA.R.7`, `RI.2.10`, `CCRA.R.1`, `RF.2.4*` |
| Story Elements | `RL.2.1`, `RL.2.2`, `RL.2.3`, `RL.2.5`, `CCRA.R.2`, `CCRA.R.3`, `RL.2.10`, `RF.2.4*` |

`*` — suggest `RF.2.4` / `RF.2.4a` / `RF.2.4b` (and `RF.2.4c` where siblings use it) when students read substantial text and none are tagged.

## Dingo Punks conventions (do not under-tag)

These came out of a tagging review. Prefer **suggesting** in these cases rather than parking them as “maybe / manual review.”

**Word meaning → informational vocab tags too.** If items ask what a word or phrase means, suggest `RI.2.4` / `RI.3.4` even when the passage is a poem or story and `RL.2.4` / `RL.3.4` are already listed. Defining words *is* `RI.2.4`. Do not withhold it because the text type is literary.

**Language knowledge on word-choice items.** Asking students to pick a specific word (rhyme, synonym, “which word ___”) is `CCRA.L.3` and grade-level `L.*.3`. Do not call that too thin for craft/effect.

**Do not lump `RF.2.3` and `RF.3.3`.**
- `RF.2.3` — decoding and syllables (count syllables, decode printed words).
- `RF.3.3` / `RF.3.3a` — identify and know the **meaning** of common prefixes and suffixes. A question that defines a prefixed word (e.g. *unable* → not able) **is** `RF.3.3`. Suggest it even if there is no oral-decoding or syllable-count item. Do not skip `RF.3.3` just because `RF.2.3` does not fit.

**A light compare still counts.** Two texts plus any item that uses both (which task takes longer, both are instructions, which character, who) → `CCRA.R.9` and the matching `RI.2.9` / `RL.2.9` (and grade-3 siblings when the file spans 2–3). Do **not** require an explicit “compare and contrast” stem or identical stories. Two accounts of the same event from different characters (e.g. harvest day) is enough for `RL.2.9`. Do not flag these as uncertain.

**Image + questions about it → informational visual tags.** If the activity includes an image and items ask what it shows or whether it matches the text, suggest `RI.2.7` / `RI.3.7` even when `RL.*.7` is already tagged and even when the prose is a letter or story. A product photo still counts. Do not treat “literary letter vs product photo” as a reason to skip `RI.*.7`.

**Riddles.** Author’s purpose (`RI.2.6`) is core — a riddle describes something so the reader can identify it. Who/what/where stems also get `RL.2.1` / `RI.2.1` as the text type warrants. Mixed RI + RL on riddles is expected.

**Who/what/where/when/why/how stems** are `RL.2.1` / `RI.2.1` (match text type). A single “What is the answer to Riddle Two?” is enough.

**Structure.** A stem that locates an event “at the beginning/end of the story” is `RL.2.5` (and `RL.3.5` when the file spans grade 3).

## Workflow

1. Read the resource file; note grade from path/filename.
2. For each challenge, summarize what activity + questions actually involve (one line).
3. Compare to `commonCore`.
4. Check a **reference challenge** of the same topic in the repo if one exists (e.g. midnight-mall `reading_2ndGrade.js`) for parity—not to copy blindly, but to spot obvious gaps.
5. List **only** missing standards that pass the narrow bar.
6. If nothing meaningful is missing, say so briefly.

## Output format

Per challenge:

```markdown
### [Challenge title] — [topic]

**Activity / questions involve:** [one line]

**Consider adding:**
- `STANDARD` — one-line reason

If nothing meaningful missing: **No obvious gaps.**
```

Optional closing section when the user wants edits:

```markdown
## Suggested additions (copy-ready)
[Challenge]: add `X`, `Y`
```

Keep the whole review concise. Prefer a short bullet list over per-standard essays.

## Anti-patterns

Avoid **exhaustive enumeration**:

- ❌ Listing every RF.2.4 sub-bullet when any one fluency tag would do
- ❌ Suggesting both RI and RL for every challenge "just in case" (but **do** mix strands when items actually do both — word meaning on a poem, image + literary letter, riddles)
- ❌ Demanding standards for puzzle UI mechanics unrelated to literacy

Avoid **over-strict gating**:

- ❌ "Can't suggest RI.2.7 because the question doesn't quote the diagram"
- ✅ Image + what-it-shows or image-vs-text item → `RI.2.7` / `RI.3.7` (and `RL.*.7` if the prose is literary)
- ❌ "Can't suggest RI.2.4 because this is a poem"
- ✅ Word-meaning items → `RI.2.4` even on poems
- ❌ "Light compare isn't CCRA.R.9 / RI.2.9"
- ✅ Two texts + any cross-text item → suggest the compare family
- ❌ "RF.3.3 is decoding, skip if there's no phonics item"
- ✅ Prefixed/suffixed word defined in an item → `RF.3.3`
- ❌ Parking obvious fits as "manual review / unsure" to stay conservative

Pair with **check-standards** when the user wants a full pass: suggest-standards for gaps, check-standards for wrong tags.
