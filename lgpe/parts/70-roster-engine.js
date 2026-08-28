/* ===================== PARTY CONTINUITY =====================
   Each roster lists only the Pokémon worth *talking about* at that stage.
   Anything already in the party that is not mentioned is carried forward
   automatically, so a member can never vanish silently. Departures are
   declared in OUT below, which is what keeps the ledger honest at six.
   ============================================================ */
const FAMILY = [
  ["Bulbasaur","Ivysaur","Venusaur"],["Charmander","Charmeleon","Charizard"],
  ["Squirtle","Wartortle","Blastoise"],["Pidgey","Pidgeotto","Pidgeot"],
  ["Caterpie","Metapod","Butterfree"],["Rattata","Raticate"],
  ["Oddish","Gloom","Vileplume"],["Nidoran♀","Nidorina","Nidoqueen"],
  ["Nidoran♂","Nidorino","Nidoking"],["Diglett","Dugtrio"],["Mankey","Primeape"],
  ["Growlithe","Arcanine"],["Machop","Machoke","Machamp"],["Geodude","Graveler","Golem"],
  ["Abra","Kadabra","Alakazam"],["Zubat","Golbat"],["Sandshrew","Sandslash"],
  ["Alolan Sandshrew","Alolan Sandslash"],["Alolan Grimer","Alolan Muk"],
  ["Magikarp","Gyarados"],["Staryu","Starmie"],["Slowpoke","Slowbro"],
  ["Seel","Dewgong"],["Shellder","Cloyster"],["Krabby","Kingler"],
  ["Cubone","Marowak"],["Horsea","Seadra"],["Ekans","Arbok"],["Gastly","Haunter","Gengar"],
  ["Dratini","Dragonair","Dragonite"],["Magnemite","Magneton"],["Voltorb","Electrode"],
  ["Poliwag","Poliwhirl","Poliwrath"],["Psyduck","Golduck"],["Doduo","Dodrio"],
  ["Venonat","Venomoth"],["Exeggcute","Exeggutor"],["Tentacool","Tentacruel"],
  ["Ponyta","Rapidash"],["Kabuto","Kabutops"],["Omanyte","Omastar"],["Meowth","Persian"],
  ["Spearow","Fearow"],["Jigglypuff","Wigglytuff"],["Clefairy","Clefable"],
  ["Paras","Parasect"],["Weedle","Kakuna","Beedrill"],["Goldeen","Seaking"],
  ["Eevee","Vaporeon","Jolteon","Flareon"],["Grimer","Muk"],["Koffing","Weezing"],
  ["Rhyhorn","Rhydon"],["Drowzee","Hypno"],["Bellsprout","Weepinbell","Victreebel"]
];
function sameMon(a, b){
  if (a === b) return true;
  return FAMILY.some(f => f.indexOf(a) !== -1 && f.indexOf(b) !== -1);
}

/* stageId -> [names leaving the party here], optionally "Name>Replacement" */
const OUT = {};
function OUTS(id, list){ OUT[id] = list; }

/* Built once: stageId -> {slots:[...]} */
let FLOW = {};
function buildFlow(){
  FLOW = {};
  let party = [];
  STAGES.forEach(st => {
    const r = ROSTERS[st.id];
    if (!r) return;
    const authored = r.slots;

    /* 1. anything authored replaces / updates its family member in the party */
    const seen = [];
    authored.forEach(sl => {
      const n = sl.n;
      seen.push(n);
      const i = party.findIndex(m => sameMon(m.name, n));
      const entry = {name:n, role:sl.role, w:sl.w, types:(sl.t || []), st:sl.st,
                     forName:sl.forName, replaces:sl.replaces, carried:false};
      if (i >= 0) party[i] = entry; else party.push(entry);
    });

    /* 2. carry forward everything else, keeping its last description */
    party.filter(m => !seen.some(n => sameMon(n, m.name))).forEach(m => {
      m.st = "keep";
      m.carried = false;
      m.forName = null; m.replaces = null;
    });

    /* 3. remove declared departures */
    (OUT[st.id] || []).map(x => x.split(">")).forEach(pair => {
      const i = party.findIndex(m => sameMon(m.name, pair[0]));
      if (i >= 0){
        party[i].st = "swap";
        party[i].forName = pair[1] || party[i].forName || null;
      }
    });

    /* 4. slot order: authored first, then carried, then leavers last */
    const order = [];
    authored.forEach(sl => {
      const m = party.find(x => sameMon(x.name, sl.n));
      if (m && order.indexOf(m) === -1) order.push(m);
    });
    party.forEach(m => { if (order.indexOf(m) === -1) order.push(m); });
    const rank = {add:0, keep:1, sit:2, swap:3};
    order.sort((a, b) => (rank[a.st] === undefined ? 1 : rank[a.st]) - (rank[b.st] === undefined ? 1 : rank[b.st]));

    FLOW[st.id] = {slots: order.slice()};

    /* 5. the party that walks into the next stage */
    party = party.filter(m => m.st !== "swap").map(m => Object.assign({}, m));
  });
}

const ROSTERS = {};
function R(id, o){ ROSTERS[id] = o; }
/* slot: n name, t types, role, st add|keep|sit|swap, w why.
   "sit" means still in the party but deliberately kept out of this stage's fight. */
