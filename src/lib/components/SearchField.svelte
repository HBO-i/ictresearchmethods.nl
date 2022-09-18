<script lang="ts">
	import type { Method } from '$lib/types';
	import { allMethods, showSearchField, isJavaScriptDisabled, isMacDevice } from '$lib/stores';

	import { goto } from '$app/navigation';
	import { matchSorter } from 'match-sorter';
	import { focusTrap } from 'svelte-focus-trap';

	let searchedArrayDisplay: Method[];

	/**
	 * Updates the search query based on the input field and adds the corresponding methods in the search array
	 */
	const updateSearchQuery = (e: KeyboardEvent) => {
		const searchInput = e.target as HTMLInputElement;
		const searchQuery = searchInput.value;

		if (searchQuery.length > 1) {
			showSearchField.set(true);
		}

		if (searchQuery.length < 1) {
			showSearchField.set(false);
		}

		const searchedArray = matchSorter($allMethods, searchQuery, {
			keys: ['name']
		});

		searchedArrayDisplay = searchedArray.splice(0, 5);
	};

	/**
	 * Clears the search and disables the search dropdown after searching
	 */
	const clearSearch = () => {
		const form = document.getElementsByTagName('form');
		form[0].reset();

		showSearchField.set(false);
	};

	/**
	 * Client-side version of submitting the form
	 */
	const submitForm = (e: SubmitEvent) => {
		const data = new FormData(e.target);
		const formData = [...data.entries()][0];

		const searchName = formData[0];
		const searchQuery = formData[1];

		goto(`/search?${searchName}=${searchQuery}`);
		clearSearch();
	};
</script>

{#if $isJavaScriptDisabled}
	<form action="/search">
		<input type="text" name="query" placeholder="Search method" />
		<label for="search">Search for method</label>
		<button>Search</button>
	</form>
{:else}
	<form id="form" on:submit|preventDefault={(e) => submitForm(e)} use:focusTrap>
		<input
			type="text"
			id="search"
			name="query"
			placeholder={`Search method ${$isMacDevice ? '(CMD + K)' : '(CTRL + M)'}`}
			on:keyup={(e) => {
				updateSearchQuery(e);
			}}
		/>
		<button tabindex="-1">Search</button>
		<label for="search">Search for method</label>

		{#if $showSearchField}
			<ul class="non-style">
				{#each searchedArrayDisplay as method}
					<li>
						<a
							href={'/' + method.category + '/' + method.slug}
							on:click={clearSearch}
							class="custom-style"
						>
							<span>{method.name}</span> - {method.category}
						</a>
					</li>
				{/each}
				{#if searchedArrayDisplay.length === 0}
					<li class="no-results">No results.. Try another query</li>
				{/if}
			</ul>
		{/if}
	</form>
{/if}

<style lang="scss">
	form {
		position: relative;
		display: flex;
		justify-content: center;
		padding: 1em;
		z-index: 10;

		@include desktop-small {
			padding: 0;
		}

		input {
			border: none;
			border-radius: 0.75em;
			background-color: var(--color-bg);
			color: var(--color-text);
			padding: 1em 1.5em;
			display: block;
			width: 70vw;
			transition: ease-in 0.1s;
			position: relative;
			font-size: 1em;
			text-align: center;

			&::placeholder {
				color: var(--color-text-secondary);
			}

			@include desktop-small {
				width: 40em;
				font-size: 0.8em;
				text-align: left;
			}
		}

		label {
			visibility: hidden;
			position: absolute;
		}

		button {
			position: absolute;
			right: 0;
			top: 50%;
			transform: translate(-10%, -50%);
			height: 50%;
			background-color: #fff;
			border: none;
			outline: 2px solid rgba(0, 0, 0, 0.1);
			border-radius: 0.5em;
			padding: 1em;
			display: none;
			justify-content: center;
			align-items: center;

			@include desktop-small {
				display: flex;
			}

			&:hover {
				background-color: #f3f3f3;
			}

			&:active {
				background-color: hsl(0, 0%, 90%);
			}
		}

		&:hover,
		&:focus {
			transform: scale(1.01);
		}
	}

	ul {
		position: absolute;
		top: 75%;
		background-color: var(--color-bg);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		width: 90%;
		box-sizing: border-box;
		border-top: 1.5px solid rgba(0, 0, 0, 0.1);
		border-bottom-left-radius: 0.5em;
		border-bottom-right-radius: 0.5em;

		@include desktop-small {
			width: 100%;
		}

		li {
			width: 100%;
			text-transform: capitalize;

			a {
				text-decoration: none;
				color: var(--color-black);
				padding: 1em 2em;
				display: block;

				&:focus {
					background-color: var(--color-primary);
					color: white;
				}

				span {
					font-weight: bold;
				}
			}
		}

		li.no-results {
			padding: 1.5em;
		}
	}
</style>
