import type { RequestHandler } from '@sveltejs/kit';
import type { Method } from '$lib/types';

import { getCurrentDomain } from '$lib/utils/url';

export const get: RequestHandler = async (request) => {
	try {
		const category = 'showroom';
		const slug = request.params.method;
		const url = getCurrentDomain();

		const response = await fetch(`${url}/${category}.json`);

		if (response.ok) {
			const result = await response.json();

			const currentMethod = result.find((el: Method) => el.slug === slug);

			return {
				body: currentMethod
			};
		} else {
			return {
				status: response.status,
				body:
					response.body &&
					response.headers.has('Content-Type') &&
					response.headers.get('Content-Type') === 'application/json'
						? await response.json()
						: response.body
			};
		}
	} catch (error) {
		console.error('[showroom/method.json]:', error);
		return {
			status: 500,
			body: 'Internal Server Error'
		};
	}
};
