<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const prerender = true;

	export const load: Load = async ({ fetch, params }) => {
		const res = await fetch(`/${params.category}/${params.method}.json`);
		const result = await res.json();

		if (res.ok) {
			return {
				props: {
					result
				}
			};
		}
	};
</script>

<script>
	export let result;
</script>

<a href="/">&larr; Go back</a>
<h1>Method</h1>
<h2>Details</h2>
<p>
	{JSON.stringify(result)}
</p>

<style>
	/* your styles go here */
</style>
