# Elisabeth Nejedli

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

## Deployment auf GitHub Pages

Diese Seite ist für **GitHub Pages** unter [`https://elli884.github.io/page/`](https://elli884.github.io/page/) konfiguriert.

### Einmaliges Setup im GitHub-Repo

1. Repository auf GitHub öffnen
2. **Settings → Pages**
3. Unter **Build and deployment** → **Source** den Eintrag **GitHub Actions** auswählen

### Deployment-Workflow

Bei jedem Push auf `main` läuft `.github/workflows/deploy.yml` automatisch:

1. Node.js 20 installieren
2. `npm ci`
3. `npm run build` mit `NEXT_PUBLIC_BASE_PATH=/page` → erzeugt einen statischen Export in `out/`
4. `out/` wird zu GitHub Pages deployt

Nach dem ersten erfolgreichen Lauf ist die Seite unter <https://elli884.github.io/page/> erreichbar (statt der README).

### Lokaler Static-Export-Test

```bash
npm run build           # erzeugt out/
npx serve out -l 3000   # statischer Server zur Vorschau
```

> Hinweis: Für lokale Entwicklung mit `npm run dev` ist `basePath` automatisch deaktiviert, damit die Seite weiterhin unter `http://localhost:3000/` erreichbar ist.

### Alternativen

- **[Vercel](https://vercel.com)** — Repo verbinden, kein basePath nötig (`NEXT_PUBLIC_BASE_PATH` leer lassen).
- **Netlify**, **Cloudflare Pages** — funktionieren mit dem statischen `out/` Ordner.

## Rechtliches

Diese Seite ist ein rein privates, nicht-kommerzielles Projekt. Keine Cookies, kein Tracking, keine Analytics.
