import type { RequestHandler } from '@sveltejs/kit';
import type { Method } from '$lib/types';

import { API_URL } from '$lib/env';

export const get: RequestHandler = async (request) => {
	try {
		const { category, method: slug } = request.params;

		const response = await fetch(`${API_URL}/category/${category}.json`);

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
		console.error('[method.json.ts]:', error, ' API_URL: ', API_URL);
		return {
			status: 500,
			body: 'Internal Server Error'
		};
	}
};
