# Civitech Global — Members, Workflows & Career Roadmaps

A modern, animated landing page that introduces every team and role at **Civitech Global**, complete with career roadmaps, daily interactions, best practices, curated learning resources, and story-driven team/role pages.

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
  - **A story-driven narrative page** explaining the role's journey and impact
- For every team:
  - **A story page** that introduces the team's purpose, culture, and place in Civitech Global
- **Light and dark themes** with a persistent toggle
- **Quick-view modal** for roles on the home page
- **Dedicated URL routes** for every team and role (`/team/:teamId`, `/team/:teamId/:roleSlug`)
- **GitHub Pages SPA fallback** via `404.html`

## Tech stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

## Project structure

```
.
├── .github/workflows/deploy.yml   # GitHub Pages deployment workflow
├── .gitignore
├── README.md
├── scripts/
│   ├── build_data.py              # Normalizes research JSON + stories → site/src/data/teams.ts
│   └── raw/                       # Raw research data and generated stories
├── site/                          # Vite + React application
│   ├── src/
│   │   ├── components/            # React components (Hero, TeamSection, RoleModal, TeamPage, RolePage, etc.)
│   │   ├── context/ThemeContext.tsx
│   │   ├── data/teams.ts          # Generated typed data file
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   │   ├── assets/                # Company logos
│   │   └── 404.html               # SPA redirect helper for GitHub Pages
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

## Updating role data or stories

1. Edit the JSON files in `scripts/raw/`.
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
