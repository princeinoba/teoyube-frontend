# Local versus public runtime

## Local preview runtime

Run `npm run build:vercel`, then `npm run preview:vercel`. The preview server serves only `dist/`, simulates the two safe read-only functions, and uses SPA fallback. It does not provide local filesystem, owner-review, publication, FFmpeg, or QA endpoints.

## Public runtime

Run `npm run build:vercel`. Vercel serves `dist/` and two read-only functions:

- `/api/promises/seed`: deterministic JSON with safe caching;
- `/api/youtube/teoyube`: clearly labeled local preview records and no API key.

The browser falls back to `src/data/promiseSeeds.json` when the promise function is unavailable. Optional media availability is supplied by the generated `src/data/optionalMediaStatus.json`.

Vercel does not receive owner media-processing capabilities. Never add local media paths, owner credentials, protected masters, generated approvals, or FFmpeg operations to the public runtime.
