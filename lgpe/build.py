#!/usr/bin/env python3
"""Assemble the Let's Go, Pikachu! guide from source parts into one self-contained HTML file."""
import os, sys, subprocess, json

ROOT  = os.path.dirname(os.path.abspath(__file__))
PARTS = os.path.join(ROOT, 'parts')
OUT   = os.path.join(ROOT, 'lets-go-pikachu-guide.html')

# order matters: markup, then the data blob, then the engine, then content, then widgets+boot
ORDER = [
    ('html', '00-head.html'),
    ('html', '05-shell.html'),
    ('js',   '10-img.js'),
    ('js',   '20-engine.js'),
    ('js',   '30-chapters.js'),
    ('js',   '40-stages-a.js'),
    ('js',   '41-stages-b.js'),
    ('js',   '42-stages-c.js'),
    ('js',   '43-stages-post.js'),
    ('js',   '50-dex.js'),
    ('js',   '60-ref.js'),
    ('js',   '70-roster-engine.js'),
    ('js',   '71-rosters.js'),
    ('js',   '72-roster-render.js'),
    ('js',   '80-refdata.js'),
    ('js',   '90-widgets.js'),
    ('js',   '99-boot.js'),
]

def build():
    out = []
    for kind, name in ORDER:
        p = os.path.join(PARTS, name)
        if not os.path.exists(p):
            print('  (skip missing %s)' % name); continue
        body = open(p, encoding='utf-8').read()
        if kind == 'html':
            out.append(body)
        else:
            out.append('<script>\n' + body.rstrip() + '\n</script>\n')
    html = ''.join(out)
    open(OUT, 'w', encoding='utf-8').write(html)
    return html

def check_js():
    """Parse every JS part with node so a syntax slip fails the build, not the browser."""
    bad = 0
    for kind, name in ORDER:
        if kind != 'js': continue
        p = os.path.join(PARTS, name)
        if not os.path.exists(p): continue
        r = subprocess.run(['node', '--check', p], capture_output=True, text=True)
        if r.returncode:
            bad += 1
            print('SYNTAX ERROR in %s:\n%s' % (name, r.stderr.strip()[:900]))
    return bad

if __name__ == '__main__':
    bad = check_js()
    if bad:
        print('\n%d part(s) failed to parse — not writing output.' % bad)
        sys.exit(1)
    html = build()
    print('built %s  —  %.2f MB' % (os.path.basename(OUT), len(html.encode())/1e6))
