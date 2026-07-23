# Git repository root audit

Audit date: 2026-07-23

| Item | Result |
| --- | --- |
| Active working directory | `C:\Users\royce\OneDrive\Documents\teoyube-frontend` |
| Detected Git root | `C:/Users/royce/OneDrive/Documents/teoyube-frontend` |
| Branch | `main` |
| Remote | `https://github.com/princeinoba/teoyube-frontend.git` |
| HEAD | `c341dfc` (`Initial commit`) |
| Reachable tracked files | 1 (`README.md`, 46 bytes before release work) |
| Git object database | 16.92 MiB loose objects plus 2.02 KiB pack |
| Parent repository controls workspace | No |
| Phase 2/Phase 3 parent folders included | No; similarly named development documents/source modules exist inside this standalone workspace |

The sandbox account sees the repository as owned by the interactive Windows user, so diagnostics use a command-local `safe.directory` override. Global Git configuration was not changed.

The current repository is not the `C:\Users\royce\Downloads\TeoyubePrompt\Teoyube Phase 1` tree named in the supplied brief. It is a separate standalone repository. Almost all application content is untracked.

No reachable media history exists. The object store contains unreachable loose blobs left by prior index/working operations, with a largest blob of 6,164,196 bytes. None reaches GitHub's 100 MiB limit and none belongs to reachable history.

Likely original push-failure cause: it cannot be reproduced in this repository. The configured remote is reachable and a dry-run push succeeds. The reported failure therefore belongs to a different root, repository state, or earlier remote/history condition.
