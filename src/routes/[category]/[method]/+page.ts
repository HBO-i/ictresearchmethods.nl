export const prerender = true;

import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch(`/${params.category}/${params.method}.json`);

	if (res.ok) {
		const result = await res.json();

		if (result.length === 0) {
			throw error(404);
		}

		return {
			result
		};
	}

	if (res.status === 404) {
		throw error(404);
	}

	const { message } = await res.json();

	throw error(500, `[method.+page.ts]: ${message} `);
};
