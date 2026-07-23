# Deployment troubleshooting

## GitHub

- Wrong root: compare `Get-Location` with `git rev-parse --show-toplevel`.
- Authentication/repository access: run `git fetch origin` and preserve the exact error.
- Non-fast-forward: fetch and inspect divergence; do not force.
- Oversized history: compare reachable history (`git rev-list --objects --all`) with all loose/unreachable objects. Only reachable oversized blobs affect a push.
- Ignored file already tracked: use `git rm --cached <exact-path>` only after confirming the local file must remain.

## Build

- Missing reference: restore the exact referenced public asset or correct a stale reference.
- Forbidden path: remove Windows, `media-source`, or generated-owner references from public files.
- Oversized artifact: determine whether it is approved public runtime content; do not raise the limit casually.
- Optional-media warning: expected when no pilot is present. Confirm the UI displays “No media has been published yet” and continue the deployment.

## Vercel

- Wrong output: confirm `dist/index.html` exists and Output Directory is `dist`.
- 404 media: confirm the pilot exists under `dist/public/media/...` and `vercel.json` rewrite is active.
- API failure: verify `api/promises/seed.js`; the browser should fall back to static JSON.
- Owner endpoint exposed: stop the release and inspect `.vercelignore`, build manifest, and deployment source.

The Vercel CLI is not installed in the current workspace. Do not globally install it without owner approval.
