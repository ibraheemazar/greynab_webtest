# GREYNAB Creative Studios — Website

A Next.js 15 + React 19 + TypeScript + Tailwind website built per the v2.1 rebuild plan.

## What's in this build (Phase A)

- ✅ All 9 page routes scaffolded (/, /work, /work/[slug], /services, /services/[slug], /about, /insights, /contact, /careers)
- ✅ **Brief Builder** — fully working 5-step lead capture, logs to Vercel function logs
- ✅ **G Character** — 3D mesh in Three.js + React Three Fiber on the homepage hero
- ✅ Custom green cursor with chasing ring
- ✅ Smooth scroll (Lenis)
- ✅ Vercel Analytics wired
- ✅ All your real assets (logos, hero images, work thumbnails, service collages)
- ✅ Brand tokens per §7 of the brief (colors, typography, motion easing)
- ✅ Sanity CMS schemas defined (Phase A.2 wires them up)

## Phases ahead (next conversations)

- **Phase B**: Case-study scroll-driven film template, full work index filtering, service detail pages with full content
- **Phase C**: WebGL typographic hero, capability quiz, sound design, Lab subdomain
- **Phase D**: Content fill, accessibility audit, soft launch

## Deploy to Vercel (one-time, 5 minutes)

### Step 1 — Upload to GitHub
1. Go to your existing `greynab-website` repo
2. Click the green **"Add file"** → **"Upload files"** button
3. Drag everything in THIS folder (the whole project) into the upload area
4. Commit message: "Phase A — Next.js rebuild"
5. Click **Commit changes**

### Step 2 — Connect Vercel
1. Go to https://vercel.com/new
2. Find `greynab-website` in the list, click **Import**
3. Vercel auto-detects Next.js. Don't change any settings.
4. Click **Deploy**
5. Wait ~2 minutes for the first build

You'll get a live URL like `greynab-website-xxx.vercel.app`.

### Step 3 — Verify it works
- Open the URL
- Scroll the homepage. The G character should render in 3D on the right.
- Click "Start a brief" — the modal should open, 5 steps should work, submission shows success
- Check the Vercel function logs (Vercel dashboard → your project → Logs) to see the brief data

## Local development (optional)

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Environment variables (when ready)

For Phase A.2 — wire the Brief Builder to real services:

```
RESEND_API_KEY=your_resend_key       # Email confirmations
SLACK_WEBHOOK_URL=your_slack_webhook  # Real-time team alerts
HUBSPOT_API_KEY=your_hubspot_key     # CRM lead storage
SANITY_PROJECT_ID=your_project_id    # CMS
SANITY_DATASET=production
```

Add these in Vercel → Settings → Environment Variables, then redeploy.

## Folder structure

```
greynab-website/
├── app/
│   ├── layout.tsx           Root layout (nav, cursor, smooth scroll, brief builder)
│   ├── page.tsx             Homepage
│   ├── globals.css          Brand tokens, animations
│   ├── api/brief/route.ts   Brief Builder submission endpoint
│   ├── work/                Work index + dynamic case study routes
│   ├── services/            Services index + dynamic service routes
│   ├── about/, insights/, contact/, careers/
├── components/
│   ├── BriefBuilder.tsx     The 5-step lead capture (#1 deliverable per brief §2)
│   ├── BriefBuilderProvider.tsx  Global state for opening from anywhere
│   ├── GCharacter.tsx       3D Greynab G mesh (the signature element)
│   ├── Cursor.tsx           Custom green cursor
│   ├── SmoothScroll.tsx     Lenis wrapper
│   ├── Nav.tsx
│   ├── Footer.tsx
├── lib/sanity.ts            Sanity CMS client (stub for now)
├── sanity/schemas/          CMS content models (Work, Service, Insight)
├── public/assets/           Brand assets, logos, work thumbnails, service icons
├── tailwind.config.ts       Brand tokens (colors, typography, motion)
├── package.json
```

## Tech stack (per brief §6)

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **3D**: Three.js + React Three Fiber + Drei
- **Animation**: Framer Motion
- **Smooth scroll**: Lenis
- **Fonts**: Fraunces (display) + Inter (sans) + JetBrains Mono — all via next/font
- **Analytics**: Vercel Analytics
- **CMS (Phase A.2)**: Sanity

## What to ask Claude next (Phase B candidates)

- "Build the case-study scroll-driven film template"
- "Wire up Sanity CMS with content from these 47 case studies"
- "Add capability filtering to the Work index"
- "Build the Capability Quiz on the homepage"
- "Wire Resend/Slack for real Brief Builder emails"
