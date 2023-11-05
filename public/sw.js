const staticCacheName = "shan-static-site-v1";
const cachedSites = [
  "/",
  "/static/js/bundle.js",
  "/images/favicon.ico",
  "/offline",
];

self.addEventListener("install", (evt) => {
  console.log("installed service worker");
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      cache.addAll(cachedSites);
    })
  );
});

self.addEventListener("fetch", (evt) => {
    console.log("intercepting fetch");
//   if (!navigator.onLine) {
//     evt.respondWith(
//       caches.match(evt.request).then((cacheRes)=>{
//         console.log(evt.request);
//         console.log(cacheRes);
//         return cacheRes
//       })
//     );
//   }
});
