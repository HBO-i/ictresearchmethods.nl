<script lang="ts">
	import SidebarIcon from './SidebarIcon.svelte';
	import MobileHamburger from './MobileHamburger.svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';

	import { isMenuOpen } from '$lib/stores';
	import { sidebarRoutes, categoryRoutes } from '$lib/routes';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';

	import Logo from '$lib/assets/img/hboi-logo.svelte';

	import type { CategoryRoute } from '$lib/types';

	afterNavigate(() => {
		isMenuOpen.set(false);
	});

	$: pathName = $page.url.pathname;

	$: categoryName = $page.url.pathname.substring(1); // pathName without the '/'
	$: checkName = (route: CategoryRoute) => route.category == categoryName; // Check if the current route matches a route in the array

	$: if (categoryRoutes.some(checkName)) {
		pathName = '/';
	}
</script>

<nav class:visible={$isMenuOpen}>
	<ul class="non-style">
		{#each sidebarRoutes as route}
			<li>
				<a class:active={pathName === route.path} href={route.path}>
					<SidebarIcon icon={route.icon} />
					{route.title}
				</a>
			</li>
		{/each}
		<div class="theme-switch-mobile">
			<ThemeSwitch />
		</div>
	</ul>
</nav>

<MobileHamburger />

<style lang="scss">
	nav {
		display: none;

		@include desktop-small {
			display: block;
			min-width: 15em;
			max-width: 17.5em;
			min-height: 87vh;
			background-color: var(--color-white);
			padding: 2em 0;
			position: relative;
		}

		&.visible {
			position: fixed;
			top: 0;
			background-color: var(--color-bg);
			left: 0;
			bottom: 0;
			right: 0;
			opacity: 0.99;
			height: 100vh;
			width: 100vw;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			overflow-y: scroll;
		}

		ul {
			display: flex;
			flex-direction: column;
			align-items: center;

			@include desktop-small {
				align-items: stretch;
			}

			li {
				padding: 0 1em;

				a {
					font-size: 1.75em;
					text-decoration: none;
					color: var(--color-text-secondary);
					font-weight: 700;
					display: flex;
					align-items: center;
					gap: 1em;
					padding: 0.25em;
					border-radius: 0.75em;

					@include desktop-small {
						font-size: 1em;
						padding: 1em 2em;
						letter-spacing: 0.5px;
					}
				}
			}
		}

		.active {
			color: var(--color-black);

			@include desktop-small {
				color: var(--color-white);
				background-color: var(--color-primary);
			}
		}
	}

	.logo-container {
		display: none;

		@include desktop-small {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			bottom: 0;
			font-size: 1.1em;
			width: 100%;
		}
	}

	.theme-switch-mobile {
		transform: scale(0.9);
		margin-top: 2em;

		@include desktop-small {
			display: none;
		}
	}
</style>
