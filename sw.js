/**
 *  Vinicius Cainelli
 */

// Version 0.19
var  version = '0.19';

self.addEventListener('install', function(e) {
  var  timeStamp = Date.now();
  e.waitUntil(
    caches.open('airhorner').then(cache => {
      return cache.addAll([
        '/',
        '/index.html?timestamp=' + timeStamp,
        '/resume.pdf?timestamp=' + timeStamp,
        '/css/style.css?timestamp=' + timeStamp,
        // '/assets/css/style-resume.min.css?timestamp=' + timeStamp
      ])
      .then(function(){
        self.skipWaiting();
      });
    })
  );
});

self.addEventListener('activate',  function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(function(response) {
      return response || fetch(event.request);
    })
  );
});