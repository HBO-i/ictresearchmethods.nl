import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { allMethods } from '$lib/stores';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('/api/methods');

	if (res.ok) {
		const result = await res.json();

		const methodsArray = result;
		allMethods.set(methodsArray);

		return {
			methodsArray
		};
	}

	const { message } = await res.json();

	throw error(500, `[+page.ts]: ${message} `);
};
