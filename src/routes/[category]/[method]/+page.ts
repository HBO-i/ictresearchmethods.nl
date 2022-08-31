import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
export const prerender = true;

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

	const { message } = await res.json();

	throw error(500, `[method.+page.ts]: ${message} `);
};
