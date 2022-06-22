<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const prerender = true;

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('methods.json');

		if (res.ok) {
			const result = await res.json();

			const methodsItems = result.methodsArray;

			return {
				props: {
					methodsItems
				}
			};
		}

		const { message } = await res.json();

		return {
			error: new Error('[index.svelte]: ', message)
		};
	};
</script>

<script lang="ts">
	import type { Method } from '$lib/types';

	import MethodList from '$lib/method/MethodList.svelte';
	import CategoryTab from '$lib/tabs/CategoryTab.svelte';

	export let methodsItems: Array<Method>;
</script>

<h1 class="site-title">ICT Methods</h1>
<CategoryTab />
<MethodList methodsArray={methodsItems} />

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
