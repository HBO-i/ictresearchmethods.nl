import { getTheme, setTheme } from '../../src/lib/utils/themeManager';

describe('ThemeManager', () => {
	test('getTheme gets proper theme afert it got set 1/3', () => {
		setTheme('light');
		expect(getTheme()).toBe('light');
	});
	test('getTheme gets proper theme afert it got set 2/3', () => {
		setTheme('light');
		setTheme('dark');
		expect(getTheme()).toBe('dark');
	});
	test('getTheme gets proper theme afert it got set 3/3', () => {
		setTheme('rainbow');
		expect(getTheme()).toBe('rainbow');
	});
	test('getTheme retrieves from localstorage 1/2', () => {
		localStorage.setItem('preferred-theme', 'dark');
		expect(getTheme()).toBe('dark');
	});
	test('getTheme retrieves from localstorage 2/2', () => {
		localStorage.setItem('preferred-theme', 'light');
		expect(getTheme()).toBe('light');
	});
	test('getTheme retrieves from matchMedia if none defined', () => {
		const matchMedia = jest.fn().mockImplementation(() => {
			return {};
		});
		Object.defineProperty(window, 'matchMedia', { value: matchMedia });
		expect(getTheme()).toBe('light');
	});
});
