# Public deployment boundary

The production artifact is an allowlist, not a repository copy.

Included:

- `index.html`, `app.js`, and `styles.css`;
- all currently required assets beneath `public/`;
- browser JSON beneath `src/data/`;
- `dist/build-manifest.json`;
- read-only Vercel functions at `/api/promises/seed` and `/api/youtube/teoyube`;
- the approved pilot only when supplied at `public/media/teoyubeworld/pilot-v1/`.

Published media is optional. The build writes `src/data/optionalMediaStatus.json`; when no media is supplied, the browser disables only the media controls and presents a non-error empty state.

Excluded:

- `server.js` and the long-running local Node runtime;
- Media Review HTML, JavaScript, CSS, approvals, acceptance files, and lifecycle artifacts;
- `media-source/`, `generated/`, local paths, caches, logs, archives, and secrets;
- FFmpeg/publication tooling;
- internal documents, planning PDFs, SQL, tests, and QA source;
- `.git`, `.next`, `.tmp`, `.vercel`, and dependencies.

`scripts/buildVercelStatic.cjs` deletes only the repository's `dist/`, copies the allowlist, checks browser references, rejects Windows/protected paths and files above 50 MiB, and writes a manifest. It does not alter the local owner runtime.

The configured media rewrite preserves checksum-bound runtime URLs:

```text
/media/teoyubeworld/pilot-v1/:path*
  -> /public/media/teoyubeworld/pilot-v1/:path*
```
