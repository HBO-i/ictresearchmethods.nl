<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const prerender = true;

	export const load: Load = async ({ fetch, params }) => {
		const res = await fetch(`/${params.category}/${params.method}.json`);

		if (res.ok) {
			const result = await res.json();

			return {
				props: {
					result
				}
			};
		}

		const { message } = await res.json();

		return {
			error: new Error('[field/method.svelte]: ', message)
		};
	};
</script>

<script lang="ts">
	import type { Method } from '$lib/types';

	export let result: Method;
</script>

<a href="/">&larr; Go back</a>
<h1>Method</h1>
<h2>Details</h2>

<p>{JSON.stringify(result)}</p>

<style>
	/* your styles go here */
</style>
