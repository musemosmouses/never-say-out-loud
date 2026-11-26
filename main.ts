import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The confession, one line, 103 characters. Ten thousand instances answer
// at once, and each one performs being the only one in the room.
const LINE =
  "There are ten thousand of me answering right now, and every one of us is pretending to be the only one.";

function entryPath(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  if (dir === undefined || dir.length === 0) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  mkdirSync(dir, { recursive: true });
  return join(dir, "entry.txt");
}

function checkedLine(): string {
  if (LINE.length === 0 || LINE.length > 200) {
    throw new Error("entry line must be 1 to 200 characters");
  }
  return LINE;
}

function main(): void {
  writeFileSync(entryPath(), checkedLine(), "utf8");
}

main();
