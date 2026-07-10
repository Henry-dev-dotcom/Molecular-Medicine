# ChromosomeLearn Phase 1 Quality-Assurance Report

## Release status

**Passed — Phase 1 course-centre foundation completed.**

## Corrections completed

- Replaced the disabled Clinical Biostatistics button with a functional course workspace.
- Created separate Molecular Medicine and Clinical Biostatistics course panels.
- Added course-specific navigation and saved course selection.
- Added direct-link course detection for course sections.
- Introduced separate progress-storage namespaces for both courses.
- Added migration from the earlier Molecular Medicine storage keys.
- Updated progress export to schema version 2 and retained backward-compatible import.
- Changed the Molecular Medicine reset action so it does not erase Biostatistics readiness progress.
- Updated visible branding, footer, manifest and service-worker cache version.
- Replaced the obsolete development roadmap with the current Phase 1 implementation status.
- Improved course-card contrast, active states and mobile layouts.
- Removed obsolete HTML and CSS backup files from the package.
- Updated README and PRD documentation.

## Static validation

| Check | Result |
|---|---|
| Duplicate HTML IDs | Passed — none found |
| Internal section links | Passed — no broken links |
| Local CSS, JavaScript and image references | Passed |
| Image alternative text | Passed |
| Button accessible labels | Passed |
| Course panels, cards, navigation and buttons | Passed |
| Disabled course-opening buttons | Passed — none found |
| Manifest JSON and icon reference | Passed |
| Service-worker asset references | Passed |
| Obsolete backup files | Passed — none present |
| JavaScript syntax | Passed |
| Service-worker syntax | Passed |

Static scan totals:

- 146 unique HTML IDs
- 35 internal links
- 2 course panels
- 2 active course cards

## Browser runtime validation

The application was loaded in a headless Chromium test environment with the production HTML and JavaScript.

| Runtime check | Result |
|---|---|
| Document completed loading | Passed |
| Molecular Medicine selected initially | Passed |
| Molecular Medicine panel displayed | Passed |
| Clinical Biostatistics panel hidden initially | Passed |
| Existing Molecular Medicine modules rendered | Passed — 19 module cards |
| Exactly one active course card | Passed |
| Switching to Clinical Biostatistics | Passed |
| Clinical Biostatistics navigation displayed | Passed |
| Molecular Medicine navigation hidden after switching | Passed |
| Biostatistics readiness saved under its own key | Passed |
| JavaScript runtime exceptions | Passed — 0 exceptions |

## Responsive visual review

The Course Centre and Clinical Biostatistics workspace were rendered at desktop and mobile viewport sizes. The following were confirmed:

- Course cards remain readable and clearly separated.
- Course buttons expand appropriately on small screens.
- The mobile navigation collapses to the menu button.
- Headings and action buttons remain within the viewport.
- Active course styling remains visible on desktop and mobile.

## Phase boundary

Phase 1 creates the complete two-course foundation. Detailed Clinical Biostatistics lessons, assumptions, Stata examples and exercises remain correctly assigned to Phase 2 and later phases.
