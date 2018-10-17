/*
 *
 *  Vinicius Cainelli
 */

// Version 0.6
let version = '0.6';

self.addEventListener('install', e => {
  let timeStamp = Date.now();
  e.waitUntil(
    caches.open('airhorner').then(cache => {
      return cache.addAll([
        `/`,
        `/index.html?timestamp=${timeStamp}`,
        // `/resume/index.html?timestamp=${timeStamp}`,
        // `/assets/css/style.min.css?timestamp=${timeStamp}`,
        // `/assets/css/style-resume.min.css?timestamp=${timeStamp}`
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});