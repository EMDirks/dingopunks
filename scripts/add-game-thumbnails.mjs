import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const repoRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const gamesPath = path.join(repoRoot, "js/games.js");

function resolveThumbnail(logoPath, resourcePath) {
  if (logoPath && !logoPath.includes("placeholder") && logoPath.includes("/assets/branding/")) {
    const thumbCandidate = logoPath.replace(/preview-/g, "thumbnail-");
    if (thumbCandidate !== logoPath && fs.existsSync(path.join(repoRoot, thumbCandidate))) {
      return thumbCandidate;
    }
    if (fs.existsSync(path.join(repoRoot, logoPath))) {
      return logoPath;
    }
  }

  const inferred = inferThumbnail(resourcePath);
  if (inferred) return inferred;

  return inferBrandingImagePath(resourcePath);
}

/** Build the expected branding image path from the resource file path. */
function inferBrandingImagePath(resourcePath) {
  const parts = resourcePath.split("/");
  const theme = parts[1];
  const subject = parts[3];
  const topicDir = parts[4];
  const file = path.basename(resourcePath, ".js");

  const rangeMatch = file.match(/(\d+)(?:st|nd|rd|th)?(\d+)(?:st|nd|rd|th)?Grade/i);
  const singleMatch = file.match(/(\d+)(?:st|nd|rd|th)?Grade/i);

  const ord = (n) => ({ 2: "2nd", 3: "3rd", 4: "4th", 5: "5th" })[n] ?? `${n}th`;

  let gradeSuffix;
  if (rangeMatch) {
    gradeSuffix = `thumbnail-${ord(rangeMatch[1])}-${ord(rangeMatch[2])}-grade`;
  } else if (singleMatch) {
    gradeSuffix = `thumbnail-${ord(singleMatch[1])}-grade`;
  } else {
    return null;
  }

  const topicSlug = topicDir.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  const brandingRoot = `resource/${theme}/assets/branding`;

  const candidates = [];

  if (subject === "reading" && topicDir === "all") {
    candidates.push(`${brandingRoot}/reading/all/${gradeSuffix}.png`);
    candidates.push(`${brandingRoot}/all/${gradeSuffix}.png`);
  } else if (subject === "math" && topicDir === "all") {
    candidates.push(`${brandingRoot}/math/all-standards/${gradeSuffix}.png`);
    candidates.push(`${brandingRoot}/math/all/${gradeSuffix}.png`);
  } else if (subject === "social-emotional-learning") {
    candidates.push(`${brandingRoot}/social-emotional-learning/growth-mindset/${gradeSuffix}.png`);
  } else {
    candidates.push(`${brandingRoot}/${topicSlug}/${gradeSuffix}.png`);
    candidates.push(`${brandingRoot}/${subject}/${topicSlug}/${gradeSuffix}.png`);
    candidates.push(`${brandingRoot}/reading/${topicSlug}/${gradeSuffix}.png`);
  }

  for (const candidate of candidates) {
    if (fs.existsSync(path.join(repoRoot, candidate))) return candidate;
    const preview = candidate.replace(/thumbnail-/g, "preview-");
    if (fs.existsSync(path.join(repoRoot, preview))) return preview;
  }

  // Last resort: return the most likely thumbnail path even if the asset is not uploaded yet
  return candidates[0] ?? null;
}

function inferThumbnail(resourcePath) {
  const parts = resourcePath.split("/");
  const theme = parts[1];
  const subject = parts[3];
  const topicDir = parts[4];
  const file = path.basename(resourcePath, ".js");

  const brandingRoot = path.join(repoRoot, "resource", theme, "assets", "branding");
  if (!fs.existsSync(brandingRoot)) return null;

  const thumbnails = [];
  const walk = (dir) => {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, ent.name);
      if (ent.isDirectory()) walk(p);
      else if (/^thumbnail-.*\.png$/i.test(ent.name)) thumbnails.push(p);
    }
  };
  walk(brandingRoot);
  if (!thumbnails.length) return null;

  const gradeNums = [];
  const rangeMatch = file.match(/(\d+)(?:st|nd|rd|th)?(\d+)(?:st|nd|rd|th)?Grade/i);
  if (rangeMatch) {
    gradeNums.push(rangeMatch[1], rangeMatch[2]);
  } else {
    const single = file.match(/(\d+)(?:st|nd|rd|th)?Grade/i);
    if (single) gradeNums.push(single[1]);
  }

  const topicSlug = topicDir.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

  let candidates = thumbnails.map((p) => path.relative(repoRoot, p));

  if (subject === "reading" || subject === "math") {
    const bySubject = candidates.filter(
      (p) => p.includes(`/${subject}/`) || (!p.includes("/reading/") && !p.includes("/math/")),
    );
    if (bySubject.length) candidates = bySubject;
  }

  const topicVariants = [topicDir, topicSlug, topicDir.replace(/([A-Z])/g, "-$1").toLowerCase()];
  for (const tp of topicVariants) {
    const filtered = candidates.filter((p) =>
      p.toLowerCase().includes(tp.toLowerCase().replace(/_/g, "-")),
    );
    if (filtered.length) candidates = filtered;
  }

  if (gradeNums.length >= 2) {
    const f = candidates.filter((p) => /2nd-3rd|4th-5th|4th5th/i.test(p));
    if (f.length) candidates = f;
  } else if (gradeNums.length === 1) {
    const ord = { 2: "2nd", 3: "3rd", 4: "4th", 5: "5th" }[gradeNums[0]];
    const f = candidates.filter((p) => p.includes(`thumbnail-${ord}-grade`));
    if (f.length) candidates = f;
  }

  if (topicDir === "all" && subject === "reading") {
    const f = candidates.filter((p) => /\/all\/thumbnail-/.test(p) || /\/reading\/all\//.test(p));
    if (f.length) candidates = f;
  }
  if (topicDir === "all" && subject === "math") {
    const f = candidates.filter((p) => /all-standards|\/math\/all\//.test(p));
    if (f.length) candidates = f;
  }

  candidates.sort();
  return candidates[0] ?? null;
}

const content = fs.readFileSync(gamesPath, "utf8");
const pathRegex = /path:\s*"([^"]+)"/g;
const paths = [...content.matchAll(pathRegex)].map((m) => m[1]);

const thumbnailsByPath = new Map();
const missing = [];

for (const resourcePath of paths) {
  let logo = null;
  try {
    const src = fs.readFileSync(path.join(repoRoot, resourcePath), "utf8");
    const m = src.match(/logo:\s*"([^"]+)"/);
    logo = m ? m[1] : null;
  } catch {
    missing.push({ path: resourcePath, reason: "file not found" });
    continue;
  }

  const thumbnail = resolveThumbnail(logo, resourcePath);
  if (!thumbnail) {
    missing.push({ path: resourcePath, logo, thumbnail });
  } else {
    thumbnailsByPath.set(resourcePath, thumbnail);
  }
}

if (missing.length) {
  console.error("Could not resolve thumbnails for:");
  for (const m of missing) console.error(m);
  process.exit(1);
}

let updated = content;
for (const [resourcePath, thumbnail] of thumbnailsByPath) {
  const needle = `path: "${resourcePath}",`;
  const replacement = `thumbnail: "${thumbnail}",\n    path: "${resourcePath}",`;
  if (!updated.includes(needle)) {
    console.error("Could not find path entry:", resourcePath);
    process.exit(1);
  }
  if (updated.includes(`thumbnail: "${thumbnail}"`) && updated.includes(needle)) {
    // already has thumbnail before this path - skip duplicate run
    const block = updated.slice(
      Math.max(0, updated.indexOf(needle) - 200),
      updated.indexOf(needle) + needle.length,
    );
    if (block.includes("thumbnail:")) continue;
  }
  updated = updated.replace(needle, replacement);
}

fs.writeFileSync(gamesPath, updated);
console.log(`Added thumbnail to ${thumbnailsByPath.size} games.`);
