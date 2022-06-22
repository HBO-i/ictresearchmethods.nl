import type { RequestHandler } from '@sveltejs/kit';
import type { Method } from '$lib/types';

import { API_URL } from '$lib/utils/url';

export const get: RequestHandler = async (request) => {
	try {
		const category = request.params.category;
		const slug = request.params.method;

		console.log('category/method.json: ', category);

		// const { category, slug } = request.params

		const response = await fetch(`${API_URL}/${category}.json`);

		console.log('rresponse/method.json: ', response);

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
		console.error('[field/method.json]:', error);
		return {
			status: 500,
			body: 'Internal Server Error'
		};
	}
};
