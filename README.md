# Civitech Global — Members, Workflows & Career Roadmaps

A modern, animated landing page that introduces every team and role at **Civitech Global**, complete with career roadmaps, daily interactions, best practices, and curated learning resources.

## Live site

Deployed automatically to **GitHub Pages** via GitHub Actions:

`https://civitechglobal.github.io/members-workflows-guidelines/`

## What's inside

- **5 professional teams** with refreshed names:
  1. Product Strategy & Experience
  2. Engineering & Architecture
  3. Platform Operations & Customer Success
  4. Revenue, Sales & Marketing
  5. Delivery & Technical Leadership
- **18 roles** covering product, design, engineering, operations, security, sales, marketing, partnerships, and leadership.
- For every role:
  - Summary and key responsibilities
  - Core skills and common tools
  - Career roadmap from intern / entry level to senior executive
  - Daily interactions with other roles
  - Best practices
  - Curated references and resources

## Tech stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

## Project structure

```
.
├── .github/workflows/deploy.yml   # GitHub Pages deployment workflow
├── scripts/
│   ├── build_data.py              # Normalizes research JSON → site/src/data/teams.ts
│   └── raw/                       # Raw research data (one JSON per team/source)
├── site/                          # Vite + React application
│   ├── src/
│   │   ├── components/            # React components (Hero, TeamSection, RoleModal, etc.)
│   │   ├── data/teams.ts          # Generated typed data file
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/assets/             # Company logos
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.ts
└── README.md
```

## Local development

```bash
# 1. Install dependencies
cd site
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build
```

## Updating role data

1. Edit or replace the JSON files in `scripts/raw/`.
2. Regenerate the typed data file:
   ```bash
   py scripts/build_data.py
   ```
3. Rebuild the site:
   ```bash
   cd site
   npm run build
   ```

## Deployment

The `deploy.yml` workflow runs on every push to `main`. It installs dependencies, builds the site from the `site/` directory, and publishes `site/dist` to GitHub Pages.

Make sure GitHub Pages is enabled in the repository settings with **GitHub Actions** as the source.

---

Built for the Civitech Global team.
