<slot />

<style lang="scss">
	h1,
	h2 {
		margin-bottom: 0;
	}

	li {
		@include desktop-small {
			font-size: 1em;
		}
	}

	p {
		margin-top: 0.5em;

		@include desktop-small {
			font-size: 1em;
		}
	}

	a {
		color: var(--color-black);
		font-weight: bold;

		&:hover {
			font-style: italic;
		}
	}
</style>
