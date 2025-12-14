# Linok Dashboard - Frontend (Local)

This is a minimal React + Vite frontend scaffold that implements the selected views from the Linok UI: Overview, Herd, Quality, Tasks & Alerts, Reports, Settings.

Features
- Pages: `Overview`, `Herd`, `Quality`, `Tasks & Alerts`, `Reports`, `Settings`.
- Simple login (mock) with email prefilled to `reuvenharrison@gmail.com`.
- Navigation and protected routes.

Prerequisites
- Node.js 18+ and npm/yarn/pnpm installed.

Run (macOS / zsh)
```bash
cd /Users/reuven/go/linok/user-dashboard
npm install
npm run dev
```

Notes
- Authentication is mocked and stores the user email in `localStorage`.
- This is a UI scaffold only — integrate with real APIs as needed.
