import type { Method } from '$lib/types';
import { category } from '$lib/enums';
export const get = (): unknown => {
	const showroomList: Method[] = [
		{
			name: 'Benchmark test',
			why: 'A standardised set allows you to compare your product to similar products.',
			how: 'Search for standardised tests in your problem domain and run them on your solution. Compare your results to those achieved by similar products on this same test.',
			practice:
				'Benchmark tests are regularly used to test pattern recognition software. If a standard set of data is recognised with the software, the results can be compared to that of other software. Benchmarks are also used to compare hardware or software in which performance plays an important role (e.g. how many forms can automatically be processed per minute, in comparison to other software).',
			ingredients: [
				'A standardised test.',
				'A need to compare your product to similar products.',
				'A way to evaluate your test results.'
			],
			category: category.showroom,
			image:
				'https://ictresearchmethods.nl/images/thumb/3/38/Benchmark_test.png/250px-Benchmark_test.png'
		}
	];
	return {
		body: {
			showroomList
		}
	};
};
