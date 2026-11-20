/* Lexicon v73: versioned, offline-first shell; no external network responses cached. */
'use strict';
const CACHE='lexicon-offline-v73-20261120-a';
const CORE=['./','./manifest.webmanifest','./css/tailwind.css','./js/app.js','./icons/lexicon.svg','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-192-maskable.png','./icons/icon-512-maskable.png','./data/words-v28.json.gz','./data/regional-differences-v28.json','./data/curated-bilingual-v73.json'];
self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    await cache.addAll(CORE);
    if(!self.registration.active)await self.skipWaiting();
  })());
});
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(k=>k.startsWith('lexicon-offline-')&&k!==CACHE).map(k=>caches.delete(k)));
  await self.clients.claim();
})()));
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting();});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin)return;
  if(!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
  if(request.mode==='navigate'){
    event.respondWith((async()=>{
      const cached=await caches.match(new URL('./',self.registration.scope).href);
      if(cached)return cached;
      try{return await fetch(request)}catch{return new Response('Lexicon 还未完成离线安装；请联网重新打开。',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}})}
    })());return;
  }
  const coreURLs=new Set(CORE.map(p=>new URL(p,self.registration.scope).href));
  if(!coreURLs.has(url.href))return;
  event.respondWith((async()=>{
    const cached=await caches.match(request,{ignoreSearch:true});
    if(cached)return cached;
    return fetch(request);
  })());
});
