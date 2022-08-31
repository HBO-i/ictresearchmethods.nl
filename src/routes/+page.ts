export const prerender = true;

import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { allMethods } from '$lib/stores';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('methods.json');

	if (res.ok) {
		const result = await res.json();

		const methodsArray = result.methodsArray;
		allMethods.set(methodsArray);

		return {
			methodsArray
		};
	}

	const { message } = await res.json();

	throw error(500, `[+page.ts]: ${message} `);
};
