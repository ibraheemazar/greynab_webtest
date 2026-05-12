#!/bin/bash
# GREYNAB local preview launcher
# This starts a tiny local web server so the 3D WebGL textures load properly
# (browsers block local file image loads for security, so we need this)

cd "$(dirname "$0")"

echo ""
echo "  ╔═══════════════════════════════════════════════╗"
echo "  ║                                               ║"
echo "  ║      GREYNAB local preview                    ║"
echo "  ║                                               ║"
echo "  ║      Open in browser:                         ║"
echo "  ║      → http://localhost:8000                  ║"
echo "  ║                                               ║"
echo "  ║      Stop server: Ctrl+C                      ║"
echo "  ║                                               ║"
echo "  ╚═══════════════════════════════════════════════╝"
echo ""

# Try Python 3 first (most common), fall back to Python 2
if command -v python3 &> /dev/null; then
  python3 -m http.server 8000
elif command -v python &> /dev/null; then
  python -m SimpleHTTPServer 8000
else
  echo "ERROR: Python not installed. Try:"
  echo "  brew install python   (Mac)"
  echo "  or just drag index.html into your browser — CSS fallbacks will still show."
fi
