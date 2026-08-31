/* ===================== TEAM PLANNER POOL =====================
   What Emerald actually gives you: everything raisable in a normal run,
   plus the catchable legendaries. Types are Generation III types. */
const POOL = [
["Swampert",["Water","Ground"]],["Blaziken",["Fire","Fighting"]],["Sceptile",["Grass"]],
["Gardevoir",["Psychic"]],["Breloom",["Grass","Fighting"]],["Hariyama",["Fighting"]],
["Aggron",["Steel","Rock"]],["Manectric",["Electric"]],["Swellow",["Normal","Flying"]],
["Camerupt",["Fire","Ground"]],["Torkoal",["Fire"]],["Ninetales",["Fire"]],
["Flygon",["Ground","Dragon"]],["Salamence",["Dragon","Flying"]],["Altaria",["Dragon","Flying"]],
["Metagross",["Steel","Psychic"]],["Skarmory",["Steel","Flying"]],["Magneton",["Electric","Steel"]],
["Mawile",["Steel"]],["Milotic",["Water"]],["Ludicolo",["Water","Grass"]],
["Walrein",["Ice","Water"]],["Glalie",["Ice"]],["Sharpedo",["Water","Dark"]],
["Crawdaunt",["Water","Dark"]],["Gyarados",["Water","Flying"]],["Tentacruel",["Water","Poison"]],
["Wailord",["Water"]],["Pelipper",["Water","Flying"]],["Whiscash",["Water","Ground"]],
["Absol",["Dark"]],["Mightyena",["Dark"]],["Cacturne",["Grass","Dark"]],["Shiftry",["Grass","Dark"]],
["Banette",["Ghost"]],["Dusclops",["Ghost"]],["Sableye",["Dark","Ghost"]],["Shedinja",["Bug","Ghost"]],
["Ninjask",["Bug","Flying"]],["Heracross",["Bug","Fighting"]],["Vileplume",["Grass","Poison"]],
["Bellossom",["Grass"]],["Exploud",["Normal"]],["Slaking",["Normal"]],["Linoone",["Normal"]],
["Delcatty",["Normal"]],["Kirlia",["Psychic"]],["Claydol",["Ground","Psychic"]],
["Solrock",["Rock","Psychic"]],["Grumpig",["Psychic"]],["Xatu",["Psychic","Flying"]],
["Sandslash",["Ground"]],["Donphan",["Ground"]],["Rhydon",["Ground","Rock"]],
["Cradily",["Rock","Grass"]],["Armaldo",["Rock","Bug"]],["Aerodactyl",["Rock","Flying"]],
["Golbat",["Poison","Flying"]],["Crobat",["Poison","Flying"]],["Swalot",["Poison"]],
["Weezing",["Poison"]],["Muk",["Poison"]],["Seviper",["Poison"]],["Kecleon",["Normal"]],
["Castform",["Normal"]],["Tropius",["Grass","Flying"]],["Machamp",["Fighting"]],
["Kadabra",["Psychic"]],["Alakazam",["Psychic"]],["Golem",["Rock","Ground"]],
["Kingdra",["Water","Dragon"]],["Huntail",["Water"]],["Gorebyss",["Water"]],
["Lanturn",["Water","Electric"]],["Starmie",["Water","Psychic"]],["Magcargo",["Fire","Rock"]],
["Pinsir",["Bug"]],["Shuckle",["Bug","Rock"]],["Houndoom",["Dark","Fire"]],["Miltank",["Normal"]],
["Raichu",["Electric"]],["Wobbuffet",["Psychic"]],["Girafarig",["Normal","Psychic"]],
["Rayquaza",["Dragon","Flying"]],["Groudon",["Ground"]],["Kyogre",["Water"]],
["Regirock",["Rock"]],["Regice",["Ice"]],["Registeel",["Steel"]],
["Latias",["Dragon","Psychic"]],["Latios",["Dragon","Psychic"]]
];

/* ===================== STARTER SELECT + BOOT ===================== */
(function(){
  const sp = document.getElementById('starterpick');
  sp.innerHTML = Object.keys(STARTERS).map(k =>
    '<option value="' + k + '"' + (k === STARTER ? ' selected' : '') + '>Starter · ' + STARTERS[k].base + '</option>').join('');
  sp.addEventListener('change', e => setStarter(e.target.value));
  boot();
})();
