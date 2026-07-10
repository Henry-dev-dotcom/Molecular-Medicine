const CACHE_PREFIX = "chromosomelearn-course-centre-";
const CACHE_NAME = `${CACHE_PREFIX}github-pages-scroll-to-top-v1`;
const SCOPE_URL = self.registration.scope;
const INDEX_URL = new URL("index.html", SCOPE_URL).href;

const CORE_ASSETS = [
  "",
  "index.html",
  "assets/css/styles.css",
  "assets/js/data.js",
  "assets/js/app.js",
  "manifest.webmanifest",
  "assets/img/icon.svg",
  "assets/img/icon-192.png",
  "assets/img/icon-512.png",
  "assets/img/icon-maskable-512.png",
  "assets/img/apple-touch-icon.png",
  "assets/img/lesson-gallery/slide_chromatin_packaging.jpg",
  "assets/img/lesson-gallery/slide_chromosome_anatomy.jpg",
  "assets/img/lesson-gallery/slide_fish_metaphase_interphase.jpg",
  "assets/img/lesson-gallery/slide_human_karyotype.jpg",
  "assets/img/lesson-gallery/slide_inversion_loop.jpg",
  "assets/img/lesson-gallery/slide_microarray_cgh.jpg",
  "assets/img/lesson-gallery/slide_preimplantation_genetic_diagnosis.jpg",
  "assets/img/lesson-gallery/slide_prenatal_diagnostics.jpg",
  "assets/img/lesson-gallery/slide_robertsonian_translocation.jpg",
  "assets/img/lesson-gallery/slide_structural_abnormalities.jpg",
  "assets/img/structural-changes/deletion.svg",
  "assets/img/structural-changes/duplication.svg",
  "assets/img/structural-changes/inversion.svg",
  "assets/img/structural-changes/reciprocal-translocation.svg",
  "assets/img/structural-changes/robertsonian-translocation.svg",
  "assets/img/structural-changes/isochromosome.svg"
].map((path) => new URL(path, SCOPE_URL).href);

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys
        .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
        .map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const requestUrl = new URL(request.url);
  if (requestUrl.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request, { cache: "no-cache" })
        .then(async (response) => {
          if (response && response.ok) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(INDEX_URL, response.clone());
          }
          return response;
        })
        .catch(async () => (await caches.match(INDEX_URL)) || caches.match(SCOPE_URL))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request).then((response) => {
        if (!response || !response.ok) return response;
        const copy = response.clone();
        event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)));
        return response;
      });
    })
  );
});
