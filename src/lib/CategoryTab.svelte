<script>
	// your script goes here
</script>

<ul>
	<li>
		<a href="?all">
			<button class="selected">All methods</button>
		</a>
	</li>
	<li>
		<a href="?library">
			<button>Library</button>
		</a>
	</li>
	<li>
		<a href="?field">
			<button>Field</button>
		</a>
	</li>
	<li>
		<a href="?lab">
			<button>Lab</button>
		</a>
	</li>
	<li>
		<a href="?showroom">
			<button>Showroom</button>
		</a>
	</li>
	<li>
		<a href="?workshop">
			<button>Workshop</button>
		</a>
	</li>
</ul>

<style lang="scss">
	ul {
		background-color: var(--color-white);
		border-radius: 1.5em;
		max-width: fit-content;
		list-style: none;
		margin: 0 1em;
		overflow-x: auto;
		display: flex;
		gap: 2em;
		padding: 0.5em;
	}

	button {
		width: max-content;
	}

	li a {
		text-decoration: none;
	}

	button {
		background-color: transparent;
		border: none;
		color: var(--color-text-secondary);
		padding: 1em;

		&.selected {
			color: var(--color-primary);
			font-weight: 700;
			border-bottom: 2px solid var(--color-primary);
		}
	}

	@media screen and (min-width: 1200px) {
		ul {
			min-height: 3em;
			display: flex;
			justify-content: center;
			padding: 0 1em;
			margin: 0;
			border-radius: 0.75em;
			gap: 5px;
		}

		button {
			margin: 0 1em;
			box-sizing: border-box;

			&.selected {
				border-bottom: 3px solid var(--color-primary);
			}
		}
	}
</style>
