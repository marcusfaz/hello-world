/* ===================== STARTER-AWARE ROSTERS ===================== */
const STARTERS = {
  mudkip:  {base:"Mudkip",  mid:"Marshtomp", final:"Swampert", t:["Water","Ground"],
            evo:"Marshtomp at 16, Swampert at 36", rival:"Treecko"},
  torchic: {base:"Torchic", mid:"Combusken", final:"Blaziken", t:["Fire","Fighting"],
            evo:"Combusken at 16, Blaziken at 36", rival:"Mudkip"},
  treecko: {base:"Treecko", mid:"Grovyle",   final:"Sceptile", t:["Grass"],
            evo:"Grovyle at 16, Sceptile at 36", rival:"Torchic"}
};
let STARTER = "mudkip";
try { STARTER = localStorage.getItem(KEY + ":starter") || "mudkip"; } catch (e) {}
if (!STARTERS[STARTER]) STARTER = "mudkip";
