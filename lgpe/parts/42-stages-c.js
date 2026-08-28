/* ===================== KANTO 12–15 ===================== */
STAGES.push({
id:"k12", ch:"kanto", tag:"Stage 12", place:"Route 16 · Pokémon Road · Route 18 · Fuchsia City",
title:"Soul Badge — the first Snorlax, Pokémon Road, and Sea Skim",
lede:"South-west out of Celadon along what used to be Cycling Road, past a Snorlax you have to knock out before you can catch it, into the city that holds the Safari Zone, GO Park and the gym that counts your Pokédex at the door.",
band:[{k:"Party level",v:"45 → 48"},{k:"Badge",v:"Soul"},{k:"Unlocks",v:"Sea Skim"}],
body:[
["lgpe","<b>There is no Bicycle in this game and Cycling Road is now Pokémon Road.</b> You walk it, or you ride the Persian you earned in Vermilion. Nothing is gated behind a bike, and there is no bike to buy — the Cerulean bike shop exists only to give you five Heart Scales."],
["h","The Snorlax on Route 16"],
["warn","<b>Snorlax is an interactive Pokémon: you must battle it and knock it out before you can throw a ball.</b> That is true of both Snorlax, of the disguised Electrode in the Power Plant, and of every legendary in the game. The rules of an interactive encounter are: a <b>five-minute timer</b> that does not pause for the HOME button or sleep mode, <b>boosted stats</b> — Snorlax gets an Attack or Defense boost, legendaries get a lift on everything — and <b>at least three perfect IVs guaranteed</b> on whatever you catch. Save before you play the flute."],
["team","<b>Take the Route 16 Snorlax into your party and drop Primeape for it.</b> 160 HP, 110 Attack and 110 Special Defense on a body that has no weakness except Fighting. It arrives around level 34 with Headbutt and Rest, learns <b>Body Slam at 52</b>, <b>Crunch at 58</b> and <b>Superpower at 65</b>, and it is the Pokémon that survives the Elite Four’s worst turns. Feed it a Golden Razz Berry before you throw — a five-minute fight you have to redo is a five-minute fight wasted."],
["catch",[
 {n:"Snorlax", t:["Normal"], where:"Route 16 — wake with the Poké Flute, then battle it", why:"<b>The best non-legendary body in the game.</b> Interactive encounter: defeat it inside five minutes, then throw. Guaranteed three perfect IVs. There is a second one on Route 12 — catch both, because a spare Snorlax is a level-75 Master Trainer fight later."},
 {n:"Eevee", t:["Normal"], where:"Route 17 — 5%", why:"<b>The only wild Eevee in Let’s Go, Pikachu!</b> — and it is a plain Eevee, not a partner Eevee. You need it for Vaporeon, Jolteon and Flareon, which are three separate Pokédex entries and three separate Master Trainers. Catch four."},
 {n:"Ponyta", t:["Fire"], where:"Route 17 — 20%", why:"Rapidash at 40. Genuinely fast — 105 base Speed — and it is on Blaine’s and Trace’s teams."},
 {n:"Doduo", t:["Normal","Flying"], where:"Routes 16, 17 and 18 — 20–25%", why:"Dodrio at 31, and Dodrio is also wild here at 5–10%. Two dex entries for the price of a walk."},
 {n:"Alolan Marowak", t:["Fire","Ghost"], where:"Trade a Marowak in the Fuchsia Pokémon Center — repeatable", why:"<b>Fire/Ghost, 110 Defense, and it exists nowhere else.</b> Raise a Cubone from Rock Tunnel or the Tower to 28 and trade it. Immune to Normal and Fighting, and it burns things."}
]],
["warn","<b>The Fuchsia Gym will not let you in until you have caught 50 different species.</b> Not 50 Pokémon — 50 <i>species</i>. If you have been throwing at everything as instructed you passed this two stages ago; if you have been running past spawns, you are about to find out. The Safari Zone next door and the four routes you just walked are the fastest way to make it up."],
["h","The Safari Zone and GO Park"],
["lgpe","<b>The Safari Zone is not a catching minigame any more.</b> The old preserve is split in two: the <b>Playful Park</b>, a walk-through zoo, and the <b>GO Park complex</b>, twenty pens holding fifty Pokémon each for transfers out of Pokémon GO. There are no Safari Balls, no step limit and no fleeing rules — and the man by the Lapras exhibit in the Playful Park teaches your partner <b>Sea Skim</b>, which is this game’s Surf."],
["team","<b>Take Splishy Splash from the Fuchsia Move Tutor.</b> Water, special, 90 power, 30% paralysis — and it is the last of your partner’s three exclusive moves. It matters more than it looks: Pikachu’s only weakness is Ground, and Splishy Splash is 2× back into Ground and Rock. With Zippy Zap, Floaty Fall and Splishy Splash your partner covers Water, Flying and Electric off two different attack stats, and nothing in Kanto walls all three."],
["loot",[
 {k:"TM58", n:"Drill Run", where:"Pokémon Road — reward for beating Coach Trainer Grantley", why:"80 power physical Ground with a raised critical-hit rate. The best Ground move you can hand a physical attacker before Giovanni."},
 {k:"TM14", n:"Fly", where:"Route 16 — from the reclusive girl in the north house, behind a tree", why:"<b>This is the battle move, not the Secret Technique.</b> Sky Dash already handles travel. Fly is 90 power physical Flying with a turn spent in the air — situational, and worth taking for the Pokédex completionist reasons alone."},
 {k:"Item", n:"Nugget", where:"Pokémon Road — amid the yellow flowers near the southern benches"},
 {k:"Item", n:"Rare Candy", where:"Pokémon Road — grass south of the water"},
 {k:"Item", n:"Silver Razz Berry ×3", where:"Pokémon Road — small yellow bush at the north-east corner of the southern field"},
 {k:"Key", n:"Sea Skim", where:"Playful Park — the man by the Lapras exhibit, west of the Poké Mart", why:"Secret Technique. Surf, at no move-slot cost. If your buddy is a Gyarados or a Lapras you ride it instead of the partner."},
 {k:"TM27", n:"Toxic", where:"From Koga", why:"Badly poisons — damage that escalates every turn. It is how you break a wall you cannot out-damage, and it is what Koga just did to you."},
 {k:"TM26", n:"Poison Jab", where:"Celadon City — from the man north of the pond", why:"Needs Sea Skim, which you now have. Sky Dash back for it before you leave the area."}
]],
["boss",{
name:"Koga", role:"Fuchsia City Gym · Poison", badge:"Soul Badge",
team:[
 {m:"Weezing", l:43, t:["Poison"], note:"Toxic, Protect, Sludge Bomb, <b>Explosion</b>. Explosion is 250 power and it will take your lead with it."},
 {m:"Muk", l:43, t:["Poison"], note:"Toxic, Protect, Sludge Bomb, <b>Moonblast</b>. The Fairy move is there to punish a Fighting or Dark answer."},
 {m:"Golbat", l:43, t:["Poison","Flying"], note:"Toxic, Protect, Fly, Leech Life. Poison/Flying is <b>2× weak to Electric, Ice, Psychic and Rock</b>."},
 {m:"Venomoth", l:44, t:["Bug","Poison"], note:"Sludge Bomb, Protect, Psychic, Bug Buzz. Bug/Poison is <b>4× weak to Psychic</b> and 2× to Flying, Fire and Rock."}
],
plan:[
 "<b>Ground is the type that beats this gym.</b> Poison takes 2× from Ground, and Sandslash’s Earthquake or a Dugtrio removes three of the four. Golbat is the exception — it is part Flying, so Ground does nothing to it.",
 "<b>Bring your partner for the Golbat</b>. Electric is 2× into Poison/Flying, and Zippy Zap moving first with a guaranteed crit ends it before Fly gets off the ground.",
 "<b>Venomoth is 4× weak to Psychic.</b> One Psychic from Kadabra, Mr. Mime or anything holding TM40 removes it outright.",
 "The gym’s whole plan is <b>Toxic, then Protect</b> — badly poison you, then stall while the damage escalates. Answer it two ways: carry <b>Antidotes</b>, and if a Pokémon does get poisoned, <b>TM12 Facade doubles to 140 power</b> while the status is on it. Coach Trainer Alpesh on Route 7 gave you that TM for exactly this fight.",
 "Do not stand in front of the Weezing at low HP. <b>Explosion</b> is 250 base power and Koga will use it."
],
reward:"TM27 Toxic, the Soul Badge, and obedience up to level 60."
}],
["do",[
 {at:"Route 16", t:"Play the <b>Poké Flute</b> at the sleeping <b>Snorlax</b>, then beat it and catch it.", sub:"Interactive encounter: five-minute timer, boosted Attack or Defense, and at least three perfect IVs on the catch. Save first and feed it a Golden Razz Berry."},
 {t:"Chop the tree to the north and take <b>TM14 Fly</b> from the girl in the house."},
 {at:"Pokémon Road", t:"Catch <b>four Eevee</b> on Route 17 — 5%.", sub:"The only wild Eevee in Let’s Go, Pikachu!. You need one each for Vaporeon, Jolteon and Flareon, plus one to keep."},
 {t:"Beat <b>Coach Trainer Grantley</b> for <b>TM58 Drill Run</b>.", sub:"80 power physical Ground with a boosted crit rate. Your best Ground move until Giovanni hands over Earthquake."},
 {t:"Sweep the route: Nugget, Rare Candy, Super Lure, Great Balls, Elixir and the <b>Silver Razz Berry ×3</b> in the small yellow bush at the north-east corner of the southern field.", sub:"Pokémon Road is unusually item-dense, and there is no reason to come back."},
 {at:"Fuchsia City", t:"Learn <b>Splishy Splash</b> from the Move Tutor in the Pokémon Center.", sub:"Water, special, 90 power, 30% paralysis. It covers the Ground types that are your partner’s only weakness."},
 {t:"Trade a Marowak in the Pokémon Center for an <b>Alolan Marowak</b>.", sub:"Fire/Ghost — immune to Normal and Fighting, 110 Defense. Repeatable."},
 {at:"Playful Park", t:"Take <b>Sea Skim</b> from the man by the Lapras exhibit.", sub:"West of the Poké Mart. This is Surf, and it costs no move slot."},
 {t:"Look in on the <b>GO Park complex</b>.", sub:"Twenty pens, fifty Pokémon each, for transfers out of Pokémon GO. Nothing to do here yet unless you play GO — but 25 of one species unlocks a Candy minigame."},
 {t:"Speak to the <b>Safari Zone warden</b> in the south-east house.", sub:"He has lost his Gold Teeth. You find them on Route 19 next stage, and he pays in Strong Push."},
 {at:"Fuchsia Gym", t:"Show 50 species caught, then beat <b>Koga</b>.", sub:"Weezing 43, Muk 43, Golbat 43, Venomoth 44. Ground for three of them, Electric for the Golbat, Psychic for the Venomoth. Carry Antidotes."},
 {at:"Celadon City", t:"Sky Dash back and take <b>TM26 Poison Jab</b> from the man north of the pond.", sub:"Needs Sea Skim. Also collect the Big Pearl behind the bench in Vermilion and the PP Max on Route 4 while you have it."},
 {at:"Route 12", t:"Sky Dash to Lavender and go south."}
]]
]});

STAGES.push({
id:"k13", ch:"kanto", tag:"Stage 13", place:"Route 12 · Route 13 · Route 14 · Route 15",
title:"The second Snorlax, the Gold Teeth, and Strong Push",
lede:"A long loop down the east coast and back west into Fuchsia. It exists for a second Snorlax, the last two Let’s Go, Pikachu! exclusives, and the technique that opens the Seafoam Islands.",
band:[{k:"Party level",v:"48 → 50"},{k:"Badges",v:"6"},{k:"Unlocks",v:"Strong Push"}],
body:[
["catch",[
 {n:"Snorlax", t:["Normal"], where:"Route 12 — wake with the Poké Flute, then battle it", why:"<b>The second one, and it is a separate Pokémon.</b> Catch it even though one is already in your party: its Master Trainer fight is a level-75 Snorlax, and having a spare with different IVs to compare on the Judge screen is exactly what the Judge screen is for."},
 {n:"Scyther", t:["Bug","Flying"], lg:true, where:"Routes 14 and 15 — 1%, Let’s Go, Pikachu! only", why:"<b>Version exclusive and a 1% spawn — this is the hardest catch left before the League.</b> Chain Oddish or Venonat here to force it. Scyther has 110 Attack and 105 Speed; Scizor does not exist in this game, so this is where the line stops."},
 {n:"Farfetch'd", t:["Normal","Flying"], where:"Routes 12 and 13 — 10%", why:"There is no in-game trade for it in this game — Route 12 is simply where it lives. Take one; it is a Pokédex entry that is easy to forget exists."},
 {n:"Tauros", t:["Normal"], where:"Routes 14 and 15 — 5%", why:"100 Attack, 110 Speed, and it is on Blue’s Champion-era team. One of the better Normal types in the game."},
 {n:"Kingler", t:["Water"], where:"Routes 12 and 13 — 5%", why:"130 Attack. Krabby is 15% here if you would rather raise one; the fully evolved spawn saves you 27 levels."},
 {n:"Venomoth", t:["Bug","Poison"], where:"Routes 14 and 15 — 9%", why:"A fully evolved spawn, which is cheaper than raising the Venonat you caught on Route 24."},
 {n:"Horsea", t:["Water"], where:"Routes 12 and 13 with Sea Skim — 30%", why:"Seadra at 32. Kingdra needs a trade with an item that does not exist here, so Seadra is the end of the line — and it is on Lance’s team."}
]],
["h","The Gold Teeth"],
["p","On your first visit to the beach south of Fuchsia, Jessie and James are digging for treasure, turn up a set of false teeth, are disgusted, and throw them at you. Take them back to the Safari Zone warden."],
["loot",[
 {k:"Key", n:"Gold Teeth", where:"Route 19 — from Jessie and James on the Fuchsia beach", why:"The warden trades them for Strong Push, which is the only way into the Seafoam Islands."},
 {k:"Key", n:"Strong Push", where:"Fuchsia City — the warden’s house, after returning the Gold Teeth", why:"Secret Technique. Moves the heavy boulders in the Seafoam Islands and Victory Road."},
 {k:"TM32", n:"Dazzling Gleam", where:"Route 12 — from Mr. Dazzling, the former Move Deleter, in the house south of the Route 11 junction", why:"<b>80 power special Fairy.</b> Fairy did not exist the last time you played Kanto and there is exactly one TM for it — this one. Remind the old man his name is Mr. Dazzling and he hands it over."},
 {k:"TM50", n:"Roost", where:"Route 12 — from the girl upstairs in the Lavender gate", why:"Heals half the user's maximum HP and drops its Flying typing for the turn. The only reliable recovery move you can hand out by TM."},
 {k:"TM24", n:"X-Scissor", where:"Route 12 — the island south-east of the Lavender gate, via Sea Skim", why:"80 power physical Bug. 2× into Psychic and Dark, which is exactly what Agatha and Sabrina are made of."},
 {k:"TM59", n:"Dream Eater", where:"Route 12 — reward for beating Coach Trainer Priya"},
 {k:"TM47", n:"Surf", where:"Route 15 — north-west area, via Sea Skim", why:"90 power special Water. Sea Skim handles travel, so this is purely a battle move — and it is the best one Lapras and Blastoise can hold."},
 {k:"TM31", n:"Fire Punch", where:"Route 15 — reward for beating Coach Trainer Midge"},
 {k:"Item", n:"Water Stone", where:"Route 12 — bushes south-west of Mr. Dazzling's house, via Sea Skim", why:"Vaporeon, Starmie, Poliwrath or Cloyster. Take it; there is a second one on Route 21."},
 {k:"Item", n:"Nugget", where:"Route 14 — on the ledge south of the tall grass"},
 {k:"Item", n:"Golden Razz Berry", where:"Route 14 — hidden at the north end of the grass, refreshes daily", why:"Golden Razz cannot be bought. Every daily spot you know about is one more legendary throw that lands."}
]],
["lgpe","<b>Fairy is the type that most changes how Kanto plays.</b> Clefairy and Clefable are pure Fairy; Jigglypuff, Wigglytuff and Mr. Mime are part Fairy. Fairy is <b>2× into Dragon, Dark and Fighting</b> and it is <b>immune to Dragon entirely</b>, which is the reason a Clefable answers Lance’s Dragonite in a way nothing in the old games could. It is walled by Steel, Fire and Poison. TM32 Dazzling Gleam is your only way to put it on a Pokémon that does not have it naturally — take it here."],
["do",[
 {at:"Route 12", t:"Play the <b>Poké Flute</b> at the second <b>Snorlax</b> and catch it.", sub:"Same rules as Route 16: five-minute timer, boosted stats, three guaranteed perfect IVs."},
 {t:"Speak to the old man in the house south of the junction, tell him his name is <b>Mr. Dazzling</b>, and take <b>TM32 Dazzling Gleam</b>.", sub:"The only Fairy TM in the game. Fairy is 2× on Dragon, Dark and Fighting and immune to Dragon."},
 {t:"Catch a <b>Farfetch’d</b> (10%) and use Sea Skim for <b>Horsea</b> in the water.", sub:"There is no Farfetch’d trade in this game. Route 12 grass is the only place it lives."},
 {at:"Route 14", t:"Chain Oddish or Venonat and hunt the 1% <b>Scyther</b>.", sub:"Let’s Go, Pikachu! exclusive — Eevee players get Pinsir. A chain of 31+ takes the rare rate to 50%; without one you will be here a long time."},
 {t:"Catch a <b>Tauros</b> (5%) and a <b>Venomoth</b> (9%) while you are chaining."},
 {t:"Take the Nugget on the ledge and the hidden <b>Golden Razz Berry</b> at the north end of the grass.", sub:"The Golden Razz spot refreshes daily. You cannot buy Golden Razz anywhere, and it is what makes a legendary throw land."},
 {at:"Route 12", t:"Sea Skim to the island south-east of the Lavender gate for <b>TM24 X-Scissor</b>, and take the <b>Water Stone</b> and <b>TM50 Roost</b>.", sub:"X-Scissor is 2× into both Psychic and Dark — Sabrina's rematch and Agatha's whole team."},
 {at:"Route 15", t:"Take <b>TM47 Surf</b> in the north-west and beat <b>Coach Trainer Midge</b> for <b>TM31 Fire Punch</b>.", sub:"Surf is 90 power special Water. Put it on Lapras the moment you have one."},
 {at:"Route 15", t:"Speak to Oak’s aide in the gate for the <b>Assistant Set</b>.", sub:"Fifty species caught. Cosmetic, but it confirms you cleared the Fuchsia Gym bar."},
 {at:"Route 19", t:"Take the <b>Gold Teeth</b> from Jessie and James on the beach."},
 {at:"Fuchsia City", t:"Return the teeth to the <b>Safari Zone warden</b> and take <b>Strong Push</b>.", sub:"South-east house. Strong Push moves the boulders in the Seafoam Islands and Victory Road — you cannot progress without it."},
 {t:"Speak to the <b>Diglett</b> in the warden’s house with Strong Push for a daily <b>Nugget</b>."},
 {at:"Route 19", t:"Sea Skim south from the Fuchsia beach."}
]]
]});

STAGES.push({
id:"k14", ch:"kanto", tag:"Stage 14", place:"Route 19 · Route 20 · Seafoam Islands",
title:"Articuno, and the Lapras that finishes your team",
lede:"A boulder puzzle wrapped around the first legendary you can catch. Bring Golden Razz Berries, Ultra Balls and a Pokémon that is not made of Rock.",
band:[{k:"Party level",v:"50 → 53"},{k:"Badges",v:"6"},{k:"Catch",v:"Articuno"}],
body:[
["team","<b>Lapras is a rare spawn on the water of Routes 19 and 20, and it is the sixth member of your team.</b> Water/Ice with 130 HP: it is the answer to Lance’s entire Dragon roster, to Giovanni’s Ground types, and to Blaine. It learns <b>Ice Beam at 39</b> and <b>Surf at 45</b> by itself, so it needs almost nothing from you. Chain Tentacool on Route 19 — 30% of the surf table — to force the rare spawn, and drop Sandslash for it. If your buddy is a Lapras you also ride it during Sea Skim instead of the partner."],
["catch",[
 {n:"Lapras", t:["Water","Ice"], where:"Sea Routes 19 and 20 — rare spawn on the water", why:"<b>Chain Tentacool and hunt this properly.</b> There is no gift Lapras in this game and no other source. Ice Beam at 39, Surf at 45, 130 base HP, and it answers Lance."},
 {n:"Staryu", t:["Water"], where:"Route 19 — 30% on the water", why:"Starmie with a Water Stone: 115 Speed, 100 Special Attack, and Water/Psychic. There is a wild <b>Starmie</b> at 1% here too if you want to skip the stone."},
 {n:"Seel", t:["Water"], where:"Seafoam Islands — 15%", why:"Dewgong at 34, and it is wild here at 10%. Water/Ice bulk, and a fixture on Lorelei’s team."},
 {n:"Jynx", t:["Ice","Psychic"], where:"Seafoam Islands — 14%", why:"115 Special Attack behind Ice/Psychic. Seafoam is the only place it lives, and Lorelei brings one to the League."},
 {n:"Slowpoke", t:["Water","Psychic"], where:"Seafoam Islands — 15%", why:"Slowbro at 37, and wild Slowbro is 10% here. Slowbro is on Sabrina’s, Lorelei’s and Trace’s teams — worth having your own."},
 {n:"Shellder", t:["Water"], where:"Seafoam Islands water — 30%", why:"Cloyster with a Water Stone: 180 base Defense. Wild Cloyster is 1% on the same water."},
 {n:"Squirtle", t:["Water"], where:"Seafoam Islands — rare spawn", why:"The fourth and last place a wild Squirtle appears. If you have not managed one yet, this is the densest cave to chain in."},
 {n:"Articuno", t:["Ice","Flying"], where:"Seafoam Islands B4F — battle it first", why:"<b>Interactive encounter.</b> Level 50, all stats boosted, five-minute timer, at least three perfect IVs, and it will <b>never flee</b> — so you can throw at it all day once it is down."}
]],
["warn","<b>Do not bring a Rock move to Articuno.</b> Ice/Flying is <b>4× weak to Rock</b>, and a Rock Slide from a level-50 physical attacker will simply kill it. You want it at a sliver of health, not dead. Bring <b>Electric</b> (2×, and your partner’s Zippy Zap is a guaranteed crit you can control) or <b>Fire</b> (2×, Arcanine), whittle it down, and stop."],
["team","<b>The catching kit for every legendary in this game is the same:</b> a stack of <b>Ultra Balls</b>, a stack of <b>Golden Razz Berries</b> from the daily bush spots, and patience. Feed a Golden Razz, throw with a good spin for the multiplier, and remember that Articuno, Zapdos, Moltres and Mewtwo <b>never run away</b> — unlike every ordinary wild Pokémon, you cannot lose them by missing. The only way to lose an interactive Pokémon is to let the five-minute battle timer expire, and then it just resets."],
["loot",[
 {k:"TM55", n:"Ice Beam", where:"Seafoam Islands B2F — south area", why:"90 power special Ice. Lapras learns it at 39 anyway; put this copy on Starmie or Blastoise."},
 {k:"Item", n:"Ice Stone", where:"Seafoam Islands B2F — south-east plateau", why:"Alolan Sandslash and Alolan Ninetales need it. On Let’s Go, Pikachu! that means your traded Alolan Sandshrew."},
 {k:"Item", n:"Rare Candy ×5", where:"Seafoam Islands 1F — reward for beating Coach Trainer Yas"},
 {k:"Item", n:"Big Pearl", where:"Seafoam Islands B4F — south-west of Articuno"},
 {k:"Item", n:"Heart Scale", where:"Route 20 — beside the southern Seafoam entrance"},
 {k:"Item", n:"Ultra Ball ×3", where:"Seafoam Islands B3F, and again on Route 20"}
]],
["boss",{
name:"Articuno", role:"Seafoam Islands B4F · Ice", badge:"Interactive · Lv 50",
team:[
 {m:"Articuno", l:50, t:["Ice","Flying"], note:"All stats boosted, as every legendary in this game is. Ice/Flying: <b>4× Rock</b>, 2× Fire, Electric and Steel; resists Grass, Bug and Ground; <b>immune to Ground</b>."}
],
plan:[
 "<b>Save before you play.</b> The battle is on a five-minute timer that does not pause for the HOME button or sleep mode. If it expires the fight simply ends and you start again — but a save is still the cheapest insurance.",
 "<b>No Rock moves.</b> Rock is 4× and will overkill it. Use Electric or Fire and stop when it is nearly out.",
 "Your partner’s <b>Zippy Zap</b> is ideal: Electric is 2×, the damage is predictable, and +2 priority means you always get the last word before it acts.",
 "Once it faints the throwing screen opens. Feed a <b>Golden Razz Berry</b>, aim for an Excellent throw, and keep going — <b>Articuno never flees</b>. A missed ball costs you a ball, nothing else.",
 "It is Ice/Flying, so it is <b>immune to Ground</b>. Leave Sandslash and Dugtrio on the bench for this one."
],
reward:"A level-50 Articuno with at least three perfect IVs. Catching all three birds is one of the two conditions for them respawning in the sky after the League."
}],
["do",[
 {at:"Route 19", t:"Chain <b>Tentacool</b> on the water and hunt the <b>Lapras</b> rare spawn.", sub:"30% of the surf table, and Lapras has no other source in the game. A chain of 31+ takes the rare rate to 50%."},
 {t:"Catch a <b>Staryu</b> (30%) and watch for the 1% wild <b>Starmie</b>."},
 {at:"Route 20", t:"Take the Heart Scale by the southern Seafoam entrance and the Ultra Balls on Roger’s island."},
 {t:"Speak to the Poké Mart clerk outside the cave for a <b>free full heal of your team</b>."},
 {at:"Seafoam Islands 1F", t:"<b>Strong Push</b> the first two boulders down the holes in the floor.", sub:"Both must fall through. This is what eventually blocks the currents on B3F."},
 {t:"Beat <b>Coach Trainer Yas</b> for five Rare Candies."},
 {at:"Seafoam Islands B2F", t:"Take <b>TM55 Ice Beam</b> in the south and the <b>Ice Stone</b> on the south-east plateau.", sub:"The Ice Stone is what evolves your traded Alolan Sandshrew."},
 {t:"Push the remaining boulders down through B1F and B2F until they land in the water on B3F.", sub:"Two sets of two. When all four are in the sea the currents stop and Sea Skim works down here."},
 {at:"Seafoam Islands B3F", t:"Solve the second boulder cluster and drop through to B4F.", sub:"Push the right-hand boulder to the north wall, the left one two south and one west, the one south of the ladder all the way west, then drop the last two through the gaps."},
 {at:"Seafoam Islands B4F", t:"<b>Save</b>, then battle and catch <b>Articuno</b>.", sub:"Level 50, all stats boosted, five-minute timer. Electric or Fire only — Rock is 4× and will kill it."},
 {t:"Take the Big Pearls on the water’s edge and climb back out through B3F.", sub:"Collect the Ultra Balls, Super Lure and the Ice Stone on the way up if you have not."},
 {at:"Cinnabar Island", t:"Sea Skim west along Route 20."}
]]
]});

STAGES.push({
id:"k15", ch:"kanto", tag:"Stage 15", place:"Cinnabar Island · Pokémon Mansion · Cinnabar Gym",
title:"Volcano Badge — three fossils, a burnt mansion, and a quiz show",
lede:"The Cinnabar Lab revives all three fossils, the mansion holds the Secret Key behind four floors of hidden switches, and Blaine makes you answer five questions before he will fight you.",
band:[{k:"Party level",v:"53 → 56"},{k:"Badge",v:"Volcano"},{k:"Obedience",v:"to Lv 80"}],
body:[
["h","The Cinnabar Lab"],
["lgpe","<b>You are not limited to one fossil Pokémon here.</b> Hand the scientist in the Testing Room whichever fossils you are carrying and he revives each one on the spot — Helix into Omanyte, Dome into Kabuto, Old Amber into Aerodactyl, all at <b>level 44</b>. The only limit is which fossils you own, and Cerulean Cave respawns the ones you refused at Mt. Moon after the League. Revive everything you have."],
["catch",[
 {n:"Kabuto", t:["Rock","Water"], where:"Cinnabar Lab — revive the Dome Fossil, level 44", why:"Kabutops at 40, so it evolves almost immediately. 115 Attack behind physical Rock and Water STAB — the stats and the moves point the same way."},
 {n:"Aerodactyl", t:["Rock","Flying"], where:"Cinnabar Lab — revive the Old Amber, level 44", why:"<b>130 Speed and 105 Attack.</b> This is the Pokémon you went back to Pewter for in stage 07 — and after the League it becomes one of your three sky mounts."},
 {n:"Omanyte", t:["Rock","Water"], where:"Cinnabar Lab — revive the Helix Fossil, level 44", why:"Only if you took Helix at Mt. Moon. Omastar has 115 Special Attack and 125 Defense; it is the slower, tankier half of the fossil pair."},
 {n:"Alolan Grimer", t:["Poison","Dark"], lg:true, where:"Trade a Grimer in the Cinnabar Pokémon Center — repeatable, Let’s Go, Pikachu! only", why:"<b>Poison/Dark, and Grimer is a Let’s Go, Pikachu! exclusive.</b> Alolan Muk has 105 HP and 105 Attack and is immune to Psychic-boosting nonsense. Eevee players trade for an Alolan Meowth here instead."},
 {n:"Magmar", t:["Fire"], where:"Pokémon Mansion — 15%", why:"The only place Magmar lives. 100 Special Attack; Magmortar does not exist in this game, so this is the whole line."},
 {n:"Ditto", t:["Normal"], where:"Pokémon Mansion — 10%", why:"<b>Do not skip this.</b> The Pokémon Mansion is one of only two homes for Ditto. There is no breeding in this game so Ditto has no mechanical use at all — it is purely a Pokédex entry and a Master Trainer, and it is easy to leave the island without one."},
 {n:"Grimer", t:["Poison"], lg:true, where:"Pokémon Mansion — 15%, Let’s Go, Pikachu! only", why:"Version exclusive, and the trade stock for Alolan Grimer downstairs. Catch several."}
]],
["h","The Pokémon Mansion"],
["p","Four floors of statues that flip hidden switches, opening one door and closing another. The route below is the shortest path that also collects everything. The Secret Key is in the last room of the basement and the gym does not open without it."],
["loot",[
 {k:"TM02", n:"Taunt", where:"Cinnabar Lab Research Room — from the scientist at the desk", why:"Forces the target to use damaging moves only. It shuts down Koga’s Protect stalling and Sabrina’s screens in one turn."},
 {k:"TM22", n:"Rock Slide", where:"Pokémon Mansion 2F — reward for beating Coach Trainer Rita", why:"75 power physical Rock with a flinch chance. <b>Note it and keep it away from the legendary birds</b> — Rock is 4× on all three."},
 {k:"TM21", n:"Foul Play", where:"Pokémon Mansion 3F — north-east room", why:"Dark, and it uses the <i>target’s</i> Attack rather than yours. Excellent on a bulky Pokémon against Bruno’s Machamp."},
 {k:"TM52", n:"Sludge Bomb", where:"Pokémon Mansion B1F — the southern room", why:"90 power special Poison. <b>This is the move Venusaur has been waiting for</b> — same-type, special, and it matches its 100 Special Attack."},
 {k:"TM55", n:"Ice Beam", where:"Seafoam Islands B2F — already collected last stage", why:"Listed again as a reminder: if your Lapras is not carrying it, Madame Memorial at the Indigo Plateau will teach it for a Heart Scale."},
 {k:"Item", n:"Fire Stone", where:"Pokémon Mansion 1F south — past the potted plants", why:"A second Fire Stone. If Growlithe has reached 38 and taken Flare Blitz, use one now."},
 {k:"Key", n:"Secret Key", where:"Pokémon Mansion B1F — the final room to the south", why:"Opens the Cinnabar Gym. Nothing else does."},
 {k:"Item", n:"Rare Candy ×3", where:"Pokémon Mansion 3F south-west, B1F north-central, and 2F"},
 {k:"TM46", n:"Fire Blast", where:"From Blaine", why:"110 power special Fire at 85% accuracy. Charizard’s 109 Special Attack turns it into the hardest single hit you can throw before Hyper Beam."}
]],
["boss",{
name:"Blaine", role:"Cinnabar Island Gym · Fire", badge:"Volcano Badge",
team:[
 {m:"Magmar", l:47, t:["Fire"], note:"Flamethrower, Low Kick, Confuse Ray. Confuse Ray is the annoyance — it costs you turns at random."},
 {m:"Rapidash", l:47, t:["Fire"], note:"Flare Blitz, Quick Attack, Fury Attack. Flare Blitz recoils, so it damages itself for you."},
 {m:"Ninetales", l:47, t:["Fire"], note:"Fire Blast, Quick Attack. 81 Special Attack and 109 Speed; the Fire Blast is 110 power and will hurt."},
 {m:"Arcanine", l:48, t:["Fire"], note:"Flare Blitz, <b>Outrage</b>, Crunch. Outrage is 120 power Dragon and it is the move that catches people out in a Fire gym."}
],
plan:[
 "<b>Lead Lapras.</b> Water is 2× into all four, Water/Ice resists Fire back, and 130 base HP means even the Fire Blast does not threaten it. Surf or Ice Beam ends most of them in one.",
 "<b>Ground works on the ones that stand still</b> — Sandslash’s Earthquake is 2× on every one of them and none of Blaine’s Pokémon is part Flying.",
 "Arcanine’s <b>Outrage</b> is Dragon, so a Dragon or a Fairy answer matters more than a Water one against that slot. If you took TM32 Dazzling Gleam on Route 12, a Clefable eats Outrage for nothing — Fairy is immune to Dragon.",
 "<b>Carry Burn Heals.</b> Every Pokémon here can burn you, and a burn halves your physical damage, which turns a three-turn win into a seven-turn one.",
 "Blaine will not fight you until you have won his five-question quiz — or lost enough of it to have beaten five of his students. Either route gets you five Blaine dolls; getting the questions wrong just means more battles."
],
reward:"TM46 Fire Blast, the Volcano Badge, and obedience up to level 80."
}],
["do",[
 {at:"Cinnabar Island", t:"Trade a Grimer in the Pokémon Center for an <b>Alolan Grimer</b>.", sub:"Poison/Dark. Grimer is a Let’s Go, Pikachu! exclusive and it lives in the mansion up the road — catch a few first if you have none."},
 {at:"Cinnabar Lab", t:"Take <b>TM02 Taunt</b> from the scientist in the Research Room."},
 {t:"Revive <b>every fossil you are carrying</b> in the Testing Room.", sub:"Dome into Kabuto, Helix into Omanyte, Old Amber into Aerodactyl — all at level 44, and there is no limit on how many you hand over."},
 {at:"Pokémon Mansion", t:"Catch <b>Ditto</b> (10%), <b>Magmar</b> (15%) and several <b>Grimer</b> (15%).", sub:"The mansion is one of only two places Ditto exists, and Ditto has no use in this game beyond the Pokédex — which is exactly why people forget it."},
 {t:"Work the four floors, flipping the statue switches as you go.", sub:"Each statue opens one door and closes another. Read the four journal entries on the way — they are the Mewtwo backstory."},
 {t:"Beat <b>Coach Trainer Rita</b> on 2F for <b>TM22 Rock Slide</b>."},
 {t:"Take <b>TM21 Foul Play</b> on 3F and <b>TM52 Sludge Bomb</b> in the basement.", sub:"Sludge Bomb is 90 power special Poison — the STAB move Venusaur’s stat spread has been waiting for."},
 {t:"Take the three <b>Rare Candies</b> scattered through the mansion.", sub:"3F south-west, B1F north-central, and one on 2F. The mansion is the densest Rare Candy in the game."},
 {t:"Take the second <b>Fire Stone</b> in the south of 1F.", sub:"If Growlithe has hit 38 and learnt Flare Blitz, this is the moment to use it."},
 {t:"Take the <b>Secret Key</b> from the last room in the basement."},
 {at:"Cinnabar Gym", t:"Answer Blaine’s five questions, then beat him.", sub:"Magmar 47, Rapidash 47, Ninetales 47, Arcanine 48. Lead Lapras; carry Burn Heals; watch for Arcanine’s Outrage."},
 {at:"Route 21", t:"Sea Skim north towards Pallet Town."}
]]
]});

STAGES.push({
id:"k16", ch:"kanto", tag:"Stage 16", place:"Route 21 · Pallet Town · Route 10 · Power Plant",
title:"Zapdos, and the Key Stone that unlocks Mega Evolution",
lede:"A tidy-up stage before the last two badges: the Power Plant for the second bird, and Oak’s lab for the four Mega Stones Blue has been carrying around since the S.S. Anne.",
band:[{k:"Party level",v:"56 → 58"},{k:"Badges",v:"7"},{k:"Unlocks",v:"Mega Evolution"}],
body:[
["p","Sea Skim north from Cinnabar along Route 21 to Pallet, then Sky Dash to the Route 10 Pokémon Center and Sea Skim south down the river past the Rock Tunnel entrance. The Power Plant is a short way along the bank."],
["warn","<b>Half the items in the Power Plant are Electrode.</b> The disguised ones are white on top and red underneath — the exact reverse of a real Poké Ball. Walk into one and it is an interactive battle with a five-minute timer, like a Snorlax. That is not a punishment: an Electrode you defeat and catch comes with three guaranteed perfect IVs, so take every one you find."],
["catch",[
 {n:"Zapdos", t:["Electric","Flying"], where:"Power Plant — the final room, north-west", why:"<b>Interactive encounter, level 50, all stats boosted.</b> Electric/Flying is <b>4× weak to Rock</b> and 2× to Ice — same trap as Articuno. Use Ice, not Rock. It never flees."},
 {n:"Electabuzz", t:["Electric"], where:"Power Plant — uncommon", why:"The only place it lives. Electivire does not exist here, so Electabuzz is the whole line — and it is on Lt. Surge’s rematch team."},
 {n:"Electrode", t:["Electric"], where:"Power Plant — disguised as items", why:"Interactive encounters with three guaranteed perfect IVs. 150 base Speed. Catch every one."},
 {n:"Magneton", t:["Electric","Steel"], where:"Power Plant — uncommon", why:"120 Special Attack. Electric/Steel resists an enormous list, and Magnezone does not exist here."},
 {n:"Muk", t:["Poison"], where:"Power Plant — uncommon", why:"A fully evolved spawn. Saves you levelling the Grimer you caught on Cinnabar."}
]],
["h","Mega Evolution"],
["lgpe","<b>Let’s Go has Mega Evolution and it is easy to walk past.</b> After the Power Plant, Trace drags you back to Oak’s lab, where <b>Blue hands you the Key Stone plus the Venusaurite, Charizardite X, Charizardite Y and Blastoisinite</b>. There are no held items in this game, so a Mega Stone sits in your Bag and applies to that species automatically — you simply get a Mega button in battle. <b>One Mega per battle</b>, it lasts until the fight ends, and the only other stones are the Mewtwonite X and Y that Green gives you in Cerulean Cave after the League, plus a merchant at the Indigo Plateau who sells the rest."],
["team","<b>Charizardite Y is the one to use.</b> Mega Charizard Y takes Charizard’s 109 Special Attack to <b>159</b> and keeps Fire/Flying; Mega Charizard X trades the Flying half for Dragon and pushes Attack instead, which fights against everything Charizard’s level-up moves do. If you have followed this guide your Charizard is holding Flamethrower and Fire Blast, both special — so Y, and it is not close. Venusaurite is the fallback if you want a wall rather than a cannon."],
["loot",[
 {k:"Item", n:"Thunder Stone", where:"Power Plant — north-east room", why:"Raichu, Jolteon. You need a Raichu to trade for an Alolan Raichu in Saffron, so this is the one that pays for itself."},
 {k:"TM38", n:"Thunder", where:"Power Plant — south-east area", why:"110 power special Electric at 70% accuracy. Big, and unreliable — Thunderbolt is the better everyday move."},
 {k:"Item", n:"Voltorb Candy", where:"Power Plant — hidden in the long horizontal room in the centre"},
 {k:"Item", n:"Max Revive", where:"Power Plant — north-east of the entrance"},
 {k:"Item", n:"Rare Candy ×5", where:"Power Plant — reward for beating Coach Trainer Mable"},
 {k:"Key", n:"Key Stone", where:"Oak's Lab — from Blue", why:"Enables Mega Evolution. One Mega per battle, and it wears off when the battle ends."},
 {k:"Item", n:"Venusaurite · Charizardite X · Charizardite Y · Blastoisinite", where:"Oak's Lab — from Blue, all four at once", why:"No held items in this game: the stone lives in your Bag and unlocks the Mega button for that species."},
 {k:"TM35", n:"Ice Punch", where:"Route 21 — reward for beating Coach Trainer Pam"},
 {k:"Item", n:"Water Stone", where:"Route 21 — Fisherman Nolan's island"}
]],
["boss",{
name:"Zapdos", role:"Power Plant · Electric", badge:"Interactive · Lv 50",
team:[
 {m:"Zapdos", l:50, t:["Electric","Flying"], note:"All stats boosted. Electric/Flying: <b>4× Rock</b>, 2× Ice; resists Fighting, Flying, Steel, Grass and Bug; <b>immune to Ground</b>."}
],
plan:[
 "<b>Ice, not Rock.</b> Rock is 4× and will kill it outright. Lapras’ Ice Beam at 90 power off an 85 Special Attack is exactly the controlled damage you want.",
 "It is <b>immune to Ground</b> and resists Fighting, Steel, Grass, Bug and Flying — so Sandslash, Hitmonlee and Venusaur are all wasted slots here.",
 "Electric does nothing special back at you, but Zapdos’ own Electric moves are boosted. Do not send Lapras in at low health.",
 "The five-minute timer applies. If it expires the fight ends and Zapdos is still there — nothing is lost but the time.",
 "<b>Zapdos never flees.</b> Golden Razz, Ultra Balls, and keep throwing."
],
reward:"A level-50 Zapdos with at least three perfect IVs — the second of the three birds you need before they start appearing in the sky."
}],
["do",[
 {at:"Route 21", t:"Sea Skim north from Cinnabar, beating <b>Coach Trainer Pam</b> for <b>TM35 Ice Punch</b>.", sub:"Also take the Water Stone on Fisherman Nolan's island and the PP Up on the island nearest Cinnabar."},
 {at:"Route 10", t:"Sky Dash to the Route 10 Pokémon Center, then <b>Sea Skim south</b> down the river.", sub:"Past the Rock Tunnel entrance. The Power Plant is a short way along the east bank."},
 {at:"Power Plant", t:"Take the <b>Thunder Stone</b> in the north-east room.", sub:"Evolve your spare wild Pikachu with it — a Raichu is what the Saffron trade counter wants for an Alolan Raichu."},
 {t:"Catch every <b>Electrode</b> disguised as an item.", sub:"White on top, red underneath — the reverse of a real Poké Ball. Each one is an interactive battle with three guaranteed perfect IVs."},
 {t:"Take the <b>Max Revive</b> north-east of the entrance, the hidden <b>Voltorb Candy</b> in the long central room, and the <b>Rare Candy ×5</b> from Coach Trainer Mable."},
 {t:"Catch <b>Electabuzz, Magneton and Muk</b>.", sub:"The Power Plant is the only home for Electabuzz in the game."},
 {t:"Take <b>TM38 Thunder</b> in the south-east and beat <b>Coach Trainer Mable</b> for five Rare Candies."},
 {t:"<b>Save</b>, then battle and catch <b>Zapdos</b> in the final room.", sub:"Level 50, all stats boosted. Ice Beam only — Rock is 4× and will kill it."},
 {at:"Viridian City", t:"Sky Dash to Viridian and find Trace outside the still-locked gym.", sub:"He walks you back to Pallet automatically. This is scripted; you cannot skip it."},
 {at:"Pallet Town", t:"Take the <b>Key Stone</b> and all four Mega Stones from <b>Blue</b> at Oak’s lab.", sub:"Venusaurite, Charizardite X, Charizardite Y, Blastoisinite. Charizardite Y is the one you will actually use."},
 {t:"Talk to the girl in the flower patch outside.", sub:"She tells you the Viridian Gym Leader is back. This is the trigger; the gym stays shut until you have heard it."},
 {at:"Viridian City", t:"Sky Dash back to Viridian."}
]]
]});

STAGES.push({
id:"k17", ch:"kanto", tag:"Stage 17", place:"Viridian Gym",
title:"Earth Badge — Giovanni, for the third and last time",
lede:"One gym, one spinner-tile puzzle, one man you have already beaten twice. Win and every Pokémon you own obeys you regardless of level.",
band:[{k:"Party level",v:"58 → 60"},{k:"Badge",v:"Earth"},{k:"Obedience",v:"no limit"}],
body:[
["p","The Viridian Gym has no entry requirement beyond the seven badges you already hold — the guide says earning those was hard enough. Inside it is green spinner tiles and yellow stoppers, and the path is fixed."],
["tip","<b>The spinner route, in order:</b> north-east from the entrance until you hit a fence; beat Ace Trainer Samuel to the south-west; take the green tiles west to the yellow stopper on the west wall, which pulls Tamer Cole out of position; spin north for Ace Trainer Kelly; follow the north and east walls to the south-east corner for Ace Trainer Yuji and a <b>Revive</b>; spin west from the entrance to the south-west corner; then take the blue tiles into the centre, beat Tamer Jason and Black Belt Takashi, and step on the yellow stopper. The lights come on and Giovanni is in the office."],
["boss",{
name:"Giovanni", role:"Viridian City Gym · Ground", badge:"Earth Badge",
team:[
 {m:"Dugtrio", l:49, t:["Ground"], note:"Slash, Sucker Punch, Earthquake. 120 Speed — it moves first and <b>Sucker Punch is Dark at +1 priority</b>, so it punishes a Psychic answer."},
 {m:"Nidoqueen", l:49, t:["Poison","Ground"], note:"Super Fang, Earthquake, Crunch. Super Fang halves your current HP regardless of type."},
 {m:"Nidoking", l:49, t:["Poison","Ground"], note:"Megahorn, Earthquake, Poison Jab, <b>Horn Drill</b>. Horn Drill is a one-hit KO at 30% accuracy — there is no defending against it, only outspeeding it."},
 {m:"Rhydon", l:50, t:["Ground","Rock"], note:"Earthquake, Rock Slide, Megahorn. Ground/Rock is <b>4× weak to both Water and Grass</b>."}
],
plan:[
 "<b>Lead Lapras and lead with Surf.</b> Water is 2× into everything he owns and <b>4× into Rhydon</b>, and Lapras’ 130 HP absorbs an Earthquake without complaint.",
 "<b>Venusaur is the other half of the answer</b> — Grass is 4× on Rhydon and 2× on the rest, and being part Poison it takes Nidoking’s Poison Jab at half. Mega Venusaur if you want the fight to be boring.",
 "<b>Leave your partner on the bench.</b> Electric does nothing to three of the four and is a straight zero into Dugtrio, Nidoqueen and Nidoking. Splishy Splash is the exception — bring it out only for that.",
 "Nidoking’s <b>Horn Drill</b> is a 30%-accurate one-hit knockout. You cannot resist it. Kill Nidoking quickly rather than tanking it, and keep a Revive within reach.",
 "Dugtrio’s <b>Sucker Punch</b> is Dark and has priority, so a Kadabra or Mr. Mime lead loses the turn it needed. Do not open Psychic."
],
reward:"<b>TM41 Earthquake</b>, the Earth Badge, and obedience from every Pokémon you own at any level. Giovanni disbands Team Rocket and leaves; Blue takes over the gym."
}],
["team","<b>TM41 Earthquake is the single best physical TM in the game and you get exactly one.</b> 100 power, perfect accuracy, and it is 2× into five types. Put it on <b>Snorlax</b> — 110 Attack, no Ground weakness of its own, and it gives Snorlax an answer to the Electric, Rock, Steel, Fire and Poison types that its Normal STAB struggles with. Sandslash and Dugtrio learn Earthquake by level-up anyway, so do not waste the machine on them."],
["do",[
 {at:"Viridian Gym", t:"Follow the spinner route to the centre and step on the yellow stopper.", sub:"The full sequence is in the note above. Take the Revive by Ace Trainer Yuji in the south-east corner on the way."},
 {t:"Beat every <b>Ace Trainer</b> on the way in.", sub:"They are the last easy experience before Victory Road, and you want level 60 before the League."},
 {t:"Beat <b>Giovanni</b> and take <b>TM41 Earthquake</b>.", sub:"Dugtrio 49, Nidoqueen 49, Nidoking 49, Rhydon 50. Lapras with Surf; watch for Nidoking's Horn Drill."},
 {t:"Put <b>Earthquake on Snorlax</b>.", sub:"100 power off 110 Attack, and it plugs every hole in a pure Normal movepool. Sandslash and Dugtrio get it free by level-up — do not spend the machine on them."},
 {t:"Speak to <b>Blue</b> outside as he takes over the gym."},
 {at:"Route 22", t:"Head west out of Viridian towards the Pokémon League."}
]]
]});

STAGES.push({
id:"k18", ch:"kanto", tag:"Stage 18", place:"Route 22 · Route 23 · Victory Road",
title:"Victory Road, Moltres, and the last of the boulder puzzles",
lede:"Three floors of Strong Push switches, the best TM haul in the game, and the third bird waiting on the top floor. This is where you finish levelling, not where you start.",
band:[{k:"Party level",v:"60 → 62"},{k:"Badges",v:"8"},{k:"Catch",v:"Moltres"}],
body:[
["team","<b>Get every member of your six to at least level 58 before you go through the League doors.</b> The Elite Four run 51 to 55 and Trace finishes at 57 — but the five fights are consecutive with no Pokémon Center between them, so the number that matters is not your level, it is your stock of <b>Full Restores and Revives</b>. Buy twenty of each at the Indigo Plateau mart before you start."],
["p","<b>The boulders in Victory Road work differently from the Seafoam ones.</b> There you dropped them down holes; here you push them onto <b>pressure switches</b> that lower stone walls. If you push one into a dead end, leave the cave and come back — the puzzle resets."],
["catch",[
 {n:"Moltres", t:["Fire","Flying"], where:"Victory Road 2F — north-west area", why:"<b>Interactive encounter, level 50, all stats boosted.</b> Fire/Flying is <b>4× weak to Rock</b>, exactly like the other two birds. Use Water or Electric. It never flees."},
 {n:"Hitmonlee", t:["Fighting"], where:"Victory Road 2F — rare spawn", why:"If you took Hitmonchan at the Dojo, this is where you get the other one. Both are rare spawns in this cave and neither has another source."},
 {n:"Hitmonchan", t:["Fighting"], where:"Victory Road 3F — rare spawn", why:"The other half of the Dojo choice. Chain Machop or Geodude in here to force either one."},
 {n:"Machoke", t:["Fighting"], where:"Victory Road — common", why:"A fully evolved Machoke saves you 28 levels. Machamp still needs a trade, so stock up if you have a partner to trade with."},
 {n:"Rhydon", t:["Ground","Rock"], where:"Victory Road — common", why:"130 Attack, and it is on Giovanni’s rematch team. Rhyperior does not exist here."},
 {n:"Nidoqueen", t:["Poison","Ground"], where:"Route 23 south — 1%", why:"Fully evolved wild Nidoqueen and Nidoking are both 1% here, and both lines are otherwise Moon-Stone evolutions. Chain Nidorina or Nidorino to force them."},
 {n:"Exeggutor", t:["Grass","Psychic"], where:"Route 23 south — 1%", why:"A fully evolved Exeggutor at 1%, or Exeggcute at 14% and a Leaf Stone. You need one either way — an Exeggutor is what the Indigo Plateau trade wants for an <b>Alolan Exeggutor</b>, which is Grass/Dragon."}
]],
["loot",[
 {k:"TM45", n:"Solar Beam", where:"Victory Road — south-west of Black Belt Daisuke", why:"<b>200 power in this game — not the 120 it is everywhere else.</b> Let’s Go buffed it, and on Venusaur’s 100 Special Attack it is the single biggest hit your team can throw. It still spends a turn charging."},
 {k:"TM49", n:"Superpower", where:"Victory Road — north-east area", why:"120 power physical Fighting that drops your own Attack and Defense afterwards. A finisher, not a staple."},
 {k:"TM51", n:"Blizzard", where:"Victory Road — north-west area", why:"110 power special Ice at 70% accuracy. Ice Beam is the reliable one; Blizzard is for when you need the number."},
 {k:"TM56", n:"Stealth Rock", where:"Victory Road — north area", why:"Chip damage on switch-in. Of limited use against the Elite Four, who lead into you rather than rotating."},
 {k:"TM39", n:"Outrage", where:"Victory Road — reward for beating Coach Trainer Ryan", why:"120 power physical Dragon that locks you in for 2–3 turns and confuses you afterwards. It is the one Dragon move most of your team can hold."},
 {k:"Item", n:"Pikachu Candy ×10", where:"Victory Road — reward for beating Coach Trainer Alemana", why:"Ten species Candy for your partner. Spend it all on one stat — Attack, if you are running Zippy Zap and Floaty Fall."},
 {k:"Item", n:"Leaf Stone", where:"Victory Road — north area, behind the boulder puzzle", why:"You must choose between this and TM56 on the first pass; leave the cave and re-enter to reset the puzzle and take the other."},
 {k:"Item", n:"Golden Nanab Berry ×5", where:"Victory Road — southern area, north-east of the paired Ace Trainers"},
 {k:"Item", n:"Golden Razz Berry ×8", where:"Route 23 — the island north of the fifth checkpoint, via Sea Skim", why:"<b>Sweep Route 23’s checkpoints with Sea Skim.</b> Golden Razz, Golden Nanab and Golden Pinap are all here in stacks of eight, and this is the best single haul of them in the game."}
]],
["boss",{
name:"Moltres", role:"Victory Road 2F · Fire", badge:"Interactive · Lv 50",
team:[
 {m:"Moltres", l:50, t:["Fire","Flying"], note:"All stats boosted. Fire/Flying: <b>4× Rock</b>, 2× Water and Electric; resists Fighting, Bug, Steel, Fire, Grass and Fairy; <b>immune to Ground</b>."}
],
plan:[
 "<b>Rock is 4× — do not use it.</b> Your Snorlax is carrying Rock Slide by now and a level-60 Snorlax will delete a level-50 Moltres with it. Leave Snorlax out of this fight entirely.",
 "<b>Lapras with Surf</b> is the right answer: Water is 2×, the damage is predictable, and Lapras resists Moltres’ Fire back.",
 "Your partner’s <b>Splishy Splash</b> also works — 90 power special Water with a 30% paralysis chance, and paralysis makes the throwing phase easier.",
 "It is <b>immune to Ground</b> and resists Fighting, Bug, Steel, Fire, Grass and Fairy. Half your team does nothing to it.",
 "Third of three. Once Moltres is caught you have the full set, which is one of the two conditions for the birds beginning to appear in the sky after you become Champion."
],
reward:"A level-50 Moltres with at least three perfect IVs, and the last of the three stationary birds."
}],
["do",[
 {at:"Route 22", t:"Beat <b>Trace</b> at the gate.", sub:"Pidgeot 50, Vileplume 50, Marowak 50, Jolteon 51. His Eevee is a Jolteon in this version — Ground answers it, and Marowak is the one that hits hardest."},
 {at:"Route 23", t:"Show all eight badges at the checkpoints, and <b>Sea Skim to every island on the way through</b>.", sub:"<b>Golden Razz Berry ×8</b> on the island north of the fifth checkpoint, plus Golden Nanab and Golden Pinap in the same quantities by the seventh. This is the biggest berry haul in the game and you want it before the League."},
 {t:"Chain Nidorina or Nidorino for the 1% <b>Nidoqueen</b> and <b>Nidoking</b>, and pick up an <b>Exeggutor</b>.", sub:"An Exeggutor is the trade stock for an Alolan Exeggutor at the Indigo Plateau — Grass/Dragon, and it exists nowhere else."},
 {at:"Victory Road 1F", t:"<b>Strong Push</b> the first boulder east onto the pressure switch.", sub:"That lowers the wall on the central ridge. These boulders go onto switches, not down holes."},
 {t:"Beat <b>Coach Trainer Alemana</b> for <b>ten Pikachu Candy</b>.", sub:"Spend all ten on one Awakening Value — Attack, if your partner is running Zippy Zap and Floaty Fall."},
 {t:"Take either the <b>Leaf Stone</b> or <b>TM56 Stealth Rock</b>, then leave and re-enter to reset the puzzle and take the other.", sub:"The cave is narrow enough that the boulder blocks one to reach the other. Resetting is free."},
 {at:"Victory Road 2F", t:"<b>Save</b>, then battle and catch <b>Moltres</b> in the north-west.", sub:"Level 50, all stats boosted. Water or Electric — and keep Snorlax and its Rock Slide well away."},
 {t:"Take the PP Max south of Moltres, the hidden Pretty Wing on the pillar west of it, and the <b>Golden Nanab Berry ×5</b> in the southern area north-east of the paired Ace Trainers."},
 {t:"Take <b>TM45 Solar Beam</b>, <b>TM49 Superpower</b> and <b>TM51 Blizzard</b> on the way through.", sub:"Solar Beam on Venusaur is the biggest Grass hit available to you."},
 {at:"Victory Road 3F", t:"Beat <b>Coach Trainer Ryan</b> for <b>TM39 Outrage</b>, then take the eastern exit."},
 {at:"Indigo Plateau", t:"Climb the stone staircase to the Pokémon League."}
]]
]});

STAGES.push({
id:"k19", ch:"kanto", tag:"Stage 19", place:"Indigo Plateau · Pokémon League",
title:"The Elite Four, and Trace as Champion",
lede:"Five battles back to back with no Pokémon Center between them. Nothing here is a type puzzle you cannot solve — it is a stamina test, and stamina is bought at the mart downstairs.",
band:[{k:"Party level",v:"62 → 65"},{k:"Badges",v:"8"},{k:"Buy",v:"20 Full Restores"}],
body:[
["warn","<b>Shop before you go up the stairs.</b> Twenty <b>Full Restores</b>, ten <b>Revives</b>, a stack of <b>Max Potions</b>. You cannot leave once you start, healing between rounds comes entirely out of your bag, and running out in Lance’s room means starting the whole gauntlet again."],
["team","<b>Visit Madame Memorial by the Pokémon Center first.</b> For one <b>Heart Scale</b> each she will teach any Pokémon any move it can learn by level-up in its current form. This is the Move Reminder, and it is how you undo a bad decision — a Snorlax that missed Body Slam, a Lapras without Ice Beam, an Arcanine that evolved before Flare Blitz. You have at least five Heart Scales from the Cerulean bike shop."],
["catch",[
 {n:"Alolan Exeggutor", t:["Grass","Dragon"], where:"Trade an Exeggutor to the Super Nerd by the Poké Mart — repeatable", why:"<b>Grass/Dragon exists nowhere else in any game’s Kanto dex.</b> 125 Special Attack and a straight immunity to the Ground moves that plague Grass types. Bring the Exeggutor you caught or evolved on Route 23."}
]],
["boss",{
name:"Lorelei", role:"Elite Four · Ice", badge:"Battle 1",
team:[
 {m:"Dewgong", l:51, t:["Water","Ice"], note:"Aqua Jet, Ice Shard, Waterfall. Two priority moves — it gets the first hit whatever you lead."},
 {m:"Jynx", l:51, t:["Ice","Psychic"], note:"Lovely Kiss, Psychic, Blizzard. <b>Lovely Kiss is the fight-loser.</b> 75% accurate sleep, and there is no timer on sleep here."},
 {m:"Cloyster", l:51, t:["Water","Ice"], note:"Ice Beam, Spike Cannon, Hydro Pump. 180 base Defense — do not try to punch through it physically."},
 {m:"Slowbro", l:51, t:["Water","Psychic"], note:"Surf, Flamethrower, Psychic. The Flamethrower is there for the Grass and Steel types you would bring against the rest."},
 {m:"Lapras", l:52, t:["Water","Ice"], note:"Blizzard, Dragon Pulse, Hydro Pump. 130 HP and it hits from the special side; expect to spend two or three turns."}
],
plan:[
 "<b>Four of her five are part Water, and all but Jynx are part Ice.</b> <b>Electric</b> is the through-line: your partner’s Zippy Zap is 2× on four of the five, always crits, and moves first at +2 priority — which beats Dewgong’s Aqua Jet and Ice Shard.",
 "<b>Grass answers Cloyster and Slowbro</b> where Electric only ties. Venusaur’s Solar Beam or Mega Drain is 2× into both, and Cloyster’s 180 Defense is irrelevant against a special hit.",
 "<b>Fighting handles Jynx</b> — Ice/Psychic takes 2× from Fighting, Bug, Fire, Ghost, Dark and Steel. Hitmonlee’s Brick Break, or a Snorlax carrying Earthquake, ends it before Lovely Kiss lands.",
 "<b>Bring Awakenings and use them immediately.</b> A sleeping lead against five bulky Water types is how this fight goes long enough to run you out of Full Restores in round one.",
 "Do not lead a Ground type. Every one of her Pokémon carries a Water move and Ground takes 2× from all of them."
],
reward:"No item — the four rooms run straight into each other. You cannot heal at a Center between them."
}],
["boss",{
name:"Bruno", role:"Elite Four · Fighting", badge:"Battle 2",
team:[
 {m:"Onix", l:52, t:["Rock","Ground"], note:"Stealth Rock, Iron Tail, Earthquake. Rock/Ground is <b>4× weak to Water and Grass</b>."},
 {m:"Hitmonchan", l:52, t:["Fighting"], note:"Fire Punch, Ice Punch, Thunder Punch. Three coverage moves off a 35 Special Attack — they are physical, and they still only chip."},
 {m:"Hitmonlee", l:52, t:["Fighting"], note:"Brick Break, Feint, Rock Slide. Brick Break destroys Reflect and Light Screen if you were relying on either."},
 {m:"Poliwrath", l:52, t:["Water","Fighting"], note:"Waterfall, Body Slam, Superpower. Water/Fighting is 4× weak to nothing but takes 2× from Grass, Electric, Flying, Psychic and Fairy."},
 {m:"Machamp", l:53, t:["Fighting"], note:"Earthquake, Rock Slide, Superpower. 130 Attack. This is the one that actually threatens you."}
],
plan:[
 "<b>Psychic and Flying dismantle four of the five.</b> Charizard’s Air Slash or Heat Wave, Mr. Mime’s Psychic, or your partner’s <b>Floaty Fall</b> — 90 power physical Flying, 2× into Fighting.",
 "<b>Onix and Poliwrath both fold to Venusaur.</b> Grass is 4× on Onix and 2× on Poliwrath, and Venusaur outlives anything they throw.",
 "<b>Machamp is a 130-Attack physical wall-breaker.</b> Burn it — TM11 Will-O-Wisp from Viridian halves its damage for the rest of the fight — or remove it with a Psychic or Flying hit before it sets up.",
 "<b>Fairy is 2× into Fighting.</b> If you brought a Clefable or gave anything TM32 Dazzling Gleam, this is the room it earns its slot in.",
 "Do not send a Dark, Rock, Steel, Ice or Normal type. All five of those take 2× from the Fighting half of his team."
],
reward:"Straight through to Agatha."
}],
["boss",{
name:"Agatha", role:"Elite Four · Ghost", badge:"Battle 3",
team:[
 {m:"Arbok", l:53, t:["Poison"], note:"Glare, Crunch, Poison Jab. Glare paralyses regardless of type."},
 {m:"Gengar", l:53, t:["Ghost","Poison"], note:"Shadow Ball, Will-O-Wisp, Sludge Bomb. The Will-O-Wisp is aimed at your physical attacker."},
 {m:"Golbat", l:53, t:["Poison","Flying"], note:"Air Slash, Crunch, Quick Attack. Air Slash flinches — expect to lose turns."},
 {m:"Weezing", l:53, t:["Poison"], note:"Sludge Bomb, Shadow Ball, Thunderbolt. The Thunderbolt is for the Water type you would bring."},
 {m:"Gengar", l:54, t:["Ghost","Poison"], note:"Shadow Ball, Sludge Bomb, <b>Dazzling Gleam</b>. The Fairy move punishes the Dark answer you were about to bring."}
],
plan:[
 "<b>Every one of the five is part Poison, so Ground is 2× on four of them</b> — Golbat is the exception. A Snorlax with Earthquake, or a Sandslash, or a Dugtrio does most of this room on its own.",
 "<b>Psychic is 2× into Poison as well</b>, and both Gengar take it at full — Ghost does not resist Psychic. Mr. Mime, Kadabra or anything carrying TM40 Psychic.",
 "<b>Steel no longer resists Ghost or Dark.</b> If you were planning to wall the Shadow Balls with a Magneton or an Alolan Sandslash, that resistance was removed two generations ago and it will not save you.",
 "The second <b>Gengar carries Dazzling Gleam</b>, which is Fairy and 2× into Dark. Do not bring an Alolan Muk or a Persian expecting to sweep.",
 "<b>Normal and Fighting moves do literally nothing to either Gengar.</b> Snorlax’s Body Slam is a zero — that is what Earthquake is on it for."
],
reward:"Straight through to Lance."
}],
["boss",{
name:"Lance", role:"Elite Four · Dragon", badge:"Battle 4",
team:[
 {m:"Seadra", l:54, t:["Water"], note:"Hydro Pump, Dragon Pulse, Hyper Beam. Pure Water despite the room’s theme."},
 {m:"Aerodactyl", l:54, t:["Rock","Flying"], note:"Rock Slide, Earthquake, Hyper Beam. <b>4× weak to Electric</b> — Rock/Flying is the worst defensive typing in the room."},
 {m:"Gyarados", l:54, t:["Water","Flying"], note:"Waterfall, Iron Tail, Hyper Beam. Also <b>4× weak to Electric</b>."},
 {m:"Charizard", l:54, t:["Fire","Flying"], note:"Air Slash, Dragon Pulse, Hyper Beam. <b>4× weak to Rock</b>, 2× to Water and Electric."},
 {m:"Dragonite", l:55, t:["Dragon","Flying"], note:"Outrage, Fire Punch, Hyper Beam. <b>4× weak to Ice</b>, and Outrage is 120 power."}
],
plan:[
 "<b>Your partner Pikachu is the answer to this entire room.</b> Aerodactyl and Gyarados are both <b>4× weak to Electric</b>, Charizard is 2×, and Zippy Zap is a guaranteed critical hit at +2 priority. Three of five die before they act.",
 "<b>Lapras handles the Dragonite</b> — Ice Beam is 4× into Dragon/Flying, and Lapras’ 130 HP survives an Outrage if the Ice Beam somehow does not finish it.",
 "<b>Fairy is completely immune to Dragon.</b> A Clefable, or anything carrying TM32 Dazzling Gleam, cannot be touched by Dragonite’s Outrage or Seadra’s and Charizard’s Dragon Pulse at all. If you have one, this is its best room in the game.",
 "<b>Four of the five carry Hyper Beam</b> — 150 power, and then they lose their next turn recharging. Survive it and you get a free turn; plan the switch around that.",
 "Do not bring a Rock type expecting to punish the Flying half. Aerodactyl and Charizard both carry Earthquake or Rock Slide of their own, and Rock is the type this room is best equipped to beat."
],
reward:"Straight through to the Champion’s room."
}],
["boss",{
name:"Trace", role:"Champion · Pokémon Trainer", badge:"Champion battle",
team:[
 {m:"Pidgeot", l:56, t:["Normal","Flying"], note:"Quick Attack, Air Slash, <b>Heat Wave</b>. The Fire move is there for the Steel and Grass types you brought for the rest."},
 {m:"Vileplume", l:56, t:["Grass","Poison"], note:"Solar Beam, Reflect, Sludge Bomb. The Reflect doubles the length of the fight if you are hitting physically."},
 {m:"Marowak", l:56, t:["Ground"], note:"Fire Punch, Bonemerang, Brick Break. <b>Bonemerang hits twice</b>, which cuts through a Substitute."},
 {m:"Rapidash", l:56, t:["Fire"], note:"Flare Blitz, Quick Attack, Poison Jab. Flare Blitz recoils — it does a third of the work for you."},
 {m:"Slowbro", l:56, t:["Water","Psychic"], note:"Psychic, Surf, Light Screen. The second screen. Between this and Vileplume’s Reflect he can halve both your damage types."},
 {m:"Jolteon", l:57, t:["Electric"], note:"Thunder, Quick Attack, Pin Missile. <b>This is the Let’s Go, Pikachu! version of his team</b> — Eevee players face a Raichu here instead. 130 Speed and 110 Special Attack."}
],
plan:[
 "<b>Mega Evolve Charizard Y and lead with it.</b> 159 Special Attack, Fire is 2× into Vileplume, and Air Slash or Heat Wave answers four of the six. One Mega per battle — spend it here.",
 "<b>Lapras or your partner for the Marowak</b>: pure Ground takes 2× from Water, Grass and Ice, and Splishy Splash is 2× into it while Zippy Zap is a zero.",
 "<b>Jolteon is the last Pokémon and the fastest thing on the field.</b> Ground is a straight immunity to its Thunder — send Snorlax with Earthquake, or a Sandslash, and it cannot touch you.",
 "<b>TM13 Brick Break breaks Reflect and Light Screen on contact.</b> Between Vileplume and Slowbro he will put both up; one Brick Break removes whichever is standing.",
 "Venusaur is a poor lead here — Pidgeot’s Heat Wave, Rapidash’s Flare Blitz and Slowbro’s Psychic all hit it hard. Bring it out for the Marowak and the Slowbro only."
],
reward:"The Hall of Fame, the Champion title, and the ability to ride <b>Charizard, Aerodactyl or Dragonite</b> through the sky — which is also how you meet the legendary birds again."
}],
["do",[
 {at:"Indigo Plateau", t:"Buy <b>20 Full Restores and 10 Revives</b> at the mart.", sub:"The five battles run consecutively. Everything you heal with comes out of your bag."},
 {t:"Visit <b>Madame Memorial</b> by the Pokémon Center.", sub:"One Heart Scale teaches any Pokémon any move it can learn by level-up in its current form. Fix every move you regret before you go up."},
 {t:"Trade an Exeggutor to the Super Nerd for an <b>Alolan Exeggutor</b>.", sub:"Grass/Dragon, 125 Special Attack, immune to Ground. Repeatable."},
 {at:"Elite Four", t:"Beat <b>Lorelei</b> — Dewgong 51, Jynx 51, Cloyster 51, Slowbro 51, Lapras 52.", sub:"Electric through four of five. Carry Awakenings for Jynx's Lovely Kiss."},
 {t:"Beat <b>Bruno</b> — Onix 52, Hitmonchan 52, Hitmonlee 52, Poliwrath 52, Machamp 53.", sub:"Psychic and Flying. Burn the Machamp with Will-O-Wisp if it survives the first hit."},
 {t:"Beat <b>Agatha</b> — Arbok 53, Gengar 53, Golbat 53, Weezing 53, Gengar 54.", sub:"All five are part Poison: Ground and Psychic. Normal and Fighting do nothing at all to the Gengar."},
 {t:"Beat <b>Lance</b> — Seadra 54, Aerodactyl 54, Gyarados 54, Charizard 54, Dragonite 55.", sub:"Aerodactyl and Gyarados are 4× to Electric; Dragonite is 4× to Ice. Zippy Zap and Ice Beam."},
 {at:"Champion's room", t:"Beat <b>Trace</b> — Pidgeot, Vileplume, Marowak, Rapidash, Slowbro at 56, <b>Jolteon</b> at 57.", sub:"Mega Evolve Charizard Y. His last Pokémon is a Jolteon in this version, not a Raichu — Ground is immune to it."},
 {t:"Enter the <b>Hall of Fame</b>."}
]]
]});
