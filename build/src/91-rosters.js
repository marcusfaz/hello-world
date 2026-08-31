/* ===================== THE SIX, STAGE BY STAGE =====================
   Every stage lists only the Pokémon worth talking about there. Anything
   already in the party that is not mentioned is carried forward, so a
   member never vanishes silently. Departures are declared in OUTS below. */

R("h01",{lv:"5 → 8", form:"base", sum:"You start with one Pokémon and a bag. Fill the other five slots as you walk — every empty slot is wasted experience, and even filler earns Pokédex credit you will need later.",
slots:[
 {n:"%S%", role:"Lead · your only real attacker", st:"keep", w:"Everything goes through it until Rustboro."},
 {n:"Zigzagoon", t:["Normal"], role:"Pickup carrier · HM mule", st:"add", w:"Route 101 at 10%. <b>Pickup pays you a held item after 10% of won battles, and Emerald scales its table with the carrier's level</b> — Rare Candies from 21, Protein from 31, Leftovers at 91. It also learns Cut, Strength, Rock Smash and Surf. Never box it."},
 {n:"Poochyena", t:["Dark"], role:"Early filler", st:"add", w:"45% on Route 101. Bite at 13 carries the early trainers. It falls off by Mauville — plan to retire it."},
 {n:"Wurmple", t:["Bug"], role:"Dex project", st:"add", w:"Catch two. It splits randomly into Silcoon/Beautifly or Cascoon/Dustox at level 7, and you cannot choose which — two catches gives you a fair shot at both branches."},
 {n:"Taillow", t:["Normal","Flying"], role:"Future Swellow", st:"add", w:"Route 104 next stage at 10%. Swellow has <b>125 Speed</b> and moves first against almost everything in the game. Start it early — it is slow to come good."},
 {n:"Marill", t:["Water"], role:"Filler · dex", st:"add", w:"Route 104, 20%. <b>Pure Water in Generation III</b>, not Water/Fairy. Useful as an early second attacker; it becomes an HM carrier later."}
],
notes:{mudkip:"The smoothest opening in the game. Marshtomp at 16 is Water/Ground, which makes Roxanne, Wattson and Flannery all straightforward. Use the easy stretch to build your Pokédex count instead of grinding.",
       torchic:"Blaziken is the highest-damage starter and Combusken at 16 is Fire/Fighting, which beats Roxanne outright with Double Kick. Your problems come later — Juan, Archie and Wallace are all Water.",
       treecko:"Sceptile is the fastest starter and the one with the least defensive help. Grass beats Roxanne, Wattson's Ground-immune members and Juan, but Winona and the Elite Four's Ice will punish it. Catch a second attacker early."}});

R("h02",{lv:"8 → 13", form:"base", sum:"Two catches here decide the shape of the whole run: a Ralts on Route 102 and a Shroomish in Petalburg Woods. Neither is optional if you want the six this guide builds towards.",
slots:[
 {n:"%S%", role:"Lead", st:"keep", w:"Evolves at 16. Keep it in every fight it survives."},
 {n:"Ralts", t:["Psychic"], role:"Special sweeper project", st:"add", w:"<b>Route 102 at 4% — hunt for it.</b> Gardevoir has 125 Special Attack, learns Calm Mind at 21 and Psychic at 26 with no TM, and is the strongest thing you can own before the League. <b>Pure Psychic in Emerald, not Psychic/Fairy.</b>"},
 {n:"Shroomish", t:["Grass"], role:"Future Breloom · Fighting", st:"add", w:"Petalburg Woods, 15%. Breloom at 23 is <b>Grass/Fighting</b> — the coverage this team is otherwise missing. Fighting is 2× on Sidney's five Dark types and 2× on Glacia's Ice."},
 {n:"Taillow", t:["Normal","Flying"], role:"Speed", st:"keep", w:"Wing Attack at 13. It is your fastest body for the next twenty levels."},
 {n:"Zigzagoon", t:["Normal"], role:"Pickup · HM mule", st:"keep", w:"Keep levelling it. Its Pickup table gets better every ten levels."},
 {n:"Poochyena", t:["Dark"], role:"Filler", st:"keep", w:"Still doing work. Retire it once Aron comes online."}
],
notes:{mudkip:"Nothing here threatens Mudkip. Spend the time on the Ralts hunt.",
       torchic:"Torchic is frail until Combusken at 16. Let the Taillow and the Poochyena take the trainer battles while it levels.",
       treecko:"Treecko outspeeds everything here and dies to a strong hit. Lead something else into the Team Aqua Grunt."}});

R("h03",{lv:"13 → 17", form:"base", sum:"Roxanne is a type check and you pass it. The catches on Route 116 matter more than the gym does.",
slots:[
 {n:"%S%", role:"Lead · Roxanne", st:"keep", w:"Evolves at 16 — probably during this stage."},
 {n:"Nincada", t:["Bug","Ground"], role:"Two dex entries · False Swipe", st:"box", w:"Route 116 at 20%. <b>Evolve it at 20 with an empty party slot and a spare Poké Ball and you get Ninjask AND Shedinja.</b> Or hold it back with an Everstone to level 25, where it learns <b>False Swipe</b> — the move that makes every legendary catch later reliable."},
 {n:"Ralts", t:["Psychic"], role:"Special project", st:"keep", w:"Kirlia at 20. Feed it battles — it is slow to start and enormous once Calm Mind lands at 21."},
 {n:"Taillow", t:["Normal","Flying"], role:"Speed", st:"keep", w:"Swellow at 22."},
 {n:"Shroomish", t:["Grass"], role:"Fighting project", st:"keep", w:"Breloom at 23. Mach Punch at 23 and Sky Uppercut at 36."},
 {n:"Zigzagoon", t:["Normal"], role:"Pickup · Cut", st:"keep", w:"Teach it <b>Cut</b> the moment the Stone Badge lands."},
 {n:"Poochyena", t:["Dark"], role:"Last stage of usefulness", st:"keep", w:"Bite is still doing work. <b>Aron replaces it next stage</b> and never leaves the team afterwards."}
],
notes:{mudkip:"Mud-Shot at 16 is 2× on everything Roxanne owns. Lead Marshtomp and do not switch.",
       torchic:"Combusken's Double Kick at 16 is 2× on Rock. If you are still a Torchic, Ember is resisted — use the Taillow instead.",
       treecko:"Absorb is 2× on both Geodude and on Nosepass. Grovyle at 16 handles the gym alone."}});

R("h04",{lv:"17 → 21", form:"mid", sum:"Aron is the catch that carries this team to the Elite Four. Granite Cave B1F, 40%, and it is worth two trips to the cave to get it.",
slots:[
 {n:"%S%", role:"Lead", st:"keep", w:""},
 {n:"Aron", t:["Steel","Rock"], role:"Steel wall · the long project", st:"add", replaces:"Poochyena", w:"<b>Granite Cave B1F, 40%.</b> In Generation III <b>Steel resists Ghost and Dark</b>, so an Aggron walls Phoebe's entire Elite Four gauntlet and blanks most of Sidney's. It also resists Ice for Glacia and Dragon for Drake. Lairon at 32, Aggron at 42 — start it now or it will not arrive in time."},
 {n:"Ralts", t:["Psychic"], role:"Special project", st:"keep", w:"Kirlia at 20."},
 {n:"Taillow", t:["Normal","Flying"], role:"Brawly counter", st:"keep", w:"Flying is 2× on Machop and Makuhita. Keep it away from Meditite's Psychic."},
 {n:"Shroomish", t:["Grass"], role:"Fighting project", st:"keep", w:"Breloom at 23 — nearly there."},
 {n:"Zigzagoon", t:["Normal"], role:"Pickup · Cut · Flash", st:"keep", w:"<b>Flash goes here</b> once the Knuckle Badge lands. Granite Cave B2F needs it and so does the Ancient Tomb, much later."}
],
notes:{mudkip:"Fighting is neutral on Water/Ground and Marshtomp outbulks all three of Brawly's. Lead it.",
       torchic:"Fighting is neutral on Fire/Fighting and Combusken hits back for 2×. This is a clean gym for you.",
       treecko:"Grass does nothing to Fighting types and Grovyle is frail. Use the Taillow and the Shroomish — Mach Punch is not available yet, so lead with Flying."}});

R("h05",{lv:"21 → 24", form:"mid", sum:"A quiet stage. Use it to get Breloom and Kirlia over their evolution levels before Mauville, because the next gym is the first one that punishes a thin team.",
slots:[
 {n:"%S%", role:"Lead", st:"keep", w:""},
 {n:"Kirlia", t:["Psychic"], role:"Special attacker", st:"keep", w:"<b>Calm Mind at 21.</b> Start using it — every turn of Calm Mind is +1 Special Attack and +1 Special Defence on a body that is about to have 125 of the former."},
 {n:"Breloom", t:["Grass","Fighting"], role:"Fighting", st:"keep", w:"Evolves at 23. <b>Mach Punch at 23 always moves first</b>, which is how a frail Grass type survives."},
 {n:"Swellow", t:["Normal","Flying"], role:"Speed", st:"keep", w:"Evolves at 22. 125 Speed."},
 {n:"Aron", t:["Steel","Rock"], role:"Steel project", st:"keep", w:"Slow to level. Put it in front of things that cannot hurt it and switch."},
 {n:"Zigzagoon", t:["Normal"], role:"Pickup · HM mule", st:"keep", w:""}
]});

R("h06",{lv:"24 → 28", form:"mid", sum:"Electrike joins and Thunderbolt lands on it within the stage. That pairing is the answer to Winona, Juan, Archie and Wallace — four of the hardest fights left.",
slots:[
 {n:"%S%", role:"Lead · Wattson", st:"keep", w:""},
 {n:"Electrike", t:["Electric"], role:"Special attacker · Electric", st:"add", replaces:"Zigzagoon", w:"Route 110, 30%. Manectric at 26 has <b>105 Special Attack and 105 Speed</b>. <b>TM24 Thunderbolt is handed to you this stage</b> for shutting off the New Mauville generator — put it straight on this."},
 {n:"Kirlia", t:["Psychic"], role:"Special sweeper", st:"keep", w:"Gardevoir at 30. Psychic at 26 is 90 power off 125 Special Attack."},
 {n:"Breloom", t:["Grass","Fighting"], role:"Fighting", st:"keep", w:""},
 {n:"Swellow", t:["Normal","Flying"], role:"Speed", st:"keep", w:"Give it Steel Wing from Granite Cave — it covers the Rock and Ice types Flying cannot."},
 {n:"Aron", t:["Steel","Rock"], role:"Steel project", st:"keep", w:"<b>Keep it out of the Mauville Gym.</b> Wattson's Magneton has Magnet Pull and will trap it there."},
 {n:"Zigzagoon", t:["Normal"], role:"Retiring to HM duty", st:"swap", forName:"Electrike", w:"Do not release it. <b>Pickup only triggers while the carrier is in your party</b>, so bring it back in whenever you are grinding — and keep it as your Cut, Flash and Rock Smash carrier for the rest of the game."}
],
notes:{mudkip:"Ground is immune to Electric. Marshtomp takes literally zero from three of Wattson's four.",
       torchic:"Combusken is neutral and Manectric is faster. Borrow a Ground type or grind through with Double Kick.",
       treecko:"Grass resists Electric, so Grovyle can tank the gym — but it has no way to hurt Magneton, which is Electric/Steel. Bring the Breloom."}});

R("h07",{lv:"28 → 32", form:"mid", sum:"A long overland leg with two utility catches that pay off for the rest of the game — a Slugma for breeding and a Skarmory if you want a second Steel wall.",
slots:[
 {n:"%S%", role:"Lead", st:"keep", w:"Final evolution at 36. Close now."},
 {n:"Manectric", t:["Electric"], role:"Special attacker", st:"keep", w:"Thunderbolt is on it. It one-shots most things on the water routes ahead."},
 {n:"Kirlia", t:["Psychic"], role:"Special sweeper", st:"keep", w:"Gardevoir at 30 — it should evolve during this stage."},
 {n:"Breloom", t:["Grass","Fighting"], role:"Fighting", st:"keep", w:"Sky Uppercut at 36. Until then Mach Punch and Headbutt."},
 {n:"Lairon", t:["Steel","Rock"], role:"Steel wall", st:"keep", w:"Evolves from Aron at 32. Iron Tail arrives free at 29 — <b>do not spend TM23 on it</b>."},
 {n:"Swellow", t:["Normal","Flying"], role:"Speed", st:"keep", w:""},
 {n:"Slugma", t:["Fire"], role:"Egg hatcher · park it", st:"box", w:"Fiery Path, 10%. <b>Magma Armor halves Egg hatching steps in Emerald.</b> Keep it in the box until you start breeding, then park it in slot six and leave it there."}
]});

R("h08",{lv:"32 → 36", form:"final", sum:"Your starter reaches its final form here, and the Go-Goggles open the desert behind you. Two stages of content unlock at once.",
slots:[
 {n:"%S%", role:"Lead", st:"keep", w:"<b>Final evolution at 36.</b> Swampert, Blaziken or Sceptile — whichever you took, this is the version you take to the League."},
 {n:"Gardevoir", t:["Psychic"], role:"Special sweeper", st:"keep", w:"Evolved at 30. <b>Calm Mind twice, then Psychic, ends most things.</b> Give it TM24 Thunderbolt if Manectric does not want it."},
 {n:"Lairon", t:["Steel","Rock"], role:"Flannery counter · wall", st:"keep", w:"<b>Rock resists Fire.</b> Lairon sits in Flannery's gym and takes almost nothing, sun or no sun."},
 {n:"Breloom", t:["Grass","Fighting"], role:"Fighting", st:"keep", w:"Sky Uppercut at 36."},
 {n:"Manectric", t:["Electric"], role:"Special attacker", st:"keep", w:""},
 {n:"Swellow", t:["Normal","Flying"], role:"Speed · Fly carrier", st:"keep", w:"Aerial Ace arrives free at 38 — do not spend Winona's TM40 on it."},
 {n:"Trapinch", t:["Ground"], role:"Optional Dragon project", st:"box", w:"Route 111 desert, 35%. <b>Flygon at 45 is the best Dragon you can raise in Hoenn</b> — Ground/Dragon with Levitate. It is a long climb from here; only start it if you are willing to spend the levels."}
],
notes:{mudkip:"Swampert at 36. Water is 4× on both of Flannery's Fire/Ground pair.",
       torchic:"Blaziken at 36 — but Fire does nothing to Flannery. Lead the Lairon and let Blaziken sit this one out.",
       treecko:"Sceptile at 36. Grass is resisted by Fire; this is your hardest gym. Use the Lairon."}});

R("h09",{lv:"36 → 40", form:"final", sum:"Norman is a Fighting check and Surf is the reward. Everything after this stage is reachable by water.",
slots:[
 {n:"%S%", role:"Lead · Surf carrier", st:"keep", w:"<b>Teach it Surf.</b> It stays there for the rest of the game."},
 {n:"Breloom", t:["Grass","Fighting"], role:"Norman counter", st:"keep", w:"<b>Fighting is 2× on all four of Norman's.</b> Sky Uppercut at 36 ends this gym. Attack Slaking on its Truant turn to dodge Counter."},
 {n:"Gardevoir", t:["Psychic"], role:"Special sweeper", st:"keep", w:"Safe into Slaking — Counter only returns physical damage."},
 {n:"Lairon", t:["Steel","Rock"], role:"Wall", st:"keep", w:"Aggron at 42. Steel resists Normal, so it takes half from the entire gym."},
 {n:"Manectric", t:["Electric"], role:"Special attacker", st:"keep", w:""},
 {n:"Swellow", t:["Normal","Flying"], role:"Speed", st:"keep", w:""}
],
notes:{mudkip:"Neutral all round. Let Breloom do the work.",
       torchic:"<b>Blaziken is your Norman answer</b> — Fire/Fighting, and Sky Uppercut or Blaze Kick is 2× on everything he has.",
       treecko:"Sceptile has no Fighting move and is neutral against Normal. Breloom is essential here."}});

R("h10",{lv:"40 → 44", form:"final", sum:"Manectric's stage. Four of Winona's five are 2× or 4× weak to Electric, and the fifth needs Ice.",
slots:[
 {n:"%S%", role:"Lead · Winona's Altaria", st:"keep", w:"<b>Give it TM13 Ice Beam</b> from the Abandoned Ship. Ice is 4× on Altaria and it stays relevant all the way to Drake."},
 {n:"Manectric", t:["Electric"], role:"Winona counter", st:"keep", w:"Thunderbolt is 4× on Pelipper and 2× on Swablu and Tropius. Lead it."},
 {n:"Gardevoir", t:["Psychic"], role:"Special sweeper", st:"keep", w:""},
 {n:"Aggron", t:["Steel","Rock"], role:"Wall", st:"keep", w:"Evolves at 42. <b>Rock is 4× on Tropius and 2× on the rest of Winona's Flying types.</b>"},
 {n:"Breloom", t:["Grass","Fighting"], role:"Fighting", st:"keep", w:"Sky Uppercut is 2× on Skarmory, which Electric cannot touch."},
 {n:"Swellow", t:["Normal","Flying"], role:"Speed · Fly", st:"keep", w:"<b>Teach it Fly.</b> It has been carrying the slot for this since Route 104."}
]});

R("h11",{lv:"44 → 47", form:"final", sum:"No gym this stage — spend it shopping at Lilycove and finishing the Mt. Pyre catches. The team is set; from here it is levels and TMs.",
slots:[
 {n:"%S%", role:"Lead", st:"keep", w:"Surf, Ice Beam, and two slots you will fill with Earthquake and a physical move."},
 {n:"Gardevoir", t:["Psychic"], role:"Special sweeper", st:"keep", w:"Calm Mind, Psychic, Thunderbolt, Light Screen is the finished set."},
 {n:"Aggron", t:["Steel","Rock"], role:"Wall · Phoebe answer", st:"keep", w:"Iron Tail, Rock Slide, Strength and a slot for <b>TM26 Earthquake</b> next stage."},
 {n:"Manectric", t:["Electric"], role:"Special attacker", st:"keep", w:"Thunderbolt, Thunder Wave, Bite at 39, Quick Attack."},
 {n:"Breloom", t:["Grass","Fighting"], role:"Fighting", st:"keep", w:"Sky Uppercut, Mach Punch, Giga Drain from TM19, Headbutt."},
 {n:"Swellow", t:["Normal","Flying"], role:"Speed · Fly", st:"keep", w:"Aerial Ace, Facade from TM42, Steel Wing, Fly."}
]});

R("h12",{lv:"47 → 49", form:"final", sum:"One dungeon and one villain fight. Nothing changes in the party — this is a levels stage.",
slots:[
 {n:"%S%", role:"Lead", st:"keep", w:"Surf is 4× on Maxie's Camerupt."},
 {n:"Manectric", t:["Electric"], role:"Special attacker", st:"keep", w:"<b>Lead it into Maxie</b> — special attackers ignore Mightyena's Intimidate."},
 {n:"Gardevoir", t:["Psychic"], role:"Special sweeper", st:"keep", w:"Psychic is 2× on Crobat, which is the dangerous one."},
 {n:"Aggron", t:["Steel","Rock"], role:"Wall", st:"keep", w:""},
 {n:"Breloom", t:["Grass","Fighting"], role:"Fighting", st:"keep", w:""},
 {n:"Swellow", t:["Normal","Flying"], role:"Speed", st:"keep", w:""}
]});

R("h13",{lv:"49 → 53", form:"final", sum:"Tate & Liza are a Double Battle and every one of their four is immune to Ground. This is the one gym where your two best Pokémon are the wrong two.",
slots:[
 {n:"%S%", role:"Lead · Dive carrier", st:"keep", w:"Surf is 2× on both Lunatone and Solrock — Rock/Psychic. <b>Do not use Earthquake here.</b>"},
 {n:"Absol", t:["Dark"], role:"Mossdeep counter · swap in", st:"bench", w:"Route 120 or 121 at 8%. <b>Dark is 2× on all four of Tate & Liza's</b>, and 130 Attack means it does not need to be levelled far. Bring it in for this gym even if it is not one of your six."},
 {n:"Gardevoir", t:["Psychic"], role:"Special sweeper", st:"keep", w:"Psychic-on-Psychic is resisted. Use Thunderbolt on Xatu instead."},
 {n:"Aggron", t:["Steel","Rock"], role:"Wall", st:"keep", w:"<b>Steel resists Psychic.</b> It sits in this gym safely — and Rock Slide is 2× on Lunatone and Solrock."},
 {n:"Manectric", t:["Electric"], role:"Special attacker", st:"keep", w:"Thunderbolt is 2× on Xatu."},
 {n:"Breloom", t:["Grass","Fighting"], role:"Fighting", st:"keep", w:"Psychic is 2× back on Fighting — keep it out of this one."},
 {n:"Swellow", t:["Normal","Flying"], role:"Speed", st:"keep", w:""}
]});

R("h14",{lv:"53 → 57", form:"final", sum:"Juan closes the gyms with five Water types under his own rain. Manectric and a Grass move are the whole answer, and Ice Beam handles the Kingdra that resists both.",
slots:[
 {n:"%S%", role:"Lead", st:"keep", w:"<b>Swampert learns Earthquake by itself at 52, so the single TM26 goes to Aggron on a Mudkip run.</b> On a Torchic or Treecko run the starter cannot learn it at all, so Aggron gets it either way."},
 {n:"Manectric", t:["Electric"], role:"Juan counter", st:"keep", w:"Thunderbolt is 4× on Crawdaunt and 2× on Luvdisc and Sealeo. Three of five die to it."},
 {n:"Breloom", t:["Grass","Fighting"], role:"Whiscash counter", st:"keep", w:"<b>Grass is 4× on Whiscash</b> — kill it first and Juan's rain never happens."},
 {n:"Gardevoir", t:["Psychic"], role:"Special sweeper", st:"keep", w:"Calm Mind through the Luvdisc's Attract turns, then sweep."},
 {n:"Aggron", t:["Steel","Rock"], role:"Wall · Earthquake carrier", st:"keep", w:"<b>TM26 Earthquake goes here.</b> Aggron's 110 Attack, and Ground covers the Fire, Electric and Steel types its own typing struggles with."},
 {n:"Swellow", t:["Normal","Flying"], role:"Speed", st:"keep", w:""}
]});

R("e4",{lv:"57 → 62", form:"final", sum:"Five fights, no healing between them. The six below cover all five: Fighting for Sidney and Glacia, Steel for Phoebe, Ice for Drake, Electric and Grass for Wallace.",
slots:[
 {n:"%S%", role:"Lead · Drake", st:"keep", w:"<b>Ice Beam is 4× on Altaria and Salamence.</b> This is the move that beats Drake."},
 {n:"Aggron", t:["Steel","Rock"], role:"Phoebe answer", st:"keep", w:"<b>Steel resists Ghost and Dark in Generation III</b>, so Phoebe's whole team does half damage and Sableye's Dark does half again. It walks through her gauntlet."},
 {n:"Breloom", t:["Grass","Fighting"], role:"Sidney and Glacia answer", st:"keep", w:"<b>Fighting is 2× on all five of Sidney's and all five of Glacia's.</b> Two Elite Four members on one Pokémon."},
 {n:"Manectric", t:["Electric"], role:"Wallace answer", st:"keep", w:"Thunderbolt is 4× on Gyarados and 2× on Wailord, Tentacruel and Milotic."},
 {n:"Gardevoir", t:["Psychic"], role:"Special sweeper", st:"keep", w:"<b>Do not bring it into Sidney</b> — Psychic does zero to Dark and Gardevoir is pure Psychic here. It is excellent against Glacia and Drake."},
 {n:"Swellow", t:["Normal","Flying"], role:"Speed · revenge killer", st:"keep", w:"125 Speed. It finishes weakened Pokémon and it is your emergency answer to anything that sets up."}
],
notes:{mudkip:"Swampert with Surf, Ice Beam, Earthquake and Rock Slide covers four of the five members single-handed. This is the payoff for the Stage 01 pick.",
       torchic:"Blaziken's Sky Uppercut doubles up on Sidney and Glacia alongside Breloom, but you have no Water and no Ice — buy TM13 Ice Beam for Gardevoir or you lose to Drake.",
       treecko:"Sceptile handles Wallace's Whiscash and Wailord but nothing else. Lean harder on Aggron and Breloom, and make sure something carries Ice Beam."}});

R("p01",{lv:"62 → 66", form:"final", sum:"The story team is done. From here you are building for the Battle Frontier, which means natures, EVs and held items rather than levels.",
slots:[
 {n:"%S%", role:"Lead", st:"keep", w:""},
 {n:"Rayquaza", t:["Dragon","Flying"], role:"Legendary · Air Lock", st:"add", w:"<b>Catch it at the Sky Pillar before or after the League.</b> Air Lock cancels all weather, which is exactly what you need against Groudon's Drought and Kyogre's Drizzle. It is banned in the Battle Frontier, so it is a catching tool, not a Frontier member."},
 {n:"Aggron", t:["Steel","Rock"], role:"Wall", st:"keep", w:""},
 {n:"Breloom", t:["Grass","Fighting"], role:"Fighting", st:"keep", w:"Steven's Meteor Falls team is four Steel and Rock types. Fighting is 2× on all of them."},
 {n:"Gardevoir", t:["Psychic"], role:"Special sweeper", st:"keep", w:""},
 {n:"Manectric", t:["Electric"], role:"Special attacker", st:"keep", w:""},
 {n:"Swellow", t:["Normal","Flying"], role:"Retiring to Fly duty", st:"swap", forName:"Rayquaza", w:"It has done its job. Keep it as your Fly carrier — you will be flying between the Weather Institute and four different routes hunting the weather caves."}
]});

R("p02",{lv:"66 → 70", form:"final", sum:"Three legendary catches with the same kit: a False Swipe user, a sleep move, and thirty Ultra Balls. Build that party and do all three in one trip.",
slots:[
 {n:"%S%", role:"Lead · Surf and Dive", st:"keep", w:""},
 {n:"Wailord", t:["Water"], role:"Regi puzzle · <b>first slot</b>", st:"add", w:"<b>Emerald wants Wailord FIRST in the party and Relicanth LAST.</b> Ruby and Sapphire wanted the opposite. Get this backwards and the Sealed Chamber does nothing."},
 {n:"Relicanth", t:["Water","Rock"], role:"Regi puzzle · <b>last slot</b>", st:"add", w:"Underwater on Routes 124 and 126. There is no substitute — no Relicanth, no legendary giants."},
 {n:"Nincada", t:["Bug","Ground"], role:"False Swipe carrier", st:"bench", w:"<b>Kept unevolved to level 25 for False Swipe.</b> It always leaves the target on 1 HP, which is the difference between catching a Regi in ten balls and forty."},
 {n:"Gardevoir", t:["Psychic"], role:"Sleep · Hypnosis at 51", st:"keep", w:"Sleep is the best catch multiplier in Generation III. Hypnosis is 60% accurate — throw it until it lands."},
 {n:"Aggron", t:["Steel","Rock"], role:"Wall", st:"keep", w:"Something has to survive Superpower while you throw balls. 180 Defence does it."}
]});

R("p03",{lv:"70+", form:"final", sum:"Groudon, Kyogre and one of the Eon pair. Rayquaza in the lead slot is what makes the first two straightforward instead of miserable.",
slots:[
 {n:"Rayquaza", t:["Dragon","Flying"], role:"<b>Air Lock — lead it</b>", st:"keep", w:"<b>Air Lock switches off Drought and Drizzle while it is on the field.</b> Groudon loses its sun and its 4× Water weakness comes back; Kyogre loses its rain and its Thunder can miss. There is no better tool and the game gave it to you free."},
 {n:"%S%", role:"Lead · attacker", st:"keep", w:""},
 {n:"Nincada", t:["Bug","Ground"], role:"False Swipe", st:"keep", w:"Same job as the Regis. Both weather Pokémon are Lv 70 with real HP pools."},
 {n:"Gardevoir", t:["Psychic"], role:"Sleep", st:"keep", w:""},
 {n:"Aggron", t:["Steel","Rock"], role:"Wall", st:"keep", w:"Kyogre's Water moves are 2× on it and Groudon's Ground moves are 2× on it — bring healing."},
 {n:"Manectric", t:["Electric"], role:"Kyogre chip damage", st:"keep", w:"Electric is 2× on Kyogre. Under Air Lock it is a clean 2× with no rain boost working against you."}
]});

/* ===================== DECLARED DEPARTURES =====================
   "A>B" means A leaves the party here and B takes the slot.        */
OUTS("h02", ["Wurmple>Ralts", "Marill>Shroomish"]);
OUTS("h04", ["Poochyena>Aron"]);
OUTS("h06", ["Zigzagoon>Electrike"]);
OUTS("p01", ["Swellow>Rayquaza"]);
OUTS("p02", ["Manectric", "Breloom>Wailord"]);
OUTS("p03", ["Wailord", "Relicanth"]);

/* ===================== SWAP PAIRING ===================== */
const PAIRS = {
  h04: {"Poochyena":"Aron"},
  h06: {"Zigzagoon":"Electrike"},
  p01: {"Swellow":"Rayquaza"}
};

/* ===================== THE ONE NEXT ACTION PER STAGE ===================== */
const NOW = {
 h01:"Take <b>Mudkip</b> from Birch's bag on Route 101, then fill all six party slots before you leave Oldale — and keep the Zigzagoon for Pickup.",
 h02:"Stand in Route 102's grass until you catch a <b>Ralts</b>. It is 4% and it is the strongest Pokémon in the first half of the game.",
 h03:"Beat Roxanne with Mud-Shot, then chase the Devon Goods to the <b>Rusturf Tunnel</b> and take the PokéNav from Mr. Stone.",
 h04:"Take HM05 Flash at the Granite Cave entrance, <b>beat Brawly first</b>, then come back with Flash for Steven and TM47 — and catch the <b>Aron</b> on B1F.",
 h05:"Deliver the Devon Parts to Captain Stern in the Oceanic Museum, then run one set at the <b>Slateport Battle Tent</b>.",
 h06:"Beat Wattson with a Ground type, take the Basement Key, and go through <b>Rusturf Tunnel from the Verdanturf side</b> for HM04 Strength.",
 h07:"Walk to Fallarbor, then Meteor Falls, and catch a <b>Slugma</b> in the Fiery Path on the way — Magma Armor halves every Egg you hatch from here on.",
 h08:"Beat Maxie at Mt. Chimney and Flannery below it, take the <b>Go-Goggles</b> from your rival, then ride the Mach Bike up <b>Mirage Tower</b> and take the Root Fossil.",
 h09:"Beat Norman with a Fighting type on Slaking's <b>Truant</b> turns, then take HM03 Surf from Wally's father and clear <b>New Mauville</b> for TM24 Thunderbolt.",
 h10:"Save the Weather Institute, take <b>HM02 Fly</b> from your rival, get the Devon Scope from Steven on Route 120, and beat Winona with Thunderbolt.",
 h11:"Climb Mt. Pyre for the <b>Magma Emblem</b> — and do not leave the summit without a <b>Chimecho</b>. Then clear the Aqua Hideout for the Master Ball.",
 h12:"Stand on the Magma Emblem tile on <b>Jagged Pass</b> to open the hideout, then beat Tabitha and Maxie inside.",
 h13:"Beat Tate &amp; Liza with <b>Dark and Ghost moves — never Ground</b>, then fight Maxie alongside Steven at the Space Center and take HM08 Dive from his house.",
 h14:"Dive to the Seafloor Cavern and take <b>TM26 Earthquake</b>, beat Archie, wake Rayquaza at the Sky Pillar, then beat Juan for the eighth badge.",
 e4:"Buy <b>20 Full Restores</b> and get every party member to Lv 57, then start the gauntlet. Sidney first — bring Fighting and leave Gardevoir on the bench.",
 p01:"Save, reload, and <b>walk out of your front door in Littleroot</b>. That is the National Pokédex trigger, and nothing else is.",
 p02:"Dive on Route 134, use <b>Dig</b> in the Sealed Chamber, then put <b>Wailord first and Relicanth last</b> — Emerald reversed the order Ruby and Sapphire used.",
 p03:"Ask the man on the Weather Institute's 2F which route has abnormal weather, then go there with <b>Rayquaza in the lead</b> — Air Lock switches off Drought and Drizzle."
};
Object.keys(NOW).forEach(k => { if (ROSTERS[k]) ROSTERS[k].now = NOW[k]; });

/* ===================== MOVE PLAN =====================
   What to drop when a Pokémon learns something and already has four.
   Levels are the Emerald learnsets, not Ruby and Sapphire's.          */
const MOVEPLAN = {
h03:[
 {p:"%S%", only:["mudkip"], lv:16, learn:"<b>Mud-Shot</b>", drop:"Growl", why:"55 power Ground, physical. <b>Marshtomp's level, not Mudkip's</b> — evolving at 16 is what puts Mud-Shot on the list at all. It is 2× on everything Roxanne owns."},
 {p:"%S%", only:["torchic"], lv:16, learn:"<b>Double Kick</b>", drop:"Growl", why:"Fighting, and it hits twice. 2× on Roxanne's Rock types, which Ember is resisted by."},
 {p:"%S%", only:["treecko"], lv:16, learn:"<b>Fury Cutter</b>", drop:"Leer", why:"Grovyle's level. Weak on its own, but Absorb already handles Roxanne — the stat move is the dead slot."},
 {p:"Nincada", lv:25, learn:"<b>False Swipe</b>", drop:"Leech Life", why:"<b>Hold it back from evolving at 20</b> with an Everstone or by pressing B. False Swipe always leaves the target on 1 HP and there is no TM or tutor for it in Emerald — this is the only accessible source, and it makes every legendary catch later reliable."}
],
h05:[
 {p:"Kirlia", lv:21, learn:"<b>Calm Mind</b>", drop:"Growl", why:"+1 Special Attack and +1 Special Defence in one turn, on the body that will have 125 Special Attack. This single move is why Ralts was worth twenty minutes of hunting."},
 {p:"Breloom", lv:23, learn:"<b>Mach Punch</b>", drop:"Absorb", why:"<b>It always moves first</b>, which is how a Pokémon with 60 Defence survives long enough to matter. Keep Mega Drain for the Grass slot."},
 {p:"Swellow", lv:13, learn:"<b>Wing Attack</b>", drop:"Growl", why:"Taillow's level — 60 power Flying against Peck's 35."}
],
h06:[
 {p:"Manectric", at:"TM24", learn:"<b>Thunderbolt</b>", drop:"Spark", why:"<b>90 power special against Spark's 65.</b> Electric is a special type in Generation III and Manectric's Special Attack is 105 against its 75 Attack — Spark was always running off the wrong stat."},
 {p:"Aron", lv:13, learn:"<b>Metal Claw</b>", drop:"Mud-Slap", why:"50 power Steel, physical, and it sometimes raises Attack. Aron's whole point is physical damage."},
 {p:"Swellow", at:"TM47", learn:"<b>Steel Wing</b>", drop:"Focus Energy", why:"Steven's TM from Granite Cave. 70 power Steel covers the Rock and Ice types that resist Flying — exactly what Swellow otherwise loses to."}
],
h08:[
 {p:"%S%", lv:36, learn:"<b>evolution</b>", drop:"—", why:"Swampert, Blaziken or Sceptile. Nothing is lost — the final forms share their mid-stage learnsets at slightly later levels."},
 {p:"Lairon", lv:29, learn:"<b>Iron Tail</b>", drop:"Headbutt", why:"<b>100 power Steel, physical, learned free at 29 — do not spend TM23 on this.</b> 75% accuracy is the cost."},
 {p:"Breloom", lv:36, learn:"<b>Sky Uppercut</b>", drop:"Headbutt", why:"85 power Fighting that hits through Fly and Bounce. This is the move that beats Norman, Sidney and Glacia."},
 {p:"Gardevoir", lv:26, learn:"<b>Psychic</b>", drop:"Confusion", why:"<b>90 power against 50, and you do not need TM29 for it</b> — Gardevoir learns Psychic on its own. Save the machine for something else."}
],
h10:[
 {p:"%S%", at:"TM13", learn:"<b>Ice Beam</b>", drop:"a weak physical move", why:"<b>The most important TM in the game.</b> Ice is 4× on Winona's Altaria, 4× on Drake's Altaria and Salamence, and 2× on the rest of his team. Abandoned Ship, or 4,000 Game Corner coins."},
 {p:"Swellow", lv:38, learn:"<b>Aerial Ace</b>", drop:"Quick Attack", why:"<b>It learns this by itself — do not spend Winona's TM40 on Swellow.</b> 60 power Flying that never misses. Give the TM to Aggron or an Absol instead."},
 {p:"%S%", at:"HM03", learn:"<b>Surf</b>", drop:"—", why:"95 power Water and a permanent field move. On a Blaziken or Sceptile run, put Surf on a Pelipper or a Wailmer instead and keep the starter's four slots for attacks."}
],
h13:[
 {p:"Manectric", lv:39, learn:"<b>Bite</b>", drop:"Quick Attack", why:"<b>Dark is a special type in Generation III</b>, so Bite runs off Manectric's 105 Special Attack rather than its 75 Attack. It is 2× on every one of Tate &amp; Liza's four."},
 {p:"Aggron", at:"TM26", learn:"<b>Earthquake</b>", drop:"Take Down", why:"<b>There is exactly one Earthquake in the game.</b> Swampert learns it free at 52, so on a Mudkip run this machine belongs on Aggron — 110 Attack, and Ground covers the Fire, Electric and Steel types Steel/Rock struggles with."},
 {p:"Gardevoir", at:"TM04", learn:"<b>Calm Mind</b> (if you dropped it)", drop:"Imprison", why:"Tate &amp; Liza's badge TM. Gardevoir already learns Calm Mind at 21 — put the machine on a second special attacker instead."}
],
h14:[
 {p:"%S%", only:["mudkip"], lv:52, learn:"<b>Earthquake</b>", drop:"Take Down", why:"<b>Swampert's level, not Marshtomp's</b> — Marshtomp would have had it at 46, and evolving at 36 pushes it back to 52. Worth the wait for the stat line."},
 {p:"Breloom", at:"TM19", learn:"<b>Giga Drain</b>", drop:"Mega Drain", why:"75 power against 40, same type and class, and it still heals for half the damage dealt. The TM is on Route 123 from the woman who wants to see a Grass type."},
 {p:"Swellow", at:"TM42", learn:"<b>Facade</b>", drop:"Steel Wing", why:"70 power that <b>doubles to 140 when the user is poisoned, burned or paralysed</b>. Norman's badge TM, and it is the best Normal move in the game on anything that gets statused."}
],
e4:[
 {p:"Aggron", at:"TM40", learn:"<b>Aerial Ace</b>", drop:"Roar", why:"Winona's TM, and Aggron is where it earns its keep — a never-miss Flying move on a body that otherwise cannot touch the Fighting types that are 4× on it."},
 {p:"Gardevoir", at:"TM24 or TM29", learn:"<b>Thunderbolt</b>", drop:"Imprison or Future Sight", why:"Gardevoir's Psychic does <i>zero</i> to Sidney's Dark team. Thunderbolt gives it something to do in that room and answers Wallace's Gyarados besides."},
 {p:"Manectric", at:"TM25", learn:"<b>Thunder</b>", drop:"—", why:"<b>Only if you are fighting under rain.</b> Thunder never misses in rain and Wallace's Wailord sets it. Otherwise keep Thunderbolt — 70% accuracy loses runs."}
]
};
