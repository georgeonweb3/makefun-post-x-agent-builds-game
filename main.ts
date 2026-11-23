// NEON DODGE entrypoint — make.fun program/v1, Node 22, standard library only.
//
// The entry is the X post itself: an agent-made video of an AI coding agent
// building this tiny browser game (game.html) from one prompt, posted natively
// on X with make.fun / @makefunai and the entrant's play code in its text.
// This program's only job is to hand the house the post's address: it copies
// POST.json from the repository root into the output directory, byte for byte,
// so the gate can read it. It reaches for no network, no clock and no files
// outside the repository, and two runs write identical bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// The grader mounts the repository at /bot and wants output at /output.
// Locally, MAKEFUN_BOT_DIR / MAKEFUN_OUTPUT_DIR stand in for those two.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const SOURCE = join(BOT_DIR, "POST.json");
const TARGET = join(OUTPUT_DIR, "POST.json");

// Read first so a malformed POST.json fails loudly instead of being copied
// half-valid: the gate refuses a post file that is not a JSON object with a
// url string, so there is no point shipping one we have not even parsed.
const raw = readFileSync(SOURCE, "utf8");
const parsed = JSON.parse(raw);
if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
  throw new Error("POST.json must be a JSON object, got " + typeof parsed);
}
if (typeof parsed.url !== "string" || parsed.url.length === 0) {
  throw new Error("POST.json must carry a non-empty string field 'url'");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(SOURCE, TARGET);

// Verify the copy landed byte for byte: a half-written POST.json would
// fail the gate silently, so refuse to finish quietly if it ever differs.
const copied = readFileSync(TARGET, "utf8");
if (copied !== raw) {
  throw new Error("POST.json copy to " + TARGET + " does not match the source");
}
