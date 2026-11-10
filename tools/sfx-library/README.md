# Sound effects library

The unused files from the Kenney UI Audio pack (CC0, kenney.nl). They are kept
here so they aren't deployed: `scripts/build-pages.mjs` only copies `assets/`.

To use one, move it into the matching folder under `assets/audio/` (`sfx/ui/`, `sfx/feedback/`, `sfx/motion/`, `sfx/cutscene/`, `voice/<set>/`, `music/` or `ambience/`) and add it, with that folder in its src, to `js/sound-config.js`.

`match-glitch.wav` (the old SKIP INTRO glitch) is here too; nothing plays it.

Attribution for every shipped file is in `readme/sound-credits.md`.
