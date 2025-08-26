# GitHub User Search App (TypeScript + Vite)

A clean, responsive implementation of a GitHub username search—built with **React + TypeScript** and **Vite**. Includes:
- Username search with GitHub REST API
- Error states (not found / generic failure)
- Dark & light theme toggle (persisted)
- Responsive card layout with stats and profile links

## Quick start

```bash
npm i
npm run dev
```

## Build & preview

```bash
npm run build
npm run preview
```

## Notes

- API: `https://api.github.com/users/{username}` (no token). You may hit low rate limits when testing aggressively.
- Theming uses CSS variables. Stored in `localStorage` key `theme`.
- Default user loads as `octocat` so you see the layout immediately.
- This project uses just CSS (no Tailwind) to keep setup minimal. You can swap in Tailwind if your Figma requires it.
