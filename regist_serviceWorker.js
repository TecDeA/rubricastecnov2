/* Registro del Service Worker (PWA) — Rúbricas de Evaluación */
(function () {
    'use strict';
    if (!('serviceWorker' in navigator)) return;
    // Solo con http/https (con file:// no funciona y no debe dar errores)
    if (!/^https?:$/.test(location.protocol)) return;

    window.addEventListener('load', function () {
        navigator.serviceWorker
            .register('./sw.js', { scope: './' })
            .catch(function (err) {
                console.info('Service Worker no registrado: ' + (err && err.message ? err.message : err));
            });
    });
})();
