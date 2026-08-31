/* ===================== THE BATTLE FRONTIER ===================== */

STAGES.push({
id:"bf01", ch:"frontier", tag:"Battle Frontier", place:"South of Route 130", wide:true,
title:"The Battle Frontier — seven facilities, fourteen Symbols",
lede:"Emerald's headline feature and the biggest thing in the game that has no equivalent in any other Generation III cartridge. Ruby and Sapphire had a single Battle Tower. Emerald replaced it with an island.",
band:[{k:"Facilities",v:"7"},{k:"Symbols",v:"14"},{k:"Needs",v:"Hall of Fame"}],
body:[
["map","bf01"],
["ver","<b>The Battle Frontier replaces Ruby and Sapphire's Battle Tower entirely.</b> The Tower is still here, but it is one of seven facilities, and the other six are new. Scott — a character who does not exist in Ruby or Sapphire — has been following you since Slateport, and he is the one who invites you."],
["h","Getting there and getting started"],
["do",[
 {at:"Lilycove Harbor", t:"Board the <b>S.S. Tidal</b> after entering the Hall of Fame", sub:"It also sails from Slateport. The Frontier is south of Route 130."},
 {t:"Take <b>TM49 Snatch</b> from the man in the north-easternmost cabin", sub:"And the hidden <b>Leftovers</b> in the storage-room trash can."},
 {at:"Battle Frontier", t:"Let the woman at the gate upgrade your Trainer Card to a <b>Frontier Pass</b>", sub:"It holds your Battle Points, your Symbols and a map of the island."},
 {t:"Visit <b>Scott's house</b> and talk to him for <b>1–4 BP</b>", sub:"How many depends on how often you met him during the story."},
 {t:"Walk the <b>Artisan Cave</b> from the Battle Palace end to the Battle Tower end", sub:"<b>Smeargle is the only wild Pokémon in it, and this is the only place in Generation III's handheld games it exists.</b> Catch one — Sketch copies any move permanently."},
 {t:"Find the <b>Sudowoodo</b> on the island", sub:"There is exactly one, and it is the only Sudowoodo in the Generation III handhelds. Do not knock it out without a ball ready."},
 {t:"Visit the <b>Stats Judge</b> in the Battle Tower lobby", sub:"He rates a Pokémon's individual values in words. It is the only IV reader in Generation III and it is how you decide which of your six to invest in."},
 {t:"Visit the <b>Move Tutors</b> spread across the island", sub:"Several of them teach moves with no TM. They cost BP."},
 {t:"Start with the <b>Battle Factory</b> or the <b>Battle Tower</b>", sub:"The Factory rents you Pokémon so your own team does not matter — it is the fastest first Symbol. The Tower is the most conventional."}
]],
["h","The seven facilities"],
["table",{cols:["Facility","Brain","The rule that makes it different","Silver / Gold at"],rows:[
 ["<b>Battle Tower</b>","Salon Maiden <b>Anabel</b>","Straight 3-on-3 singles up seven floors at a time. The baseline — no gimmick.","21st / 42nd battle"],
 ["<b>Battle Factory</b>","Factory Head <b>Noland</b>","<b>You use rented Pokémon, not your own.</b> After each win you may swap one of yours for one of the defeated opponent's. Noland's own team is randomly generated too — you cannot scout him.","21st / 42nd battle"],
 ["<b>Battle Arena</b>","Arena Tycoon <b>Greta</b>","<b>Three turns, then a judge scores mind, skill and body.</b> No switching, and Pokémon are sent out in registration order. A knockout still wins outright.","28 / 56 wins"],
 ["<b>Battle Dome</b>","Dome Ace <b>Tucker</b>","<b>A sixteen-trainer knockout tournament.</b> You bring three and pick two per match. Seeding runs off combined base stat totals, and you get a scouting card on each opponent.","5 / 10 championships"],
 ["<b>Battle Palace</b>","Palace Maven <b>Spenser</b>","<b>Your Pokémon choose their own moves.</b> You give no commands at all — Nature decides whether each turn is an attack, a defensive move or support, and the ratios shift when HP drops below half.","21st / 42nd battle"],
 ["<b>Battle Pike</b>","Pike Queen <b>Lucy</b>","<b>Fourteen rooms and a choice of three doors before each.</b> Rooms may hold a battle, a full heal, a status trap, a wild Pokémon or nothing. The receptionist hints at one door's contents.","2 / 10 rounds"],
 ["<b>Battle Pyramid</b>","Pyramid King <b>Brandon</b>","<b>Seven dark floors you have to navigate</b>, lighting them by beating trainers. You take <i>no items in</i> — you start with one Hyper Potion and one Ether in a Battle Bag and scavenge the rest. Wild Pokémon roam the floors.","21 / 70 floors"]
]}],
["h","The rules that apply everywhere"],
["ul",[
 "<b>No two Pokémon may be the same species, and no two may hold the same item.</b> This is checked at registration.",
 "<b>You cannot use items from your Bag during a battle.</b> The Battle Pyramid is the sole exception, and only from its own Battle Bag.",
 "<b>No experience and no money.</b> You are paid in Battle Points.",
 "<b>Two level modes:</b> Level 50 caps everything at 50, and Open Level lets you bring Lv 100s. Open Level opponents scale accordingly — it is not easier.",
 "<b>Ten Pokémon are banned outright:</b> Mewtwo, Mew, Lugia, Ho-Oh, Celebi, Kyogre, Groudon, Rayquaza, Jirachi and Deoxys. Everything else is legal, including the Regis, Latias and Latios.",
 "<b>Beating a Frontier Brain twice in the same streak</b> gives you the silver Symbol at the first meeting and the gold at the second, plus 10 BP each time."
]],
["warn","<b>The Frontier is where Generation III's hidden stats finally matter.</b> Natures, individual values and effort values have been running the whole game and you could ignore them. Here you cannot — the opposing teams are competitively built with fixed EV spreads and, from the Brains upward, 20 or 31 IVs in every stat. A Pokémon you levelled casually through the story will lose to one that was bred for it."],
["h","What Battle Points buy"],
["table",{cols:["Cost","Item","Why it is worth the grind"],rows:[
 ["<b>1 BP</b>","Protein, Calcium, Iron, Zinc, Carbos, HP Up","<b>One BP each.</b> The Poké Mart charges ₽9,800 for the same vitamin. This is the cheapest EV training in the game by a factor of thousands."],
 ["<b>48 BP</b>","<b>Leftovers</b>","Restores 1/16 of max HP every turn. The best held item in Generation III and the reason stall teams work."],
 ["<b>48 BP</b>","White Herb, Quick Claw, Mental Herb","White Herb undoes the Special Attack drop from Overheat and Draco Meteor-style moves."],
 ["<b>64 BP</b>","<b>Choice Band</b>","+50% Attack at the cost of being locked into one move. On a Salamence or Slaking, that is the biggest damage number in the game."],
 ["<b>64 BP</b>","BrightPowder, King's Rock, Focus Band, Scope Lens","Scope Lens raises the critical hit rate; in Generation III a critical is a flat 2× and ignores stat drops."],
 ["<b>16–256 BP</b>","Secret Base decorations","Cosmetic. Ignore until you have everything else."]
]}],
["h","Where to start, in order"],
["ul",[
 "<b>1 · Battle Factory.</b> Rented Pokémon mean your own team's quality does not matter yet, so this is the fastest first Symbol and it teaches you the opposing Pokémon pool.",
 "<b>2 · Battle Tower.</b> Straight singles with no gimmick — the honest measure of whether your team is ready.",
 "<b>3 · Battle Dome.</b> You get a scouting card on every opponent, which makes it the most controllable of the rest. Only five championships for silver.",
 "<b>4 · Battle Pike.</b> Silver is only two rounds. Genuinely the easiest silver Symbol on the island, and Lucy's team is the least threatening.",
 "<b>5 · Battle Arena.</b> No switching and a judge — bring three Pokémon that can each win a fight alone.",
 "<b>6 · Battle Palace.</b> You give no orders, so your Natures do the playing. Pick three with aggressive Natures and attacking movesets only.",
 "<b>7 · Battle Pyramid.</b> Leave it last. No items, seven dark floors, and Brandon's gold team is <b>Articuno, Zapdos and Moltres</b>."
]],
["tip","<b>Do the vitamin run before anything else.</b> Six vitamins at 1 BP each, up to 100 EVs per stat, is the single highest-value thing on the island. Twenty or thirty BP from a couple of Factory runs buys you a fully EV-trained Pokémon, and that is what makes the rest of the Symbols achievable."]
]});

STAGES.push({
id:"bf02", ch:"frontier", tag:"Battle Frontier", place:"The Frontier Brains", wide:true,
title:"The seven Frontier Brains and what they bring",
lede:"Each Brain has a silver team and a harder gold team. Their Pokémon have 20 IVs across the board for silver and a perfect 31 for gold, which is why they feel like a different game from the trainers below them.",
body:[
["p","Every team below is the Emerald roster. All are three Pokémon in a 3-vs-3 single battle — the Brains only appear in that mode, so a Doubles streak will never produce one."],
["boss",{name:"Noland", role:"Factory Head · Knowledge", badge:"Battle Factory", team:[
 {m:"Ditto", l:"—", t:["Normal"], note:"<b>Noland's team is randomly generated, exactly like yours.</b> He draws from the same rental pool you do, so there is no fixed roster to prepare for."},
 {m:"Ditto", l:"—", t:["Normal"], note:"For silver he draws from the mid-tier pool; for gold he draws from the top pool, but never Dragonite, Tyranitar or a legendary."},
 {m:"Ditto", l:"—", t:["Normal"], note:"You are told nothing about his team before the battle — unlike every other Factory opponent."}
], plan:[
 "<b>There is nothing to scout.</b> Play the rentals you have and take the best swap offered after each win.",
 "<b>Swap for coverage, not for stats.</b> The Factory's difficulty is that your three rarely cover each other; take the Pokémon that fills your hole even if it looks weaker.",
 "<b>Read the pre-battle briefing.</b> You are told the opponent's battle style — whether they lean on attacks, status or defence — which tells you what to swap for.",
 "Noland appears as the 21st battle for silver and the 42nd for gold."
], reward:"Silver and Gold <b>Knowledge Symbol</b>, 10 BP each."}],
["boss",{name:"Greta", role:"Arena Tycoon · Guts", badge:"Battle Arena", team:[
 {m:"Heracross", l:"50 / Open", t:["Bug","Fighting"], note:"<b>Salac Berry</b> — Endure into Reversal at 1 HP is 200 power. Megahorn and Rock Tomb besides."},
 {m:"Umbreon", l:"50 / Open", t:["Dark"], note:"<b>Leftovers</b>. 130 Special Defence. Confuse Ray and Faint Attack — it is here to survive three turns and win on the judge's score."},
 {m:"Shedinja", l:"50 / Open", t:["Bug","Ghost"], note:"<b>BrightPowder</b>. <b>Wonder Guard means only Fire, Flying, Rock, Ghost and Dark touch it at all</b> — and it has 1 HP, so any of those ends it."}
], plan:[
 "<b>Bring one Fire, Flying, Rock, Ghost or Dark move or you cannot beat Shedinja at all.</b> Everything else does literally zero. Note that in Generation III it also takes no damage from sandstorm or hail if it is Bug/Ghost — but Wonder Guard does not stop poison or burn.",
 "<b>Heracross' Endure–Reversal combination</b> is the sweep threat. Kill it from full or use a multi-hit move to break Endure.",
 "<b>No switching, and three turns then a judge.</b> If you cannot knock something out, you need to have dealt more damage and taken less — passive play loses on score.",
 "Greta appears after 28 wins for silver and 56 for gold."
], reward:"Silver and Gold <b>Guts Symbol</b>, 12–13 BP."}],
["boss",{name:"Tucker", role:"Dome Ace · Tactics", badge:"Battle Dome", team:[
 {m:"Swampert", l:"50 / Open", t:["Water","Ground"], note:"<b>Focus Band</b> for silver, <b>Leftovers</b> for gold. The same shell that carried you through the story, now aimed at you."},
 {m:"Salamence", l:"50 / Open", t:["Dragon","Flying"], note:"<b>Lum Berry.</b> Intimidate and 135 Attack. Silver team only."},
 {m:"Charizard", l:"50 / Open", t:["Fire","Flying"], note:"<b>White Herb</b> — it undoes the Special Attack drop from Overheat. Silver team only."},
 {m:"Metagross", l:"50 / Open", t:["Steel","Psychic"], note:"<b>Quick Claw</b>, gold team. 135 Attack and Meteor Mash."},
 {m:"Latias", l:"50 / Open", t:["Dragon","Psychic"], note:"<b>Chesto Berry</b>, gold team. Levitate, 130 Special Defence, and Recover."}
], plan:[
 "<b>Tucker is always the number 2 seed</b>, so you meet him in the final. Build your three to beat him and let seeding handle the rest.",
 "<b>Ice Beam answers Salamence (4×) and Latias (2×).</b> It is the most efficient single move against both his teams.",
 "<b>You pick two of your three each match, after seeing his card.</b> Bring a third that specifically covers what your main pair cannot.",
 "Tucker appears after 5 championships for silver and 10 for gold."
], reward:"Silver and Gold <b>Tactics Symbol</b>."}],
["boss",{name:"Lucy", role:"Pike Queen · Luck", badge:"Battle Pike", team:[
 {m:"Seviper", l:"50 / Open", t:["Poison"], note:"<b>Quick Claw</b> silver, <b>Focus Band</b> gold. Shed Skin. It is the weakest of her three."},
 {m:"Shuckle", l:"50 / Open", t:["Bug","Rock"], note:"<b>Chesto Berry</b>, silver team. <b>230 Defence and 230 Special Defence</b> — the highest in the game. Toxic plus stall. You have to out-damage a wall that will not die."},
 {m:"Milotic", l:"50 / Open", t:["Water"], note:"<b>Leftovers</b>, silver team. Marvel Scale and Recover — do not status it."},
 {m:"Steelix", l:"50 / Open", t:["Steel","Ground"], note:"<b>BrightPowder</b>, gold team. 200 Defence."},
 {m:"Gyarados", l:"50 / Open", t:["Water","Flying"], note:"<b>Chesto Berry</b>, gold team. Intimidate and Dragon Dance."}
], plan:[
 "<b>Silver is only two rounds — this is the easiest Symbol on the island.</b> Take it early.",
 "<b>Shuckle cannot be worn down.</b> Bring a Fighting, Steel, Water or Rock move — Bug/Rock is 4× weak to Rock and 2× to Water, Steel and Fighting — and hit it hard rather than trying to stall it out.",
 "<b>Do not poison or burn Milotic.</b> Marvel Scale again.",
 "<b>The Pike's rooms are random.</b> Take the door the receptionist hints at when the hint is good, and accept that some runs simply end in a status trap.",
 "Lucy appears at 2 rounds for silver and 10 for gold."
], reward:"Silver and Gold <b>Luck Symbol</b>."}],
["boss",{name:"Spenser", role:"Palace Maven · Spirits", badge:"Battle Palace", team:[
 {m:"Crobat", l:"50 / Open", t:["Poison","Flying"], note:"<b>BrightPowder</b>, silver team. Fast, evasive, and it picks its own moves like everything else here."},
 {m:"Slaking", l:"50 / Open", t:["Normal"], note:"<b>Scope Lens</b>, on both teams. <b>Truant still applies</b> — it loafs every other turn, which is your window."},
 {m:"Lapras", l:"50 / Open", t:["Water","Ice"], note:"<b>Quick Claw</b>, silver team. Water Absorb or Shell Armor."},
 {m:"Arcanine", l:"50 / Open", t:["Fire"], note:"<b>White Herb</b>, gold team. Intimidate and 110 Attack."},
 {m:"Suicune", l:"50 / Open", t:["Water"], note:"<b>King's Rock</b>, gold team. 115 Defence and 115 Special Defence with Pressure."}
], plan:[
 "<b>You give no commands.</b> Your Pokémon pick moves by Nature, so bring three with attacking Natures and movesets that are all attacks — a Pokémon with a status move may waste its turn on it.",
 "<b>A Pokémon with no move in the chosen category has a 50% chance to do nothing at all.</b> Four attacking moves eliminates that risk entirely.",
 "<b>Slaking's Truant is still your best window</b>, even here — but you cannot exploit it deliberately, so just bring enough damage.",
 "Spenser appears at 21 battles for silver and 42 for gold."
], reward:"Silver and Gold <b>Spirits Symbol</b>."}],
["boss",{name:"Brandon", role:"Pyramid King · Brave", badge:"Battle Pyramid", team:[
 {m:"Regirock", l:"50 / Open", t:["Rock"], note:"<b>Quick Claw</b>, silver team. Clear Body — your stat drops do nothing."},
 {m:"Registeel", l:"50 / Open", t:["Steel"], note:"<b>Leftovers</b>, silver team. Steel still resists twelve types in Generation III."},
 {m:"Regice", l:"50 / Open", t:["Ice"], note:"<b>Chesto Berry</b>, silver team. 200 Special Defence."},
 {m:"Articuno", l:"50 / Open", t:["Ice","Flying"], note:"<b>Scope Lens</b>, gold team. <b>Rock is 4× on it.</b>"},
 {m:"Zapdos", l:"50 / Open", t:["Electric","Flying"], note:"<b>Lum Berry</b>, gold team. Rock and Ice are both 2×."},
 {m:"Moltres", l:"50 / Open", t:["Fire","Flying"], note:"<b>BrightPowder</b>, gold team. <b>Rock is 4× on it.</b>"}
], plan:[
 "<b>Gold is the three legendary birds and Rock hits all of them for 2× or 4×.</b> One Rock Slide user handles the entire gold team.",
 "<b>Silver is the three Regis, all with Clear Body.</b> Fighting is 2× on Regirock and Registeel; Fire, Fighting and Ground are 2× on Registeel; Regice needs physical damage through its 200 Special Defence.",
 "<b>You take no items into the Pyramid.</b> You start with one Hyper Potion and one Ether and scavenge the floors — so this is the one facility where your Pokémon's own recovery moves matter.",
 "<b>Seven dark floors per round, and wild Pokémon roam them.</b> Beat trainers to light the floor. Twenty-one floors for silver, seventy for gold.",
 "Leave this facility until last. It is comfortably the hardest."
], reward:"Silver and Gold <b>Brave Symbol</b>."}],
["boss",{name:"Anabel", role:"Salon Maiden · Ability", badge:"Battle Tower", team:[
 {m:"Alakazam", l:"50 / Open", t:["Psychic"], note:"<b>BrightPowder</b>, silver team. 135 Special Attack and 120 Speed. Frail — anything that outspeeds it wins."},
 {m:"Entei", l:"50 / Open", t:["Fire"], note:"<b>Lum Berry</b>, silver team. 115 Attack and 100 Speed."},
 {m:"Snorlax", l:"50 / Open", t:["Normal"], note:"<b>Quick Claw</b> silver, <b>Chesto Berry</b> gold. 160 HP. On both teams."},
 {m:"Raikou", l:"50 / Open", t:["Electric"], note:"<b>Lum Berry</b>, gold team. 115 Speed and 115 Special Attack."},
 {m:"Latios", l:"50 / Open", t:["Dragon","Psychic"], note:"<b>BrightPowder</b>, gold team. <b>130 Special Attack</b> with Levitate. Ice and Dark are your outs."}
], plan:[
 "<b>Dark beats half of both teams.</b> Crunch is 2× on Alakazam and 2× on Latios, and Dark is special in Generation III so it runs off Special Attack.",
 "<b>Snorlax appears on both her teams.</b> 160 HP and Chesto Berry Rest on gold — bring Fighting, which is its only weakness.",
 "<b>Kill Alakazam before it moves.</b> 120 Speed but 45 Defence — a single physical hit ends it.",
 "<b>Ice Beam is 2× on Latios</b> and Raikou has no immunities worth planning around.",
 "Anabel appears at 21 battles for silver and 42 for gold — the standard Tower schedule."
], reward:"Silver and Gold <b>Ability Symbol</b>."}],
["h","What finishing it gets you"],
["ul",[
 "<b>All seven silver Symbols</b> — Scott gives you a <b>Lansat Berry</b>.",
 "<b>All seven gold Symbols</b> — Scott gives you a <b>Starf Berry</b>. These two are the rarest berries in Generation III and cannot be obtained any other way in Emerald.",
 "<b>50 straight wins in the Battle Tower</b> — a <b>Silver Shield</b> trophy for your Secret Base.",
 "<b>100 straight wins in the Battle Tower</b> — a <b>Gold Shield</b>.",
 "There is no Pokédex reward and no story continuation. The Frontier is the endgame — the Symbols are the point."
]]
]});
