#!/usr/bin/env python3
import json, sys
from parties import emerald_parties
PAGES = ["Roxanne","Brawly","Wattson","Flannery","Norman","Winona","Tate and Liza",
         "Juan","Sidney","Phoebe","Glacia","Drake","Wallace",
         "Steven Stone","Maxie","Archie","Wally","May (game)","Brendan (game)"]
out = {}
for p in PAGES:
    try:
        out[p] = emerald_parties(p)
        print('%-24s %d Emerald parties' % (p, len(out[p])), file=sys.stderr)
    except Exception as e:
        print('%-24s FAILED %s' % (p, e), file=sys.stderr)
        out[p] = []
json.dump(out, open('cache/bosses.json','w'), ensure_ascii=False, indent=1)
