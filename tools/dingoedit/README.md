# DingoEdit

A local tool for writing escape rooms with a live preview rendered by the real game.

## Start it

Double-click **DingoEdit.command** in the project folder. A Terminal window opens
and the editor opens in your browser at http://localhost:8766/editor/. Keep the Terminal
window open while you work; close it to stop the editor.

(First time only: if macOS says the file can't be opened, right-click it → **Open** → **Open**.)

From a terminal instead: `node tools/dingoedit/server.mjs --open`

## Writing a room

1. **New room** (top left) — pick the theme, subject, topic and grades. The room starts with
   that theme's characters and map pictures.
2. Click each challenge on the left and fill in the tabs:
   - **Intro** — the character, what they say before and after, the skill, standards and hint.
     *Use the standard hint* writes the usual hint for the question type.
   - **Activity** — the documents players read. *Start from a layout…* picks a layout
     (passages, poems, cards, fractions, number lines, sorting, puzzles…). Text boxes show
     line breaks as real lines. The toolbar adds highlights, underlines and indents.
   - **Questions** — multiple choice, crossword or decoder. **Click a letter** to choose the
     yellow code letter; the code word updates itself from the correct answers.
   - **Raw** — the challenge exactly as stored, for anything the forms don't cover.
3. The preview on the right updates as you type. *Map* shows the whole room.
4. Anything red needs fixing. The badge at the top lists every check; click one to jump to it.
5. **Save** (or ⌘S). Saving writes the room file into the project folder.

## Admin: taking a room live

Switch to **Admin** (top right), then open **Catalog & go live**:

1. **Register as hidden** — adds the room to `js/games.js` (commented out) and
   `js/analytics.js` with a fresh 5-digit game code, then re-runs the export scripts.
   The room is now playable by code but not listed.
2. **Thumbnail** — drop the PNG; it's saved at the branding path the catalog expects.
3. **Make live** — lists it with a New badge. **Clear New** later.
4. Publish as usual (the `publish` skill). The editor never commits, bumps versions,
   or deploys.

## For developers

- `server.mjs` — zero-dependency Node server: serves the repo root (so `preview.html`
  works unchanged), the UI at `/editor/`, and a JSON API. Binds to 127.0.0.1.
- `lib/room-io.mjs` — loads room files with `vm`, writes them back in house style.
- `lib/validate.mjs` — validation rules, shared by the browser and the server.
- `lib/catalog.mjs` — `games.js` / `analytics.js` edits and lifecycle status.
- `lib/repo-data.mjs` — style tokens from `js/global.js`, layouts from
  `js/reference/activity.txt`, theme asset lists, known standards.
- The live preview is `preview.html?editor=1` in an iframe; `js/preview.js` receives
  the room object over `postMessage`.
- `node tools/dingoedit/test/roundtrip.mjs` — proves every room survives load → save
  with no data change. Run it after changing the serializer.

Saving reformats a room file into the standard layout (long passages become one line,
comments other than the `// ⭐` challenge headers are dropped). Data is unchanged.
