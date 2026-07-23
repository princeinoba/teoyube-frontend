# Local Vercel QA

Status: passed with the repository-owned Vercel preview server.

`vercel --version` initially returned `NOT_INSTALLED`. No global installation was performed. `npm run preview:vercel` serves the exact `dist/` artifact, simulates only the two public read-only functions, and applies SPA fallback.

Completed static checks:

- deterministic build succeeds;
- `dist/index.html`, `app.js`, and `styles.css` exist;
- all literal HTML, CSS, JavaScript image, script, stylesheet, and data references resolve;
- build contains no owner-review files, QA endpoints, protected paths, or absolute Windows paths;
- `/api/promises/seed` has a browser static fallback;
- all build files are below both the 50 MiB deployment threshold and GitHub's 100 MiB limit.
- direct HTTP probes returned 200 for HTML, JavaScript, CSS, a representative image, runtime JSON, both APIs, and SPA `/canon` fallback;
- Today, TeoyubeSearch, Canon, Promise Table, Calling Compass, Book, Lexicon, Testimony, Teo Guide, Embedded Videos, and Tables rendered through their hash routes;
- 53 rendered images reported no failed image loads;
- each requested route produced zero application console errors or warnings in an isolated clean-load browser check;
- optional media controls are disabled and the exact empty state is “No media has been published yet.”
