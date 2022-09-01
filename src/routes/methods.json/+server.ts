import type { RequestHandler } from './$types';
import { API_URL } from '$lib/env';

export const GET: RequestHandler = async () => {
	try {
		const response = await fetch(`${API_URL}/methods.json`);

		if (response.ok) {
			const result = await response.json();

			return new Response(JSON.stringify(result), {
				headers: {
					'content-type': 'application/json; charset=utf-8'
				}
			});
		}
	} catch (error) {
		console.error('[methods.json]:', error, ' API_URL: ', API_URL);

		return new Response(JSON.stringify('Internal Server Error'), {
			status: 500
		});
	}
};
