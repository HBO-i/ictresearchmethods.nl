<script lang="ts">
	import TabButton from '$lib/tabs/TabButton.svelte';
</script>

<ul>
	<li>
		<TabButton category="" content="All methods" />
	</li>
	<li>
		<TabButton category="library" content="Library" />
	</li>
	<li>
		<TabButton category="field" content="Field" />
	</li>
	<li>
		<TabButton category="lab" content="Lab" />
	</li>
	<li>
		<TabButton category="showroom" content="Showroom" />
	</li>
	<li>
		<TabButton category="workshop" content="Workshop" />
	</li>
</ul>

<style lang="scss">
	ul {
		background-color: var(--color-white);
		border-radius: 1.5em;
		max-width: fit-content;
		list-style: none;
		margin: 0 1em;
		overflow-x: auto;
		display: flex;
		gap: 2em;
		padding: 0.5em;
		scroll-snap-type: x mandatory;
	}

	@media screen and (min-width: 1200px) {
		ul {
			box-sizing: border-box;
			min-height: 3em;
			display: flex;
			justify-content: center;
			padding: 0 1em;
			margin: 0;
			border-radius: 0.75em;
			gap: 5px;
			overflow-y: hidden;
		}
	}
</style>
