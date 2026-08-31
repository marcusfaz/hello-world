/* ===================== POST-GAME — THE LEGENDARIES ===================== */

STAGES.push({
id:"p01", ch:"post", tag:"Stage 16", place:"Littleroot Town · Route 114 · Route 119",
title:"The National Dex, and what the Hall of Fame actually opens",
lede:"Beating the Elite Four does not upgrade your Pokédex by itself. You have to go home and walk out of your own front door.",
band:[{k:"Party level",v:"62 → 66"},{k:"Needs",v:"Hall of Fame"},{k:"Unlocks",v:"National Dex · Frontier"}],
body:[
["warn","<b>The National Pokédex trigger is not the Hall of Fame — it is going home afterwards.</b> After the credits, save and reload, then <b>Fly to Littleroot and step out of your front door</b>. Professor Birch and your rival are waiting; Birch walks you both to the lab and upgrades the Pokédex to National Mode. If you skip this and go straight to the Frontier, your dex stays regional and several evolutions will keep refusing to happen."],
["h","What the upgrade actually changes"],
["ul",[
 "<b>Cross-generational evolutions start working.</b> Before the upgrade, a Pokémon like Golbat will <i>try</i> to evolve into Crobat and fail. After it, they go through.",
 "<b>You can trade with FireRed, LeafGreen and Pokémon XD.</b> Before it you can only trade with Ruby, Sapphire and another Emerald, and only Pokémon native to Hoenn.",
 "It does <b>not</b> unlock the Johto starter on its own — that needs the <b>Hoenn</b> Dex complete, which is a separate and much longer job. See the dex chapter.",
 "The <b>Battle Frontier</b> opens independently, via the S.S. Tidal from Lilycove or Slateport harbour. Scott meets you there."
]],
["h","The post-game checklist"],
["do",[
 {at:"Littleroot Town", t:"Save, reload, and <b>walk out of your front door</b>", sub:"Birch and your rival escort you to the lab. This is the National Dex trigger."},
 {t:"Take the <b>National Pokédex</b> upgrade from Birch"},
 {at:"Route 114", t:"Go into the <b>Fossil Maniac's house</b> and through the back", sub:"The <b>Desert Underpass</b> only opens after the National Dex."},
 {t:"Take the fossil you did <b>not</b> take at Mirage Tower", sub:"If you took the Root Fossil, the Claw Fossil is here. Revive it at Devon in Rustboro for the other dex entry."},
 {t:"Catch a <b>Ditto</b>", sub:"50% in the Underpass, and <b>this is the only place in Emerald it appears</b>. Ditto breeds with anything, which is how you fill the baby-form dex entries."},
 {at:"Route 119", t:"Start the <b>Feebas</b> hunt if you want Milotic", sub:"Six of Route 119's fishing tiles hold Feebas, and which six is derived from the trendy phrase in Dewford Hall. Set an easy phrase, fish every tile with the Super Rod, and expect an hour."},
 {at:"Lilycove Harbor", t:"Board the <b>S.S. Tidal</b> to the Battle Frontier", sub:"Scott is waiting at the entrance. Take <b>TM49 Snatch</b> from the man in the north-easternmost cabin on the way, and the hidden <b>Leftovers</b> in the storage trash can."},
 {at:"Meteor Falls", t:"Surf and Waterfall to the back rooms", sub:"Now that you have Waterfall, the sealed parts of Meteor Falls open."},
 {t:"Catch a <b>Bagon</b>", sub:"25% in the back small room. <b>Salamence at 50 has 135 Attack and Intimidate</b> — the strongest non-legendary Dragon in the game and worth the climb from Bagon at Lv 25."},
 {t:"Take <b>TM02 Dragon Claw</b> and <b>TM23 Iron Tail</b>", sub:"Dragon Claw is 80 power and — this being Generation III — <b>special</b>, because Dragon is a special type here. Put it on a Kingdra or an Altaria, not on a Salamence."},
 {t:"Beat <b>Steven</b> deep in Meteor Falls", sub:"See the dossier below. His six are at Lv 75–78, exactly twenty levels above his Ruby and Sapphire Champion team."},
 {at:"Anywhere", t:"Start <b>Match Call</b> Gym Leader rematches", sub:"Emerald's Match Call replaced the PokéNav's Trainer's Eyes. Leaders will ring you for rematches, and their rematch teams are <b>Double Battles with Pokémon that do not exist in Hoenn</b> — Roxanne brings Kabutops and Aerodactyl, Wattson brings Electrode and Magneton lines, Juan brings Poliwrath. It is the best experience in the game."}
]],
["boss",{name:"Steven", role:"Former Champion · Steel", badge:"Meteor Falls", team:[
 {m:"Skarmory", l:77, t:["Steel","Flying"], note:"<b>Spikes</b> — it will lay them and punish every switch you make afterwards. Toxic puts you on a timer. Immune to Ground."},
 {m:"Claydol", l:75, t:["Ground","Psychic"], note:"<b>Levitate.</b> Reflect and Light Screen — it is here to make the rest of his team unkillable for five turns."},
 {m:"Aggron", l:76, t:["Steel","Rock"], note:"Sturdy. <b>Thunder, Earthquake, SolarBeam and Dragon Claw</b> — full coverage off 110 Attack. Fighting and Ground are both 4× on it."},
 {m:"Cradily", l:76, t:["Rock","Grass"], note:"Suction Cups. <b>Ingrain</b> heals it every turn and stops it being switched. Giga Drain heals it further."},
 {m:"Armaldo", l:76, t:["Rock","Bug"], note:"Battle Armor — no critical hits against it. 125 Attack. <b>Rock is 4× on it.</b>"},
 {m:"Metagross", l:78, t:["Steel","Psychic"], note:"Holds a <b>Sitrus Berry</b>. Clear Body, 135 Attack, and <b>Meteor Mash, Earthquake, Psychic and Shadow Ball</b>. This is the strongest single Pokémon any trainer fields in the game."}
], plan:[
 "<b>Bring Fighting and bring a lot of it.</b> Four of his six are Steel or Rock, and Fighting is 2× or 4× on every one of them. A Lv 70+ Hariyama or Breloom does more work here than anything else you own.",
 "<b>Ground handles the Steel half.</b> Earthquake is 4× on Aggron and 2× on Metagross — but Skarmory is immune and Claydol has Levitate, so it is not a universal answer.",
 "<b>Kill Claydol early.</b> Reflect and Light Screen together halve everything you do for five turns, which is long enough for Metagross to set up a sweep.",
 "<b>Skarmory's Spikes make switching expensive.</b> Decide your lead and stay in — or kill Skarmory first, which also removes the Toxic route.",
 "<b>Cradily's Ingrain means it cannot be forced out and heals every turn.</b> You have to out-damage it. Ice, Fighting, Steel and Bug are all 2× on Rock/Grass.",
 "<b>Metagross is the real fight.</b> 135 Attack, 130 Defence, and Meteor Mash. Fire is 2× and Ground is 2×; Fighting is 2×. It has a Sitrus Berry so plan for one extra hit.",
 "<b>He is Lv 75–78 and you are probably Lv 65.</b> This is optional and it is meant to be hard. Come back at 70+ with a Rayquaza if you want it to be comfortable."
], reward:"Bragging rights, ₽7,800, and a rematch that resets — you can fight him again."}]
]});

STAGES.push({
id:"p02", ch:"post", tag:"Stage 17", place:"Route 134 · Sealed Chamber · Desert Ruins · Island Cave · Ancient Tomb",
title:"The Regi trio — the Braille puzzle Emerald changed",
lede:"Three legendary golems behind three doors, and every single step of the puzzle is different in Emerald than in Ruby and Sapphire. Get any of it from memory and you will stand in an empty room.",
band:[{k:"Party level",v:"66 → 70"},{k:"Needs",v:"Dive · Dig · Wailord · Relicanth"},{k:"Catches",v:"3 legendaries"}],
body:[
["warn","<b>Every part of this puzzle changed in Emerald.</b> The party order is reversed, and all three chamber puzzles use different actions than Ruby and Sapphire did. If a guide tells you to put Relicanth first, wait two minutes in the Island Cave, or use Fly in the Ancient Tomb, it is describing Ruby and Sapphire. The Emerald versions are below."],
["h","What you need in the bag and the party before you start"],
["ul",[
 "A <b>Wailord</b> and a <b>Relicanth</b>. Any level, any state — they just have to be in the party in the right slots.",
 "A Pokémon that knows <b>Dig</b> — TM28, from the Fossil Maniac's brother on Route 114.",
 "A Pokémon that knows <b>Dive</b> — HM08, from Steven in Mossdeep.",
 "A Pokémon that knows <b>Rock Smash</b> — HM06, from the Mauville house.",
 "A Pokémon that knows <b>Flash</b> — HM05, from the Granite Cave Hiker.",
 "<b>Surf</b>, to get anywhere at all.",
 "About twenty <b>Ultra Balls</b> per golem. All three are Lv 40 and none of them are quick catches."
]],
["h","Step one — open the Sealed Chamber"],
["do",[
 {at:"Route 134", t:"Surf west along Route 134 through the currents", sub:"The currents push you east. Fight them by surfing against the flow on the northern edge."},
 {t:"<b>Dive</b> at the dark patch on Route 134"},
 {t:"Read the Braille underwater — it says <b>GO UP HERE</b>", sub:"Surface at that exact spot. Surfacing anywhere else just puts you back on Route 134."},
 {at:"Sealed Chamber (first room)", t:"Read the Braille on the back wall — it says <b>DIG HERE</b>"},
 {t:"Stand in front of the back wall and use <b>Dig</b>", sub:"This opens the doorway into the second room. The ten mounds around you spell out the Braille alphabet — they are a decoder, not part of the puzzle."},
 {at:"Sealed Chamber (second room)", t:"Put <b>Wailord in the first party slot and Relicanth in the last</b>", sub:"<b>This is the reversed one.</b> Ruby and Sapphire wanted Relicanth first and Wailord last; Emerald's Braille reads FIRST COMES WAILORD, LAST COMES RELICANTH. Get it backwards and nothing happens."},
 {t:"Read the Braille on the back wall", sub:"An earthquake opens all three golem chambers at once."}
]],
["h","Step two — the three chambers"],
["table",{cols:["Chamber","Where it is","What Emerald asks you to do","What Ruby & Sapphire asked"],rows:[
 ["<b>Desert Ruins</b><br><span style=\"font-weight:400;color:var(--ink3)\">Regirock</span>","Route 111, in the desert — needs Go-Goggles","From the Braille inscription, walk <b>two steps LEFT, then two steps DOWN, then use Rock Smash</b>.","Two right, two down, then Strength"],
 ["<b>Island Cave</b><br><span style=\"font-weight:400;color:var(--ink3)\">Regice</span>","Route 105, on the small island — Surf","Read the Braille, then <b>run one full lap of the chamber hugging the wall</b>.","Stand still for two minutes without touching the controls"],
 ["<b>Ancient Tomb</b><br><span style=\"font-weight:400;color:var(--ink3)\">Registeel</span>","Route 120, north of Fortree","Stand in the <b>middle of the room and use Flash</b>.","Use Fly in the middle of the room"]
]}],
["do",[
 {at:"Desert Ruins", t:"Go to Route 111's desert with the Go-Goggles on"},
 {t:"Stand at the Braille, walk <b>2 left then 2 down</b>, and use <b>Rock Smash</b>"},
 {t:"Catch <b>Regirock</b>", sub:"Lv 40, Rock, Clear Body. See the catch plan below."},
 {at:"Island Cave", t:"Surf west from Route 105 to the small island"},
 {t:"Read the Braille, then <b>run one lap around the room against the walls</b>"},
 {t:"Catch <b>Regice</b>", sub:"Lv 40, Ice, Clear Body. 200 Special Defence — this is the slowest of the three to whittle down."},
 {at:"Ancient Tomb", t:"Go north from Fortree onto Route 120 and find the tomb"},
 {t:"Stand in the <b>centre</b> of the room and use <b>Flash</b>"},
 {t:"Catch <b>Registeel</b>", sub:"Lv 40, Steel, Clear Body."}
]],
["h","How you catch all three"],
["ul",[
 "<b>All three are Lv 40 with Clear Body</b>, which means <b>your stat-lowering moves do nothing</b> — no Screech, no Sand-Attack, no Growl. Clear Body does not stop status.",
 "<b>Put them to sleep or freeze them.</b> Sleep gives the best catch multiplier in Generation III. A Breloom with Spore, a Gardevoir with Hypnosis, or a Lunatone works.",
 "<b>Bring False Swipe.</b> It always leaves the target on at least 1 HP and cannot knock anything out. <b>There is no False Swipe TM or tutor in Emerald</b> — the practical source is a <b>Nincada</b>, which learns it at <b>level 25</b>. Nincada evolves at 20, so cancel that evolution with B or hold an Everstone (there is one in Granite Cave) and let it reach 25 first.",
 "<b>All three arrive with the same four moves at Lv 40:</b> Curse, <b>Superpower</b>, AncientPower, and one weak STAB move — Rock Throw on Regirock, Icy Wind on Regice, Metal Claw on Registeel. <b>Superpower is 120 power</b> and is the only thing that will actually hurt you; Curse raises their Attack and Defence while dropping their Speed, so the fight gets slower and harder the longer you leave it.",
 "<b>Regice has 200 Special Defence and 100 Defence.</b> Physical damage is the only sensible way to bring it down.",
 "<b>In Emerald, if you run from one it respawns as soon as you leave the area</b> — you do not have to reset. If you knock one out, it comes back after you next enter the Hall of Fame."
]],
["tip","<b>Do the Regis before Groudon and Kyogre.</b> The Regis stand still and wait, so they are the low-pressure practice run for your catching kit — False Swipe, a sleep move and thirty Ultra Balls. The weather trio are in caves that move and are twenty-five levels higher."]
]});

STAGES.push({
id:"p03", ch:"post", tag:"Stage 18", place:"Terra Cave · Marine Cave · Sky Pillar · Southern Island",
title:"Groudon, Kyogre, and the Eon pair",
lede:"The two ancient Pokémon are not where Ruby and Sapphire put them. In Emerald they hide in caves that move around the map, and the Weather Institute is the only thing that will tell you where.",
band:[{k:"Party level",v:"70+"},{k:"Needs",v:"Hall of Fame · Dive · Waterfall"},{k:"Catches",v:"up to 4 legendaries"}],
body:[
["ver","<b>Groudon and Kyogre are not in the Cave of Origin or a fixed cavern in Emerald.</b> Ruby and Sapphire had them in set locations at Lv 45. Emerald hides them in <b>Terra Cave</b> and <b>Marine Cave</b> — two caves that do not exist on the map until after the Hall of Fame, appear on one of four possible routes at a time, and relocate if you take too long. Both are at <b>Lv 70</b>, not 45."],
["h","Finding the caves"],
["ul",[
 "<b>Go to the Weather Institute on Route 119 and talk to the man on 2F.</b> He reports which route is under abnormal weather. That route is where the cave is.",
 "<b>Only one of the two caves exists at a time.</b> Terra Cave (Groudon) appears on a land route; Marine Cave (Kyogre) appears on a water route. Catching or defeating one makes the other appear and relocate.",
 "<b>If you take too long, the cave moves.</b> Go back to the Weather Institute and ask again — there is no penalty, just another trip.",
 "<b>Terra Cave</b> can appear on Routes 114, 115, 116 or 118 — it favours western Hoenn. Walk the route until the cave mouth appears.",
 "<b>Marine Cave</b> can appear on Routes 105, 125, 127 or 129 — all water routes. You will need Dive to reach the entrance."
]],
["h","The catch plan"],
["team","<b>Take Rayquaza to both of these fights.</b> Its ability is <b>Air Lock</b>, which switches off all weather while it is on the field. Against Groudon that turns Drought off, so your Water moves stop being halved and its 4× Water weakness comes back. Against Kyogre it turns Drizzle off, so its Water Spout drops back to normal power and its Thunder can miss again. There is no better tool in the game and you already have it."],
["do",[
 {at:"Weather Institute", t:"Ask the man on 2F which route has abnormal weather"},
 {at:"Terra Cave", t:"Walk the named land route until the cave appears"},
 {t:"Fight <b>Groudon</b> at Lv 70 with <b>Rayquaza in front</b>", sub:"Air Lock cancels its Drought. Without sun, Water is 2× on it — it is a pure Ground type, so Water, Grass and Ice all hurt."},
 {t:"Put it to sleep, chip it to red, and throw <b>Ultra Balls</b>", sub:"Groudon has 100 Special Defence and 140 Defence. Special attacks are the better route."},
 {at:"Marine Cave", t:"Once Groudon is caught or beaten, ask at the Weather Institute again"},
 {t:"Dive to the <b>Marine Cave</b> entrance on the named water route"},
 {t:"Fight <b>Kyogre</b> at Lv 70 with <b>Rayquaza in front</b>", sub:"Air Lock cancels Drizzle. Without rain its Water Spout is not boosted and Thunder is back to 70% accuracy. It is a pure Water type — Electric and Grass are 2×."},
 {t:"Sleep it, chip it, and throw <b>Ultra Balls</b>", sub:"Kyogre has 140 Special Defence. Physical damage is the better route on this one."},
 {at:"Sky Pillar", t:"Catch <b>Rayquaza</b> if you did not before the League", sub:"Lv 70, Dragon/Flying. The floors are cracked on the return visit — ride the Mach Bike across without stopping."},
 {at:"Roaming Hoenn", t:"Hunt the <b>Latias or Latios</b> you chose at the television"},
 {t:"Use the <b>Master Ball</b> on it", sub:"Roaming Pokémon flee on turn one of every encounter and cannot be trapped in Generation III. Whittling one down takes dozens of encounters and a lot of luck. This is what the Master Ball is for."}
]],
["h","Latias and Latios — the choice you already made"],
["p","Immediately after the credits, the television asked you the colour of the Pokémon in the report. That answer decided this:"],
["table",{cols:["You answered","Roams Hoenn","Waits on Southern Island"],rows:[
 ["<b>Red</b>","<b>Latias</b> — catchable with patience and the Master Ball","Latios — needs the Eon Ticket"],
 ["<b>Blue</b>","<b>Latios</b> — catchable with patience and the Master Ball","Latias — needs the Eon Ticket"]
]}],
["warn","<b>Be honest with yourself about the Eon Ticket.</b> It was never obtainable in normal play. It was distributed at Nintendo promotional events in 2003–2004, through the e-Reader in North America and Game Link downloads in Europe, and the distributions are long over. Today you can only get it by <b>mixing records with a cartridge that already has it</b>, or through emulation. If neither is available to you, <b>the one you did not choose at the television is not obtainable</b> — so choose the one you actually want, because the other is behind a physical event that ended two decades ago. The Southern Island Pokémon always holds a <b>Soul Dew</b>, which is the only one in Generation III."],
["h","The other event legendaries — read this before you go looking"],
["table",{cols:["Pokémon","Where","What it needs","Honestly available?"],rows:[
 ["<b>Deoxys</b>","Birth Island","<b>Aurora Ticket</b> — a promotional item","<b>No.</b> Event-only, distributions ended. Note that <b>Emerald's Deoxys is in its Speed Forme</b> — 180 Speed, 95 Attack — which is different from FireRed's Attack Forme and LeafGreen's Defense Forme. The island puzzle is a triangular rock you follow around the map."],
 ["<b>Mew</b>","Faraway Island","<b>Old Sea Map</b> — Japan-only promotional item","<b>No.</b> It was distributed in Japan only, for a limited window. There is no legitimate international route to it."],
 ["<b>Ho-Oh</b> / <b>Lugia</b>","Navel Rock","<b>MysticTicket</b> — a promotional item","<b>No.</b> Same story. Both are Lv 70 if you ever reach them."],
 ["<b>Jirachi</b>","Not in the game","Pokémon Colosseum bonus disc","<b>No.</b> It came from a GameCube promotional disc, never from Emerald itself."],
 ["<b>Regirock</b>, <b>Regice</b>, <b>Registeel</b>","Three chambers","The Braille puzzle","<b>Yes</b> — see the previous stage."],
 ["<b>Groudon</b>, <b>Kyogre</b>, <b>Rayquaza</b>","Terra Cave, Marine Cave, Sky Pillar","Hall of Fame; Rayquaza needs only the story","<b>Yes</b> — all three, in-game."],
 ["<b>Latias</b> or <b>Latios</b>","Roaming Hoenn","The television answer","<b>Yes</b> — one of them. The other needs the Eon Ticket."]
]}],
["tip","<b>Nine of the sixteen legendary Pokémon in Emerald are genuinely catchable.</b> Rayquaza, Groudon, Kyogre, the three Regis and one of Latias/Latios make seven, plus the two fossil revivals if you count them. The rest are event-locked and always were — a complete Hoenn Dex does not require any of them, and neither does the Johto starter, which explicitly excludes Jirachi and Deoxys."]
]});
