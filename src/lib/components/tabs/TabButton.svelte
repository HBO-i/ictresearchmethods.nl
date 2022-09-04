<script lang="ts">
	import { page } from '$app/stores';
	import { currentPaginationPage } from '$lib/stores';

	function resetPagination() {
		currentPaginationPage.set(1);
	}

	$: pathName = $page.url.pathname;
	$: isCategorySelected = pathName.substring(1) === category;

	export let category: string;
	export let content: string;
</script>

<a href={'/' + category} title={'category ' + category}>
	<button tabindex="-1" class:selected={isCategorySelected} on:click={() => resetPagination()}
		>{content}</button
	>
</a>

<style lang="scss">
	button {
		width: max-content;
		background-color: transparent;
		border: none;
		color: var(--color-text-secondary);
		padding: 0.75em;
		font-size: 1.15em;
		scroll-snap-align: center;

		@include desktop-small {
			padding: 1em;
			font-size: 1.1em;
			margin: 0 1em;
			box-sizing: border-box;
			transition: ease-in 0.1s;
		}

		&.selected {
			color: var(--color-primary);
			font-weight: 700;
			border-bottom: 3px solid var(--color-primary);
		}
	}
</style>
