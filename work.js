const CACHE_NAME = 'SW-002';
const toCache = [
    '/',
    'https://rawcdn.githack.com/mumunin/fale/c8514df73b2d8d7afba29c36af17c9cdad75390b/web.webmanifest',
    'https://rawcdn.githack.com/mumunin/fale/e9877bd5c198abe9c86899d0f3a0f05b2e12f1bb/reg.js',
    'https://rawcdn.githack.com/mumunin/fale/1858dbb807b331a0a972598cec742daea32447a6/rktv.png',
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            return cache.addAll(toCache)
        })
        .then(self.skipWaiting())
    )
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request)
        .catch(() => {
            return caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.match(event.request)
            })
        })
    )
})

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys()
        .then((keyList) => {
            return Promise.all(keyList.map((key) => {
            if (key !== CACHE_NAME) {
                console.log('[ServiceWorker] Hapus cache lama', key)
                return caches.delete(key)
            }
            }))
        })
        .then(() => self.clients.claim())
    )
})
