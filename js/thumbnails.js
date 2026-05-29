// Thumbnail rendering helpers for the membership dashboard.
//
// Toggle between rendering strategies:
//   "prerender" — static HTML string emitted inline at render time (current default)
//   "render"    — colored placeholder from game.color CSS variables (image TBD)
const THUMBNAIL_MODE = "render";

const THUMB_COLORS = new Set([
  "beige", "blue", "blush", "cyan", "lime", "gold", "gray", "green", "lavender",
  "orange", "pink", "purple", "salmon", "tan", "teal",
]);

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (ch) => {
    switch (ch) {
      case "&": return "&amp;";
      case "<": return "&lt;";
      case ">": return "&gt;";
      case '"': return "&quot;";
      case "'": return "&#39;";
      default: return ch;
    }
  });
}

// Native browser lazy loading via `loading="lazy"`; we still emit a
// fixed width/height so the row reserves the slot before the image
// resolves and the gray .dpaam-thumb background shows through.
function thumbHtmlPrerender(game) {
  if (!game.thumbnail) {
    return `<span class="dpaam-thumb" aria-hidden="true"></span>`;
  }
  return `<img
    class="dpaam-thumb"
    src="${escapeHtml(game.thumbnail)}"
    alt=""
    loading="lazy"
    decoding="async"
    width="84"
    height="84"
  />`;
}

function thumbColorVar(game) {
  const name = game?.color;
  return name && THUMB_COLORS.has(name) ? `--dpaam-${name}` : "--dpaam-black";
}

function thumbHtmlRender(game) {
  const cssVar = thumbColorVar(game);
  const bgVar = game.badguy ? `--thumb-badguy: url('/${game.badguy}');` : "";
  return `<span
    class="dpaam-thumb"
    style="background-color: var(${cssVar}); ${bgVar}"
    aria-hidden="true"
  ></span>`;
}

export function thumbHtml(game) {
  return THUMBNAIL_MODE === "prerender"
    ? thumbHtmlPrerender(game)
    : thumbHtmlRender(game);
}
