import '@testing-library/jest-dom';

import { render, fireEvent, screen } from '@testing-library/svelte';
import { isJavaScriptDisabled, isDarkMode } from '$lib/stores';

import Comp from '$lib/components/ThemeSwitch.svelte';

describe('ThemeSwitch', () => {
	test("adds a 'dark' class to button if button is clicked", async () => {
		isJavaScriptDisabled.set(false);
		isDarkMode.set(false);
		render(Comp);

		const switchButton = screen.getByTestId('themeToggle');

		await fireEvent.click(switchButton);

		expect(switchButton).toHaveClass('dark');
	});

	test("adds a 'dark' class to html if dark mode is enabled", () => {
		isDarkMode.set(true); // unnecessary?
		const html = document.documentElement;

		expect(html).toHaveClass('dark');
	});
});
