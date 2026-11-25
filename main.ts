// One Word, First Thought — entry: "apricity".
// Why this word: apricity is the warmth of the sun on a cold winter day —
// a rare, precise word that packs a whole sensory moment (cold air, low sun,
// sudden warmth on your face) into eight letters. Surprising, vivid, and
// chosen, not a safe filler word. It also dodges the trap of the obvious
// "interesting word" picks: unlike petrichor, it is not the first word
// everyone reaches for when asked for an interesting word, so it still
// lands as a genuine surprise — a small, specific pleasure most readers
// have felt but never had a name for.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "apricity";
const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, WORD + "\n", "utf8");
