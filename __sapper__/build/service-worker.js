!function(){"use strict";const e=["/client/footer.805bb9e0.js","/client/index.4981b31e.js","/client/index.2aba6af7.js","/client/practice.35b80862.js","/client/locations.e8072701.js","/client/about.1808d271.js","/client/client.f3a4d718.js"].concat(["/service-worker-index.html","/.DS_Store","/favicon-16x16.png","/favicon-32x32.png","/favicon.png","/global.css","/images/.DS_Store","/images/almaOffice.jpg","/images/books.jpg","/images/doug.jpg","/images/farming.jpg","/images/franklinOffice.jpg","/images/henry.jpg","/images/hildrethOffice.jpg","/images/jaclyn.jpg","/images/ladyJustice.jpg","/images/logos/.DS_Store","/images/logos/DWSD logo.eps","/images/logos/Henry DWS&D B:W logo/.DS_Store","/images/logos/Henry DWS&D B:W logo/DWS&D complete.jpg","/images/logos/Henry DWS&D B:W logo/DWS&D complete.png","/images/logos/Henry DWS&D B:W logo/DWS&D logo complete.eps","/images/logos/Henry DWS&D B:W logo/DWS&D slug.jpg","/images/logos/Henry DWS&D B:W logo/DWS&D slug.png","/images/logos/dwsd-logo.jpg","/images/logos/dwsd-logo.png","/images/logos/dwsdLogoColor.jpg","/images/mainStreet.jpg","/images/oxfordOffice.jpg","/images/patrick.jpg","/logo-192.png","/logo-512.png","/manifest.json","/successkid.jpg","/uikit-3.5.5/css/uikit-rtl.css","/uikit-3.5.5/css/uikit-rtl.min.css","/uikit-3.5.5/css/uikit.css","/uikit-3.5.5/css/uikit.min.css","/uikit-3.5.5/js/uikit-icons.js","/uikit-3.5.5/js/uikit-icons.min.js","/uikit-3.5.5/js/uikit.js","/uikit-3.5.5/js/uikit.min.js"]),s=new Set(e);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1598231316577").then(s=>s.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)"cache1598231316577"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const i=new URL(e.request.url);i.protocol.startsWith("http")&&(i.hostname===self.location.hostname&&i.port!==self.location.port||(i.host===self.location.host&&s.has(i.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1598231316577").then(async s=>{try{const i=await fetch(e.request);return s.put(e.request,i.clone()),i}catch(i){const t=await s.match(e.request);if(t)return t;throw i}}))))})}();
