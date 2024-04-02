<script lang="ts">
	import type { PageData } from './$types';
	import CategoryTab from '$lib/components/tabs/CategoryTab.svelte';
	import SiteDescription from '$lib/components/SiteDescription.svelte';
	import MethodTable from '$lib/components/method/MethodTable.svelte';

	export let data: PageData;

	import { isGroupedByPhase } from '$lib/stores';

	import Switch from '$lib/components/utils/Switch.svelte';
	import PhaseTab from '$lib/components/tabs/PhaseTab.svelte';
</script>

<svelte:head>
	<title>ICT Research Methods — Research Methods for Design-Oriented Research in ICT</title>
</svelte:head>

<h1 class="site-title">Methods</h1>
<SiteDescription />

<div class="switch-container">
	<Switch bind:checked={$isGroupedByPhase} label="Group by phase" fontSize={16} />
</div>

<template>
	{#if $isGroupedByPhase}
		<PhaseTab />
	{:else}
		<CategoryTab />
	{/if}
</template>

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

	.switch-container {
		display: flex;
		justify-content: center;
		max-width: 100%;
		padding: 0 0.75em;

		@include tablet {
			padding: 0;
			justify-content: flex-start;
		}
	}
</style>
