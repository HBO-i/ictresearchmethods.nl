<script lang="ts">
	import type { Method } from '$lib/types';

	import { paginate, LightPaginationNav } from 'svelte-paginate';
	import { currentPaginationPage, isJavaScriptDisabled } from '$lib/stores';
	import MethodCard from './MethodCard.svelte';
	import { onMount } from 'svelte';
	export let methodsArray: Array<Method>;

	let isMobile: boolean;

	onMount(() => {
		isMobile = window.matchMedia('only screen and (max-width: 760px)').matches;
	});

	function updatePaginationPage(page: number) {
		currentPaginationPage.set(page);
	}

	$: pageSize = isMobile ? 8 : 5;
	$: currentPage = $currentPaginationPage;
	$: items = methodsArray;
	$: paginatedItems = paginate({ items, pageSize, currentPage });
	$: isPaginationNeeded = items.length > pageSize;
	$: methods = $isJavaScriptDisabled ? items : paginatedItems;
</script>

<ul class="non-style">
	{#each methods as method}
		<li>
			<a sveltekit:prefetch href={'/' + method.category + '/' + method.slug} title={method.name}>
				<MethodCard {method} />
			</a>
		</li>
	{/each}
</ul>

{#if isPaginationNeeded && !$isJavaScriptDisabled}
	<div class="list-navigation">
		<LightPaginationNav
			totalItems={items.length}
			{pageSize}
			{currentPage}
			limit={1}
			showStepOptions={true}
			on:setPage={(e) => updatePaginationPage(e.detail.page)}
		/>
	</div>
{/if}

<style lang="scss">
	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0;

		li {
			font-size: 1em;
		}
	}

	a {
		text-decoration: none;
	}

	.list-navigation {
		display: flex;
		justify-content: center;
		:global(.pagination-nav) {
			width: max-content;
			border-radius: 1em;
			border: none;
		}
		:global(.option) {
			color: var(--color-text-secondary);
			width: 1em;
			margin: 0.1em;
		}
		:global(.option):hover {
			border-radius: 0.5em;
		}
		:global(.option.active) {
			background-color: var(--color-primary);
			color: var(--color-white);
			border-radius: 10px;
		}
	}

	@media screen and (min-width: 767px) {
		section {
			display: block;
		}
	}

	@media screen and (min-width: 1200px) {
		section {
			width: 100%;
			display: block;
		}

		.list-navigation {
			justify-content: flex-end;
		}

		:global(.option) {
			margin: 0.2em;
			width: 1.5em;
			height: 1.5em;
		}
	}
</style>
