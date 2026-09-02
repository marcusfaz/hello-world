# The Johto Circuit — data tooling

`heartgold-guide.html` at the repo root is a single self-contained file. The
generated data inside it — the per-area encounter index and the level-up moves
the move plans are built on — comes from these scripts rather than from memory.

    python3 tools/zones.py      # PokeAPI encounters -> cache/zones-raw.json
    python3 tools/zonemap.py    # assign every area to a stage -> cache/zones.js
    python3 tools/learn.py      # HGSS level-up learnsets -> cache/learn.json

`cache/` is git-ignored; the scripts re-fetch and re-cache on demand.

## Where the data comes from

* **Encounters** — PokeAPI, filtered to the `heartgold` version. PokeAPI returns
  one row per encounter SLOT, so a species holding four walking slots appears
  four times; the rate for a method is the SUM of its slot chances. `max_chance`
  sums across methods and is useless for display — a Magikarp reachable by three
  rods reads as 130%.
* **Typing** — PokeAPI reports current-generation types. Fairy does not exist in
  Generation IV, so `zones.py` restores the Gen IV typing from an explicit table
  and fails loudly on any species that gained Fairy without an entry in it.
* **Learnsets** — PokeAPI, `heartgold-soulsilver` version group, `level-up`
  method only. This is what the move plans quote; the levels are not guesses.

## Two things the tooling deliberately excludes

* **Pokéwalker courses.** PokeAPI files them as `unknown-all-*` locations. They
  are not places in the game, so listing them would send you somewhere that does
  not exist. `zonemap.py` skips them by name.
* **Pokémon Ranger distributions.** An external event, not a HeartGold
  encounter.

`zonemap.py` exits non-zero if any area is left unassigned, or if an assigned
area has no encounter data — so the guide cannot walk you through somewhere
without saying what lives there.
