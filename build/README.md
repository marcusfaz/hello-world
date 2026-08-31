# The Hoenn Circuit — build

`emerald-guide.html` is generated. Do not hand-edit it; edit the parts in `src/`
and rebuild.

    python3 build.py            # src/*  ->  ../emerald-guide.html (+ cache/wrapped.html)
    python3 tools/verify.py     # headless render: JS errors, images, overflow, contrast
    python3 tools/audit.py      # content: catch cards, boss teams, move levels, TMs, party, route
    python3 tools/steps.py      # placement: every route step against the leg it sits under
    python3 tools/lightbox.py   # drives the map viewer: opens, scales, navigates, closes

Run all three on every change. `build.py` also emits `cache/wrapped.html`, the page
inside the doctype/head/body skeleton the Artifact publisher adds — both checkers read
that, because without a doctype Chromium runs in quirks mode and `<table>` stops
inheriting colour, which produces false contrast failures.

## Source parts, in build order

| part | what it holds |
|---|---|
| `00-head.html` | `<title>`, font links, the whole stylesheet |
| `10-shell.html` | rail, topbar, mount points |
| `20-assets.js` | **generated** by `tools/assets.py` — every image as a data URI |
| `30-engine.js` | persistence, block renderers, search, hide-done, theme, type chart |
| `40-chapters.js` | chapter list and order |
| `41-core.js` | Gen 3 rules, abilities, weather |
| `50/51/52-walk-*.js` | the fourteen Hoenn stages |
| `60-league.js` | Elite Four and Wallace |
| `70-post.js` | National Dex, Regis, weather trio, Eon pair |
| `75-frontier.js` | Battle Frontier and the seven Brains |
| `80-dex.js` | Hoenn Dex and the Safari Zone |
| `85-ref.js` | `MACHINES` table, tutors, reference stages |
| `89-starters.js` | the three starters |
| `90-roster-engine.js` | party continuity — families, carry-forward, departures |
| `91-rosters.js` | per-stage rosters, `NOW` band, move plan |
| `93-roster-render.js` | roster board and map rendering |
| `94-lightbox.js` | the pop-out map viewer |
| `95-widgets.js` | TM index, damage-class table, type calculator, planner, backup |
| `96-boot.js` | planner pool, starter select, boot |

## Where the data comes from

Nothing in this guide is written from memory.

* **Boss teams** — Bulbapedia raw wikitext via `action=parse&prop=wikitext`, parsed by
  `tools/parties.py`, which keeps only `{{Party}}` blocks whose `game` field names
  Emerald. Every Hoenn trainer page carries Ruby, Sapphire *and* Emerald parties on one
  page; keying on that field is what stops the wrong version's roster being used.
* **Encounters, learnsets, machine numbering, sprites** — PokeAPI, filtered to the
  `emerald` version group and the `hoenn` pokedex.
* **Item placements** — Bulbapedia `{{Itemlist}}` rows filtered to `E=yes`, so a
  Ruby-only or ORAS-only pickup cannot leak in.
* **Step ordering** — checked against `Walkthrough:Pokémon Emerald/Part 1..22`, which is
  the canonical play order.
* **Area maps** — the `<Place>_E.png` in-game maps, discovered per stage by
  `tools/mapfind.py`. It prefers the `_E` (Emerald) redraw over `_RS` every time: the
  Magma Hideout and the Safari Zone expansions only exist in the Emerald versions. A
  candidate matching none of `_E` / `_E_annotated` / `_RSE` / `_RS` is **rejected**
  rather than used — falling through to "the first match" once put ORAS concept art in
  the guide as the Aqua Hideout map.

### Why the map viewer has its own checker

`verify.py` only ever sees the page at rest, so a dialog that is hidden on load is
invisible to it. `lightbox.py` opens one and re-runs the contrast and overflow checks
with the overlay up, then exercises next/prev, the arrow keys, Escape, the backdrop
click and focus restoration. It also asserts the pop-out is actually bigger than the
thumbnail and that pixel art lands on a whole-number scale, since a fractional scale
is what turns a 16px tile grid to mush.

### The failure `tools/steps.py` exists to catch

A step can be factually correct and still be filed under the wrong place, which sends
the reader there at the wrong point in the walk. That is invisible when you read the
guide top to bottom. `steps.py` checks each step's items against the location data for
the leg it sits under, and knows that **Route 104 is one wiki page but two disconnected
halves** split by Petalburg Woods — the flower shop and TM09 are on the north half, Mr.
Briney's cottage and the beach on the south.

### One trap worth knowing about

PokeAPI reports **current** typings and abilities, not Generation III ones. Ralts is
listed as Psychic/Fairy and Ninetales as having Drought — neither is true in Emerald.
`tools/audit.py` carries an explicit `GEN3_TYPES` table and raises if a species gains
Fairy without an entry in it, rather than silently comparing against the wrong
generation.
