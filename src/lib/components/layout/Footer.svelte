<footer>
	<p>Made in 🇳🇱 with 🌧 by <a href="https://jochemvogel.com" target="_blank">Jochem</a></p>
</footer>

<style lang="scss">
	footer {
		padding-bottom: 1em;
		text-align: center;
		letter-spacing: 0.25px;
		word-spacing: 0.5px;
		font-size: 1.15em;

		@include desktop-small {
			display: none;
		}

		a {
			color: var(--color-black);
			text-decoration: none;
			font-weight: bold;

			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
