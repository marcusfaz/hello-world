/* ===================== HOENN 11–14 ===================== */

STAGES.push({
id:"h11", ch:"hoenn", tag:"Stage 11", place:"Route 121 · Lilycove City · Mt. Pyre",
title:"Lilycove, Mt. Pyre, and both orbs stolen",
lede:"The plot's hinge. Team Aqua takes one orb, Team Magma takes the other, and an old couple hands you the key to a cave you walked past four stages ago. Lilycove's shops first — you will not be back here with money for a while.",
band:[{k:"Party level",v:"44 → 47"},{k:"Badges",v:"6"},{k:"Unlocks",v:"Magma Emblem"}],
body:[
["ver","<b>Both orbs are stolen and you get neither.</b> In Ruby and Sapphire the player ends up holding an orb. In Emerald, Team Aqua takes the <b>Red Orb</b> and Team Magma has already taken the <b>Blue Orb</b> — and yes, that is the wrong way round from what the colours suggest. Emerald swaps which team uses which orb, so Maxie awakens Groudon with the <i>Blue</i> Orb and Archie awakens Kyogre with the <i>Red</i> one. You are given the <b>Magma Emblem</b> instead."],
["h","The walk"],
["do",[
 {at:"Route 121", t:"Catch a <b>Shuppet</b>", sub:"30%. Banette at 37 has 115 Attack — and remember <b>Ghost moves are physical in Generation III</b>, so Shadow Ball runs off that Attack stat. This is a genuinely strong Ghost."},
 {t:"Catch a <b>Mightyena</b>, an <b>Absol</b> and a <b>Gloom</b> if you need them"},
 {t:"Overhear the <b>Team Aqua Grunts</b> discussing Mt. Pyre"},
 {at:"Lilycove City", t:"Beat your <b>rival</b> outside the Department Store", sub:"Their last battle. Tropius, Ludicolo, Slugma and a Lv 34 Grovyle if you took Mudkip."},
 {t:"Buy from the <b>Lilycove Department Store</b>", sub:"4F sells the TMs you cannot find in the field — see the shopping list below."},
 {t:"Take <b>TM44 Rest</b> from the man in the easternmost house"},
 {t:"Register for the <b>Lilycove Contest Hall</b>", sub:"<b>All four Contest ranks run out of this one hall in Emerald</b> — Normal, Super, Hyper and Master. Ruby and Sapphire scattered them across four towns. If you are doing Contests at all, this is where."},
 {t:"Buy a <b>Pokéblock Case</b> and blend berries in the Contest Hall's Berry Blender", sub:"Pokéblocks raise Contest conditions. Only worth it if you want the Contest ribbons — they are not required for the Pokédex."},
 {at:"Mt. Pyre", t:"Take the <b>Cleanse Tag</b> from the lady in the <b>1F north-east corner</b>", sub:"It lowers the wild encounter rate while held — genuinely useful when you are re-crossing routes you have already cleared."},
 {t:"Climb the interior floors, then take the outside path to the summit", sub:"Catch a <b>Vulpix</b> on the outside slope — 30%, and this is the only patch in Hoenn."},
 {t:"Catch a <b>Duskull</b> and a <b>Chimecho</b>", sub:"Duskull 10–13% on the upper floors. <b>Chimecho is 2% on the summit and this is the only place in the entire game it appears</b> — do not leave without it, or you are coming back for an hour."},
 {t:"Take <b>TM30 Shadow Ball</b> on 6F and <b>TM48 Skill Swap</b> on the outside ledges"},
 {t:"Fight through the Team Aqua Grunts at the summit"},
 {t:"Watch Team Aqua take the <b>Red Orb</b>", sub:"Team Magma already has the Blue Orb. Both teams now have what they came for."},
 {t:"Take the <b>Magma Emblem</b> from the old couple", sub:"<b>This opens the hidden cave on Jagged Pass.</b> That is the next stage."},
 {t:"Leave the Aqua Hideout alone for now", sub:"<b>The hideout east of Lilycove is not open yet.</b> Team Aqua only retreats there after they steal Captain Stern's submarine, and that happens after you have cleared the Magma Hideout. Going now finds a locked cave — Stage 12 handles it."}
]],
["h","The Lilycove Department Store shopping list"],
["p","4F is the only TM counter in the game and it sells eight machines you cannot find anywhere in the field. Buy in this order as money allows."],
["loot",[
 {k:"TM13", n:"Ice Beam", where:"Not sold here — Abandoned Ship, or 4,000 Game Corner coins", why:"Listed first because it is the most important machine in the game. <b>Ice Beam beats Drake's entire Dragon team and Winona's Altaria.</b> Get it from the Abandoned Ship if you have not."},
 {k:"TM33", n:"Reflect — ₽3,000", where:"Lilycove Dept. Store 4F", why:"Halves physical damage for five turns. The cheapest way to survive Drake and the Frontier."},
 {k:"TM16", n:"Light Screen — ₽3,000", where:"Lilycove Dept. Store 4F", why:"The special-side twin. Glacia and Wallace are both special attackers."},
 {k:"TM17", n:"Protect — ₽3,000", where:"Lilycove Dept. Store 4F", why:"A free turn on demand. Essential in the Battle Frontier and useful against Slaking's non-loafing turns."},
 {k:"TM25", n:"Thunder — ₽5,500", where:"Lilycove Dept. Store 4F", why:"110 power but 70% accurate — <b>except in rain, where it never misses.</b> Against Juan and Wallace, who both set rain, this is a 110-power certainty."},
 {k:"TM14", n:"Blizzard — ₽5,500", where:"Lilycove Dept. Store 4F", why:"110 power, 70% accurate, and in Generation III <b>hail does not make it perfectly accurate</b> — that only started later. Ice Beam is the more reliable pick."},
 {k:"TM38", n:"Fire Blast — ₽5,500", where:"Lilycove Dept. Store 4F", why:"110 power at 85%. Worth it only if you have a Fire type worth putting it on."},
 {k:"TM15", n:"Hyper Beam — ₽7,500", where:"Lilycove Dept. Store 4F", why:"150 power and then a recharge turn. Bad in a gauntlet, fine as a finisher. Buy it last."}
]],
["h","Worth catching now"],
["catch",[
 {n:"Chimecho", t:["Psychic"], where:"<b>Mt. Pyre summit — 2%. Nowhere else in the game.</b>", why:"<b>Do not leave Mt. Pyre without one.</b> It is 2% on the summit grass and there is no second location, no trade and no breeding shortcut — Chingling did not exist until Generation IV. Set aside twenty minutes now rather than an hour later."},
 {n:"Shuppet", t:["Ghost"], where:"Route 121 — 30%, Mt. Pyre — 60–100%", why:"Banette at 37 has <b>115 Attack</b>, and Ghost moves are physical in Generation III — so Shadow Ball off Banette is real damage, unlike off a Gengar. Insomnia stops sleep."},
 {n:"Duskull", t:["Ghost"], where:"Mt. Pyre 4F–summit — 10–13%", why:"Dusclops at 37: <b>130 Defence and 130 Special Defence</b> with Pressure. Phoebe runs two. It is a wall, not an attacker."},
 {n:"Vulpix", t:["Fire"], where:"<b>Mt. Pyre outside — 30%. The only patch in Hoenn.</b>", why:"Ninetales needs a Fire Stone from the Lilycove Department Store. <b>Vulpix has Flash Fire in Emerald, not Drought</b> — that only arrived in Generation V. Catch it for the dex if nothing else."},
 {n:"Absol", t:["Dark"], where:"Route 120 and 121 — 8%", why:"130 Attack and Pressure. If you skipped it on Route 120, this is your second chance."}
]],
["warn","<b>Save the Master Ball for a roaming Latios or Latias.</b> Roaming Pokémon in Generation III flee on the first turn every time you find them, cannot be trapped by Mean Look or Arena Trap, and take dozens of encounters to whittle down. Every other legendary in Emerald stands still and lets you throw Ultra Balls at it."]
]});

STAGES.push({
id:"h12", ch:"hoenn", tag:"Stage 12", place:"Jagged Pass · Magma Hideout · Slateport · Aqua Hideout",
title:"Both hideouts — Groudon wakes, and Archie takes the submarine",
lede:"Magma's hideout first, then Aqua's — in that order, because the second one does not open until Archie steals the submarine. An Emerald-only dungeon in an Emerald-only location, and the stage where the first ancient Pokémon gets loose.",
band:[{k:"Party level",v:"47 → 51"},{k:"Badges",v:"6"},{k:"Needs",v:"Magma Emblem · Strength · Surf"}],
body:[
["ver","<b>Team Magma's hideout is a hidden cave on Jagged Pass in Emerald.</b> Ruby put it somewhere else entirely and gave it a different layout. It is also where <b>Groudon is first encountered</b> — but not caught. Groudon flees the moment Maxie wakes it, and you will not see it again until after the Hall of Fame, in a cave that moves."],
["h","The walk"],
["do",[
 {at:"Jagged Pass", t:"Fly to <b>Lavaridge</b> and come at Jagged Pass from below", sub:"Either climb from the south on the <b>Acro Bike</b>, or ride the cable car to the Mt. Chimney summit and walk down. Both reach the halfway point."},
 {t:"Stand on the tile where the <b>Magma Emblem</b> reacts", sub:"Middle of the pass. The cave mouth only appears once you are on it."},
 {at:"Magma Hideout", t:"Push the <b>Strength</b> boulders through the lava-rock maze", sub:"Several routes are dead ends. Take the boulder path that leads down and left."},
 {t:"Catch a <b>Torkoal</b> if you skipped Fiery Path", sub:"30% here — a much better rate than Fiery Path's 18%."},
 {t:"Beat the <b>Team Magma Grunts</b> on the way in"},
 {t:"Beat <b>Magma Admin Tabitha</b>", sub:"Numel Lv 26, Mightyena Lv 28, Zubat Lv 30, Camerupt Lv 33. Surf ends both Fire/Grounds."},
 {t:"Watch <b>Maxie</b> wake <b>Groudon</b> with the Blue Orb", sub:"It flees immediately. There is nothing you can do and nothing you should try."},
 {t:"Beat <b>Maxie</b>", sub:"Lv 37 Mightyena, Lv 38 Crobat, Lv 39 Camerupt. Surf is 4× on the Camerupt; Thunderbolt or Ice handles the Crobat."},
 {t:"Take the <b>Max Elixir</b>, <b>Full Restore</b> and <b>Nugget</b> from the hideout floors"},
 {at:"Slateport Harbor", t:"Fly to Slateport and go to the harbour in the north-east", sub:"You can Fly — the Feather Badge two stages ago is what makes this possible."},
 {t:"Talk to <b>Captain Stern</b> outside the harbour", sub:"He has found an undersea cavern on Route 128. Team Aqua interrupts."},
 {t:"Watch Team Aqua steal <b>Captain Stern's submarine</b>", sub:"Archie taunts you and names the hideout in Lilycove. <b>This is the event that opens it</b> — the cave was sealed until now."},
 {at:"Team Aqua Hideout", t:"Fly to <b>Lilycove</b> and Surf east from the beach to the hideout", sub:"North-east of the beach. It has only just become enterable."},
 {t:"Navigate the warp-tile maze", sub:"The floor panels teleport you between rooms. Follow the grunts' pattern — take the north-most warp first."},
 {t:"Take the <b>Master Ball</b> in Archie's office", sub:"<b>Four items sit by the far wall and two of them are Electrode in disguise.</b> The top-left is the Master Ball and the bottom-left is a Nugget. <b>Save the Master Ball</b> for a roaming Latios or Latias — nothing else in the game needs it."},
 {t:"Take the <b>Nugget</b> from the same wall"},
 {t:"Beat <b>Aqua Admin Matt</b> by the submarine dock", sub:"Lv 34 Mightyena and a Lv 34 Golbat. He is stalling, and it works — Archie leaves in the sub while you fight."},
 {t:"Leave and Surf east onto Route 124", sub:"You cannot follow the submarine. Dive comes from Steven in Mossdeep, which is the next stage."}
]],
["boss",{name:"Maxie", role:"Team Magma Leader · Fire", badge:"Magma Hideout", team:[
 {m:"Mightyena", l:37, t:["Dark"], note:"<b>Intimidate</b> drops your Attack on entry. Roar will force a switch — annoying if you set up."},
 {m:"Crobat", l:38, t:["Poison","Flying"], note:"Inner Focus, and it is <b>fast</b>. Confuse Ray plus Air Cutter is the dangerous combination."},
 {m:"Camerupt", l:39, t:["Fire","Ground"], note:"Magma Armor. <b>Water is 4× on it.</b> Earthquake and Rock Slide are real damage if you let it act."}
], plan:[
 "<b>Lead a special attacker to blank Intimidate.</b> Manectric or Gardevoir take nothing from the Attack drop.",
 "<b>Surf ends Camerupt in one</b> — Fire/Ground is 4× weak to Water. That is the only member with real damage output.",
 "<b>Crobat is the one that beats you.</b> It outspeeds your whole team and Confuse Ray means a 50% chance you hit yourself. Thunderbolt or Ice Beam kills it before it gets two turns; do not try to grind it down through confusion.",
 "Mightyena's Roar will drag out a random party member. Kill it first if you plan to Calm Mind."
], reward:"The plot moves to Slateport Harbor, and Groudon is loose."}],
["tip","<b>Bring a Slugma or a Torkoal out of this cave if you have not got one.</b> Torkoal is 30% here against 18% in the Fiery Path, and it is the only wild Torkoal in the game."]
]});

STAGES.push({
id:"h13", ch:"hoenn", tag:"Stage 13", place:"Route 124 · Mossdeep City · Space Center · Shoal Cave",
title:"Mind Badge — a double battle gym, and fighting alongside Steven",
lede:"Mossdeep's gym is the only Gym Leader fight in the game that is a Double Battle from the first turn, and the Space Center gives you the only Multi Battle in the story. Both are Emerald doing things Ruby and Sapphire did not.",
band:[{k:"Party level",v:"49 → 53"},{k:"Badge",v:"Mind"},{k:"Unlocks",v:"HM08 Dive"}],
body:[
["team","<b>Do not bring Earthquake to Mossdeep.</b> Claydol, Lunatone and Solrock all have <b>Levitate</b>, and Xatu is Flying — every single one of Tate & Liza's four is immune to Ground. Bring Dark and Ghost instead: Crunch, Bite, Shadow Ball. Psychic types are 2× weak to both, and Emerald gives you Absol, Banette, Sharpedo and Mightyena for exactly this."],
["warn","<b>Tate & Liza fight you two-on-two from turn one.</b> That means area moves hit both of yours, Light Screen and Calm Mind cover both of theirs, and a single-target plan falls apart. Bring two Pokémon that can each threaten a Psychic type, not one carry and a passenger."],
["h","The walk"],
["do",[
 {at:"Route 124", t:"Surf east from Lilycove", sub:"Underwater spots need Dive, which you do not have yet. Note them and come back."},
 {t:"Catch a <b>Wailmer</b> and a <b>Sharpedo</b>", sub:"Sharpedo is Water/Dark with 120 Attack and 95 Speed — and Dark is <i>special</i> in Generation III, so run it on Crunch and Surf rather than physical Dark moves."},
 {at:"Shoal Cave", t:"Visit at <b>low tide</b> and collect <b>Shoal Salt ×4</b> and <b>Shoal Shell ×4</b>", sub:"The tide follows your in-game clock. Four of each buys you a <b>Shell Bell</b> from the man at the entrance — it heals 1/8 of the damage you deal, every turn, forever."},
 {t:"Catch a <b>Spheal</b> and a <b>Snorunt</b>", sub:"Spheal 50%, Snorunt 10% on B3F. <b>Snorunt is only here and on Route 217-equivalent nowhere else in Hoenn</b> — take it, Glalie is a required dex entry."},
 {t:"Take <b>TM07 Hail</b> from the ice room"},
 {at:"Mossdeep City", t:"Beat <b>Tate & Liza</b> in the Mossdeep Gym", sub:"The gym is a rotating-tile puzzle. Step on the arrows in sequence — the wrong tile sends you back to the entrance."},
 {t:"Take the <b>Mind Badge</b> and <b>TM04 Calm Mind</b>", sub:"Dive now works in the field once you have HM08. <b>Calm Mind on Gardevoir is the single best move investment in the game</b> — +1 Special Attack and +1 Special Defence a turn on a 125 Special Attack body."},
 {t:"Take the <b>Super Rod</b> from the Fisherman in the house <b>east of the Gym</b>", sub:"The last rod. It is what turns up Feebas, Corsola, Luvdisc and the deep-water dex entries — several of which have no other source."},
 {t:"Take the <b>King's Rock</b> from the boy outside Steven's house"},
 {t:"Visit the <b>Game Corner</b> for Pokémon Jump and Dodrio Berry Picking", sub:"Emerald replaced Ruby and Sapphire's e-Reader Trainer house with these two wireless minigames."},
 {at:"Space Center", t:"Fight through the <b>Team Magma Grunts</b> on 1F and 2F"},
 {t:"Fight <b>Maxie and Tabitha alongside Steven</b>", sub:"<b>The only Multi Battle in the story.</b> Steven brings Metang Lv 42, Skarmory Lv 43 and Aggron Lv 44 — three Steel types, which cover most of what Magma throws. Let him tank and focus your damage on Camerupt."},
 {t:"Go to <b>Steven's house</b> in the south-east and take <b>HM08 Dive</b>", sub:"Dive is Emerald and Ruby/Sapphire only — there is no Dive in FireRed or LeafGreen at all. It is what opens the Seafloor Cavern and the Sealed Chamber."},
 {t:"Teach <b>Dive</b> to Swampert or a Pelipper", sub:"80 power Water and a field move. If Swampert's four slots are full, put it on a dedicated water mule."},
 {t:"Take the <b>Sun Stone</b> from the Space Center 2F"}
]],
["boss",{name:"Tate & Liza", role:"Gym Leaders · Psychic", badge:"Mind Badge", team:[
 {m:"Claydol", l:41, t:["Ground","Psychic"], note:"<b>Levitate — your Earthquake does nothing.</b> Earthquake, AncientPower, Psychic, Light Screen."},
 {m:"Xatu", l:41, t:["Psychic","Flying"], note:"Synchronize. Confuse Ray plus Calm Mind. <b>Electric and Ice are both 2× on it.</b>"},
 {m:"Lunatone", l:42, t:["Rock","Psychic"], note:"Holds a <b>Sitrus Berry</b>. Levitate. <b>Hypnosis</b> plus Calm Mind — if it puts one of yours to sleep the fight tilts."},
 {m:"Solrock", l:42, t:["Rock","Psychic"], note:"Holds a <b>Sitrus Berry</b>. Levitate. <b>Sunny Day into SolarBeam</b> — under its own sun SolarBeam fires with no charge turn."}
], plan:[
 "<b>This is a Double Battle from turn one.</b> Send two Pokémon that both threaten Psychic types — an Absol and a Banette, or a Sharpedo and a Mightyena.",
 "<b>Dark and Ghost are 2× on all four</b>, and remember Dark moves are special and Ghost moves are physical in Generation III. Put Crunch on a special body and Shadow Ball on a physical one.",
 "<b>Kill Solrock first.</b> Sunny Day plus instant SolarBeam is the only thing on their side that does big damage, and it will aim it at your Water type.",
 "<b>Do not bring a Ground move.</b> Three of the four have Levitate and Xatu is Flying. Earthquake is a dead slot in this gym.",
 "Lunatone's Hypnosis is 60% accurate and it will keep trying. Carry a Chesto or Lum Berry, or accept that you may lose a slot for a few turns.",
 "Both Lunatone and Solrock are <b>Rock/Psychic</b>, so Steel resists their STAB and Water, Grass and Ground would all be 2× — except Levitate blocks Ground. Surf is your clean answer to both."
], reward:"Mind Badge, <b>TM04 Calm Mind</b>, and Dive becomes usable once Steven hands you HM08."}],
["h","Worth catching now"],
["catch",[
 {n:"Snorunt", t:["Ice"], where:"<b>Shoal Cave B3F — 10%</b>", why:"Glalie at 42. <b>Shoal Cave is the only place in Emerald it appears</b>, and Froslass did not exist until Generation IV, so Glalie is the whole line. Take it while you are here for the salt and shells."},
 {n:"Spheal", t:["Ice","Water"], where:"Shoal Cave — 50%", why:"Sealeo at 32, Walrein at 44. <b>Thick Fat</b> halves Fire and Ice, and Glacia runs three of this line. 110 HP on Walrein makes it a genuine wall."},
 {n:"Sharpedo", t:["Water","Dark"], where:"Route 103, 118, 124 — Super Rod; evolve Carvanha at 30", why:"120 Attack, 95 Speed, and <b>Rough Skin</b>, which chips anything that touches it. Note that <b>Dark is a special type in Generation III</b>, so Crunch runs off its weaker stat — build it on Surf, Crunch and physical Normal moves and accept the split."},
 {n:"Clamperl", t:["Water"], where:"Underwater on Route 124–126 — after Dive", why:"<b>Two evolutions from one Pokémon, both trade-only:</b> DeepSeaTooth makes Huntail, DeepSeaScale makes Gorebyss. Both items are underwater on Route 124/126. Three dex entries hang off this."},
 {n:"Wailmer", t:["Water"], where:"Routes 122–129 — Super Rod, very common", why:"Wailord at 40 is the largest Pokémon in the game and <b>it is one of the two Pokémon required for the Regi puzzle</b>. You need it. Catch it now while you are on the water."},
 {n:"Relicanth", t:["Water","Rock"], where:"Underwater on Route 124/126 — after Dive", why:"<b>The other half of the Regi puzzle.</b> No Relicanth, no legendary giants. It is an underwater encounter, so it waits until Dive."}
]],
["warn","<b>Catch a Wailmer and a Relicanth before you leave the sea routes.</b> The Regi trio's Sealed Chamber puzzle requires both of them in your party in a specific order, and Relicanth is underwater-only. Getting them now saves a dedicated trip later."]
]});

STAGES.push({
id:"h14", ch:"hoenn", tag:"Stage 14", place:"Route 128 · Seafloor Cavern · Sootopolis · Sky Pillar",
title:"Rain Badge — Kyogre wakes, Rayquaza settles it, and Juan closes the gyms",
lede:"The climax. Archie wakes the second ancient Pokémon, the weather over Hoenn breaks, and the only thing that stops it is the Pokémon at the top of a tower Wallace has to unlock for you.",
band:[{k:"Party level",v:"53 → 57"},{k:"Badge",v:"Rain"},{k:"Unlocks",v:"HM07 Waterfall"}],
body:[
["ver","<b>Juan is the Sootopolis Gym Leader, not Wallace.</b> In Ruby and Sapphire, Wallace runs this gym and Steven is the Champion. Emerald promoted Wallace to Champion, invented Juan to take the gym, and demoted Steven to a rematch-only trainer in Meteor Falls. If a guide sends you to fight Wallace for the Rain Badge, it is a Ruby/Sapphire guide."],
["h","The walk"],
["do",[
 {at:"Route 128", t:"Surf to Route 128 and <b>Dive</b> at the dark patch"},
 {at:"Seafloor Cavern", t:"Push the <b>Strength</b> boulders through the rooms", sub:"Several rooms are boulder puzzles with only one solution. Reset by leaving the room if you jam one."},
 {t:"Beat the <b>Team Aqua Grunts</b> and <b>Shelly</b> again", sub:"Sharpedo Lv 37 and Mightyena Lv 37 this time."},
 {t:"Take <b>TM26 Earthquake</b>", sub:"<b>The best physical move in the game and there is exactly one of it.</b> Swampert learns Earthquake by itself at 52, so <b>do not waste the TM on it</b> — put it on Aggron, Camerupt or Flygon."},
 {t:"Watch <b>Archie</b> wake <b>Kyogre</b> with the Red Orb", sub:"It vanishes, the weather breaks, and both team leaders realise they cannot control it."},
 {t:"Beat <b>Archie</b>", sub:"Lv 41 Mightyena, Lv 41 Crobat, Lv 43 Sharpedo. Thunderbolt clears the Sharpedo without touching its Rough Skin."},
 {at:"Sootopolis City", t:"Fly or Dive to Sootopolis", sub:"The weather is now alternating between blazing sun and torrential rain across the whole region."},
 {t:"Surf west from the Gym to meet <b>Steven</b>, then follow him into the <b>Cave of Origin</b>", sub:"<b>Sweep the cave before you trigger anything.</b> Wallace is inside; he tells you Rayquaza can stop the fight and leaves for the Sky Pillar — and <b>the cave entrance is sealed for the rest of the game once Rayquaza is awake</b>."},
 {at:"Sky Pillar", t:"Surf to the Sky Pillar on Route 131 and let Wallace unlock the door"},
 {t:"Climb to the top", sub:"<b>On this first visit almost none of the floor is cracked</b> — you do not need the Mach Bike yet. That changes when you come back to catch it."},
 {t:"Wake <b>Rayquaza</b>", sub:"It flies to Sootopolis, calls both ancient Pokémon off, and returns to the tower. <b>You do not catch it here.</b>"},
 {at:"Sootopolis City", t:"Return to Sootopolis and take <b>HM07 Waterfall</b> from Wallace"},
 {t:"Take <b>TM31 Brick Break</b> from the Black Belt in the north-western house", sub:"75 power Fighting, 100% accurate, and <b>it shatters Reflect and Light Screen</b>. Juan does not use screens, but the Elite Four and the Frontier do."},
 {t:"Beat <b>Juan</b>", sub:"Luvdisc, Whiscash, Sealeo, Crawdaunt and a Lv 46 Kingdra."},
 {t:"Take the <b>Rain Badge</b> and <b>TM03 Water Pulse</b>", sub:"<b>All eight badges.</b> Waterfall works in the field and every traded Pokémon obeys you."},
 {t:"Go back to the <b>Sky Pillar</b> with the <b>Mach Bike</b>", sub:"<b>The floors are cracked on this second visit.</b> Speed over the unstable patches on 2F without stopping — but on <b>4F you stop deliberately</b> on one of the two cracked tiles on the north side, so you fall through to the part of 3F you could not otherwise reach. Then climb to 5F and take the north-east stairs."},
 {t:"<b>Save</b>, then catch <b>Rayquaza</b> at the apex", sub:"<b>Lv 70 — the highest-level Pokémon in the game before the credits.</b> Bring several dozen Timer Balls if you are keeping the Master Ball for a roaming Latios or Latias, and be careful with Ice moves: Dragon/Flying takes 4× and you want it alive."}
]],
["boss",{name:"Archie", role:"Team Aqua Leader · Water", badge:"Seafloor Cavern", team:[
 {m:"Mightyena", l:41, t:["Dark"], note:"<b>Intimidate</b>, Roar, Swagger. Swagger confuses you while raising your Attack — a real risk on a physical lead."},
 {m:"Crobat", l:41, t:["Poison","Flying"], note:"Fast, with Confuse Ray and Air Cutter. The same problem it was for Maxie."},
 {m:"Sharpedo", l:43, t:["Water","Dark"], note:"<b>Rough Skin</b> chips you 1/16 every time you hit it with a contact move. Frail — 70 HP and 40 Defence."}
], plan:[
 "<b>Kill Sharpedo with a special move.</b> Thunderbolt is 4× on Water/Dark and never touches Rough Skin. A physical hit works too but you pay for it.",
 "<b>Lead special to ignore Intimidate.</b> Manectric or Gardevoir come in at full power.",
 "<b>Swagger is the loss condition.</b> A confused physical attacker at +2 hits itself for enormous damage. Lead something special and Swagger does almost nothing.",
 "Crobat again outspeeds everything. Remove it early with Electric, Ice or Rock rather than trading turns through Confuse Ray."
], reward:"Kyogre is loose, the weather breaks, and the plot moves to Sootopolis."}],
["boss",{name:"Juan", role:"Gym Leader · Water", badge:"Rain Badge", team:[
 {m:"Luvdisc", l:41, t:["Water"], note:"<b>Swift Swim</b>. Attract and Sweet Kiss — it is here to waste your turns, not to damage you."},
 {m:"Whiscash", l:41, t:["Water","Ground"], note:"<b>It sets Rain Dance</b>, which doubles the Speed of both Swift Swim members. Earthquake hurts. Grass is 4× on it."},
 {m:"Sealeo", l:43, t:["Ice","Water"], note:"Thick Fat. Encore locks you into your last move. Aurora Beam and Body Slam."},
 {m:"Crawdaunt", l:43, t:["Water","Dark"], note:"Hyper Cutter. <b>Crabhammer has a high crit rate.</b> Grass and Electric are both 4× on it."},
 {m:"Kingdra", l:46, t:["Water","Dragon"], note:"Holds a <b>Chesto Berry</b> and carries <b>Rest</b> — it will heal to full and wake immediately, once. <b>Swift Swim</b> in the rain Whiscash set. Water/Dragon resists Water, Fire, Grass and Electric; <b>only Dragon and Ice hurt it</b>."}
], plan:[
 "<b>Kill Whiscash early to break the rain.</b> Under rain both Luvdisc and Kingdra double their Speed and outrun everything you own. Grass is 4× on Whiscash — a Breloom or Ludicolo ends it in one.",
 "<b>Kingdra is the fight.</b> Water/Dragon resists Water, Fire, Grass <i>and</i> Electric. <b>Ice Beam is your answer</b>, or a Dragon move if you raised an Altaria or Flygon.",
 "<b>Kingdra's Chesto Berry makes its first Rest a full heal with no sleep.</b> Plan for it to happen once and have the damage to get through twice.",
 "Electric is 4× on Crawdaunt and 2× on Luvdisc and Sealeo. Manectric with Thunderbolt clears three of the five.",
 "<b>Do not bring a Water type as your main damage.</b> Every one of his five resists Water, and Kingdra resists it twice over.",
 "Attract from Luvdisc will lock a same-gender-opposite lead out of acting. Lead something female or genderless, or carry a Persim."
], reward:"Rain Badge, <b>TM03 Water Pulse</b>, Waterfall usable in the field, and every traded Pokémon now obeys."}],
["h","Worth catching now"],
["catch",[
 {n:"Rayquaza", t:["Dragon","Flying"], where:"<b>Sky Pillar top — Lv 70, after the Sootopolis event</b>", why:"<b>The only one of the three ancient Pokémon catchable before the Hall of Fame.</b> Its ability is <b>Air Lock</b>, which cancels all weather — which is exactly what makes it the counter to Groudon and Kyogre later. Catch it now: it makes the Elite Four easier and the weather-trio catches far easier."},
 {n:"Clamperl", t:["Water"], where:"Underwater, Routes 124–126", why:"Dive down and catch several. Huntail and Gorebyss are both trade evolutions off it with different held items, and both are required dex entries."},
 {n:"Relicanth", t:["Water","Rock"], where:"Underwater, Routes 124 and 126", why:"<b>Required for the Regi puzzle.</b> If you have not got one yet, get one before you leave the sea."},
 {n:"Luvdisc", t:["Water"], where:"Routes 128 and 132–134 — Super Rod", why:"A required dex entry, and it sometimes holds a <b>Heart Scale</b>. Catch a few with Thief if you are short of scales."},
 {n:"Corsola", t:["Water","Rock"], where:"Routes 128 and 129 — Super Rod, rare", why:"Uncommon and easy to forget. A required dex entry with no alternative location."}
]],
["warn","<b>Go back for Rayquaza before the Elite Four, not after.</b> The Sky Pillar's floors are cracked on the second visit and need the Mach Bike — ride across without stopping or you fall through. A level-70 Dragon/Flying with Air Lock trivialises Drake and makes catching Groudon and Kyogre straightforward instead of miserable."]
]});
