# Teoyube

Teoyube is a self-contained static frontend:

```text
Public production build:
npm run build:vercel

Validate production build:
npm run build:vercel:validate

Check GitHub readiness:
npm run github:check

Preview the production build:
npm run preview:vercel
```

The Vercel build is a static public application plus two read-only fallback API functions. It has no dependency on a local Node server, owner media-review tools, protected source media, generated approvals, local paths, or secrets.

## Repository structure

- `index.html`, `app.js`, `styles.css`: public browser application.
- `public/`: public images and the location reserved for the approved media pilot.
- `src/data/`: browser-readable runtime JSON.
- `api/`: read-only Vercel functions.
- `scripts/buildVercelStatic.cjs`: deterministic `dist/` builder.
- `scripts/validateVercelBuild.cjs`: public-boundary and asset validator.
- `scripts/checkGitHubPushReadiness.cjs`: GitHub candidate and build gate.
- `docs/deployment/`: release audits and operator guides.

## Optional media mode

The frontend does not require `public/media/teoyubeworld/pilot-v1/`. When published media is absent, the build emits a warning, writes an unavailable media status file, and the Embedded Videos surface displays “No media has been published yet.” All other frontend features continue normally.

If owner-approved media is supplied at that path in a future release, the build includes it automatically. Optional media never blocks GitHub or Vercel deployment.

See [GITHUB-PUSH-GUIDE.md](docs/deployment/GITHUB-PUSH-GUIDE.md) and [VERCEL-DEPLOYMENT-GUIDE.md](docs/deployment/VERCEL-DEPLOYMENT-GUIDE.md).
