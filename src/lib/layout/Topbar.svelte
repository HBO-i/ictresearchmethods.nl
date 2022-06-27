<script lang="ts">
	import SearchField from '$lib/SearchField.svelte';
	import Github from '$lib/icons/header/github.svelte';
	import BmcLogo from '$lib/icons/header/bmc-logo.svelte';
</script>

<header>
	<a href="/" title="home">
		<img src="/ictmethods.png" alt="logo" />
	</a>
	<SearchField />
	<div class="icon-container">
		<a href="https://www.github.com/" target="_blank" title="github" class="github">
			<Github />
		</a>

		<a href="https://buymeacoffee.com/jochem" target="_blank" title="buy me a coffee" class="bmc">
			<BmcLogo />
		</a>
	</div>
</header>

<style lang="scss">
	header {
		background-color: var(--color-white);
		height: 4em;
		display: none;
		justify-content: center;
		align-items: center;
	}

	@media screen and (min-width: 1200px) {
		header {
			display: flex;
			border-bottom: 1.5px solid var(--color-bg);
			box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
			justify-content: space-between;
			padding: 0 2em;

			img {
				width: 10em;
				left: 0;
			}

			.icon-container {
				display: flex;
				flex-direction: row;
				gap: 1.5em;

				.github,
				.bmc {
					width: 2em;
					height: 2em;

					&:hover {
						transform: scale(1.1);
					}
				}
			}
		}
	}
</style>
