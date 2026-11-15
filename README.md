# Ireland Chinese Golf Society (ICGS) — public website

Public discovery site for the Ireland Chinese Golf Society.  
**No member login. No payments.** Ready to deploy on Vercel.

## Stack

- Next.js (App Router) + TypeScript
- Modern CSS (Tailwind v4 import + custom design tokens)
- Bilingual routing: `/en/...` and `/zh/...` (default redirect `/` → `/en`)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Pages

| Route | Purpose |
| --- | --- |
| `/en`, `/zh` | Home (brand-first hero) |
| `/[locale]/about` | About us |
| `/[locale]/history` | History timeline (structured placeholders) |
| `/[locale]/gallery` | Photos + video placeholders |
| `/[locale]/sponsors` | Sponsor logos |
| `/[locale]/join` | Email / WeChat + application form, requirements, handicap process |
| `/[locale]/contact` | Contact |
| Footer stubs | Outings / competitions (not a v1 focus) |

## Placeholders (replace before launch)

- **Email:** `join@icgs.ie`, `hello@icgs.ie`
- **WeChat:** `ICGS_Ireland` (ID / QR TBD)
- **History** copy and dates
- **Join requirements** and **handicap estimation** wording (structure is ready)
- **Join form** submits in-browser only — wire to email or a form backend
- **Membership payment** intentionally omitted
- **Gallery videos** are empty slots; gallery photos are non-people fairway atmosphere placeholders
- **Brand colours / logo** currently interim from ICGS ScoreSystem assets (`public/brand`, `public/sponsors`)

## Brand notes

Interim palette from ScoreSystem theme:

- Navy `#1e3a8a` / `#1e40af`
- Accent blue `#3b82f6`
- Fairway green for atmosphere (site-specific)

Logo: `public/brand/icgs-logo.jpg`

## Bilingual

- English and Simplified Chinese dictionaries live in `src/i18n/dictionaries.ts`
- Locale switcher preserves the current path
- `src/proxy.ts` redirects bare paths to the default locale (`en`)

## Deploy (Vercel)

1. Push this repo to GitHub
2. Import the project in Vercel (framework: Next.js)
3. Deploy — no env vars required for v1

Domain preference (product context): `.ie` (e.g. `icgs.ie`); `.golf` nice to have.

## Out of scope (v1)

- Member area / login
- Payments
- Full outings & competitions product (footer stubs only)
- Merging with ICGS-ScoreSystem
