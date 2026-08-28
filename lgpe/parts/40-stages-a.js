/* ===================== KANTO 01–06 ===================== */
STAGES.push({
id:"k01", ch:"kanto", tag:"Stage 01", place:"Pallet Town · Route 1 · Viridian City · Route 22 · Route 2",
title:"Pallet Town, and the partner you cannot change",
lede:"There is no starter choice in Let’s Go. Pikachu is handed to you and stays in your party for the whole game — so the only real decisions in the first hour are which grass you walk through and how many Pokémon you bother to throw a ball at.",
band:[{k:"Party level",v:"5 → 9"},{k:"Badges",v:"0"},{k:"Species caught",v:"aim for 20"}],
body:[
["lgpe","<b>Read this before anything else.</b> Wild Pokémon are not battled. They stand in the overworld, you walk into one, and a throwing screen opens — you aim a ball and that is the whole encounter. Everything downstream of that changes: there is no wild-battle experience, so <b>catching is how your party levels</b>, and the number of species you have caught is a hard gate on gifts, Secret Techniques and one entire Gym."],
["p","Oak stops you at the edge of Pallet, drags you into the tall grass, and a Pikachu jumps out of his bag and refuses to leave. It cannot be boxed, it cannot evolve into Raichu, and it will be one of your six for the rest of the run. Your rival is <b>Trace</b> — a mild, friendly rival rather than Blue — and because you are playing <b>Let’s Go, Pikachu!</b> he takes the <b>Eevee</b>, which becomes a Jolteon by the mid-game."],
["team","<b>Your partner is not a normal Pikachu and you should stop thinking of it as one.</b> The partner has its own inflated base stats — <b>45 / 80 / 50 / 75 / 60 / 120</b> against a wild Pikachu’s 35 / 55 / 40 / 50 / 50 / 90 — which makes it a genuine attacker with the highest Speed you will own until Mewtwo. It gets three exclusive moves from tutors in three Pokémon Centers, plus a free fifth move. Build around it; do not bench it."],
["html","<div class=\"statstrip\">" +
 "<div><span class=\"k\">HP</span><div class=\"v\">45</div><div class=\"d\">+10</div></div>" +
 "<div><span class=\"k\">Attack</span><div class=\"v\">80</div><div class=\"d\">+25</div></div>" +
 "<div><span class=\"k\">Defense</span><div class=\"v\">50</div><div class=\"d\">+10</div></div>" +
 "<div><span class=\"k\">Sp. Atk</span><div class=\"v\">75</div><div class=\"d\">+25</div></div>" +
 "<div><span class=\"k\">Sp. Def</span><div class=\"v\">60</div><div class=\"d\">+10</div></div>" +
 "<div><span class=\"k\">Speed</span><div class=\"v\">120</div><div class=\"d\">+30</div></div>" +
 "</div><p class=\"footnote\">Partner Pikachu’s base stats, and the gain over a wild Pikachu. Attack sits above Special Attack, which is why its best move is a physical one.</p>"],
["lgpe","<b>The Pokémon Box lives in your Bag.</b> There is no PC, and no reason to ever keep a party slot free — open the Bag from anywhere, tap the Box, and move Pokémon in and out on the spot. Every “box it here / free a slot” instruction you remember from the older Kanto games is dead weight in this game."],
["h","Worth catching now"],
["catch",[
 {n:"Pidgey", t:["Normal","Flying"], where:"Route 1 — 40%, and Route 2 at 30%", why:"Catch several. You do <i>not</i> need a Fly carrier in this game — the partner learns Sky Dash — so Pidgey is here purely for the species count and the experience its captures pay out."},
 {n:"Rattata", t:["Normal"], where:"Routes 1, 2 and 22 — 20–30%", why:"The same job as Pidgey, plus it is the Pokémon a girl in Cerulean wants for an <b>Alolan Rattata</b>. Catch two."},
 {n:"Oddish", t:["Grass","Poison"], lg:true, where:"Route 1 — 30%, Route 2 at 20%", why:"<b>Let’s Go, Pikachu! exclusive</b> — Eevee players get Bellsprout instead. This is your key into the Pewter Gym, which turns away first-time challengers who cannot show a Grass or Water Pokémon. Water does not exist yet, so Oddish is the answer."},
 {n:"Nidoran♂", t:["Poison"], where:"Route 22 — 20%", why:"Route 22 is the only early grass with either Nidoran. Take one of each for the Pokédex; the male line is the better attacker if you keep it."},
 {n:"Spearow", t:["Normal","Flying"], where:"Route 22 — 30%", why:"Species count and a warm body for the sixth slot. Fearow is fine early and completely outclassed by the time you reach Celadon."},
 {n:"Caterpie", t:["Bug"], where:"Route 2 — 15%", why:"Route 2 south is the cheapest Bug pair in the game. Catch Caterpie and Weedle here so you do not have to hunt them in the forest next stage."}
]],
["warn","<b>Species caught is a currency in this game, and the bills come due quickly.</b> Ten species buys the <b>Light Up</b> Secret Technique on Route 2. Thirty buys a free <b>Bulbasaur</b> in Cerulean and the IV Judge on Route 11. Fifty buys a free <b>Charmander</b> on Route 24 and entry to the <b>Fuchsia Gym</b>. Sixty buys a free <b>Squirtle</b> in Vermilion. Throwing balls at every duplicate is not padding — duplicates are your experience, and each <i>new</i> species is a key."],
["tip","Oak gives you <b>Razz Berries</b>, not Poké Balls. Feed one before you throw and the target stays still and is easier to catch; a berry is almost always worth more than a second ball. Buy balls in Viridian with the money the game keeps giving you."],
["h","What you can pick up"],
["loot",[
 {k:"Key", n:"Oak's Parcel", where:"From the Poké Mart clerk in Viridian, then walked back to Oak", why:"Forced errand. It buys you the Pokédex, so catch on the way down and back rather than running it twice."},
 {k:"Item", n:"Potion", where:"Viridian City — west side of town"},
 {k:"Item", n:"Poké Ball ×5", where:"Route 22 — southwest corner"},
 {k:"Item", n:"Antidote", where:"Route 22 — hidden in a bush north of the eastern grass"},
 {k:"TM11", n:"Will-O-Wisp", where:"Viridian City — from the sleeping man in the south-west", why:"<b>Needs Chop Down, so you cannot have it yet.</b> Note the man and come back in stage 07; a guaranteed burn halves physical damage for the rest of the fight."}
]],
["do",[
 {at:"Pallet Town", t:"Follow Oak into the grass north of town and take the <b>partner Pikachu</b>.", sub:"Scripted. It joins at level 5 and never leaves your party — it cannot be deposited in the Box and it cannot evolve."},
 {t:"Take the Potion from the PC in your bedroom before you go."},
 {at:"Route 1", t:"Catch <b>Pidgey, Rattata and Oddish</b> on the way north — several of each.", sub:"Pidgey 40%, Rattata 30%, Oddish 30%. Duplicates are your only source of experience until you meet a trainer, so throw at everything."},
 {at:"Viridian City", t:"Take the free Potion from the Poké Mart clerk and the <b>Oak’s Parcel</b> he hands you with it."},
 {at:"Pallet Town", t:"Walk the Parcel back to Oak for the <b>Pokédex</b>.", sub:"The game forces the round trip. Catch on the way down as well as the way back — the species count you build here unlocks three free starters later."},
 {at:"Viridian City", t:"Buy <b>Poké Balls and Razz Berries</b> before you go anywhere else.", sub:"Twenty balls and a stack of Razz Berries. Berries matter more than balls: a fed target barely moves."},
 {at:"Route 22", t:"Take the hidden <b>Antidote</b> in the bush north of the eastern grass.", sub:"One of the first hidden items in the game, and easy to walk past."},
 {t:"Note the sleeping man in the south-west of town and leave him.", sub:"He is holding TM11 Will-O-Wisp behind a small tree. You come back for it in stage 07 with Chop Down."},
 {at:"Route 22", t:"Go <b>west</b> out of Viridian before you go north.", sub:"Route 22 is the only early grass with Nidoran♀ and Nidoran♂, at 20% each. Two more species, two more keys."},
 {t:"Catch <b>Nidoran♂, Nidoran♀ and Spearow</b>, and pick up the Poké Balls in the south-west corner."},
 {at:"Route 22", t:"Beat <b>Trace</b> at the league gate.", sub:"In Let’s Go, Pikachu! he leads a level-6 <b>Eevee</b> with Tackle and Growl, plus a level-3 Pidgey if you took the optional battle in Viridian. Zippy Zap is not yours yet; Thunder Shock is enough."},
 {at:"Route 2", t:"Now head north out of Viridian, into Viridian Forest.", sub:"You should be leaving with roughly twenty species logged and everything in the party at level 8 or 9."}
]]
]});

STAGES.push({
id:"k02", ch:"kanto", tag:"Stage 02", place:"Viridian Forest · Pewter City",
title:"Boulder Badge — Brock, and the gym that checks your bag",
lede:"Viridian Forest is where Let’s Go hides a free Bulbasaur in plain sight, and Brock is a two-Pokémon formality — provided the doorman lets you in, which he will not unless you are carrying something green.",
band:[{k:"Party level",v:"10 → 14"},{k:"Badge",v:"Boulder"},{k:"Obedience",v:"to Lv 20"}],
body:[
["warn","<b>The Pewter Gym turns first-time challengers away at the door.</b> The guide will not let you past unless you can show him a <b>Grass or Water</b> Pokémon. No Water exists yet, so this means an <b>Oddish</b> from Route 1 or 2, or the rare <b>Bulbasaur</b> in Viridian Forest. If you skipped Oddish, go back for one now — it is a 30% spawn one screen south."],
["h","Viridian Forest"],
["p","The forest is a short maze full of Bug Catchers. Because wild Pokémon are visible, the only thing worth slowing down for is the pair of <b>rare spawns</b>: species that are not on the ordinary encounter table at all and appear with a flourish and a chime. In this forest that is <b>Bulbasaur</b>, and in Let’s Go, Pikachu! there is also a wild <b>Butterfree</b> at 1%."],
["catch",[
 {n:"Bulbasaur", t:["Grass","Poison"], where:"Viridian Forest — rare spawn, no fixed table slot", why:"<b>Worth ten minutes of circling.</b> It is the same Pokémon Cerulean gives you free at 30 species, so it is not urgent — but catching one here means you have your Grass body <i>before</i> the Pewter Gym door check and can start levelling it immediately."},
 {n:"Pikachu", t:["Electric"], where:"Viridian Forest — 5%", why:"A wild Pikachu is <b>not</b> your partner and is a completely ordinary Pokémon with ordinary stats. Catch one anyway: it is the species the Saffron trade wants, once evolved with a Thunder Stone, for an <b>Alolan Raichu</b>."},
 {n:"Butterfree", t:["Bug","Flying"], lg:true, where:"Viridian Forest — 1%, Let’s Go, Pikachu! only", why:"<b>Version exclusive.</b> Eevee players see a 1% Beedrill here instead. A fully evolved catch at level 3–6 is free experience and a species you would otherwise have to grind Caterpie for."},
 {n:"Caterpie", t:["Bug"], where:"Viridian Forest — 25%", why:"Metapod at 7, Butterfree at 10. If you did not catch the wild Butterfree, raising one is the cheap way to the third entry in the line."},
 {n:"Weedle", t:["Bug","Poison"], where:"Viridian Forest — 24%", why:"Kakuna at 7, Beedrill at 10. Log the line and move on; nothing in it earns a party slot."}
]],
["tip","Rare spawns are how Let’s Go hands out species that have no encounter slot — Bulbasaur here, <b>Charmander</b> on Routes 3 and 4, <b>Squirtle</b> on Routes 24 and 25. They appear roughly 1 in 100 spawns at a Catch Combo of zero, and a chain of 31 or more pushes that to <b>50%</b>. If you want a specific one, chain the commonest thing on the route rather than wandering."],
["h","Pewter City"],
["loot",[
 {k:"Item", n:"Potion ×5", where:"From Trace as you enter town"},
 {k:"Item", n:"X Defense", where:"Behind the Pokémon Center"},
 {k:"Item", n:"Big Pearl", where:"From the lady west of the museum, after minding her Slowpoke"},
 {k:"TM01", n:"Headbutt", where:"From Brock", why:"70 power physical Normal with a flinch chance. Genuinely fine filler on anything physical until better TMs turn up."},
 {k:"Item", n:"Great Ball ×5", where:"From Blue outside the gym, after you beat Brock"},
 {k:"Key", n:"Old Amber", where:"Pewter Museum — employee area, behind a small tree", why:"<b>Needs Chop Down. You cannot take it yet.</b> Come back in stage 07; it becomes Aerodactyl at the Cinnabar Lab."}
]],
["boss",{
name:"Brock", role:"Pewter City Gym · Rock", badge:"Boulder Badge",
team:[
 {m:"Geodude", l:11, t:["Rock","Ground"], note:"Tackle. That is the entire moveset. It exists to be removed."},
 {m:"Onix", l:12, t:["Rock","Ground"], note:"Headbutt, Bind, Rock Throw. 160 base Defense against a 45 Attack — it is a wall with no hammer."}
],
plan:[
 "<b>Lead your Oddish or Bulbasaur.</b> Absorb and Vine Whip are both 2× into Rock/Ground, and neither of Brock’s Pokémon can meaningfully hurt a Grass type back.",
 "<b>Your Pikachu learns Double Kick at level 9</b> — Fighting, 30 power, and it hits twice, which means it rolls through Onix’s enormous Defense far better than the raw number suggests. Have it before you walk in.",
 "<b>Electric does literally nothing here.</b> Both of Brock’s Pokémon are part Ground, so Thunder Shock is a zero. This is the one gym where your partner’s STAB is dead weight and its Fighting move is the whole point.",
 "Onix’s <b>Bind</b> chips you for 4–5 turns and stops you switching. If you are winning slowly, heal before it locks you in rather than after.",
 "Do not bother with a Rock or Ground answer of your own. Brock is a level check you have already passed."
],
reward:"TM01 Headbutt, the Boulder Badge, and obedience from traded Pokémon up to level 20. <b>Badges do not boost your stats in this game</b> — that was Generation I. All a badge does here is raise the obedience ceiling."
}],
["lgpe","<b>Badges buy obedience and nothing else.</b> No Attack boost, no Defense boost, and no field moves: the Secret Techniques are taught by NPCs, not unlocked by badges. Obedience is set by <i>how many</i> badges you hold, not which ones — 1 → level 20, 2 → 30, 3 → 40, 4 → 50, 5 → 60, 6 → 70, 7 → 80, 8 → no limit — and it only ever applies to Pokémon you did not catch yourself."],
["do",[
 {at:"Viridian Forest", t:"Circle the forest for the <b>Bulbasaur</b> rare spawn before you leave.", sub:"Not mandatory — Cerulean gives you one free at 30 species — but having it now means it is ten levels up by Misty."},
 {t:"Catch a wild <b>Pikachu</b> (5%) and the 1% <b>Butterfree</b> if you see it.", sub:"The wild Pikachu is a different Pokémon from your partner. It is the Saffron trade stock for an Alolan Raichu."},
 {t:"Take the Antidote, both Potions and the Razz Berries scattered through the trees."},
 {t:"Beat the Bug Catchers on the way through.", sub:"Trainer battles are your only non-catch experience in this game, so none of them are optional if you want to keep pace."},
 {at:"Pewter City", t:"Take the <b>Potions from Trace</b> and the X Defense behind the Pokémon Center."},
 {t:"Mind the lady’s <b>Slowpoke</b> west of the museum for a Big Pearl.", sub:"Thirty seconds, and Big Pearls are the cleanest early money in the game."},
 {t:"Look at the <b>Old Amber</b> in the museum’s employee area, then leave it.", sub:"It is behind a small tree on the north-east hill. You need Chop Down, which is four stages away — stage 07 is when you come back."},
 {at:"Pewter Gym", t:"Show the guide your <b>Oddish or Bulbasaur</b>, then beat <b>Brock</b>.", sub:"He will not let you in without a Grass or Water Pokémon on your first visit. Geodude 11, Onix 12."},
 {t:"Take the <b>Great Balls from Blue</b> outside the gym.", sub:"Blue is the retired Champion here, not your rival. He turns up repeatedly and eventually takes over the Viridian Gym."},
 {at:"Route 3", t:"Head east towards Mt. Moon."}
]]
]});

STAGES.push({
id:"k03", ch:"kanto", tag:"Stage 03", place:"Route 3 · Mt. Moon · Route 4",
title:"Mt. Moon — two Moon Stones, and a fossil choice that is no longer permanent",
lede:"Route 3 is where Let’s Go, Pikachu! hands out its two best version exclusives, and the cave underneath holds both Moon Stones. The Super Nerd still makes you pick one fossil — but unlike every earlier Kanto game, the one you refuse is not gone forever.",
band:[{k:"Party level",v:"14 → 18"},{k:"Badges",v:"1"},{k:"Species caught",v:"aim for 30"}],
body:[
["h","Route 3 and Route 4"],
["ver","Routes 3 and 4 are the sharpest version split in the early game. <b>Let’s Go, Pikachu! gets Sandshrew (20%) and Mankey (20%).</b> Eevee players get Ekans in the Sandshrew slot and nothing at all in the Mankey slot. Both of yours are worth party space; take them now, because Mankey does not appear again and Sandshrew’s only other home is a Celadon trade counter."],
["catch",[
 {n:"Sandshrew", t:["Ground"], lg:true, where:"Routes 3 and 4 — 20%, Let’s Go, Pikachu! only", why:"<b>Take one and build it.</b> Ground is immune to Electric, which makes it a hard counter to the entire Vermilion Gym three stages from now, and it is 2× into Brock’s rematch, Blaine and half of Koga. Read the move note below before you let it evolve."},
 {n:"Mankey", t:["Fighting"], lg:true, where:"Routes 3 and 4 — 20%, Let’s Go, Pikachu! only", why:"<b>Version exclusive and the only early Fighting type.</b> Karate Chop at 13, Low Kick at 21. Primeape’s 105 Attack carries the mid-game trainer gauntlets until the Fighting Dojo hands you something better."},
 {n:"Charmander", t:["Fire"], where:"Routes 3 and 4 — rare spawn", why:"The second of the three free-starter rare spawns. If it appears, take it — you are given one on Route 24 anyway, but a second Charmander is a spare Charizard and the Master Trainer for the line is a level-75 fight later."},
 {n:"Clefairy", t:["Fairy"], where:"Mt. Moon — 4% on 1F and B1F, 9% on B2F", why:"<b>Clefairy is pure Fairy in this game, not Normal.</b> That means it is immune to Dragon and resists Fighting and Dark, which is a genuinely different Pokémon from the one you remember. Feed it a Moon Stone for Clefable."},
 {n:"Onix", t:["Rock","Ground"], where:"Mt. Moon — 1%", why:"A 1% cave spawn and the only wild Onix before Victory Road. Chain Geodude if you want to force it; otherwise take it if you see it, because hunting it later is worse."},
 {n:"Paras", t:["Bug","Grass"], where:"Mt. Moon — 15%", why:"Parasect learns <b>Spore</b>, a sleep move that cannot miss. Nothing else in Kanto has one, and it is the safest way to hold a legendary still later."},
 {n:"Zubat", t:["Poison","Flying"], where:"Mt. Moon — 40%", why:"Golbat at 22 and no further — Crobat needs a friendship evolution that does not exist here. Log it and box it."},
 {n:"Geodude", t:["Rock","Ground"], where:"Mt. Moon — 34–40%", why:"Catch several. Graveler needs a trade to become Golem, but a spare Geodude is what the Vermilion hiker wants for an <b>Alolan Geodude</b>, which is Rock/Electric and exists nowhere else."}
]],
["team","<b>Take the Sandshrew, and then refuse to let it evolve.</b> Sandshrew learns <b>Dig at 20</b> and <b>Earthquake at 36</b>. Sandslash learns Earthquake at <b>52</b>. Evolution in Let’s Go is automatic on level-up unless you hold B through the animation, so hold it: sixteen levels of the best physical Ground move in the game is worth far more than an earlier stat bump. Let it become Sandslash the moment Earthquake is in."],
["warn","<b>Both Moon Stones are on Mt. Moon B2F</b>, in craters in the closed-off rooms east of the Rocket Grunts. Take both. One is for Clefable; the other is for Nidoking or Nidoqueen if you kept a Nidoran from Route 22. There are more Moon Stones later, but not for a very long time."],
["h","The fossil"],
["p","At the bottom of Mt. Moon a Super Nerd offers you the <b>Dome Fossil</b> or the <b>Helix Fossil</b>, and takes the other away. In Red, Blue, FireRed and LeafGreen that was a permanent, save-file-ending decision."],
["lgpe","<b>It is not permanent here.</b> After you enter the Hall of Fame, the glowing crystal spots in <b>Cerulean Cave</b> respawn fossils on a timer — the plateau beside Mewtwo’s island is guaranteed to hold one, with roughly a 40% chance each of Dome and Helix and 20% of Old Amber. Whichever fossil you refuse today, you can dig up later. Take whichever you like and stop agonising."],
["team","<b>Take the Dome Fossil.</b> Kabutops has 115 Attack behind Rock and Water moves that are physical in this generation, so its stats and its STAB point the same way; Omastar has 115 Special Attack and a Rock STAB that is mostly physical. Kabutops is the better Pokémon on the day you revive it — and you can go back for Omanyte in the post-game anyway."],
["loot",[
 {k:"Item", n:"Moon Stone ×2", where:"Mt. Moon B2F — craters in the closed-off rooms", why:"Clefable, and Nidoqueen or Nidoking. Take both; they do not come back."},
 {k:"Item", n:"Rare Candy", where:"Mt. Moon B2F — plateau in a closed room"},
 {k:"Item", n:"Nugget", where:"Mt. Moon B2F — plateau in the closed room between the stones"},
 {k:"Item", n:"Big Mushroom", where:"Mt. Moon B1F — west of the second ladder"},
 {k:"Key", n:"Dome Fossil", where:"Mt. Moon B2F — from the Super Nerd", why:"Kabutops at the Cinnabar Lab. The Helix Fossil you refuse can be dug out of Cerulean Cave after the League."},
 {k:"TM57", n:"Pay Day", where:"Route 4 — reward for beating Coach Trainer Oberon", why:"Coach Trainers are the ones with the exclamation mark; each hands over a TM or a stack of Candy once. Never walk past one."},
 {k:"Item", n:"PP Up", where:"Route 4 — hidden in a bush east of the central plateau"},
 {k:"Item", n:"Escape Rope", where:"Route 4 — between the three rocks west of the Pokémon Center"}
]],
["tip","<b>Refuse the Magikarp salesman’s ₽500</b> on Route 4. Magikarp is a common water spawn on half a dozen routes from Route 4 onwards, and ₽500 is a stack of Great Balls you actually need. Gyarados is worth having — just not for money."],
["do",[
 {at:"Route 3", t:"Catch a <b>Sandshrew</b> and a <b>Mankey</b> — 20% each, and both are Let’s Go, Pikachu! exclusives.", sub:"Sandshrew is your answer to the Vermilion Gym. Mankey is the only Fighting type available for the next five stages."},
 {t:"Chain Rattata or Spearow while you walk, and watch for the <b>Charmander</b> rare spawn.", sub:"A Catch Combo of 31 or more takes rare-spawn odds to 50%. Chaining the common thing is how you force the rare one."},
 {t:"Clear the trainer line and take the Potion and Poké Balls between the ledges."},
 {at:"Mt. Moon Pokémon Center", t:"Heal, and <b>turn down the Magikarp salesman</b>.", sub:"₽500 for a Pokémon that swims freely on Route 4 and half the sea routes."},
 {at:"Mt. Moon 1F", t:"Work the cave for <b>Clefairy</b> (4%) and the 1% <b>Onix</b>.", sub:"Clefairy is pure Fairy here — immune to Dragon, resists Dark and Fighting. It is a real Pokémon in this game, not a Normal-type curio."},
 {t:"Catch two or three spare <b>Geodude</b>.", sub:"One becomes an Alolan Geodude at the Vermilion trade counter, and Alolan Geodude is Rock/Electric — a typing that exists nowhere else in Kanto."},
 {at:"Mt. Moon B2F", t:"Take <b>both Moon Stones</b> from the craters in the closed-off rooms.", sub:"East of the Rocket Grunts. One for Clefable, one for a Nidoran line if you kept one."},
 {t:"Take the Rare Candy and the Nugget from the neighbouring closed rooms."},
 {at:"Mt. Moon B1F", t:"Take the <b>Big Mushroom</b> west of the second ladder.", sub:"Big Mushrooms sell for a lot and there is nothing else to spend the detour on."},
 {t:"Beat the Super Nerd and take the <b>Dome Fossil</b>.", sub:"Kabutops. And unlike the old games this is reversible — Cerulean Cave respawns fossils after the League."},
 {at:"Route 4", t:"Beat <b>Coach Trainer Oberon</b> for <b>TM57 Pay Day</b>.", sub:"Coach Trainers carry a one-time reward each. Treat every exclamation-mark trainer as a mandatory stop for the rest of the game."},
 {t:"Take the PP Up hidden east of the central plateau, and the Escape Rope by the three rocks."},
 {at:"Cerulean City", t:"Carry on east into town with 30 species logged.", sub:"Thirty is the number that buys a free Bulbasaur in Cerulean and the IV Judge on Route 11. If you are short, the Mt. Moon caves are the fastest place to make it up."}
]]
]});

STAGES.push({
id:"k04", ch:"kanto", tag:"Stage 04", place:"Cerulean City",
title:"Cascade Badge — Misty, and the first of your three free starters",
lede:"Cerulean is the first town that pays you for the species count you have been building: a free Bulbasaur, an Alolan Rattata over the counter, and the Move Tutor who gives your partner the best move it will ever have.",
band:[{k:"Party level",v:"18 → 21"},{k:"Badge",v:"Cascade"},{k:"Obedience",v:"to Lv 30"}],
body:[
["h","Before the gym"],
["p","Three things in this town matter more than the badge, and two of them are easy to walk past."],
["team","<b>Go to the Pokémon Center and find the Tamer by the counter.</b> He is a Move Tutor and he teaches your partner <b>Zippy Zap</b> — Electric, physical, 50 power, and it is <b>always a critical hit at +2 priority</b>. A guaranteed crit means it ignores any Defense boost the target has set up, and moving first every turn means your Pikachu closes out fights that a slower attacker would lose. It is the single best thing that happens to your team in the first half of the game. Take it before you fight Misty."],
["catch",[
 {n:"Bulbasaur", t:["Grass","Poison"], where:"Free from the girl in the house next to the Pokémon Center — needs 30 species caught", why:"<b>Take it and put it in the party.</b> Venusaur is one of only four Pokémon you can Mega Evolve on the main story, its Grass STAB answers Misty, Giovanni and Brock’s rematch, and it arrives at level 12 already."},
 {n:"Alolan Rattata", t:["Dark","Normal"], where:"Trade a Rattata to the girl on the Pokémon Center sofa — repeatable", why:"<b>Dark barely exists in Kanto.</b> This is your first Dark type and it is repeatable, so trade as many as you like. Alolan Raticate is not a party member, but the typing is a Pokédex entry you cannot get any other way."},
 {n:"Psyduck", t:["Water"], where:"Routes 24 and 25 — 20%", why:"Golduck is a fine Water body if you would rather not wait for Lapras. More usefully, Psyduck is on Misty’s own team, so the species is worth logging early."}
]],
["loot",[
 {k:"TM10", n:"Dig", where:"From the Team Rocket Grunt in the robbed house, after you beat him", why:"80 power physical Ground. <b>Put this on your Sandshrew immediately</b> if it has not reached level 20 yet — it is the move that wins the next gym."},
 {k:"Item", n:"Heart Scale ×5", where:"From the Bike Maniac in the south-west house, after examining every bicycle", why:"Heart Scales buy moves back from the Move Reminder at the Indigo Plateau. Five of them free is worth two minutes of listening to a man describe bikes."},
 {k:"Item", n:"Rare Candy", where:"Behind the Gym Badge man’s house"},
 {k:"Item", n:"Burn Heal", where:"South-west corner of town, south of the hedge wall"},
 {k:"TM29", n:"Scald", where:"From Misty", why:"80 power special Water with a 30% burn. A burn halves the target’s physical damage, which makes Scald the best status-inflicting attack in the game."}
]],
["warn","<b>Misty checks your party at the door.</b> The guide will not let you in unless you can show a Pokémon of <b>level 15 or higher</b>. If your team is under-levelled, the Nugget Bridge trainers one screen north are the fix — but you cannot reach the far side of Route 24 without passing them anyway, so do the gym first and come back if you are turned away."],
["boss",{
name:"Misty", role:"Cerulean City Gym · Water", badge:"Cascade Badge",
team:[
 {m:"Psyduck", l:18, t:["Water"], note:"Confusion, Water Gun. Both are weak; Confusion exists to punish the Poison types you might bring."},
 {m:"Starmie", l:19, t:["Water","Psychic"], note:"Scald, Swift, Psywave. Scald can burn; Swift never misses. 100 Special Attack behind 115 Speed — this one is real."}
],
plan:[
 "<b>Lead Bulbasaur.</b> Vine Whip is 2× on both, and Grass resists Water back. Take note that Vine Whip and Razor Leaf are <b>physical</b> in this generation and Bulbasaur’s Attack is 49 — they still win here, but this is your first sign that the Bulbasaur line wants special moves from TMs later.",
 "<b>Zippy Zap the Starmie.</b> Electric is 2×, the crit is guaranteed, and at +2 priority you hit before a 115-Speed Starmie ever moves. This is exactly the fight the Cerulean tutor exists for.",
 "Starmie is <b>Water/Psychic</b>, so do not lead with a Poison type — Psywave and Confusion both come through at full or better.",
 "Bring a <b>Burn Heal</b>. Scald burning your physical attacker turns a two-turn win into a five-turn one.",
 "Neither of Misty’s Pokémon has a Grass-effective move at all. If you are carrying Bulbasaur this fight is essentially a formality."
],
reward:"TM29 Scald, the Cascade Badge, and obedience up to level 30."
}],
["tip","Trace fights you again on the way to Nugget Bridge, immediately after the gym. Same three Pokémon as before — Pidgey, Oddish and his Eevee — a few levels up. Heal before you leave the gym; the game does not give you a break between the two."],
["do",[
 {at:"Cerulean Pokémon Center", t:"Find the Tamer by the counter and learn <b>Zippy Zap</b>.", sub:"Electric, physical, 50 power, always a critical hit, +2 priority. Do this before the gym, not after."},
 {t:"Trade a spare Rattata to the girl on the sofa for an <b>Alolan Rattata</b>.", sub:"Dark/Normal, repeatable, and the only early Dark type in the game."},
 {at:"Cerulean City", t:"Collect the free <b>Bulbasaur</b> from the house next to the Pokémon Center.", sub:"Requires 30 species caught. It arrives at level 12 — put it straight into the party and start closing the level gap."},
 {t:"Listen to the <b>Bike Maniac</b> describe every bicycle for <b>five Heart Scales</b>.", sub:"South-west house. Heart Scales are the currency for the Move Reminder at the Indigo Plateau — you will want them before the Elite Four."},
 {t:"Take the Rare Candy behind the Gym Badge man’s house and the Burn Heal in the south-west."},
 {t:"Beat the Team Rocket Grunt in the robbed house in the north-east for <b>TM10 Dig</b>.", sub:"80 power physical Ground. This is the Vermilion Gym answer if your Sandshrew has not hit level 20."},
 {at:"Cerulean Gym", t:"Show the guide a level-15 Pokémon, then beat <b>Misty</b>.", sub:"Psyduck 18, Starmie 19. Bulbasaur leads, Zippy Zap finishes the Starmie."},
 {t:"Beat <b>Trace</b> as you head for the bridge.", sub:"Pidgeotto, Oddish and his Eevee. Heal first — the game gives you no gap."},
 {at:"Route 24", t:"Cross Nugget Bridge."}
]]
]});

STAGES.push({
id:"k05", ch:"kanto", tag:"Stage 05", place:"Route 24 · Route 25 · Cerulean City",
title:"Nugget Bridge, a free Charmander, and Bill",
lede:"Five trainers in a row, a Rocket recruiter at the end of them, and a boy on the hill who will hand you a Charmander if you have caught fifty species. This is the shortest stage in the game and the one that most rewards having thrown a lot of balls.",
band:[{k:"Party level",v:"21 → 24"},{k:"Badges",v:"2"},{k:"Species caught",v:"aim for 50"}],
body:[
["p","Route 24 is Nugget Bridge — five trainers who must be beaten in sequence, a Nugget at the end, and a man who reveals himself as a Rocket Grunt and fights you for the insult. Route 25 runs east from it to Bill’s Sea Cottage."],
["catch",[
 {n:"Charmander", t:["Fire"], where:"Free from the boy on the north-west hill of Route 24 — needs 50 species caught", why:"<b>The most important free Pokémon in the game.</b> Charizard gets <i>two</i> Mega Stones, 109 Special Attack, and is one of the three Pokémon you can ride through the sky after the League. Arrives at level 14. Put it in the party now."},
 {n:"Squirtle", t:["Water"], where:"Routes 24 and 25 — rare spawn", why:"The third free-starter rare spawn. Vermilion gives you one anyway at 60 species, so this is a spare — but a spare Blastoise is a second Master Trainer fight and a Pokédex insurance policy."},
 {n:"Venonat", t:["Bug","Poison"], where:"Routes 24 and 25 — 30%", why:"Venomoth at 31, and Venomoth is on Koga’s gym team. Log it now while it is 30% of the grass."},
 {n:"Abra", t:["Psychic"], where:"Routes 5, 6, 7 and 8 — 5%", why:"<b>Abra teleports away the instant you approach it in the overworld.</b> Sneak up from behind, and feed it a Razz Berry the moment the throw screen opens. Alakazam needs a trade, but Kadabra is a perfectly good Psychic body on its own."}
]],
["lgpe","<b>Chansey is a rare spawn on almost every route in Kanto</b>, from Route 5 onwards. It is the single richest experience payout in the game, and it also carries Candy. If a Chansey appears, stop what you are doing, feed it a <b>Razz Berry</b> and throw <b>Ultra Balls</b> — it flees readily and it is worth more than the twenty Pidgey you would otherwise catch on that route."],
["loot",[
 {k:"Item", n:"Nugget", where:"Route 24 — from the man at the north end of Nugget Bridge"},
 {k:"TM16", n:"Thunder Wave", where:"Route 25 — north of the path", why:"Paralysis cuts Speed and costs the target a quarter of its turns. It is how you hold a legendary still later without risking a knockout."},
 {k:"TM15", n:"Seismic Toss", where:"Route 25 — reward for beating Coach Trainer Amala", why:"Fixed damage equal to the user’s level, and it ignores type resistance entirely. Genuinely useful on anything that struggles to hurt a wall."},
 {k:"Item", n:"Ether", where:"Route 25 — by the fence south-west of Lass Haley"},
 {k:"Item", n:"Razz Berry ×3", where:"Route 24 — east side of the north-west plateau"},
 {k:"Item", n:"Revive ×3", where:"Route 5 — from Trace at the Underground Path entrance"}
]],
["tip","The bush north-east of Nugget Bridge is one of the game’s <b>walking-Pokémon berry spots</b>. Let a Pokémon out of its ball, walk it over the bush repeatedly, and it will turn up Razz, <b>Silver Razz</b> and occasionally <b>Golden Razz</b> Berries. Golden Razz Berries are what you throw at Articuno, Zapdos, Moltres and Mewtwo — start stockpiling now, because you cannot buy them."],
["do",[
 {at:"Route 24", t:"Beat all five <b>Nugget Bridge</b> trainers in sequence, then take the <b>Nugget</b>.", sub:"The man handing it over is a Rocket Grunt. He fights you immediately."},
 {t:"Collect the free <b>Charmander</b> from the boy on the north-west hill.", sub:"Requires 50 species caught. If you are short, chain the Venonat and Psyduck here — the count is the only thing standing between you and a Charizard."},
 {t:"Work the bush north-east of the bridge with a <b>walking Pokémon</b> for Razz Berries.", sub:"This spot can yield Silver and Golden Razz Berries. Golden Razz is what catches legendaries; you cannot buy it anywhere."},
 {t:"Watch for the <b>Squirtle</b> rare spawn while you clear the route."},
 {t:"Take the <b>Razz Berry ×3</b> on the east side of the north-west plateau."},
 {at:"Route 25", t:"Take <b>TM16 Thunder Wave</b> north of the path.", sub:"Paralysis is your legendary-catching tool. Put it on something that outspeeds."},
 {t:"Beat <b>Coach Trainer Amala</b> for <b>TM15 Seismic Toss</b>."},
 {t:"Take the Ether by the fence and the hidden Nanab Berries south of the ponds."},
 {at:"Sea Cottage", t:"Rescue <b>Bill</b> from his own teleporter and take the <b>S.S. Ticket</b>.", sub:"Talk to the Pokémon in the machine, then to Bill. The ticket is the only way onto the S.S. Anne, which is the only source of Chop Down."},
 {at:"Cerulean City", t:"Go back through town and <b>south</b> onto Route 5.", sub:"You cannot go east yet — that tree needs Chop Down, which is on the ship."},
 {at:"Route 5", t:"Catch an <b>Abra</b> (5%) and a <b>Growlithe</b> (20%, Let’s Go, Pikachu! only).", sub:"Abra teleports away if it sees you coming — approach from behind and berry it immediately."},
 {t:"Take the Revives from Trace at the Underground Path, and the Great Balls on the third ledge."},
 {at:"Route 6", t:"Continue south to Vermilion City."}
]]
]});

STAGES.push({
id:"k06", ch:"kanto", tag:"Stage 06", place:"Route 6 · Vermilion City · S.S. Anne · Vermilion Gym",
title:"Thunder Badge — the S.S. Anne, Chop Down, and a cat you can ride",
lede:"Vermilion is the busiest town in the first half of the game: a free Squirtle, a free Persian you can ride at speed, the ship that teaches your partner its first Secret Technique, and a gym you physically cannot reach until it has.",
band:[{k:"Party level",v:"24 → 28"},{k:"Badge",v:"Thunder"},{k:"Obedience",v:"to Lv 40"}],
body:[
["h","Vermilion City, before the ship"],
["catch",[
 {n:"Squirtle", t:["Water"], where:"Free from Officer Jenny at the north entrance — needs 60 species caught", why:"The third free starter, at level 16. You are not going to field all three, but Blastoise is a Mega, a Master Trainer fight and a Pokédex line — take it and box it."},
 {n:"Persian", t:["Normal"], lg:true, where:"Free from the Black Belt west of the Poké Mart, after catching five Growlithe — Let’s Go, Pikachu! only", why:"<b>Do this errand. It is the best quality-of-life reward in the game.</b> This Persian can be <i>ridden</i>, which moves you faster than running for the rest of the run. Eevee players get a rideable Arcanine for catching five Meowth instead; you get the cat."},
 {n:"Alolan Geodude", t:["Rock","Electric"], where:"Trade a Geodude to the hiker on the Pokémon Center sofa — repeatable", why:"<b>Rock/Electric exists nowhere else in the game.</b> Repeatable, so trade every spare Geodude you took out of Mt. Moon."},
 {n:"Growlithe", t:["Fire"], lg:true, where:"Routes 5, 6, 7 and 8 — 20%, Let’s Go, Pikachu! only", why:"<b>Catch five of these.</b> One is the Persian errand, one is your Fire body for the rest of the game, and the rest are Candy. Read the evolution warning below before you touch a Fire Stone."}
]],
["team","<b>Do not evolve Growlithe.</b> Growlithe learns Flamethrower at 17, Heat Wave at 24, Crunch at 28, Outrage at 31, Play Rough at 35 and <b>Flare Blitz at 38</b>. Arcanine learns <i>nothing</i> after evolving — its level-up list is four moves it already has. Hold B through every level-up until Flare Blitz is in at 38, then feed it the Fire Stone. An early Arcanine is a permanently worse Arcanine."],
["h","The S.S. Anne"],
["p","Show the S.S. Ticket at the pier and the ship opens up: two decks of trainers, a cabin full of items, Trace waiting outside the captain’s quarters, and — after you rub the captain’s back — the reason you are here."],
["team","<b>Chop Down is the first Secret Technique.</b> Your partner learns it from the captain, it takes <b>no move slot</b>, it is used from the field menu rather than in battle, and it replaces Cut. That is the pattern for all five: they belong to the Pikachu, not to your party, and they never cost you an attack. Once you have it, five things you walked past open up — the tree by the Vermilion Gym, the Old Amber in Pewter, the east side of Cerulean, TM11 in Viridian, and the east half of Route 2."],
["warn","<b>The ship sails the moment you leave, and it never comes back.</b> Sweep both decks completely before you step off: Full Heal, Elixir, Super Potion, Paralyze Heal, Super Repel, Revive and a Nugget, plus every trainer on board. There is no second visit."],
["loot",[
 {k:"Item", n:"Nugget", where:"S.S. Anne 2F — fourth room, past the two Gentlemen"},
 {k:"Item", n:"Super Repel", where:"S.S. Anne 1F — the kitchen"},
 {k:"Item", n:"Revive", where:"S.S. Anne 2F — second cabin from the left"},
 {k:"Item", n:"Full Heal", where:"S.S. Anne B1F — the middle cabin"},
 {k:"Key", n:"Chop Down", where:"S.S. Anne — the captain’s quarters, after helping him", why:"Secret Technique. Costs no move slot. Cuts the small trees blocking the Vermilion Gym, Pewter Museum, east Cerulean and east Route 2."},
 {k:"TM36", n:"Thunderbolt", where:"From Lt. Surge", why:"90 power special Electric with a paralysis chance. Your partner already learns it at 21 — put this one on something else, or skip it and keep Zippy Zap."},
 {k:"Item", n:"Big Pearl", where:"Vermilion City — behind the person on the bench east of the Fan Club", why:"Needs Sea Skim. Come back in stage 12."}
]],
["boss",{
name:"Lt. Surge", role:"Vermilion City Gym · Electric", badge:"Thunder Badge",
team:[
 {m:"Voltorb", l:25, t:["Electric"], note:"Thunderbolt, Swift, Light Screen. The Light Screen halves your special damage for five turns — hit it physically."},
 {m:"Magnemite", l:25, t:["Electric","Steel"], note:"Thunderbolt, Sonic Boom. Electric/Steel means Ground is <b>4×</b> on it."},
 {m:"Raichu", l:26, t:["Electric"], note:"Thunderbolt, Quick Attack, Double Kick. Double Kick is 2× on Rock and Steel, so an Alolan Geodude is not the answer here."}
],
plan:[
 "<b>Lead your Sandshrew and use Dig.</b> Ground is immune to Electric, so all three of Surge’s Pokémon are throwing Thunderbolts at a Pokémon that cannot be hit by them, and Dig is 2× back into everything he owns and <b>4×</b> into Magnemite.",
 "If Sandshrew has not reached level 20 for Dig by level-up, <b>TM10 Dig</b> from the Cerulean Rocket Grunt does the same job.",
 "Do not bring your partner. Electric on Electric is resisted both ways, Raichu outstats a Pikachu, and Zippy Zap into a Light Screen is a waste of a guaranteed crit.",
 "Voltorb’s <b>Light Screen</b> only touches special damage. Dig, Karate Chop and Headbutt all go straight through it.",
 "The gym door is behind a small tree — <b>you must have Chop Down from the S.S. Anne before you can reach it.</b> Inside, the barrier needs two switches hidden in the bins: find the first, and the second is always in an adjacent bin. Get it wrong and both reset."
],
reward:"TM36 Thunderbolt, Lt. Surge’s Autograph, the Thunder Badge, and obedience up to level 40."
}],
["tip","<b>The Pokémon Fan Club chairman gives you a free Pikachu outfit</b> for listening to him, and a Raichu set later once you and your partner are best friends. Cosmetic — but partner friendship is not: it drives Pika Papow’s power, and a maxed-out friendship also gives every Pokémon in the party up to a <b>10% boost to all stats</b>. Play with your partner, feed it Candy and let it walk beside you."],
["do",[
 {at:"Route 6", t:"Catch <b>five Growlithe</b> across Routes 5 and 6 before you reach town.", sub:"20% each on both routes, Let’s Go, Pikachu! only. Five is the exact number the Vermilion errand wants."},
 {at:"Vermilion City", t:"Take the free <b>Squirtle</b> from Officer Jenny at the north entrance.", sub:"Requires 60 species caught. Level 16, and the last of the three free starters."},
 {t:"Tell the Black Belt west of the Poké Mart you prefer <b>Growlithe</b>, catch five, and come back for a rideable <b>Persian</b>.", sub:"Riding it is permanently faster than running. This is a five-minute errand with an all-game payoff."},
 {t:"Trade a spare Geodude on the Pokémon Center sofa for an <b>Alolan Geodude</b>.", sub:"Rock/Electric — a typing that appears nowhere else in the Kanto dex. Repeatable."},
 {t:"Listen to the <b>Pokémon Fan Club chairman</b> for the Pikachu clothing set."},
 {at:"Vermilion Port", t:"Show the <b>S.S. Ticket</b> to the sailor and board the ship."},
 {at:"S.S. Anne", t:"Sweep <b>both decks completely</b> before you go near the captain.", sub:"Full Heal on B1F, Paralyze Heal and Super Repel on 1F, Revive and a Nugget on 2F, plus every trainer. The ship sails when you leave and never returns."},
 {t:"Beat <b>Trace</b> outside the captain’s quarters.", sub:"Pidgeotto 20, Oddish 20, Eevee 21. His Oddish has Sleep Powder now — lead something fast."},
 {t:"Help the captain and learn <b>Chop Down</b>.", sub:"Your first Secret Technique. It takes no move slot and it is used from the field menu, not in battle."},
 {at:"Vermilion City", t:"Chop the tree in the south-west to open the <b>gym</b>."},
 {at:"Vermilion Gym", t:"Solve the two-bin switch puzzle and beat <b>Lt. Surge</b>.", sub:"Find the first switch; the second is always in an adjacent bin. Voltorb 25, Magnemite 25, Raichu 26 — lead Sandshrew and Dig."},
 {t:"Speak to <b>Misty</b> outside afterwards.", sub:"She points you at the Diglett’s Cave entrance on Route 11, which is where you are going next."},
 {at:"Route 11", t:"Head east out of Vermilion."}
]]
]});
