# ChromosomeLearn — Completed Phase 1 Course Centre

ChromosomeLearn is a static two-course learning platform for:

1. Theory of Molecular Medicine
2. Clinical Biostatistics

Phase 1 establishes the shared platform structure. It does not yet add the detailed Clinical Biostatistics lessons; those are scheduled for Phase 2.

## Molecular Medicine structural-abnormality expansion

This release also expands the Molecular Medicine content with:

- A dedicated isochromosome learning module
- Detailed coverage of i(X)(q10), formation mechanisms, notation, gene dosage, Turner syndrome and diagnostic methods
- Six original offline SVG diagrams for deletion, duplication, inversion, reciprocal translocation, Robertsonian translocation and isochromosome formation
- New flashcards, glossary definitions and practice questions
- An expanded full-notes table and structural-change visual atlas
- A dedicated isochromosome tab in the diagram lab

## What Phase 1 now includes

- A functional Course Centre with two active course cards
- Separate course workspaces rather than a disabled Biostatistics button
- Course-specific navigation that changes when a course is selected
- An existing full Molecular Medicine workspace
- A Clinical Biostatistics workspace containing:
  - the course module map
  - the standard lesson template
  - the planned assessment structure
  - a locally saved readiness checklist
- Separate local-storage namespaces for both courses
- Migration of progress from the earlier Molecular Medicine storage keys
- Versioned progress export and backward-compatible import
- Updated app identity, PWA manifest and offline cache
- Responsive course cards with clear active states
- Clean deployment package without obsolete backup files

## Run locally

The site should be served through a local web server so the service worker and offline features can run correctly.

```bash
python -m http.server 8000
```

Open `http://localhost:8000` in a browser.

## Main files

- `index.html` — Course Centre and both course workspaces
- `assets/css/styles.css` — responsive platform and course styles
- `assets/js/data.js` — Molecular Medicine learning data
- `assets/js/app.js` — course switching, progress and existing learning tools
- `manifest.webmanifest` — installable-app metadata
- `sw.js` — offline caching and navigation fallback
- `QA_REPORT.md` — validation results for this release

## Progress storage

Molecular Medicine and Clinical Biostatistics use different browser-storage keys. Resetting one course does not erase progress from the other course.

The export format uses `schemaVersion: 2` and stores both courses under a `courses` object. Older Molecular Medicine backup files can still be imported.

## Next phase

Phase 2 will populate Clinical Biostatistics with a consistent lesson structure for each statistical test: meaning, use, variables, assumptions, hypotheses, Stata command, output guide, worked example, interpretation and practice.

## GitHub Pages deployment

This release is ready for GitHub Pages and includes an automatic deployment workflow at `.github/workflows/deploy-pages.yml`.

1. Upload the contents of this folder to the root of a GitHub repository.
2. Use `main` as the default branch.
3. In **Settings → Pages**, choose **GitHub Actions** as the source.
4. Push to `main` or manually run the Pages workflow.

The workflow validates all local references and JavaScript syntax before deployment. See `GITHUB_PAGES_DEPLOYMENT.md` for the full procedure and `DEPLOYMENT_QA_REPORT.md` for the release checks.


## New under-construction topic sections

Theory of Molecular Medicine now includes placeholder module sections for:

- DNA Sequencing
- DNA Polymorphisms and Human Identification
- Molecular Detection of Inherited Diseases
- Quality Assurance and Quality Control in the Molecular Laboratory

Clinical Biostatistics now includes placeholder sections for:

- Time Series Analysis
- Survival Analysis

These sections are clearly labelled **Under construction**. The Molecular Medicine placeholders are excluded from progress calculations, study plans and revision reports until lesson content is added.
## Navigation convenience

A floating up-arrow appears after the learner scrolls down the page. Selecting it returns the page smoothly to the top. The control is keyboard accessible, adapts to mobile screens, respects reduced-motion preferences and is hidden when printing.

