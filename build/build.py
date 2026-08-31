#!/usr/bin/env python3
"""Assemble the single self-contained guide from src/ parts.

Order matters: assets, then the engine, then data (which pushes into CHAPTERS /
STAGES / ROSTERS), then the renderers and widgets, then boot.
"""
import os, re, sys

SRC = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'src')
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'emerald-guide.html')

ORDER = [
    ('00-head.html',      'raw'),
    ('10-shell.html',     'raw'),
    ('20-assets.js',      'js'),
    ('30-engine.js',      'js'),
    ('40-chapters.js',    'js'),
    ('41-core.js',        'js'),
    ('50-walk-a.js',      'js'),
    ('51-walk-b.js',      'js'),
    ('52-walk-c.js',      'js'),
    ('60-league.js',      'js'),
    ('70-post.js',        'js'),
    ('75-frontier.js',    'js'),
    ('80-dex.js',         'js'),
    ('85-ref.js',         'js'),
    ('89-starters.js',    'js'),
    ('90-roster-engine.js', 'js'),
    ('91-rosters.js',     'js'),
    ('93-roster-render.js', 'js'),
    ('95-widgets.js',     'js'),
    ('96-boot.js',        'js'),
]

def main():
    parts, missing = [], []
    for fn, kind in ORDER:
        p = os.path.join(SRC, fn)
        if not os.path.exists(p):
            missing.append(fn); continue
        body = open(p, encoding='utf-8').read().rstrip('\n')
        parts.append(body if kind == 'raw' else '<script>\n' + body + '\n</script>')
    if missing:
        print('missing source parts: %s' % missing, file=sys.stderr)
        return 1
    html = '\n'.join(parts) + '\n'
    open(OUT, 'w', encoding='utf-8').write(html)

    # Also emit the page as the Artifact publisher will actually serve it, so the
    # verifier and the audits test the shipped document rather than a bare fragment.
    # Without the doctype Chromium runs in quirks mode and <table> stops inheriting colour.
    wrapped = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'cache', 'wrapped.html')
    os.makedirs(os.path.dirname(wrapped), exist_ok=True)
    open(wrapped, 'w', encoding='utf-8').write(
        '<!doctype html>\n<html><head><meta charset="utf-8">'
        '<meta name="viewport" content="width=device-width,initial-scale=1">'
        '<style>:root{color-scheme:light dark}body{margin:0;background:#FAFAF8;'
        'font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}'
        '</style></head><body>\n' + html + '\n</body></html>\n')
    kb = len(html.encode()) / 1048576
    print('built %s  %.2f MB' % (os.path.relpath(OUT), kb))
    if kb > 15.5:
        print('!! over the 16 MB artifact ceiling', file=sys.stderr); return 1
    return 0

if __name__ == '__main__':
    sys.exit(main())
