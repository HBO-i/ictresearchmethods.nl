<script lang="ts">
	import './_global.scss';
	import Topbar from '$lib/components/layout/Topbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Sidebar from '$lib/components/layout/sidebar/Sidebar.svelte';

	import {
		showSearchField,
		allMethods,
		isJavaScriptDisabled,
		isDarkMode,
		isMacDevice
	} from '$lib/stores';

	import { onMount } from 'svelte';

	onMount(() => {
		setup();
	});

	function setup() {
		isJavaScriptDisabled.set(false);

		const isClientMac = navigator.platform.indexOf('Mac') > -1;
		isMacDevice.set(isClientMac);

		const htmlTag = document.documentElement;
		isDarkMode.set(htmlTag.classList.contains('dark'));

		const methodsAreNotAlreadyInStore = $allMethods.length < 1;

		if (methodsAreNotAlreadyInStore) {
			setAllMethodsInStore();
		}

		setSearchFieldKeyEvents();
	}

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
			const isMClicked = event.key === 'm';
			const isEscClicked = event.key === 'Escape';

			const cmdKWindows = isCtrlClicked && isMClicked; // CTRL + K is existing shortcut in Chrome
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
</script>

<div class="root">
	{#if $showSearchField}
		<div class="search-background-blur" />
	{/if}
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

	.search-background-blur {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.33);
		backdrop-filter: blur(4px);
	}

	main {
		padding: 0.75em;

		@include tablet {
			padding: 2em;
		}

		@include desktop-small {
			padding: 2.5em;
			min-height: 83vh;
			max-width: 75em;
		}
	}

	.content {
		@include desktop-small {
			display: flex;
		}
	}
</style>
