import type { RequestHandler } from '@sveltejs/kit';
import type { Method } from '$lib/types';

import { unslugify } from '$lib/utils/slugify';
import { getCurrentDomain } from '$lib/utils/url';

export const get: RequestHandler = async (request) => {
	try {
		const category = 'workshop';

		const url = getCurrentDomain();

		const response = await fetch(`${url}/${category}.json`);
		const result = await response.json();

		console.log(request);

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
