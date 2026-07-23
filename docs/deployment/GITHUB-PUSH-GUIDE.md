# GitHub push guide

1. Confirm `git rev-parse --show-toplevel` resolves to this repository.
2. Run `npm run build:vercel`.
3. Run `npm run build:vercel:validate`.
4. Run `npm run github:check`.
5. Confirm ignored output with `git status --ignored`.
6. Review every candidate with `git status` and `git diff --cached --stat`.
7. Confirm no `media-source`, generated owner artifact, cache, archive, secret, or file at/above 100 MiB is staged.
8. Commit intentionally and push normally to the configured remote.

Do not use `--force`, rewrite history, delete `.git`, or create a replacement root without explicit authorization. In the current repository, history replacement is neither required nor recommended.

If a push fails, capture the full output of:

```text
git remote get-url origin
git fetch origin
git push --dry-run origin <branch>
```

Do not put credentials in the remote URL or documentation.
