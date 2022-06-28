<script lang="ts">
	import SidebarIcon from './SidebarIcon.svelte';
	import { sidebarRoutes } from '$lib/routes';
	import { page } from '$app/stores';

	// const categories = ['library', 'field', 'lab', 'showroom', 'workshop'];

	$: pathName = $page.url.pathname;
</script>

<aside>
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
</aside>

<style lang="scss">
	aside {
		min-width: 17.5em;
		background-color: var(--color-white);
		padding: 1em 0;
		min-height: 100%;
		display: none;

		ul {
			display: flex;
			flex-direction: column;

			li {
				padding: 0 1em;

				a {
					text-decoration: none;
					color: var(--color-text-secondary);
					font-weight: 700;
					display: flex;
					align-items: center;
					gap: 1em;
					padding: 1em 2em;
					border-radius: 0.75em;
				}
			}
		}

		.active {
			background-color: var(--color-primary);
			color: var(--color-white);
		}
	}

	@media screen and (min-width: 1200px) {
		aside {
			display: block;
		}
	}
</style>
