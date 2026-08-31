/* ===================== FILLING THE HOENN DEX ===================== */

STAGES.push({
id:"dex-hoenn", ch:"dex", tag:"Pokédex", place:"202 entries · 200 required", wide:true,
title:"The Hoenn Dex — and the seven you cannot catch",
lede:"Two hundred and two entries. A hundred and twenty-eight of them are wild encounters somewhere in Emerald. The rest come from evolution, breeding, or another cartridge — and seven of them come from another cartridge and nothing else.",
body:[
["warn","<b>You cannot complete the Hoenn Dex on one Emerald cartridge. It is not possible.</b> Seven species are absent from Emerald entirely and six more only evolve by trading. That is thirteen entries behind a link cable, and no amount of searching will change it. Plan for a second Generation III game, or accept that the Johto starter reward is out of reach."],
["h","What the Hoenn Dex is worth"],
["ul",[
 "<b>Complete all 200 non-Mythical entries and Professor Birch gives you a Johto starter</b> — Chikorita, Cyndaquil or Totodile, your choice. This is an Emerald-only reward with no equivalent in Ruby, Sapphire, FireRed or LeafGreen.",
 "<b>Jirachi and Deoxys are explicitly excluded</b> from the count. Both are event-only and the game knows it.",
 "The <b>National Dex</b> upgrade is separate and much easier — it comes from walking out of your house after the Hall of Fame, and needs no catching at all.",
 "There is no other in-game reward for the dex. The Johto starter is the whole prize."
]],
["h","The seven that are not in Emerald at all"],
["p","Each of these is present in Ruby, Sapphire, or both, and simply absent from Emerald's encounter tables. Every one requires a trade."],
["table",{cols:["#","Pokémon","Type in Gen 3","Where it actually lives","How you get it"],rows:[
 ["032","<b>Surskit</b>","Bug / Water","Ruby and Sapphire","<b>The awkward one.</b> Wild Surskit <i>can</i> appear in Emerald, but only as a <b>mass outbreak</b>, and the outbreak only becomes possible after you <b>mix records with a Ruby or Sapphire cartridge</b>. Without that it is trade-only like the rest."],
 ["033","<b>Masquerain</b>","Bug / Flying","Ruby and Sapphire","Evolve a Surskit at 22, so it is behind the same gate."],
 ["076","<b>Meditite</b>","Fighting / Psychic","Ruby and Sapphire","Trade only. <b>Not</b> Fighting/Fairy — Fairy does not exist."],
 ["077","<b>Medicham</b>","Fighting / Psychic","Ruby and Sapphire","Evolve Meditite at 37."],
 ["094","<b>Roselia</b>","Grass / Poison","Ruby and Sapphire","Trade only — even though <b>Wally runs one</b> at Victory Road. Trainer Pokémon do not make a species catchable."],
 ["123","<b>Zangoose</b>","Normal","<b>Ruby only</b>","Trade. Emerald gives you its rival <b>Seviper</b> instead, on Routes 114 and 121."],
 ["125","<b>Lunatone</b>","Rock / Psychic","<b>Sapphire only</b>","Trade. Emerald gives you <b>Solrock</b> instead, in Meteor Falls — even though Tate & Liza field both."]
]}],
["h","The six that need a trade to evolve"],
["p","These are catchable in Emerald but will not evolve without a link cable. Trading to a second cartridge and straight back works — the evolution triggers on arrival."],
["table",{cols:["From","To","What it needs","Where you get the piece"],rows:[
 ["<b>Kadabra</b>","<b>Alakazam</b>","Trade","Abra is on Route 116 and in Granite Cave"],
 ["<b>Machoke</b>","<b>Machamp</b>","Trade","Machop is in the Fiery Path and on Jagged Pass"],
 ["<b>Graveler</b>","<b>Golem</b>","Trade","Geodude is everywhere — Route 111, Victory Road, the Magma Hideout"],
 ["<b>Seadra</b>","<b>Kingdra</b>","Trade holding a <b>Dragon Scale</b>","Horsea is a Super Rod catch; the Dragon Scale is a wild Bagon's held item"],
 ["<b>Clamperl</b>","<b>Huntail</b>","Trade holding a <b>DeepSeaTooth</b>","Both Clamperl and the tooth are underwater on Routes 124–126"],
 ["<b>Clamperl</b>","<b>Gorebyss</b>","Trade holding a <b>DeepSeaScale</b>","Same waters. <b>One Clamperl becomes one or the other</b> — you need two."]
]}],
["h","The hard ones that <i>are</i> in Emerald"],
["catch",[
 {n:"Feebas", t:["Water"], where:"<b>Route 119 — six of roughly 440 fishing tiles</b>", why:"<b>The single hardest catch in the game.</b> Which six tiles hold it is derived from the <b>trendy phrase</b> set in Dewford Hall, and it changes when the phrase does. Set a phrase, then fish every tile on the route with the Super Rod, six casts each, until you find one. Milotic — evolved by maxing Beauty with blue Pokéblocks and then levelling — is worth it, but budget an hour."},
 {n:"Chimecho", t:["Psychic"], where:"<b>Mt. Pyre summit — 2%</b>", why:"Only one location in the entire game, at a 2% rate. There is no breeding shortcut because Chingling did not exist until Generation IV."},
 {n:"Relicanth", t:["Water","Rock"], where:"Underwater, Routes 124 and 126", why:"Underwater-only, and required for the Regi puzzle besides. Dive down and look in the seaweed."},
 {n:"Bagon", t:["Dragon"], where:"Meteor Falls back room — 25%, needs Surf and Waterfall", why:"Behind a post-game gate. Salamence at 50 is worth the trip and it holds a <b>Dragon Scale</b>, which is what makes your Kingdra."},
 {n:"Beldum", t:["Steel","Psychic"], where:"<b>Gift — Steven's house in Mossdeep, after the Hall of Fame</b>", why:"<b>There is no wild Beldum in Emerald.</b> Go back to Steven's house after entering the Hall of Fame and take the Poké Ball on the table. Metang at 20 and Metagross at 45 — three dex entries from one gift you can easily walk past."},
 {n:"Ditto", t:["Normal"], where:"<b>Desert Underpass — 50%, after the National Dex</b>", why:"The only Ditto in Emerald, and it is how you breed every baby form. Route 114, through the Fossil Maniac's house."},
 {n:"Smeargle", t:["Normal"], where:"<b>Artisan Cave, Battle Frontier — 100%</b>", why:"The only Smeargle in the Generation III handhelds. Sketch permanently copies the last move used against it."},
 {n:"Sudowoodo", t:["Rock"], where:"<b>Battle Frontier — exactly one</b>", why:"A single static encounter and the only Sudowoodo in the Generation III handhelds. Bring a ball."}
]],
["h","The baby forms — all of them are Eggs"],
["p","Four entries in the Hoenn Dex only exist as hatched Eggs. Put a Slugma or a Camerupt in your party while you do this — <b>Magma Armor halves the steps</b>, and that is an Emerald-only field effect."],
["table",{cols:["#","Pokémon","Breed","Note"],rows:[
 ["054","<b>Azurill</b>","Marill or Azumarill + Ditto","Marill is on Routes 102, 104 and 117. <b>Azurill is pure Normal in Gen 3</b>, not Normal/Fairy."],
 ["137","<b>Igglybuff</b>","Jigglypuff or Wigglytuff + Ditto","Jigglypuff is on Route 115 at 10%."],
 ["155","<b>Pichu</b>","Pikachu or Raichu + Ditto","Pikachu is in the Safari Zone at 5%."],
 ["—","<b>Wynaut</b>","Wobbuffet + Ditto","<b>Or take the free Egg from the old woman in Lavaridge.</b> Wynaut also appears wild on Route 130's Mirage Island, which only exists on days when its hidden value matches yours — take the Lavaridge Egg instead."]
]}],
["tip","<b>Route 130's Mirage Island is not worth chasing.</b> It appears only when a random daily value matches the personality value of a Pokémon in your party — roughly a 1-in-256 day. The only thing on it is Wynaut, and the Lavaridge Egg gives you one for free."]
]});

STAGES.push({
id:"dex-safari", ch:"dex", tag:"Pokédex", place:"Route 121 · Hoenn Safari Zone", wide:true,
title:"The Safari Zone — sixteen Johto lines Emerald added",
lede:"Ruby and Sapphire's Safari Zone was four small areas. Emerald bolted two more onto the north-east side and filled them with Johto Pokémon that appear nowhere else in the generation's handheld games.",
body:[
["map","dex-safari"],
["ver","<b>The two expansion areas are Emerald-only.</b> Ruby and Sapphire have the original four areas and nothing else. The expansions need the <b>Mach Bike</b> and the <b>Acro Bike</b> respectively to enter, and between them they hold sixteen evolutionary lines first seen in Johto. For several of these, Emerald is the only handheld game in Generation III where you can catch them at all."],
["h","How the Safari Zone works"],
["ul",[
 "<b>₽500 for 30 Safari Balls and 500 steps.</b> You cannot battle — you throw balls, throw bait, or throw mud.",
 "<b>Bait makes a Pokémon stay longer but harder to catch. Mud makes it easier to catch but more likely to flee.</b> For a rare Pokémon, throw mud once and then throw balls.",
 "<b>Your Repels do not work</b> and you cannot use your own Pokémon at all.",
 "The step counter, not the ball counter, is usually what ends your run. Ride a bike where the terrain allows it."
]],
["h","The original four areas"],
["catch",[
 {n:"Pikachu", t:["Electric"], where:"South-west and south-east areas — 5%", why:"<b>The only wild Pikachu in Hoenn.</b> Breed it for Pichu, and a Thunder Stone from the Lilycove Department Store makes Raichu — three dex entries off one 5% encounter."},
 {n:"Wobbuffet", t:["Psychic"], where:"South-east area — 10%", why:"Shadow Tag stops the opponent switching. Breed it with a Ditto for <b>Wynaut</b> if you missed the Lavaridge Egg."},
 {n:"Girafarig", t:["Normal","Psychic"], where:"South-east area — 20%", why:"Only here. Inner Focus and 90 Special Attack."},
 {n:"Heracross", t:["Bug","Fighting"], where:"North-east expansion — 5%, needs the Acro Bike", why:"<b>125 Attack and Guts.</b> Bug/Fighting is 2× on Dark, Rock, Steel, Grass, Psychic and Ice — it is the best pure attacker in the Safari Zone and Greta runs one."},
 {n:"Phanpy", t:["Ground"], where:"North-east expansion — 30%", why:"Donphan at 25 has 120 Attack and 120 Defence with Sturdy. A dex entry you will not find elsewhere."},
 {n:"Rhyhorn", t:["Ground","Rock"], where:"North-west expansion — 30%, needs the Mach Bike", why:"Rhydon at 42 — 130 Attack. The only Rhyhorn line in Hoenn."},
 {n:"Pinsir", t:["Bug"], where:"North-west expansion — 5%", why:"125 Attack and Hyper Cutter. Only here."},
 {n:"Doduo", t:["Normal","Flying"], where:"South areas and north-west — 10–15%", why:"Dodrio at 31 has 110 Speed. Two dex entries."},
 {n:"Natu", t:["Psychic","Flying"], where:"South-east and north-east — 10–15%", why:"Xatu at 25. Synchronize and Early Bird."},
 {n:"Oddish", t:["Grass","Poison"], where:"Everywhere — 30–40%", why:"Convenient if you still need the Vileplume and Bellossom split."}
]],
["h","The two Emerald-only expansion areas"],
["p","Reachable from the north-east corner of the original zone. The <b>north expansion</b> needs the Acro Bike and the <b>north-west expansion</b> needs the Mach Bike — Rydel in Mauville swaps them for free, so plan two trips or two ₽500 entries."],
["table",{cols:["Area","Bike","What lives there"],rows:[
 ["<b>North-east expansion</b>","Acro Bike","<b>Hoothoot</b>, <b>Ledyba</b>, <b>Aipom</b>, <b>Sunkern</b>, <b>Pineco</b>, <b>Shuckle</b>, <b>Teddiursa</b>, <b>Houndour</b>, <b>Miltank</b>, and <b>Heracross</b> at 5%."],
 ["<b>South expansion</b>","Acro Bike","<b>Spinarak</b>, <b>Mareep</b>, <b>Gligar</b>, <b>Snubbull</b>, <b>Stantler</b>, <b>Sunkern</b>, <b>Aipom</b>, <b>Hoothoot</b>."],
 ["<b>North-east cliff</b>","Acro Bike","<b>Natu</b>, <b>Xatu</b>, <b>Heracross</b>, <b>Phanpy</b>, Oddish and Geodude."],
 ["<b>North-west cliff</b>","Mach Bike","<b>Rhyhorn</b>, <b>Dodrio</b>, <b>Pinsir</b>, Doduo, Oddish and Gloom."]
]}],
["warn","<b>None of the expansion Pokémon count towards the Hoenn Dex.</b> Hoothoot, Mareep, Houndour, Miltank and the rest are Johto species — they register in the <b>National</b> Dex only. Catch them because Emerald is the only handheld in the generation that offers them, not because you need them for the Johto starter."],
["h","Worth the trip for"],
["ul",[
 "<b>Heracross</b> — 125 Attack, Guts, and Bug/Fighting coverage that nothing else in Hoenn provides. The single best Pokémon in the Safari Zone.",
 "<b>Shuckle</b> — 230 Defence and 230 Special Defence, the highest of both in Generation III. A genuine Battle Frontier wall, and Lucy runs one.",
 "<b>Houndour</b> — Houndoom is Dark/Fire with 110 Special Attack, and <b>Dark is a special type in Generation III</b>, so Crunch and Flamethrower both run off the same stat. Unusually well-built for this generation.",
 "<b>Miltank</b> — 105 HP, 105 Defence and Thick Fat. Milk Drink heals half its HP.",
 "<b>Pikachu</b> — three dex entries from one catch, and it is the only one in Hoenn."
]]
]});
