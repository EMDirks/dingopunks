---
name: add-printable
description: >-
  Adds a new downloadable printable (PDF + square thumbnail) to the "Free
  Classroom Printables" modal on the membership dashboard. Use when the user
  asks to add, publish, or list a new printable, worksheet pack, or PDF in the
  printables modal.
---

# Add a printable to the printables modal

Every printable is a card in the "Free Classroom Printables" modal (`#dpaam-printables-modal` in `membership.html`). Clicking the card downloads the PDF. There is no JS or CSS per printable: the modal, email-verification gate, grid, hover overlay, and download behavior all apply automatically to any `<li>` in `.dpaam-printables-list`.

## Assets

- PDF: `assets/dpaam/printables/<file>.pdf`
- Thumbnail: `assets/dpaam/printables/thumbnails/thumbnail-<slug>.png`, square (400×400 or 800×800)

The user normally drops both files in place before asking. Confirm they exist (`ls`) and check the thumbnail is square (`sips -g pixelWidth -g pixelHeight <png>`). If it isn't square, tell the user, since the card crops it to a square. Use the filenames as given; don't rename files the user supplied. Existing PDFs mostly follow `DingoPunks-Printable-<Name>-<Season|AllYear>.pdf`, which is a good suggestion if the user asks what to call one.

## Add the card

In `membership.html`, find `<ul class="dpaam-printables-list">` and add a new `<li>` **at the end of the list** unless the user names a position. Copy this block exactly, changing only the four marked values:

```html
            <li>
              <a
                class="dpaam-printables-link"
                href="assets/dpaam/printables/<FILE>.pdf"
                download="<FILE>.pdf"
                aria-label="Download <Display Name> PDF"
              >
                <span class="dpaam-printables-back" aria-hidden="true"></span>
                <img
                  class="dpaam-printables-thumb"
                  src="assets/dpaam/printables/thumbnails/thumbnail-<slug>.png"
                  alt="<Display Name>"
                  width="240"
                  height="240"
                  loading="lazy"
                  decoding="async"
                />
                <span class="dpaam-printables-overlay" aria-hidden="true">↓</span>
              </a>
            </li>
```

- `href` and `download` use the same PDF filename.
- `<Display Name>` is a short title-cased name (e.g. "All-Year Math Challenges", "Trading Cards"), used for both `aria-label` and `alt`. Prefix seasonal packs with the season ("Autumn Brain Teasers").
- Keep `width="240" height="240"` regardless of the PNG's actual size.

## Layout note

`css/membership.css` (`.dpaam-printables-list > li`) shows 4 cards per row on desktop and 3 per row at ≤768px, left-aligned and wrapping. A count that isn't a multiple of 4 leaves a partial, left-aligned last row on desktop. Mention this to the user if the new card creates a lone card on the last row; don't change the CSS unless they ask.

## Don't

- Don't add JS, CSS, or analytics for individual printables. `openPrintablesModal` in `js/membership.js` already handles gating and tracking for the modal as a whole.
- Don't commit, version-bump, or deploy unless the user asks. Use the `push` / `deploy` skills for that.
