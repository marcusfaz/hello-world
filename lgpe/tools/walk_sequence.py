"""The order Bulbapedia's own walkthrough walks Kanto in, including back-tracks.
   Top-level headings are routes and towns; the dungeons only appear as
   sub-headings, and several headings carry a trailing HTML comment."""
import re, json, glob, os
SUB = re.compile(r'^(Viridian Forest|Mt\. Moon|Rock Tunnel|Pokémon Tower|Rocket Hideout|'
                 r'Team Rocket Hideout|Silph Co\.|Fighting Dojo|Safari Zone|GO Park complex|'
                 r'Seafoam Islands|Pokémon Mansion|Cinnabar Lab|Victory Road|Cerulean Cave|'
                 r"Diglett's Cave|S\.S\. Anne|Power Plant|Pokémon Road|"
                 r'(?:Pewter|Cerulean|Vermilion|Celadon|Fuchsia|Saffron|Cinnabar|Viridian) Gym)$')
seq = []
for f in sorted(glob.glob(os.path.join(os.path.dirname(__file__), '..', 'research', 'bb', 'walk*.wiki'))):
    for line in open(f, encoding='utf-8'):
        line = re.sub(r'<!--.*$', '', line.rstrip())          # strip trailing comments first
        m = re.match(r'^(={2,4})([^=].*?)\1\s*$', line)
        if not m: continue
        name = re.sub(r'\s*\(.*?\)\s*$', '', m.group(2).strip()).strip()
        if len(m.group(1)) == 2:
            if name == 'Introduction': continue
            seq.append(name)
        elif SUB.match(name):
            seq.append('Team Rocket Hideout' if name == 'Rocket Hideout' else name)
out = []
for p in seq:
    if not out or out[-1] != p: out.append(p)
json.dump(out, open(os.path.join(os.path.dirname(__file__), '..', 'research', 'walk_sequence.json'),
                    'w', encoding='utf-8'), indent=1, ensure_ascii=False)
print(len(out), 'stops')
print(' → '.join(out))
