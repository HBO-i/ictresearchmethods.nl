<script lang="ts">
	import { isDarkMode } from '$lib/stores';
	import SearchField from '$lib/components/SearchField.svelte';
	import Github from '$lib/assets/icons/header/github.svelte';
	import GithubDark from '$lib/assets/icons/header/github-dark.svelte';
	import BmcLogo from '$lib/assets/icons/header/bmc-logo.svelte';
	import BmcLogoDark from '$lib/assets/icons/header/bmc-logo-dark.svelte';

	import ThemeSwitch from '../ThemeSwitch.svelte';
</script>

<header>
	<a href="/" title="home">
		{#if $isDarkMode}
			<img src="/ictmethods-dark.png" alt="logo" width="160" height="40" />
		{:else}
			<img src="/ictmethods.png" alt="logo" width="160" height="40" />
		{/if}
	</a>
	<div class="theme-switch-desktop">
		<ThemeSwitch />
	</div>
	<SearchField />
	<div class="icon-container">
		<a
			href="https://github.com/jochemvogel/ictmethods.nl"
			target="_blank"
			title="github"
			class="github"
		>
			{#if $isDarkMode}
				<GithubDark />
			{:else}
				<Github />
			{/if}
		</a>

		<a href="https://buymeacoffee.com/jochem" target="_blank" title="buy me a coffee" class="bmc">
			{#if $isDarkMode}
				<BmcLogoDark />
			{:else}
				<BmcLogo />
			{/if}
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

	.theme-switch-desktop {
		display: none;

		@include desktop {
			display: block;
			position: absolute;
			right: 7.5%;
			transform: scale(0.75);

			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
