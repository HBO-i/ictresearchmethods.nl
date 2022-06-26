<script lang="ts">
	import type { Method } from '$lib/types';
	import { allMethods, showSearchField, isJavaScriptDisabled } from '$lib/stores';

	let searchedArrayDisplay: Method[];

	/**
	 * Updates the search query based on the input field and adds the corresponding methods in the search array
	 *
	 * @param {KeyBoardEvent} e - Keyup/keychange event
	 */

	const updateSearchQuery = (e: KeyboardEvent) => {
		const searchInput = e.target as HTMLInputElement;
		const searchQuery = searchInput.value.toLowerCase();

		if (searchQuery.length > 1) {
			showSearchField.set(true);
		}

		if (searchQuery.length < 1) {
			showSearchField.set(false);
		}

		const searchedArray = $allMethods.filter(function (method: Method) {
			const lowerCasedMethodName = method.name.toLowerCase();

			return lowerCasedMethodName.includes(searchQuery);
		});

		searchedArrayDisplay = searchedArray.splice(0, 3);
	};

	/**
	 * Clears the search and disables the search dropdown after searching
	 */
	const clearSearch = () => {
		const form = document.getElementsByTagName('form');
		form[0].reset();

		showSearchField.set(false);
	};
</script>

{#if $isJavaScriptDisabled}
	<form action="/search">
		<input type="text" name="query" placeholder="Search method" />
		<label for="search">Search for method</label>
		<button>Search</button>
	</form>
{:else}
	<form action="/search" id="form">
		<input
			type="text"
			id="search"
			name="query"
			placeholder="Search method (CMD + K)"
			on:keyup={(e) => {
				updateSearchQuery(e);
			}}
		/>
		<button tabindex="-1">Search</button>
		<label for="search">Search for method</label>
	</form>

	{#if $showSearchField}
		<ul>
			{#each searchedArrayDisplay as method}
				<li>
					<a href={'/' + method.category + '/' + method.slug} on:click={clearSearch}>
						<span>{method.name}</span> - {method.category}
					</a>
				</li>
			{/each}
			{#if searchedArrayDisplay.length === 0}
				<li class="no-results">No results.. Try another query</li>
			{/if}
		</ul>
	{/if}
{/if}

<style lang="scss">
	form {
		position: relative;
		display: flex;

		input {
			border: none;
			border-radius: 0.75em;
			background-color: var(--color-bg);
			color: var(--color-text-secondary);
			padding: 1em 1.5em;
			display: none;
			min-width: 40em;
			transition: ease-in 0.1s;
			position: relative;
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
			background-color: var(--color-white);
			border: none;
			outline: 2px solid rgba(0, 0, 0, 0.1);
			border-radius: 0.5em;
			padding: 1em;
			display: none;
			justify-content: center;
			align-items: center;

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
		top: 5%;
		background-color: var(--color-bg);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		width: 30%;
		box-sizing: border-box;
		border-top: 1.5px solid rgba(0, 0, 0, 0.1);
		border-bottom-left-radius: 0.5em;
		border-bottom-right-radius: 0.5em;

		li {
			width: 100%;
			text-transform: capitalize;

			a {
				text-decoration: none;
				color: var(--color-black);
				padding: 1em 2em;
				display: block;

				&:focus {
					background-color: var(--color-white);
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

	@media screen and (min-width: 1200px) {
		form {
			input {
				display: block;
			}

			button {
				display: flex;
			}
		}
	}
</style>
