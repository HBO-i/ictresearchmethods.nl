import type { RequestHandler } from '@sveltejs/kit';
import { API_URL } from '$lib/env';

export const get: RequestHandler = async () => {
	try {
		const response = await fetch(`${API_URL}/methods.json`);

		if (response.ok) {
			return {
				body: await response.json()
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
		console.error('[methods.json]:', error);
		return {
			status: 500,
			body: 'Internal Server Error'
		};
	}
};
