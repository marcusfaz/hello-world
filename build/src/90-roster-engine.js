
/* ===================== PARTY CONTINUITY =====================
   Each roster lists the Pokemon worth *talking about* at that stage.
   Anything already in the party that is not mentioned is carried
   forward automatically, so a member can never vanish silently.
   Departures must be declared in OUT below.                        */
const FAMILY = [
  ["Mudkip","Marshtomp","Swampert"],["Torchic","Combusken","Blaziken"],
  ["Treecko","Grovyle","Sceptile"],["Ralts","Kirlia","Gardevoir"],
  ["Taillow","Swellow"],["Aron","Lairon","Aggron"],["Shroomish","Breloom"],
  ["Electrike","Manectric"],["Numel","Camerupt"],["Zigzagoon","Linoone"],
  ["Poochyena","Mightyena"],["Makuhita","Hariyama"],["Trapinch","Vibrava","Flygon"],
  ["Slugma","Magcargo"],["Whismur","Loudred","Exploud"],["Nincada","Ninjask"],
  ["Carvanha","Sharpedo"],["Wailmer","Wailord"],["Bagon","Shelgon","Salamence"],
  ["Beldum","Metang","Metagross"],["Swablu","Altaria"],["Spheal","Sealeo","Walrein"],
  ["Shuppet","Banette"],["Duskull","Dusclops"],["Abra","Kadabra"],["Lotad","Lombre","Ludicolo"],
  ["Magnemite","Magneton"],["Feebas","Milotic"],["Snorunt","Glalie"],["Lileep","Cradily"]
];
function sameMon(a, b){
  if (a === b) return true;
  return FAMILY.some(f => f.indexOf(a) !== -1 && f.indexOf(b) !== -1);
}

/* stageId -> [names leaving the party here], optionally "Name>Replacement" */
const OUT = {};
function OUTS(id, list){ OUT[id] = list; }

/* Built per starter: stageId -> {slots:[...], party:[names]} */
let FLOW = {};
function buildFlow(){
  const S = STARTERS[STARTER];
  FLOW = {};
  let party = [];            // [{name, role, w, types}]
  STAGES.forEach(st => {
    const r = ROSTERS[st.id];
    if (!r) return;
    const nm = (r.form && S[r.form]) ? S[r.form] : S.final;
    const nameOf = sl => sl.n === "%S%" ? nm : sl.n;
    const authored = r.slots.filter(sl => !sl.only || sl.only.indexOf(STARTER) !== -1);

    /* 1. anything authored replaces / updates its family member in the party */
    const seen = [];
    authored.forEach(sl => {
      const n = nameOf(sl);
      seen.push(n);
      const i = party.findIndex(m => sameMon(m.name, n));
      const entry = {name:n, role:sl.role, w:sl.w, types: sl.n === "%S%" ? S.t : (sl.t || []),
                     st:sl.st, forName:sl.forName, replaces:sl.replaces, isStarter: sl.n === "%S%",
                     carried:false};
      if (i >= 0) party[i] = entry; else party.push(entry);
    });

    /* 2. carry forward everything else, marked keep, keeping its last description */
    const carried = party.filter(m => !seen.some(n => sameMon(n, m.name)));
    carried.forEach(m => {
      const resting = (m.st === "bench" || m.st === "box");
      m.st = resting ? m.st : "keep";
      m.carried = resting;          /* already out of the party: do not re-announce it */
      m.forName = null; m.replaces = null;
    });

    /* 3. remove declared departures */
    const outs = (OUT[st.id] || []).map(x => x.split(">"));
    outs.forEach(pair => {
      const leaving = pair[0] === "%S%" ? nm : pair[0];
      const i = party.findIndex(m => sameMon(m.name, leaving));
      if (i >= 0){
        party[i].st = "swap";
        party[i].forName = pair[1] || party[i].forName || null;
      }
    });

    /* 4. slot order: authored first, then carried, then leavers last */
    const order = [];
    authored.forEach(sl => {
      const n = nameOf(sl);
      const m = party.find(x => sameMon(x.name, n));
      if (m && order.indexOf(m) === -1) order.push(m);
    });
    party.forEach(m => { if (order.indexOf(m) === -1) order.push(m); });
    const rank = {add:0, keep:1, bench:2, swap:3};
    order.sort((a, b) => (rank[a.st] === undefined ? 1 : rank[a.st]) - (rank[b.st] === undefined ? 1 : rank[b.st]));

    FLOW[st.id] = {slots: order.slice()};

    /* 5. the party that walks into the next stage */
    party = party.filter(m => m.st !== "swap").map(m => Object.assign({}, m));
  });
}


const ROSTERS = {};
function R(id, o){ ROSTERS[id] = o; }
/* slot: n name (%S% = starter), t types, role, st add|keep|swap|bench|box, w why, only [starters] */
