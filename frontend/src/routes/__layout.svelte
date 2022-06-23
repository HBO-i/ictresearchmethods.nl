<script>
	import '../global.scss';
	import Topbar from '$lib/layout/Topbar.svelte';
	import Footer from '$lib/layout/Footer.svelte';
</script>

<div class="root">
	<Topbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style lang="scss">
	.root {
		background-color: var(--color-bg);
		margin: 0;
		padding: 0;
		min-height: 100vh;
	}

	@media screen and (min-width: 1200px) {
		main {
			padding: 1em 3em;
			min-height: 83vh;
		}
	}
</style>
