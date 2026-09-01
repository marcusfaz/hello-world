/* ===================== THE POKÉMON LEAGUE ===================== */

STAGES.push({
id:"e4", ch:"league", tag:"Stage 15", place:"Victory Road · Ever Grande City",
title:"The Elite Four, and Wallace",
lede:"Five fights with no healing between them. Sidney, Phoebe, Glacia, Drake, then a Champion running six Water types. Prepare once, properly, and it is one attempt.",
band:[{k:"Party level",v:"57 → 62"},{k:"Badges",v:"8"},{k:"Champion",v:"Wallace"}],
body:[
["ver","<b>Wallace is the Champion in Emerald, not Steven.</b> Ruby and Sapphire put Steven at the end of this hall. Emerald moved Wallace up from the Sootopolis Gym, put Juan in his place, and left Steven as an optional rematch in Meteor Falls at level 75–78. Anything that tells you to prepare for a Steel-type Champion is describing a different game."],
["team","<b>Buy twenty Full Restores and five Revives before you walk in.</b> That is about ₽65,000, and you will have it from Victory Road's trainers. There is no shop and no Pokémon Center between Sidney and Wallace — everything you spend is gone for the rest of the run."],
["h","Before you go in"],
["do",[
 {at:"Victory Road", t:"Get every party member to <b>Lv 57 or above</b>", sub:"Wallace's ace is Lv 58. Anything under 55 will be outsped and outdamaged all the way through."},
 {t:"Catch a <b>Mawile</b>", sub:"5% on B1F and B2F. <b>Pure Steel in Emerald, not Steel/Fairy</b>, and this is the only place it appears in Hoenn."},
 {t:"Catch a <b>Sableye</b> if you skipped Granite Cave", sub:"35% on B2F. Dark/Ghost has no weaknesses in Generation III."},
 {t:"Catch a <b>Lairon</b>, <b>Hariyama</b> or <b>Graveler</b> for the dex if you need them"},
 {t:"Take <b>TM29 Psychic</b> on B1F and <b>TM35 Flamethrower</b>"},
 {t:"Beat <b>Wally</b> at the Victory Road entrance", sub:"Altaria Lv 44, Delcatty Lv 43, Roselia Lv 44, Magneton Lv 41, Gardevoir Lv 45. He has come a long way from that Ralts."},
 {at:"Ever Grande City", t:"Buy <b>20 Full Restores</b>, <b>5 Revives</b> and <b>5 Full Heals</b> at the Pokémon Center Mart"},
 {t:"Hold a <b>Chesto Berry</b> on your lead", sub:"Glacia and Phoebe both have sleep or freeze routes into a lost run. Chesto cures sleep on its own."},
 {t:"Give a <b>Sitrus Berry</b> to your two frailest members", sub:"It restores 30 HP the moment they drop below half, for free, without using your turn."},
 {t:"<b>Save in the Pokémon Center</b>", sub:"There is no save point inside the hall."},
 {at:"The League", t:"Beat <b>Sidney</b> — Dark"},
 {t:"Beat <b>Phoebe</b> — Ghost"},
 {t:"Beat <b>Glacia</b> — Ice"},
 {t:"Beat <b>Drake</b> — Dragon"},
 {t:"Beat <b>Wallace</b> — Champion, Water"},
 {t:"Enter the <b>Hall of Fame</b>", sub:"Then answer the television question about the colour of the Pokémon in the report — <b>this choice decides which Eon Pokémon roams Hoenn</b>. See the post-game chapter before you answer."}
]],
["boss",{name:"Sidney", role:"Elite Four · Dark", badge:"First", team:[
 {m:"Mightyena", l:46, t:["Dark"], note:"<b>Intimidate</b> on entry. Roar forces a switch and Sand-Attack drops your accuracy."},
 {m:"Shiftry", l:48, t:["Grass","Dark"], note:"Chlorophyll. <b>Torment</b> stops you using the same move twice in a row — a real problem for a one-attack sweeper. Double Team and Swagger stack the odds against you."},
 {m:"Cacturne", l:46, t:["Grass","Dark"], note:"Sand Veil. Leech Seed drains you every turn; Needle Arm can flinch."},
 {m:"Crawdaunt", l:48, t:["Water","Dark"], note:"Hyper Cutter. Surf and Swords Dance — it will set up if given a turn."},
 {m:"Absol", l:49, t:["Dark"], note:"Holds a <b>Sitrus Berry</b>. Pressure doubles your PP cost. <b>Swords Dance into Aerial Ace or Slash</b> off 130 Attack is the one thing here that can sweep you."}
], plan:[
 "<b>Fighting beats everything he owns.</b> Dark is 2× weak to Fighting and none of his five resist it. A Breloom's Sky Uppercut or a Hariyama's Cross Chop clears this room on its own.",
 "<b>Do not bring Gardevoir.</b> Psychic does <i>zero</i> damage to Dark types in Generation III, and Gardevoir is pure Psychic here with no Fairy typing to fall back on. It has nothing to do in this fight.",
 "<b>Shiftry and Cacturne are Grass/Dark</b> — Bug, Fire, Ice, Poison and Flying are all 2× on them on top of the Fighting weakness.",
 "<b>Crawdaunt is 4× weak to Grass and Electric.</b> Thunderbolt off Manectric one-shots it.",
 "<b>Kill Absol before it uses Swords Dance twice.</b> At +4 Attack it will one-shot anything you have. It is fast but frail — 65 HP and 60 Defence.",
 "Torment from Shiftry means you need two attacking moves on your lead, not one. Plan the moveset for it."
], reward:"₽4,900 and the hall opens onto Phoebe."}],
["boss",{name:"Phoebe", role:"Elite Four · Ghost", badge:"Second", team:[
 {m:"Dusclops", l:48, t:["Ghost"], note:"<b>Pressure.</b> 130 Defence and 130 Special Defence. <b>Curse</b> costs it half its HP and then drains you 25% a turn — you cannot switch it away."},
 {m:"Banette", l:49, t:["Ghost"], note:"Insomnia. <b>Will-O-Wisp</b> burns your physical attacker and halves its Attack. Grudge wipes the PP of whatever kills it."},
 {m:"Sableye", l:50, t:["Dark","Ghost"], note:"<b>Dark/Ghost has no weaknesses in Generation III.</b> Nothing you own hits it super-effectively. Double Team plus Night Shade is a grind."},
 {m:"Banette", l:49, t:["Ghost"], note:"This one runs <b>Thunderbolt and Psychic</b> instead — special coverage you will not expect from a 115-Attack body."},
 {m:"Dusclops", l:51, t:["Ghost"], note:"Holds a <b>Sitrus Berry</b> and carries <b>Shadow Ball, Ice Beam, Rock Slide and Earthquake</b>. The most dangerous thing in the room."}
], plan:[
 "<b>Bring a Steel type and this fight ends.</b> In Generation III <b>Steel resists Ghost</b>, so an Aggron, Skarmory or Magneton takes half damage from every Ghost move here and half again from Sableye's Dark. This is the single clearest use of the Gen 3 type chart in the game.",
 "<b>Ghost moves are physical in Generation III.</b> Shadow Ball off Banette's 115 Attack hurts; off Dusclops' 70 Attack it does not. Their scariest-looking member is their least dangerous attacker.",
 "<b>Dark is 2× on Ghost.</b> Crunch off a Sharpedo or Absol is your fastest route through the Dusclops pair.",
 "<b>Watch for Curse.</b> Dusclops halves its own HP to put a 25%-per-turn drain on the Pokémon in front of it. The drain only ticks while that Pokémon is on the field, so the answer is to switch it out and leave it at the back — killing the Dusclops does not lift it.",
 "<b>Will-O-Wisp will burn your physical attacker.</b> Carry a Full Heal for it, or lead with your special attacker and keep the physical one in reserve.",
 "Sableye is unhittable super-effectively and will Double Team. Hit it with your biggest neutral move rather than hunting for an advantage that does not exist."
], reward:"₽5,100 and the hall opens onto Glacia."}],
["boss",{name:"Glacia", role:"Elite Four · Ice", badge:"Third", team:[
 {m:"Sealeo", l:50, t:["Ice","Water"], note:"<b>Thick Fat halves Fire and Ice damage.</b> Encore locks you into your last move; Ice Ball builds power each turn it connects."},
 {m:"Glalie", l:50, t:["Ice"], note:"Inner Focus. Light Screen, Crunch, Icy Wind, Ice Beam. Fast for an Ice type at 80 Speed."},
 {m:"Sealeo", l:52, t:["Ice","Water"], note:"Thick Fat again. <b>Hail</b> chips everything you own for 1/16 a turn, and Blizzard."},
 {m:"Glalie", l:52, t:["Ice"], note:"<b>Explosion.</b> It will use it, and it will take a healthy Pokémon with it. Shadow Ball and Hail besides."},
 {m:"Walrein", l:53, t:["Ice","Water"], note:"Holds a <b>Sitrus Berry</b>. 110 HP and Thick Fat. <b>Sheer Cold is a one-hit KO move</b> — 30% accurate, and it only misses four times out of five."}
], plan:[
 "<b>Do not bring Fire.</b> Thick Fat on three of her five halves it. This is the trap in this fight and it costs people the run.",
 "<b>Fighting, Rock and Electric are your answers.</b> Fighting is 2× on all five; Rock is 2× on the pure Ice pair; Electric is 2× on the three Ice/Water bodies.",
 "<b>Sheer Cold is 30% accurate and instantly kills.</b> There is no counterplay beyond killing Walrein quickly — it has 110 HP, so bring real damage rather than chip.",
 "<b>The Lv 52 Glalie will Explode.</b> Expect to lose whatever is in front of it. Put something you can afford to lose there, or a Steel type — Steel resists Normal, so Explosion does half.",
 "<b>Hail chips you 1/16 a turn</b> unless your Pokémon is Ice. Over a five-fight gauntlet that adds up — heal earlier than feels necessary.",
 "Encore from Sealeo will lock you into a stat move if you use one. Attack every turn in this room."
], reward:"₽5,300 and the hall opens onto Drake."}],
["boss",{name:"Drake", role:"Elite Four · Dragon", badge:"Fourth", team:[
 {m:"Shelgon", l:52, t:["Dragon"], note:"Rock Head, so <b>Double-Edge costs it no recoil</b>. Protect wastes your turns. 100 Defence."},
 {m:"Altaria", l:54, t:["Dragon","Flying"], note:"Natural Cure. <b>Dragon Dance</b> stacks Attack and Speed. <b>Ice is 4× on it.</b>"},
 {m:"Kingdra", l:53, t:["Water","Dragon"], note:"Swift Swim. <b>Water/Dragon resists Water, Fire, Grass and Electric</b> — only Dragon and Ice hurt it. SmokeScreen drops your accuracy."},
 {m:"Flygon", l:53, t:["Ground","Dragon"], note:"<b>Levitate — Ground moves do nothing.</b> Flamethrower, Crunch, DragonBreath, Earthquake."},
 {m:"Salamence", l:55, t:["Dragon","Flying"], note:"Holds a <b>Sitrus Berry</b>. <b>Intimidate</b> on entry, 135 Attack, and Flamethrower for your Steel. <b>Ice is 4× on it.</b>"}
], plan:[
 "<b>Ice Beam wins this room.</b> Ice is 2× on every Dragon and <b>4× on Altaria and Salamence</b>, which are the two that can actually sweep you. If you took Mudkip, Swampert with TM13 is the whole plan.",
 "<b>Steel resists Dragon.</b> An Aggron or Skarmory takes half from every Dragon move here — but watch Salamence's Flamethrower and Flygon's, which are 2× back.",
 "<b>Kingdra is the wall.</b> It resists Water, Fire, Grass and Electric. Ice Beam or a Dragon move, and nothing else.",
 "<b>Do not use Earthquake on Flygon.</b> Levitate. Ice Beam is 2× on it instead — Ground/Dragon.",
 "<b>Kill Altaria before it Dragon Dances twice.</b> At +2 it outspeeds and one-shots. Ice Beam does it in one from full.",
 "Salamence's Intimidate means your physical attacker comes in weakened. Lead special into it."
], reward:"₽5,500 and the doors open onto the Champion's room."}],
["boss",{name:"Wallace", role:"Champion · Water", badge:"Champion", team:[
 {m:"Wailord", l:57, t:["Water"], note:"170 HP — the highest in Generation III. <b>Water Spout does 150 power at full HP</b> and scales down as it takes damage. Rain Dance boosts it further. Blizzard for your Grass answers."},
 {m:"Tentacruel", l:55, t:["Water","Poison"], note:"Clear Body. 120 Special Defence. <b>Toxic</b> puts you on a clock; Hydro Pump, Sludge Bomb and Ice Beam cover everything."},
 {m:"Ludicolo", l:56, t:["Water","Grass"], note:"<b>Swift Swim</b>, and it resists Electric <i>and</i> Water. Giga Drain heals it. This is the one that beats an Electric-only plan."},
 {m:"Whiscash", l:56, t:["Water","Ground"], note:"Oblivious. <b>Immune to Electric.</b> Earthquake, Surf, Amnesia, Hyper Beam. Grass is 4× on it."},
 {m:"Gyarados", l:56, t:["Water","Flying"], note:"<b>Intimidate.</b> Dragon Dance plus Earthquake. <b>Electric is 4× on it.</b>"},
 {m:"Milotic", l:58, t:["Water"], note:"Holds a <b>Sitrus Berry</b>. <b>Marvel Scale raises its Defence 50% while statused — never poison or burn it.</b> Recover undoes chip damage; Surf, Ice Beam and Toxic. 125 Special Defence."}
], plan:[
 "<b>Bring both Electric and Grass.</b> Electric handles Wailord, Tentacruel, Gyarados (4×) and Milotic; Grass handles Whiscash (4×), Wailord and Milotic. Neither alone is enough — Ludicolo resists Electric and Whiscash is immune to it, while Ludicolo and Tentacruel both resist Grass.",
 "<b>Kill Wailord first.</b> Water Spout at full HP is 150 base power with STAB — that is the single biggest hit in the game aimed at you. Its power drops as its HP drops, so any damage you land makes the fight easier.",
 "<b>Never poison or burn Milotic.</b> Marvel Scale turns a status into a 50% Defence boost. Paralysis is the exception worth taking: halving its Speed is worth more than the Defence it gains.",
 "<b>Milotic will Recover.</b> You need burst damage, not chip. A Calm Mind Gardevoir at +2 or a Thunderbolt off a boosted Manectric gets through; a slow grind does not.",
 "<b>Whiscash is immune to Electric and 4× weak to Grass.</b> If you have no Grass move, Ice Beam is 2× on it — Water/Ground.",
 "<b>Gyarados' Intimidate plus Dragon Dance</b> is the sweep condition. Thunderbolt is 4× on it and ends it before it sets up.",
 "Toxic from Tentacruel and Milotic puts a timer on your whole run. Carry Full Heals and use them the turn it lands, not three turns later."
], reward:"The Hall of Fame, the National Pokédex on your next visit home, the Battle Frontier, and every legendary in the game."}],
["warn","<b>Right after the credits, the television asks you the colour of the Pokémon in the report. Answer deliberately.</b> Say <b>red</b> and <b>Latias</b> roams Hoenn while Latios waits on Southern Island. Say <b>blue</b> and it is the other way round. Southern Island needs the <b>Eon Ticket</b>, which was a promotional item — so in practice you are choosing which of the two you can actually catch. See the post-game chapter before you answer."],
["zones","e4"]
]});
