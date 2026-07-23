# ENDEVIS Corporate Website

Premium corporate website for **ENDEVIS Sp. z o.o.** — an AI software company building SaaS platforms for document processing, workflow automation, and business digitalization.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide Icons
- next-themes (dark / light mode)

## Languages

- English (`/en`)
- Czech (`/cs`)
- Slovak (`/sk`)
- Polish (`/pl`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — middleware redirects to the preferred locale.

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Serve production build   |
| `npm run lint` | Run ESLint               |

## Project structure

```
src/
  app/[locale]/     # Locale-aware routes
  components/
    layout/         # Navbar, Footer, LanguageSwitcher
    sections/       # Hero, Products, About, Services, Technology, Contact
    ui/             # Reusable UI primitives
    providers/      # Theme provider
  lib/
    company.ts      # Company details & registration placeholders
    i18n/           # Dictionaries & locale config
```

## Editing company registration numbers

Update placeholders in `src/lib/company.ts`:

- `registration.nip`
- `registration.krs`
- `registration.regon`
- `registration.vatEu`
