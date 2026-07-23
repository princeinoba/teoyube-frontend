# Vercel deployment guide

Current project settings:

| Setting | Value |
| --- | --- |
| Framework preset | Other |
| Build command | `npm run build:vercel` |
| Output directory | `dist` |
| Install command | Default |
| Required environment variables | None |

Before deployment, both build and validation must pass. Missing TeoyubeWorld media produces a warning and activates the frontend empty state; it does not block deployment.

Use a preview deployment first. Verify the normal application, API fallbacks, images, navigation, mobile layout, refresh behavior, and optional-media empty state. Confirm owner paths and `/media-review.html` return 404. Promote the exact verified preview artifact to production; do not rebuild a different artifact during promotion.

Rollback from the Vercel dashboard or with `vercel rollback <deployment>`. Keep the last known-good production deployment available until post-release QA is complete.

No environment secret or YouTube API key is required for the first deployment. Never configure a Windows media path or owner credential.
