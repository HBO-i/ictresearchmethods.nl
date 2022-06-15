import type { Method } from '$lib/types';

import { category } from '$lib/enums';

export const get = (): unknown => {
	const labList: Method[] = [
		{
			name: 'A/B testing',
			why: 'A minor change in a design may alter user behaviour in ways that are hard to detect in a usability test. An A/B test allows you to compare real-world user behaviour across different versions of a product.',
			how: 'In an A/B test, the user is presented with one of two versions of an interactive product. Remote software records metrics for user behaviour. These metrics are compared between the two versions to see which alternative is better. Sometimes, more than two alternatives are tested: A/B/X testing.',
			practice:
				'Google does a lot of A/B testing on its search services. The tiniest details can matter to Google because they have so many users. Some companies also use the A/B experimental design for testing concepts, rather than finished products.',
			ingredients: ['Specialised software.', 'Reliable metrics.', 'A large number of users.'],
			category: category.lab,
			image: 'https://ictresearchmethods.nl/images/thumb/5/5b/A_B_testing.png/250px-A_B_testing.png'
		},
		{
			name: 'Component test',
			why: 'Test a subsystem or component in isolation to ensure its correctness before integrating it with other components or modules.',
			how: 'In a component test, you test whole components or subsystems, instead of the atomic chunks of code that you test in unit tests. Test the component against its input and output relations (e.g. specified via interfaces). Component testing compares the outputs with expected results given pre-defined inputs.',
			practice:
				'Companies that use component testing want simple and clear interfaces between the components, which they view as an essential precondition for successful component testing. Microservices are a way to accomplish this and are more commonly used nowadays.',
			ingredients: [
				'A system that is split up into separate subsystems to allow for component testing.',
				'Access to and an understanding of the interfaces of the component under test.',
				'Drivers and stubs to simulate the behaviour of other components.'
			],
			category: category.lab,
			image:
				'https://ictresearchmethods.nl/images/thumb/5/5e/Component_test.png/250px-Component_test.png'
		},
		{
			name: 'Computer simulation',
			why: 'Computer simulations are used when a real-world process, system or event situation is not available or feasible.',
			how: 'A computer simulation requires modelling the environment or the hardware. Hardware that is not available, that can break during testing or that is too expensive can be simulated in such a way that other components in the system do not know that a stub is being used instead of the real hardware. A simulation allows you to run an experiment many times with different parameters.',
			practice:
				'To work on signal processing algorithms, raw sensor data can be simulated by sending a list of simulated readings instead of using a real sensor during development',
			ingredients: [
				'A design of the model.',
				'The ability to develop a model of the real hardware or situation.',
				'A simulation of the runtime environment.',
				'An evaluation of the simulation (i.e. does it work according to the intended model?).'
			],
			category: category.lab,
			image:
				'https://ictresearchmethods.nl/images/thumb/e/e6/Computer_simulation.png/250px-Computer_simulation.png'
		},
		{
			name: 'Data analytics',
			why: 'Gain insights by measuring and analysing data. Researching a dataset can give you useful quantitative information about the topic of interest.',
			how: 'Collect data that is relevant for your area of research and analyse it. Split your dataset into a training set and a test dataset. Find an algorithm that works with the training data and check whether it is reliable with the test data.',
			practice:
				'Applied data science is now done in many fields. For example, it is used in the business domain to predict customer behaviour.',
			ingredients: [
				'A data collection plan.',
				'Analysis tooling (e.g. statistical tooling or machine learning algorithms).',
				'A critical eye on the validity of your data and your conclusions',
				'Comprehensive data visualisations'
			],
			category: category.lab,
			image:
				'https://ictresearchmethods.nl/images/thumb/e/ea/Data_analytics.png/250px-Data_analytics.png'
		},
		{
			name: 'Hardware validation',
			why: 'Hardware does not always perform according to its specifications. Hardware validation ensures that the hardware performs as expected and excludes hardware as a source of errors.',
			how: 'Typically, hardware is first tested in a controlled lab environment. For example, you can compare sensor measurements to the actual values given by another reliable system (ground truth). Sometimes, hardware also needs to be calibrated. When hardware works in the lab, it can be validated in the actual application context.',
			practice:
				'After new hardware is ordered, it is validated before it is integrated into a larger system. It is difficult to find the source of errors after it is integrated with other components and used with complex software.',
			ingredients: [
				'Access to the hardware.',
				'The specifications and/or requirements for the hardware.',
				'A way to determine the ‘ground truth’ or desired behaviour.'
			],
			category: category.lab,
			image:
				'https://ictresearchmethods.nl/images/thumb/f/fb/Hardware_validation.png/250px-Hardware_validation.png'
		}
	];
	return {
		body: {
			labList
		}
	};
};
