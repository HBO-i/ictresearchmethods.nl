<script lang="ts">
	import type { Method } from '$lib/types';

	import { page } from '$app/stores';
	import { allMethods } from '$lib/stores';
	import MethodList from '$lib/components/method/MethodList.svelte';

	$: queryString = $page.url.search;
	$: searchQuery = queryString.split('=')[1] ?? '';
	$: formattedSearchQuery = searchQuery.toLowerCase().replace('+', ' ');

	$: searchedMethodsArray = $allMethods.filter(function (method: Method) {
		const lowerCasedMethodName = method.name.toLowerCase();

		return lowerCasedMethodName.includes(formattedSearchQuery);
	});

	$: isValidQuery = searchedMethodsArray.length > 0 && formattedSearchQuery !== '';

	$: isSearchEmpty = formattedSearchQuery === '';
</script>

<svelte:head>
	<title>Search for: {formattedSearchQuery} — ICT Research Methods</title>
</svelte:head>

<a href="/">&larr; Back home</a>
<h1>Search for: {formattedSearchQuery}</h1>

{#if isValidQuery}
	<MethodList methodsArray={searchedMethodsArray} />
{:else if isSearchEmpty}
	<p>You're searching for nothing. How am I supposed to find something, lol?</p>
	<p>Go <a href="/">home</a>, you're drunk.</p>
{:else}
	<p>
		Nothing found. Are you sure this is a valid search query? Please try again or go back to <a
			href="/">home</a
		>.
	</p>
{/if}

<noscript>
	Unfortunately the search doesn't work yet without JavaScript. We are working on it, but for now:
	please <a href="https://www.enable-javascript.com/" target="_blank">enable JavaScript</a> in your browser
	if you want to search.
</noscript>
