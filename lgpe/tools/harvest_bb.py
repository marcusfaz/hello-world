import sys, os, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fetch import wikitext
from concurrent.futures import ThreadPoolExecutor
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT  = os.path.join(ROOT, 'research', 'bb')
os.makedirs(OUT, exist_ok=True)

PAGES = [
 # leaders / bosses
 "Brock","Misty","Lt. Surge","Erika","Koga","Sabrina","Blaine","Giovanni",
 "Lorelei","Bruno","Agatha","Lance","Blue (game)","Trace",
 "Pewter Gym","Cerulean Gym","Vermilion Gym","Celadon Gym","Fuchsia Gym",
 "Saffron Gym","Cinnabar Gym","Viridian Gym","Indigo Plateau",
 # systems
 "Catch Combo","Awakening value","Secret Technique","Partner Pikachu",
 "Master Trainer","GO Park Complex","Meltan (Pokémon)","Melmetal (Pokémon)",
 "Mega Evolution","Bottle Cap","Candy","Friendship","Alolan form",
 "Type","Type/Type chart","Pikachu (Pokémon)","Move Tutor","Rare Candy",
 "Pokémon Box","Chansey (Pokémon)",
 # places / walkthrough
 "Appendix:Let's Go, Pikachu! and Let's Go, Eevee! walkthrough",
 "Kanto Route 1","Kanto Route 2","Kanto Route 3","Kanto Route 4","Kanto Route 5",
 "Kanto Route 6","Kanto Route 7","Kanto Route 8","Kanto Route 9","Kanto Route 10",
 "Kanto Route 11","Kanto Route 12","Kanto Route 13","Kanto Route 14","Kanto Route 15",
 "Kanto Route 16","Kanto Route 17","Kanto Route 18","Kanto Route 19","Kanto Route 20",
 "Kanto Route 21","Kanto Route 22","Kanto Route 23","Kanto Route 24","Kanto Route 25",
 "Viridian Forest","Mt. Moon","Rock Tunnel","Pokémon Tower","Safari Zone",
 "Seafoam Islands","Pokémon Mansion","Victory Road (Kanto)","Cerulean Cave",
 "Kanto Power Plant","Diglett's Cave","Silph Co.","Rocket Hideout",
 "Pallet Town","Viridian City","Pewter City","Cerulean City","Vermilion City",
 "Lavender Town","Celadon City","Fuchsia City","Saffron City","Cinnabar Island",
 "Pokémon Road","Celadon Game Corner","Pokémon League (Kanto)",
]

def one(p):
    try:
        w = wikitext(p)
        open(os.path.join(OUT, p.replace('/', '_') + '.wiki'), 'w').write(w)
        return (p, len(w))
    except Exception as e:
        return (p, 'ERR ' + str(e)[:90])

if __name__ == '__main__':
    with ThreadPoolExecutor(max_workers=4) as ex:
        for p, n in ex.map(one, PAGES):
            if isinstance(n, str): print(p, '->', n)
    print('done', len(os.listdir(OUT)), 'files')
