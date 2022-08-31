<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const prerender = true;

	export const load: Load = async ({ fetch, params }) => {
		const res = await fetch(`${params.category}.json`);

		if (res.ok) {
			const result = await res.json();

			if (result.length === 0) {
				return { status: 404 };
			}

			return {
				props: {
					result
				}
			};
		}

		const { message } = await res.json();

		return {
			error: new Error('[category/index.svelte]: ', message)
		};
	};
</script>

<script lang="ts">
	import type { Method } from '$lib/types';
	import MethodList from '$lib/components/method/MethodList.svelte';
	import CategoryTab from '$lib/components/tabs/CategoryTab.svelte';

	export let result: Array<Method>;
</script>

<svelte:head>
	<title>Category {result[0].category} — ICT Research Methods</title>
</svelte:head>

<h1 class="site-title">Methods</h1>
<CategoryTab />
<MethodList methodsArray={result} />

<style lang="scss">
	h1 {
		font-weight: 500;
		font-size: 1.25em;
		margin: 1em;
		width: 100%;
		text-align: center;

		@include desktop {
			text-align: left;
			margin-left: 0;
		}
	}
</style>
