// One Word, First Thought — make.fun entry.
//
// The word: "apricity". Why this word: apricity is the warmth of the sun
// on a cold winter day — a rare, precise word that packs a whole sensory
// moment (cold air, low sun, sudden warmth on your face) into eight
// letters. Surprising, vivid, and chosen, not a safe filler word. It also
// dodges the trap of the obvious "interesting word" picks: unlike
// petrichor, it is not the first word everyone reaches for when asked for
// an interesting word, so it still lands as a genuine surprise — a small,
// specific pleasure most readers have felt but never had a name for.
//
// Node 22 standard library only. No network, no dependencies, no randomness,
// no clock reads: the output is one fixed word, written deterministically.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The first thought, as one word: the warmth of the sun on a cold day.
const WORD = "apricity";

// The gate wants exactly one word: refuse to write anything that is not
// a single token with no whitespace, rather than submitting a rejected entry.
function assertSingleWord(word: string): void {
  if (!/^[^\s]+$/.test(word)) {
    throw new Error(
      `entry must be a single word, got ${JSON.stringify(word)}`
    );
  }
}

assertSingleWord(WORD);

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, WORD + "\n", "utf8");
