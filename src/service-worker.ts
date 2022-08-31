import { build, version, files, prerendered } from '$service-worker';

const applicationCache = `applicationCache-v${version}`;
const staticCache = `staticCache-v${version}`;

const cachedFiles = files.filter((file) => !file.startsWith('/img'));

const prerenderedStaticURLs = prerendered;

const PLACEHOLDER_IMAGE_URL = '/fallback.png';
const OFFLINE_PAGE = '/offline';
const PRERENDERED_URLS = 'prerenderedURLs';

const returnStaticPage = (path: string) =>
	caches.open(PRERENDERED_URLS).then((cache) => cache.match(path));

// Caches the svelte app (not the data)
self.addEventListener('install', (event) => {
	event.waitUntil(
		Promise.all([
			caches.open(PRERENDERED_URLS).then((cache) => cache.addAll(prerenderedStaticURLs)),
			caches.open(applicationCache).then((cache) => cache.addAll(build)),
			caches.open(staticCache).then((cache) => cache.addAll(cachedFiles))
		]).then(self.skipWaiting())
	);
});

// Removes old caches
self.addEventListener('activate', (event: Event) => {
	event.waitUntil(
		clients.claim(),
		caches
			.keys()
			.then((keys) => {
				return Promise.all(
					keys
						.filter(
							(key) => key !== applicationCache && key !== staticCache && key !== PRERENDERED_URLS
						)
						.map((key) => caches.delete(key))
				);
			})
			.then(self.skipWaiting())
	);
});

function isImage(fetchRequest: Request) {
	return fetchRequest.method === 'GET' && fetchRequest.destination === 'image';
}

// Fire when any resource is fetched
self.addEventListener('fetch', (event: Event) => {
	const request = event.request;

	if (isImage(request)) {
		// Get broken image placeholder from cache (seems not to work, yet)
		return caches.match(PLACEHOLDER_IMAGE_URL);
	}

	event.respondWith(
		caches
			.match(request)
			.then((cacheRes) => cacheRes || fetch(request))
			.catch(() => returnStaticPage(OFFLINE_PAGE))
	);
});
