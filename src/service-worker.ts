import { build, version, files, prerendered } from '$service-worker';

const applicationCache = `applicationCache-v${version}`;
const staticCache = `staticCache-v${version}`;

const cachedFiles = files.filter((file) => !file.startsWith('/img'));

const prerenderedStaticURLs = prerendered; // You don't want this -> Every URL is cached (page + json endpoint) > 7.5MB

const returnSSRpage = (path: string) => caches.open('ssrCache').then((cache) => cache.match(path));

// Caches the svelte app (not the data)
self.addEventListener('install', (event) => {
	event.waitUntil(
		Promise.all([
			caches.open('prerenderedURLs').then((cache) => cache.addAll(prerenderedStaticURLs)),
			caches.open(applicationCache).then((cache) => cache.addAll(build)),
			caches.open(staticCache).then((cache) => cache.addAll(cachedFiles))
		])
			.then(self.skipWaiting())
			.then(() => console.log('installed'))
	);
});

// Removes old caches
self.addEventListener('activate', (event) => {
	event.waitUntil(
		clients.claim(),
		caches
			.keys()
			.then((keys) => {
				return Promise.all(
					keys
						.filter(
							(key) =>
								key !== applicationCache &&
								key !== staticCache &&
								key !== 'methodCache' &&
								key !== 'prerenderedURLs'
						)
						.map((key) => caches.delete(key))
				);
			})
			.then(self.skipWaiting())
			.then(() => console.log('activated'))
	);
});

// Fire when any resource is fetched
self.addEventListener('fetch', (event) => {
	const request = event.request;
	const requestURL = new URL(request.url);

	// if (/(methods\.json)/.test(requestURL.pathname)) { // When url is /methods.json
	// 	console.log(requestURL.pathname);

	// 	const returnOfflineMethods = () => {
	// 		return fetch(event.request).catch(() => {
	// 			return caches
	// 				.open('methodsCache')
	// 				.then((cache) => {
	// 					return cache.keys().then((cacheKeys) => {
	// 						return Promise.all(cacheKeys.map((cacheKey) => cache.match(cacheKey)));
	// 					});
	// 				})
	// 				.then((cachesResponses) => {
	// 					return Promise.all(cachesResponses.map((response) => response.json()));
	// 				})
	// 				.then((methods) => {
	// 					const response = new Response(JSON.stringify(methods), {
	// 						statusText: 'offline'
	// 					});
	// 					return response;
	// 				});
	// 		});
	// 	};
	// 	event.respondWith(returnOfflineMethods());
	// } else

	if (
		/(\/methods\/)(\w+-?)*/.test(requestURL.pathname) &&
		!/(.css)|(.js)$/.test(requestURL.pathname)
	) {
		const findOfflineMethod = () =>
			caches
				.match(request)
				.then((response) => (response ? response : fetch(request)))
				.catch(() => returnSSRpage('/offline'));
		event.respondWith(findOfflineMethod());
	} else event.respondWith(caches.match(request).then((cacheRes) => cacheRes || fetch(request)));
});
