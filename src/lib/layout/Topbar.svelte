<script lang="ts">
	import SearchField from '$lib/SearchField.svelte';
</script>

<header>
	<SearchField />
</header>

<style lang="scss">
	header {
		background-color: var(--color-white);
		height: 4em;
		display: none;
		justify-content: center;
		align-items: center;
	}

	@media screen and (min-width: 1200px) {
		header {
			display: flex;
		}
	}
</style>
