<script lang="ts">
		import type { Method } from '$lib/types'
		import { allMethods, showSearchField } from '$lib/stores'

		let searchedArrayDisplay;

		const updateSearchQuery = (e: unknown) => {
			const searchQuery = e.target.value;


			if (searchQuery.length > 1) {
				showSearchField.set(true);
			}

			if (searchQuery.length < 1) {
				showSearchField.set(false);
			}

			const searchedArray = $allMethods.filter(function(method: Method) {
				const lowerCasedMethodName = method.name.toLowerCase();

				return lowerCasedMethodName.includes(searchQuery)
			})

			searchedArrayDisplay = searchedArray;
		}

		const clearSearch = () => {
			const form = document.getElementsByTagName('form');
			form[0].reset();

			showSearchField.set(false);
		}
</script>

<header>
	<form id="form">
		<input type="text" id="search" placeholder="Search method (CMD + K)" on:keyup={(e) => {updateSearchQuery(e)}} />
	</form>
	{#if $showSearchField}
	<div class="search-dropdown">
		<ul>
			{#each searchedArrayDisplay as method}
			<li>
				<a href={'/' + method.category + '/' + method.slug} on:click={clearSearch}>
					<span>{method.name}</span> - {method.category}
				</a>
			</li>
			{/each}
		</ul>
	</div>
	{/if}
</header>

<style lang="scss">
	header {
		background-color: var(--color-white);
		height: 4em;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	form input {
		border: none;
		border-radius: 0.75em;
		background-color: var(--color-bg);
		color: var(--color-text-secondary);
		padding: 1em 1.5em;
		display: none;
		min-width: 40em;
		transition: ease-in 0.1s;

		&:hover,
		&:focus {
			transform: scale(1.01);
		}
	}

	.search-dropdown {
		position: absolute;
		top: 5%;
		background-color: var(--color-bg);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		width: 30%;
		box-sizing: border-box;
		border-top: 1.5px solid rgba(0, 0, 0, 0.1);
		border-bottom-left-radius: 0.5em;
		border-bottom-right-radius: 0.5em;

		ul {
			list-style: none;
			padding-left: 0;

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

		}
	}

	@media screen and (min-width: 1200px) {
		form input {
			display: block;
		}
	}

</style>
