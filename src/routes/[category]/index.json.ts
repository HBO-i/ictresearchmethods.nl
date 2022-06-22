import type { Method } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';
import { getCurrentDomain } from '$lib/utils/url';

export const get: RequestHandler = async (request) => {
	try {
		const url = getCurrentDomain();
		const methodName = request.params.category;

		const response = await fetch(`${url}/methods.json`);

		if (response.ok) {
			const result = await response.json();

			const methodsArray = result.methodsArray;

			const currentCategory = Array.isArray(methodsArray)
				? methodsArray.filter((el: Method) => el.category === methodName)
				: [];

			console.log('currentCategory/category: ', currentCategory);

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
		console.error('[category.json]:', error);
		return {
			status: 500,
			body: 'Internal Server Error'
		};
	}
};
