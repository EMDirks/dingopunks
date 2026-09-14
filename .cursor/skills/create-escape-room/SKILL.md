---
name: create-escape-room
description: Create escape room content files from uploaded images. Use when the user provides images of poems, passages, questions, or character dialogues and asks to build a new escape room resource file.
---

# Creating Escape Rooms from Images

Turn mockup images into a playable `resource` file and wire it into the catalog so it
actually runs.

## Before you write anything

1. **Read the in-repo reference boilerplate.** `js/reference/` is the source of truth,
   kept more current than this document:
   - `js/reference/activity.txt` — every supported activity layout, by name
     (`// passage + title + image (3x)`, `// puzzle + passage (9x)`, `// cryptogram + ...`).
     Grep the `^// ` lines to see the catalog, then copy the block you need verbatim.
   - `js/reference/challenge.txt` — per-theme challenge scaffolds with the correct
     challenge titles, character names, and asset filenames for that theme.
   - `js/reference/question.txt` — the three question templates.
2. **Read a recent shipped file in the same shape.** The best current model for a
   "Reading — All" room is
   `resource/the-hasty-harvest/topic/reading/all/reading_2ndGrade.js`.
3. **List the theme's existing assets** before inventing filenames:
   `find resource/<theme>/assets -type f`. Characters, node/activity backgrounds,
   passage icons, and puzzle pieces almost always already exist.
4. **Ask about gaps.** If a mockup needs art that does not exist, or the target grade
   is ambiguous, ask before writing rather than guessing.

## Two schemas exist — only one is current

Renderers branch on `resource.challengeArray` vs `resource.activityArray`
(see the ✅/❌ blocks in `js/activity/*.js`).

- ✅ **`challengeArray`** — current. Use this always.
- ❌ **`activityArray`** — legacy. Still shipping in older files (e.g.
  `resource/the-yeti-and-the-yam/topic/reading/all/reading_3rdGrade.js`). Read them for
  content ideas, never for structure.

Some themes contain a mix, so confirm which shape a file uses before copying from it.

## File location

```
resource/<theme>/topic/<subject>/<topic>/<topic>_<grade>Grade.js
```

Examples: `topic/reading/all/reading_2ndGrade.js`,
`topic/reading/poetry/poetry_2nd3rdGrade.js`.

## Top-level shape

```javascript
const resource = {
    info: {
        title: "The Yeti and the Yams",
        path: "the-yeti-and-the-yam",                 // theme dir name
        logo: "resource/<theme>/assets/branding/<subject>/<topic>/thumbnail-<n>-grade.png",
        timerLabel: "YETI AWAKES"                     // reuse the theme's existing label
    },
    challengeArray: [ /* 5 challenges, then 1 code-box */ ],
};
```

If no theme thumbnail exists yet, use the placeholder for `info.logo`:

```javascript
logo: "assets/branding/placeholder/need-image.png",
```

(`games.js` `thumbnail` is separate — that path can still point at the expected
branding file even when the art is not ready.)

The code box **must be last** — `initializeSave()` in `js/global.js` iterates
`challengeArray.length - 1` and calls `challengeArray[i].activity.info...` on every
other entry, so every non-code-box challenge needs an `activity.info`.

## Challenge shape

```javascript
{
    info: {
        type: 'challenge',
        title: "Dr. Sera's Cell",          // node label on the map
        asset: "dr-seraphina.png",         // node background
        state: "incomplete",
        hint: {
            text: "Read \"...\" and answer the multiple-choice questions. Then, look at the four yellow letters that show up. These letters spell the secret code word.",
            isUsed: false
        },
        education: {
            topic: "Main Idea and Supporting Details",
            commonCore: ["CCRA.R.1", "RI.2.2", "RF.2.4a"],   // flat strings
        }
    },
    intro: {
        character: "Dr. Sera",
        asset: "dr-seraphina.png",         // character art
        dialogue: { incomplete: "...", complete: "..." },
    },
    activity: { /* see below */ },
    questions: { /* see below */ },
}
```

`commonCore` takes a **flat array of standard-code strings**. The older nested
`{ subject, category, standard }` object form still parses in
`scripts/export-game-standards.mjs`, but do not write new files that way.

Code box:

```javascript
{
    info: { type: "code-box", asset: "node-background-codeBox.png", title: "Code Box", state: "incomplete" },
    content: { codeBox: null }
}
```

## Asset path resolution (verified against the renderers)

| Field | Resolves to | Source |
|---|---|---|
| `info.asset` | `resource/<theme>/assets/activity/node/<file>` | `js/home.js` |
| `intro.asset` | `resource/<theme>/assets/activity/character/<file>` | `js/scene.js` |
| `activity.info.asset` | `resource/<theme>/assets/activity/background/<file>` | `js/activity.js` |
| `image: { type: "theme" }` | `resource/<theme>/assets/activity/passage/<file>` | `js/activity/dynamic.js` |
| `image: { type: "local" }` | `resource/<theme>/assets/activity/local/<file>` | `js/activity/dynamic.js` |
| `backgroundImage: { file }` | `resource/<theme>/assets/activity/puzzle/<file>` | `js/activity/dynamic.js` |
| `image: { type: "angle" \| "shape" \| "shape-partition" }` | `assets/activity/math/<type>/<file>` | `js/activity/dynamic.js` |

`local` files use a per-theme prefix, e.g. `hh20_1.png`, `mm21_3.png`, `yy20_1.png`.

## Activity (`type: "dynamic"`)

```javascript
activity: {
    info: {
        type: "dynamic",
        functionality: "drag-and-drop",   // only for puzzle / sort activities
        asset: "background.png",
    },
    blockArray: [ { contentArray: [ /* items */ ], style: { transform: {...} } } ],
    style: { block: {...}, contentArray: [ /* one entry per item POSITION */ ] },
}
```

Supported content item keys: `title`, `subtitle`, `passage`, `image`, `backgroundImage`,
`figure`, `numberLine`, `fraction`, `coordinatePlane`, `cryptogram`. Blocks may also
carry a `tag`.

### Footgun: `style.contentArray` is indexed by position, shared across all blocks

`style.contentArray[j]` styles item `j` of **every** block. If block 1's item 0 is a
title+passage and block 3's item 0 is an image, they share `style.contentArray[0]`. So:

- `style.contentArray` must be at least as long as the longest `contentArray`.
- `style.contentArray[j]` must define a style key for **every** content key any block
  uses at position `j` — a block with `subtitle` at `j` requires
  `style.contentArray[j].subtitle`, or the renderer throws.

### Layout

`.activity-container` is `display: flex; flex-wrap: wrap; justify-content: center`
(`css/dynamic.css`), and `style.block.dimension.width` is a percentage of it. So N
blocks of width `percentW` sit on one row when `N * (W + 1) <= 100` and wrap otherwise.
Mockups are rendered at the full frame width, so you can read widths straight off the
image: a card spanning 65% of the image is `percent65`.

Available widths: `percent10/12/13/15/18/20/22/24/25/28/30/32/35/38/40/43/45/50/55/60/65/70/75/80/84/85/88/90`,
`full`, `auto`, plus `puzzleWidth` / `puzzleHeight` and the `sortN`/`columnN` variants.
Heights: `auto`, `full`, `percent20/25/30/35/38/50`, `puzzleHeight`.
Materials: `paper`, `metal`. Padding: `half`, `default`, `double`.
Font sizes: `tiny`, `small`, `mediumSmall`, `medium`, `large`.
The full dictionary is the `style` object near the top of `js/global.js` — check there
before inventing a token. Unknown tokens silently render as the class `"undefined"`.

### Text sizes by grade

On every activity, enforce **title > body (`passage`) > subtitle/author** — never give
the title and subtitle the same size, and never make the body smaller than the author
line.

**2nd and 3rd grade rooms need bigger type** than 4th–5th. When authoring for younger
grades, bump sizes up one step on the scale above. A common mistake is copying
4th-grade sizes (`mediumSmall` titles, `small` body) into a 2nd-grade file where
everything looks too small on screen.

| Role | Field | 2nd–3rd grade | 4th–5th grade (typical) |
|---|---|---|---|
| Title | `title` | `medium` | `mediumSmall` |
| Body | `passage` | `mediumSmall` | `small` |
| Author | `subtitle` | `small` | `small` or `tiny` |

Image+text cards use `title` + `passage` only (no subtitle) — still follow title >
body (`medium` + `mediumSmall` for 2nd–3rd).

When unsure, copy sizes from a shipped file at the same grade, e.g.
`resource/the-hasty-harvest/topic/reading/all/reading_2ndGrade.js` or
`resource/escape-the-midnight-mall/topic/reading/all/reading_2ndGrade.js`.

### Transforms

Every block needs a slight rotation — **1–4 degrees, never `0deg`**. Keep `translateX`
and `translateY` small, roughly −10% to 10%; documents should sit close together.

Rotation alone is not enough for multi-card layouts — see **Activity layout by content
type** below for when to also offset with `translateX`.

```javascript
{ translateX: "0%",  translateY: "2%",  rotate: "-2deg" }   // single doc
{ translateX: "0%",  translateY: "-2%", rotate: "-1deg" }   // stacked pair, top
{ translateX: "0%",  translateY: "2%",  rotate: "2deg"  }   // stacked pair, bottom
```

### Activity layout by content type

Match the mockup's content shape to one of these patterns. Getting these wrong is a
common source of "looks fine in the data but wrong on screen" bugs.

#### Image + text cards (2 or 3 blocks)

Each block is `image` + `title` + `passage` side by side. **Offset every block with
`translateX` as well as rotation** — alternating left/right keeps stacked or wrapped
cards from looking perfectly aligned and flat.

```javascript
// block 1
style: { transform: { translateX: "-10%", translateY: "-2%", rotate: "-1deg" } }
// block 2
style: { transform: { translateX: "10%",  translateY: "2%",  rotate: "2deg"  } }
// block 3 (if present)
style: { transform: { translateX: "-5%",  translateY: "0%",  rotate: "-2deg" } }
```

Set `style.block.dimension.width` to roughly the card width in the mockup (often
`percent60`–`percent65` for two cards). For 2nd–3rd grade, size the text
`title: 'medium'`, `passage: 'mediumSmall'` in `style.contentArray[1]`. Reference:
`resource/the-yeti-and-the-yam/topic/reading/all/reading_2ndGrade.js` (Dr. Sera's Cell).

#### Single poem (one block, title + subtitle + passage)

Use **`width: "auto"`** on the block so the paper shrinks to the poem instead of
stretching across the activity area.

```javascript
style: {
    block: {
        misc: { material: 'paper', padding: "double" },
        dimension: { width: "auto", height: "auto" },
        flexbox: { justifyContent: "center", alignItems: "center" },
    },
    contentArray: [{
        title:    { font: 'default', size: 'medium',      align: 'center' },
        subtitle: { font: 'default', size: 'small',       align: 'center' },
        passage:  { font: 'default', size: 'mediumSmall', align: 'center' },
        // do NOT set brSplit on poems — keep <br> inline for stanza line breaks
    }],
}
```

Reference: same file, Tater Durant's Cell.

#### Short story (one block, title + subtitle + multi-paragraph passage)

Always set **`brSplit: 'default'`** and **`indent: 'default'`** on the passage style so
`<br>` splits into separate indented paragraphs. Use the **2nd–3rd grade** sizes from
**Text sizes by grade** above (title `medium` > passage `mediumSmall` > subtitle
`small`):

```javascript
contentArray: [{
    title:    { font: 'default', size: 'medium',      align: 'left' },
    subtitle: { font: 'default', size: 'small',       align: 'left' },
    passage:  { font: 'default', size: 'mediumSmall', align: 'left',
                brSplit: 'default', indent: 'default' },
}]
```

Do not give the title and subtitle the same size, and do not omit `brSplit` / `indent`
on short stories. Reference: same file, The Knight's Cell.

### Multi-paragraph passages

Put `<br>` between paragraphs using line continuations. For **short stories**, set
`passage.brSplit: 'default'` and `passage.indent: 'default'` (see above). For **poems**,
leave `brSplit` off so `<br>` stays inline and stanza breaks stay tight.

```javascript
passage: {
    text:   "First paragraph.\
            <br>\
            Second paragraph."
}
```

## Questions

### Multiple choice

```javascript
questions: {
    info: { type: "multiple-choice" },
    contentArray: [
        {
            title: "[<g>1.] What is the main idea of \"Lime Snow Cones\" ?",
            correctIndex: 0,
            columns: 2,                       // optional; 2 columns for short answers
            paragraph: [
                "Li{m}e snow cones have a strong, sour taste",
                "Lime snow cones are made wi{t}h sugar",
                "Lim{e} snow cones are green",
            ],
        },
    ],
    code: { answer: "MEAL", userArray: ["","","",""] },
}
```

- **Exactly 4 questions.** `js/activity/multipleChoice.js` only places indices 0–3
  (left, right, left, right); a 5th question crashes.
- **Exactly one `{x}` per option.** The `{x}` inside the option at `correctIndex` is the
  code letter, and those four letters in order must equal `code.answer`.
- `columns: 2` splits options 0–1 into the left column and 2–3 into the right, so it
  supports at most 4 options. Use it for True/False and other short pairs.
- `code.answer` and `code.userArray` must be the same length (4 everywhere today).

### Crossword — get this exactly right

```javascript
questions: {
    info: { type: "crossword" },
    contentArray: {
        title: "Answer the questions to fill in the crossword.",
        paragraph: [
            'A. Which word begins with the same sound as \"crispy\": [<u>crunchy], [<u>brown], or [<u>tasty]?',
            'B. In this poem, what word rhymes with \"treat\"?',
            'C. Do potatoes grow in the [<u>ground] or in a [<u>swamp]?',
            'D. [<u>True] or [<u>false]: this poem is mostly about cooking potatoes.',
        ],
        puzzle: [
            ["0","0","(C)G","0","0","0","0"],
            ["0","(D)T","R","3U","E","0","0"],
            ["0","0","2O","0","0","0","0"],
            ["(A)C","4R","U","N","C","H","Y"],
            ["0","0","N","0","0","0","0"],
            ["0","0","D","0","(B)E","A","1T"],
        ]
    },
    code: { answer: "TOUR", userArray: ["","","",""] },
}
```

Cell format, in this **exact order**: `(LABEL)` then code digit then letter.

| Cell | Meaning |
|---|---|
| `"0"` | empty cell, no input |
| `"R"` | plain input cell |
| `"(A)C"` | first cell of clue A |
| `"3U"` | code letter 3 (rendered highlighted) |
| `"(C)3F"` | first cell of clue C *and* code letter 3 |

`js/activity/crossword.js` reads the digit with `charAt(3)` when a `(X)` label is
present and `charAt(0)` when it is not. Consequences:

- The label must be exactly three characters: `(A)`, not `(AA)` or `( A )`.
- The digit goes **before** the letter. `"(A)3F"` ✅, `"(A)F3"` ❌, `"U3"` ❌.
- Only digits 1–6 are recognized.

Grid rules:

- Always **6 rows × 7 columns**, padded with `"0"`. Every row must be the same length.
- One label per clue (A–D), on the clue's first cell.
- Code digits must cover `1..code.answer.length` and spell `code.answer` in order.
- Avoid accidental crossing words: any run of 2+ adjacent filled cells reads as a word.

### Decoder

```javascript
questions: {
    info: { type: "decoder" },
    contentArray: [ { title: "[<g>1.] Using context clues, 'dazzling' means:", word: "[B]RIGHT" } ],
    code: { answer: "BOLT", userArray: ["","","",""] },
}
```

Here the code letter is marked with `[X]` inside `word`, not `{x}`.

## Text markup

Verified against `styleText()` in `js/global.js`. Syntax is `[<marker>text]`.

| Syntax | Purpose |
|---|---|
| `[<g>1.]` | gold — used for question numbers |
| `[<u>text]` | underline |
| `[<i>text]` | italic |
| `[<hi>text]` | yellow highlight |
| `[<blu>text]` | blue text |
| `[<sal>text]` | salmon/red (inference highlights) |
| `[<tal>text]` | center align |
| `[<taj>text]` | justify |
| `[<f>3/4]` | fraction |
| `[<e>2]` | superscript |
| `<br>` | line break |
| `{x}` | multiple-choice code letter |
| `[X]` | decoder code letter |

Others exist (`s`, `p`, `fsms`, `fss`, `tcs`, `bgl`, `bn`, `bbl`, `bwl`, `bwb`, `o0`,
`sc*`); read the `styles` map in `styleText()` for the current list.

## Reading the mockup images

File naming tells you the structure: the number suffix is the **challenge order**, and
all files sharing a number belong to the same challenge — `intro-3`, `activity-3`, and
`questions-3` are the third challenge.

- `intro-N` → character name, both dialogue lines, and the `education.topic` label.
- `activity-N` → the documents, their count, and their relative widths.
- `questions-N` → question text, options, which option is selected (that is
  `correctIndex`), the `{x}` code letters, and the code word shown at the bottom.

Mockups often contain their own copy errors (duplicated words, missing words, wrong
homophones). Flag them and confirm whether to fix before shipping.

## Wiring it in (a room does not run without these)

### 1. `js/games.js` — catalog entry

Insert in the theme's block, ordered by grade:

```javascript
{
  id: "yeti-and-the-yams-mixed-reading-skills-2",     // <theme-slug>-<topic>-<grades>
  isNew: true,                                        // optional; isFree: true also exists
  title: "The Yeti and the Yams",
  color: "blue",                                      // keep consistent within a theme
  season: "winter",
  grades: [2],
  subject: "reading",
  topic: "mixed-reading-skills",
  skills: [ /* the education.topic of each challenge, in order */ ],
  thumbnail: "resource/<theme>/assets/branding/reading/all/thumbnail-2nd-grade.png",
  path: "resource/<theme>/topic/reading/all/reading_2ndGrade.js",
  badguy: "resource/<theme>/assets/cutscene/badguy.png",
  main: "resource/<theme>/assets/cutscene/main.png",
},
```

`topic` slugs in use: `mixed-reading-skills`, `mixed-math-skills`, `poetry`,
`story-elements`, `text-features`, `text-structures`, `context-clues`,
`context-clues-and-vocabulary`, `main-idea-and-supporting-details`, `making-inferences`,
`figurative-language`, `character-traits`, `authors-purpose`, `grammar`,
`growth-mindset`, `fractions`, `multiplication`, `order-of-operations`.

`color` must be one of the values in `THUMB_COLORS` in `js/thumbnails.js`.
`season` must match one of the `themes[]` seasons at the top of `js/games.js`.

### 2. `js/analytics.js` — the game code

**The player-facing game code is the digits of `googleAnalyticsID`, in order.**
`js/splash-new.js` strips non-digits from every `googleAnalyticsID` and matches the
5 digits typed on the splash screen, then loads `path` + `resourceJS`.

```javascript
{
    level: ['2nd'],
    topic: 'Reading Comprehension',
    resourceJS: 'topic/reading/all/reading_2ndGrade.js',
    googleAnalyticsID: 'Y6a4dmS-4Kls4Pw-2jTanqd'      // digits → 64442
},
```

So to ship the code `64442`, build an ID whose digits are exactly `6,4,4,4,2`. Note
`resourceJS` here is **relative to the theme dir**, unlike `path` in `games.js`.

Every code must be exactly 5 digits and unique across the whole file. Check before
committing:

```bash
node -e "
const src=require('fs').readFileSync('js/analytics.js','utf8');
const ids=[...src.matchAll(/googleAnalyticsID: '([^']+)'/g)].map(m=>m[1]);
const codes=ids.map(i=>(i.match(/\d/g)||[]).join(''));
const seen={}; codes.forEach((c,i)=>{(seen[c]=seen[c]||[]).push(ids[i])});
console.log('all 5 digits:', codes.every(c=>c.length===5));
console.log('duplicates:', Object.entries(seen).filter(([,v])=>v.length>1));
"
```

### 3. Regenerate the derived files

Both are generated — never hand-edit them:

```bash
node scripts/export-game-ids.mjs        # → firebase-functions/game-ids.json
node scripts/export-game-standards.mjs  # → js/game-standards.js
```

`export-game-standards.mjs` exits non-zero if a `games.js` `path` points at a missing
file, so it doubles as a wiring check.

## Validate before you ship

Run this against the new file. It parses the resource in a VM and checks that each
challenge's code is actually derivable from its questions — the single most common
mistake.

```bash
node -e "
const fs=require('fs'),vm=require('vm');
const ctx={}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(process.argv[1],'utf8')+';globalThis.__r=resource;',ctx);
for (const c of ctx.__r.challengeArray) {
  if (c.info.type==='code-box') { console.log('code-box OK'); continue; }
  const q=c.questions; let derived='';
  if (q.info.type==='multiple-choice') {
    if (q.contentArray.length!==4) console.log('  !! needs exactly 4 questions');
    derived=q.contentArray.map(it=>(it.paragraph[it.correctIndex].match(/\{(\w)\}/)||['','?'])[1]).join('').toUpperCase();
    q.contentArray.forEach((it,k)=>it.paragraph.forEach((p,j)=>{
      const n=(p.match(/\{(\w)\}/g)||[]).length;
      if (n!==1) console.log('  !! Q'+(k+1)+' opt'+j+' has '+n+' code markers:',p);
    }));
  } else if (q.info.type==='crossword') {
    const pz=q.contentArray.puzzle, slots={};
    if (pz.length!==6||pz.some(r=>r.length!==7)) console.log('  !! grid must be 6x7');
    pz.flat().forEach(cell=>{
      if (cell==='0') return;
      const clean=cell.replace(/\([A-Z]\)/,''), d=clean.match(/[1-6]/), letter=clean.replace(/[1-6]/,'');
      if (letter.length!==1) console.log('  !! bad cell:',cell);
      if (d) slots[d[0]]=letter;
    });
    derived=[...Array(q.code.answer.length)].map((_,i)=>slots[i+1]||'?').join('');
  }
  console.log(c.info.title, q.info.type, 'answer='+q.code.answer, 'derived='+derived,
              derived===q.code.answer?'OK':'*** MISMATCH ***');
  const maxJ=Math.max(...c.activity.blockArray.map(b=>b.contentArray.length));
  if (c.activity.style.contentArray.length<maxJ) console.log('  !! style.contentArray too short');
  c.activity.blockArray.forEach((b,bi)=>b.contentArray.forEach((item,j)=>{
    const s=c.activity.style.contentArray[j]||{};
    for (const k of ['title','subtitle','passage']) if (item[k]&&!s[k]) console.log('  !! block'+bi+' item'+j+' '+k+' without style');
    if (item.backgroundImage&&!s.background) console.log('  !! block'+bi+' item'+j+' backgroundImage without style');
  }));
}
" resource/<theme>/topic/.../file.js
```

For crosswords, also dump every horizontal and vertical run of 2+ filled cells and
confirm each labeled clue spells its intended answer and no unintended word appears.

## Visual check

Preview mode auto-fills every correct answer and code:

```bash
python3 -m http.server 8765
# open http://localhost:8765/preview.html?game=<games.js id>
```

## Checklist

- [ ] Uses `challengeArray`, not `activityArray`
- [ ] 5 challenges, code box last
- [ ] Assets referenced actually exist (or the gap was confirmed with the user)
- [ ] `info.logo` uses `assets/branding/placeholder/need-image.png` when no theme thumbnail exists
- [ ] Every block has a 1–4 degree rotation
- [ ] 2–3 image+text cards each have a `translateX` offset (not rotation only)
- [ ] Single-poem blocks use `width: "auto"`; no `brSplit` on poem passages
- [ ] Text hierarchy is title > body > subtitle/author on every activity
- [ ] 2nd–3rd grade files use bumped sizes (`medium` / `mediumSmall` / `small`), not 4th-grade defaults
- [ ] Short stories use `brSplit: 'default'` + `indent: 'default'`
- [ ] `style.contentArray` long enough and covers every content key per position
- [ ] Exactly 4 multiple-choice questions, one `{x}` per option
- [ ] Crosswords are 6×7, labels/digits ordered `(A)3F`, no accidental words
- [ ] Every `code.answer` derivable from its questions (validator passes)
- [ ] `commonCore` written as flat strings
- [ ] `js/games.js` entry added
- [ ] `js/analytics.js` entry added with the requested 5-digit code, verified unique
- [ ] `export-game-ids.mjs` and `export-game-standards.mjs` re-run
- [ ] Mockup copy errors flagged to the user
