# Vercel production QA

Status: pending production deployment.

Production promotion follows successful completion of:

1. `npm run build:vercel:validate` passes;
2. `npm run github:check` passes;
3. a clean source commit is pushed;
4. preview QA verifies the full application, public boundary, and optional-media empty state.

Verify HTTPS load, every normal navigation surface, Embedded Videos, Tables, the optional-media empty state, promise API/fallback, mobile navigation, refresh/hash navigation, console and network cleanliness, and absence/404 behavior for owner UI, owner APIs, protected paths, local paths, and secrets. If optional published media is later supplied, add poster, thumbnail, playback, and range-request checks.
