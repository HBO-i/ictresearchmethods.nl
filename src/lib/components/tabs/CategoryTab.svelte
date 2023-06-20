<script lang="ts">
	import { page } from '$app/stores';
	import TabButton from '$lib/components/tabs/TabButton.svelte';

	import { categoryRoutes } from '$lib/routes';

	let ul: HTMLElement;
	let activeTab = $page.url.pathname.slice(1, -1);

	/*
		I've no idea how this is working, but somehow it works.
		Will have a better look later on.

		@TODO: Have a look at this function
	*/
	const updateSelectedTab = (category: string, event: Event) => {
		if (event) {
			const buttonElement = event.target as HTMLElement;

			if (buttonElement) {
				const linkElement = buttonElement.parentElement;

				if (linkElement) {
					const li = linkElement.parentElement;

					if (li) {
						// 1). Find the active element
						const activeLi = li;

						// 2). Get the center of active element
						const centerOfLi = activeLi.offsetWidth / 2;

						// 3). Get left position + center position
						const leftBorderPositionOfLi = activeLi.offsetLeft;
						const positionOfCenterLi = leftBorderPositionOfLi + centerOfLi;

						// 4). Get current scroll position
						const currentScrollPosition = ul.scrollLeft; // 0 - 527

						// 5). Get container width
						const containerWidth = ul.offsetWidth; // 351
						const centerOfContainer = containerWidth / 2; // 175.5

						// 6). Set position
						const position = positionOfCenterLi + currentScrollPosition - centerOfContainer;

						// 7. Set scrollLeft
						ul.scrollLeft = position / 2; // Doesn't work correctly, yet
						// ul.scrollLeft = position / 2 + 10; // Works one way => left to right
						// ul.scrollLeft = position / 2 - 10; // Works one way => right to left

						activeTab = category;
					}
				}
			}
		}
	};
</script>

<ul class="non-style category-tab" bind:this={ul}>
	{#each categoryRoutes as route}
		<li
			class:active={activeTab === route.category}
			on:click={(event) => updateSelectedTab(route.category, event)}
		>
			<TabButton category={route.category} content={route.title} />
		</li>
	{/each}
</ul>

<style lang="scss">
	ul.category-tab {
		background-color: var(--color-white);
		border-radius: 1.5em;
		max-width: fit-content;
		overflow-x: auto;
		display: flex;
		gap: 2em;
		padding: 0.5em 1.25em;
		scroll-snap-type: x mandatory;

		@include tablet {
			padding: 0.25rem;
		}

		@include desktop-small {
			box-sizing: border-box;
			min-height: 3rem;
			justify-content: center;
			padding: 0 1rem;
			border-radius: 0.75rem;
			gap: 5px;
			overflow-y: hidden;
		}
	}
</style>
