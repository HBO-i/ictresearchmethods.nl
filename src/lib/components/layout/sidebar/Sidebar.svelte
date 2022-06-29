<script lang="ts">
	import SidebarIcon from './SidebarIcon.svelte';
	import MobileHamburger from './MobileHamburger.svelte';

	import { isMenuOpen } from '$lib/stores';
	import { sidebarRoutes, categoryRoutes } from '$lib/routes';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';

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
	</ul>
</nav>

<MobileHamburger />

<style lang="scss">
	nav {
		display: none;

		@include desktop {
			position: relative;
			display: block;
			min-width: 15em;
			max-width: 17.5em;
			background-color: var(--color-white);
			padding: 1em 0;
			min-height: 100%;
		}

		&.visible {
			position: fixed;
			top: 0;
			background-color: var(--color-black);
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
			z-index: 2; // @TODO: z-index.scss
		}

		ul {
			display: flex;
			flex-direction: column;
			align-items: center;

			@include desktop {
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

					@include desktop {
						font-size: 1em;
						padding: 1em 2em;
					}
				}
			}
		}

		.active {
			color: var(--color-white);

			@include desktop {
				background-color: var(--color-primary);
				color: var(--color-white);
			}
		}
	}
</style>
