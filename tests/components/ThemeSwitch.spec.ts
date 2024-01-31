import '@testing-library/jest-dom';

import { render, fireEvent, screen } from '@testing-library/svelte';
import { isJavaScriptDisabled } from '$lib/stores';
import { themeState } from '$lib/stores/themeStore';

import Comp from '$lib/components/ThemeSwitch.svelte';

describe('ThemeSwitch', () => {
	test("adds a 'dark' class to button if button is clicked", async () => {
		isJavaScriptDisabled.set(false);
		themeState.set('light');
		render(Comp);

		const switchButton = screen.getByTestId('themeToggle');

		await fireEvent.click(switchButton);

		expect(switchButton).toHaveClass('dark');
	});

	test("adds a 'dark' class to html if dark mode is enabled", () => {
		themeState.set('dark');
		const html = document.documentElement;

		expect(html).toHaveClass('dark');
	});
});
