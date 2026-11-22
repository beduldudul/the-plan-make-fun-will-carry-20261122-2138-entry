import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Day 1: find 200 firms on Google Maps with broken contact forms or no review page. Offer a $79 one-day fix — form, review page, speed pass — paid via Stripe upfront. 100 emails/day, 2% reply, 1 in 4 closes: 15 jobs, $1,185 by day 30. Edge: same-day fixes no freelancer matches.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");

// Validate the gate before writing: 1-280 Unicode code points, not only whitespace.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry text is ${codePoints} code points, must be 1-280`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry text must not be only whitespace");
}

writeFileSync(outPath, TEXT, "utf8");

// Re-read the file byte-for-byte and verify it matches exactly.
const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== TEXT) {
  throw new Error("verification failed: entry.txt does not match the entry text byte-for-byte");
}
if ([...roundTrip].length !== codePoints) {
  throw new Error("verification failed: entry.txt code-point count mismatch");
}
console.log(`wrote ${outPath} (${codePoints} code points)`);
