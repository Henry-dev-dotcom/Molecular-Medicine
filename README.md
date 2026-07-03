# ChromosomeLearn Phase 6 — Responsive Video-Enhanced Static Website

This is the responsive, video-enhanced Phase 6 version of the ChromosomeLearn static learning app. It contains the full lecture-note and study-guide content, improves the study flow, scales well on mobile/tablet, and includes an embedded YouTube teaching video.

## What Phase 6 includes

- Complete lecture notes section
- Full content coverage audit
- Historical timeline of chromosome science
- Detailed chromosome composition and mitochondrial chromosome notes
- Histone modification and DNA methylation tables
- Full chromosome nomenclature explanation
- Karyotyping and banding procedure steps
- Cell cycle notes
- Fragile sites and Fragile X syndrome
- MLPA, SNP array, CGH, FISH and WGS comparison
- Clinical indications for chromosome analysis
- Transposable elements: Alu, LINE, retrotransposons and DNA transposons
- Expanded syndrome notes including trisomy 16 and complete androgen insensitivity syndrome
- Deletion, duplication, inversion, translocation and mosaicism explanations
- Prenatal serum marker table and ethics/counselling notes
- More flashcards, glossary entries, checklist items and exam questions
- Embedded YouTube video lesson placed after the Recommended Study Flow


## Responsive learning-flow improvements

- New “Recommended study flow” section with direct links to the right learning order
- Cleaner mobile and tablet navigation drawer
- Better phone scaling for hero, cards, buttons, tables, diagrams and exam mode
- Improved tablet grids so content does not feel squeezed
- Full-width mobile buttons for easier tapping
- Scrollable tables and diagrams where needed
- Reduced layout clutter on small screens
- Preserved all Phase 6 content and tools

## How to run

Open `index.html` in any modern browser. No login, backend or database is required. The embedded YouTube video needs internet access to play.

For offline/PWA testing, serve the folder locally with a static server, for example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Main files

- `index.html`
- `assets/css/styles.css`
- `assets/js/data.js`
- `assets/js/app.js`
- `assets/img/lesson-gallery/`
- `manifest.webmanifest`
- `sw.js`
- `IMAGE_CREDITS.md`
