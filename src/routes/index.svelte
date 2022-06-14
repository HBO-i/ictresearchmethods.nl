<script>
	import MethodList from '$lib/MethodList.svelte';
	import CategoryTab from '$lib/CategoryTab.svelte';
</script>

<main>
	<h1 class="site-title">ICT Methods</h1>
	<CategoryTab />
	<MethodList />
</main>

<style>
	h1 {
		font-weight: 500;
		font-size: 1.25em;
		margin: 1em;
		width: 100%;
		text-align: center;
	}

	@media screen and (min-width: 1200px) {
		h1 {
			text-align: left;
			margin-left: 0;
		}

		main {
			padding: 1em 3em;
		}
	}
</style>
