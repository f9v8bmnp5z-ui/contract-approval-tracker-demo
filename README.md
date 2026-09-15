# Contract Approval & Renewal Tracker

A fictional legal-ops demo: contract intake, a configurable multi-stage approval
workflow, automatic expiration flagging, and a full audit trail — built to
explore where legal ops workflows outgrow email and SharePoint lists.

All contracts, counterparties, and reviewers are fictional and for
demonstration purposes only.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Deploy it for free (Vercel, recommended)

1. Push this folder to a new GitHub repository (see below).
2. Go to https://vercel.com, sign in with GitHub, and click **Add New Project**.
3. Select your repository. Vercel auto-detects Vite — leave the defaults and click **Deploy**.
4. You'll get a live URL like `contract-approval-tracker.vercel.app` in about a minute.

Netlify works the same way (drag-and-drop the `dist` folder after `npm run build`,
or connect the GitHub repo directly).

## Push this to GitHub

```bash
git init
git add .
git commit -m "Initial commit: contract approval tracker"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Create the empty repository on GitHub first (github.com → New repository),
then run the commands above from inside this folder.

## Notes

- Data is stored in the browser's local storage, so it's per-browser/per-device,
  not shared across visitors — fine for a portfolio demo, not for real data.
- Built with React + Vite. No backend required.
