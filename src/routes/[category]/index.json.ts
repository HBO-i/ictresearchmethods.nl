import type { Method } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';
import { getCurrentDomain } from '$lib/utils/url';

export const get: RequestHandler = async (request) => {
	try {
		// const url = getCurrentDomain();

		const response = await fetch(`http://localhost:3000/methods.json`);

		const result = await response.json();
		const methodsArray = result.methodsList;

		const methodName = request.params.category;

		const currentCategory = methodsArray.filter((el: Method) => el.category === methodName);

		if (response.ok) {
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
