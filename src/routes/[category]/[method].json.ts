import type { RequestHandler } from '@sveltejs/kit';
import type { Method } from '$lib/types';
import { unslugify } from '$lib/utils/slugify';

export const get: RequestHandler = async (request) => {
	try {
		const category = request.params.category;

		// @TODO: Fix hardcoded localhost
		const response = await fetch(`http://localhost:3000/${category}.json`);
		const result = await response.json();

		const methodName = unslugify(request.params.method);

		const currentMethod = result.find((el: Method) => el.name.toLowerCase() === methodName);

		if (response.ok) {
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
		console.error('[method.json]:', error);
		return {
			status: 500,
			body: 'Internal Server Error'
		};
	}
};
