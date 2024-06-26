<script lang="ts">
	import SidebarIcon from './SidebarIcon.svelte';
	import MobileHamburger from './MobileHamburger.svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';

	import { isMenuOpen } from '$lib/stores';
	import { sidebarRoutes, categoryRoutes, phaseRoutes } from '$lib/routes';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';

	import type { CategoryRoute, PhaseRoute } from '$lib/types';

	afterNavigate(() => {
		isMenuOpen.set(false);
	});

	$: pathName = $page.url.pathname;

	$: categoryName = pathName.endsWith('/') ? pathName.slice(1, -1) : pathName.slice(1);
	$: phaseName = pathName.startsWith('/phases/') ? pathName.split('/')[2] : '';

	$: checkCategory = (route: CategoryRoute) => route.category === categoryName;
	$: checkPhase = (route: PhaseRoute) => route.phase === phaseName;

	$: isActive = (routePath: string) => {
		if (
			routePath === '/' &&
			(categoryRoutes.some(checkCategory) || pathName.startsWith('/phases/'))
		) {
			return true;
		} else if (pathName.startsWith('/phases/') && phaseRoutes.some(checkPhase)) {
			return pathName === routePath;
		}
		return pathName === routePath;
	};
</script>

<nav class:visible={$isMenuOpen}>
	<ul class="non-style">
		{#each sidebarRoutes as route}
			<li>
				<a
					class:active={isActive(route.path)}
					href={route.path}
					target={route.icon === 'external' ? '_blank' : ''}
				>
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
			width: 17.5rem;
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
						padding: 1rem 0.8rem;
						letter-spacing: 0.5px;
					}

					@include desktop {
						padding: 1rem 2rem;
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

	.theme-switch-mobile {
		transform: scale(0.9);
		margin-top: 2em;

		@include desktop-small {
			display: none;
		}
	}
</style>
