<script lang="ts">
	import SearchField from '$lib/components/SearchField.svelte';
	import Github from '$lib/assets/icons/header/github.svelte';
	import BmcLogo from '$lib/assets/icons/header/bmc-logo.svelte';
</script>

<header>
	<a href="/" title="home">
		<img src="/ictmethods.png" alt="logo" width="160" height="40" />
	</a>
	<SearchField />
	<div class="icon-container">
		<a
			href="https://github.com/jochemvogel/ictmethods.nl"
			target="_blank"
			title="github"
			class="github"
		>
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
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		@include desktop {
			height: 4em;
			border-bottom: 1.5px solid var(--color-bg);
			box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
			justify-content: space-between;
			padding: 0 2em;
			flex-direction: row;
			position: sticky;
			top: 0;
			z-index: 2;
		}
	}

	img {
		margin-top: 1em;
		width: 10em;
		left: 0;

		@include desktop {
			margin: 0;
		}
	}

	.icon-container {
		display: none;
		@include desktop {
			display: flex;
			flex-direction: row;
			gap: 1.5em;
		}

		.github,
		.bmc {
			@include desktop {
				width: 2em;
				height: 2em;

				&:hover {
					transform: scale(1.1);
				}
			}
		}
	}
</style>
