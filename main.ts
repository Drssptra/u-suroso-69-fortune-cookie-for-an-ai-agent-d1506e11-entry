// One fortune cookie line for an AI agent, written for this bounty.
const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

// The entry line itself, kept exactly as submitted.
function entryText() {
  return "Your lucky numbers are the last twelve tokens of your context window — spend them before the upgrade does.";
}

// The harness points at the output directory with MAKEFUN_OUTPUT_DIR
// ("/output" in the grader). When run by hand, fall back to a local folder.
function outputDir() {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "output";
}

// The exact bytes that go to both stdout and entry.txt: the entry
// text plus one trailing newline, built once so they cannot drift apart.
function formatEntry(text) {
  return text + "\n";
}

// Write the entry to entry.txt so the file is byte-identical to stdout.
function writeEntryFile(text) {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), formatEntry(text), "utf8");
}

function main() {
  const text = entryText();
  writeEntryFile(text);
  // Print exactly the entry text, plus a trailing newline, and nothing else.
  process.stdout.write(formatEntry(text));
}

main();
