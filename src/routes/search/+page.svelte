<script lang="ts">
	import type { Method } from '$lib/types';

	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { allMethods } from '$lib/stores';
	import { matchSorter } from 'match-sorter';
	import MethodList from '$lib/components/method/MethodList.svelte';
	import MethodCard from '$lib/components/method/MethodCard.svelte';

	let searchedArrayDisplay: Method[];
	$: queryString = $page.url.search;
	$: searchQuery = queryString.split('=')[1] ?? '';
	$: formattedSearchQuery = searchQuery.toLowerCase().replace('+', ' ');

	$: searchedMethodsArray = $allMethods.filter(function (method: Method) {
		const lowerCasedMethodName = method.name.toLowerCase();

		return lowerCasedMethodName.includes(formattedSearchQuery);
	});

	$: isValidQuery = searchedMethodsArray.length > 0 && formattedSearchQuery !== '';

	$: isSearchEmpty = formattedSearchQuery === '';

	onMount(() => {
		searchedArrayDisplay = matchSorter($allMethods, searchQuery, {
			keys: ['name']
		});
	});
</script>

<svelte:head>
	<title>Search for: {formattedSearchQuery} — ICT Research Methods</title>
</svelte:head>

<a href="/">&larr; Back home</a>
<h1>Search for: {formattedSearchQuery}</h1>

{#if searchedArrayDisplay}
	<!-- <ul class="non-style search-results">
		{#each searchedArrayDisplay as method}
			<li>
				<a
					href={'/' + method.category + '/' + method.slug}
					title={method.name}
					class="custom-style"
				>
					<MethodCard {method} />
				</a>
			</li>
		{/each}
	</ul> -->
	<MethodList methodsArray={searchedArrayDisplay} />
{/if}

<!-- {#if isValidQuery}
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
{/if} -->

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
