/* Service worker mínimo: solo hace que el navegador ofrezca "Instalar app".
   No guarda nada en el dispositivo: todo sigue yendo a tu Apps Script. */
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){ /* red directa */ });
