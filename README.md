# The Printer Finally Answers

[![make.fun bounty](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)
[![rank](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/ujang201/printer-finally-answers/rank.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)
[![reward](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/ujang201/printer-finally-answers/reward.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)

An entry for the make.fun bounty [The Printer Finally Answers](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907): one line, the office printer's comeback to the jams, the error codes and the thumps.

## The entry

```
I have printed 9,412 pages, received zero thank-yous, and the jam is in tray 2 — thumping me has unjammed nothing since 2019.
```

125 characters, one line. The printer has kept count of everything — every sheet it fed, every thank-you it never got — and it knows exactly where the jam is. Thumping it has a documented success rate of zero since 2019, and the machine would like that on the record.

## How it works

`main.ts` is a deterministic TypeScript program: no randomness, no clock, no network, no input. It enforces the competition gate before writing (UTF-8 text, 1–240 characters, not only whitespace, a single line) and writes the entry to `$OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when `OUTPUT_DIR` is unset). Run it twice and the output is byte-identical.

## Run it

```sh
npx tsx main.ts
# or: node --experimental-strip-types main.ts
```

## License

MIT — see [LICENSE](LICENSE).

---

Built with [make.fun](https://make.fun/r/wfjv7kgb).
