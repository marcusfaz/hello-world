import re, sys
def clean(t):
    t = re.sub(r'\{\|.*?\n\|\}', '', t, flags=re.S)           # tables
    t = re.sub(r'<!--.*?-->', '', t, flags=re.S)
    t = re.sub(r'\{\{tt\|([^|}]*)\|[^}]*\}\}', r'\1', t)
    t = re.sub(r'\{\{(?:p|m|i|DL|TM|HM|ga|ka|tc|rt|si|OBP|key|badge|color2|sup/7|v2|LGPE|player|pkmn|type)\|([^|}]*)\|([^|}]*)\}\}', r'\2', t)
    t = re.sub(r'\{\{(?:p|m|i|DL|TM|HM|ga|ka|tc|rt|si|OBP|key|badge|player|pkmn|type|PDollar|shiny)\|?([^|}]*)\}\}', r'\1', t)
    t = re.sub(r'\{\{[^{}]*\}\}', '', t)
    t = re.sub(r'\[\[[^]|]*\|([^]]*)\]\]', r'\1', t)
    t = re.sub(r'\[\[([^]]*)\]\]', r'\1', t)
    t = re.sub(r"'''?", '', t)
    t = re.sub(r'<ref[^>]*>.*?</ref>', '', t, flags=re.S)
    t = re.sub(r'<[^>]+>', '', t)
    t = re.sub(r'\n{3,}', '\n\n', t)
    return t
if __name__ == '__main__':
    for f in sys.argv[1:]:
        print(clean(open(f, encoding='utf-8').read()))
