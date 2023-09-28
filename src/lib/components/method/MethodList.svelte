<script lang="ts">
	import type { Method } from '$lib/types';

	import { paginate } from '$lib/utils/paginate';

	import PaginationNav from '$lib/components/pagination/PaginationNav.svelte';

	import { currentPaginationPage, isJavaScriptDisabled } from '$lib/stores';
	import MethodCard from './MethodCard.svelte';
	import { onMount } from 'svelte';
	export let methodsArray: Array<Method>;

	function updatePaginationPage(page: number) {
		currentPaginationPage.set(page);
	}

	$: pageSize = 15;
	$: currentPage = $currentPaginationPage;
	$: items = methodsArray;
	$: paginatedItems = paginate(items, pageSize, currentPage);
	$: isPaginationNeeded = items.length > pageSize;
	$: methods = $isJavaScriptDisabled ? items : paginatedItems;
</script>

<ul class="non-style">
	{#each methods as method}
		<li>
			<a href={'/' + method.category + '/' + method.slug} title={method.name} class="custom-style">
				<MethodCard {method} />
			</a>
		</li>
	{/each}
</ul>

{#if isPaginationNeeded && !$isJavaScriptDisabled}
	<div class="list-navigation">
		<PaginationNav
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

		li {
			font-size: 1em;
			width: 100%;
		}
	}

	a {
		text-decoration: none;
	}

	.list-navigation {
		display: flex;
		justify-content: center;

		@include desktop-small {
			justify-content: flex-end;
		}
	}
</style>
