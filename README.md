# GREYNAB — v4 preview

## Quick view (works but limited)
Double-click `index.html`. You'll see the whole site, including the floating sticker collages in the final "Let's work together!" section as CSS-animated stickers.

**What you won't get with double-click:** The full WebGL 3D scene with mouse-parallax depth, twinkling diamonds, and camera follow. Browsers block local file image loading for security, so the Three.js textures can't load over `file://`.

## Full view (recommended — see the real 3D experience)

### Option A — Use the included start script (Mac/Linux)
```
bash start.sh
```
Then open http://localhost:8000

### Option B — Manual Python server
Open a terminal in this folder and run:
```
python3 -m http.server 8000
```
Then open http://localhost:8000

### Option C — VS Code "Live Server" extension
Right-click `index.html` → "Open with Live Server"

### Option D — Just deploy it
Drag this whole folder into https://vercel.com or https://netlify.com (both free) and you'll get a real URL in 30 seconds. The site will work properly there.

## What's in this folder
- `index.html` — the full site
- `assets/` — all your Greynab brand files (collages, client logos, hero images, case-study thumbnails)
- `start.sh` — one-command local server launcher

## Where to look
- **Top of page** — the "Bold Ideas, Brought to Life" hero (Lusion-style massive type)
- **Middle** — featured work in the 2-column Lusion layout
- **Bottom black section** — the floating sticker scene with all 5 of your collages (the vaulting woman with VHS, dancer with vinyl, typewriter hands, Venus statue, cameraman, etc.)
