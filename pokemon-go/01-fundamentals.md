# 1. Fundamentals — What Actually Makes a Pokémon Good at PvE

Everything in this guide flows from the maths on this page. If you only read one
file, read this one, then jump to [Keep or Transfer](02-keep-or-transfer.md).

---

## 1.1 The three hidden stats

Every Pokémon has three base stats, fixed per species:

| Stat | What it does in PvE |
|---|---|
| **Attack** | Multiplies all your damage. The single most important stat for raids. |
| **Defense** | Reduces damage taken. Matters for surviving long enough to keep attacking. |
| **Stamina (HP)** | How long you last before fainting. |

On top of the base stats, each individual Pokémon has **IVs** — a hidden roll of
**0–15 in each of Attack, Defense and HP**. A "hundo" is 15/15/15.

> **IVs are added to base stats, not multiplied.** A +15 Attack IV is worth much
> more to a low-Attack species than to a high-Attack one. This is why IVs matter
> *far* less than people assume — see [1.5](#15-how-much-do-ivs-actually-matter).

---

## 1.2 CP is a trap

CP is a single number that blends Attack, Defense and HP. It is useful for
*comparing two of the same species*, and almost useless for anything else.

- A Blissey has enormous CP and does no damage.
- A Shadow Mewtwo at a lower CP will out-damage it by an order of magnitude.

**Never pick a raid attacker by CP.** Pick by species → moveset → level → IVs, in
that order of importance.

---

## 1.3 CPM: what "level" is worth

Pokémon level (1 → 50, in half-steps) maps to a **CP Multiplier (CPM)** that scales
all three stats at once.

| Level | CPM | Notes |
|---|---|---|
| 20 | 0.5974 | Raid / research catch level |
| 25 | 0.6674 | Weather-boosted raid catch |
| 30 | 0.7317 | Old wild catch cap |
| 40 | 0.7903 | **The efficiency sweet spot** |
| 41 | 0.7953 | Equivalent to a Level 40 **Best Buddy** |
| 50 | 0.8403 | Requires Candy XL |
| 51 | 0.8453 | Equivalent to a Level 50 **Best Buddy** |

**What the jump from 40 → 50 buys you:**

```
0.8403 / 0.7903 = 1.0633
```

About **+6.3% Attack, +6.3% Defense and +6.3% HP**. Because damage and survivability
both go up, effective raid contribution rises roughly **13%** — for **296 Candy XL
and 250,000 Stardust**.

That is an enormous price for 6%. See [Investment](03-investment.md) for when it is
and is not worth paying.

**Best Buddy is +1 level, for free.** Walking a Pokémon to Best Buddy status gives it
a permanent in-battle boost equal to one full level. Always do this before you
consider spending Candy XL.

---

## 1.4 The damage formula

Simplified, the damage one attack deals is:

```
Damage = floor( 0.5 × Power × (Attack / Defense) × Multipliers ) + 1
```

Where `Multipliers` is the product of:

| Multiplier | Value |
|---|---|
| STAB (move type matches your Pokémon's type) | **1.2×** |
| Super effective | **1.6×** |
| Double super effective | **2.56×** |
| Not very effective | **0.625×** |
| Double resisted | **0.390625×** |
| Weather boosted (move's type matches weather) | **1.2×** |
| Mega Evolution in the raid, same type as your move | **1.3×** |
| Mega Evolution in the raid, different type | **1.1×** |
| Friendship (Best Friend) | **1.1×** |

### What this tells you

1. **Type effectiveness (1.6×) dwarfs IVs (~5%).** A perfectly-typed 2-star
   attacker beats a badly-typed hundo, every single time.
2. **Double super effective is 2.56×.** Hunting for the double weakness (e.g. Ice
   into a Dragon/Flying boss) is the biggest single lever you have.
3. **Weather and Mega boosts stack multiplicatively** with everything else. Mega
   Evolving before a raid is free damage for your whole lobby.
4. **Defense is the *defender's* stat.** Your Defense never reduces your own damage —
   it only affects how long you survive.

---

## 1.5 How much do IVs actually matter?

For a typical strong attacker at Level 40, going from **0 Attack IV to 15 Attack IV**
is worth roughly **+5% to +8% damage**. Defense and HP IVs are worth even less in
raids, where you will usually faint and relobby regardless.

**Practical conclusion for a PvE player:**

> Attack IV is the only IV worth caring about, and even then, **13+ is
> indistinguishable from 15 in practice**. Do not delete a good raid attacker because
> it is "only" 91%.

The exception is if you are chasing a hundo for collection reasons — that is a
perfectly good reason, it is just not a *performance* reason.

### IV floors by encounter type

Some sources guarantee a minimum roll, which is why raid catches feel so much better
than wild ones:

| Source | IV floor |
|---|---|
| Wild catch | 0/0/0 |
| Weather-boosted wild, Rocket Grunt/Leader catch | **4/4/4** |
| **Raids, Eggs, Field/Special Research** | **10/10/10** |
| **Lucky Pokémon (from a Lucky Trade)** | **12/12/12** |
| Purified | +2 to each IV (capped at 15) |

This is why a raid catch is a genuinely better roll: its worst possible outcome is a
`10/10/10` (73%), not a `0/0/0`.

---

## 1.6 Movesets beat everything else you can control

You cannot change a Pokémon's species or base stats. You *can* change its moves.

- **Fast move** — generates energy and chips damage. Duration matters: short-duration
  fast moves (0.5s) are better for energy generation, which matters a lot in
  [Max Battles](05-max-battles.md).
- **Charged move** — your big damage. In raids you will only ever use **one** charged
  move, so a second charged move is mostly a **PvP expense** (see
  [Investment §3.4](03-investment.md#34-second-charged-move--usually-skip-it-for-pve)).

A wrong-typed or low-DPS charged move can halve a Pokémon's raid performance. Always
check the moveset before you power anything up.

---

## 1.7 The PvE priority order

When deciding whether a Pokémon is worth anything to you, evaluate in this order.
Stop as soon as you get a "no".

```
1. Species     — is this in the top handful of attackers for its type?
2. Moveset     — does it have (or can it get) the correct high-DPS moveset?
3. Form        — Shadow > Normal > Purified for raw damage
4. Level       — can you afford to get it to 40?
5. Attack IV   — tiebreaker only, and only between copies of the same species
```

Everything in [Keep or Transfer](02-keep-or-transfer.md) is a practical application
of this list.

---

**Next:** [2. Keep or Transfer →](02-keep-or-transfer.md)
