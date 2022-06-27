<script lang="ts">
	import TabButton from '$lib/components/tabs/TabButton.svelte';

	import { categoryRoutes } from '$lib/routes';
</script>

<ul class="non-style">
	{#each categoryRoutes as route}
		<li>
			<TabButton category={route.category} content={route.title} />
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		background-color: var(--color-white);
		border-radius: 1.5em;
		max-width: fit-content;
		overflow-x: auto;
		display: flex;
		gap: 2em;
		padding: 0.5em 1.25em;
		scroll-snap-type: x mandatory;
	}

	@media screen and (min-width: 1200px) {
		ul {
			box-sizing: border-box;
			min-height: 3em;
			display: flex;
			justify-content: center;
			padding: 0 1em;
			border-radius: 0.75em;
			gap: 5px;
			overflow-y: hidden;
		}
	}
</style>
