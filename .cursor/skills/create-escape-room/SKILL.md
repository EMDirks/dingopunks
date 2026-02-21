---
name: create-escape-room
description: Create escape room content files from uploaded images. Use when the user provides images of poems, passages, questions, or character dialogues and asks to build a new escape room resource file.
---

# Creating Escape Rooms from Images

## Overview

Extract content from uploaded images and create a `resource` JS file following the Puzzle Punks escape room format.

## File Location

Place new escape rooms in:
```
resource/escape-the-midnight-mall/topic/[subject]/[topic]/[topic]_[grade]Grade.js
```

Example: `resource/escape-the-midnight-mall/topic/reading/poetry/poetry_2nd3rdGrade.js`

## Resource Structure

```javascript
const resource = {
    info: {
        title: "Escape the Midnight Mall",
        path: "escape-the-midnight-mall",
        logo: "assets/branding/placeholder/need-image.png",
        timerLabel: "TIME TIL MIDNIGHT"
    },
    challengeArray: [
        // 4 challenges + 1 code-box
    ]
};
```

## Challenge Structure

Each challenge has 4 parts:

```javascript
{
    info: {
        type: 'challenge',
        title: "Store Name",
        asset: "background.png",        // From assets/activity/node/
        state: "incomplete",
        hint: { text: "...", isUsed: false },
        education: { topic: "Topic Name", commonCore: [] }
    },
    intro: {
        character: "Character Name",
        asset: "character.png",          // From assets/activity/character/
        dialogue: {
            incomplete: "Dialog when starting...",
            complete: "Dialog when finished..."
        }
    },
    activity: { /* see Activity section */ },
    questions: { /* see Questions section */ }
}
```

## Available Assets

**Characters** (`assets/activity/character/`):
- `noah-shortnose.png` → Martin Shortnose
- `topsy.png` → Terrible Topsy
- `prisma.png` → Prisma
- `robustus-the-great.png` → Robustus the Great
- `zeeb.png` → Zeeb

**Backgrounds** (`assets/activity/background/` and `node/`):
- `the-candy-cave.png`
- `critterwerks.png`
- `holographia.png`
- `underworld-athletics.png`
- `zeeb-plex.png`

## Activity (Dynamic Type)

```javascript
activity: {
    info: { type: "dynamic", asset: "background.png" },
    blockArray: [
        {
            contentArray: [
                { title: { text: "Title" } },
                { subtitle: { text: "By Author" } },
                { passage: { text: "Content here..." } }
            ],
            style: {
                transform: {
                    translateX: "0%",
                    translateY: "0%",
                    rotate: "2deg"  // IMPORTANT: Always 1-4 degrees, never 0!
                }
            }
        }
    ],
    style: {
        block: {
            misc: { material: 'paper', padding: "default" },
            dimension: { width: "percent55", height: "auto" },
            flexbox: { justifyContent: "center", alignItems: "center" }
        },
        contentArray: [/* styling per content item */]
    }
}
```

### Document Transform Rules

**Rotation:** Always add slight rotation (1-4 degrees). Never use `rotate: "0deg"`.

**Position:** Keep `translateX` and `translateY` values small — typically **-10% to 10%**. Documents should be relatively close together, not spread far apart.

Examples:
```javascript
// Single doc (slight offset)
{ translateX: "1%", translateY: "2%", rotate: "-2deg" }

// Two side-by-side
{ translateX: "-5%", translateY: "2%", rotate: "-2deg" }   // left
{ translateX: "5%", translateY: "-3%", rotate: "3deg" }    // right

// Four docs (2x2 grid)
{ translateX: "-5%", translateY: "-5%", rotate: "-1deg" }  // top-left
{ translateX: "5%", translateY: "-5%", rotate: "2deg" }    // top-right
{ translateX: "-5%", translateY: "5%", rotate: "-2deg" }   // bottom-left
{ translateX: "5%", translateY: "5%", rotate: "3deg" }     // bottom-right
```

### Image File Naming Convention

When the user provides images, **the number in the filename indicates the challenge order**:
- `intro-1`, `activity-1`, `questions-1` → Challenge 1
- `intro-2`, `activity-2`, `questions-2` → Challenge 2
- `intro-3`, `activity-3`, `questions-3` → Challenge 3
- `intro-4`, `activity-4`, `questions-4` → Challenge 4

Use these numbers to match intros, activities, and questions to the correct challenge.

## Questions

### Multiple Choice

```javascript
questions: {
    info: { type: "multiple-choice" },
    contentArray: [
        {
            title: "[<g>1.] Question text?",
            correctIndex: 0,           // 0-based index of correct answer
            columns: 2,                // Optional: 2 columns for short answers
            paragraph: [
                "Answer with {c}ode letter",   // Correct answer
                "Wrong {a}nswer",
                "Another {w}rong one",
            ]
        }
    ],
    code: { answer: "CODE", userArray: ["","","",""] }
}
```

### Crossword

```javascript
questions: {
    info: { type: "crossword" },
    contentArray: {
        title: "Answer the questions to fill in the crossword.",
        paragraph: [
            'A. Question with [<u>underlined] options?',
            'B. [<u>True] or [<u>false]: Statement here.',
        ],
        puzzle: [
            ["0","0","(B)3T","0","0"],
            ["(A)F","2I","R","4S","T"],
            // "0" = empty, "(A)" = clue label, "1"/"2" = code letter position
        ]
    },
    code: { answer: "FITS", userArray: ["","","",""] }
}
```

## Special Text Formatting

| Syntax | Purpose | Example |
|--------|---------|---------|
| `{x}` | Code letter (gold highlight) | `"The {c}at sat"` → c is a code letter |
| `[<g>1.]` | Gold question number | `"[<g>1.] What is...?"` |
| `[<u>text]` | Underline | `"[<u>True] or [<u>false]"` |
| `[<tal>...]` | Poem text alignment | Wrap entire poem stanzas |
| `[<em>text]` | Emphasis/italic | `"means [<em>not heavy]"` |
| `[<i>text]` | Italic | `"This is [<i>not] correct"` |
| `<br>` | Line break | Use in poems between lines |

## Code Box (Final Challenge)

Always end with:

```javascript
{
    info: {
        type: "code-box",
        asset: "node-background-codeBox.png",
        title: "Code Box",
        state: "incomplete",
    },
    content: { codeBox: null }
}
```

## Workflow

1. **Extract from images**: Read all poems, passages, dialogues, questions, and answers
2. **Identify structure**: Note which character/store goes with which content
3. **Map code letters**: The `{x}` letters in order spell the 4-letter code
4. **Match assets**: Use existing character and background images
5. **Create file**: Follow the structure above
6. **Add rotation**: Ensure all document blocks have 1-4 degree rotation
7. **Commit**: Use descriptive commit message

## Reference

For complete examples, see:
- `resource/escape-the-midnight-mall/topic/reading/main-idea/mainIdea_2nd3rdGrade.js`
- `resource/escape-the-midnight-mall/topic/reading/poetry/poetry_2nd3rdGrade.js`
