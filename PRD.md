# Product Requirements Document: ChromosomeLearn Phase 6

## Product name
ChromosomeLearn

## Phase
Phase 6 — Full Content Integration + Responsive Learning Flow Upgrade + Video Embed

## Goal
Turn the existing static study app into a fuller, mobile-friendly learning website that contains the complete lecture-note and study-guide coverage for chromosomal structure and disorders, includes a teacher-made YouTube lesson video, and stays fully static with no login, backend or database.

## Target users
Students learning chromosomal structure, cytogenetics, chromosome analysis, abnormalities, prenatal diagnosis and chromosomal disorders.

## Problem
Earlier phases provided strong summaries, flashcards and quizzes, but some lecture details were simplified or missing. Students need a single website that contains both easy-learning summaries and complete notes for detailed exam preparation.

## Phase 6 objectives

1. Add all missing lecture details into a complete notes section.
2. Preserve the simplified learning modules for quick revision.
3. Expand exam preparation with additional questions covering the newly added details.
4. Expand glossary, flashcards and checklist items.
5. Add a transparent coverage audit so the student can see where each lecture topic appears.
6. Keep the website static, offline-ready and easy to deploy.
7. Improve mobile and tablet scaling so learners can comfortably study on phones and iPads/tablets.
8. Arrange the learning journey in a clearer order: plan, watch video, learn, read full notes, use visuals, recall, practise, exam, report.
9. Place the YouTube teaching video in a suitable learning position before the modules.

## Functional requirements

### Complete notes
- Include full lecture coverage arranged into numbered sections.
- Use readable tables for history, histone modifications, chromosome classification, techniques, syndromes, prenatal testing and coverage audit.
- Include detailed procedure notes for karyotyping and banding.
- Include clinical indications, transposable elements and ethics.

### Learning tools
- Keep all existing modules, flashcards, diagrams, image gallery, visual tools, practice, planner, exam mode, glossary, checklist and report.
- Add a responsive YouTube video lesson section immediately after the Recommended Study Flow.
- Add Phase 6 modules to the Learn section.
- Add more flashcards and glossary terms.
- Add more exam-bank questions.

### Static architecture
- No login.
- No backend.
- No database.
- Browser localStorage only for progress.
- Service worker for offline support after first load.

## Non-functional requirements

- Mobile responsive with readable card spacing, full-width tap targets and no horizontal page overflow.
- Tablet responsive with uncluttered navigation and two-column learning grids where appropriate.
- Offline friendly for local files; the embedded YouTube video requires internet access.
- Print friendly.
- Lightweight enough to open directly from local files.
- Clear language for students.

## Success criteria

- All major lecture areas are represented in the website.
- A learner can read detailed notes, revise key summaries, practise questions and generate a report.
- The site runs by opening `index.html` without server-side setup.

## Future phase options

- Add more lessons beyond chromosomal structure and disorders.
- Add downloadable PDF export from the website.
- Add voice explanations for each topic.
- Add instructor-mode slides or printable worksheets.
- Add backend only if accounts, synced progress or teacher dashboards become necessary.
