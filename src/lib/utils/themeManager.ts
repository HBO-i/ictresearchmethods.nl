const BROWSER_THEME_STORAGE_KEY = 'preferred-theme';

function getBrowserTheme(): string {
	const theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	// Attempt to store the user's theme preference in localStorage
	setTheme(theme);
	return theme;
}

export function setTheme(theme: string): void {
	localStorage.setItem(BROWSER_THEME_STORAGE_KEY, theme);
}
export function getTheme(): string {
	return localStorage.getItem(BROWSER_THEME_STORAGE_KEY) ?? getBrowserTheme();
}
