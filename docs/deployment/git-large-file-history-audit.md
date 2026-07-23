# Git large-file and history audit

Audit date: 2026-07-23

## Working tree

The working tree contains 3,687 files and approximately 653.02 MiB when local framework caches are included and `dist/` is excluded.

Files above 10 MiB:

| Size | Path | Git status |
| ---: | --- | --- |
| 110.15 MiB | `.next/dev/cache/turbopack/v16.2.10/00000197.sst` | ignored |
| 110.15 MiB | `.next/dev/cache/turbopack/v16.2.10/00000167.sst` | ignored |
| 11.96 MiB | `.next/server/app/tig/debug.html` | ignored |

The first two are also the only files above 25, 50, and 100 MiB. They are build caches, not release assets. No local file was deleted.

Before release preparation, reachable tracked content was only `README.md` at 46 bytes. The public image tree is about 156.61 MiB across 157 files; its largest file is about 2.44 MiB.

## Reachable history

Reachable history consists of commit `c341dfc` and a single 46-byte README blob. There are:

- no reachable historical blobs above 100 MiB;
- no reachable ZIP, `media-source`, generated derivative, `.next`, `.tmp`, or project-bundle object;
- no deleted media retained in reachable history.

## Unreachable object store

`git count-objects -vH` reports 16.92 MiB of loose objects. `git fsck --full --no-reflogs --unreachable` identifies unreachable blobs. The largest is 6,164,196 bytes (about 5.88 MiB), followed by blobs of 5,520,770 and 3,357,361 bytes. These blobs cannot be mapped to historical paths because no reachable tree references them. None exceeds GitHub's limit.

History rewriting, Git LFS migration, and force-push are unnecessary for this repository state.
