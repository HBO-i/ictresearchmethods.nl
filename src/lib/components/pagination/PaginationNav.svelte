<script lang="ts">
	// Options is very difficult to type
	// @ts-nocheck
	import { createEventDispatcher } from 'svelte';
	import { generateNavigationOptions } from '$lib/utils/paginate';
	import { PREVIOUS_PAGE, NEXT_PAGE, ELLIPSIS } from '$lib/utils/symbolTypes';

	import NextIcon from '$lib/assets/icons/pagination/next.svelte';
	import PrevIcon from '$lib/assets/icons/pagination/prev.svelte';

	import type { Option } from '$lib/types';

	const dispatch = createEventDispatcher();

	export let totalItems = 0;
	export let pageSize = 1;
	export let currentPage = 1;
	export let limit = 0;
	export let showStepOptions = false;

	$: options = generateNavigationOptions(totalItems, pageSize, currentPage, limit, showStepOptions);

	$: totalPages = Math.ceil(totalItems / pageSize);

	function handleOptionClick(option: Option) {
		dispatch('setPage', { page: option.value });
	}
</script>

<div class="pagination-nav">
	{#each options as option}
		<span
			class="option"
			class:number={option.type === 'number'}
			class:prev={option.type === 'symbol' && option.symbol === PREVIOUS_PAGE}
			class:next={option.type === 'symbol' && option.symbol === NEXT_PAGE}
			class:disabled={(option.type === 'symbol' &&
				option.symbol === NEXT_PAGE &&
				currentPage >= totalPages) ||
				(option.type === 'symbol' && option.symbol === PREVIOUS_PAGE && currentPage <= 1)}
			class:ellipsis={option.type === 'symbol' && option.symbol === ELLIPSIS}
			class:active={option.type === 'number' && option.value === currentPage}
			on:click={() => handleOptionClick(option)}
		>
			{#if option.type === 'number'}
				<span>{option.value}</span>
			{:else if option.type === 'symbol' && option.symbol === ELLIPSIS}
				<span>...</span>
			{:else if option.type === 'symbol' && option.symbol === PREVIOUS_PAGE}
				<PrevIcon />
			{:else if option.type === 'symbol' && option.symbol === NEXT_PAGE}
				<NextIcon />
			{/if}
		</span>
	{/each}
</div>

<style lang="scss">
	.disabled {
		opacity: 0.33;
		cursor: not-allowed !important;

		&:hover {
			cursor: not-allowed !important;
			background-color: transparent !important;
		}
	}

	.pagination-nav {
		width: max-content;
		border-radius: 1em;
		border: none;
		display: flex;
		justify-content: center;
		background: var(--color-white);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
	}

	.option {
		color: var(--color-text-secondary);
		width: 1em;
		margin: 0.1em;
		padding: 0.75em;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.2s all ease-out;
		user-select: none;

		@include desktop-small {
			margin: 0.2em;
			width: 1.5em;
			height: 1.5em;
		}

		&:hover {
			border-radius: 0.5em;
			background-color: var(--color-bg);
			cursor: pointer;
		}

		&.number,
		&.ellipsis {
			padding: 0.75em 0.925em;
		}

		&.active {
			background-color: var(--color-primary);
			color: white;
			border-radius: 0.625em;
		}
	}
</style>
