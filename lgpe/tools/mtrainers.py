import re, json
t = open('research/bb/Master Trainer.wiki', encoding='utf-8').read()

def cl(s):
    s = re.sub(r'\{\{rt\|([^|}]*)\|[^}]*\}\}', r'Route \1', s)
    s = re.sub(r'\{\{mcolor\|([^|}]*)\|[^}]*\}\}', r'\1', s)
    s = re.sub(r'\{\{MSP/PE\|[^|}]*\|([^|}]*)\}\}', r'\1', s)
    s = re.sub(r'\{\{(?:tc|p|m|i|ga|DL|OBP)\|([^|}]*)\|?([^|}]*)\}\}', lambda m: (m.group(2) or m.group(1)), s)
    s = re.sub(r'\{\{[^{}]*\}\}', '', s)
    s = re.sub(r'\[\[[^]|]*\|([^]]*)\]\]', r'\1', s)
    s = s.replace('[[','').replace(']]','')
    s = re.sub(r'^\s*(?:class="[^"]*"\s*)?(?:style="[^"]*";?\s*)?\|?', '', s)
    s = s.replace('}}','')
    s = re.sub(r'\s+', ' ', s)
    return s.strip(' |')

def table(sec):
    rows, cur = [], []
    for line in sec.split('\n'):
        if line.startswith('|-'):
            if cur: rows.append(cur)
            cur = []
        elif line.startswith('|') or line.startswith('!'):
            cur.append(line[1:])
    if cur: rows.append(cur)
    return rows

out = []
for r in table(t.split('===Battles===')[1].split('===Other Trainers===')[0]):
    if len(r) < 5: continue
    trainer, loc, mon, lv = cl(r[0]), cl(r[1]), cl(r[3]), cl(r[4]).replace('Lv. ','')
    moves = [m for m in (cl(x) for x in r[5:9]) if m and m != '-']
    if mon and lv.isdigit(): out.append({'trainer':trainer,'loc':loc,'mon':mon,'lv':int(lv),'moves':moves})
other = []
for r in table(t.split('===Other Trainers===')[1].split('===Red===')[0]):
    if len(r) < 3: continue
    vals = [cl(x) for x in r]
    other.append(vals)
json.dump({'battles': out, 'other': other}, open('research/master_trainers.json','w'), indent=1)
print(len(out), 'battle master trainers;', len(other), 'other rows')
for x in out[:4]: print(' ', x)
for x in other[:4]: print(' O', x)
