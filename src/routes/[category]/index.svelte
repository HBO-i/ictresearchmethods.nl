<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const prerender = true;

	export const load: Load = async ({ fetch, params }) => {
		const category = params.category;
		const res = await fetch(`${category}.json`);

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
			error: new Error(message)
		};
	};
</script>

<script lang="ts">
	import type { Method } from '$lib/types';

	import MethodList from '$lib/method/MethodList.svelte';
	import CategoryTab from '$lib/CategoryTab.svelte';

	export let result: Array<Method>;
</script>

<h1 class="site-title">ICT Methods</h1>
<CategoryTab />
<MethodList methodsList={result} />

<style>
	h1 {
		font-weight: 500;
		font-size: 1.25em;
		margin: 1em;
		width: 100%;
		text-align: center;
	}

	@media screen and (min-width: 1200px) {
		h1 {
			text-align: left;
			margin-left: 0;
		}
	}
</style>
