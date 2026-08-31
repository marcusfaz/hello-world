/* ===================== HOENN 01–05 ===================== */

STAGES.push({
id:"h01", ch:"hoenn", tag:"Stage 01", place:"Littleroot Town · Route 101 · Oldale · Route 103",
title:"Littleroot, and the only decision that matters yet",
lede:"Twenty minutes of scripted setup with one real choice buried in it. Make that choice correctly and the first four gyms stop being fights.",
band:[{k:"Party level",v:"5 → 8"},{k:"Badges",v:"0"},{k:"New HMs",v:"none"}],
body:[
["p","You arrive in the back of a moving truck. Your mother sends you upstairs to <b>set the clock</b> — do it, because berry growth, tides at Shoal Cave and the Lilycove lottery all run off it. Then visit Professor Birch's house, go upstairs to meet your rival, and walk north."],
["team","<b>Take Mudkip.</b> Marshtomp becomes Water/Ground at 16, which makes it <i>immune</i> to Wattson's entire gym, resistant to Roxanne's Rock, and a hard counter to Flannery. Swampert has 110 Attack and 100 HP, learns Earthquake by itself at 52, and its only real weakness is Grass. Nothing else in the game gives you that much for free."],
["ver","Your rival takes the starter that beats yours, so with Mudkip you will be fighting the <b>Treecko</b> line all game. That is the one cost of this pick: Grass is 4× on Swampert. It is a cost worth paying — a Grovyle at level 20 is not going to beat a five-Pokémon team, and Swampert's typing carries you through eight gyms."],
["h","Route 101 and the first hour"],
["do",[
 {at:"Littleroot Town", t:"Go upstairs in your house and <b>set the clock</b>", sub:"Berries, Shoal Cave tides and the Lilycove lottery all read it. Getting it wrong costs you days of berry growth."},
 {t:"Go downstairs, watch the news, then visit <b>Birch's house</b> next door"},
 {t:"Go upstairs and meet your rival", sub:"Brendan if you are playing as May, May if you are playing as Brendan."},
 {at:"Route 101", t:"Walk north until Birch is chased by a <b>Zigzagoon</b>"},
 {t:"Open his bag and <b>take Mudkip</b>", sub:"The Water/Ground typing it evolves into is the single best defensive shell available in Hoenn."},
 {t:"Beat the wild Zigzagoon", sub:"You cannot lose this in any way that matters."},
 {at:"Oldale Town", t:"Talk to the Poké Mart clerk for a free <b>Potion</b>"},
 {t:"Step onto Route 102 once, get turned back by the researcher", sub:"Scripted. It costs one step and opens Route 103."},
 {at:"Route 103", t:"Walk north-east and <b>beat your rival</b>", sub:"One level-5 starter. Tackle it until it stops moving."},
 {t:"Return to <b>Birch's Lab</b> and take the <b>Pokédex</b>"},
 {t:"Take the five <b>Poké Balls</b> your rival leaves you outside the lab"},
 {t:"Talk to your mother outside your house for the <b>Running Shoes</b>", sub:"Hold B to run. Do not skip this — it halves the length of the whole game."},
 {t:"Catch a <b>Zigzagoon</b> on Route 101 or 103 and keep it", sub:"Pickup pays you items for the entire game and its table scales with the carrier's level. This is the highest-value filler slot in Emerald."},
 {t:"Catch a <b>Wurmple</b> on Route 101", sub:"Two dex entries in one line: it splits randomly into Silcoon/Beautifly or Cascoon/Dustox. You will need both eventually."},
 {t:"Catch a <b>Poochyena</b>", sub:"45% on Route 101. Dex credit and a body for the next few trainers."}
]],
["h","Worth catching now"],
["catch",[
 {n:"Zigzagoon", t:["Normal"], where:"Route 101 — 10%, Route 103 — 20%", why:"<b>Catch one and never box it.</b> Pickup gives a 10% chance of a free held item after every won battle, and in Emerald the item table climbs with the carrier's level — Rare Candies from 21, Protein from 31, Leftovers at 91. It also learns Cut, Strength, Rock Smash and Surf, so it doubles as your HM mule."},
 {n:"Poochyena", t:["Dark"], where:"Route 101 — 45%, Route 103 — 60%", why:"Everywhere, and Mightyena is a passable Bite user for the early game. Mostly this is a dex entry and a body — it falls off hard by Mauville."},
 {n:"Wurmple", t:["Bug"], where:"Route 101 — 45%, Route 104 — 20%", why:"Its evolution is decided by a hidden value at level 7, so you cannot choose. Catch two and you will get one of each branch. Four dex entries hang off this one catch."}
]],
["tip","There is no Poké Mart worth shopping at yet and you have almost no money. Do not buy Poké Balls in Oldale — Route 104's shop is on your way and by then you will be able to afford a useful number."]
]});

STAGES.push({
id:"h02", ch:"hoenn", tag:"Stage 02", place:"Route 102 · Petalburg · Route 104 · Petalburg Woods",
title:"The Ralts hunt, and why you walk past your father's gym",
lede:"Norman will not fight you until you have four badges, so Petalburg is a supply stop. The reason to slow down here is Route 102, which holds the best Pokémon in the early game at a 4% encounter rate.",
band:[{k:"Party level",v:"8 → 13"},{k:"Badges",v:"0"},{k:"New HMs",v:"none"}],
body:[
["team","<b>Stop on Route 102 and hunt a Ralts until you have one.</b> It is 4% — expect twenty minutes — and it is worth every one of them. Gardevoir has <b>125 Special Attack</b>, learns Calm Mind at 21 and Psychic at 26 with no TM at all, and is the single strongest thing you can own before the Elite Four. There is one other Ralts patch in the game and it is no more common."],
["warn","<b>Gardevoir is pure Psychic in Emerald, not Psychic/Fairy.</b> That means Sidney's Dark types take <i>zero</i> damage from Psychic and beat it outright, and it has no Fairy resistance to Drake's Dragons. Build it as a Calm Mind sweeper with Thunderbolt for coverage, and keep it away from Dark types entirely."],
["h","The walk"],
["do",[
 {at:"Route 102", t:"Hunt Route 102's tall grass until you catch a <b>Ralts</b>", sub:"4%. This is the single most valuable twenty minutes you will spend in the game."},
 {t:"Catch a <b>Lotad</b> and a <b>Seedot</b> while you wait", sub:"Seedot is 1% here and much easier on Route 117 later — take it if it shows, do not hunt it."},
 {t:"Pick up the <b>Potion</b> and the hidden <b>Poké Ball</b> on the route"},
 {at:"Petalburg City", t:"Enter the <b>Petalburg Gym</b> and talk to your father", sub:"Norman will not battle you until you hold four badges. This visit is story only."},
 {t:"Follow <b>Wally</b> out to Route 102 and watch him catch a Ralts", sub:"Scripted, and it does not consume the wild Ralts you want. Lend him the Zigzagoon."},
 {t:"Return to the gym, then leave west", sub:"Norman now names all eight Gym Leaders — Roxanne, Brawly, Wattson, Flannery, himself, Winona, Tate & Liza, Juan."},
 {at:"Route 104 (south)", t:"Catch a <b>Taillow</b>", sub:"10% here, 20% on Route 116. Swellow is the fastest thing you can own for most of the game — 125 Speed."},
 {t:"Catch a <b>Marill</b>", sub:"20%. Pure Water in Generation III, not Water/Fairy."},
 {t:"Take <b>TM09 Bullet Seed</b> from the boy south of the flower shop"},
 {t:"Buy <b>Potions and Poké Balls</b> at the Pretty Petal flower shop counter", sub:"Also take the free Wailmer Pail here — it is what waters your berries."},
 {t:"Plant a berry in the soft soil outside the shop", sub:"Berries are the only renewable healing item in Hoenn and the only route to Pokéblocks."},
 {at:"Petalburg Woods", t:"Catch a <b>Shroomish</b>", sub:"15%. Breloom is Grass/Fighting — it is your answer to Sidney's whole Dark team and to Glacia's Ice, and it plugs the Grass hole in Swampert's coverage."},
 {t:"Catch a <b>Slakoth</b>", sub:"5%, and it is only here and Route 116. Truant makes it awkward to use but Slaking is a dex entry you will otherwise chase for hours."},
 {t:"Beat the <b>Team Aqua Grunt</b> blocking the Devon Researcher", sub:"Your first Team Aqua fight. A level-9 Poochyena."},
 {t:"Take the <b>Great Ball</b> the researcher gives you"},
 {t:"Pick up the <b>Poké Ball</b>, <b>Paralyze Heal</b> and hidden <b>Ether</b> in the woods"},
 {at:"Route 104 (north)", t:"Note <b>Mr. Briney's cottage</b> on the shore and carry on north", sub:"You will be back for a boat ride in two stages."},
 {t:"Walk into Rustboro City"}
]],
["h","Worth catching now"],
["catch",[
 {n:"Ralts", t:["Psychic"], where:"<b>Route 102 — 4%.</b> Also Route 117 at 4%", why:"<b>Pure Psychic in Emerald, not Psychic/Fairy.</b> Gardevoir's 125 Special Attack is the highest offensive stat you can field before the League, and it needs no TMs at all — Calm Mind at 21, Psychic at 26. Hunt for it now; the alternative patch is no more generous."},
 {n:"Shroomish", t:["Grass"], where:"Petalburg Woods — 15%", why:"Breloom at 23 is <b>Grass/Fighting</b>, which is the coverage this team is otherwise missing. Fighting is 2× on Sidney's five Dark types and 2× on Glacia's Ice, and Grass answers the Water and Ground types that wall Swampert."},
 {n:"Taillow", t:["Normal","Flying"], where:"Route 104 — 10%, Route 116 — 20%", why:"Swellow has <b>125 Speed</b> and moves first against almost everything in the game. It learns Aerial Ace by itself at 38, so do not spend Winona's TM on it."},
 {n:"Marill", t:["Water"], where:"Route 104 — 20%", why:"<b>Pure Water here — Gen 3 has no Fairy type.</b> Azumarill is a fine HM carrier and a dex entry, but Swampert already does this job better. Catch it, log it, move on."},
 {n:"Slakoth", t:["Normal"], where:"Petalburg Woods — 5%, Route 116 — rare", why:"Truant means it attacks every other turn, so it is painful to raise — but Slaking's 670 base stat total is the highest of any non-legendary in Generation III, and the dex entry is only here and on Route 116."},
 {n:"Lotad", t:["Water","Grass"], where:"Route 102 — 20%, Route 114 — 30%", why:"Ludicolo needs a Water Stone and is genuinely good — Water/Grass has only two weaknesses and Swift Swim doubles its Speed in rain. A real alternative sixth slot if you would rather not raise a Manectric."}
]],
["tip","<b>Do not use the Great Ball on anything yet.</b> Save it for the Ralts if you keep losing it, or for Slakoth — a 5% encounter you fail to catch is a 5% encounter you have to find again."]
]});

STAGES.push({
id:"h03", ch:"hoenn", tag:"Stage 03", place:"Rustboro City · Route 116 · Rusturf Tunnel",
title:"Stone Badge — Roxanne, and the Devon errand that opens the map",
lede:"Roxanne is a formality if you took Mudkip. The real content here is the Devon Corporation chain, which hands you Cut, a PokéNav, and the two deliveries that unlock Dewford and Slateport.",
band:[{k:"Party level",v:"13 → 17"},{k:"Badge",v:"Stone"},{k:"Unlocks",v:"HM01 Cut"}],
body:[
["team","<b>Fight Roxanne with Marshtomp and nothing else.</b> Mud-Shot at 16 is Ground, and Ground is 2× on both Geodude and 2× on Nosepass. If you are still a Mudkip, Water Gun is 4× on the Geodude pair. This gym is over in four turns."],
["h","The walk"],
["do",[
 {at:"Rustboro City", t:"Take <b>HM01 Cut</b> from the Cutter in the house west of the Pokémon Center", sub:"You cannot use it outside battle until the Stone Badge is in the case."},
 {t:"Talk to the man on the Pokémon School's ground floor for a free <b>Quick Claw</b>"},
 {t:"Buy <b>Poké Balls ×10</b> and two <b>Super Potions</b> at the Mart"},
 {t:"Beat <b>Roxanne</b> in the Rustboro Gym", sub:"Two Lv 12 Geodude and a Lv 15 Nosepass. Ground and Water are both 2× or better on everything she owns."},
 {t:"Take the <b>Stone Badge</b> and <b>TM39 Rock Tomb</b>", sub:"The badge makes Cut usable outside battle and makes traded Pokémon up to Lv 20 obey."},
 {t:"Talk to the <b>Devon Researcher</b> outside the gym", sub:"Team Aqua has stolen the Devon Goods. This starts the chain that opens half the map."},
 {at:"Route 116", t:"Catch an <b>Abra</b>", sub:"10%. Throw a ball on turn one — it Teleports away otherwise. Alakazam needs a trade, but Kadabra is already a real Pokémon."},
 {t:"Catch a <b>Nincada</b>", sub:"20%. This is the <b>Shedinja</b> line: evolve Nincada at 20 with a spare Poké Ball and an empty party slot and you get Ninjask <i>and</i> Shedinja. Two dex entries from one catch, and it only works here and on Route 117."},
 {t:"Catch a <b>Skitty</b> if one shows", sub:"2%, and this is one of only two patches. Pure Normal in Gen 3. Do not hunt it now — Route 116 is on your way back later."},
 {t:"Take <b>TM Case</b>… take the <b>Repel</b>, <b>X Special</b> and hidden <b>Poké Ball</b> along the route"},
 {t:"Talk to <b>Mr. Briney</b> outside the Rusturf Tunnel", sub:"Team Aqua has his Wingull, Peeko."},
 {at:"Rusturf Tunnel", t:"Beat the <b>Team Aqua Grunt</b> and recover the <b>Devon Goods</b>", sub:"Rescues Peeko, which is what makes Briney sail you to Dewford later."},
 {t:"Catch a <b>Whismur</b>", sub:"100% of the tunnel. Exploud is a serviceable Normal attacker and this is the easiest dex line in the game."},
 {t:"Note the rock wall blocking the east end", sub:"You need <b>Rock Smash</b>, which is in Mauville. You will be back for HM04 Strength."},
 {at:"Devon Corporation", t:"Return the Devon Goods on 2F", sub:"You are given the <b>Letter</b> for Steven in Dewford and the <b>Devon Parts</b> for Captain Stern in Slateport."},
 {t:"Take the <b>PokéNav</b> from Mr. Stone on 3F", sub:"This is Emerald's <b>Match Call</b>, which replaced Ruby and Sapphire's Trainer's Eyes. It is how you rematch trainers and, later, Gym Leaders."},
 {t:"Fight your rival outside the Pokémon Center (optional)", sub:"Lv 13 Wingull and a Lv 15 Treecko if you took Mudkip. Free experience — take it."},
 {t:"Walk back south through Petalburg Woods to <b>Mr. Briney's cottage</b> on Route 104"},
 {t:"Ask Briney for a ride to <b>Dewford Town</b>"}
]],
["boss",{name:"Roxanne", role:"Gym Leader · Rock", badge:"Stone Badge", team:[
 {m:"Geodude", l:12, t:["Rock","Ground"], note:"Rock Head. Rock Tomb drops your Speed — irrelevant if it dies first."},
 {m:"Geodude", l:12, t:["Rock","Ground"], note:"Identical to the first. Rock Throw, Rock Tomb, Defense Curl."},
 {m:"Nosepass", l:15, t:["Rock"], note:"Holds an <b>Oran Berry</b> and opens with <b>Block</b>, which traps you in. Sturdy does nothing here — in Gen 3 it only blocks OHKO moves."}
], plan:[
 "<b>Lead Marshtomp.</b> Mud-Shot is 2× on all three; Water Gun is 4× on the Geodude pair. Nothing she owns threatens it.",
 "If you are still a Mudkip at Lv 15, Water Gun still four-times both Geodude. Only Nosepass takes real turns.",
 "<b>Nosepass will Block you in.</b> That is fine — you were not switching. It also means a weak lead gets stuck there, so do not open with your Zigzagoon.",
 "Bullet Seed from TM09 works if you have nothing else: Grass is 4× on Geodude."
], reward:"Stone Badge, <b>TM39 Rock Tomb</b>, and Cut becomes usable in the field."}],
["h","Worth catching now"],
["catch",[
 {n:"Nincada", t:["Bug","Ground"], where:"Route 116 — 20%, Route 117 — 20%", why:"<b>Evolve it at 20 with an empty party slot and a spare Poké Ball in the bag and you get two Pokémon</b> — Ninjask <i>and</i> Shedinja. Shedinja has 1 HP and Wonder Guard, which makes it immune to everything except its five weaknesses. It is a genuine Battle Frontier piece and three dex entries."},
 {n:"Abra", t:["Psychic"], where:"Route 116 — 10%", why:"Throw the ball on turn one. Kadabra at 16 is a real special attacker, and Alakazam needs a trade you probably will not make — Kadabra is enough."},
 {n:"Whismur", t:["Normal"], where:"Rusturf Tunnel — 100%", why:"Loudred at 20, Exploud at 40. 91 Special Attack on Exploud and it learns Overheat, Flamethrower, Ice Beam and Surf by TM. A better Normal type than anything else this early."},
 {n:"Skitty", t:["Normal"], where:"Route 116 — 2%", why:"<b>Pure Normal in Gen 3</b>, and one of only two places it appears. Cute Charm and a Moon Stone evolution. Take it if it shows; do not spend an hour hunting it now."},
 {n:"Aron", t:["Steel","Rock"], where:"Granite Cave B1F — next stage", why:"Noted here so you plan for it: this is your fourth team slot and the reason Phoebe and half of Sidney's team stop working."}
]],
["ver","Roxanne's Emerald team is the same three as Ruby and Sapphire, but her <b>rematch</b> teams are not — Match Call lets you fight her again in a <b>Double Battle</b> with Golem, Kabutops, Onix and eventually Aerodactyl and Steelix, none of which are catchable in Hoenn. That is an Emerald-only system and it is covered in the post-game chapter."]
]});

STAGES.push({
id:"h04", ch:"hoenn", tag:"Stage 04", place:"Route 105–107 · Dewford Town · Granite Cave",
title:"Knuckle Badge — Brawly, and the cave you have to visit twice",
lede:"Granite Cave gives you Flash at the entrance and then refuses to let you use it until you have beaten Brawly. Plan on two trips, and use the first one to catch the Aron that carries this team to the Elite Four.",
band:[{k:"Party level",v:"17 → 21"},{k:"Badge",v:"Knuckle"},{k:"Unlocks",v:"HM05 Flash"}],
body:[
["warn","<b>You cannot use Flash outside battle until you hold the Knuckle Badge.</b> The Hiker hands you HM05 at the Granite Cave entrance on your first visit, and the dark floors stay dark. Do the lit floors now, beat Brawly, then come back for Steven and TM47. Anyone who tells you to light the cave before the gym has the order wrong."],
["team","<b>Catch an Aron on Granite Cave B1F and commit to it.</b> 40% on that floor. Aggron is Steel/Rock, and in Generation III <b>Steel resists Ghost and Dark</b> — which means one Pokémon walls Phoebe's entire Elite Four gauntlet and most of Sidney's. It also resists Ice, so Glacia is manageable. Aron is slow to come good (Lairon at 32, Aggron at 42) so start it now."],
["h","The walk"],
["do",[
 {at:"Route 105–107", t:"Sail with Briney to <b>Dewford Town</b>", sub:"You pass Route 105 on the way. You cannot stop — Surf comes much later."},
 {at:"Dewford Town", t:"Talk to the man in <b>Dewford Hall</b> and learn the current fad", sub:"The trendy phrase system feeds Feebas's location on Route 119 much later. Say hello now so the counter starts."},
 {t:"Take the <b>Old Rod</b> from the fisherman in the house by the shore", sub:"Magikarp and Tentacool only, but it is the first fishing rod and some dex entries are water-only."},
 {at:"Granite Cave", t:"Take <b>HM05 Flash</b> from the Hiker just inside the entrance"},
 {t:"Catch a <b>Makuhita</b> on 1F", sub:"50%. Hariyama has 144 Attack and Thick Fat, and Fighting is what breaks Steel, Rock, Dark and Ice open. A strong alternative to Breloom."},
 {t:"Go down to <b>B1F</b> and catch an <b>Aron</b>", sub:"40%. This is the fourth member of your team — see the roster board above."},
 {t:"Catch a <b>Sableye</b> on B1F", sub:"10%. <b>Dark/Ghost has no weaknesses at all in Generation III</b> — Fairy did not exist yet. It is a genuine oddity and a Frontier piece."},
 {t:"Catch a <b>Zubat</b> and a <b>Geodude</b> for the dex", sub:"Both are everywhere later; take them now and stop thinking about them."},
 {t:"Leave the cave — <b>do not try the dark floors yet</b>", sub:"Flash does not work in the field without the Knuckle Badge."},
 {at:"Dewford Gym", t:"Beat <b>Brawly</b>", sub:"Machop, Meditite and a Lv 19 Makuhita. The gym floor is dark and the lit path is a maze — talk to each trainer to widen the light."},
 {t:"Take the <b>Knuckle Badge</b> and <b>TM08 Bulk Up</b>", sub:"Flash now works in the field. Traded Pokémon obey to Lv 30."},
 {at:"Granite Cave (second visit)", t:"Use <b>Flash</b> and go down to <b>B2F</b>"},
 {t:"Give the <b>Letter</b> to <b>Steven</b> in the back room"},
 {t:"Take <b>TM47 Steel Wing</b> from Steven", sub:"70 power, Steel, physical. It goes on Swellow — Steel Wing off 125 Speed is real damage and it hits the Rock and Ice types that Flying cannot."},
 {t:"Catch a <b>Nosepass</b> on B2F", sub:"30%, and B2F is the only wild patch for it. Do not skip it — hunting it later means a second Flash trip."},
 {t:"Pick up the <b>Everstone</b>, <b>Rare Candy</b> and <b>Escape Rope</b> in the cave"},
 {t:"Ask Briney to sail you on to <b>Route 109</b>"}
]],
["boss",{name:"Brawly", role:"Gym Leader · Fighting", badge:"Knuckle Badge", team:[
 {m:"Machop", l:16, t:["Fighting"], note:"Guts. Karate Chop, Low Kick, Seismic Toss and <b>Bulk Up</b> — it will raise its own Attack if you let it."},
 {m:"Meditite", l:16, t:["Fighting","Psychic"], note:"<b>Pure Power doubles its Attack.</b> It also carries Light Screen and Reflect. Frail, so kill it before it sets a screen."},
 {m:"Makuhita", l:19, t:["Fighting"], note:"Holds a <b>Sitrus Berry</b>. Thick Fat, Bulk Up, and Reversal — which gets <i>stronger</i> as its HP drops."}
], plan:[
 "<b>Lead Marshtomp and use Mud-Shot.</b> Fighting does neutral damage to Water/Ground and Marshtomp outbulks all three.",
 "<b>Meditite is the dangerous one.</b> Pure Power doubles its Attack, so it hits harder than the level-19 Makuhita. Remove it first.",
 "A Taillow works too — Flying is 2× on Machop and Makuhita, and Wing Attack at 13 is enough. Keep it away from Meditite's Psychic.",
 "<b>Do not let Makuhita get low and live.</b> Reversal scales inversely with its remaining HP; at a sliver it hits for 200 power. Kill it in one blow from a healthy state or keep it above half.",
 "Ignore Bulk Up. None of them get more than one turn of it if you are attacking properly."
], reward:"Knuckle Badge, <b>TM08 Bulk Up</b>, and Flash becomes usable in the field."}],
["h","Worth catching now"],
["catch",[
 {n:"Aron", t:["Steel","Rock"], where:"<b>Granite Cave B1F — 40%</b>, B2F — 40%", why:"<b>The most important catch in the first half of the game.</b> Steel resists Ghost and Dark in Generation III, so an Aggron walls Phoebe outright and blanks most of Sidney. It resists Ice for Glacia and Dragon for Drake. Lairon at 32, Aggron at 42 — start it now or it will not be ready."},
 {n:"Makuhita", t:["Fighting"], where:"Granite Cave 1F — 50%", why:"Hariyama at 24: <b>144 Attack</b>, 144 HP and Thick Fat. If you would rather not raise a Shroomish, this is the Fighting slot. Whichever you take, take one — Fighting is how you beat Sidney and Glacia."},
 {n:"Sableye", t:["Dark","Ghost"], where:"Granite Cave B1F — 10%, B2F — 20%", why:"<b>Dark/Ghost has zero weaknesses in Generation III.</b> Nothing on the type chart hits it for more than neutral. Its stats are poor, but it is a real Battle Frontier piece and a dex entry you will not find elsewhere until Victory Road."},
 {n:"Nosepass", t:["Rock"], where:"<b>Granite Cave B2F — 30%</b>", why:"<b>This is the only wild Nosepass in Hoenn.</b> If you leave without it you are coming back with Flash specifically for this. Catch it on the Steven trip."},
 {n:"Mawile", t:["Steel"], where:"Victory Road — much later, 5%", why:"Noted so you stop looking: Mawile is <i>not</i> in Granite Cave in Emerald. It is a Victory Road catch at 5% and it is <b>pure Steel</b>, not Steel/Fairy."}
]]
]});

STAGES.push({
id:"h05", ch:"hoenn", tag:"Stage 05", place:"Route 109 · Slateport City",
title:"Slateport — the museum, Archie, and the first Battle Tent",
lede:"A big town with three systems bolted to it: the Devon delivery that advances the plot, the first of Emerald's three Battle Tents, and the market that sells two TMs you will actually use.",
band:[{k:"Party level",v:"21 → 24"},{k:"Badges",v:"2"},{k:"New HMs",v:"none"}],
body:[
["ver","<b>Slateport's Contest Hall is a Battle Tent in Emerald.</b> Ruby and Sapphire put a Contest Hall here; Emerald replaced it, along with Verdanturf's and Fallarbor's, and moved <i>all four</i> Contest ranks to a single hall in Lilycove. If a walkthrough tells you to enter a Contest in Slateport, it is a Ruby/Sapphire walkthrough."],
["h","The walk"],
["do",[
 {at:"Route 109", t:"Talk to the man on the beach for a free <b>Soft Sand</b>"},
 {t:"Sweep the beach for the hidden <b>Heart Scale</b> and the <b>Potion</b>", sub:"Heart Scales buy back forgotten moves from the Move Maniac in Fallarbor. Pick up every one you see."},
 {at:"Slateport City", t:"Visit the <b>Pokémon Fan Club</b> and talk to the chairman", sub:"He gives you a Soothe Bell once your lead Pokémon likes you enough. Friendship is what powers Return."},
 {t:"Take the free <b>Soothe Bell</b> when he offers it"},
 {t:"Buy <b>TM43 Secret Power</b> at the Slateport Market", sub:"₽3,000. This is what builds a Secret Base, and it is a fine 70-power Normal move in the meantime."},
 {t:"Take <b>TM41 Torment</b> from the Sailor in the <b>Battle Tent</b>"},
 {t:"Run one <b>Battle Tent</b> set", sub:"Slateport's tent is the Battle Factory in miniature — you battle with rented Pokémon and may swap for one of your defeated opponent's after each win. It is the cheapest practice for the real Frontier."},
 {t:"Go to <b>Stern's Shipyard</b> and learn Captain Stern is at the museum"},
 {at:"Oceanic Museum", t:"Pay the ₽50 entry and go up to 2F"},
 {t:"Beat the two <b>Team Aqua Grunts</b>"},
 {t:"Take <b>TM46 Thief</b> from the grunt", sub:"In Emerald this is a <b>Team Aqua</b> Grunt. In Ruby it is Team Magma — both teams exist here, so check the uniform, not the walkthrough."},
 {t:"Give the <b>Devon Parts</b> to Captain Stern", sub:"<b>Archie</b> appears, monologues, and leaves. No battle yet."},
 {t:"Talk to the <b>Name Rater</b> in the house by the Pokémon Center", sub:"Free nickname changes forever. Worth knowing about."},
 {t:"Leave north onto Route 110"}
]],
["h","Worth catching now"],
["catch",[
 {n:"Tentacool", t:["Water","Poison"], where:"Route 109 and 103 — Old Rod and surfing", why:"Common, and Tentacruel is a genuinely good Water type with 120 Special Defence. Mostly a dex entry given you have Swampert."},
 {n:"Wingull", t:["Water","Flying"], where:"Route 104, 109, 110 — very common", why:"Pelipper is a fine HM carrier — Surf, Fly and Waterfall on one body — and it is the dex entry for the line. Not a battler."},
 {n:"Magikarp", t:["Water"], where:"Old Rod, anywhere", why:"Gyarados at 20. In Generation III <b>Gyarados' Surf runs off its 60 Special Attack, not its 125 Attack</b>, so build it physical — Bite, Earthquake, Return. Worth a slot if you want a second heavy hitter."}
]],
["h","The Battle Tents — Emerald only"],
["p","Three of them, and they are the Frontier's tutorial. Each mirrors one Battle Frontier facility, runs three battles at a fixed level, and costs nothing to enter. There is no reason not to run each once when you pass through."],
["table",{cols:["Tent","Mirrors","What the rules do","When you reach it"],rows:[
 ["<b>Slateport</b>","Battle Factory","You battle with <b>rented</b> Pokémon and may swap for one of the opponent's after each win.","Now — Stage 05"],
 ["<b>Verdanturf</b>","Battle Palace","Your Pokémon <b>choose their own moves</b> based on Nature. You give no commands at all.","After Wattson — Stage 06"],
 ["<b>Fallarbor</b>","Battle Arena","Three turns, then a judge scores mind, skill and body. Switching is banned.","Stage 07"]
]}],
["tip","<b>The Verdanturf tent is where you learn what Natures do.</b> A Pokémon with an aggressive Nature picks attacks; a timid one picks status. It is the only place the game shows you that mapping directly, and it is exactly how the Battle Palace works when you get there with real stakes."]
]});
