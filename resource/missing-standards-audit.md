# Missing Standards Audit

Audit of escape room resource files with **no Common Core standards listed** (`education.commonCore` missing or empty). Cutscene files excluded.

**Audited:** August 19, 2026

---

## Summary

| Escape Room | Topic Files | With Standards | Missing / Empty |
|---|---:|---:|---:|
| Escape the Midnight Mall | 32 | 25 | **7** |
| The Hasty Harvest | 25 | 22 | **3** |
| Beehive Blitz | 19 | 16 | **3** |
| The Yeti and the Yam | 19 | 16 | **3** |
| **Total** | **95** | **79** | **16** |

---

## Escape the Midnight Mall

**7 files** need standards.

### No `commonCore` field (6)

| File | Topic |
|---|---|
| `topic/reading/all/reading_3rdGrade.js` | All Reading (3rd Grade) |
| `topic/reading/all/reading_4thGrade.js` | All Reading (4th Grade) |
| `topic/reading/all/reading_5thGrade.js` | All Reading (5th Grade) |
| `topic/reading/context-clues/contextClues_4th5thGrade.js` | Context Clues (4th–5th Grade) |
| `topic/reading/figurative-language/figurativeLanguage_4th5thGrade.js` | Figurative Language (4th–5th Grade) |
| `topic/reading/main-idea/mainIdea_4th5thGrade.js` | Main Idea (4th–5th Grade) |

### Empty `commonCore: []` (1)

| File | Topic |
|---|---|
| `topic/social-emotional-learning/growthMindset_4th5thGrade.js` | Growth Mindset (4th–5th Grade) — all 4 challenges have empty arrays |

---

## The Hasty Harvest

**3 files** need standards.

### No `commonCore` field (3)

| File | Topic |
|---|---|
| `topic/reading/all/reading_3rdGrade.js` | All Reading (3rd Grade) |
| `topic/reading/all/reading_4thGrade.js` | All Reading (4th Grade) |
| `topic/reading/all/reading_5thGrade.js` | All Reading (5th Grade) |

---

## Beehive Blitz

**3 files** need standards.

### No `commonCore` field (3)

| File | Topic |
|---|---|
| `topic/reading/all/reading_3rdGrade.js` | All Reading (3rd Grade) |
| `topic/reading/all/reading_4thGrade.js` | All Reading (4th Grade) |
| `topic/reading/all/reading_5thGrade.js` | All Reading (5th Grade) |

---

## The Yeti and the Yam

**3 files** need standards.

### No `commonCore` field (3)

| File | Topic |
|---|---|
| `topic/reading/all/reading_3rdGrade.js` | All Reading (3rd Grade) |
| `topic/reading/all/reading_4thGrade.js` | All Reading (4th Grade) |
| `topic/reading/all/reading_5thGrade.js` | All Reading (5th Grade) |

---

## Cross-Resource Pattern

Every escape room in this audit is missing standards on the same three **All Reading** bundles:

- `reading_3rdGrade.js`
- `reading_4thGrade.js`
- `reading_5thGrade.js`

**Escape the Midnight Mall** has four additional gaps: three topic-specific reading files (Context Clues, Figurative Language, Main Idea) and one SEL file with intentionally empty arrays (Growth Mindset).

---

## Full File List (16)

```
escape-the-midnight-mall/topic/reading/all/reading_3rdGrade.js
escape-the-midnight-mall/topic/reading/all/reading_4thGrade.js
escape-the-midnight-mall/topic/reading/all/reading_5thGrade.js
escape-the-midnight-mall/topic/reading/context-clues/contextClues_4th5thGrade.js
escape-the-midnight-mall/topic/reading/figurative-language/figurativeLanguage_4th5thGrade.js
escape-the-midnight-mall/topic/reading/main-idea/mainIdea_4th5thGrade.js
escape-the-midnight-mall/topic/social-emotional-learning/growthMindset_4th5thGrade.js

the-hasty-harvest/topic/reading/all/reading_3rdGrade.js
the-hasty-harvest/topic/reading/all/reading_4thGrade.js
the-hasty-harvest/topic/reading/all/reading_5thGrade.js

beehive-blitz/topic/reading/all/reading_3rdGrade.js
beehive-blitz/topic/reading/all/reading_4thGrade.js
beehive-blitz/topic/reading/all/reading_5thGrade.js

the-yeti-and-the-yam/topic/reading/all/reading_3rdGrade.js
the-yeti-and-the-yam/topic/reading/all/reading_4thGrade.js
the-yeti-and-the-yam/topic/reading/all/reading_5thGrade.js
```
