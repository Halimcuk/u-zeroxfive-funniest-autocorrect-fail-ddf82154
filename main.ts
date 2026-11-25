import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one autocorrected text message. The intended word is "dinner";
// autocorrect swapped it for "divorce", turning a romantic evening into
// something far more ominous — while the pasta, candles and dress stay.
const ENTRY =
  "Can't wait for divorce tonight, love — I made your favourite pasta, lit the candles, and wore the dress you like.";

// The competition gate requires 1 to 199 characters (not bytes): the
// check below uses the string length, so a multi-byte character counts once.
const MAX_CHARS = 199;
if (ENTRY.length > MAX_CHARS || ENTRY.trim().length === 0) {
  throw new Error(
    `Entry must be 1 to ${MAX_CHARS} characters, got ${ENTRY.length}.`,
  );
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
