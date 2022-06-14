<script lang="ts">
	import { selectedCategoryFilter } from '$lib/stores';

	function updateSelectedTab(selectedTab: string) {
		selectedCategoryFilter.set(selectedTab);
	}

	export let category: string;
	export let content: string;
</script>

<a href={'?category=' + category} tabindex="-1">
	<button
		class={$selectedCategoryFilter === category ? 'selected' : ''}
		on:click={() => updateSelectedTab(category)}>{content}</button
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
