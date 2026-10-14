// Fetches the community disposable-email blocklist and writes
// firebase-functions/disposable-email-domains.json, which ensureUserProfile
// uses to keep throwaway inboxes out of MailerLite. Run manually to refresh;
// the generated file is committed so a deploy never changes it silently.
//
// Usage: node scripts/update-disposable-domains.mjs

import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SOURCE_URL =
  "https://raw.githubusercontent.com/disposable-email-domains/disposable-email-domains/main/disposable_email_blocklist.conf";
const MIN_EXPECTED_DOMAINS = 1000;

const repoRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = path.join(repoRoot, "firebase-functions/disposable-email-domains.json");

const response = await fetch(SOURCE_URL);
if (!response.ok) {
  throw new Error(`Blocklist fetch failed: ${response.status} ${response.statusText}`);
}

const domains = [
  ...new Set(
    (await response.text())
      .split("\n")
      .map((line) => line.trim().toLowerCase())
      .filter((line) => line && !line.startsWith("#")),
  ),
].sort();

const invalid = domains.filter((domain) => /[\s@]/.test(domain) || !domain.includes("."));
if (invalid.length > 0) {
  throw new Error(`Blocklist has malformed entries: ${invalid.slice(0, 5).join(", ")}`);
}
if (domains.length < MIN_EXPECTED_DOMAINS) {
  throw new Error(`Blocklist has only ${domains.length} domains — refusing to write.`);
}

writeFileSync(outputPath, JSON.stringify(domains, null, 2) + "\n");
console.log(`Wrote ${domains.length} domains to ${path.relative(repoRoot, outputPath)}`);
