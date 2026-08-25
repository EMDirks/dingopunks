# Escape the Midnight Mall — Content Review

Proofread pass on all 33 resource files under `resource/escape-the-midnight-mall/` (reading, math, SEL, cutscene). Flags concrete errors only per the escape-room content review criteria.

---

## Reading — All Grades

### `topic/reading/all/reading_3rdGrade.js`

**Critterwerks**
✅ - Missing article — Squix-1000 passage: "must live in tank filled with oil" → "must live in **a** tank filled with oil"

### `topic/reading/all/reading_4thGrade.js`

**Critterwerks**
✅ - Missing article — Squix-1000 passage: "must live in tank filled with oil" → "must live in **a** tank filled with oil"

### `topic/reading/all/reading_5thGrade.js`

**Critterwerks**
✅ - Missing "to" — Squix-1000 passage: "you don't have give it medicine" → "you don't have **to** give it medicine"

**Prismatica**
✅ - Spelling — passage item 4 and decoder Q4: "diminuative" → "**diminutive**"

---

## Reading — Character Traits

### `topic/reading/character-traits/characterTraits_4th5thGrade.js`

**Critterwerks**
✅ - Answer fairness — Q4 stem asks "Which line reveals…" but option 2 quotes text not in the passage: `"...she sprinted back to her workshop..."` (passage says she "sprinted to the electrical panel"). Replace with a real passage line or reword the stem.

---

## Reading — Context Clues

### `topic/reading/context-clues/contextClues_4th5thGrade.js`

**Critterwerks**
✅ - Grammar — Squix-1000 passage: "creating a such an [indefectible] pet" → "creating **such an** [indefectible] pet"
✅ - Inconsistent spelling — passage uses "indefectible" but MC Q2 stem uses "indefectable"; align both forms
✅ - Answer key contradicts passage — MC Q2 (`correctIndex: 0` keys "Extremely fragile"; passage says gears are well-made and pet "will never break") → set `correctIndex` to **2** ("Without flaws")
✅ - Grammar — Bananatron passage: "falling over ALL time" → "falling over **all the** time"

**ZeebPlex**
✅ - Missing article — puzzle piece 3: "in orderly, [methodical] way" → "in **an** orderly, [methodical] way"
✅ - Missing "to" — puzzle piece 7: "you have follow the patterns" → "you have **to** follow the patterns"

---

## Reading — Figurative Language

### `topic/reading/figurative-language/figurativeLanguage_4th5thGrade.js`

**Critterwerks**
✅ - Misspelled product name — Q4 option: "Th[e] Banantron is clumsy" → "**Bananatron**"

---

## Reading — Grammar

### `topic/reading/grammar/grammar_2nd3rdGrade.js`

**The Candy Cave**
✅ - Extra article — Martin Shortnose `intro.dialogue.complete`: "I feel a just a bit better already" → "I feel just a bit better already" (or "I feel a bit better already")

---

## Reading — Main Idea

### `topic/reading/main-idea/mainIdea_2nd3rdGrade.js`

**Helio Athletics**
✅ - Misspelled character name — Q2 option: "R{o}butus is good at keeping watch" → "**Robustus**"

### `topic/reading/main-idea/mainIdea_4th5thGrade.js`

**Critterwerks**
✅ - Missing article — Squix-1000 passage: "must live in tank filled with oil" → "must live in **a** tank filled with oil"

---

## Reading — Making Inferences

### `topic/reading/making-inferences/makingInferences_4th5thGrade.js`

**Prismatica**
✅ - Spelling — hint text: "leters" → "**letters**"

**Critterwerks**
✅ - Answer fairness — Q2 stem asks "Which line shows…" but option 3 quotes text not in the passage: `"It was still his favorite place."` Replace with a real passage line or reword the stem
✅ - Grammar — Q4 option: "other peoples' feelings" → "**people's**"

---

## Reading — Poetry

### `topic/reading/poetry/poetry_4th5thGrade.js`

**The Candy Cave**
✅ - Grammar — crossword clue D: "What is this types of poem called?" → "What is this **type** of poem called?"

---

## Reading — Story Elements

### `topic/reading/story-elements/storyElements_4th5thGrade.js`

**Critterwerks**
✅ - Misquote — Q4 option 3 says "stumbled" but the passage reads "tumbled": `"But every time it tumbled, it sprang back up..."`

**Helio Athletics**
✅ - Grammar — story strip [s]E: "After defeated the guardian" → "After defeating the guardian" (or "After he defeated the guardian")

---

## Reading — Text Features

### `topic/reading/text-features/textFeatures_4th5thGrade.js`

**Prismatica**
✅ - Grammar — hint: "The yellow letters, order, are the answer" → "The yellow letters, **in** order, are the answer"

**Helio Athletics**
✅ - Typo — Q2 option 2: "Sneaking intro the Fortress of Fog" → "Sneaking **into** the Fortress of Fog"

---

## Reading — Text Structures

### `topic/reading/text-structures/textStructures_4th5thGrade.js`

**Critterwerks**
✅ - Inconsistent proper noun — Q3 option 2 uses "Flypig" while Q3–Q4 use "FlyPig"; standardize to **FlyPig**

---

## Math — All Grades

### `topic/math/all/math_3rdGrade.js`

**Critterwerks**
✅ - Misspelled product name — Q4 stem: "banantrons" → "**bananatrons**"

### `topic/math/all/math_5thGrade.js`

**Critterwerks**
✅ - Inconsistent shop name — Pollytron passage: "Critterworks" → "**Critterwerks**"
✅ - Misspelled product name — Q4 stem: "Banantrons" → "**Bananatrons**"

**ZeebPlex**
✅ - Answer key contradicts puzzle — Q2 keys "Both of the above" (`correctIndex: 2`) for corner answers, but corners are mixed (three sums > 30, one < 30). Replace option C or change `correctIndex` to reflect the actual split

---

## Math — Fractions

### `topic/math/fractions/fractions_3rdGrade.js`

**The Candy Cave**
✅ - Pronoun mismatch — `intro.dialogue.complete` refers to Zeeb as "She's acting weird" → "**He's** acting weird" (or "Zeeb's acting weird")

### `topic/math/fractions/fractions_4thGrade.js`

**Critterwerks**
✅ - Typo — hint text: "And or subtract" → "**Add** or subtract"

---

## Math — Multiplication

### `topic/math/multiplication/multiplication_3rdGrade.js`

**Prismatica**
✅ - Math error — distributive-property example ends with wrong sum: `12 + 15 = 24` → `12 + 15 = **27**` (or `3 × 9 = 27`)

### `topic/math/multiplication/multiplication_4thGrade.js`

**Prismatica**
✅ - Typo — `education.topic`: "Mutiplication in Base Ten" → "**Multiplication** in Base Ten"

---

## Math — Order of Operations

### `topic/math/orderOfOperations/orderOfOperations_5thGrade.js`

**The Candy Cave**
✅ - Answer key contradicts equation — Fudge Blocks drag-and-drop: `3 × 3 × 6 - 19 = 35` is true (54 − 19 = 35) but `correctIndex: 1` sorts it as FALSE → set `correctIndex` to **0** (TRUE)

---

## Social-Emotional Learning

### `topic/social-emotional-learning/growthMindset_4th5thGrade.js`

**Critterwerks**
✅ - Grammar — Instruction #283 passage: "get to back work" → "get **back to** work"

**Helio Athletics**
✅ - Grammar — crossword clue B: "Who didn't used the power of yet" → "Who didn't **use** the power of yet"
✅ - Inconsistent recruit name — training log title uses "Ferni" but crossword clue D uses "**Fernie**" → align to **Ferni**

---

## Summary

| Area | Files reviewed | Files with findings |
|------|----------------|---------------------|
| Reading | 22 | 16 |
| Math | 10 | 7 |
| SEL | 1 | 1 |
| Cutscene | 1 | 0 |
| **Total** | **33** | **24** |

Most repeated issues: the Squix-1000 "tank" article (4 files), Candy Cave mismatched closing quote in poems (3 files), and Bananatron/Bananatron spelling variants across math and reading files.
