<script lang="ts">
	import type { PageData } from './$types';
	import CategoryTab from '$lib/components/tabs/CategoryTab.svelte';
	import SiteDescription from '$lib/components/SiteDescription.svelte';
	import MethodTable from '$lib/components/method/MethodTable.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>ICT Research Methods — Research Methods for Design-Oriented Research in ICT</title>
</svelte:head>

<h1 class="site-title">Methods</h1>
<SiteDescription />
<CategoryTab />
<MethodTable />

<style lang="scss">
	h1 {
		font-weight: 500;
		font-size: 1.25em;
		margin: 1em 0;
		width: 100%;
		text-align: center;

		@include desktop-small {
			text-align: left;
			margin-left: 0;
		}
	}
</style>
