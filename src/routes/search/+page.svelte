<script lang="ts">
	import type { Method } from '$lib/types';

	import { page } from '$app/stores';

	import { allMethods } from '$lib/stores';
	import MethodList from '$lib/components/method/MethodList.svelte';

	let searchedArrayDisplay: Method[];
	$: queryString = $page.url.search;
	$: searchQuery = queryString.split('=')[1] ?? '';
	$: formattedSearchQuery = searchQuery.toLowerCase().replace('+', ' ');

	$: searchedArrayDisplay = $allMethods.filter((method: Method) => {
		const lowerCasedQuery = formattedSearchQuery.toLowerCase();

		// Check if any of the fields contain the search query
		return (
			method.name.toLowerCase().includes(lowerCasedQuery) ||
			method.why.toLowerCase().includes(lowerCasedQuery) ||
			method.how.toLowerCase().includes(lowerCasedQuery) ||
			method.practice.toLowerCase().includes(lowerCasedQuery) ||
			method.ingredients.some((ingredient) => ingredient.toLowerCase().includes(lowerCasedQuery)) ||
			method.phases.some((phase) => phase.toLowerCase().includes(lowerCasedQuery))
		);
	});
</script>

<svelte:head>
	<title>Search for: {formattedSearchQuery} — ICT Research Methods</title>
</svelte:head>
<a href="/">&larr; Back home</a>
<h1>Search for: {formattedSearchQuery}</h1>

{#if searchedArrayDisplay}
	<MethodList methodsArray={searchedArrayDisplay} />
{/if}

<noscript>
	Unfortunately the search doesn't work yet without JavaScript. We are working on it, but for now:
	please <a href="https://www.enable-javascript.com/" target="_blank">enable JavaScript</a> in your browser
	if you want to search.
</noscript>

<style lang="scss">
	.search-results {
		display: flex;
		flex-direction: column;
		gap: 0.5em;

		li a {
			text-decoration: none;
		}
	}
</style>
