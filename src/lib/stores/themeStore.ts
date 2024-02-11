import { setTheme } from '$lib/utils/themeManager';
import { derived, writable } from 'svelte/store';

// Writables
export const themeState = writable('light');
// Derived
export const isDarkMode = derived(themeState, ($themeState) => $themeState === 'dark');

// Subscriptions
let isFirstRun = true;
themeState.subscribe((theme) => {
	// Ensure that we don't run the following code on the first run
	if (isFirstRun) {
		isFirstRun = false;
		return;
	}
	// Ensure that we're in a properly hydrated environment
	if (typeof document === 'undefined') return;

	// Set the theme
	setTheme(theme);

	// Retrieve the <html> element
	const htmlTag = document.documentElement;
	// Toggle the `dark` class on the <html> element
	htmlTag.classList.toggle('dark', theme === 'dark');
});
