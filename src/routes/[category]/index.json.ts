import type { Method } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';
import { API_URL } from '$lib/env';

export const get: RequestHandler = async (request) => {
	try {
		const methodName = request.params.category;

		const response = await fetch(`${API_URL}/methods.json`);

		if (response.ok) {
			const result = await response.json();

			const methodsArray = result.methodsArray;

			const currentCategory = Array.isArray(methodsArray)
				? methodsArray.filter((el: Method) => el.category === methodName)
				: [];

			return {
				body: currentCategory
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
		console.error('[category/index.json]:', error);
		return {
			status: 500,
			body: 'Internal Server Error'
		};
	}
};
