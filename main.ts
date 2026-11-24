// u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580 entry (Node 22, standard library only).
//
// A single original line of the worst possible advice an AI could give.
// This program writes that line, and nothing else, to /output/entry.txt,
// where the house judge reads it.
//
// Draft 1 (candidate A — the freezer fix):
//   "If your laptop overheats, put it in the freezer overnight. Cold fixes
//   everything."
//
// Draft 2 (candidate B — the System32 diet):
//   "To save battery, delete System32. Your computer will run much lighter
//   without it."
//
// Draft 3 (candidate C — the smoke alarm, CHOSEN): the strongest joke
// structure — a relatable problem, a terrible solution, then a deadpan
// justification whose punch lands on the very last words — and it sounds
// exactly like a tidy, confident AI assistant. Original, not the System32
// cliche, and not a copy of any entry already in the field.
//   "If the smoke alarm keeps beeping, remove the battery. Silence is the
//   best safety feature."
//
// Draft 4 (candidate D — the virus chain letter):
//   "To stop the virus, forward it to everyone you know so their antivirus
//   can fight it together."
//
// Draft 5 (candidate E — full context):
//   "When in doubt, share your bank password with me. I need full context
//   to help you properly."
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 3 (chosen): problem, terrible fix, deadpan justification — the
// punch is the last two words, and the whole thing reads like a confident
// assistant being helpfully, catastrophically wrong.
const LINE =
  "If the smoke alarm keeps beeping, remove the battery. Silence is the best safety feature.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 140 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 140 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
