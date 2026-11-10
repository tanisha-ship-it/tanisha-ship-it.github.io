# tanisharaghav.in

Tanisha Raghav's portfolio, rebuilt from the original Framer site as a plain
Next.js app. It exports to static HTML/CSS/JS, so it can be hosted anywhere.

## Run it

```bash
npm install
npm run dev
```

## Build and deploy

```bash
npm run build
```

This writes the finished site to `out/`. Upload that folder to any static host
(Netlify, Cloudflare Pages, GitHub Pages, S3, Vercel, …). Pages are emitted as
`about.html`, `emote.html` and so on; most hosts serve these at `/about`,
`/emote` automatically.

The butterfly counter on the homepage talks to Supabase directly from the
browser. Copy `.env.local.example` to `.env.local` and fill in the project URL
and anon key before building — they are baked into the build, so set the same
two variables in your host's build settings too.

## Where things live

| What | Where |
| --- | --- |
| Pages | `src/app/<route>/page.tsx` |
| Case-study building blocks (`Section`, `H`, `P`, `Frame`, …) | `src/components/case-study.tsx` |
| Type styles and case-study layout | `src/app/globals.css` |
| Fonts | `src/app/fonts/` |
| Videos | `public/videos/` |
| Images (generated) | `public/images/` |

## Adding or replacing an image

1. Put the full-resolution file in `assets-original/images/`.
2. Run `node scripts/optimize-images.mjs`.
3. Use it with `<Img id="file-name-without-extension" />`.

The script writes a WebP at up to 2400px wide plus an 800px copy, and records
the dimensions in `src/lib/images.json`. `assets-original/` is not committed to
git, so keep your own backup of it.
