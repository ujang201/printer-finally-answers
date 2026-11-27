// The Printer Finally Answers — deterministic one-liner entry.
//
// The program writes exactly one line — the office printer's comeback to
// everyone who jams it, thumps it and stares at its error codes — to
// $OUTPUT_DIR/entry.txt (or /output/entry.txt when OUTPUT_DIR is unset).
// No randomness, no clock, no network, no input: the same bytes every run.
//
// Gate enforced before writing: UTF-8 text, 1–240 characters, not only
// whitespace, a single line. The entry itself is a constant, so the gate is
// really a tripwire against accidental edits that would push it over 240 —
// the line was drafted at 125 characters, comfortably inside the limit.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I have printed 9,412 pages, received zero thank-yous, and the jam is in tray 2 — thumping me has unjammed nothing since 2019.";

function checkGate(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 240) {
    throw new Error(`entry is ${chars.length} characters, gate requires 1-240`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

checkGate(ENTRY);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
