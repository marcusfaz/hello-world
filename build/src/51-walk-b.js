/* ===================== HOENN 06–10 ===================== */

STAGES.push({
id:"h06", ch:"hoenn", tag:"Stage 06", place:"Route 110 · Mauville City · New Mauville · Verdanturf",
title:"Dynamo Badge — Wattson, and the two HMs that open the map",
lede:"Mauville is the hub of Hoenn and the biggest single unlock in the game: a bike, Rock Smash, Strength, Thunderbolt and the road north all come out of this one stop.",
band:[{k:"Party level",v:"24 → 28"},{k:"Badge",v:"Dynamo"},{k:"Unlocks",v:"HM06 Rock Smash · HM04 Strength"}],
body:[
["team","<b>Marshtomp wins this gym on its own and takes zero damage doing it.</b> Ground is immune to Electric — Shock Wave, Thunder Wave and Spark all do literally nothing to it. Lead it, and the only thing you have to think about is Magneton's SonicBoom, which does a flat 20 regardless of typing."],
["warn","<b>Do not lead a Steel type into Wattson.</b> His Lv 22 Magneton has <b>Magnet Pull</b>, which stops Steel types switching out at all. If your Aron walks in, it is stuck there taking Thunderbolts until one of you faints."],
["h","The walk"],
["do",[
 {at:"Route 110", t:"Catch an <b>Electrike</b>", sub:"30%. Manectric is the sixth member of this team — 105 Special Attack, 105 Speed, and Thunderbolt is about to be handed to you free."},
 {t:"Catch a <b>Plusle</b> and a <b>Minun</b>", sub:"Plusle is 2% here and Minun 15%. Both are Emerald catches on this route and nowhere convenient later — take them for the dex."},
 {t:"Catch a <b>Gulpin</b> and an <b>Oddish</b>", sub:"15% and 10%. Gloom needs a Leaf Stone or a Sun Stone depending on which branch you want, so catch two Oddish if you can."},
 {t:"Beat your <b>rival</b> on the route", sub:"Lv 18 Slugma, Lv 18 Lombre and a Lv 20 Grovyle if you took Mudkip. Keep Swampert away from the Grovyle."},
 {t:"Take the <b>Itemfinder</b> your rival leaves you", sub:"Every hidden item in this guide is findable with it. Use it on beaches and in dead ends."},
 {t:"Clear the first <b>Trick House</b> puzzle", sub:"It moves and re-opens after each badge. This round's prize is <b>TM12 Taunt</b>."},
 {t:"Take the <b>Rare Candy</b> on the grass island (come back with Surf) and the hidden <b>Great Ball</b>"},
 {at:"Mauville City", t:"Beat <b>Wally</b> outside the gym", sub:"A single Lv 16 Ralts. He has been raising it since Route 102."},
 {t:"Take a bike from <b>Rydel's Cycles</b> — take the <b>Mach Bike</b>", sub:"You can swap for the Acro Bike any time, free. Take Mach first: it is what climbs Mirage Tower's crumbling floors and the Sky Pillar later, and both are on the critical path."},
 {t:"Take <b>HM06 Rock Smash</b> from the Rock Smash Dude in the south-east house"},
 {t:"Beat <b>Wattson</b> in the Mauville Gym", sub:"The gym is a circuit of switch-operated gates. Four Electric types, none of which can touch a Ground type."},
 {t:"Take the <b>Dynamo Badge</b> and <b>TM34 Shock Wave</b>", sub:"Rock Smash now works in the field. Traded Pokémon obey to Lv 40."},
 {t:"Leave New Mauville alone for now", sub:"<b>Wattson does not hand over the Basement Key yet.</b> He asks for help with the generator only when you come back through Mauville after Norman gives you Surf — New Mauville is reached by surfing, so there is nothing you can do here until then. It is handled in Stage 09."},
 {at:"Route 117 · Verdanturf", t:"Catch an <b>Illumise</b> or <b>Volbeat</b> on Route 117", sub:"Illumise 18%, Volbeat 1%. Volbeat is genuinely rare — take it if it shows."},
 {t:"Leave a pair at the <b>Day Care</b> on Route 117", sub:"This is how you get Azurill, Wynaut and the other baby forms. Put a <b>Slugma</b> in your party once you have one — Magma Armor halves the steps to hatch."},
 {t:"Run the <b>Verdanturf Battle Tent</b>", sub:"Battle Palace rules — your Pokémon pick their own moves from their Nature. The best Nature tutorial in the game."},
 {t:"Take <b>TM45 Attract</b> from the Battle Tent"},
 {at:"Rusturf Tunnel", t:"Enter from the Verdanturf side and <b>Rock Smash</b> the wall"},
 {t:"Take <b>HM04 Strength</b> from Wanda's boyfriend", sub:"This is the only Strength in the game and Fiery Path needs it. Do not skip north without it."},
 {t:"Return to Mauville and head north onto Route 111"}
]],
["boss",{name:"Wattson", role:"Gym Leader · Electric", badge:"Dynamo Badge", team:[
 {m:"Voltorb", l:20, t:["Electric"], note:"Soundproof — which in Gen 3 blocks Roar and Supersonic. <b>Selfdestruct</b> is the real threat; it will take a chunk out of anything not immune."},
 {m:"Electrike", l:20, t:["Electric"], note:"Static. Shock Wave never misses, but it does nothing to Ground."},
 {m:"Magneton", l:22, t:["Electric","Steel"], note:"<b>Magnet Pull traps your Steel types.</b> SonicBoom does a flat 20 damage regardless of type — the only thing that touches a Ground lead."},
 {m:"Manectric", l:24, t:["Electric"], note:"Holds a <b>Sitrus Berry</b>. Howl raises its Attack, which is its worse stat. Thunder Wave is the annoyance."}
], plan:[
 "<b>Lead Marshtomp or any Ground type and do not switch.</b> Electric does zero to Ground. Three of his four cannot damage you at all.",
 "<b>Magneton is the only one that can.</b> SonicBoom is typeless flat damage. It has 20 PP and you have more HP than that — just keep attacking.",
 "Magneton is <b>Electric/Steel</b>, so Ground is 2× on it and it dies to Mud-Shot in two.",
 "<b>Watch Voltorb's Selfdestruct.</b> It will do it at low HP. Ground immunity does not save you from a Normal-type explosion — keep your lead above half.",
 "Never bring your Aron in. Magnet Pull means it cannot leave."
], reward:"Dynamo Badge, <b>TM34 Shock Wave</b>, and Rock Smash usable in the field. <b>The Basement Key comes later</b> — Wattson only asks for help with the New Mauville generator once you have Surf."}],
["h","Worth catching now"],
["catch",[
 {n:"Electrike", t:["Electric"], where:"Route 110 — 30%, Route 118 — 30%", why:"Manectric at 26: <b>105 Special Attack and 105 Speed</b>. It is your Electric slot, which matters because Wallace's Champion team is six Water types and Winona's is five Flying ones. Thunderbolt arrives free from Wattson shortly."},
 {n:"Minun", t:["Electric"], where:"Route 110 — 15%", why:"Dex entry. Both Plusle and Minun are in Emerald — this is not a version pair here — but neither is worth a team slot next to Manectric."},
 {n:"Plusle", t:["Electric"], where:"Route 110 — 2%", why:"The rarer of the pair. Take it when it appears; Route 110 is the convenient patch."},
 {n:"Gulpin", t:["Poison"], where:"Route 110 — 15%, Route 123 — later", why:"Swalot at 26. Sticky Hold and Liquid Ooze are both situational; this is a dex entry more than a team member."},
 {n:"Oddish", t:["Grass","Poison"], where:"Route 110 — 10%, Route 117 — 40%", why:"<b>Two evolution branches from Gloom:</b> Leaf Stone gives Vileplume, Sun Stone gives Bellossom. Both are separate dex entries, so catch two Oddish and split them."},
 {n:"Magnemite", t:["Electric","Steel"], where:"New Mauville — 50%, after Surf", why:"Electric/Steel resists eleven types in Generation III. A strong Frontier body, and the only place it is catchable."}
]],
["tip","<b>Take the Mach Bike, not the Acro Bike.</b> Rydel swaps them free at any time, so this is not a permanent choice — but the Mach Bike is on the critical path twice (Mirage Tower's collapsing floors and the Sky Pillar's cracked ones) and the Acro Bike is only needed for a handful of optional item ledges."],
["zones","h06"]
]});

STAGES.push({
id:"h07", ch:"hoenn", tag:"Stage 07", place:"Route 111 · 112 · Fiery Path · 113 · Fallarbor · 114 · Meteor Falls",
title:"North to Fallarbor — Meteor Falls, and both teams in one room",
lede:"The long overland leg. It is also the first time you see Team Magma and Team Aqua in the same place, which is the thing Emerald does that neither Ruby nor Sapphire could.",
band:[{k:"Party level",v:"28 → 32"},{k:"Badges",v:"3"},{k:"Needs",v:"Strength · Rock Smash"}],
body:[
["ver","<b>Both teams are real antagonists in Emerald.</b> Ruby gave you Magma only; Sapphire gave you Aqua only. Emerald runs both, and it splits them: <b>Team Magma</b> handles Meteor Falls, Mt. Chimney, the Jagged Pass hideout and the Mossdeep Space Center. <b>Team Aqua</b> handles everything else — Petalburg Woods, Rustboro, Slateport, the Weather Institute, Mt. Pyre, the Lilycove hideout and the Seafloor Cavern. If a walkthrough has the wrong team in a room, it was written for a different cartridge."],
["warn","<b>The Route 111 desert is closed to you right now.</b> The sandstorm needs the <b>Go-Goggles</b>, and those come from your rival <i>after</i> you beat Flannery. Mirage Tower, the fossils and TM37 Sandstorm are all behind that gate — they are handled two stages from now. Walk around the desert for the moment."],
["h","The walk"],
["do",[
 {at:"Route 111 (south)", t:"Beat the trainers and take the <b>Elixir</b> and hidden items"},
 {t:"Note the desert gate and the <b>Mirage Tower</b> — you will be back", sub:"You need Go-Goggles, the Mach Bike and Rock Smash. You have two of the three."},
 {at:"Route 112", t:"Catch a <b>Numel</b>", sub:"75%. Camerupt is Fire/Ground and a fine alternative to Manectric if you would rather have Fire coverage."},
 {t:"Catch a <b>Marill</b> if you skipped it on Route 104"},
 {at:"Fiery Path", t:"Catch a <b>Slugma</b>", sub:"10%. <b>Take one and put it in your party.</b> Magma Armor halves Egg hatching steps in Emerald, and you will be hatching a lot of Eggs for the dex."},
 {t:"Catch a <b>Torkoal</b>", sub:"18%, and this is the only wild Torkoal in the game. White Smoke, 140 Defence, and it learns Overheat."},
 {t:"Catch a <b>Machop</b>, a <b>Koffing</b> and a <b>Grimer</b>", sub:"Grimer is 2% and Fiery Path is the only accessible patch for a long while. Take it when it shows."},
 {t:"<b>Strength</b> the boulder in the north-west corner for <b>TM06 Toxic</b>"},
 {at:"Route 113", t:"Catch a <b>Spinda</b>", sub:"70%. Every Spinda has a unique spot pattern generated from its personality value — a real curiosity, and a dex entry."},
 {t:"Catch a <b>Skarmory</b>", sub:"5% and worth the wait. <b>Steel/Flying resists nine types and is immune to Ground and Poison</b>, and it walls Sidney and Phoebe as hard as Aggron does."},
 {t:"Take <b>TM32 Double Team</b> (hidden, north of the westernmost grass)"},
 {t:"Collect <b>Soot</b> in the ash and take it to the Glass Workshop", sub:"Soot buys flutes and, more usefully, the <b>Blue Flute</b> and <b>Yellow Flute</b>. Walk through ash grass on your way past."},
 {at:"Fallarbor Town", t:"Run the <b>Fallarbor Battle Tent</b>", sub:"Battle Arena rules — three turns, then a judge scores you. No switching."},
 {t:"Visit the <b>Move Maniac</b> and remember a lost move for a <b>Heart Scale</b>", sub:"This is how you get back a move you overwrote. Every Heart Scale is one move."},
 {t:"Meet <b>Lanette</b> in the Pokémon Center", sub:"She invites you to her house on Route 114 — go, and take the free Lanette's Doll."},
 {at:"Route 114", t:"Take <b>TM05 Roar</b> from the Gentleman and <b>TM28 Dig</b> from the Fossil Maniac's brother", sub:"Dig is 80 power Ground and physical. It is a genuinely good move this early, and it is also how you open the Sealed Chamber much later."},
 {t:"Catch a <b>Swablu</b> and a <b>Seviper</b>", sub:"Swablu is 40% and becomes Altaria — <b>Dragon/Flying</b>, one of only two Dragon lines you can raise. Seviper is 9% and Emerald has it; <b>Zangoose is Ruby-only and will need a trade</b>."},
 {t:"Catch a <b>Nuzleaf</b> if it shows", sub:"1%. Easier to evolve a Seedot."},
 {at:"Meteor Falls", t:"Catch a <b>Solrock</b>", sub:"30%. <b>Solrock is in Emerald; Lunatone is Sapphire-only and needs a trade.</b> Do not spend time looking for Lunatone in the wild here."},
 {t:"Watch the <b>Team Magma vs Team Aqua</b> scene", sub:"Magma has stolen Professor Cozmo's Meteorite. Archie interrupts, and Magma retreats to Mt. Chimney."},
 {t:"Take the items on the accessible floors and leave", sub:"The back rooms — with <b>Bagon</b> and <b>TM02 Dragon Claw</b> — need Surf and Waterfall. That is a post-game trip."},
 {t:"Go back to Route 112 and take the <b>Cable Car</b> up Mt. Chimney"}
]],
["h","Worth catching now"],
["catch",[
 {n:"Slugma", t:["Fire"], where:"Fiery Path — 10%, Route 112 — surrounding grass", why:"<b>Magma Armor halves the number of steps to hatch an Egg while it is anywhere in your party.</b> This is an Emerald-only field effect and it is the difference between an hour of breeding and two. Catch one, park it in slot six, forget about it."},
 {n:"Torkoal", t:["Fire"], where:"<b>Fiery Path — 18%</b>", why:"The only wild Torkoal in the game. 140 Defence, White Smoke, and it learns Overheat by level-up. If you want a Fire type without raising a Numel, this is it."},
 {n:"Skarmory", t:["Steel","Flying"], where:"Route 113 — 5%", why:"<b>Steel/Flying is the best defensive typing in Generation III</b> — nine resistances, immune to Ground and Poison, and Steel still resists Ghost and Dark here. Slow and weak offensively, but it walls two Elite Four members by itself."},
 {n:"Numel", t:["Fire","Ground"], where:"Route 112 — 75%", why:"Camerupt at 33. Fire/Ground with Earthquake and Flamethrower covers a lot, and it is immune to Electric like Swampert. A real alternative if you would rather not run Manectric."},
 {n:"Swablu", t:["Normal","Flying"], where:"Route 114 — 40%, Route 115 — 30%", why:"Altaria at 35 is <b>Dragon/Flying</b> with Natural Cure and Dragon Dance. One of only two raisable Dragon lines in Hoenn, and far easier to get than Bagon."},
 {n:"Solrock", t:["Rock","Psychic"], where:"Meteor Falls — 20% on 1F, 35% in the back rooms", why:"<b>Emerald has Solrock; Lunatone is Sapphire-exclusive.</b> Levitate makes it immune to Ground, and Rock/Psychic is an odd but useful pair."},
 {n:"Seviper", t:["Poison"], where:"Route 114 — 9%, Route 121 — later", why:"<b>Emerald has Seviper; Zangoose is Ruby-exclusive and needs a trade.</b> Take it now — this and Route 121 are your patches."},
 {n:"Spinda", t:["Normal"], where:"Route 113 — 70%", why:"Only here. Its spot pattern is derived from its personality value, so no two are alike. Purely a dex entry."}
]],
["tip","<b>Carry a Slugma from here to the end of the game.</b> Filling the Hoenn Dex needs Azurill, Wynaut and several other baby forms, and every one of them is an Egg. Magma Armor turns that grind into half a grind, and it costs you nothing but a party slot you were not using."],
["zones","h07"]
]});

STAGES.push({
id:"h08", ch:"hoenn", tag:"Stage 08", place:"Mt. Chimney · Jagged Pass · Lavaridge Town · Route 111 desert",
title:"Heat Badge — Maxie at the crater, Flannery below it",
lede:"Your first real villain fight and your first fight against a Leader who sets weather. Then the Go-Goggles finally open the desert, so this is where you double back for the fossils.",
band:[{k:"Party level",v:"32 → 36"},{k:"Badge",v:"Heat"},{k:"Unlocks",v:"Go-Goggles · the desert"}],
body:[
["team","<b>Take Marshtomp up the mountain and do not switch.</b> Water/Ground is 2× resistant to nothing Maxie owns except Mightyena's Bite, and Mud-Shot is 2× on his Camerupt. Flannery below is the same answer with more care — see the weather note."],
["warn","<b>Flannery sets her own sun and every one of her four carries Overheat.</b> Under harsh sunlight a 140-power Overheat becomes 210, which will one-shot most things you are carrying at level 34. It also drops <i>her</i> Special Attack two stages each time. The fight is: eat the first Overheat on something bulky, then win against a crippled attacker."],
["h","The walk"],
["do",[
 {at:"Mt. Chimney", t:"Take the <b>Cable Car</b> up from Route 112"},
 {t:"Fight through the <b>Team Magma Grunts</b> at the summit", sub:"Team Aqua is up here too, fighting them. You only battle Magma."},
 {t:"Beat <b>Magma Admin Tabitha</b>", sub:"Two Numel, a Poochyena and a Zubat, Lv 18–22. Mud-Shot ends both Numel outright."},
 {t:"Beat <b>Maxie</b>", sub:"Lv 24 Mightyena, Lv 24 Zubat, Lv 25 Camerupt. Mud-Shot handles the Camerupt outright."},
 {t:"Take the <b>Meteorite</b> out of the machine", sub:"Maxie leaves it fitted to the device. Hand it to <b>Professor Cozmo in his Fallarbor house</b> for <b>TM27 Return</b> — one of the better Normal moves in the game once friendship is high."},
 {t:"Take <b>TM50 Overheat</b>… no — take the items at the summit and go south", sub:"Overheat is Flannery's badge TM, not a summit pickup."},
 {at:"Jagged Pass", t:"Walk down the pass toward Lavaridge"},
 {t:"Catch a <b>Spoink</b>", sub:"20%. Grumpig at 32 has 110 Special Defence and Thick Fat. Jagged Pass and Route 111's mountain are the only patches."},
 {t:"Catch a <b>Machop</b> if you still need one", sub:"25% here."},
 {t:"Note the <b>hidden cave entrance</b> you cannot see yet", sub:"The Magma Hideout is behind it. You need the <b>Magma Emblem</b> from Mt. Pyre, four stages away."},
 {at:"Lavaridge Town", t:"Take the free <b>Charcoal</b> from the old man <b>inside the Herb Shop</b>", sub:"20% more power from Fire moves, permanently, on whoever holds it."},
 {t:"Use the PC to drop to <b>five or fewer</b> Pokémon", sub:"She will not hand an Egg to a full party, and this is the step people miss."},
 {t:"Talk to the old woman by the <b>sand baths, outside</b>, and take the <b>Egg</b>", sub:"It hatches into a <b>Wynaut</b> — a dex entry you cannot otherwise get without breeding a Wobbuffet."},
 {t:"Sweep the <b>hot springs</b> with the Itemfinder for the hidden <b>Ice Heal</b>", sub:"The springs are through the back door of the Pokémon Center building."},
 {t:"Beat <b>Flannery</b>", sub:"The gym floor is a maze of holes that drop you a level. Take the right path or you will do it three times."},
 {t:"Take the <b>Heat Badge</b> and <b>TM50 Overheat</b>", sub:"Strength now works in the field. Traded Pokémon obey to Lv 50."},
 {t:"Beat your <b>rival</b> outside the gym and take the <b>Go-Goggles</b>", sub:"<b>This is the desert key.</b> Everything below is now open."},
 {at:"Route 111 desert", t:"Enter the sandstorm with the Go-Goggles on"},
 {t:"Catch a <b>Trapinch</b>", sub:"35%. Flygon at 45 is <b>Ground/Dragon with Levitate</b> — immune to Ground, resistant to Fire, Electric and Poison, and the best Dragon you can raise before the League. It is a long climb (Vibrava at 35, Flygon at 45) so start now if you want it."},
 {t:"Catch a <b>Cacnea</b> and a <b>Baltoy</b>", sub:"Cacnea 6%, Baltoy 24%. Claydol has Levitate and is a solid Frontier body."},
 {t:"Catch a <b>Sandshrew</b>", sub:"35%. Sandslash learns Cut, Strength, Rock Smash and Dig — a four-HM mule on one usable body."},
 {t:"Take <b>TM37 Sandstorm</b> and <b>TM43 Secret Power</b> in the desert"},
 {at:"Mirage Tower", t:"Ride the <b>Mach Bike</b> over the crumbling floors to the top", sub:"The floors collapse under you at walking speed. Mach Bike only — the Acro Bike will not do it."},
 {t:"<b>Rock Smash</b> the rocks on the top floor"},
 {t:"<b>Take the Root Fossil</b>", sub:"The tower collapses the moment you take one and the other sinks into the sand forever. Lileep and Cradily have <b>Suction Cups</b> and a Rock/Grass typing that resists Water, Electric, Ground and Normal — it is the better of the two, and you get the Claw Fossil back in the Desert Underpass after the Hall of Fame anyway."},
 {t:"Take the fossil to the <b>Devon Corporation</b> in Rustboro and wait", sub:"They revive it into Lileep. Come back after a few minutes of play."}
]],
["boss",{name:"Flannery", role:"Gym Leader · Fire", badge:"Heat Badge", team:[
 {m:"Numel", l:24, t:["Fire","Ground"], note:"Oblivious. <b>Overheat</b> and <b>Sunny Day</b> — she starts stacking sun immediately."},
 {m:"Slugma", l:24, t:["Fire"], note:"Magma Armor. Overheat, Smog, Light Screen, Sunny Day. Slow and frail."},
 {m:"Camerupt", l:26, t:["Fire","Ground"], note:"Overheat and Attract. <b>Ground typing means Water is 4× on it.</b>"},
 {m:"Torkoal", l:29, t:["Fire"], note:"Holds a <b>White Herb</b>, which restores the Special Attack that Overheat drops — so its <i>first</i> Overheat does not weaken it. 140 Defence. This is the fight."}
], plan:[
 "<b>Lead Marshtomp.</b> Water is 4× on both Numel and Camerupt and 2× on the other two, and Water/Ground takes nothing from Fire's usual partners.",
 "<b>Her sun halves your Water moves.</b> A ×1.5 Fire boost and a ×0.5 Water cut is a big swing — but Marshtomp still out-damages a Slugma through it. Do not panic and switch.",
 "<b>Torkoal's White Herb undoes the first Overheat's self-debuff.</b> Every Overheat after that sticks, so trade one big hit and then it is a 140-Defence wall with no offence.",
 "<b>Attract will lock you out for turns at a time</b> if your lead is the opposite gender. If your Marshtomp is male, consider leading a female or genderless body — an Aron or a Magnemite.",
 "A Rock type also works: Rock resists Fire and Nosepass or Lairon can sit on the whole gym. It is slower, but it does not care about the sun at all."
], reward:"Heat Badge, <b>TM50 Overheat</b>, Strength usable in the field, and the <b>Go-Goggles</b> from your rival immediately after."}],
["h","Worth catching now"],
["catch",[
 {n:"Trapinch", t:["Ground"], where:"Route 111 desert — 35%, Mirage Tower — 50%", why:"<b>Flygon is the best Dragon you can raise in Hoenn.</b> Ground/Dragon with <b>Levitate</b>, which cancels its own Ground weakness — it is immune to Ground, resists Fire, Electric, Poison, Rock and Bug. Vibrava at 35 and Flygon at 45 is a long climb; start it now or not at all."},
 {n:"Spoink", t:["Psychic"], where:"Jagged Pass — 20%, Route 111 — mountain grass", why:"Grumpig at 32: 110 Special Defence, 90 Special Attack and <b>Thick Fat</b>, which halves Fire and Ice. Only these two patches."},
 {n:"Cacnea", t:["Grass"], where:"Route 111 desert — 6%", why:"Cacturne at 32 is <b>Grass/Dark</b> with Sand Veil. Sidney runs one. The desert is the only patch."},
 {n:"Baltoy", t:["Ground","Psychic"], where:"Route 111 desert — 24%", why:"Claydol at 36 has <b>Levitate</b> — a Ground type immune to Ground moves. Tate & Liza run one and it is a good Frontier body."},
 {n:"Sandshrew", t:["Ground"], where:"Route 111 desert — 35%, Mirage Tower — 50%", why:"The best pure HM mule in Hoenn: Cut, Strength, Rock Smash and Dig on one body that can actually take a hit."},
 {n:"Lileep", t:["Rock","Grass"], where:"<b>Root Fossil</b> at Mirage Tower, revived in Rustboro", why:"<b>Take the Root Fossil.</b> Rock/Grass resists Water, Electric, Ground, Normal and Poison, and Cradily's Suction Cups plus 107 Special Defence make it a wall. The Claw Fossil is recoverable in the Desert Underpass after the Hall of Fame, so this choice is not permanent — but you only get one now."}
]],
["ver","<b>The fossils are in Mirage Tower in Emerald, not lying in the desert sand.</b> Ruby and Sapphire put the Root and Claw Fossils on the ground on Route 111. Emerald built a four-storey tower that only appears sometimes, requires the Mach Bike, and <b>collapses permanently</b> the moment you take a fossil. The one you leave behind sinks — but Emerald also added the <b>Desert Underpass</b> behind the Fossil Maniac's house on Route 114, where you can collect the other one after entering the Hall of Fame."],
["zones","h08"]
]});

STAGES.push({
id:"h09", ch:"hoenn", tag:"Stage 09", place:"Petalburg City · Route 118 · New Mauville",
title:"Balance Badge — your father, and the Surf that unlocks the sea",
lede:"Norman is a single-type gym with the highest stat line you have faced, and one ability that hands you the fight. Beating him is what turns Hoenn from a road into an ocean — and it opens the Abandoned Ship, where the game\u2019s most important TM is sitting in a cabin.",
band:[{k:"Party level",v:"36 → 40"},{k:"Badge",v:"Balance"},{k:"Unlocks",v:"HM03 Surf · the sea"}],
body:[
["team","<b>Bring a Fighting type and lead it into Slaking.</b> Fighting is 2× on every Pokémon Norman owns, and Slaking's <b>Truant</b> means it does nothing every second turn. A Breloom with Sky Uppercut or a Hariyama with Arm Thrust ends this gym in about six turns."],
["h","The walk"],
["do",[
 {at:"Petalburg City", t:"Beat the two gym trainers on the path you choose", sub:"The gym is a series of themed rooms — you only fight the ones on your route to Norman."},
 {t:"Beat <b>Norman</b>", sub:"Spinda, Vigoroth, Linoone and a Lv 31 Slaking."},
 {t:"Take the <b>Balance Badge</b> and <b>TM42 Facade</b>", sub:"Surf now works in the field. Traded Pokémon obey to Lv 60. <b>Facade doubles to 140 power when the user is poisoned, burned or paralysed</b> — it is the best Normal move in the game on a Guts body."},
 {t:"Go to <b>Wally's father's house</b> north-west of the gym"},
 {t:"Take <b>HM03 Surf</b>", sub:"This is the biggest single unlock in Hoenn. Half the map is water."},
 {t:"Teach Surf to <b>Swampert</b>", sub:"95 base power, Water, special — and it never leaves its moveset again."},
 {at:"Abandoned Ship", t:"Surf out to the <b>Abandoned Ship</b> on Route 108"},
 {t:"Take <b>TM13 Ice Beam</b>", sub:"<b>The most important machine in the game.</b> Ice is 4× on Winona's Altaria and on Drake's Altaria and Salamence, and 2× on the rest of his team. Do not leave this ship without it."},
 {t:"Take <b>TM18 Rain Dance</b>", sub:"Five turns of your weather overwrites five turns of theirs — useful against Flannery's sun and worth carrying."},
 {t:"Take the <b>Dive Ball</b> from the north-central cabin and the <b>Escape Rope</b> from the south-west one"},
 {t:"Talk to the Scientist upstairs and find the <b>Scanner</b>", sub:"He is investigating the wreck for Captain Stern."},
 {t:"Use the <b>Storage Key</b> on the north-east cabin door", sub:"The key jams in the lock but the door opens."},
 {t:"Note the flooded south-central cabin and leave", sub:"<b>That room needs Dive</b>, which is five stages away. Come back for it."},
 {at:"Mauville City", t:"Return to Mauville and find <b>Wattson</b> outside the Pokémon Center", sub:"He now asks you to shut down the New Mauville generator, and hands over the <b>Basement Key</b>. This is the first point in the game the errand exists."},
 {t:"Take the <b>Basement Key</b>"},
 {at:"New Mauville", t:"Surf south from Route 110 to the New Mauville entrance"},
 {t:"Use the <b>Basement Key</b> on the door"},
 {t:"Navigate the colour-switch puzzle to the generator", sub:"Blue switch and red switch toggle which barriers are solid. Take the blue path first."},
 {t:"Catch a <b>Voltorb</b> and a <b>Magnemite</b>", sub:"50% each. <b>New Mauville is the only place either appears in Hoenn.</b> Take both — Magneton in particular resists eleven types."},
 {t:"Take the <b>Thunder Stone</b>, <b>Ultra Ball</b> and <b>Full Heal</b>"},
 {t:"Switch off the generator"},
 {at:"Mauville City", t:"Return to <b>Wattson</b> outside the Pokémon Center and tell him it is done"},
 {t:"Take <b>TM24 Thunderbolt</b>", sub:"<b>Put it on Manectric.</b> 90 power Electric, special, 100% accurate — it is the answer to Winona, Juan, Archie's Sharpedo and Wallace's entire Champion team. This is the single most valuable TM in the first half of the game."},
 {at:"Route 118", t:"Surf east and catch a <b>Kecleon</b>… you cannot see it yet", sub:"Kecleon is invisible until you have the Devon Scope, two stages away. Come back."},
 {t:"Meet <b>Steven</b> on the shore and carry on to Route 119"}
]],
["boss",{name:"Norman", role:"Gym Leader · Normal", badge:"Balance Badge", team:[
 {m:"Spinda", l:27, t:["Normal"], note:"Own Tempo, so it cannot be confused. <b>Teeter Dance</b> confuses <i>you</i>, and Psybeam can too."},
 {m:"Vigoroth", l:27, t:["Normal"], note:"Vital Spirit. Slash has a high crit rate; Encore locks you into your last move for several turns."},
 {m:"Linoone", l:29, t:["Normal"], note:"Pickup. <b>Belly Drum halves its HP to max out its Attack</b> — if it gets that off, Slash will hurt. Kill it before it sets up."},
 {m:"Slaking", l:31, t:["Normal"], note:"Holds a <b>Sitrus Berry</b>. 670 base stat total — the highest non-legendary in Generation III. <b>Truant means it loafs every second turn.</b> Counter punishes physical attackers for double."}
], plan:[
 "<b>Bring Fighting.</b> It is 2× on all four and nothing he owns resists it. Breloom's Sky Uppercut, Hariyama's Arm Thrust or Machoke's Karate Chop all do the job.",
 "<b>Truant is the whole Slaking fight.</b> It attacks, then does nothing. Use its loafing turn to heal, set up, or switch a fainted slot in for free. You effectively get two turns for every one of his.",
 "<b>Do not use a physical move into Slaking the turn it can act</b> — it carries <b>Counter</b>, which returns double the physical damage you just dealt. Attack on its loafing turn instead, or use a special attacker and ignore Counter entirely.",
 "<b>Kill Linoone before it Belly Drums.</b> At +6 Attack a Lv 29 Linoone one-shots most of your team.",
 "Teeter Dance confusion is the one thing that can lose you this fight. Carry a <b>Persim Berry</b> or a Full Heal, and do not sit in confusion hoping."
], reward:"Balance Badge, <b>TM42 Facade</b>, Surf usable in the field, and <b>HM03 Surf</b> from Wally's father immediately after."}],
["h","Worth catching now"],
["catch",[
 {n:"Magnemite", t:["Electric","Steel"], where:"<b>New Mauville — 50%</b>", why:"The only place in Hoenn. Electric/Steel resists eleven types in Generation III, and Magneton's 120 Special Attack is real. Sturdy and Magnet Pull are both good abilities."},
 {n:"Voltorb", t:["Electric"], where:"<b>New Mauville — 50%</b>", why:"Also only here. Electrode has 140 Speed — the fastest thing in Generation III — and Soundproof. A Frontier piece more than a story one."},
 {n:"Kecleon", t:["Normal"], where:"Routes 118, 119, 120, 121 — <b>after the Devon Scope</b>", why:"Invisible without the Devon Scope, which Steven gives you on Route 120. Colour Change makes it take on the type of the last move that hit it. Noted here so you know why the route looks empty."}
]],
["tip","<b>Surf goes on Swampert and stays there for the rest of the game.</b> It is 95 power, special, and Swampert's Special Attack is respectable — but more importantly Surf is a field move you will use hundreds of times, and Swampert is never leaving your party."],
["zones","h09"]
]});

STAGES.push({
id:"h10", ch:"hoenn", tag:"Stage 10", place:"Route 119 · Weather Institute · Fortree City · Route 120",
title:"Feather Badge — the Weather Institute, Castform, and Winona",
lede:"Team Aqua attacks a laboratory to steal a weather Pokémon, which is exactly the kind of thing this game does. You leave with Castform, Fly, the Devon Scope and a badge.",
band:[{k:"Party level",v:"40 → 44"},{k:"Badge",v:"Feather"},{k:"Unlocks",v:"HM02 Fly · Devon Scope"}],
body:[
["team","<b>Winona is five Flying types and Electric beats four of them.</b> Put Thunderbolt on Manectric and lead it. The exception is her Altaria, which is Dragon/Flying — Electric is only neutral on it and Ice is what you want. Swampert with Ice Beam handles that one."],
["h","The walk"],
["do",[
 {at:"Route 119", t:"Ride the Acro Bike over the log bridges (or walk the long way)", sub:"Rydel swaps bikes free. This is one of the few places the Acro Bike saves real time."},
 {t:"Catch a <b>Tropius</b>", sub:"9%. <b>Grass/Flying</b>, only on this route, and it learns Fly. A slow but genuinely useful dex entry."},
 {t:"Catch an <b>Oddish</b>, a <b>Linoone</b> and a <b>Zigzagoon</b> if you still need them"},
 {t:"Note the fishing spots for <b>Feebas</b> and move on", sub:"Feebas lives in exactly six of Route 119's water tiles, chosen from the trendy phrase in Dewford. It is a long hunt — leave it for the post-game chapter."},
 {at:"Weather Institute", t:"Fight through the <b>Team Aqua Grunts</b> on both floors"},
 {t:"Beat <b>Aqua Admin Shelly</b>", sub:"Lv 28 Carvanha and a Lv 28 Mightyena in Emerald. Electric or Grass ends the Carvanha instantly."},
 {t:"Take the <b>Castform</b> the scientists give you", sub:"<b>It changes type with the weather</b> — Fire in sun, Water in rain, Ice in hail. A genuine curiosity, a required dex entry, and the only one in the game."},
 {at:"Route 119 north", t:"Beat your <b>rival</b> just outside Fortree City", sub:"Lv 29 Slugma, Lv 29 Lombre and a Lv 31 Grovyle if you took Mudkip."},
 {t:"Take <b>HM02 Fly</b>", sub:"<b>This is the first point in the game you can Fly anywhere.</b> Everything earlier in this guide is walked or sailed for that reason."},
 {t:"Teach Fly to a <b>Swellow</b>, <b>Tropius</b> or <b>Pelipper</b>", sub:"Not to Swampert — it cannot learn it, and you want its four slots for Surf, Earthquake, Ice Beam and a physical move."},
 {at:"Fortree City", t:"Find the Gym blocked by something invisible", sub:"It is a Kecleon. You need the Devon Scope, and Steven has it on Route 120."},
 {at:"Route 120", t:"Meet <b>Steven</b> north of Fortree and take the <b>Devon Scope</b>"},
 {t:"Reveal and beat (or catch) the <b>Kecleon</b> blocking the gym"},
 {t:"Catch an <b>Absol</b> on Route 120", sub:"8%. Pure Dark, 130 Attack, and Pressure. Only here and Route 121."},
 {t:"Catch a <b>Kecleon</b> now that you can see them", sub:"Colour Change — it becomes the type of whatever last hit it. A required dex entry."},
 {at:"Fortree City", t:"Take <b>TM10 Hidden Power</b> from the old woman in the treehouse north-west of the Gym"},
 {t:"Beat <b>Winona</b>", sub:"Swablu, Tropius, Pelipper, Skarmory and a Lv 33 Altaria."},
 {t:"Take the <b>Feather Badge</b> and <b>TM40 Aerial Ace</b>", sub:"Fly now works in the field. <b>Do not put TM40 on a Swellow</b> — it learns Aerial Ace by itself at 38. Give it to Aggron or Absol instead, where a never-miss Flying move is coverage they cannot otherwise get."}
]],
["boss",{name:"Winona", role:"Gym Leader · Flying", badge:"Feather Badge", team:[
 {m:"Swablu", l:29, t:["Normal","Flying"], note:"Natural Cure. <b>Perish Song</b> kills both Pokémon in three turns if it lives — switch out or kill it fast."},
 {m:"Tropius", l:29, t:["Grass","Flying"], note:"<b>Chlorophyll + Sunny Day</b> doubles its Speed, and SolarBeam charges instantly under its own sun. Ice or Rock is 4× on it."},
 {m:"Pelipper", l:30, t:["Water","Flying"], note:"Keen Eye. Electric is 4× on it. Protect will waste one of your turns."},
 {m:"Skarmory", l:31, t:["Steel","Flying"], note:"<b>Steel/Flying is immune to Ground and resists nine types.</b> Electric is only neutral. Fire is your answer, or just out-damage it."},
 {m:"Altaria", l:33, t:["Dragon","Flying"], note:"Holds an <b>Oran Berry</b>. <b>Dragon Dance</b> raises Attack and Speed together, and it carries Earthquake. <b>Ice is 4× on it.</b>"}
], plan:[
 "<b>Lead Manectric with Thunderbolt.</b> Electric is 4× on Pelipper, 2× on Swablu and 2× on Tropius. Three of five die immediately.",
 "<b>Altaria is the fight.</b> Dragon Dance stacks Attack and Speed, and it has Earthquake for your Electric type. <b>Ice Beam is 4× on it</b> — bring Swampert in and end it in one.",
 "<b>Skarmory is the wall.</b> Electric does nothing special to it and it is immune to your Ground moves. Fire, or a strong physical hit — Sky Uppercut from Breloom is 2× and unresisted.",
 "<b>Kill Swablu on turn one.</b> If Perish Song lands, your Pokémon dies in three turns whatever you do afterwards.",
 "Tropius setting Sunny Day is fine for you — it halves nothing you are using except a Surf. Just do not bring a Water lead into her sun."
], reward:"Feather Badge, <b>TM40 Aerial Ace</b>, and Fly usable in the field."}],
["h","Worth catching now"],
["catch",[
 {n:"Castform", t:["Normal"], where:"<b>Gift — Weather Institute, after Shelly</b>", why:"<b>Forecast changes its type with the weather</b> — Fire in harsh sun, Water in rain, Ice in hail. It is the only one in the game, it is a required dex entry, and it is the clearest demonstration of why weather matters in Emerald. Do not sell or release it."},
 {n:"Tropius", t:["Grass","Flying"], where:"Route 119 — 9%", why:"Only on this route. Slow, but it learns Fly and it is a required dex entry. Chlorophyll doubles its Speed in sun."},
 {n:"Absol", t:["Dark"], where:"Route 120 — 8%, Route 121", why:"<b>Pure Dark with 130 Attack</b> and Pressure. Sidney runs one. It has poor defences but it hits harder than almost anything you can catch at this point."},
 {n:"Kecleon", t:["Normal"], where:"Routes 118–121 — <b>needs the Devon Scope</b>", why:"Invisible until Steven hands you the scope on Route 120. Colour Change is unique to it. A required dex entry and you have to fight one to enter the Fortree Gym anyway."},
 {n:"Feebas", t:["Water"], where:"Route 119 — six specific water tiles", why:"<b>The hardest catch in the game.</b> Six of Route 119's ~440 fishing tiles hold it, and which six is derived from the trendy phrase set in Dewford Hall. Milotic is worth it, but do not start this hunt now — the dex chapter covers the method."}
]],
["ver","<b>Winona is the last Gym Leader before Emerald's plot diverges hard from Ruby and Sapphire.</b> From here both evil teams run parallel storylines, the Magma Hideout moves to Jagged Pass, and the Sootopolis Gym has a different Leader than the one Ruby and Sapphire put there. Anything you remember about the back half of Hoenn from another cartridge is now unreliable."],
["zones","h10"]
]});
