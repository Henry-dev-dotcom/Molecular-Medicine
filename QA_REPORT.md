# ChromosomeLearn Structural-Abnormality Update — QA Report

## Release status

**Passed for GitHub Pages deployment.**

## Content implemented

- Expanded the Molecular Medicine structural-abnormality lesson.
- Added a dedicated isochromosome module covering:
  - definition and mirror-image arms
  - centromeric misdivision and U-type exchange
  - i(X)(q10) notation
  - Xp loss and Xq gain
  - Turner syndrome and mosaic forms
  - karyotype, FISH and chromosomal microarray interpretation
- Added six original local SVG learning diagrams:
  - deletion
  - duplication
  - inversion
  - reciprocal translocation
  - Robertsonian translocation
  - isochromosome
- Added new flashcards, glossary material and practice questions.
- Added the six diagrams to the module cards, full notes, image gallery and offline cache.
- Added a dedicated isochromosome tab to the diagram lab.

## Automated checks

| Check | Result |
|---|---|
| Deployment QA script | Passed |
| JavaScript syntax: `data.js` | Passed |
| JavaScript syntax: `app.js` | Passed |
| Service-worker syntax | Passed |
| Duplicate HTML IDs | Passed — none found |
| Broken local HTML references | Passed — none found |
| Manifest and icon references | Passed |
| GitHub project-site relative paths | Passed |
| New SVG XML parsing | Passed — 6 of 6 |
| New SVGs included in service-worker cache | Passed — 6 of 6 |
| New HTML image alternative text | Passed |
| Molecular Medicine data object loading | Passed |
| Molecular Medicine module count | Passed — 20 modules |
| Flashcard count | Passed — 53 cards |
| Structural-abnormality practice set | Passed — 6 questions |
| Isochromosome module completeness | Passed |
| HTTP delivery of core files and new diagrams | Passed — HTTP 200 |

## Visual review

All six SVG diagrams were rasterised and reviewed as a contact sheet. The following were confirmed:

- Labels are readable.
- Deletion shows the missing segment without removing neighbouring segments.
- Duplication clearly shows the repeated segment.
- Inversion shows reversal of segment order.
- Reciprocal translocation shows exchange between two non-homologous chromosomes.
- Robertsonian translocation shows fusion of acrocentric long arms and loss of short-arm material.
- Isochromosome shows duplicated Xq arms and absent Xp on i(X)(q10).

## Offline and deployment checks

- The service-worker cache was increased to `github-pages-structural-v2`.
- All six new SVG assets are pre-cached.
- No root-absolute asset paths were introduced.
- The existing GitHub Actions Pages workflow remains valid.
- `.nojekyll`, manifest, icons and deployment workflow remain present.

## Environment limitation

A fresh headless-Chromium runtime screenshot of the complete page could not be completed in the container because Chromium stalled on container-level DBus/inotify restrictions. This was an environment limitation rather than an application error. Static validation, JavaScript parsing, data loading, HTTP delivery and direct visual review of all new diagrams passed.

---

# New Topic Placeholder Update — QA Addendum

## Release status

**Passed for GitHub Pages deployment.**

## New sections created

### Theory of Molecular Medicine

- DNA Sequencing
- DNA Polymorphisms and Human Identification
- Molecular Detection of Inherited Diseases
- Quality Assurance and Quality Control in the Molecular Laboratory

Each topic appears in the Molecular Medicine module list with a visible **Under construction** status. A **New topics** filter was added to the module search controls.

### Clinical Biostatistics

- Time Series Analysis
- Survival Analysis

Both topics appear in the Clinical Biostatistics course map with visible **Under construction** labels.

## Behaviour verified

- The four Molecular Medicine placeholders cannot be marked complete.
- The placeholders are excluded from course-progress calculations.
- The placeholders are excluded from generated study plans.
- The placeholders are excluded from revision-report incomplete-module lists.
- Existing completed modules and saved progress remain compatible.
- Service-worker cache version updated to `github-pages-new-topics-v1`.

## Automated checks

| Check | Result |
|---|---|
| `data.js` JavaScript syntax | Passed |
| `app.js` JavaScript syntax | Passed |
| `sw.js` JavaScript syntax | Passed |
| GitHub Pages deployment QA script | Passed |
| Duplicate HTML IDs | Passed — none found |
| Broken local references | Passed — none found |
| Required topic titles present | Passed — 6 of 6 |
| Molecular Medicine placeholders | Passed — 4 |
| Existing completed Molecular Medicine modules | Preserved — 20 |
| Clinical Biostatistics course-map cards | Passed — 9 total |
| New Topics module filter | Passed |
| Progress exclusion logic | Passed |

## Runtime-environment note

Headless Chromium could not complete a fresh rendered-page dump in the container because of container-level Chromium/DBus/inotify restrictions. Static validation, JavaScript parsing, local-reference validation and deployment checks all passed.
