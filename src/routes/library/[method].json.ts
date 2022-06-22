import type { RequestHandler } from '@sveltejs/kit';
import type { Method } from '$lib/types';

import { getCurrentDomain } from '$lib/utils/url';

export const get: RequestHandler = async (request) => {
	try {
		const category = 'library';
		const slug = request.params.method;
		const url = 'https://methods.jchm.dev';

		const response = await fetch(`${url}/${category}.json`);
		console.log('response/library: ', response);

		if (response.ok) {
			const result = await response.json();
			console.log('result/library: ', result);

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
		console.error('[library/method.json]:', error);
		return {
			status: 500,
			body: 'Internal Server Error'
		};
	}
};
