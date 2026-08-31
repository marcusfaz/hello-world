/* ===================== HOW EMERALD ACTUALLY WORKS ===================== */

STAGES.push({
id:"core-rules", ch:"core", tag:"Fundamentals", place:"Generation III",
title:"The Gen 3 rules that decide every call in this guide",
lede:"Emerald runs on Generation III's battle engine. Three of its rules are unlike anything a modern player expects, and every recommendation in this guide falls out of them.",
body:[
["h","1 · The move's TYPE decides which attack stat it uses"],
["p","There is <b>no physical/special split</b> in Generation III. A move is physical or special because of its <i>type</i>, and nothing else. Nine types are always physical; eight are always special. This is not a tendency — it is a hard rule with no exceptions, so a move's damage class is fixed before you ever look at the move."],
["mount","dctable"],
["warn","This is the single most expensive thing to get wrong. <b>Crunch runs off Special Attack in Emerald</b>, so it belongs on Kingdra and not on Sharpedo. <b>Shadow Ball is physical</b>, which is why Phoebe's Ghosts hit softer than their Special Attack suggests. <b>Iron Tail and Rock Slide are physical</b>; <b>Flamethrower, Surf, Thunderbolt, Ice Beam and Psychic are special</b>. Put a special move on a physical body and you have wasted the slot."],
["h","2 · There is no Fairy type"],
["p","Fairy did not exist until Generation VI, and Emerald has no idea it is coming. Every Pokémon it later applied to is still its Generation III typing here:"],
["table",{cols:["Pokémon","Type in Emerald","What it later became","Why it matters now"],rows:[
 ["<b>Marill</b> / <b>Azumarill</b>","Water","Water/Fairy","Marill is <i>pure Water</i> on Route 102 and 104. It takes normal damage from Poison and Dragon, and Azumarill has no Fairy STAB to lean on."],
 ["<b>Azurill</b>","Normal","Normal/Fairy","Pure Normal here. A Safari Zone and breeding dex entry, nothing more."],
 ["<b>Ralts</b> / <b>Kirlia</b> / <b>Gardevoir</b>","Psychic","Psychic/Fairy","<b>Gardevoir is mono-Psychic in Emerald.</b> That means Sidney's Dark types beat it outright and it has no answer to Drake's Dragons. Plan around that."],
 ["<b>Mawile</b>","Steel","Steel/Fairy","Pure Steel — Granite Cave's rare catch, and it resists Dragon rather than being immune to it."],
 ["<b>Skitty</b> / <b>Delcatty</b>","Normal","Normal/Fairy","Pure Normal. Wally's Delcatty is a Normal type and nothing more."],
 ["<b>Clefairy</b>, <b>Jigglypuff</b>, <b>Mr. Mime</b>","Normal (Mr. Mime: Psychic)","Fairy variants","Not in the wild in Hoenn, but they turn up in the Battle Frontier's rental pools."]
]}],
["h","3 · Steel resists Ghost and Dark"],
["p","In Generation III, Steel resists <b>Ghost</b> and <b>Dark</b> on top of everything it still resists today. Steel takes half damage from twelve of the seventeen types, and Emerald is full of Steel: Steven runs four of them, Winona's Skarmory closes her gym, and Wattson's Magneton is Electric/Steel."],
["tip","Read the practical consequence rather than the table. <b>A Steel body walls Phoebe's entire Ghost gauntlet and most of Sidney's Dark one.</b> If you take a Skarmory or an Aggron through the game, two Elite Four members become formalities. Fighting, Fire and Ground are the only things that break Steel open."],
["h","The full Generation III chart"],
["p","Use this rather than any chart you remember from a modern game — the differences above are all baked in."],
["mount","types"],
["h","Everything else that is different"],
["ul",[
 "<b>Special Attack and Special Defence are separate stats</b>, and have been since Gen 2 — but with no split, a Pokémon's <i>own</i> types tell you which stat its STAB uses.",
 "<b>Abilities matter, and they matter from the first battle.</b> They have their own chapter — see <a href=\"#core-abilities\">Abilities decide more fights than levels do</a>.",
 "<b>Natures</b> exist and shift two stats by ±10%. You cannot see a nature's effect in-game without checking the stat colours, and you cannot change it.",
 "<b>EVs are uncapped per stat at 255</b> with a 510 total, and vitamins add 10 each up to 100 in one stat. Nothing in a normal playthrough needs EV management — the Battle Frontier does.",
 "<b>TMs are single-use.</b> One TM, one Pokémon, forever. There is no second Earthquake in a save file, so decide the recipient <i>before</i> you use it.",
 "<b>HMs are not consumed</b> and cannot be forgotten without the Move Deleter in Lilycove.",
 "<b>Critical hits are 2×</b> and ignore stat drops, and the crit stage is decided by the move, not by a separate item stack."
]],
["p","Everything below in this guide — which starter, which six, which TM goes where — is decided by these rules. Where a recommendation looks strange next to a modern game, this chapter is why."]
]});

STAGES.push({
id:"core-abilities", ch:"core", tag:"Fundamentals", place:"Generation III", wide:true,
title:"Abilities decide more fights than levels do",
lede:"Abilities arrived with Generation III, and Emerald leans on them harder than Ruby and Sapphire did. Several have effects outside battle that only exist in this game. Treat the ability line on a boss dossier as the most important line on it.",
body:[
["team","<b>Read the ability before you pick a move.</b> Four of the eight Gym Leaders have a Pokémon whose ability inverts the obvious play — Wattson's Magneton traps your Steel, Norman's Slaking hands you a free turn, Flannery's Torkoal ignores its own Overheat drop, and Tate &amp; Liza's Levitate makes your Earthquake do nothing at all."],
["h","The abilities that change how you fight a specific boss"],
["table",{cols:["Ability","Who has it","What actually happens","What you do about it"],rows:[
 ["<b>Truant</b>","Norman's <b>Slaking</b> (Lv 31)","It attacks, then <i>loafs around</i> and does nothing every second turn.","This is the whole fight. Set up, heal or switch on its loafing turn — you get a free action every other turn against the biggest stat line in the gym."],
 ["<b>Levitate</b>","Tate &amp; Liza's <b>Claydol</b> and both <b>Lunatone</b>/<b>Solrock</b>","Ground moves miss entirely. Every one of their four is immune or resistant to Earthquake.","Do not bring Earthquake to Mossdeep. Bring Dark, Ghost or Bug — Crunch, Shadow Ball, Bite."],
 ["<b>Magnet Pull</b>","Wattson's <b>Magneton</b>","Your <b>Steel</b> types cannot switch out. At all.","Do not lead a Steel type into Wattson. Lead a Ground type instead — it is immune to his whole gym."],
 ["<b>White Smoke</b>","Flannery's <b>Torkoal</b> (Lv 29)","Its stats cannot be lowered — but this does <i>not</i> stop Overheat's self-inflicted Special Attack drop, which is a self-effect, not a stat reduction by the foe.","Torkoal still weakens itself with every Overheat. Stall the first one, then hit back."],
 ["<b>Thick Fat</b>","Brawly's <b>Makuhita</b>; Glacia's <b>Sealeo</b> and <b>Walrein</b>","Halves incoming <b>Fire</b> and <b>Ice</b> damage.","Fire will not break Glacia's wall. Use Fighting, Rock, Electric or Grass on the Ice types instead."],
 ["<b>Marvel Scale</b>","Wallace's <b>Milotic</b> (Lv 58)","Defence goes up 50% while it is statused.","<b>Never poison or burn Milotic.</b> Paralysis is the exception worth taking — the speed loss is worth more than the Defence it gains."],
 ["<b>Intimidate</b>","Sidney's <b>Mightyena</b>; Drake's <b>Salamence</b>; Wallace's <b>Gyarados</b>; Archie's <b>Mightyena</b>","Drops your active Pokémon's Attack one stage on entry.","Lead a special attacker into these. Intimidate does nothing to Ice Beam or Thunderbolt."],
 ["<b>Sturdy</b>","Roxanne's <b>Nosepass</b>; Steven's <b>Aggron</b> and <b>Skarmory</b>","In Generation III, Sturdy only blocks OHKO moves — Fissure, Horn Drill, Sheer Cold. It does <i>not</i> survive a hit at 1 HP.","Ignore it. It is a dead ability in Emerald and does not protect against normal damage."],
 ["<b>Rough Skin</b>","Archie's <b>Sharpedo</b> (Lv 43)","Chips you for 1/16 every time you hit it with a contact move.","Hit it with Thunderbolt or Surf rather than a physical move. It is frail and dies to either."],
 ["<b>Pressure</b>","Phoebe's <b>Dusclops</b>; Sidney's <b>Absol</b>","Doubles the PP your moves cost.","On the Elite Four run this is a resource attack, not a damage one. Bring the PP, or two attacking moves per member."],
 ["<b>Soundproof</b>","Wattson's <b>Voltorb</b>","Blocks sound moves. In Gen 3 that includes <b>Roar</b>, Supersonic and Sing.","Irrelevant to a normal run, but it stops a Roar-based strategy dead."],
 ["<b>Swift Swim</b>","Juan's <b>Kingdra</b> and <b>Luvdisc</b>","Doubles Speed <i>in rain</i> — and Juan's Whiscash opens with Rain Dance.","Kill the Whiscash first, or Kingdra outspeeds your whole team for five turns."]
]}],
["h","Abilities with field effects — an Emerald speciality"],
["p","Ruby and Sapphire gave abilities almost nothing to do outside battle. Emerald changed that, and two of these are genuinely worth building around."],
["table",{cols:["Ability","Carrier you can actually get","What it does outside battle"],rows:[
 ["<b>Flame Body</b> / <b>Magma Armor</b>","<b>Slugma</b> (Route 112, Fiery Path), <b>Camerupt</b>, <b>Magcargo</b>","<b>Halves the steps needed to hatch an Egg</b> while the carrier is anywhere in your party. If you are breeding for the dex — and you need to, for Azurill, Wynaut and the baby forms — catch a Slugma on Route 112 and leave it in slot six for the rest of the game. This is the single highest-value field ability in Emerald."],
 ["<b>Pickup</b>","<b>Zigzagoon</b> / <b>Linoone</b> (Route 101 onwards), <b>Meowth</b> (Battle Frontier trade)","A 10% chance after every won battle of finding a held item — and in Emerald the item table is <b>keyed to the carrier's level</b>, unlike Ruby and Sapphire's flat list. See the table below."],
 ["<b>Illuminate</b> / <b>Arena Trap</b>","<b>Volbeat</b> (Route 117), <b>Trapinch</b> (Route 111)","Raises the wild encounter rate / stops wild Pokémon fleeing. Useful when you are grinding a specific route for a dex entry."],
 ["<b>Suction Cups</b> / <b>Sticky Hold</b>","<b>Lileep</b> (Root Fossil), <b>Gulpin</b> (Route 110)","Stops a fishing bite from getting away. Marginal, but it is free if the Pokémon is in the lead slot."],
 ["<b>Synchronize</b>","<b>Ralts</b> (Route 102, 4%)","Does <i>not</i> affect wild natures in Generation III — that only started in Generation IV. In Emerald it is a battle-only status reflector."]
]}],
["warn","<b>Catch a Zigzagoon on Route 101 and keep it.</b> Pickup is free money and free items for the entire game, and Emerald's level-scaled table means the same Linoone that found you Potions at level 10 is finding Rare Candies at 25, Protein at 35 and <b>Leftovers at 91</b>. No other ability pays you for playing."],
["h","Emerald's level-scaled Pickup table"],
["p","The window slides up as the carrier levels. Read a row as: 30% chance of the first item, 10% each for the next six, 4% each for the next two, 1% each for the last two — on a 10% trigger after each won battle."],
["table",{cols:["Carrier level","30%","The 10% band","The rare end (4% / 1%)"],rows:[
 ["1–10","Potion","Antidote, Super Potion, Great Ball, Repel, Escape Rope, X Attack","Full Heal, Ultra Ball · Hyper Potion, <b>Nugget</b>"],
 ["11–20","Antidote","Super Potion, Great Ball, Repel, Escape Rope, X Attack, Full Heal","Ultra Ball, Hyper Potion · Nugget, <b>King's Rock</b>"],
 ["21–30","Super Potion","Great Ball, Repel, Escape Rope, X Attack, Full Heal, Ultra Ball","Hyper Potion, <b>Rare Candy</b> · King's Rock, Full Restore"],
 ["31–40","Great Ball","Repel, Escape Rope, X Attack, Full Heal, Ultra Ball, Hyper Potion","Rare Candy, <b>Protein</b> · Full Restore, Ether"],
 ["41–50","Repel","Escape Rope, X Attack, Full Heal, Ultra Ball, Hyper Potion, Rare Candy","Protein, Revive · Ether, <b>White Herb</b>"],
 ["51–60","Escape Rope","X Attack, Full Heal, Ultra Ball, Hyper Potion, Rare Candy, Protein","Revive, <b>HP Up</b> · White Herb, <b>TM44 Rest</b>"],
 ["61–70","X Attack","Full Heal, Ultra Ball, Hyper Potion, Rare Candy, Protein, Revive","HP Up, Full Restore · TM44 Rest, Elixir"],
 ["71–80","Full Heal","Ultra Ball, Hyper Potion, Rare Candy, Protein, Revive, HP Up","Full Restore, <b>Max Revive</b> · Elixir, <b>TM01 Focus Punch</b>"],
 ["81–90","Ultra Ball","Hyper Potion, Rare Candy, Protein, Revive, HP Up, Full Restore","Max Revive, <b>PP Up</b> · TM01, <b>Leftovers</b>"],
 ["91–100","Hyper Potion","Rare Candy, Protein, Revive, HP Up, Full Restore, Max Revive","PP Up, Max Elixir · <b>Leftovers</b>, <b>TM26 Earthquake</b>"]
]}],
["tip","A level-91+ Linoone is the only renewable source of <b>Leftovers</b> and a second <b>TM26 Earthquake</b> in the game. If you are building for the Battle Frontier, that is worth the grind on its own."]
]});

STAGES.push({
id:"core-weather", ch:"core", tag:"Fundamentals", place:"Generation III",
title:"Weather is the mechanic Emerald is built around",
lede:"Drought and Drizzle are permanent, they double one type and halve another, and they are the whole plot. Nothing in a Kanto game works like this. Learn it before Mt. Chimney, because it decides fights from there to the Frontier.",
body:[
["h","What the weather actually does"],
["p","In Generation III a weather condition set by an <i>ability</i> lasts until something replaces it. A weather condition set by a <i>move</i> lasts five turns. That difference is why the two ancient Pokémon break the game and Sunny Day does not."],
["table",{cols:["Weather","Fire moves","Water moves","Everything else it does"],rows:[
 ["<b>Harsh sunlight</b>","<b>×1.5 power</b>","<b>×0.5 power</b>","Thunder and Hurricane lose accuracy; SolarBeam charges instantly; Synthesis and Morning Sun heal ⅔; Chlorophyll doubles Speed; Moonlight heals ¼."],
 ["<b>Rain</b>","<b>×0.5 power</b>","<b>×1.5 power</b>","Thunder never misses; SolarBeam is halved; Synthesis heals ¼; Swift Swim doubles Speed; Rain Dish restores HP."],
 ["<b>Sandstorm</b>","—","—","Chips every non Rock/Ground/Steel Pokémon for 1/16 a turn. Tyranitar's Sand Stream is the only permanent source, and Tyranitar is Frontier-only in Emerald."],
 ["<b>Hail</b>","—","—","Chips every non-Ice Pokémon for 1/16. Blizzard still misses in hail in Generation III — that only changed later. Glacia leans on it anyway."]
]}],
["warn","<b>Sun and rain multiply by 1.5 in Generation III, not by 2.</b> A guide written for a later game will tell you Fire doubles under sun. It does not here — but ×1.5 on a 120-power Overheat is still 180, which is enough to end most things you own."],
["h","Drought, Drizzle and Air Lock — the three signature abilities"],
["p","These three are the reason Emerald's story is what it is. In Generation III each belongs to <b>exactly one Pokémon</b>. Nothing else in the game has them — Ninetales, Politoed and Pelipper only picked them up in Generation V and later, so ignore anything you know about rain teams from a modern game."],
["table",{cols:["Ability","Whose it is","On switch-in","What it means for you"],rows:[
 ["<b>Drought</b>","<b>Groudon</b>, and only Groudon","Permanent <b>harsh sunlight</b>","Groudon boosts its own Fire coverage by half and halves every Water move aimed at it — including the Water moves that are supposed to be its 2× weakness. Fighting your Water type into Groudon is throwing the fight away."],
 ["<b>Drizzle</b>","<b>Kyogre</b>, and only Kyogre","Permanent <b>rain</b>","Kyogre's own Water Spout and Surf go to ×1.5, its Thunder never misses, and any Fire move you brought is halved. This is the single most dangerous ability in the game."],
 ["<b>Air Lock</b>","<b>Rayquaza</b>, and only Rayquaza","<b>Cancels weather entirely</b> while it is on the field","This is not flavour. Air Lock is mechanically why Rayquaza is the thing that stops the other two — and it is why the plot sends you to the Sky Pillar rather than to a stronger Pokémon."]
]}],
["team","<b>Bring Rayquaza to the Groudon and Kyogre catches.</b> Air Lock switches their signature ability off, which turns Groudon back into a Ground type that takes full damage from Water and Kyogre back into a Water type whose Thunder can miss. It is the cleanest counter in the game and the game hands it to you before either catch."],
["h","Where weather decides a fight for you"],
["ul",[
 "<b>Flannery (Lavaridge)</b> — every one of her four carries <b>Sunny Day</b>, and all four carry <b>Overheat</b>. Under her own sun that is a 180-power special hit off a Fire type. Overheat drops her Special Attack two stages each time, so the fight is: survive the first one, then win. Bring a Rock or Water body with real HP, not a fast frail one.",
 "<b>Tate &amp; Liza (Mossdeep)</b> — Solrock leads <b>Sunny Day</b> into <b>SolarBeam</b>, which charges instantly under sun. If you have a Water type in a double battle here it is taking an uncharged 120-power Grass hit. Kill Solrock first.",
 "<b>Winona (Fortree)</b> — Tropius runs Sunny Day + SolarBeam + Chlorophyll, so it doubles its own Speed and fires a free SolarBeam. It is still Grass/Flying and dies to Ice or Rock.",
 "<b>Juan (Sootopolis)</b> — Whiscash opens with <b>Rain Dance</b> and both Luvdisc and Kingdra have <b>Swift Swim</b>. Under rain Kingdra outruns almost anything you own and its Water Pulse is at ×1.5. Break the rain by killing Whiscash early, or bring something faster than a doubled Kingdra.",
 "<b>Glacia (Elite Four)</b> — <b>Hail</b> on two of her five, chipping you 1/16 a turn while Thick Fat halves your Fire. Fighting and Rock are your outs, not Flamethrower."
]],
["tip","You get <b>TM11 Sunny Day</b> free at the Scorched Slab and <b>TM18 Rain Dance</b> on the Abandoned Ship. Both are worth carrying for exactly one reason: setting your own weather overwrites the enemy's, and five turns of your weather beats five turns of theirs."]
]});
