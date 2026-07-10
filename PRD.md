# Product Requirements Document: ChromosomeLearn Phase 1

## Product

ChromosomeLearn Course Centre

## Phase objective

Create a reliable two-course foundation that separates Theory of Molecular Medicine from Clinical Biostatistics while preserving the existing Molecular Medicine learning experience.

## Users

Postgraduate health-science students studying Molecular Medicine and Clinical Biostatistics.

## Core requirements

### 1. Course Centre

- Display both courses clearly.
- Make both course cards functional.
- Show the currently selected course.
- Display a simple progress summary for each course.

### 2. Separate course workspaces

- Keep the full existing Molecular Medicine workspace.
- Provide an active Clinical Biostatistics workspace.
- Do not claim that Phase 2 lesson content is already complete.
- Prepare Biostatistics module, lesson, assessment and progress containers.

### 3. Course-specific navigation

- Keep the Course Centre link always visible.
- Show only the navigation links relevant to the active course.
- Save the selected course locally.
- Restore the correct course from a direct section link.

### 4. Separate progress storage

- Store Molecular Medicine data under a molecular namespace.
- Store Clinical Biostatistics data under a biostatistics namespace.
- Reset each course independently.
- Preserve earlier Molecular Medicine progress through key migration.
- Export and import both courses in one versioned backup.

### 5. Branding and documentation

- Remove outdated phase-only branding from the visible interface.
- Update the manifest, service worker, README and PRD.
- Remove obsolete backup files from the release archive.

### 6. Accessibility and responsiveness

- Use accessible buttons, labels and headings.
- Hide inactive course panels with the native `hidden` attribute.
- Maintain keyboard-accessible navigation.
- Support desktop, tablet and mobile layouts.

### 7. Offline foundation

- Use a new cache version.
- Delete previous caches on activation.
- Cache all required local assets.
- Return the cached main page when offline navigation fails.

## Acceptance criteria

- Both course buttons open a usable workspace.
- The navigation changes correctly between courses.
- No disabled Biostatistics course button remains.
- Molecular Medicine functions remain intact.
- Biostatistics readiness progress persists after reload.
- Resetting Molecular Medicine does not remove Biostatistics readiness data.
- There are no duplicate IDs or broken internal links.
- JavaScript syntax validation passes.
- Manifest and service-worker references point to existing files.
- The release archive contains no old phase backup files.

## Phase 2 hand-off

The Biostatistics workspace exposes stable section IDs for the next phase:

- `biostats-overview`
- `biostats-modules`
- `biostats-lesson-format`
- `biostats-assessment`
- `biostats-progress`


## Molecular Medicine structural-abnormality content update

The deployed platform must include expanded isochromosome content and six locally stored, accessible structural-change diagrams covering deletion, duplication, inversion, reciprocal translocation, Robertsonian translocation and isochromosome formation. The material must explain gene-dosage consequences, balanced versus unbalanced rearrangements, i(X)(q10) notation, Turner syndrome relevance and appropriate cytogenetic testing.


## Placeholder topic expansion

The platform reserves visible, under-construction sections for four new Theory of Molecular Medicine topics and two advanced Clinical Biostatistics topics. Placeholder modules must not count against student completion progress until substantive content is published.
