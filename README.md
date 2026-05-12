# Elisabeth Nejedli — Portfolio

Modernes Portfolio von Elisabeth Nejedli, gebaut mit **Next.js 15** (App Router), **TypeScript**, **Tailwind CSS** und **Framer Motion**.

## Tech Stack

- **[Next.js 15](https://nextjs.org)** — React Framework mit App Router
- **[React 19](https://react.dev)** — UI Library
- **[TypeScript](https://www.typescriptlang.org)** — Typsicherheit
- **[Tailwind CSS](https://tailwindcss.com)** — Utility-first CSS
- **[Framer Motion](https://www.framer.com/motion/)** — Animationen
- **[Lucide Icons](https://lucide.dev)** — Icon-Bibliothek

## Features

- Glassmorphism-Design mit weichen Gradients
- Smooth Scroll-Animationen via Framer Motion
- Responsive Layout (mobile-first)
- Animated Skill-Bars
- Timeline-basierter Education-Bereich
- Section-Navigation (Desktop)
- Optimierte Bilder über `next/image`
- Custom Google Fonts (Source Code Pro + Inter)
- SEO Metadata
- Dark Mode (standardmäßig)

## Setup

### Voraussetzungen

- Node.js 18.17 oder neuer
- npm, pnpm oder yarn

### Installation

```bash
npm install
```

### Entwicklung starten

```bash
npm run dev
```

Anschließend [http://localhost:3000](http://localhost:3000) öffnen.

### Production Build

```bash
npm run build
npm run start
```

## Projektstruktur

```
.
├── app/
│   ├── globals.css       # Tailwind + globale Styles
│   ├── layout.tsx        # Root Layout (Fonts, Metadata)
│   └── page.tsx          # Startseite
├── components/
│   ├── Card.tsx          # Wiederverwendbare Karten-Komponente
│   ├── Footer.tsx        # Footer mit rechtlichen Hinweisen
│   ├── Hero.tsx          # Hero-Section mit Profilbild
│   ├── NavDots.tsx       # Section-Navigation (Desktop)
│   └── sections/
│       ├── Awards.tsx
│       ├── Contact.tsx
│       ├── Education.tsx
│       ├── Experience.tsx
│       ├── Hobbies.tsx
│       ├── Languages.tsx
│       ├── Profile.tsx
│       └── Skills.tsx
├── public/
│   └── images/           # Statische Bilder (See.png)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Inhalte anpassen

Alle Inhalte sind direkt in den jeweiligen Section-Komponenten in `components/sections/` definiert — einfach den entsprechenden Array bzw. Text bearbeiten.

## Deployment

Empfohlen: **[Vercel](https://vercel.com)** (vom Next.js-Team). Repo verbinden und automatisch deployen.

Alternativen: Netlify, Cloudflare Pages, Self-Hosting mit `npm run build && npm run start`.

## Rechtliches

Diese Seite ist ein rein privates, nicht-kommerzielles Projekt. Keine Cookies, kein Tracking, keine Analytics.
