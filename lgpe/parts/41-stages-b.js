/* ===================== KANTO 07–12 ===================== */
STAGES.push({
id:"k07", ch:"kanto", tag:"Stage 07", place:"Route 11 · Diglett's Cave · Route 2 (east) · Pewter City",
title:"Diglett’s Cave, Light Up, and the loop back for everything Chop Down opened",
lede:"A short, unglamorous stage that exists to collect a Secret Technique and four things you walked past earlier. Do it properly now and you never have to come back.",
band:[{k:"Party level",v:"28 → 31"},{k:"Badges",v:"3"},{k:"Unlocks",v:"Light Up"}],
body:[
["p","Route 11 runs east out of Vermilion into the south end of Diglett’s Cave, which tunnels all the way under Kanto and comes out on the east side of Route 2 — the half of that route you could not reach before Chop Down."],
["catch",[
 {n:"Mr. Mime", t:["Psychic","Fairy"], where:"Route 11 — 5%", why:"<b>Psychic/Fairy in this game, not pure Psychic.</b> That gives it an immunity to Dragon and a resistance to Fighting and Dark on top of the Psychic half. 120 base Special Defense makes it a genuine special wall, and it is on Sabrina’s team so you will meet it again."},
 {n:"Diglett", t:["Ground"], where:"Diglett’s Cave — 85%", why:"<b>Catch a stack.</b> Dugtrio learns <b>Earthquake at level 29</b> by itself, which is far earlier than anything else you own gets it, and a spare Diglett is what the Lavender trade wants for an <b>Alolan Diglett</b> — Ground/Steel, and unavailable anywhere else."},
 {n:"Dugtrio", t:["Ground"], where:"Diglett’s Cave — 5%", why:"A pre-evolved catch is free levels. Note that a Dugtrio caught here is past level 29 and may already have Earthquake."},
 {n:"Drowzee", t:["Psychic"], where:"Route 11 — 25%", why:"Hypno at 26. A perfectly serviceable Psychic body if you would rather not chase the 5% Mr. Mime, and it learns Dream Eater by level-up."}
]],
["team","<b>Take the Light Up reward as soon as you surface on Route 2.</b> One of Oak’s aides is in the house by the cave mouth and hands your partner <b>Light Up</b> for having caught <b>ten different species</b> — a bar you cleared before Viridian Forest. It lights Rock Tunnel, which is the next stage and is otherwise navigated in the dark."],
["h","The Chop Down loop"],
["p","Chop Down opened four things behind you. None of them is far, and three of them are permanently missable if you forget."],
["loot",[
 {k:"Key", n:"Old Amber", where:"Pewter Museum — employee area, behind the small tree on the north-east hill", why:"<b>The one that people never go back for.</b> It becomes Aerodactyl at the Cinnabar Lab — Rock/Flying, 130 Speed, 105 Attack, and the second of the three post-game sky rides."},
 {k:"TM11", n:"Will-O-Wisp", where:"Viridian City — from the sleeping man in the south-west, behind a tree", why:"A guaranteed burn. It halves the target’s physical damage and chips it every turn — the cleanest way to neuter Bruno’s Machamp and Blue’s Tauros later."},
 {k:"Item", n:"Leaf Stone", where:"Route 2 east — south of the gate, past the first ledges", why:"Vileplume from a Gloom, or Victreebel on the Eevee version. Take it even if you are not running a Grass type; stones are a Pokédex requirement."},
 {k:"Item", n:"Great Ball ×3", where:"Route 2 east — north of Diglett’s Cave"},
 {k:"Item", n:"Super Potion", where:"Route 2 east — south of the second pair of ledges"},
 {k:"Key", n:"Light Up", where:"Route 2 — the house by Diglett’s Cave, for 10 species caught", why:"Secret Technique. Lights dark caves; costs no move slot."},
 {k:"Item", n:"Judge function", where:"Route 11 gate — from Oak’s aide, for 30 species caught", why:"<b>Unlocks the IV readout on every Pokémon’s summary screen.</b> This is how you find out whether the Snorlax you are about to spend an hour raising is worth it."}
]],
["lgpe","<b>Turn the Judge function on and use it.</b> Let’s Go has no Effort Values — those are replaced by <b>Awakening Values</b> that you feed with Candy — but it still has ordinary IVs, and a Pokémon caught at the end of a long Catch Combo comes with <b>guaranteed perfect IVs</b> in some stats. From here on, before you commit to raising something, check the Judge screen. A 31-Speed Dugtrio and a 0-Speed Dugtrio are different Pokémon."],
["do",[
 {at:"Route 11", t:"Speak to Oak’s aide in the east gate for the <b>Judge function</b>.", sub:"Needs 30 species. It adds an IV readout to every summary screen — use it before you invest in anything."},
 {t:"Catch a <b>Mr. Mime</b> (5%) and a couple of Drowzee while you are here.", sub:"Mr. Mime is Psychic/Fairy in this game, with 120 Special Defense. It is a real wall, not a novelty."},
 {at:"Diglett's Cave", t:"Catch <b>five or six Diglett</b> on the way through.", sub:"85% of the cave. One becomes an Alolan Diglett at the Lavender trade counter; the rest are Candy and experience."},
 {at:"Route 2", t:"Enter the house by the cave mouth and take <b>Light Up</b>.", sub:"Ten species caught. It lights Rock Tunnel, which you walk into next stage."},
 {t:"Chop the trees and take the <b>Leaf Stone</b>, the Great Balls and the Super Potion.", sub:"South of the gate, past the ledges. The Leaf Stone is a Pokédex requirement even if you never field a Grass type."},
 {at:"Pewter City", t:"Chop the tree on the museum’s north-east hill and take the <b>Old Amber</b>.", sub:"This is the single most-forgotten item in Kanto. It becomes Aerodactyl at the Cinnabar Lab, and Aerodactyl is one of your three sky mounts after the League."},
 {at:"Viridian City", t:"Chop the tree in the south-west and take <b>TM11 Will-O-Wisp</b> from the sleeping man.", sub:"A guaranteed burn halves physical damage for the rest of the fight. Save it for Bruno."},
 {at:"Cerulean City", t:"Chop the tree on the east side of town.", sub:"Trace offers to walk you here from Route 2 if you accept his invitation — take it, it saves the whole trip back through Mt. Moon."},
 {at:"Route 9", t:"Head east towards Rock Tunnel."}
]]
]});

STAGES.push({
id:"k08", ch:"kanto", tag:"Stage 08", place:"Route 9 · Route 10 · Rock Tunnel · Lavender Town",
title:"Rock Tunnel, a 1% Kangaskhan, and a tower you cannot climb yet",
lede:"A long dark cave with the best rare catch of the mid-game hidden in it, and a town where the plot stops dead until you have an item from Celadon.",
band:[{k:"Party level",v:"31 → 34"},{k:"Badges",v:"3"},{k:"Note",v:"Tower is gated"}],
body:[
["p","Rock Tunnel is pitch black without Light Up and merely inconvenient with it. Use it. Underneath the darkness it is a straightforward two-floor loop with a heavy trainer count and one genuinely valuable spawn."],
["catch",[
 {n:"Kangaskhan", t:["Normal"], where:"Rock Tunnel — 1%", why:"<b>Stop and hunt this.</b> Rock Tunnel is the only place in the game a Kangaskhan appears in the wild, it is fully evolved at level 18–23, and its Master Trainer is one of the 145 fights you will want later. Chain Geodude or Zubat to push the rare rate up."},
 {n:"Machop", t:["Fighting"], where:"Rock Tunnel — 10%", why:"Machoke at 28 and no further without a trade — Machamp is a trade evolution and it still is one here. Machoke is a fine Fighting body regardless, and Machamp’s Master Trainer is unavoidable, so catch several and find a trading partner eventually."},
 {n:"Cubone", t:["Ground"], where:"Rock Tunnel — 9%, and Pokémon Tower at 10%", why:"Marowak at 28. More importantly, a spare Marowak is what the Fuchsia trade wants for an <b>Alolan Marowak</b> — Fire/Ghost, and one of the better Pokémon in the game."},
 {n:"Rhyhorn", t:["Ground","Rock"], where:"Rock Tunnel — 10%", why:"Rhydon at 42. 130 Attack behind a Ground/Rock body; it is on Giovanni’s gym team and it is worth having your own."},
 {n:"Onix", t:["Rock","Ground"], where:"Rock Tunnel — 10%", why:"Ten times commoner here than in Mt. Moon. If you missed the 1% one, this is where you fix that."},
 {n:"Charmander", t:["Fire"], where:"Rock Tunnel — rare spawn", why:"A third chance at a Charmander, in a cave where you will be walking past hundreds of spawns anyway."}
]],
["h","Lavender Town"],
["warn","<b>Pokémon Tower stops you on the third floor and nothing you do will change that.</b> The ghost blocking the stairs cannot be identified without the <b>Silph Scope</b>, and the Silph Scope is in the Rocket Hideout under the Celadon Game Corner. Do the trainers on 1F and 2F, take the items you can reach, and come back in two stages. Do not spend an hour trying to get past it."],
["catch",[
 {n:"Alolan Diglett", t:["Ground","Steel"], where:"Trade a Diglett in the Lavender Pokémon Center — repeatable", why:"<b>Ground/Steel, and it exists nowhere else.</b> Alolan Dugtrio keeps Earthquake and adds a Steel typing that resists Fairy, Dragon, Rock and Ice. Repeatable, so trade every spare Diglett."},
 {n:"Gastly", t:["Ghost","Poison"], where:"Pokémon Tower 3F–6F — 70–75%", why:"You cannot reach these floors yet, but note the rate: Gastly is three-quarters of the tower. Haunter at 25, and Gengar is a trade evolution — the same wall as Machamp."}
]],
["loot",[
 {k:"Item", n:"Pinap Berry ×5", where:"Route 9 — hidden in the south-east corner, east of Hiker Alan", why:"Pinap Berries double the Candy a catch gives you. Save them for anything you intend to raise."},
 {k:"Item", n:"Poké Ball ×5", where:"Route 9 — middle of the route"},
 {k:"Item", n:"Pearl", where:"Rock Tunnel 1F — south-west corner"},
 {k:"Item", n:"Dire Hit", where:"Rock Tunnel B1F — north-east of Black Belt Dudley"},
 {k:"Item", n:"Great Ball ×3", where:"Rock Tunnel B1F — north-east corner"},
 {k:"Item", n:"Full Heal", where:"Rock Tunnel B1F — north-east section"},
 {k:"Item", n:"Formal Set", where:"Pokémon Tower 1F — from the old lady"},
 {k:"Item", n:"Pikachu Candy ×5", where:"Pokémon Tower 2F — reward for beating Coach Trainer Holly", why:"Species Candy raises any Awakening Value on that species. Five of them on your partner is a real stat gain."}
]],
["tip","Between Rock Tunnel’s north entrance and Lavender you will be ambushed by four Rocket Grunts and rescued by <b>Lorelei of the Elite Four</b>, who takes three of them herself. You only fight one. Nothing is missable here — just do not walk into it on a red team."],
["do",[
 {at:"Route 9", t:"Clear the trainers and take the hidden <b>Pinap Berry ×5</b> in the south-east, and the <b>Poké Ball ×5</b> in the middle of the route.", sub:"Pinap doubles Candy from a catch. Worth hoarding for Chansey and for anything you plan to raise."},
 {at:"Rock Tunnel", t:"Use <b>Light Up</b> before you go in.", sub:"Not mandatory, but the cave is genuinely unnavigable without it."},
 {t:"Hunt the 1% <b>Kangaskhan</b>.", sub:"This is the only wild Kangaskhan in the game. Build a Catch Combo on Geodude or Zubat first — 31 or more takes the rare-spawn rate to 50%."},
 {t:"Catch <b>Machop, Cubone, Rhyhorn and Onix</b> on the way through.", sub:"Cubone is the trade stock for an Alolan Marowak in Fuchsia. Machop is the Machamp line, which needs a trade partner eventually."},
 {t:"Take the Pearl on 1F, and the Dire Hit, Great Balls and Full Heal on B1F."},
 {at:"Route 10", t:"Beat the Rocket Grunt after <b>Lorelei</b> scatters the other three."},
 {at:"Lavender Town", t:"Trade a Diglett in the Pokémon Center for an <b>Alolan Diglett</b>.", sub:"Ground/Steel. Repeatable, and the typing appears nowhere else."},
 {at:"Pokémon Tower", t:"Clear 1F and 2F, then <b>turn around</b>.", sub:"Take the Formal Set from the old lady and beat Coach Trainer Holly for five Pikachu Candy. The ghost on 3F needs the Silph Scope, which is in Celadon."},
 {t:"Beat <b>Trace</b> on 2F.", sub:"Pidgeotto 27, Gloom 27, Jolteon 28 — his Eevee has evolved. Ground moves answer the Jolteon; nothing he owns is dangerous."},
 {at:"Route 8", t:"Head west out of Lavender towards Celadon."}
]]
]});

STAGES.push({
id:"k09", ch:"kanto", tag:"Stage 09", place:"Route 7 · Route 8 · Celadon City · Rocket Hideout",
title:"Rainbow Badge — Erika, the Rocket Hideout, and Sky Dash",
lede:"The biggest single stage in the game. A department store, a gym that judges your Pokémon on cuteness, an underground base with two spinner mazes, and at the end of it the technique that lets you stop walking everywhere.",
band:[{k:"Party level",v:"34 → 38"},{k:"Badge",v:"Rainbow"},{k:"Unlocks",v:"Silph Scope · Sky Dash"}],
body:[
["h","Routes 7 and 8, on the way in"],
["catch",[
 {n:"Arcanine", t:["Fire"], lg:true, where:"Routes 7 and 8 — 1%, Let’s Go, Pikachu! only", why:"<b>A fully evolved Arcanine in the wild, and this is the best rare hunt in the mid-game.</b> Chain Growlithe here — they are 19% of the grass — and at a combo of 31 the rare rate hits 50%. A caught Arcanine skips the entire Fire-Stone-timing problem."},
 {n:"Kadabra", t:["Psychic"], where:"Routes 7 and 8 — 1%", why:"Saves you evolving an Abra. Alakazam is still a trade evolution, so Kadabra is where a solo player stops — 120 Speed and 105 Special Attack is plenty."},
 {n:"Porygon", t:["Normal"], where:"Route 7 — rare spawn", why:"<b>Note this now.</b> Silph Co. gives you one free at level 34 in two stages, but Porygon is a rare spawn here and nowhere else in Kanto — a spare is a second Master Trainer entry and insurance."},
 {n:"Alolan Sandshrew", t:["Ice","Steel"], lg:true, where:"Trade a Sandshrew in the Celadon Pokémon Center — repeatable, Let’s Go, Pikachu! only", why:"<b>Ice/Steel is a typing no other Pokémon in the game has.</b> Alolan Sandslash has 120 Defense and 100 Attack. Eevee players trade for an Alolan Vulpix here instead."}
]],
["team","<b>Visit the Celadon Pokémon Center Move Tutor before the gym and take Floaty Fall.</b> Flying, physical, 90 power, 95 accuracy, 30% flinch — and it is <b>2× into Erika’s entire team</b>. Your partner’s Attack is 80, so a 90-power physical move is the hardest thing it can throw. This is the second of its three exclusive moves."],
["warn","<b>The Celadon Gym only admits Trainers with a “cute” Pokémon.</b> The Lass at the door wants to see one before she moves. Your <b>partner Pikachu</b> qualifies, so this gate costs you nothing — but it will stop you dead if you have somehow left it behind."],
["h","Celadon Department Store"],
["p","Five floors and a roof. The roof vending machines sell Fresh Water, Soda Pop and Lemonade — Lemonade is the cheapest healing per point in the game and there is no reason to buy Hyper Potions while it exists. The TM counter on 4F is where you fill the gaps in your movepool for money rather than for exploration."],
["loot",[
 {k:"Item", n:"Fire Stone", where:"Route 8 — inside the fenced tall grass, behind a small tree", why:"<b>This is your Arcanine stone.</b> Do not use it until Growlithe has Flare Blitz at 38."},
 {k:"Item", n:"Golden Pinap Berry", where:"Route 8 — often found by a walking Pokémon at the bush on the west side", why:"Golden Pinap is both a catch-rate boost and a Candy multiplier. This bush is one of the reliable sources."},
 {k:"TM12", n:"Facade", where:"Route 7 — reward for beating Coach Trainer Alpesh", why:"70 power, and it <b>doubles to 140 while the user is burned, poisoned or paralysed</b>. It is the answer to Koga’s Toxic stalling two stages from now."},
 {k:"Item", n:"Rare Candy", where:"Celadon City — near the north-west corner"},
 {k:"TM03", n:"Helping Hand", where:"Celadon Department Store 3F — from the man behind the counter", why:"Boosts an ally’s move by half. There are no double battles in the story, so this is an index entry rather than something you will ever select."},
 {k:"Item", n:"Nugget", where:"Celadon City — near the north-east corner"},
 {k:"TM53", n:"Mega Drain", where:"From Erika", why:"<b>75 power in Let’s Go, not the 40 it is in every other game</b> — the buff makes it functionally Giga Drain, and it still heals for half the damage dealt. Put it on Venusaur immediately; see the note below on why its level-up Grass moves are the wrong ones."},
 {k:"TM26", n:"Poison Jab", where:"Celadon City — from the man north of the pond", why:"Needs Sea Skim. Come back in stage 12."},
 {k:"TM20", n:"Dark Pulse", where:"Rocket Hideout B3F — south of the stairs from B2F", why:"80 power special Dark. <b>This is your Sabrina answer</b> — put it on Arcanine, whose 100 Special Attack turns it into a real threat."},
 {k:"TM05", n:"Rest", where:"Rocket Hideout B2F — centre of the northern spinner maze"},
 {k:"Key", n:"Lift Key", where:"Rocket Hideout B4F — thrown onto the overhead grating", why:"Send your partner up the vent from the chair to walk the pipes and fetch it. Without it the lift does not run and Giovanni is unreachable."},
 {k:"Key", n:"Silph Scope", where:"Rocket Hideout B4F — from Giovanni, after you beat him", why:"The item Pokémon Tower has been waiting for."},
 {k:"Key", n:"Sky Dash", where:"Celadon City — from the Rocker outside the Game Corner, after the Silph Scope", why:"Secret Technique. Flies you to anywhere you have already visited. This is the moment the game stops being a walking simulator."}
]],
["team","<b>Venusaur is a TM platform, not a level-up Pokémon.</b> Its level-up Grass moves — Vine Whip 45, Razor Leaf 55, Power Whip 120 — are all <b>physical</b>, and Venusaur has 82 Attack against <b>100 Special Attack</b>. The moves that match its stats are Petal Dance (which it learns free on evolving), <b>Mega Drain</b> from Erika, <b>TM52 Sludge Bomb</b> and <b>TM45 Solar Beam</b>. Evolve it the moment it hits 32 — Venusaur gains Petal Dance on evolution, so unlike Growlithe there is no reason to hold it back."],
["boss",{
name:"Erika", role:"Celadon City Gym · Grass", badge:"Rainbow Badge",
team:[
 {m:"Tangela", l:33, t:["Grass"], note:"Mega Drain, Sleep Powder, Bind. Sleep Powder is the only real threat — it is 75% accurate and sleep lasts."},
 {m:"Weepinbell", l:33, t:["Grass","Poison"], note:"Mega Drain, Poison Jab. Poison Jab is physical and hurts if you lead something frail."},
 {m:"Vileplume", l:34, t:["Grass","Poison"], note:"Mega Drain, <b>Moonblast</b>. Moonblast is Fairy — 95 power special — and it is the move people are not expecting from a Grass gym."}
],
plan:[
 "<b>Lead Charmeleon or Charizard.</b> Fire is 2× on all three, and Ember/Heat Wave off a 109 Special Attack ends this gym in three turns.",
 "<b>Floaty Fall on your partner is 2× on everything she owns</b>, at 90 power off an 80 Attack, with a 30% flinch. Take it from the Celadon tutor before you walk in.",
 "Two of her three are <b>Grass/Poison</b>, which means Psychic is also 2× — a Kadabra or Mr. Mime does the same job if you have no Fire.",
 "Do not bring a Water or Ground type. Both are resisted by Grass and neither of them threatens back.",
 "<b>Bring Awakenings.</b> Tangela’s Sleep Powder is the only way this fight goes wrong, and Vileplume’s Moonblast punishes a Fighting or Dark answer."
],
reward:"TM53 Mega Drain, the Rainbow Badge, and obedience up to level 50."
}],
["h","The Rocket Hideout"],
["p","Behind the poster in the Game Corner, four floors down, two spinner-tile mazes and a Grunt who throws the Lift Key onto the overhead grating out of spite. Send your partner up through the vent — move the blue chair under it first — and walk it along the pipes to retrieve the key. Jessie and James are guarding the last room and hear it moving, but mistake it for Meowth’s stomach."],
["boss",{
name:"Giovanni", role:"Rocket Hideout · Ground", badge:"Silph Scope",
team:[
 {m:"Persian", l:35, t:["Normal"], note:"Slash, Feint, Fake Out. <b>Fake Out flinches you on turn one</b>, so expect to lose your opening move."},
 {m:"Rhyhorn", l:35, t:["Ground","Rock"], note:"Drill Run, Take Down, Megahorn, Rock Throw. Ground/Rock is <b>4× weak to both Water and Grass</b>."}
],
plan:[
 "<b>Venusaur ends the Rhyhorn in one move</b> — Grass is 4× into Ground/Rock. Mega Drain heals you back up while it does it.",
 "Persian has no super-effective move against anything reasonable and 65 base HP. Any Fighting move removes it; your partner’s Double Kick still works.",
 "Do not open with a slow setup turn. Fake Out is guaranteed to flinch on the first turn Persian is out, so your lead simply loses that turn.",
 "This is the same Giovanni you fight twice more — once in Silph Co. and once as the eighth Gym Leader. His team grows each time but the shape does not change."
],
reward:"The <b>Silph Scope</b>, which unlocks the top of Pokémon Tower — and, once you have it, the Rocker outside the Game Corner teaches your partner <b>Sky Dash</b>."
}],
["do",[
 {at:"Route 8", t:"Chop into the fenced grass and take the <b>Fire Stone</b>.", sub:"Hold it. Growlithe wants to reach level 38 and Flare Blitz before you use it."},
 {t:"Chain <b>Growlithe</b> (19%) and hunt the 1% <b>Arcanine</b>.", sub:"A wild Arcanine is fully evolved and skips the stone-timing problem entirely. At a combo of 31+ the rare rate is 50%."},
 {t:"Work the west-side bush with a walking Pokémon for a <b>Golden Pinap Berry</b>.", sub:"Golden Pinap is both a catch-rate boost and a Candy multiplier, and it cannot be bought."},
 {at:"Route 7", t:"Beat <b>Coach Trainer Alpesh</b> for <b>TM12 Facade</b>.", sub:"70 power that doubles to 140 while you are burned, poisoned or paralysed. Remember it when you reach Koga."},
 {t:"Watch for the <b>Porygon</b> rare spawn.", sub:"Silph Co. gives you one free in two stages, but this is the only place a second one exists."},
 {at:"Celadon Pokémon Center", t:"Learn <b>Floaty Fall</b> from the Move Tutor.", sub:"Flying, physical, 90 power, 30% flinch — and 2× into every Pokémon Erika owns."},
 {t:"Trade a Sandshrew for an <b>Alolan Sandshrew</b>.", sub:"Ice/Steel. No other Pokémon in the game has that typing. Repeatable."},
 {at:"Celadon City", t:"Take the <b>Tea</b> from Brock outside the Condominiums.", sub:"He also hands over Pewter Crunchies. The Tea is what gets you past the Saffron City guards two stages from now — do not skip this conversation."},
 {t:"Shop the <b>Department Store</b>: Lemonade on the roof, TMs on 4F, evolution stones on 4F.", sub:"Lemonade is the cheapest healing in the game by a wide margin. Stop buying Hyper Potions."},
 {t:"Take the Rare Candy in the north-west and the Nugget in the north-east."},
 {at:"Celadon Gym", t:"Show the Lass your <b>partner Pikachu</b>, then beat <b>Erika</b>.", sub:"Tangela 33, Weepinbell 33, Vileplume 34. Vileplume’s Moonblast is Fairy — do not lead a Dark or Fighting type."},
 {at:"Rocket Hideout", t:"Beat the Grunt by the poster in the Game Corner and press the switch underneath."},
 {t:"Clear <b>B1F to B3F</b>, taking <b>TM20 Dark Pulse</b> and <b>TM05 Rest</b>.", sub:"Dark Pulse is your Sabrina answer — put it on Arcanine, which has 100 Special Attack."},
 {at:"Rocket Hideout B4F", t:"Move the blue chair under the vent and send your partner along the pipes for the <b>Lift Key</b>.", sub:"The Grunt throws it onto the overhead grating. There is no other way up."},
 {t:"Beat <b>Jessie and James</b>, then <b>Giovanni</b>, and take the <b>Silph Scope</b>.", sub:"Persian 35 and Rhyhorn 35. Venusaur removes the Rhyhorn in one move — Grass is 4× on Ground/Rock."},
 {at:"Celadon City", t:"Speak to the <b>Rocker outside the Game Corner</b> and learn <b>Sky Dash</b>.", sub:"He only appears once you hold the Silph Scope. This is Fly, it costs no move slot, and it changes how the rest of the game feels."},
 {at:"Lavender Town", t:"<b>Sky Dash</b> back to Lavender.", sub:"You now have the Silph Scope. The tower is open."}
]]
]});

STAGES.push({
id:"k10", ch:"kanto", tag:"Stage 10", place:"Pokémon Tower · Lavender Town",
title:"Pokémon Tower, Marowak, and the Poké Flute",
lede:"Four floors of Gastly, one ghost that turns out not to be a ghost, and the flute that unblocks the entire south of Kanto. Short, and entirely mandatory.",
band:[{k:"Party level",v:"38 → 40"},{k:"Badges",v:"4"},{k:"Unlocks",v:"Poké Flute"}],
body:[
["p","With the Silph Scope in your bag the tower opens all the way to the top. Floors 3 to 6 are three-quarters Gastly, which makes this the densest Ghost hunting in the game and the only sensible place to build that part of the Pokédex."],
["catch",[
 {n:"Gastly", t:["Ghost","Poison"], where:"Pokémon Tower 3F–6F — 70–75%", why:"<b>Catch a handful.</b> Haunter at 25 comes free from levelling, but Gengar is a <b>trade evolution</b> and it still is one in this game — so keep spares against the day you find someone to trade with. Gengar’s Master Trainer is one of the 145."},
 {n:"Haunter", t:["Ghost","Poison"], where:"Pokémon Tower 3F–6F — 5–10%", why:"Skips the levelling. Same trade wall for Gengar, but a wild Haunter at level 27–32 is immediately usable."},
 {n:"Cubone", t:["Ground"], where:"Pokémon Tower 3F–6F — 10%", why:"If you did not get one in Rock Tunnel, get one here. Marowak at 28, and a spare Marowak becomes an <b>Alolan Marowak</b> at the Fuchsia trade counter — Fire/Ghost, 110 Defense, and a genuinely good Pokémon."},
 {n:"Chansey", t:["Normal"], where:"Pokémon Tower 3F–6F — rare spawn", why:"The single biggest experience payout in the game, and it appears as a rare spawn on almost every route and in most caves. Feed it a Razz Berry and throw Ultra Balls — it flees easily."}
]],
["lgpe","<b>Ghost is not what it was in Generation I.</b> Ghost moves hit Psychic for 2× and are resisted by Dark; Normal and Fighting cannot touch a Ghost type at all. Just as importantly, <b>Steel no longer resists Ghost or Dark</b> — that resistance was removed in Generation VI. If you learned Kanto on the old games, this is one of the corrections that will actually cost you a fight."],
["warn","<b>The Marowak on 6F is not a battle.</b> The Silph Scope reveals it, its spirit is calmed, and Trace takes the Cubone home. There is nothing to catch and nothing to lose — do not burn a Master Ball’s worth of anxiety on it."],
["loot",[
 {k:"Item", n:"Elixir", where:"Pokémon Tower 2F — south-west corner"},
 {k:"Item", n:"Pikachu Candy ×5", where:"Pokémon Tower 2F — reward for beating Coach Trainer Holly", why:"Species Candy raises any one Awakening Value on that species. Feed all five to your partner."},
 {k:"TM04", n:"Teleport", where:"Pokémon Tower 4F — south-west of the centre", why:"<b>Teleport was reworked for this game.</b> It is no longer an escape button: it now switches the user out at <b>−6 priority</b>, so it always goes last, and it fails if the user is your only healthy Pokémon. Take it for the index rather than for a move slot."},
 {k:"Item", n:"Star Piece", where:"Pokémon Tower 3F — hidden in the north-east corner"},
 {k:"Item", n:"Ultra Ball ×3", where:"Pokémon Tower 5F — near the north-east wall"},
 {k:"Item", n:"Rare Candy", where:"Pokémon Tower 6F — south of the Marowak scene"},
 {k:"Key", n:"Poké Flute", where:"Pokémon House — from Mr. Fuji", why:"Wakes both sleeping Snorlax. Without it the whole southern half of Kanto stays closed."},
 {k:"Item", n:"Great Ball ×20", where:"Lavender Town — from the man near the Route 8 entrance, after the Cubone is home"}
]],
["tip","Jessie and James ambush you on the top floor before Mr. Fuji. Their Arbok and Weezing have evolved since Mt. Moon. Both are Poison — <b>Psychic and Ground</b> answer them, and your partner’s Zippy Zap does nothing special here, so lead with Kadabra, Mr. Mime, Sandslash or Dugtrio."],
["do",[
 {at:"Pokémon Tower 2F", t:"Take the <b>Elixir</b> in the south-west corner."},
 {at:"Pokémon Tower 3F", t:"Catch <b>Gastly and Haunter</b> — they are three-quarters of every floor.", sub:"Keep two or three spare Gastly. Gengar is a trade evolution and it still is one here."},
 {t:"Take the hidden Star Piece in the 3F north-east corner."},
 {at:"Pokémon Tower 5F", t:"Take the Ultra Balls near the north-east wall and the Hyper Potion to the west."},
 {at:"Pokémon Tower 4F", t:"Take <b>TM04 Teleport</b> south-west of the centre of the floor.", sub:"Reworked for this game: it switches the user out at −6 priority rather than ending a battle. An index entry more than a move."},
 {at:"Pokémon Tower 6F", t:"Walk into the ghost and let the <b>Silph Scope</b> reveal the <b>Marowak</b>.", sub:"There is no battle and nothing to catch. Trace takes the Cubone home."},
 {t:"Take the Rare Candy to the south."},
 {at:"Pokémon Tower 7F", t:"Beat <b>Jessie and James</b> at the altar.", sub:"Arbok and Weezing, both Poison. Psychic and Ground moves; not a job for your partner."},
 {at:"Pokémon House", t:"Walk Mr. Fuji home and take the <b>Poké Flute</b>.", sub:"This is the item that wakes both Snorlax and opens the southern half of Kanto."},
 {t:"Take the <b>20 Great Balls</b> from the man near the Route 8 entrance."},
 {at:"Saffron City", t:"Sky Dash or walk west, and show the guards the <b>Tea</b> Brock gave you in Celadon.", sub:"Without the Tea the gate guards will not let you into Saffron. If you skipped Brock outside the Condominiums, go back for it now."}
]]
]});

STAGES.push({
id:"k11", ch:"kanto", tag:"Stage 11", place:"Saffron City · Silph Co. · Fighting Dojo · Saffron Gym",
title:"Marsh Badge — Silph Co., the Master Ball, and Sabrina",
lede:"Eleven floors of warp panels, the best item in the game at the top of them, and then a gym that will not open its doors to a party under level 45.",
band:[{k:"Party level",v:"40 → 45"},{k:"Badge",v:"Marsh"},{k:"Unlocks",v:"Master Ball"}],
body:[
["warn","<b>The Saffron Gym requires a Pokémon of level 45 or higher to enter.</b> This is the hardest gate in the game and it will stop you if you have been rushing. Silph Co. is eleven floors of trainers — do all of them, and you will clear the bar on the way out. If you are still short, the Fighting Dojo next door and the Route 7 and 8 trainers are the top-up."],
["h","Silph Co."],
["p","Warp panels connect the floors in a deliberately confusing order. The route below is the short one. Trace joins you for a Multi Battle against Archer on 5F, which is where the Card Key comes from, and Giovanni is waiting on 11F."],
["catch",[
 {n:"Porygon", t:["Normal"], where:"Silph Co. — free from the office worker on 7F, at level 34", why:"<b>Take it.</b> Porygon has exactly two homes in this game — this gift and a rare spawn on Route 7 — and Porygon2 requires a trade, so the base form is what you keep. It is also a Master Trainer fight later."},
 {n:"Hitmonlee", t:["Fighting"], where:"Fighting Dojo — choose one, at level 30", why:"<b>Take Hitmonlee over Hitmonchan.</b> 120 Attack against 105, and it arrives with Brick Break already learnt at 20, Jump Kick at 30 and High Jump Kick at 45. Hitmonchan’s elemental punches look wider but run off a 35 Special Attack — its own stats fight its moveset."},
 {n:"Alolan Raichu", t:["Electric","Psychic"], where:"Trade a Raichu in the Saffron Pokémon Center — repeatable", why:"<b>Electric/Psychic exists nowhere else.</b> You need a Raichu to trade — evolve the wild Pikachu you caught in Viridian Forest with a Thunder Stone. Your partner cannot evolve, so it is safe."}
]],
["team","<b>Put TM20 Dark Pulse on Arcanine before you fight Sabrina.</b> Dark is 2× into Psychic, Arcanine has 100 Special Attack, and Dark Pulse is 80 power special with a flinch chance. That single TM, from the Rocket Hideout floor you cleared last stage, is the difference between a comfortable gym and a slog — because Kanto simply does not give you a good Dark type."],
["loot",[
 {k:"TM42", n:"Self-Destruct", where:"Silph Co. 2F — from the woman in the north-west room"},
 {k:"Key", n:"Card Key", where:"Silph Co. 5F — from Trace, after the Multi Battle against Archer", why:"Opens every locked door in the building. Without it most of the tower is closed."},
 {k:"TM54", n:"Flash Cannon", where:"Silph Co. 5F — south-west room", why:"80 power special Steel. <b>Steel is 2× into Fairy, Rock and Ice</b> — and note that it no longer resists Ghost or Dark on defence."},
 {k:"TM34", n:"Dragon Pulse", where:"Silph Co. 7F — eastern room", why:"85 power special Dragon. Hold it for Lance; Dragon is 2× into Dragon and nothing else you meet before then."},
 {k:"TM37", n:"Flamethrower", where:"Silph Co. 10F — south-west room", why:"90 power special Fire. Charizard has 109 Special Attack and does not learn it until level 54 — this TM saves you twenty levels."},
 {k:"Item", n:"Master Ball", where:"Silph Co. 11F — from the president, after Giovanni", why:"<b>One only, and it never misses.</b> Save it for Mewtwo. Every other legendary in the game can be worn down and caught with Golden Razz Berries and Ultra Balls; Mewtwo is level 70 with the worst catch rate in Kanto."},
 {k:"Item", n:"Rare Candy", where:"Silph Co. 7F and 10F — one on each"},
 {k:"TM33", n:"Calm Mind", where:"From Sabrina", why:"Raises Special Attack and Special Defense together. Good on Venusaur and Charizard; wasted on anything physical."}
]],
["boss",{
name:"Giovanni", role:"Silph Co. 11F · Ground", badge:"Second battle",
team:[
 {m:"Persian", l:39, t:["Normal"], note:"Slash, Feint, Fake Out, <b>Play Rough</b>. The Fairy move is new and it is 2× into a Fighting or Dark lead."},
 {m:"Rhyhorn", l:39, t:["Ground","Rock"], note:"Drill Run, Take Down, Megahorn, Rock Throw. Still 4× weak to Water and Grass."},
 {m:"Nidoqueen", l:39, t:["Poison","Ground"], note:"Crunch, Body Slam. Poison/Ground is 2× weak to Water, Ice, Ground and Psychic — and Crunch punishes a Psychic lead."}
],
plan:[
 "<b>Venusaur again.</b> Grass is 4× into Rhyhorn and 2× into Nidoqueen, and Poison-type Venusaur takes Nidoqueen’s Ground move at neutral rather than double.",
 "Do not send a Fighting type at Persian this time — <b>Play Rough</b> is new, it is Fairy, and it is 2× on Fighting and Dark.",
 "Nidoqueen’s <b>Crunch</b> is 2× into Psychic, so keep Kadabra and Mr. Mime out of this one.",
 "He is 39s against your 40s. This is a checkpoint, not a wall — the real Giovanni fight is the eighth gym."
],
reward:"The Silph Co. president hands over the <b>Master Ball</b>. Do not spend it here."
}],
["boss",{
name:"Sabrina", role:"Saffron City Gym · Psychic", badge:"Marsh Badge",
team:[
 {m:"Mr. Mime", l:43, t:["Psychic","Fairy"], note:"Psychic, Reflect, Light Screen, Double Slap. <b>It is Psychic/Fairy here</b> — Dark is neutral, not super effective — and it sets both screens."},
 {m:"Slowbro", l:43, t:["Water","Psychic"], note:"Psychic, Yawn, Surf, Calm Mind. Yawn puts you to sleep a turn later; Calm Mind makes it worse the longer it lives."},
 {m:"Jynx", l:43, t:["Ice","Psychic"], note:"Psychic, Lovely Kiss, Ice Punch. Lovely Kiss is a 75%-accurate sleep and it is the fight-loser."},
 {m:"Alakazam", l:44, t:["Psychic"], note:"Psychic, Night Shade. 135 Special Attack and 120 Speed — but only two moves and paper defences."}
],
plan:[
 "<b>Lead Arcanine with Dark Pulse.</b> Dark is 2× into three of the four, off a 100 Special Attack, and Arcanine’s 95 Speed outruns everything except Alakazam.",
 "<b>Kill Mr. Mime first.</b> It is not a threat itself, but Reflect and Light Screen make the other three take twice as long, and Mr. Mime being <b>part Fairy</b> means your Dark move is only neutral into it. Hit it with your hardest physical attack instead — Floaty Fall from your partner is neutral but enormous, and Mr. Mime has 65 Defense.",
 "<b>TM13 Brick Break destroys Reflect and Light Screen on hit.</b> If you have it, one Brick Break undoes the whole gym’s strategy.",
 "Bring <b>Awakenings, and more than one.</b> Jynx’s Lovely Kiss and Slowbro’s Yawn both put you to sleep, and a sleeping lead against four Psychics is how this gym is lost.",
 "Alakazam has 55 HP and 45 Defense. Anything physical that connects removes it — your partner’s Zippy Zap moves first at +2 priority and always crits, which is exactly the answer to a 120-Speed glass cannon."
],
reward:"TM33 Calm Mind, the Marsh Badge, and obedience up to level 70."
}],
["do",[
 {at:"Saffron City", t:"Show the gate guards the <b>Tea</b> from Brock.", sub:"No Tea, no Saffron. It is handed over outside the Celadon Condominiums."},
 {t:"Show the <b>Copycat</b> in the north-west house a <b>Clefairy</b> for <b>TM08 Substitute</b>.", sub:"Any Clefairy — the Mt. Moon one is fine."},
 {t:"Speak to <b>Mr. Psychic</b> in the south-east house for <b>TM40 Psychic</b>.", sub:"90 power special Psychic, free, no conditions. One of the best TMs in the game handed over for a conversation."},
 {t:"Trade a Raichu in the Pokémon Center for an <b>Alolan Raichu</b>.", sub:"Evolve the wild Viridian Forest Pikachu with a Thunder Stone first. Your partner cannot evolve, so it is never at risk."},
 {at:"Silph Co.", t:"Clear <b>every floor</b> — the trainer count here is what gets you to level 45.", sub:"The Saffron Gym door check is level 45. Silph Co. is where you clear it."},
 {t:"Take <b>TM42 Self-Destruct</b> on 2F, then beat <b>Archer</b> in the Multi Battle with Trace on 5F for the <b>Card Key</b>.", sub:"The Card Key opens every locked door in the building."},
 {t:"Take <b>TM54 Flash Cannon</b> on 5F, <b>TM34 Dragon Pulse</b> on 7F and <b>TM37 Flamethrower</b> on 10F.", sub:"Flamethrower on Charizard is twenty levels of shortcut — it does not learn it until 54."},
 {t:"Take the <b>Rare Candy</b> on 7F and again on 10F.", sub:"Two of the easiest Rare Candies in the game, both in plain sight."},
 {t:"Take the free <b>Porygon</b> from the office worker on 7F.", sub:"Level 34. Porygon has exactly two sources in the game and this is the reliable one."},
 {at:"Silph Co. 11F", t:"Beat <b>Giovanni</b> and take the <b>Master Ball</b> from the president.", sub:"Persian 39, Rhyhorn 39, Nidoqueen 39. Save the ball for Mewtwo — nothing before it needs one."},
 {at:"Fighting Dojo", t:"Beat the Karate Master and take <b>Hitmonlee</b>.", sub:"120 Attack against Hitmonchan’s 105, and Hitmonchan’s elemental punches run off a 35 Special Attack. Take the kicker."},
 {at:"Saffron Gym", t:"Show a level-45 Pokémon, then beat <b>Sabrina</b>.", sub:"Mr. Mime 43, Slowbro 43, Jynx 43, Alakazam 44. Remove Mr. Mime first to stop the screens; carry Awakenings."},
 {at:"Kanto", t:"Head for <b>Route 16</b>, west of Celadon.", sub:"There are two routes south to Fuchsia. Pokémon Road (16 → 17 → 18) is the one with the first Snorlax on it."}
]]
]});
