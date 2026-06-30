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
- The fit is tangential or requires strict item-level proof.
- It's a distant cousin in the strand (e.g. `RL.2.9` on a single poem with no comparison).
- The list already looks complete for the topic compared to **sibling challenges** in the same repo (e.g. matching `escape-the-midnight-mall` ↔ `the-hasty-harvest` parity).

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
- ❌ Suggesting both RI and RL for every challenge "just in case"
- ❌ Demanding standards for puzzle UI mechanics unrelated to literacy

Avoid **over-strict gating**:

- ❌ "Can't suggest RI.2.7 because the question doesn't quote the diagram"
- ✅ "Diagram + passage agreement question → `RI.2.7` / `CCRA.R.7` if absent"

Pair with **check-standards** when the user wants a full pass: suggest-standards for gaps, check-standards for wrong tags.
