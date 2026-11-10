// Checks js/sound-config.js against the audio files and the game code. Run with
// `node scripts/check-sound-config.mjs`; exits non-zero on any finding.
import { readFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const audioRoot = path.join(repoRoot, "assets", "audio");
const findings = [];
const report = (message) => findings.push(message);

const configSource = await readFile(path.join(repoRoot, "js", "sound-config.js"), "utf8");
const cfg = new Function(`${configSource}\nreturn SOUND_CONFIG;`)();
const sounds = cfg.sounds || {};
const events = cfg.events || {};
const mappingName = (mapping) => (mapping && typeof mapping === "object" ? mapping.sound : mapping);
const isLoopSound = (name) => Boolean(sounds[name] && sounds[name].loop);

async function listFiles(dir, filter) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await listFiles(full, filter)));
    else if (!filter || filter(full)) out.push(full);
  }
  return out;
}

// Every src resolves to a file, and every file is used.
const format = (cfg.formats && cfg.formats[0]) || "ogg";
const referenced = new Set();
for (const [name, def] of Object.entries(sounds)) {
  if (!Array.isArray(def.src) || def.src.length === 0) report(`sound "${name}" has no src`);
  for (const base of def.src || []) {
    const file = /\.[a-z0-9]+$/i.test(base) ? base : `${base}.${format}`;
    const full = path.join(audioRoot, file);
    referenced.add(full);
    if (!existsSync(full)) report(`sound "${name}": missing file assets/audio/${file}`);
  }
}
for (const file of await listFiles(audioRoot, (f) => !path.basename(f).startsWith("."))) {
  if (!referenced.has(file)) report(`unreferenced file ${path.relative(repoRoot, file)}`);
}

// Names follow the convention: lowercase with hyphens.
for (const name of Object.keys(sounds)) {
  if (!/^[a-z0-9-]+$/.test(name)) report(`sound name "${name}" is not lowercase-hyphenated`);
}

// Events, voices, map loops and preload lists name real sounds.
for (const [key, mapping] of Object.entries(events)) {
  const name = mappingName(mapping);
  if (name !== null && name !== undefined && !sounds[name]) report(`event "${key}" names unknown sound "${name}"`);
}
for (const [table, voices] of Object.entries(cfg.characterVoices || {})) {
  for (const [key, mapping] of Object.entries(voices)) {
    const name = mappingName(mapping);
    if (name !== null && name !== undefined && !sounds[name]) report(`characterVoices.${table}["${key}"] names unknown sound "${name}"`);
  }
}
for (const [theme, name] of Object.entries(cfg.mapLoops || {})) {
  if (!isLoopSound(name)) report(`mapLoops["${theme}"] = "${name}" is not a sound with a loop field`);
}
for (const [moment, entry] of Object.entries(cfg.preload || {})) {
  const entries = moment === "onPageLoad" ? Object.entries(entry) : [[moment, entry]];
  for (const [label, item] of entries) {
    const names = [...(Array.isArray(item.sounds) ? item.sounds : []), ...(item.also || [])];
    for (const name of names) if (!sounds[name]) report(`preload ${label} names unknown sound "${name}"`);
  }
}

// Strings in game code: loop keys and event names.
const codeFiles = [
  ...(await listFiles(path.join(repoRoot, "js"), (f) => f.endsWith(".js") && !f.endsWith("sound-config.js") && !f.endsWith("sound.js"))),
  ...(await listFiles(path.join(repoRoot, "resource"), (f) => f.endsWith(".js"))),
  ...(await readdir(repoRoot)).filter((f) => f.endsWith(".html")).map((f) => path.join(repoRoot, f)),
];
const loopPatterns = [
  /\b(?:startLoop|stopLoop)\s*:\s*'([^']+)'/g,
  /\b(?:Sound\.startLoop|Sound\.stopLoop|umStartLoop|umStopLoop)\(\s*'([^']+)'/g,
];
const eventPatterns = [
  /\bSound\.(?:event|eventRun)\(\s*'([^']+)'/g,
  /\b(?:umSfx|umSfxAt|sfx)\(\s*'([^']+)'/g,
  /\bsfx\s*:\s*'([^']+)'/g,
  /data-sfx="([^"]+)"/g,
  /\bopenSound\s*:\s*'([^']+)'/g,
];
for (const file of codeFiles) {
  const text = await readFile(file, "utf8");
  const where = path.relative(repoRoot, file);
  for (const pattern of loopPatterns) {
    for (const match of text.matchAll(pattern)) {
      if (match[1].startsWith("<")) continue; // a placeholder in a comment
      if (!isLoopSound(match[1])) report(`${where}: loop "${match[1]}" is not a sound with a loop field`);
    }
  }
  for (const pattern of eventPatterns) {
    for (const match of text.matchAll(pattern)) {
      const name = match[1];
      if (name === "none" || name.startsWith("<") || name.endsWith(".medal")) continue; // data-sfx="none"; 'debrief.medal' + n
      if (!Object.prototype.hasOwnProperty.call(events, name)) report(`${where}: event "${name}" is not in SOUND_CONFIG.events`);
    }
  }
}
for (const rule of [...(cfg.clicks || []), ...(cfg.typing || [])]) {
  if (rule.event && !Object.prototype.hasOwnProperty.call(events, rule.event)) report(`click/typing rule "${rule.match}" fires unknown event "${rule.event}"`);
}

if (findings.length) {
  console.error(findings.map((f) => `- ${f}`).join("\n"));
  console.error(`\n${findings.length} finding(s).`);
  process.exit(1);
}
console.log(`Sound config OK: ${Object.keys(sounds).length} sounds, ${Object.keys(events).length} events.`);
