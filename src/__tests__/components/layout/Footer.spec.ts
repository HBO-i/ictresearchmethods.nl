import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';

import Comp from '$lib/components/layout/Footer.svelte';

describe('Footer', () => {
	test('renders the footer', () => {
		const { getByRole } = render(Comp);

		expect(getByRole('contentinfo')).toBeInTheDocument();
	});

	test('contains a link in it', () => {
		const { getByRole } = render(Comp);

		expect(getByRole('link')).toBeInTheDocument();
	});
});
