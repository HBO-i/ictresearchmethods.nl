<script>
	import '../global.scss';
	import Topbar from '$lib/Topbar.svelte';
</script>

<div class="root">
	<Topbar />
	<slot />
</div>

<style>
	.root {
		background-color: var(--color-bg);
		margin: 0;
		padding: 0;
		min-height: 100vh;
	}

	@media screen and (min-width: 1200px) {
	}
</style>
