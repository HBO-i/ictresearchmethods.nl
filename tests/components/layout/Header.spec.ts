import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';

import Comp from '$lib/components/layout/Topbar.svelte';

describe('Header', () => {
	test('renders the header', () => {
		const { getByRole } = render(Comp);

		expect(getByRole('banner')).toBeInTheDocument();
	});
});
