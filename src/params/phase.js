const phases = new Set([
	'problem-definition',
	'analysis',
	'design',
	'realisation',
	'evaluation',
	'machine-learning'
]);

/** @type {import('@sveltejs/kit').ParamMatcher} */
export const match = (phase) => phases.has(phase);
