<script lang="ts">
	import type { PageData } from './$types';
	import MethodList from '$lib/components/method/MethodList.svelte';
	import CategoryTab from '$lib/components/tabs/CategoryTab.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Category {data.result[0].category} — ICT Research Methods</title>
</svelte:head>

<h1 class="site-title">Methods</h1>
<CategoryTab />
<MethodList methodsArray={data.result} />

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
