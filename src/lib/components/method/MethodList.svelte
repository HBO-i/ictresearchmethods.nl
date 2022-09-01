<script lang="ts">
	import type { Method } from '$lib/types';

	import { paginate } from '$lib/utils/paginate';
	import DarkPaginationNav from '$lib/components/pagination/DarkPaginationNav.svelte';
	import LightPaginationNav from '$lib/components/pagination/LightPaginationNav.svelte';

	import { currentPaginationPage, isJavaScriptDisabled, isDarkMode } from '$lib/stores';
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

	$: pageSize = isMobile ? 10 : 5;
	$: currentPage = $currentPaginationPage;
	$: items = methodsArray;
	$: paginatedItems = paginate(items, pageSize, currentPage);
	$: isPaginationNeeded = items.length > pageSize;
	$: methods = $isJavaScriptDisabled ? items : paginatedItems;
</script>

<ul class="non-style">
	{#each methods as method}
		<li>
			<a
				data-sveltekit-prefetch
				href={'/' + method.category + '/' + method.slug}
				title={method.name}
			>
				<MethodCard {method} />
			</a>
		</li>
	{/each}
</ul>

{#if isPaginationNeeded && !$isJavaScriptDisabled}
	<div class="list-navigation">
		{#if $isDarkMode}
			<DarkPaginationNav
				totalItems={items.length}
				{pageSize}
				{currentPage}
				limit={1}
				showStepOptions={true}
				on:setPage={(e) => updatePaginationPage(e.detail.page)}
			/>
		{:else}
			<LightPaginationNav
				totalItems={items.length}
				{pageSize}
				{currentPage}
				limit={1}
				showStepOptions={true}
				on:setPage={(e) => updatePaginationPage(e.detail.page)}
			/>
		{/if}
	</div>
{/if}

<style lang="scss">
	ul {
		display: flex;
		flex-direction: column;
		align-items: center;

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

		@include desktop {
			justify-content: flex-end;
		}

		:global(.pagination-nav) {
			width: max-content;
			border-radius: 1em;
			border: none;
		}

		:global(.option) {
			color: var(--color-text-secondary);
			width: 1em;
			margin: 0.1em;

			@include desktop {
				margin: 0.2em;
				width: 1.5em;
				height: 1.5em;
			}
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
</style>
