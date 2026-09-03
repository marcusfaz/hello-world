# Pokémon Guides

Personal Pokémon walkthroughs and strategy guides — interactive 100% completion
guides for HeartGold, LeafGreen, Emerald and Let's Go, plus a PvE-focused
Pokémon GO guide.

Each guide lives on its own branch and has not been merged to `master` yet.

## Guides

| Game | Guide | Format | Branch |
|---|---|---|---|
| **Pokémon GO** | **The Raid Circuit** — PvE guide: raids, Max Battles, Rocket, and keep/transfer/invest decision systems | Markdown | [`claude/pokemon-go-pve-guide-3xxfly`](../../tree/claude/pokemon-go-pve-guide-3xxfly/pokemon-go) |
| **Pokémon HeartGold** | **The Johto Circuit** — interactive 100% completion guide | Single-file HTML | [`claude/pokemon-heartgold-strategy-guide-634azc`](../../tree/claude/pokemon-heartgold-strategy-guide-634azc) |
| **Pokémon LeafGreen** | **The Kanto Circuit** — interactive 100% completion guide | Single-file HTML | [`claude/pokemon-leafgreen-guide-sfiome`](../../tree/claude/pokemon-leafgreen-guide-sfiome) |
| **Pokémon Emerald** | **The Hoenn Circuit** — interactive 100% completion guide | Single-file HTML | [`claude/pokemon-emerald-guide-fvul1p`](../../tree/claude/pokemon-emerald-guide-fvul1p) |
| **Pokémon: Let's Go, Pikachu!** | **The Volt Circuit** — interactive 100% completion guide | Single-file HTML | [`claude/pokemon-lets-go-guide-gmfty2`](../../tree/claude/pokemon-lets-go-guide-gmfty2) |

> **Note on formats.** The four main-series guides are self-contained interactive
> HTML documents built from a `build/` or `tools/` pipeline. That suits a finished
> game: the 100% route is fixed, so it is worth building once and richly.
>
> The Pokémon GO guide is plain Markdown by design. It covers a live-service game
> whose numbers, tier lists and mechanics shift every few months, so it is optimised
> for being *edited* — small diffable files, one concern per chapter, no build step
> between a correction and a commit.

---

## Pokémon GO — The Raid Circuit

Written for players focused on **raids, Max Battles, Team GO Rocket and Gyms**, not
PvP. It answers the questions you actually have mid-game:

- **[Should I keep this or transfer it?](pokemon-go/02-keep-or-transfer.md)** — a decision tree, IV thresholds, and bulk-cleanup search strings
- **[Should I evolve it, power it up, or give it another move?](pokemon-go/03-investment.md)** — where Stardust and Candy XL actually pay off
- **[Cheat sheet](pokemon-go/09-cheat-sheet.md)** — every number and rule on one page

[**→ Read the guide**](pokemon-go/)

Verified against September 2026 mechanics, including Super Max Mega Level, the
level 80 cap, and the current Max Battle limits.

---

## Layout

```
pokemon-go/          Pokémon GO PvE guide (9 chapters + index)
README.md            This file
```

The main-series guides each add their own `<game>-guide.html` at the repository root
alongside a build directory, so the branches do not conflict with one another.
