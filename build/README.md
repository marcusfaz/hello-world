# The Hoenn Circuit — build

`emerald-guide.html` is generated. Do not hand-edit it; edit the parts in `src/`
and rebuild.

    python3 build.py            # src/*  ->  ../emerald-guide.html (+ cache/wrapped.html)
    python3 tools/verify.py     # headless render: JS errors, images, overflow, contrast
    python3 tools/audit.py      # content: catch cards, boss teams, move levels, TMs, party, route

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

### One trap worth knowing about

PokeAPI reports **current** typings and abilities, not Generation III ones. Ralts is
listed as Psychic/Fairy and Ninetales as having Drought — neither is true in Emerald.
`tools/audit.py` carries an explicit `GEN3_TYPES` table and raises if a species gains
Fairy without an entry in it, rather than silently comparing against the wrong
generation.
