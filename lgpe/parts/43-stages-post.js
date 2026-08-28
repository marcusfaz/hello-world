/* ===================== POST-GAME ===================== */
STAGES.push({
id:"p01", ch:"post", tag:"Stage 20", place:"Kanto · the sky",
title:"The sky opens — riding, the roaming birds, and 145 Master Trainers",
lede:"Becoming Champion changes how you move through Kanto and adds a second, harder game on top of the first one: 153 specialists scattered across the region, each of whom will only fight you with one species.",
band:[{k:"Party level",v:"65 → 75"},{k:"New",v:"Sky riding"},{k:"Targets",v:"153 Master Trainers"}],
body:[
["lgpe","<b>You can now ride Charizard, Aerodactyl or Dragonite through the sky.</b> Sky riding does three things at once: it moves you anywhere instantly, it <b>bypasses every Chop Down and Sea Skim obstacle in the game</b>, and it puts you into a layer of the world that has its own encounter table. The Pokémon you meet up there are Flying types you cannot find on the ground — and, once you have caught all three stationary birds, <b>Articuno, Zapdos and Moltres themselves</b>."],
["catch",[
 {n:"Articuno", t:["Ice","Flying"], where:"In the sky over most outdoor routes, after catching the Seafoam one", why:"<b>The birds respawn in the sky, so nothing is missable.</b> Two conditions: enter the Hall of Fame, and catch all three stationary encounters first. They never flee, so a sky sighting is a guaranteed catch if you have the balls for it."},
 {n:"Zapdos", t:["Electric","Flying"], where:"In the sky, after catching the Power Plant one", why:"Same rules. A second Zapdos is a second set of at-least-three perfect IVs to compare, and a spare for the Master Trainer’s CP check."},
 {n:"Moltres", t:["Fire","Flying"], where:"In the sky, after catching the Victory Road one", why:"Same rules. Chain the ordinary sky spawns to raise the rare rate before you go hunting."},
 {n:"Dragonite", t:["Dragon","Flying"], where:"In the sky over most routes", why:"<b>134 Attack and it is your third sky mount.</b> Dratini and Dragonair are Route 10 water spawns, but a wild Dragonite in the sky skips 55 levels of raising."},
 {n:"Charizard", t:["Fire","Flying"], where:"In the sky over most routes", why:"A wild Charizard means you can field one without spending the Route 24 gift, and it makes a second Charizardite worth buying."},
 {n:"Pidgeot", t:["Normal","Flying"], where:"In the sky", why:"Fully evolved and common up there. Cheaper than raising the Pidgey you have been ignoring since Route 1."}
]],
["h","Master Trainers"],
["p","A Youngster outside your house explains them: 153 red-clothed Trainers with a species icon over their head, spread across every route, city and cave in Kanto. Beating one earns you their title."],
["lgpe","<b>The Master Trainer rules are strict and unusual.</b> You may bring <b>one Pokémon and it must be the same species as theirs</b>, and it has to sit in the first party slot. <b>No items are allowed</b> — not by you, not by them. Their Pokémon run levels 65 to 80 with maxed Awakening Values, and 69 of the 145 battles are at level 75. You may Mega Evolve and use a Shiny; they may not. Win and you can re-battle the next day; lose and you can ask for an immediate rematch. Nobody loses money either way. The eight Master Trainers for the Legendaries, Mew and Ditto do not battle at all — they want to see a specimen with a high enough CP."],
["team","<b>Beat six Master Trainers first, then go to the Indigo Plateau for Red.</b> Six is the exact trigger. Pick six of the level-65 fights — Bulbasaur on Route 4, Charmander in the Celadon Condominiums, Squirtle, Dratini, and the other cheap ones — rather than grinding a level-80 species. Red fights under Master Trainer rules with a <b>full team of six at level 85</b>, so bring your best six and use your Mega."],
["boss",{
name:"Red", role:"Indigo Plateau · Pokémon Trainer", badge:"Battle Master",
team:[
 {m:"Pikachu", l:85, t:["Electric"], note:"Thunderbolt, Brick Break, Iron Tail, Reflect. The Reflect goes up first and halves your physical damage."},
 {m:"Machamp", l:85, t:["Fighting"], note:"Superpower, Fire Blast, Earthquake, Hyper Beam. 130 Attack and four ways to hurt you."},
 {m:"Arcanine", l:85, t:["Fire"], note:"Heat Wave, Crunch, Will-O-Wisp, <b>Roar</b>. Roar forces your Pokémon out and picks the replacement for you."},
 {m:"Lapras", l:85, t:["Water","Ice"], note:"Ice Shard, Waterfall, Body Slam, Megahorn. Entirely physical, which is odd for a Lapras and means Reflect-style answers do not help."},
 {m:"Snorlax", l:85, t:["Normal"], note:"Toxic, Protect, Rest, Body Slam. It will Toxic you and stall. This is the slot that runs the clock."},
 {m:"Venusaur", l:85, t:["Grass","Poison"], note:"<b>Mega Venusaur.</b> Sludge Bomb, Mega Drain, Leech Seed, Amnesia. Amnesia doubles its Special Defense; Leech Seed drains you while it does."}
],
plan:[
 "<b>No items, on either side.</b> Bring six healthy Pokémon and expect to trade knockouts. This is the one battle in the game where a Full Restore is not the answer.",
 "<b>Kill the Snorlax and the Mega Venusaur early.</b> Both of them win by stalling — Toxic and Protect on one, Leech Seed and Amnesia on the other. The longer they live the worse your position gets.",
 "<b>Ground is the through-line:</b> 2× into his Pikachu and Arcanine, and Earthquake is on his own Machamp for a reason. A Sandslash or a Snorlax carrying TM41 does real work.",
 "<b>Psychic and Flying answer the Machamp</b> before Superpower connects. Mega Charizard Y’s Air Slash or a Mr. Mime’s Psychic.",
 "Watch for <b>Roar</b> from the Arcanine — it drags your lead out and replaces it at random, so do not build a position around one Pokémon staying in.",
 "You need <b>six Master Trainer wins</b> before Red appears at all, and you must approach him with a full party of six."
],
reward:"The title <b>Battle Master</b>, usable in link battles. He returns for a rematch every time you re-enter the Hall of Fame."
}],
["do",[
 {at:"Pallet Town", t:"Take the <b>Small Bouquet</b> from your partner and go outside.", sub:"Ronny the Youngster explains Master Trainers. That conversation is what spawns them across Kanto."},
 {t:"Set a <b>Charizard, Aerodactyl or Dragonite</b> as your buddy and take to the sky.", sub:"Sky riding bypasses every Chop Down and Sea Skim obstacle in the game, and it has its own encounter table."},
 {t:"Hunt the sky table for <b>Dragonite, Charizard and Pidgeot</b>.", sub:"All fully evolved, all in the air, and all far cheaper than raising the base forms."},
 {t:"Once all three stationary birds are caught, hunt <b>Articuno, Zapdos and Moltres</b> in the sky.", sub:"Both conditions must be met — Hall of Fame, and all three stationary catches. They never flee."},
 {t:"Beat <b>six Master Trainers</b>.", sub:"Pick the level-65 ones: Bulbasaur on Route 4, Charmander in the Celadon Condominiums, Squirtle, Dratini. Six is the exact number that spawns Red."},
 {at:"Indigo Plateau", t:"Sky Dash to the League entrance and beat <b>Red</b>.", sub:"Level 85 across six, Mega Venusaur last, no items on either side. Approach with a full party of six or he will not fight."},
 {t:"Work the full Master Trainer list from the Reference chapter.", sub:"145 battles plus 8 CP checks. Every title for the first 150 species earns you Grand Master from the woman in the Game Freak office."}
]]
]});

STAGES.push({
id:"p02", ch:"post", tag:"Stage 21", place:"Cerulean Cave",
title:"Mewtwo, Green, and the Mega Stones you were missing",
lede:"The last dungeon in the game, the strongest Pokémon in it, and a trainer who has been looking for it as long as you have. Bring the Master Ball you have been saving since Silph Co.",
band:[{k:"Party level",v:"70+"},{k:"Catch",v:"Mewtwo"},{k:"Unlocks",v:"Mewtwonite X · Y"}],
body:[
["p","Cerulean Cave sits on the north-west edge of Cerulean City, behind water. Sea Skim across, or fly over it. The Coach Trainer who was blocking the entrance has moved aside and can now be fought — he hands over <b>TM60 Megahorn</b>."],
["warn","<b>Throw the Master Ball at Mewtwo.</b> Not at the birds, which never flee and can be worn down with Golden Razz Berries all afternoon; not at a Snorlax; at Mewtwo. It is level 70 with all stats boosted, and while it also never flees, it has the worst catch rate in the game and it will eat a very large number of Ultra Balls. You have been carrying the ball since stage 11 for exactly this."],
["catch",[
 {n:"Mewtwo", t:["Psychic"], where:"Cerulean Cave B1F — the south-west island, via Sea Skim", why:"<b>Level 70, all stats boosted, at least three perfect IVs, and it never flees.</b> 154 Special Attack and 130 Speed. Two Mega forms once Green gives you the stones. It respawns if you defeat it or run, so it is not missable — it is only expensive."},
 {n:"Chansey", t:["Normal"], where:"Cerulean Cave 2F — common here rather than rare", why:"<b>This is the best place in the game to farm Chansey.</b> On 2F it is an ordinary spawn rather than a rare one, and Chansey is the richest experience and Candy payout in Kanto. Chain it."},
 {n:"Ditto", t:["Normal"], where:"Cerulean Cave — all floors", why:"The second of Ditto’s two homes, and much denser than the Pokémon Mansion. If you left Cinnabar without one, fix it here."},
 {n:"Lickitung", t:["Normal"], where:"Cerulean Cave — all floors", why:"<b>Cerulean Cave is the only place Lickitung exists in this game.</b> No trade, no route spawn. If you want the Pokédex it is here or nowhere."},
 {n:"Poliwrath", t:["Water","Fighting"], where:"Cerulean Cave 1F and B1F water", why:"Fully evolved and wild. Poliwhirl needs a Water Stone otherwise, and Politoed does not exist here."},
 {n:"Rhydon", t:["Ground","Rock"], where:"Cerulean Cave — common", why:"Denser than Victory Road, and at a higher level."}
]],
["lgpe","<b>The glowing crystal spots on 2F and B1F respawn fossils.</b> Every 256 steps the game re-rolls the hidden items on a floor — you have to leave and re-enter for it to take effect — and the spot beside Mewtwo’s island refreshes at midnight and is <b>guaranteed to hold a fossil</b>, with roughly 40% each for the Dome and Helix Fossils and 20% for the Old Amber. This is how you get the fossil you refused at Mt. Moon, and it is why that choice was never permanent."],
["boss",{
name:"Mewtwo", role:"Cerulean Cave B1F · Psychic", badge:"Interactive · Lv 70",
team:[
 {m:"Mewtwo", l:70, t:["Psychic"], note:"All stats boosted on top of 154 Special Attack, 130 Speed and 106 HP. It carries <b>Recover</b> and will undo your progress if you go slowly."}
],
plan:[
 "<b>Save first.</b> Five-minute timer, and this is the longest interactive battle in the game.",
 "<b>Bug, Ghost and Dark are the only types that hurt it.</b> X-Scissor from Route 12, Shadow Ball from TM43, Dark Pulse from the Rocket Hideout, or Foul Play from the Pokémon Mansion.",
 "<b>Recover is the problem, not the damage.</b> Paralyse it with TM16 Thunder Wave or your partner’s Splishy Splash, or put it to sleep — a Parasect’s Spore never misses — and it stops out-healing you.",
 "It outspeeds almost everything you own at 130 base Speed. Your partner’s Zippy Zap at +2 priority is one of the very few moves that reliably lands first.",
 "<b>Then throw the Master Ball.</b> Mewtwo never flees, so you could grind Ultra Balls instead — but this is the one target in the game where the guaranteed catch is worth more than the balls."
],
reward:"A level-70 Mewtwo with at least three perfect IVs, and the strongest Pokémon in the game by a wide margin."
}],
["boss",{
name:"Green", role:"Cerulean Cave B1F · Pokémon Trainer", badge:"Mewtwonite X and Y",
team:[
 {m:"Clefable", l:66, t:["Fairy"], note:"Moonblast, Light Screen, Reflect, Tri Attack. Both screens go up — Brick Break removes them."},
 {m:"Gengar", l:66, t:["Ghost","Poison"], note:"Dark Pulse, Shadow Ball, Sludge Bomb, Will-O-Wisp. Normal and Fighting do nothing to it."},
 {m:"Victreebel", l:66, t:["Grass","Poison"], note:"Power Whip, Poison Jab, Sucker Punch, Leech Life. Sucker Punch has priority and it is Dark."},
 {m:"Ninetales", l:66, t:["Fire"], note:"Fire Blast, Dark Pulse, Foul Play, Hyper Beam. Foul Play uses <i>your</i> Attack against you — do not send a physical monster at it."},
 {m:"Kangaskhan", l:66, t:["Normal"], note:"Dizzy Punch, Sucker Punch, Thunder Punch, Brick Break. Four physical moves and no way to hit a Ghost."},
 {m:"Blastoise", l:68, t:["Water"], note:"Hydro Pump, Flash Cannon, Ice Beam, Fake Out. Fake Out flinches you the turn it comes in."}
],
plan:[
 "<b>She turns up on Mewtwo’s island after you have caught it</b>, and only after you leave the cave, meet Trace and come back. If she is not there, you have skipped a step.",
 "<b>Electric and Grass split her team in half</b> — Blastoise takes 2× from both, and your partner’s Zippy Zap or Splishy Splash covers the Ninetales and the Kangaskhan.",
 "<b>Ground answers the Ninetales</b>, and Psychic answers the Victreebel and Gengar. Note that Gengar is immune to Normal and Fighting entirely.",
 "<b>Do not lead a heavy physical attacker into the Ninetales</b> — Foul Play calculates off the target’s Attack, so the harder your Pokémon hits, the harder it gets hit.",
 "Clefable is pure Fairy: Steel and Poison are 2× on it, and it is immune to Dragon."
],
reward:"<b>Mewtwonite X and Mewtwonite Y</b>, plus five Poké Balls on the ground afterwards. Mega Mewtwo Y has the highest Special Attack of anything in the game."
}],
["do",[
 {at:"Cerulean City", t:"Beat <b>Coach Trainer Harjit</b> outside the cave for <b>TM60 Megahorn</b>.", sub:"He used to block the entrance. 120 power physical Bug."},
 {at:"Cerulean Cave 1F", t:"Sea Skim to the north-east island for the <b>PP Max</b>, then work west."},
 {at:"Cerulean Cave 2F", t:"Chain <b>Chansey</b> here — it is an ordinary spawn on this floor, not a rare one.", sub:"The richest experience and Candy in the game, and a long chain also raises your shiny odds while you do it."},
 {t:"Work the glowing crystal spots for <b>fossils</b>.", sub:"Every 256 steps re-rolls them, but you must leave and re-enter the floor. This is where the Mt. Moon fossil you refused comes back."},
 {t:"Catch <b>Lickitung</b>, <b>Ditto</b> and a wild <b>Poliwrath</b>.", sub:"Cerulean Cave is the only home Lickitung has in this game."},
 {at:"Cerulean Cave B1F", t:"<b>Save</b>, then battle <b>Mewtwo</b> on the south-west island.", sub:"Level 70, all stats boosted, and it carries Recover. Paralyse or sleep it first; Bug, Ghost and Dark are the only types that hurt it."},
 {t:"Throw the <b>Master Ball</b>.", sub:"This is what you have been carrying it for since Silph Co."},
 {t:"Leave the cave, speak to <b>Trace</b>, and go back in.", sub:"He gives you three Escape Ropes and tells you about the girl still hunting Mewtwo. Green does not appear until you have had this conversation."},
 {t:"Beat <b>Green</b> on Mewtwo’s island and take <b>Mewtwonite X and Y</b>.", sub:"Clefable, Gengar, Victreebel, Ninetales, Kangaskhan at 66 and Blastoise at 68. Do not send a physical attacker at the Ninetales — Foul Play uses your own Attack."},
 {t:"Sweep the cave’s items on the way out.", sub:"Two PP Max, three Max Revives, a Full Restore, a Max Elixir, Rare Candies, and a daily hidden Full Restore on 1F."}
]]
]});

STAGES.push({
id:"p03", ch:"post", tag:"Stage 22", place:"Indigo Plateau · Celadon · Pokémon Road · Rocket Hideout",
title:"The rematch circuit, the Mega Stone merchant, and the last Rockets",
lede:"Every Gym Leader and every member of the Elite Four comes back at level 56 to 68. The gym rematches are daily and they are the best money and experience in the game — but there are also four one-off fights and a shop you cannot miss.",
band:[{k:"Party level",v:"70+"},{k:"Repeats",v:"daily gym rematches"},{k:"Buy",v:"11 Mega Stones"}],
body:[
["h","The Mega Stone merchant"],
["team","<b>The Poké Maniac by the Indigo Plateau Poké Mart sells the Mega Stones you were never given.</b> Blue handed you the four starter stones and Green handed you the two Mewtwonites; this man sells the rest — <b>Beedrillite, Pidgeotite, Alakazite, Slowbronite, Gengarite, Kangaskhanite, Pinsirite, Gyaradosite and Aerodactylite</b>, plus spares of the ones you have. They are expensive, so run the daily gym rematches for the money. Buy <b>Aerodactylite</b> first: Mega Aerodactyl goes to 135 Attack and 150 Speed, and your Aerodactyl came free from a fossil you nearly forgot in Pewter."],
["lgpe","<b>Mega Evolution in this game has no held-item cost.</b> The stone sits in your Bag and the Mega button appears for any Pokémon of that species. You still get <b>one Mega per battle</b>, and it reverts when the battle ends. Thirteen species can Mega Evolve here — the three Kanto starters, Beedrill, Pidgeot, Alakazam, Slowbro, Gengar, Kangaskhan, Pinsir, Gyarados, Aerodactyl and Mewtwo — and Charizard and Mewtwo have two forms each."],
["ver","<b>Pinsir is a Let’s Go, Eevee exclusive</b>, so on Let’s Go, Pikachu! the Pinsirite is a stone with nothing to put it on unless you trade for one. Your side of that swap is <b>Scyther</b>, from Routes 14 and 15. If you have a trading partner, do both at once."],
["h","The rematch circuit"],
["p","Every Gym Leader can be re-battled once a day, and all eight bring a five-Pokémon team at level 56 to 57 — considerably harder than their gym rosters. Blue holds the Viridian Gym now with a six at level 66 to 68. The Elite Four also come back, at 61 to 65, with Trace at 66 to 67."],
["table",{cols:["Rematch","Level range","What changed","Worth it for"],rows:[
 ["<b>Brock</b> · Pewter","56–57","Onix, Kabutops, Omastar, Aerodactyl, Golem — a full Rock team with Earthquake and Rock Slide on nearly all of it","Money, and a Golem to scout before its Master Trainer"],
 ["<b>Misty</b> · Cerulean","56–57","Golduck, Dewgong, Vaporeon, Starmie, Gyarados. Starmie now carries <b>Dazzling Gleam</b>","Electric practice; the fastest of the eight to clear"],
 ["<b>Lt. Surge</b> · Vermilion","56–57","Electrode, Jolteon, Electabuzz, Magneton, Raichu. Electrode leads with <b>Mirror Coat</b> and can Explode","Bring Ground; it is close to a free win"],
 ["<b>Erika</b> · Celadon","56–57","Tangela, Parasect, Exeggutor, Victreebel, Vileplume. Parasect has <b>Spore</b> — a sleep move that never misses","Carry Awakenings or lose a Pokémon for the round"],
 ["<b>Koga</b> · Fuchsia","56–57","Tentacruel joins; Weezing gains Fire Blast and Thunder","The Toxic stalling is worse than the first time — bring Facade"],
 ["<b>Sabrina</b> · Saffron","56–57","Hypno replaces Slowbro’s slot pattern; Alakazam gains <b>Dazzling Gleam</b>","Dark Pulse and X-Scissor; do not lead a Dark type into the Gleam"],
 ["<b>Blaine</b> · Cinnabar","56–57","Flareon joins; Ninetales gains Solar Beam and Dark Pulse","Water, and Burn Heals"],
 ["<b>Blue</b> · Viridian","66–68","Tauros, Alakazam, Gyarados, Exeggutor, Aerodactyl, <b>Charizard</b> at 68","The hardest of the eight and the best payout"]
]}],
["boss",{
name:"Morimoto", role:"Celadon Condominiums · Coach Trainer", badge:"Game Freak office",
team:[
 {m:"Kangaskhan", l:54, t:["Normal"], note:"Fake Out, Sucker Punch, Dizzy Punch, Outrage. Fake Out flinches on turn one; Sucker Punch has priority."},
 {m:"Flareon", l:54, t:["Fire"], note:"Quick Attack, Double Kick, Flare Blitz, Superpower."},
 {m:"Vaporeon", l:54, t:["Water"], note:"Quick Attack, Double Kick, Hydro Pump, Blizzard."},
 {m:"Jolteon", l:54, t:["Electric"], note:"Quick Attack, Double Kick, Thunder, Shadow Ball."},
 {m:"Machamp", l:54, t:["Fighting"], note:"Superpower, Earthquake, Poison Jab, Rock Slide."},
 {m:"Dragonite", l:54, t:["Dragon","Flying"], note:"Dragon Pulse, Blizzard, Fire Blast, Thunder. All four special, off a 100 Special Attack."}
],
plan:[
 "He is the leader of the Coach Trainers and he is on the third floor of the Celadon Condominiums, in the Game Freak office. He does not gate anything — he is here for the fight.",
 "<b>Three Eeveelutions in a row means Electric, Grass and Ground each answer one.</b> Nothing on his team resists all three.",
 "<b>Ice for the Dragonite</b> — 4× — and it is the only Pokémon here that will threaten a full-health party member.",
 "Every Eeveelution carries <b>Double Kick</b>, which is Fighting. Keep Normal, Rock, Steel, Ice and Dark leads out of the first turn.",
 "The same office is where you set which Master Trainer title you display, and where the woman awards you <b>Grand Master</b> once you hold all 150."
],
reward:"Prize money, and the Game Freak director on the same floor hands over a <b>Diploma</b> and the <b>Shiny Charm</b> once your Pokédex is complete."
}],
["team","<b>The Shiny Charm is the real prize on this floor.</b> Complete the Pokédex — 150 species, with the usual exceptions — and the Game Freak director gives you a Diploma and the Charm, which raises wild shiny odds permanently. Stacked with a Catch Combo of 31 or more and a Lure, it takes the rate from 1 in 4096 to <b>15 in 4096</b>, which is roughly one in 273. That is the difference between shiny hunting being feasible and not."],
["do",[
 {at:"Indigo Plateau", t:"Buy Mega Stones from the <b>Poké Maniac</b> by the Poké Mart.", sub:"Aerodactylite first — Mega Aerodactyl is 135 Attack and 150 Speed on a Pokémon you already own."},
 {t:"Re-battle the <b>Elite Four</b> at levels 61 to 65, and <b>Trace</b> at 66 to 67.", sub:"Repeatable, and the best experience in the game outside Chansey chaining."},
 {at:"Kanto", t:"Run the <b>eight Gym Leader rematches</b>, once each per day.", sub:"All eight bring five Pokémon at 56 to 57. Blue at the Viridian Gym brings six at 66 to 68 and is the hardest."},
 {at:"Celadon City", t:"Beat <b>Morimoto</b> on the third floor of the Condominiums.", sub:"Kangaskhan, Flareon, Vaporeon, Jolteon, Machamp and Dragonite, all at 54. Every Eeveelution carries Double Kick."},
 {t:"Show the <b>Game Freak director</b> a complete Pokédex for the <b>Diploma and the Shiny Charm</b>.", sub:"The Charm raises wild shiny odds permanently and stacks with Catch Combos and Lures."},
 {at:"Pokémon Road", t:"Beat <b>Jessie and James</b> on the east side of Route 17.", sub:"Arbok and Weezing at 52, one each, in a double battle. They hand over the Blast-Off clothing set."},
 {at:"Rocket Hideout", t:"Go back down to Giovanni’s office and beat <b>Archer</b>.", sub:"Electrode, Golbat, Magmar and Weezing at 54. The Electrode will Explode. He leaves Kanto afterwards and does not come back."}
]]
]});
