import type { RequestHandler } from './$types';
import type { Method } from '$lib/types';

import { API_URL } from '$lib/env';

export const GET: RequestHandler = async (request) => {
	try {
		const { category, method: slug } = request.params;

		const response = await fetch(`${API_URL}/category/${category}.json`);

		if (response.ok) {
			const result = await response.json();

			const currentMethod = result.find((el: Method) => el.slug === slug);

			if (currentMethod) {
				return new Response(JSON.stringify(currentMethod), {
					headers: {
						'content-type': 'application/json; charset=utf-8'
					}
				});
			} else {
				return new Response('Method cannot be found', {
					status: 404
				});
			}
		}

		if (response.status === 404) {
			return new Response('Method cannot be found', {
				status: 404
			});
		}
	} catch (error) {
		console.error('[method.json.ts]:', error, ' API_URL: ', API_URL);

		return new Response('Internal Server Error', {
			status: 500
		});
	}
};
