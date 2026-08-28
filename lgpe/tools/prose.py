import re, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from clean import clean
for f in sys.argv[1:]:
    t = open(f, encoding='utf-8').read()
    t = re.sub(r'\{\{Party.*?\n\}\}', '', t, flags=re.S)
    t = re.sub(r'\{\{Trainerentry.*?\}\}\s*$', '', t, flags=re.M)
    t = re.sub(r'\{\{Catch/.*?\}\}\s*$', '', t, flags=re.M)
    t = re.sub(r'\{\{Itemlist.*?\}\}\s*$', '', t, flags=re.M)
    t = re.sub(r'\{\{(?:Walkthrough|tutormv|Mapgen|Pokémon)\b.*?\n\}\}', '', t, flags=re.S)
    print('\n@@@@@@@@@@ ' + os.path.basename(f) + ' @@@@@@@@@@')
    print(re.sub(r'\n{2,}', '\n', clean(t)))
