import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch(`/api/${params.category}`);

	if (res.ok) {
		const result = await res.json();

		const method = result.find((item) => {
			return item.slug === params.method;
		});

		if (result.length === 0) {
			throw error(404);
		}

		return {
			method
		};
	}

	if (res.status === 404) {
		throw error(404);
	}

	const { message } = await res.json();

	throw error(500, `[method.+page.ts]: ${message} `);
};
