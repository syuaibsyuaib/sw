self.addEventListener('install', function(event){
	event.waitUntil(
	caches.open('v1')
.then(function(cache){
		return cache.addAll([
		'/sw/index.html',
		'/sw/',
		'/sw/manifest.json'
		])
		})
	)
	});
	
self.addEventListener('fetch', function(e){
	e.respondWith(
	 caches.match(e.request)
	.then(function(resp){
		return resp || fetch(e.request);
		})
	)
});
