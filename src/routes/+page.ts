import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { allMethods } from '$lib/stores';
export const prerender = true;

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
