<script lang="ts">
	import { paginate, LightPaginationNav } from 'svelte-paginate';
	import { currentPaginationPage } from '$lib/stores';
	import type { Method } from '$lib/types';

	import MethodCard from './MethodCard.svelte';
	export let methodsArray: Array<Method>;

	let pageSize = 5;

	function updatePaginationPage(page: number) {
		currentPaginationPage.set(page);
	}

	$: currentPage = $currentPaginationPage;
	$: items = methodsArray;
	$: paginatedItems = paginate({ items, pageSize, currentPage });
	$: isPaginationNeeded = items.length > 5;
</script>

<section>
	{#each paginatedItems as method}
		<MethodCard {method} />
	{/each}

	{#if isPaginationNeeded}
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
</section>

<style lang="scss">
	.list-navigation {
		display: flex;
		justify-content: flex-end;
		:global(.pagination-nav) {
			width: max-content;
			border-radius: 1em;
			border: none;
		}
		:global(.option) {
			margin: 0.2em;
			width: 1.5em;
			height: 1.5em;
			color: var(--color-text-secondary);
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
	@media screen and (min-width: 1200px) {
		section {
			width: 1200px;
		}
	}
</style>
