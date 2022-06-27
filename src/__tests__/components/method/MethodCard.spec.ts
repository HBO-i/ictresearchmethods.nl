import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';

import { method } from '$lib/mocks/method/method';
import Comp from '$lib/components/method/MethodCard.svelte';

describe('MethodCard', () => {
	test('renders correctly', () => {
		// Arrange
		const { getByRole } = render(Comp, { method });

		// Act & Assert
		expect(getByRole('article')).toBeInTheDocument();
	});
});
