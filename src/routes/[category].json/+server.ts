import type { Method } from '$lib/types';
import type { RequestHandler } from './$types';
import { API_URL } from '$lib/env';

export const GET: RequestHandler = async (request) => {
	try {
		const methodName = request.params.category;

		const response = await fetch(`${API_URL}/methods.json`);

		if (response.ok) {
			const result = await response.json();

			const methodsArray = result.methodsArray;

			const currentCategory = Array.isArray(methodsArray)
				? methodsArray.filter((el: Method) => el.category === methodName)
				: [];

			return new Response(JSON.stringify(currentCategory), {
				headers: {
					'content-type': 'application/json; charset=utf-8'
				}
			});
		}
	} catch (error) {
		console.error('[category/index.json]:', error, ' API_URL: ', API_URL);
		return new Response(JSON.stringify('Internal Server Error'), {
			status: 500
		});
	}
};
