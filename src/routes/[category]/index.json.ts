import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async (request) => {
	try {
		// @TODO: Fix hardcoded localhost
		const response = await fetch('http://localhost:3000/methods.json');
		const result = await response.json();

		const methodsList = result.methodsList;
		const methodName = request.params.category;

		const currentCategory = methodsList.filter((el) => el.category === methodName);

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
		console.error('[method.json]:', error);
		return {
			status: 500,
			body: 'Internal Server Error'
		};
	}
};
