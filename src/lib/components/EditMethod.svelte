<script lang="ts">
	import Edit from '$lib/assets/icons/edit.svelte';

	export let category: string;
	export let methodSlug: string;
</script>

<div class="edit-page-container">
	<a
		href={`https://github.com/HBO-i/ictresearchmethods.nl/edit/master/src/content/methods/text/${category}/${methodSlug}.md`}
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
