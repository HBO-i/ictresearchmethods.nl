<script lang="ts">
	import { isDarkMode } from '$lib/stores';
	import SearchField from '$lib/components/SearchField.svelte';
	import Github from '$lib/assets/icons/header/github.svelte';
	import GithubDark from '$lib/assets/icons/header/github-dark.svelte';
	import ThemeSwitch from '../ThemeSwitch.svelte';

	import HboiLogo from '$lib/assets/img/hboi-logo.svelte';
</script>

<header>
	<a href="/" title="home" class="logo">
		<HboiLogo />
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
	</div>
</header>

<style lang="scss">
	header {
		background-color: var(--color-white);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		@include desktop-small {
			height: 4em;
			border-bottom: 1.5px solid var(--color-bg);
			box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
			justify-content: space-between;
			padding: 0 2em;
			flex-direction: row;
			position: sticky;
			top: 0;
		}
	}

	.icon-container {
		display: none;
		@include desktop-small {
			display: flex;
			flex-direction: row;
			gap: 1.5em;
		}

		.github {
			@include desktop-small {
				width: 2em;
				height: 2em;

				&:hover {
					transform: scale(1.1);
				}
			}
		}
	}

	.logo {
		width: 7.5rem;
		margin: 0.75rem 0;

		// @include desktop-small {
		// 	margin: 0;
		// }
	}

	.theme-switch-desktop {
		display: none;

		@include desktop-small {
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
