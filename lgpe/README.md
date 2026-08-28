# The Volt Circuit — source

A 100% completion guide to **Pokémon: Let's Go, Pikachu!**, built from these
parts into the single self-contained `lets-go-pikachu-guide.html` at the repo
root. Do not hand-edit the built file; edit a part and rebuild.

## Build

```
python3 build.py          # syntax-checks every JS part, then concatenates
```

`build.py` runs `node --check` over each JavaScript part first and refuses to
write the output if any of them fails to parse.

## Layout

| Path | What it is |
| --- | --- |
| `parts/00-head.html` | title, fonts, the whole stylesheet |
| `parts/05-shell.html` | the page shell — rail, top bar, content mount |
| `parts/10-img.js` | **generated.** Every image as a WebP data URI |
| `parts/20-engine.js` | data containers, persistence, block renderers, the Gen VII type chart |
| `parts/30-chapters.js` | chapter list |
| `parts/4x-stages-*.js` | the walkthrough stages |
| `parts/50-dex.js`, `60-ref.js` | Pokédex and reference chapters |
| `parts/7x-roster*.js` | the party ledger: engine, data, renderer |
| `parts/80-refdata.js` | **generated.** TM index, move table, Master Trainers, planner pool |
| `parts/90-widgets.js` | TM index, Master Trainer index, type calculator, planner, backup |

## Regenerating the generated parts

```
python3 tools/harvest_api.py tms|dex|mons|moves|enc   # PokéAPI, version group
                                                      # lets-go-pikachu-lets-go-eevee
python3 tools/harvest_bb.py                           # Bulbapedia raw wikitext
python3 tools/lgpe_moves.py                           # Let's Go move-stat overrides
python3 tools/build_movedata.py                       # merge the two
python3 tools/tm_locations.py                         # per-TM in-game locations
python3 tools/mtrainers.py                            # Master Trainer table
python3 tools/walk_sequence.py                        # Bulbapedia's own route order
python3 tools/build_refdata.py                        # -> parts/80-refdata.js
python3 tools/mon_images.py 144 80                    # -> research/mon_webp
python3 tools/build_images.py                         # -> parts/10-img.js
```

### Why the move data is merged from two sources

PokéAPI does **not** carry Let's Go's move-power overrides. It reports Mega
Drain at 40 where this game uses 75, Solar Beam at 120 where this game uses
200, Sky Attack at 140 where this game uses 200, and Absorb at 20 where this
game uses 40; it also reports the Generation VIII rewrites of Zippy Zap,
Splishy Splash and Floaty Fall rather than the Let's Go originals.
`tools/lgpe_moves.py` scrapes those overrides out of the Bulbapedia move pages
and `tools/build_movedata.py` merges them over the PokéAPI table.

PokéAPI also does not publish Let's Go spawn *rates* — every encounter row
reports 100 — so all percentages come from Bulbapedia's walkthrough tables.

## Checks

```
node tools/verify.js      # headless render: JS errors, broken images,
                          # horizontal overflow at 1440 and 390, contrast in
                          # light, dark and both un-stamped system defaults,
                          # six in every party ledger, monotonic route steps
node tools/dump.js        # dump the page's own data structures for the audits
python3 audit/audit.py    # content audits (see below)
python3 audit/selftest.py # mutation-test the audits themselves
```

`verify.js` wraps the built file in the same doctype + head + body skeleton the
Artifact host applies. Without the doctype the browser renders in quirks mode,
where `<table>` does not inherit colour, and every measurement is about a
document nobody will ever see.

### What `audit/audit.py` checks

1. every catch card's species, typing and named location against PokéAPI
   encounters and Bulbapedia's catch tables
2. every boss team against the Bulbapedia `{{Pokémon|gen=PE}}` party templates,
   requiring two independent pages to agree
3. every move-learn level in the party ledger against the Let's Go learnsets
4. every TM number cited in the walkthrough against the Let's Go machine list
5. every move power quoted in prose against the merged move table
6. no route step using a Secret Technique or key item before the stage that
   grants it
7. the party ledger, recomputed independently in Python and cross-checked
   against the page's own engine, carrying exactly six at every stage
8. every listed item being collectable from a ticked route step
9. the stage order against Bulbapedia's own walkthrough sequence

`audit/selftest.py` breaks each of those facts deliberately and fails if the
audit does not notice. An audit that cannot fail is not an audit.
