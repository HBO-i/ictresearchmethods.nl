import type { Method } from '$lib/types';

export const method: Method = {
	name: 'Brainstorm',
	why: 'Generate and develop new ideas.',
	how: 'Bring people together to spark creativity and use a creativity technique to ensure a creative flow among the participants. Accept any ideas; filtering can be done in a later step. Build upon each other’s ideas, even bad ones. Avoid idea killers like early criticism.',
	practice:
		'Companies use brainstorming techniques like nominal group technique or directed brainstorming.',
	ingredients: [
		'An activity plan.',
		'A shared problem statement and rules.',
		'An anything goes mindset: bad ideas also count as a contribution.'
	],
	category: 'workshop',
	slug: 'brainstorm',
	phases: ['evaluation']
};
