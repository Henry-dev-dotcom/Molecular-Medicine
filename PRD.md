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
