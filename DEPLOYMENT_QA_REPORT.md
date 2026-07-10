# GitHub Pages Deployment QA Report

## Release decision

**PASS — ready for GitHub Pages deployment through the included GitHub Actions workflow.**

## Deployment compatibility verified

- `index.html` is at the published artifact root.
- All CSS, JavaScript, images, manifest links and service-worker paths are relative.
- No local resource link begins with `/`, so project-site subpaths are supported.
- The web manifest uses relative `id`, `start_url` and `scope` values.
- PNG icons are supplied at 192 × 192 and 512 × 512 sizes.
- A dedicated maskable icon and Apple touch icon are included.
- The service worker calculates its URLs from its own registration scope.
- The service worker only removes old ChromosomeLearn caches, not unrelated caches on the same origin.
- Cross-origin requests such as the embedded YouTube lesson are not intercepted by the service worker.
- `.nojekyll` is present.
- The deployment workflow uses GitHub Pages' configure, artifact-upload and deploy actions.
- The workflow runs file-reference and JavaScript syntax checks before deployment.
- Only public site files are placed in the deployment artifact.

## Static validation results

- Required deployment files: passed
- Manifest JSON: passed
- Manifest icon references: passed
- Duplicate HTML IDs: none found
- Internal hash links: passed
- Local asset references: passed
- Service-worker precache references: passed
- JavaScript syntax: passed
- Symbolic-link check: passed
- Large-file check: passed

## Remaining account-level step

The repository owner must select **GitHub Actions** as the Pages publishing source in the repository's Pages settings. This cannot be embedded in the website files themselves.

## GitHub project-subpath simulation

The site was served from a nested local path matching a GitHub project-site structure. The following returned HTTP 200:

- site root and `index.html`
- stylesheet
- both JavaScript files
- web manifest
- service worker
- all PWA icon files

The manifest was served as `application/manifest+json`, and the service worker was served as JavaScript.

## Package size

The public deployment artifact contains 23 files and is approximately 1.46 MB, well within GitHub Pages limits.

## Structural-abnormality content update

The Molecular Medicine structural-abnormality expansion has also passed deployment checks. Six new local SVG diagrams are present, referenced with relative paths, included in the service-worker precache and validated as well-formed XML. The Molecular Medicine data now loads 20 modules, including a dedicated isochromosome module. See `QA_REPORT.md` for the detailed update report.
