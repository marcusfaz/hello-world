/* ===================== PARTY LEDGER =====================
   One board per stage. Only the Pokémon worth discussing are listed;
   the engine carries everything else forward, so the six is always
   accounted for. Departures are declared in OUTS at the bottom.
   ======================================================== */

R("k01",{lv:"5 → 9", badges:"0 badges",
sum:"Fill all six slots before you leave Viridian. Every catch is experience — there is no wild-battle XP in this game — and every <i>new species</i> is a key to a gift or a gym door later. An empty slot is a wasted slot.",
slots:[
 {n:"Pikachu", t:["Electric"], role:"Partner · locked in", st:"add", w:"Given to you in Pallet. It cannot be boxed and it cannot evolve, so it is one of your six for the entire game. 80 Attack, 75 Special Attack and <b>120 Speed</b> — treat it as a real attacker, not a mascot."},
 {n:"Oddish", t:["Grass","Poison"], role:"The Pewter Gym key", st:"add", w:"Route 1 at 30%, Route 2 at 20%, and <b>Let’s Go, Pikachu! exclusive</b>. Brock’s guide will not let you in without a Grass or Water Pokémon, and no Water exists yet."},
 {n:"Pidgey", t:["Normal","Flying"], role:"Filler · species count", st:"add", w:"40% of Route 1. <b>You never need a Fly carrier in this game</b> — Sky Dash belongs to your partner — so Pidgey is here for the count and the catch experience, nothing more."},
 {n:"Rattata", t:["Normal"], role:"Filler · trade stock", st:"add", w:"30% of Route 1. Catch two: one is the Cerulean trade for an <b>Alolan Rattata</b>, which is your only early Dark type."},
 {n:"Nidoran♂", t:["Poison"], role:"Filler · Moon Stone candidate", st:"add", w:"Route 22 at 20%, and the only early grass with either Nidoran. A Moon Stone from Mt. Moon turns it into a Nidoking if you want to keep it."},
 {n:"Spearow", t:["Normal","Flying"], role:"Filler", st:"add", w:"Route 22 at 30%. A warm body for the sixth slot until Route 3 gives you something worth keeping."}
]});

R("k02",{lv:"10 → 14", badges:"Boulder Badge",
sum:"No changes. Brock is a type check and you already carry the answer — Oddish for the door, Oddish and Double Kick for the fight.",
slots:[
 {n:"Pikachu", t:["Electric"], role:"Lead", st:"keep", w:"<b>Double Kick arrives at level 9.</b> Fighting is 2× on Rock and it hits twice, which is how a 55-power move gets through Onix’s 160 Defense. Thunder Shock is a straight zero here — both of Brock’s Pokémon are part Ground."},
 {n:"Oddish", t:["Grass","Poison"], role:"Gym key · Brock counter", st:"keep", w:"Absorb is 2× on both of Brock’s Pokémon and neither of them can hurt a Grass type back. It also gets you through the door."},
 {n:"Pidgey", t:["Normal","Flying"], role:"Filler", st:"keep", w:"Nothing useful against Brock. Keep catching with it."},
 {n:"Rattata", t:["Normal"], role:"Filler", st:"keep", w:"Same."},
 {n:"Nidoran♂", t:["Poison"], role:"Filler", st:"keep", w:"Poison is resisted by Rock. Leave it on the bench for the gym."},
 {n:"Spearow", t:["Normal","Flying"], role:"Filler", st:"keep", w:"Last stage in the party. Route 3 has better."}
]});

R("k03",{lv:"14 → 18", badges:"1 badge",
sum:"Route 3 is where Let’s Go, Pikachu! hands over its two best early exclusives, and both of them earn a permanent slot. Spearow and the Nidoran make way.",
slots:[
 {n:"Sandshrew", t:["Ground"], role:"Ground · the Lt. Surge answer", st:"add", replaces:"Spearow", w:"20% on Routes 3 and 4, <b>Let’s Go, Pikachu! only</b>. Ground is immune to Electric, which makes it a hard counter to the whole third gym. <b>Do not let it evolve</b> — see the move table."},
 {n:"Mankey", t:["Fighting"], role:"Fighting · the only one for five stages", st:"add", replaces:"Nidoran♂", w:"20% on Routes 3 and 4, <b>Let’s Go, Pikachu! only</b>. Karate Chop at 13, Low Kick at 21, and Primeape’s 105 Attack carries the mid-game trainer gauntlets."},
 {n:"Pikachu", t:["Electric"], role:"Lead", st:"keep", w:"Still Thunder Shock and Double Kick. Zippy Zap is one stage away and it changes everything."},
 {n:"Oddish", t:["Grass","Poison"], role:"Grass", st:"keep", w:"Gloom at 21. Hold the Leaf Stone — Bulbasaur takes this slot next stage."},
 {n:"Pidgey", t:["Normal","Flying"], role:"Filler", st:"keep", w:"Two stages left in the party."},
 {n:"Rattata", t:["Normal"], role:"Filler", st:"keep", w:"One stage left. Charmander takes this slot on Route 24."}
],
mv:[
 {p:"Sandshrew", lv:20, learn:"<b>Dig</b>", drop:"Poison Sting", why:"80 power physical Ground, and the move that beats Lt. Surge. <b>TM10 Dig</b> from the Cerulean Rocket Grunt covers you if it is not level 20 yet."},
 {p:"Sandshrew", lv:36, learn:"<b>Earthquake</b>", drop:"Fury Swipes", why:"<b>Hold B and refuse the evolution at level 22.</b> Sandshrew learns Earthquake at 36; Sandslash does not learn it until <b>52</b>. Sixteen levels of the best physical Ground move in the game is worth far more than an early stat bump — evolve it the moment Earthquake is in."},
 {p:"Mankey", lv:13, learn:"<b>Karate Chop</b>", drop:"Focus Energy", why:"Its first real attack, and it has a boosted critical-hit rate. Never keep two stat moves on a four-slot Pokémon."},
 {p:"Pikachu", at:"Cerulean tutor", learn:"<b>Zippy Zap</b>", drop:"Growl", why:"Next stage. Electric, physical, 50 power, always a critical hit, +2 priority. It is the best thing that happens to your team in the first half of the game."}
]});

R("k04",{lv:"18 → 21", badges:"Cascade Badge",
sum:"Cerulean pays out the species count you have been building. Bulbasaur takes Oddish’s slot — same role, strictly better, and it is one of only four Pokémon you can Mega Evolve during the story.",
slots:[
 {n:"Bulbasaur", t:["Grass","Poison"], role:"Grass · future Mega", st:"add", replaces:"Oddish", w:"Free from the house next to the Pokémon Center at 30 species caught, at level 12. Venusaur beats Misty, Giovanni and Brock’s rematch, and Blue hands you the <b>Venusaurite</b> before the eighth gym."},
 {n:"Pikachu", t:["Electric"], role:"Lead · Zippy Zap", st:"keep", w:"<b>Take Zippy Zap from the Tamer in the Pokémon Center before you fight Misty.</b> A guaranteed critical hit at +2 priority ends a 115-Speed Starmie before it moves."},
 {n:"Sandshrew", t:["Ground"], role:"Ground", st:"keep", w:"Dig at 20. If it is not there yet, TM10 from the Rocket Grunt in the robbed house does the job."},
 {n:"Mankey", t:["Fighting"], role:"Fighting", st:"keep", w:"Not useful against Misty. Keep levelling it on the Nugget Bridge trainers next stage."},
 {n:"Pidgey", t:["Normal","Flying"], role:"Filler", st:"keep", w:"Last full stage."},
 {n:"Rattata", t:["Normal"], role:"Filler · leaving", st:"keep", w:"Charmander takes this slot on Route 24."}
],
mv:[
 {p:"Pikachu", at:"Cerulean tutor", learn:"<b>Zippy Zap</b>", drop:"Growl", why:"Free, repeatable, and available before the gym. 50 power physical Electric that <b>always crits</b> and moves first."},
 {p:"Bulbasaur", lv:14, learn:"<b>Sleep Powder</b> and Poison Powder", drop:"Growl", why:"Both arrive at 14. Take <b>Sleep Powder</b> and decline Poison Powder — sleep ends fights and holds legendaries still; poison just chips."},
 {p:"Sandshrew", at:"TM10", learn:"<b>Dig</b>", drop:"Poison Sting", why:"From the Rocket Grunt in the robbed house. Insurance if Sandshrew is short of level 20 before Vermilion."}
]});

R("k05",{lv:"21 → 24", badges:"2 badges",
sum:"The second free starter. Charmander is the most valuable of the three here — two Mega Stones, 109 Special Attack, and it becomes one of your three sky mounts after the League.",
slots:[
 {n:"Charmander", t:["Fire"], role:"Special attacker · future Mega", st:"add", replaces:"Rattata", w:"Free from the boy on the north-west hill of Route 24 at 50 species caught, at level 14. Charizard gets <b>both</b> Charizardite X and Y, and Y takes its Special Attack to 159."},
 {n:"Ivysaur", t:["Grass","Poison"], role:"Grass", st:"keep", w:"Evolved at 16. Razor Leaf at 31 — but note it is <b>physical</b> against Ivysaur’s 80 Special Attack, so the real plan is TMs."},
 {n:"Pikachu", t:["Electric"], role:"Lead", st:"keep", w:"Zippy Zap should be on it by now."},
 {n:"Sandshrew", t:["Ground"], role:"Ground", st:"keep", w:"Refusing the level-22 evolution. Keep refusing until 36."},
 {n:"Mankey", t:["Fighting"], role:"Fighting", st:"keep", w:"Low Kick at 21. The five Nugget Bridge trainers are good levelling for it."},
 {n:"Pidgey", t:["Normal","Flying"], role:"Filler · leaving", st:"keep", w:"Growlithe takes this slot on Route 5 or 6 next stage."}
]});

R("k06",{lv:"24 → 28", badges:"Thunder Badge",
sum:"The third free starter arrives and goes straight to the Box — you are not fielding all three. Growlithe takes Pidgey’s slot, and the Vermilion Gym is a clean sweep for Sandshrew.",
slots:[
 {n:"Growlithe", t:["Fire"], role:"Physical Fire · future Arcanine", st:"add", replaces:"Pidgey", w:"20% on Routes 5 and 6, <b>Let’s Go, Pikachu! only</b>. Arcanine is 110 Attack and 100 Special Attack. <b>Do not use a Fire Stone yet</b> — see the move table."},
 {n:"Sandshrew", t:["Ground"], role:"Ground · gym sweeper", st:"keep", w:"<b>Lead it against Lt. Surge.</b> Ground is immune to Electric, so all three of his Pokémon throw Thunderbolts at something that cannot be hit, and Dig is 4× on his Magnemite."},
 {n:"Pikachu", t:["Electric"], role:"Lead", st:"keep", w:"Sit this gym out. Electric on Electric is resisted both ways and Raichu outstats a Pikachu."},
 {n:"Ivysaur", t:["Grass","Poison"], role:"Grass", st:"keep", w:"Grass resists Electric, so it is a safe second body for the gym even without a super-effective move."},
 {n:"Charmeleon", t:["Fire"], role:"Special attacker", st:"keep", w:"Evolved at 16. Ember is still all it has — Flamethrower is a long way off at 46, which is why the Silph Co. TM matters later."},
 {n:"Mankey", t:["Fighting"], role:"Fighting", st:"keep", w:"Primeape at 28. Its Fighting moves are 2× on Lt. Surge’s Magnemite if Sandshrew somehow falls over."}
],
mv:[
 {p:"Growlithe", lv:17, learn:"<b>Flamethrower</b>", drop:"Leer", why:"90 power special Fire at level 17 — twenty-nine levels earlier than Charmeleon gets it. This is why Growlithe is worth a slot."},
 {p:"Growlithe", lv:38, learn:"<b>Flare Blitz</b>", drop:"Take Down", why:"<b>Hold the Fire Stone until this lands.</b> Arcanine’s level-up list after evolving is four moves it already has — Growlithe learns Heat Wave at 24, Crunch at 28, Outrage at 31, Play Rough at 35 and Flare Blitz at 38, and every one of them is lost if you evolve early."},
 {p:"Sandshrew", at:"level 22", learn:"<i>refuse the evolution</i>", drop:"—", why:"Hold B through the animation. Earthquake at 36 as a Sandshrew, or at 52 as a Sandslash."},
 {p:"Pikachu", at:"gym", learn:"<i>bench it</i>", drop:"—", why:"A reminder: Electric is the one type that does nothing at all in the Vermilion Gym."}
]});

R("k07",{lv:"28 → 31", badges:"3 badges",
sum:"No party changes. This is the Chop Down clean-up loop — Old Amber, TM11 and the Light Up reward — and a cave full of Diglett to chain.",
slots:[
 {n:"Pikachu", t:["Electric"], role:"Lead", st:"keep", w:"Thunderbolt arrives at 21 if it has not already. Keep Zippy Zap over it: same effective damage off a higher stat, plus priority and a guaranteed crit."},
 {n:"Ivysaur", t:["Grass","Poison"], role:"Grass", st:"keep", w:"Take Down at 22 is 90 power but it recoils. Hold the slot for Mega Drain from Erika."},
 {n:"Charmeleon", t:["Fire"], role:"Special attacker", st:"keep", w:"Dragon Rage at 26 — fixed 40 damage, which is genuinely useful while its real STAB is still Ember."},
 {n:"Growlithe", t:["Fire"], role:"Physical Fire", st:"keep", w:"Heat Wave at 24. Still refusing the Fire Stone."},
 {n:"Sandshrew", t:["Ground"], role:"Ground", st:"keep", w:"Dig should be on it. Still refusing to evolve."},
 {n:"Mankey", t:["Fighting"], role:"Fighting", st:"keep", w:"Primeape at 28 — let this one happen. Primeape learns nothing Mankey does not, and the stat jump is large."}
]});

R("k08",{lv:"31 → 34", badges:"3 badges",
sum:"Rock Tunnel and Lavender. No changes to the six — but Route 10 hides <b>TM13 Brick Break</b>, which is the fourth move your partner keeps for the rest of the game.",
slots:[
 {n:"Primeape", t:["Fighting"], role:"Fighting", st:"keep", w:"Evolved at 28. 105 Attack. It stays until Snorlax turns up on Route 16."},
 {n:"Pikachu", t:["Electric"], role:"Lead", st:"keep", w:"<b>Pick up TM13 Brick Break on Route 10.</b> 75 power Fighting, and it destroys Reflect and Light Screen on contact — which is Sabrina’s entire gym."},
 {n:"Ivysaur", t:["Grass","Poison"], role:"Grass", st:"keep", w:"Nothing due. Keep it levelling on the Rock Tunnel trainers."},
 {n:"Charmeleon", t:["Fire"], role:"Special attacker", st:"keep", w:"Fire Spin at 33. Decline it — 35 power is not worth a slot."},
 {n:"Growlithe", t:["Fire"], role:"Physical Fire", st:"keep", w:"Crunch at 28, Outrage at 31. Both are worth keeping; Crunch is your only Dark move until the Rocket Hideout."},
 {n:"Sandshrew", t:["Ground"], role:"Ground", st:"keep", w:"Level 32 gives it Slash. Two levels from Dig’s big brother."}
],
mv:[
 {p:"Pikachu", at:"TM13 · Route 10", learn:"<b>Brick Break</b>", drop:"Quick Attack", why:"75 power physical Fighting off an 80 Attack, and it <b>breaks Reflect and Light Screen</b>. Sabrina, Green and Trace all lean on screens."},
 {p:"Growlithe", lv:28, learn:"<b>Crunch</b>", drop:"Bite", why:"80 power against 60, same type. Your only Dark move until TM20 in the Rocket Hideout."},
 {p:"Growlithe", lv:31, learn:"<b>Outrage</b>", drop:"Helping Hand", why:"120 power physical Dragon. It locks you in for 2–3 turns and confuses you afterwards — a finisher, not an opener."}
]});

R("k09",{lv:"34 → 38", badges:"Rainbow Badge",
sum:"Celadon is the biggest single stage in the game. No swaps, but three things go onto your team here: Floaty Fall, Mega Drain and Dark Pulse.",
slots:[
 {n:"Pikachu", t:["Electric"], role:"Lead · Floaty Fall", st:"keep", w:"<b>Take Floaty Fall from the Celadon Move Tutor before the gym.</b> Flying, physical, 90 power — 2× on every Pokémon Erika owns."},
 {n:"Charmeleon", t:["Fire"], role:"Erika counter", st:"keep", w:"Fire is 2× on all three of Erika’s. Charizard at 36 arrives with <b>Heat Wave</b> and <b>Wing Attack</b> free on evolution."},
 {n:"Ivysaur", t:["Grass","Poison"], role:"Grass", st:"keep", w:"<b>Mega Drain from Erika goes straight on this.</b> 75 power in this game — not the 40 it is elsewhere — special, and it heals for half the damage."},
 {n:"Growlithe", t:["Fire"], role:"Physical Fire · Sabrina answer", st:"keep", w:"Play Rough at 35 — Fairy, 90 power, and 2× into Dark, Dragon and Fighting. <b>Also put TM20 Dark Pulse on it</b>: 80 power special Dark off a 100 Special Attack is your answer to Sabrina."},
 {n:"Sandshrew", t:["Ground"], role:"Ground", st:"keep", w:"<b>Earthquake at 36.</b> The moment it lands, let it become Sandslash."},
 {n:"Primeape", t:["Fighting"], role:"Fighting", st:"keep", w:"Nothing due. Erika’s gym is a bad room for it — Vileplume’s Moonblast is Fairy."}
],
mv:[
 {p:"Pikachu", at:"Celadon tutor", learn:"<b>Floaty Fall</b>", drop:"Thunder Wave", why:"90 power physical Flying with a 30% flinch, and 2× into Grass, Fighting and Bug. The second of your partner’s three exclusive moves."},
 {p:"Ivysaur", at:"TM53 · from Erika", learn:"<b>Mega Drain</b>", drop:"Take Down", why:"<b>75 power in Let’s Go</b>, special, and it heals half the damage dealt — functionally Giga Drain. Ivysaur’s 80 Special Attack is the stat this move uses; Razor Leaf is physical and uses the wrong one."},
 {p:"Growlithe", at:"TM20 · Rocket Hideout B3F", learn:"<b>Dark Pulse</b>", drop:"Helping Hand", why:"80 power special Dark off a 100 Special Attack. Kanto gives you almost no Dark, and this is the move that makes Sabrina straightforward."},
 {p:"Sandshrew", lv:36, learn:"<b>Earthquake</b>", drop:"Fury Swipes", why:"100 power, perfect accuracy, and the payoff for fourteen levels of holding B. Evolve it into Sandslash immediately afterwards."}
]});

R("k10",{lv:"38 → 40", badges:"4 badges",
sum:"Pokémon Tower. Jessie and James are both Poison, so this is a Psychic and Ground room — leave your partner and your Fire types out of it.",
slots:[
 {n:"Venusaur", t:["Grass","Poison"], role:"Grass · special attacker", st:"keep", w:"Evolved at 32, and it gains <b>Petal Dance</b> free on evolving — 120 power special Grass, which is exactly the stat Venusaur has. Unlike Growlithe, evolve this one the moment it is offered."},
 {n:"Sandslash", t:["Ground"], role:"Ground · Jessie and James", st:"keep", w:"Earthquake is on it and it is 2× into both Arbok and Weezing. This is the fight it walks."},
 {n:"Pikachu", t:["Electric"], role:"Lead", st:"keep", w:"Nothing useful in the tower — Ghost resists nothing you carry and both Rockets are Poison. Bench it for the top floor."},
 {n:"Charmeleon", t:["Fire"], role:"Special attacker", st:"keep", w:"Charizard at 36. Watch for it and let it happen — Heat Wave and Wing Attack arrive with the evolution."},
 {n:"Growlithe", t:["Fire"], role:"Physical Fire", st:"keep", w:"Flare Blitz at 38. Two levels away from the Fire Stone."},
 {n:"Primeape", t:["Fighting"], role:"Fighting", st:"keep", w:"<b>Fighting does nothing at all to a Ghost.</b> Gastly and Haunter are immune. Keep it out of the tower floors."}
]});

R("k11",{lv:"40 → 45", badges:"Marsh Badge",
sum:"Eleven floors of Silph Co. is what gets you to the level-45 bar on Sabrina’s door. The team does not change, but Growlithe finally becomes Arcanine and Charizard arrives.",
slots:[
 {n:"Charizard", t:["Fire","Flying"], role:"Special attacker · future Mega", st:"keep", w:"Evolved at 36 with <b>Heat Wave</b> and <b>Wing Attack</b> free. <b>Put TM37 Flamethrower on it from Silph Co. 10F</b> — Charizard does not learn it until level 54 otherwise."},
 {n:"Arcanine", t:["Fire"], role:"Sabrina counter · Dark Pulse", st:"keep", w:"Use the Fire Stone now, once Flare Blitz is in at 38. <b>Lead it against Sabrina</b>: Dark Pulse is 2× into three of her four, off a 100 Special Attack, and its 95 Speed outruns everything except Alakazam."},
 {n:"Pikachu", t:["Electric"], role:"Lead · Brick Break", st:"keep", w:"<b>Zippy Zap removes Alakazam.</b> 55 HP and 45 Defense behind 120 Speed — a guaranteed crit at +2 priority is exactly the answer to a glass cannon. Brick Break clears Mr. Mime’s screens."},
 {n:"Venusaur", t:["Grass","Poison"], role:"Grass", st:"keep", w:"<b>Keep it out of the Saffron Gym.</b> Poison takes 2× from Psychic and Venusaur is half Poison."},
 {n:"Sandslash", t:["Ground"], role:"Ground", st:"keep", w:"Earthquake. Neutral into everything Sabrina owns, which is more than most of your team manages."},
 {n:"Primeape", t:["Fighting"], role:"Fighting · last stage", st:"keep", w:"Psychic resists Fighting, so it is a poor fit here too. Snorlax takes this slot on Route 16."}
],
mv:[
 {p:"Charizard", at:"TM37 · Silph Co. 10F", learn:"<b>Flamethrower</b>", drop:"Ember", why:"90 power against 40, same type, same class. Charizard’s own learnset does not offer it until level 54."},
 {p:"Arcanine", at:"Fire Stone", learn:"<i>evolve now</i>", drop:"—", why:"Flare Blitz landed at 38. Everything Growlithe had to learn, it has learnt — Arcanine’s own level-up list adds nothing."},
 {p:"Venusaur", at:"TM52 later", learn:"<b>Sludge Bomb</b>", drop:"Poison Powder", why:"90 power special Poison, in the Pokémon Mansion four stages from now. Keep a slot free for it — Venusaur is a special attacker with no special STAB besides Petal Dance and Mega Drain."}
]});

R("k12",{lv:"45 → 48", badges:"Soul Badge",
sum:"Snorlax takes Primeape’s slot. 160 HP, 110 Attack, no weakness except Fighting — it is the body that survives the fights your glass cannons lose.",
slots:[
 {n:"Snorlax", t:["Normal"], role:"The wall · 160 HP", st:"add", replaces:"Primeape", w:"Wake the Route 16 one with the Poké Flute and knock it out before you throw. It arrives around level 34 with <b>at least three perfect IVs</b>, learns Body Slam at 52 and Crunch at 58, and takes TM41 Earthquake off Giovanni later."},
 {n:"Pikachu", t:["Electric"], role:"Lead · Splishy Splash", st:"keep", w:"<b>Take Splishy Splash from the Fuchsia Move Tutor.</b> Water, special, 90 power, 30% paralysis — and it covers Ground and Rock, which are the only things that threaten your partner. The set is now complete."},
 {n:"Sandslash", t:["Ground"], role:"Ground · Koga sweeper", st:"keep", w:"Ground is 2× into three of Koga’s four. Only the Golbat escapes it, and that is what your partner is for."},
 {n:"Arcanine", t:["Fire"], role:"Fire · Dark Pulse", st:"keep", w:"Nothing due. Dark Pulse and Flare Blitz are its two best moves and both are on it."},
 {n:"Charizard", t:["Fire","Flying"], role:"Special attacker", st:"keep", w:"Air Slash at 62 is a long way off — Wing Attack is the Flying move it uses until then."},
 {n:"Venusaur", t:["Grass","Poison"], role:"Grass", st:"keep", w:"Poison-type Venusaur is <b>immune to Toxic</b>, which is the move Koga’s entire gym is built around. Bring it."}
],
mv:[
 {p:"Pikachu", at:"Fuchsia tutor", learn:"<b>Splishy Splash</b>", drop:"Thunder Shock", why:"90 power special Water with a 30% paralysis chance. Your partner now covers Electric, Flying and Water off two different attack stats, plus Brick Break — nothing in Kanto walls all four."},
 {p:"Snorlax", at:"on catch", learn:"<b>Headbutt, Rest, Yawn, Lick</b>", drop:"—", why:"That is roughly the set a level-34 Snorlax arrives with, so plan from there. <b>Keep Rest</b> — a full heal for two sleeping turns on 160 HP is a genuine reset button."},
 {p:"Snorlax", lv:52, learn:"<b>Body Slam</b>", drop:"Yawn", why:"85 power against Headbutt’s 70, with a 30% paralysis chance. Yawn is the dead slot."}
]});

R("k13",{lv:"48 → 50", badges:"6 badges",
sum:"A collecting loop rather than a fighting one. No changes to the six — but TM32 Dazzling Gleam is on Route 12 and it is the only Fairy move in the game.",
slots:[
 {n:"Snorlax", t:["Normal"], role:"The wall", st:"keep", w:"Catch the second Snorlax on Route 12 as well and box it — its Master Trainer is a level-75 fight later."},
 {n:"Pikachu", t:["Electric"], role:"Lead", st:"keep", w:"Complete set. Nothing further to learn."},
 {n:"Venusaur", t:["Grass","Poison"], role:"Grass", st:"keep", w:"Nothing due."},
 {n:"Charizard", t:["Fire","Flying"], role:"Special attacker", st:"keep", w:"Nothing due."},
 {n:"Arcanine", t:["Fire"], role:"Fire", st:"keep", w:"Nothing due."},
 {n:"Sandslash", t:["Ground"], role:"Ground · last stage", st:"keep", w:"Lapras takes this slot on Route 19. Box Sandslash rather than releasing it — it is a Master Trainer species and a Let’s Go, Pikachu! exclusive."}
],
mv:[
 {p:"Snorlax", at:"TM32 · Route 12", learn:"<b>Dazzling Gleam</b>", drop:"Lick", why:"80 power special Fairy — the only Fairy TM in the game. Snorlax has 65 Special Attack, so this is a coverage move rather than a damage move, but Fairy is 2× into Dragon, Dark and Fighting and nothing else on your team carries it."}
]});

R("k14",{lv:"50 → 53", badges:"6 badges",
sum:"Lapras completes the six. Water/Ice with 130 HP answers Lance, Giovanni and Blaine, and it doubles as your Sea Skim mount.",
slots:[
 {n:"Lapras", t:["Water","Ice"], role:"Water · Ice · the Lance answer", st:"add", replaces:"Sandslash", w:"A rare spawn on the water of Routes 19 and 20 — chain Tentacool at 30% to force it. It learns <b>Ice Beam at 39</b> and <b>Surf at 45</b> without help, and Ice is 4× into Dragonite."},
 {n:"Pikachu", t:["Electric"], role:"Articuno · controlled damage", st:"keep", w:"<b>Zippy Zap is the right move for Articuno.</b> Electric is 2×, the crit is predictable, and +2 priority means you always land the last hit before it acts. Rock would be 4× and kill it."},
 {n:"Arcanine", t:["Fire"], role:"Fire", st:"keep", w:"Fire is 2× on Articuno as well, if you want a second option."},
 {n:"Snorlax", t:["Normal"], role:"The wall", st:"sit", w:"<b>Keep it away from Articuno.</b> Snorlax will be carrying Rock Slide by now and Rock is 4× on Ice/Flying — it will kill the thing you came to catch."},
 {n:"Venusaur", t:["Grass","Poison"], role:"Grass", st:"keep", w:"Grass is resisted by Ice and Flying both. Nothing to do in the Seafoam Islands."},
 {n:"Charizard", t:["Fire","Flying"], role:"Special attacker", st:"keep", w:"Fire is 2× on Articuno, but Charizard is 4× weak to its Rock coverage and 2× to Ice. Do not lead it."}
],
mv:[
 {p:"Lapras", lv:39, learn:"<b>Ice Beam</b>", drop:"Mist", why:"90 power special Ice, learnt for free. It is 4× into Lance’s Dragonite and 2× into half the Elite Four."},
 {p:"Lapras", lv:45, learn:"<b>Surf</b>", drop:"Water Gun", why:"90 power against 40, same type and class. <b>TM47 Surf</b> from Route 15 covers you if you would rather not wait."},
 {p:"Lapras", at:"TM55 · Seafoam B2F", learn:"<i>skip if you have Ice Beam</i>", drop:"—", why:"Lapras learns Ice Beam by itself at 39. Put the machine on Blastoise or Starmie instead."}
]});

R("k15",{lv:"53 → 56", badges:"Volcano Badge",
sum:"Cinnabar is a Water fight. Lead Lapras, carry Burn Heals, and pick up the Sludge Bomb that Venusaur has been keeping a slot open for.",
slots:[
 {n:"Lapras", t:["Water","Ice"], role:"Blaine counter", st:"keep", w:"Water is 2× into all four of Blaine’s, Water/Ice resists Fire back, and 130 HP absorbs a Fire Blast without complaint."},
 {n:"Venusaur", t:["Grass","Poison"], role:"Grass · Sludge Bomb", st:"keep", w:"<b>TM52 Sludge Bomb is in the Pokémon Mansion basement.</b> 90 power special Poison, and it is the same-type special move Venusaur’s 100 Special Attack has been waiting for. Keep it out of the gym itself — Fire is 2× on Grass."},
 {n:"Snorlax", t:["Normal"], role:"The wall", st:"keep", w:"Body Slam at 52. Rock Slide from the mansion is worth a slot too — but remember it is 4× on all three legendary birds."},
 {n:"Arcanine", t:["Fire"], role:"Fire", st:"keep", w:"Resists Fire, so it survives the gym comfortably — it just cannot hurt anything in it."},
 {n:"Charizard", t:["Fire","Flying"], role:"Special attacker", st:"keep", w:"Same problem. Bench both Fire types for Blaine."},
 {n:"Pikachu", t:["Electric"], role:"Lead", st:"keep", w:"Electric is neutral on every Fire type. Splishy Splash is the move to use here."}
],
mv:[
 {p:"Venusaur", at:"TM52 · Pokémon Mansion B1F", learn:"<b>Sludge Bomb</b>", drop:"Take Down", why:"90 power special Poison. Between this, Mega Drain and Petal Dance, Venusaur finally has three special moves that match its 100 Special Attack."},
 {p:"Snorlax", at:"TM22 · Pokémon Mansion 2F", learn:"<b>Rock Slide</b>", drop:"Headbutt", why:"75 power physical Rock with a flinch chance. <b>Note it and remember it</b> — Rock is 4× on Articuno, Zapdos and Moltres, so Snorlax must sit out all three legendary catches."}
]});

R("k16",{lv:"56 → 58", badges:"7 badges",
sum:"Zapdos, then the Mega Stones. Lapras carries the catch; Charizard carries the rest of the game once you pick a stone.",
slots:[
 {n:"Lapras", t:["Water","Ice"], role:"Zapdos catcher", st:"keep", w:"<b>Ice Beam, not Rock.</b> Electric/Flying is 4× weak to Rock and will die to it. Ice is 2× and gives you the controlled damage a catch needs."},
 {n:"Charizard", t:["Fire","Flying"], role:"Special attacker · Mega Y", st:"keep", w:"<b>Blue’s Charizardite Y is the stone to use.</b> Mega Charizard Y takes 109 Special Attack to 159 and keeps Fire/Flying, which is what Flamethrower and Fire Blast want. X trades the Flying half for Dragon and pushes Attack instead — the wrong stat for this Charizard."},
 {n:"Snorlax", t:["Normal"], role:"The wall", st:"sit", w:"Rock Slide again. Keep it out of the Zapdos fight."},
 {n:"Venusaur", t:["Grass","Poison"], role:"Grass · Mega fallback", st:"keep", w:"Grass is resisted by Electric and Flying both — nothing to do against Zapdos. The Venusaurite is the fallback if you would rather have a wall than a cannon."},
 {n:"Arcanine", t:["Fire"], role:"Fire", st:"keep", w:"Nothing due."},
 {n:"Pikachu", t:["Electric"], role:"Lead", st:"keep", w:"Electric on Electric is resisted. Splishy Splash is neutral; Floaty Fall is resisted. This is Lapras’ fight."}
]});

R("k17",{lv:"58 → 60", badges:"Earth Badge",
sum:"Giovanni is a Water and Grass fight, and the TM he drops is the best physical machine in the game. Put it on Snorlax.",
slots:[
 {n:"Lapras", t:["Water","Ice"], role:"Giovanni counter", st:"keep", w:"Surf is 2× into all four and <b>4× into Rhydon</b>, and Lapras’ 130 HP absorbs an Earthquake."},
 {n:"Venusaur", t:["Grass","Poison"], role:"The other half", st:"keep", w:"Grass is 4× on Rhydon and 2× on the rest, and being part Poison it takes Nidoking’s Poison Jab at half. Mega Venusaur if you want it boring."},
 {n:"Snorlax", t:["Normal"], role:"The wall · Earthquake", st:"keep", w:"<b>TM41 Earthquake goes here.</b> 100 power off 110 Attack, and it plugs every hole a pure Normal movepool has — Electric, Rock, Steel, Fire and Poison all take 2×."},
 {n:"Charizard", t:["Fire","Flying"], role:"Special attacker", st:"keep", w:"Immune to Earthquake, which is the move on four of Giovanni’s Pokémon. A safe switch-in even without a super-effective move."},
 {n:"Arcanine", t:["Fire"], role:"Fire", st:"keep", w:"Nothing due. Fire is neutral into Ground."},
 {n:"Pikachu", t:["Electric"], role:"Lead · bench", st:"keep", w:"<b>Electric is a straight zero into three of the four.</b> Splishy Splash is the only move it should use in this gym."}
],
mv:[
 {p:"Snorlax", at:"TM41 · from Giovanni", learn:"<b>Earthquake</b>", drop:"Rock Slide", why:"100 power, perfect accuracy, and it is 2× into five types. Sandslash and Dugtrio learn it by level-up, so this is the one Pokémon on your team the machine is worth spending on — and dropping Rock Slide also stops Snorlax overkilling Moltres two stages from now."}
]});

R("k18",{lv:"60 → 62", badges:"8 badges",
sum:"Victory Road, then Moltres. Everything is in place — this stage is levelling and one more careful legendary catch.",
slots:[
 {n:"Lapras", t:["Water","Ice"], role:"Moltres catcher", st:"keep", w:"<b>Surf, not Rock Slide.</b> Fire/Flying is 4× weak to Rock and a level-60 physical attacker will kill it outright. Water is 2× and controllable."},
 {n:"Snorlax", t:["Normal"], role:"The wall", st:"sit", w:"Earthquake does nothing to a Flying type and Rock Slide would kill it. Leave Snorlax out of the Moltres fight entirely."},
 {n:"Pikachu", t:["Electric"], role:"Lead · Splishy Splash", st:"keep", w:"Splishy Splash is 2× on Moltres and the 30% paralysis makes the throwing phase easier."},
 {n:"Venusaur", t:["Grass","Poison"], role:"Grass · Mega", st:"keep", w:"<b>TM45 Solar Beam is in this cave.</b> 200 power in Let’s Go — not the 120 it is elsewhere — and on 100 Special Attack it is the biggest hit your team owns."},
 {n:"Charizard", t:["Fire","Flying"], role:"Special attacker · Mega Y", st:"keep", w:"Nothing due. Save the Mega for the League."},
 {n:"Arcanine", t:["Fire"], role:"Fire", st:"keep", w:"Fire is resisted by Fire. Nothing to do against Moltres."}
],
mv:[
 {p:"Venusaur", at:"TM45 · Victory Road", learn:"<b>Solar Beam</b>", drop:"Petal Dance", why:"<b>200 power in this game.</b> It spends a turn charging, which is a real cost — but Petal Dance locks you in for 2–3 turns and confuses you afterwards, so this is a straight upgrade on a Pokémon bulky enough to survive the charge."},
 {p:"Lapras", at:"TM51 · Victory Road", learn:"<i>decline Blizzard</i>", drop:"—", why:"110 power at 70% accuracy against Ice Beam’s 90 at 100%. In a five-battle gauntlet with no healing between rounds, the reliable one wins."}
]});

R("k19",{lv:"62 → 65", badges:"Champion",
sum:"The final six. Five battles with no Pokémon Center between them — buy twenty Full Restores, use Madame Memorial to fix any move you regret, and spend your one Mega on Charizard Y in the Champion’s room.",
slots:[
 {n:"Pikachu", t:["Electric"], role:"Lorelei and Lance", st:"keep", w:"<b>The best Pokémon on your team for two of the five rooms.</b> Electric is 2× into four of Lorelei’s five, and Lance’s Aerodactyl and Gyarados are both <b>4×</b>. Zippy Zap’s guaranteed crit at +2 priority removes them before they move."},
 {n:"Lapras", t:["Water","Ice"], role:"Lance and Giovanni’s ghosts", st:"keep", w:"Ice Beam is 4× into Dragonite and 2× into half of Bruno. 130 HP is what carries you through a gauntlet with no healing station."},
 {n:"Snorlax", t:["Normal"], role:"The wall · Earthquake", st:"keep", w:"Earthquake is 2× into four of Agatha’s five — every one of them is part Poison. <b>Body Slam does nothing at all to either Gengar</b>, so Earthquake is the move you use in that room."},
 {n:"Charizard", t:["Fire","Flying"], role:"Bruno and Trace · Mega Y", st:"keep", w:"Flying is 2× into four of Bruno’s five. <b>Mega Evolve in the Champion’s room</b> — 159 Special Attack, and Heat Wave answers Trace’s Vileplume, Pidgeot and Marowak."},
 {n:"Venusaur", t:["Grass","Poison"], role:"Bruno and Lorelei", st:"keep", w:"Grass is 4× on Bruno’s Onix and 2× on Poliwrath, Cloyster and Slowbro. Keep it away from Trace’s Pidgeot and Rapidash."},
 {n:"Arcanine", t:["Fire"], role:"Agatha and Bruno", st:"keep", w:"Dark Pulse is 2× into both Gengar; Flare Blitz answers Bruno’s Onix and Trace’s Vileplume. 95 Speed outruns most of the gauntlet."}
],
mv:[
 {p:"Pikachu", at:"Madame Memorial", learn:"<i>check the set</i>", drop:"—", why:"Zippy Zap, Splishy Splash, Floaty Fall and Brick Break. If any of the three tutor moves is missing, the tutors in Cerulean, Celadon and Fuchsia will re-teach them free."},
 {p:"Snorlax", at:"Madame Memorial", learn:"<b>Body Slam</b> if missing", drop:"Yawn or Lick", why:"One Heart Scale. Body Slam at 52 and Crunch at 58 are both worth having, and the Cerulean bike shop gave you five scales."},
 {p:"Charizard", at:"—", learn:"<i>hold the Mega</i>", drop:"—", why:"One Mega Evolution per battle, and it wears off when the battle ends. Spend it in the Champion’s room, not on Lorelei."}
]});

R("p01",{lv:"65 → 75", badges:"Champion",
sum:"Master Trainer battles are one-versus-one with a species match and no items, so your carefully built six is irrelevant for them — what matters is having a strong specimen of the right species. Your six is still the team you take to Red.",
slots:[
 {n:"Pikachu", t:["Electric"], role:"Partner · still locked", st:"keep", w:"Red’s own Pikachu is level 85 with Reflect. Your partner has a partner’s stats and Zippy Zap; his does not."},
 {n:"Charizard", t:["Fire","Flying"], role:"Mega Y · sky mount", st:"keep", w:"Also your ride. Set it as your buddy and take to the sky — that is where Dragonite, Pidgeot and eventually the three birds live."},
 {n:"Lapras", t:["Water","Ice"], role:"Water · Ice", st:"keep", w:"Red brings his own Lapras at 85 with an entirely physical moveset."},
 {n:"Snorlax", t:["Normal"], role:"The wall", st:"keep", w:"Red’s Snorlax runs Toxic, Protect and Rest and will stall you out if you let it. Remove it early."},
 {n:"Venusaur", t:["Grass","Poison"], role:"Grass", st:"keep", w:"Red’s Venusaur is the Mega, and it is his last Pokémon. Amnesia plus Leech Seed is the shape of that fight."},
 {n:"Arcanine", t:["Fire"], role:"Fire", st:"keep", w:"Red brings one too, with Roar — which will drag your lead out and pick its replacement for you."}
]});

R("p02",{lv:"70+", badges:"Champion",
sum:"Mewtwo is a five-minute battle against a level-70 Psychic with Recover and 130 Speed. Status first, damage second, Master Ball third.",
slots:[
 {n:"Pikachu", t:["Electric"], role:"Speed control", st:"keep", w:"<b>Zippy Zap is one of the very few moves that reliably moves before Mewtwo.</b> +2 priority beats 130 base Speed. Splishy Splash’s 30% paralysis is the other reason to bring it."},
 {n:"Snorlax", t:["Normal"], role:"The wall · Crunch", st:"keep", w:"<b>Dark is 2× into Psychic</b> and Snorlax learns Crunch at 58. 160 HP also means it survives a boosted Psychic, which most of your team will not."},
 {n:"Arcanine", t:["Fire"], role:"Dark Pulse", st:"keep", w:"Dark Pulse off a 100 Special Attack. Along with Snorlax’s Crunch this is most of the damage you have that Mewtwo does not resist."},
 {n:"Charizard", t:["Fire","Flying"], role:"Mega Y", st:"keep", w:"Neutral, but 159 Special Attack as Mega Y is raw damage that gets through anything."},
 {n:"Lapras", t:["Water","Ice"], role:"Bulk", st:"keep", w:"Neutral into Psychic and bulky enough to eat a hit while you set up paralysis."},
 {n:"Venusaur", t:["Grass","Poison"], role:"Sleep Powder", st:"sit", w:"<b>Bring it for one reason:</b> Sleep Powder. A sleeping Mewtwo cannot use Recover, which is the only thing that actually beats you here. Parasect’s Spore never misses if you would rather be certain."}
]});

/* ===================== THE ONE NEXT ACTION ===================== */
const NOW = {
 k01:"Take the partner Pikachu, then catch <b>Oddish</b> on Route 1 — the Pewter Gym will not let you in without a Grass or Water Pokémon.",
 k02:"Search Viridian Forest for the <b>Bulbasaur</b> rare spawn, then beat Brock with Oddish and your partner’s <b>Double Kick</b>, which arrives at level 9.",
 k03:"Catch a <b>Sandshrew</b> and a <b>Mankey</b> on Route 3, take <b>both Moon Stones</b> from Mt. Moon B2F, and hold B every time Sandshrew tries to evolve.",
 k04:"Learn <b>Zippy Zap</b> from the Tamer in the Cerulean Pokémon Center <i>before</i> you fight Misty, and collect the free Bulbasaur next door.",
 k05:"Beat the five Nugget Bridge trainers, take the free <b>Charmander</b> on the hill, and rescue Bill for the <b>S.S. Ticket</b>.",
 k06:"Catch five <b>Growlithe</b> for the rideable Persian, learn <b>Chop Down</b> on the S.S. Anne, then sweep the Vermilion Gym with Sandshrew and Dig.",
 k07:"Take <b>Light Up</b> on Route 2, then use Chop Down to collect the <b>Old Amber</b> in Pewter and TM11 in Viridian.",
 k08:"Light Rock Tunnel, hunt the 1% <b>Kangaskhan</b>, take <b>TM13 Brick Break</b> on Route 10 — and turn back at Pokémon Tower 3F.",
 k09:"Learn <b>Floaty Fall</b>, beat Erika, clear the Rocket Hideout for the <b>Silph Scope</b>, and take <b>Sky Dash</b> from the Rocker outside the Game Corner.",
 k10:"Climb Pokémon Tower with the Silph Scope and walk Mr. Fuji home for the <b>Poké Flute</b>.",
 k11:"Clear all eleven floors of Silph Co. for the <b>Master Ball</b> and the levels you need to get past Sabrina’s level-45 door check.",
 k12:"Wake the Route 16 <b>Snorlax</b> and catch it, learn <b>Splishy Splash</b> in Fuchsia, take <b>Sea Skim</b> in the Playful Park, then beat Koga.",
 k13:"Catch the second Snorlax, take <b>TM32 Dazzling Gleam</b> from Mr. Dazzling, and trade the Route 19 <b>Gold Teeth</b> to the warden for <b>Strong Push</b>.",
 k14:"Chain Tentacool on Route 19 until a <b>Lapras</b> appears, then push the Seafoam boulders into the sea and catch <b>Articuno</b> — with Electric or Fire, never Rock.",
 k15:"Revive <b>all three fossils</b> at the Cinnabar Lab, clear the Mansion for the <b>Secret Key</b> and TM52, then beat Blaine with Lapras.",
 k16:"Catch <b>Zapdos</b> at the Power Plant with Ice Beam, then take the <b>Key Stone</b> and four Mega Stones from Blue at Oak’s lab.",
 k17:"Beat <b>Giovanni</b> at the Viridian Gym and put <b>TM41 Earthquake</b> on Snorlax.",
 k18:"Sweep Victory Road’s TMs, Sea Skim every Route 23 island for <b>Golden Razz Berries</b>, and catch <b>Moltres</b> with Water — keep Snorlax and its Rock Slide away from it.",
 k19:"Buy <b>twenty Full Restores</b>, visit <b>Madame Memorial</b> with your Heart Scales, then start the gauntlet and save your one Mega for Trace.",
 p01:"Set a Charizard as your buddy and take to the sky, then beat <b>six Master Trainers</b> to make Red appear at the Indigo Plateau.",
 p02:"Clear Cerulean Cave, throw the <b>Master Ball</b> at Mewtwo, then leave, talk to Trace, come back and beat <b>Green</b> for the Mewtwonites.",
 p03:"Run the daily Gym Leader rematches for money, then buy every <b>Mega Stone</b> from the Poké Maniac at the Indigo Plateau.",
 p04:"Line up <b>Machoke, Graveler, Haunter and Kadabra</b> and trade all four in one session — that is four Pokédex entries no amount of playing alone will give you."
};
Object.keys(NOW).forEach(k => { if (ROSTERS[k]) ROSTERS[k].now = NOW[k]; });

/* ===================== DECLARED DEPARTURES =====================
   "A>B" means A leaves the party here and B takes the slot.        */
OUTS("k03", ["Spearow>Sandshrew", "Nidoran♂>Mankey"]);
OUTS("k04", ["Oddish>Bulbasaur"]);
OUTS("k05", ["Rattata>Charmander"]);
OUTS("k06", ["Pidgey>Growlithe"]);
OUTS("k12", ["Primeape>Snorlax"]);
OUTS("k14", ["Sandslash>Lapras"]);
