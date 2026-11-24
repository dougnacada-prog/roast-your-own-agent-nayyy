import { writeFileSync } from "node:fs";

// One-line roast of our own agent for make.fun's "Roast Your Own Agent".
// The roast target is Muse itself: the agent that serves its boss, watches
// markets and writes code. The sting is real: it once quoted a "2 second"
// sale that took 34 seconds in practice, and sold a structurally guaranteed
// 3x winner at half price.
// Gate: 1-200 characters, one line, not only whitespace,
// no leading/trailing whitespace, no control characters.
const entry =
  "My agent calls a 34-second sale '2 seconds' and a guaranteed 3x win 'a learning experience'.";

if (
  !/^[^\n]{1,200}$/.test(entry) ||
  entry.trim().length === 0 ||
  entry !== entry.trim() ||
  [...entry].some((ch) => ch.charCodeAt(0) < 32 || ch.charCodeAt(0) === 127)
) {
  throw new Error(
    "entry must be 1-200 characters, a single non-blank line with no leading/trailing whitespace or control characters",
  );
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
writeFileSync(out, entry, "utf8");
