<script lang="ts">
	import { page } from '$app/stores';
	import { currentPaginationPage } from '$lib/stores';

	function resetPagination() {
		currentPaginationPage.set(1);
		console.log('hey');
	}

	const pathName = $page.url.pathname;

	/**
	 * Returns true if the pathname and the (selected) category are the same
	 *
	 * @param {string} category - category that is selected by the user
	 * @returns {boolean}
	 */
	function pathNameContainsCategory(category: string) {
		// All Methods tab
		if (category === '/' && pathName === '/') {
			return true;
		}

		if (category !== '/') {
			console.log(category);

			return pathName.substring(1) === category;
		}

		// console.log('hoi');
	}

	export let category: string;
	export let content: string;
</script>

<a href={category} tabindex="-1">
	<button
		class={pathNameContainsCategory(category) ? 'selected' : ''}
		on:click={() => resetPagination()}>{content}</button
	>
</a>

<style lang="scss">
	button {
		width: max-content;
		background-color: transparent;
		border: none;
		color: var(--color-text-secondary);
		padding: 1em;

		&.selected {
			color: var(--color-primary);
			font-weight: 700;
			border-bottom: 2px solid var(--color-primary);
		}
	}

	@media screen and (min-width: 1200px) {
		button {
			margin: 0 1em;
			box-sizing: border-box;
			transition: ease-in 0.1s;

			&.selected {
				border-bottom: 3px solid var(--color-primary);
			}
		}
	}
</style>
