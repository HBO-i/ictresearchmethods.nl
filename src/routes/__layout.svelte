<script lang="ts">
	import './_global.scss';
	import Topbar from '$lib/components/layout/Topbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Sidebar from '$lib/components/layout/sidebar/Sidebar.svelte';

	import { showSearchField, allMethods, isJavaScriptDisabled, isDarkMode } from '$lib/stores';

	import { onMount } from 'svelte';

	onMount(() => {
		isJavaScriptDisabled.set(false);

		const htmlTag = document.documentElement;
		isDarkMode.set(htmlTag.classList.contains('dark'));

		const methodsAreNotAlreadyInStore = $allMethods.length < 1;

		if (methodsAreNotAlreadyInStore) {
			setAllMethodsInStore();
		}

		setSearchFieldKeyEvents();

		/**
		 * Fetch all the methods and put them in the 'allMethods' array in the store
		 */
		async function setAllMethodsInStore() {
			const res = await fetch('/methods.json');

			if (res.ok) {
				const result = await res.json();
				allMethods.set(result.methodsArray);
			}
		}

		/**
		 * Set the CMD/CTRL + K shortcut and the ESC for leaving the search bar
		 */
		function setSearchFieldKeyEvents() {
			document.addEventListener('keydown', (event) => {
				const isCommandClicked = event.metaKey === true;
				const isCtrlClicked = event.ctrlKey === true;
				const isKClicked = event.key === 'k';
				const isEscClicked = event.key === 'Escape';

				const cmdKWindows = isCtrlClicked && isKClicked;
				const cmdKMac = isCommandClicked && isKClicked;

				const searchField = document.getElementById('search');

				if (cmdKWindows || cmdKMac) {
					searchField?.focus();
				}

				if (isEscClicked) {
					searchField?.blur();
					showSearchField.set(false);
				}
			});
		}
	});
</script>

<div class="root">
	<Topbar />
	<div class="content">
		<Sidebar />
		<main>
			<slot />
		</main>
	</div>
	<Footer />
</div>

<style lang="scss">
	.root {
		background-color: var(--color-bg);
		margin: 0;
		padding: 0;
		min-height: 100vh;
	}

	main {
		padding: 0.75em;

		@include tablet {
			padding: 2em;
		}

		@include desktop {
			padding: 2.5em;
			min-height: 83vh;
			max-width: 75em;
			margin-bottom: 2.5em;
		}
	}

	.content {
		@include desktop {
			display: flex;
		}
	}
</style>
