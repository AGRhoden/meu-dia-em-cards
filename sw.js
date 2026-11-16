const C = 'dia-em-cards-v20';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon.svg', './app.js', './vendor/supabase.js'];
self.addEventListener('install', e => e.waitUntil(caches.open(C).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (new URL(e.request.url).origin !== self.location.origin) return;   // nuvem e outros sites: o navegador resolve sozinho
  e.respondWith(fetch(new Request(e.request.url,{cache:'no-cache',credentials:'same-origin'})).then(r => { const cp = r.clone(); caches.open(C).then(c => c.put(e.request, cp)); return r; }).catch(() => caches.match(e.request)));
});
