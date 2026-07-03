const CACHE_NAME = "chromosomelearn-phase6-video-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./assets/css/styles.css",
  "./assets/js/data.js",
  "./assets/js/app.js",
  "./manifest.webmanifest",
  "./assets/img/icon.svg",
  "./assets/img/lesson-gallery/slide_chromatin_packaging.jpg",
  "./assets/img/lesson-gallery/slide_chromosome_anatomy.jpg",
  "./assets/img/lesson-gallery/slide_fish_metaphase_interphase.jpg",
  "./assets/img/lesson-gallery/slide_human_karyotype.jpg",
  "./assets/img/lesson-gallery/slide_inversion_loop.jpg",
  "./assets/img/lesson-gallery/slide_microarray_cgh.jpg",
  "./assets/img/lesson-gallery/slide_preimplantation_genetic_diagnosis.jpg",
  "./assets/img/lesson-gallery/slide_prenatal_diagnostics.jpg",
  "./assets/img/lesson-gallery/slide_robertsonian_translocation.jpg",
  "./assets/img/lesson-gallery/slide_structural_abnormalities.jpg",
  "./IMAGE_CREDITS.md"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
