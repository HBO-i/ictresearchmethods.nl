<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const prerender = true;

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('methods.json');

		if (res.ok) {
			const result = await res.json();

			const methodsList = result.methodsList;

			return {
				props: {
					methodsList
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

	import MethodList from '$lib/MethodList.svelte';
	import CategoryTab from '$lib/CategoryTab.svelte';

	export let methodsList: Array<Method>;
</script>

<main>
	<h1 class="site-title">ICT Methods</h1>
	<CategoryTab />
	<MethodList {methodsList} />
</main>

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

		main {
			padding: 1em 3em;
		}
	}
</style>
