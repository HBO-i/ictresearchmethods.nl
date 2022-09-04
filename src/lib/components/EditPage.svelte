<script lang="ts">
	import Edit from '$lib/assets/icons/edit.svelte';

	export let editRoute: string;
</script>

<div class="edit-page-container">
	<a
		href={`https://github.com/jochemvogel/ictmethods.nl/edit/development/src/routes/${editRoute}/%2Bpage.svelte`}
		target="_blank"
		title="Edit page on Github"><Edit />Edit this page</a
	>
</div>

<style>
	.edit-page-container {
		margin-top: 2em;
	}

	a {
		display: flex;
		gap: 0.2em;
	}
</style>
