<script>
	// your script goes here
</script>

<header>
	<input type="text" placeholder="Search method (CMD + K)" />
</header>

<style lang="scss">
	header {
		background-color: var(--color-white);
		height: 4em;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	input {
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

	@media screen and (min-width: 1200px) {
		input {
			display: block;
		}
	}
</style>
