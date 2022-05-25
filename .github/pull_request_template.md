### Description of Changes

(briefly outline the reason for changes, and describe what's been done)

### Breaking Changes

-   None

### Release Checklist

Prepare:

-   [ ] Detail any breaking changes. Breaking changes require a new major version number

Bump versions in:

-   [ ] package.json
-   [ ] package-lock.json (run `npm install` after editing package.json)
-   [ ] src/core/index.ts

Build:

-   [ ] `npm run dist`
-   [ ] Commit resulting `dist/` changes

Release:

-   [ ] Squash and merge to master
-   [ ] Delete branch once merged
-   [ ] Create tag from master matching chosen version
-   [ ] Fill out release notes
-   [ ] Run `npm publish --access public`
-   [ ] Publish `dist/worker.js` and `dist/web-bundle.js` to CDN (re-run `npm run dist` locally to update `web-bundle.js`)
