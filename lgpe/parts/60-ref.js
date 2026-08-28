/* ===================== REFERENCE ===================== */
STAGES.push(
{id:"ref-rules", ch:"ref", tag:"Reference", place:"How Let’s Go differs from every other Kanto game", wide:true,
 title:"The rules that decide every recommendation in this guide",
 lede:"If you learned Kanto on Red, Yellow, FireRed or LeafGreen, most of what you know about how it plays is wrong here. These are the differences that actually change your decisions.",
 body:[
  ["h","1. Damage class belongs to the move, not the type"],
  ["lgpe","In Generation III a <b>Fire</b> move was special because Fire was a special type, full stop. That rule was abolished in Generation IV and Let’s Go is Generation VII, so <b>every move carries its own damage class</b>. Flare Blitz is a physical Fire move; Flamethrower is a special one. Vine Whip and Razor Leaf are <b>physical</b> Grass moves, which is why Venusaur — 82 Attack, 100 Special Attack — wants Mega Drain, Sludge Bomb and Solar Beam from TMs rather than the Grass moves it learns by levelling. Check the class of a move against the stat of the Pokémon holding it, every time."],
  ["mount","moveclass"],
  ["h","2. Fairy exists, and Kanto is full of it"],
  ["lgpe","Fairy was introduced in Generation VI and it is here. <b>Clefairy and Clefable are pure Fairy</b> — not Normal. <b>Jigglypuff, Wigglytuff and Mr. Mime are part Fairy.</b> Fairy is <b>2× into Dragon, Dark and Fighting</b>, is <b>completely immune to Dragon</b>, and is walled by Steel, Fire and Poison. A Clefable takes Lance’s Dragonite’s Outrage for zero damage — something no Pokémon in the original Kanto could do. In the other direction, <b>Steel no longer resists Ghost or Dark</b>: that resistance was removed in Generation VI, so a Magneton does not wall Agatha’s Shadow Balls."],
  ["h","3. No Abilities, no held items, no breeding, no weather, no day and night"],
  ["lgpe","Let’s Go strips out almost every system layered onto Kanto since Generation II. <b>There are no Abilities</b> — Lightning Rod, Levitate and Intimidate simply do not exist, so type charts read literally. <b>There are no held items</b>, so Mega Stones live in the Bag and Leftovers, berries in battle and Choice items are all absent. <b>There is no breeding, no Day Care and no Eggs.</b> There is <b>no weather and no day/night cycle</b>, so nothing in the game is time-gated except a handful of daily item respawns."],
  ["h","4. EVs are gone; Awakening Values replace them"],
  ["mount","avs"],
  ["h","5. Wild Pokémon are caught, not fought"],
  ["lgpe","Wild Pokémon stand in the overworld and are caught with a ball throw. <b>There is no wild-battle experience</b> — catching is how you level, and a Catch Combo multiplies that by up to ×3. The exceptions are the <b>interactive Pokémon</b>: both Snorlax, the item-shaped Electrode in the Power Plant, and every legendary. Those must be <b>battled and knocked out first</b>, on a five-minute timer that does not pause for the HOME button, with boosted stats — Snorlax gets an Attack or Defense lift, legendaries get all six — and whatever you catch is <b>guaranteed at least three perfect IVs</b>."],
  ["h","6. Secret Techniques replace HMs"],
  ["mount","secret"],
  ["h","7. The Pokémon Box is in your Bag"],
  ["lgpe","There is no PC and no Bill’s system. The Box opens from the Bag anywhere in the world, including mid-route, and moving Pokémon in and out is free. <b>Keeping a party slot open is pointless</b>: with six in the party every catch, gift and revived fossil goes to the Box automatically. Any guide that tells you to deposit something before a gift is describing a different game."],
  ["h","8. Badges buy obedience and nothing else"],
  ["lgpe","No stat boosts — that was Generation I. Obedience is set by <b>how many</b> badges you hold, not which: 1 → level 20, 2 → 30, 3 → 40, 4 → 50, 5 → 60, 6 → 70, 7 → 80, 8 → unlimited. It applies only to Pokémon you did not catch yourself. Several gyms have their own entry requirements instead, listed in the table below."],
  ["table",{cols:["Gym","Leader","What the door check is"],rows:[
   ["Pewter","Brock","Show a <b>Grass or Water</b> Pokémon — first-time challengers only"],
   ["Cerulean","Misty","Show a Pokémon of <b>level 15</b> or higher"],
   ["Vermilion","Lt. Surge","None — but the gym is behind a tree needing <b>Chop Down</b>, and the leader is behind a two-switch bin puzzle"],
   ["Celadon","Erika","Show a “cute” Pokémon — your <b>partner Pikachu</b> qualifies"],
   ["Saffron","Sabrina","Show a Pokémon of <b>level 45</b> or higher"],
   ["Fuchsia","Koga","Have caught <b>50 different species</b>"],
   ["Cinnabar","Blaine","None — but you need the <b>Secret Key</b>, and he asks five quiz questions"],
   ["Viridian","Giovanni","None beyond the other seven badges"]
  ]}],
  ["h","9. What is gone that you might go looking for"],
  ["table",{cols:["Missing","Replaced by","Consequence"],rows:[
   ["The <b>Bicycle</b> and Cycling Road","Nothing; the road is now <b>Pokémon Road</b>","Nothing is gated behind a bike. The Cerulean bike shop just gives you five Heart Scales."],
   ["The <b>Safari Zone</b>","The <b>Playful Park</b> and the <b>GO Park</b> complex","No Safari Balls, no step counter. Chansey, Kangaskhan, Scyther and Tauros live on ordinary routes instead."],
   ["<b>Game Corner coins</b>","Nothing — the machines are scenery","No coin-prize TMs and no coin-prize Pokémon. The building hides Candy and PP Ups instead, and <b>Bottle Caps</b> turn up there."],
   ["<b>Vitamins</b> (Protein, Iron…)","<b>Candy</b>","Six flavours of Candy plus species Candy, each raising one Awakening Value."],
   ["<b>The Move Deleter</b>","Nothing — but <b>Madame Memorial</b> at the Indigo Plateau is the Move Reminder","One Heart Scale per move. Secret Techniques never occupy a slot, so there is nothing to delete."],
   ["<b>Held-item mechanics</b>","Mega Stones live in the Bag","No Leftovers, no Focus Sash, no in-battle berries."]
  ]}]
 ]},

{id:"ref-tms", ch:"ref", tag:"Reference", place:"60 TMs · 5 Secret Techniques", wide:true,
 title:"TM index",
 lede:"Let’s Go reduced the machine list to sixty and renumbered all of it. None of the numbers match FireRed, LeafGreen or Sun and Moon — TM01 is Headbutt here, not Focus Punch. Tick a machine when you have it; the box remembers.",
 body:[
  ["p","Every machine is reusable, as they have been since Generation V. The class column is the move’s own damage class, which in this generation has nothing to do with its type."],
  ["mount","tmindex"],
  ["tip","<b>The Celadon Department Store 4F sells fourteen of them</b> — Light Screen, Protect, Reflect, Dragon Tail, U-turn, Iron Tail, Waterfall, Tri Attack, Bulk Up, Shadow Ball, Hyper Beam and more. If a TM is not on a route, in a building or a gym prize, that counter is where it is. Run the daily gym rematches for the money."]
 ]},

{id:"ref-secret", ch:"ref", tag:"Reference", place:"Secret Techniques · partner moves", wide:true,
 title:"Your partner Pikachu, end to end",
 lede:"It cannot evolve, it cannot be boxed, and it is in your party for the whole game. It is also the best Electric type you will own and the only Pokémon that carries the field moves.",
 body:[
  ["h","Base stats"],
  ["html","<div class=\"statstrip\">" +
   "<div><span class=\"k\">HP</span><div class=\"v\">45</div><div class=\"d\">+10 over wild</div></div>" +
   "<div><span class=\"k\">Attack</span><div class=\"v\">80</div><div class=\"d\">+25</div></div>" +
   "<div><span class=\"k\">Defense</span><div class=\"v\">50</div><div class=\"d\">+10</div></div>" +
   "<div><span class=\"k\">Sp. Atk</span><div class=\"v\">75</div><div class=\"d\">+25</div></div>" +
   "<div><span class=\"k\">Sp. Def</span><div class=\"v\">60</div><div class=\"d\">+10</div></div>" +
   "<div><span class=\"k\">Speed</span><div class=\"v\">120</div><div class=\"d\">+30</div></div></div>"],
  ["p","Attack sits above Special Attack, which is the whole reason its best move is a physical one."],
  ["h","Level-up moves"],
  ["table",{cols:["Level","Move","Type · class","What to do with it"],rows:[
   ["1","Thunder Shock","Electric · special","Your only attack until Route 22. Replaced by Zippy Zap in Cerulean."],
   ["1","Growl","Normal · status","Drop it the moment anything else arrives."],
   ["3","Tail Whip","Normal · status","Same. Two stat-drop moves is one too many."],
   ["6","Quick Attack","Normal · physical","40 power at +1 priority. Fine filler; Zippy Zap replaces it properly."],
   ["<b>9</b>","<b>Double Kick</b>","Fighting · physical","<b>Have this before Brock.</b> Fighting is 2× on Rock, it hits twice, and it is the only thing your partner can do to a Ground type in the first gym."],
   ["12","Double Team","Normal · status","Skip it. Evasion is unreliable and the slot is worth more."],
   ["15","Thunder Wave","Electric · status","Paralysis for legendary catching. Worth a slot until Splishy Splash arrives."],
   ["18","Light Screen","Psychic · status","Skip it in a solo run."],
   ["21","Thunderbolt","Electric · special","90 power off 75 Special Attack. Take it, then decide between it and Zippy Zap — see below."],
   ["24","Slam","Normal · physical","80 power at 75% accuracy. Decline it."],
   ["27","Agility","Psychic · status","At 120 base Speed you do not need more."],
   ["30","Thunder","Electric · special","110 power at 70% accuracy. Decline; Thunderbolt is the reliable one."]
  ]}],
  ["h","The three tutor moves"],
  ["team","<b>All three are exclusive to the partner Pikachu and all three come from the same wandering Tamer</b>, who sits in the Pokémon Centers of Cerulean, Celadon and Fuchsia in that order. He teaches them free and repeatedly. Take each one the moment you reach that town."],
  ["table",{cols:["Move","Where","Type · class","Power · accuracy","Why it earns a slot"],rows:[
   ["<b>Zippy Zap</b>","Cerulean Pokémon Center","Electric · <b>physical</b>","50 · 100","<b>Always a critical hit, at +2 priority.</b> The guaranteed crit ignores the target’s Defense boosts and the priority beats anything on the field. Off an 80 Attack it out-damages Thunderbolt against most things and it never loses a speed tie."],
   ["<b>Floaty Fall</b>","Celadon Pokémon Center","Flying · <b>physical</b>","90 · 95","30% flinch. Your answer to Grass, Fighting and Bug — which is Erika, Bruno and half of Koga."],
   ["<b>Splishy Splash</b>","Fuchsia Pokémon Center","Water · <b>special</b>","90 · 100","30% paralysis. It covers <b>Ground</b> and Rock, which are the only types that threaten an Electric Pokémon, and the paralysis makes catching easier."]
  ]}],
  ["team","<b>The set: Zippy Zap, Floaty Fall, Splishy Splash and Brick Break.</b> Zippy Zap is your Electric STAB and it is better than Thunderbolt for a Pokémon this fast; Floaty Fall and Splishy Splash cover the two halves of the type chart Electric cannot reach, and they run off different attacking stats so no single wall stops all three. <b>TM13 Brick Break</b> from Route 10 is the fourth: 75 power Fighting, and it <b>destroys Reflect and Light Screen on contact</b> — which is Sabrina’s entire gym, Green’s Clefable and Trace’s Slowbro."],
  ["h","Pika Papow — the fifth move"],
  ["lgpe","<b>Pika Papow is a partner power, not a move slot.</b> Once your partner’s friendship is high enough an icon appears in battle; trigger it and it uses Pika Papow, which <b>never misses</b> and whose power is <b>friendship ÷ 2.5</b>, topping out at 102 at maximum friendship. Trigger it while your partner is <i>not</i> the active Pokémon and it boosts the stats of whoever is instead. Feed Candy, play with it, and let it walk beside you — high friendship also gives every Pokémon in the party <b>up to a 10% boost to all stats</b>."],
  ["h","Secret Techniques"],
  ["mount","secret"],
  ["lgpe","<b>None of the five occupies a move slot</b> and none of them is used in battle — they are field actions on the “Play with Pikachu” menu. That is a straight upgrade over HMs, and it means your partner carries four real attacks all game. After the Hall of Fame, <b>riding Charizard, Aerodactyl or Dragonite through the sky bypasses every Chop Down and Sea Skim obstacle</b>, so the techniques become optional shortcuts rather than requirements."]
 ]},

{id:"ref-types", ch:"ref", tag:"Reference", place:"Generation VII chart · with Fairy", wide:true,
 title:"Type calculator",
 lede:"The modern eighteen-type chart, which is the one this game uses. Fairy is in it; Steel does not resist Ghost or Dark.",
 body:[
  ["mount","types"],
  ["tip","Two changes catch returning Kanto players out most often. <b>Steel lost its Ghost and Dark resistances</b> in Generation VI, so Steel types no longer wall Gengar or a Crunch. And <b>Ghost is 2× into Psychic while Dark is immune to Psychic</b> — which is why Alakazam’s Psychic does nothing to Agatha’s Alolan-form opponents and everything to Koga’s Venomoth."]
 ]},

{id:"ref-masters", ch:"ref", tag:"Reference", place:"153 Master Trainers", wide:true,
 title:"Master Trainer index",
 lede:"145 battles and 8 CP checks, one per species. One Pokémon each, same species as theirs, no items on either side. Filter by species, level or location, and tick the ones you have beaten.",
 body:[
  ["mount","masters"],
  ["p","The eight that do not battle want to be <i>shown</i> a specimen with enough CP instead: Ditto and Meltan at 4,000+, the three birds at 7,500+, Mew at 8,000+, Melmetal at 8,000+ and Mewtwo at 9,000+."],
  ["tip","Beating <b>six</b> of them spawns <b>Red</b> outside the Pokémon League building at the Indigo Plateau. Collecting every title for the first 150 species — Mew, Meltan, Melmetal and Battle Master are not required — earns you <b>Grand Master</b> from the woman in the Game Freak office in Celadon."]
 ]},

{id:"ref-planner", ch:"ref", tag:"Reference", place:"Coverage · defensive exposure", wide:true,
 title:"Team planner",
 lede:"Pick up to six from what Let’s Go, Pikachu! actually gives you and the panel below shows what hits your team hard and what your team cannot hit back.",
 body:[
  ["mount","planner"]
 ]},

{id:"ref-sources", ch:"ref", tag:"Reference", place:"Sources · progress backup", wide:true,
 title:"Where this came from, and how to keep your ticks",
 body:[
  ["h","Sources"],
  ["html","<p class=\"srcs\">Encounter tables, learnsets, TM-to-move mapping, base stats and typings come from <b>PokéAPI</b>, filtered to version group <code>lets-go-pikachu-lets-go-eevee</code> and version <code>lets-go-pikachu</code>. " +
   "Spawn rates, trainer parties, item placements, walkthrough ordering, Master Trainer levels and every game-mechanic description come from <b>Bulbapedia</b> raw wikitext via the MediaWiki API. " +
   "Every Gym Leader, Elite Four member and rival team was cross-checked against at least two Bulbapedia pages — the trainer’s own article and the gym or Indigo Plateau article — and the two agree throughout.</p>"],
  ["warn","<b>Where PokéAPI and Bulbapedia disagree, this guide follows Bulbapedia.</b> PokéAPI does not carry Let’s Go’s move-power overrides: it reports Mega Drain at 40 when this game uses <b>75</b>, Solar Beam at 120 when this game uses <b>200</b>, Sky Attack at 140 when this game uses <b>200</b>, and Absorb at 20 when this game uses <b>40</b>. It also reports the Generation VIII rewrites of Zippy Zap, Splishy Splash and Floaty Fall rather than the Let’s Go originals. Those eight moves are corrected by hand from the Bulbapedia move pages; every other number in the TM index is PokéAPI’s."],
  ["p","PokéAPI also does not publish Let’s Go spawn <i>rates</i> — its encounter rows all report 100 — so every percentage in this guide comes from Bulbapedia’s walkthrough tables, and the two sources were reconciled against each other to catch anything either had missed."],
  ["h","Backup"],
  ["mount","backup"],
  ["footnote","This guide is written for <b>Let’s Go, Pikachu!</b> specifically. Where the two versions differ — exclusive Pokémon, the Vermilion gift, the Celadon and Cinnabar trade counters, and Trace’s final team — it describes your side and names theirs."]
 ]}
);
