export default {
	transform: {
		'^.+\\.ts$': 'ts-jest',
		'^.+\\.svelte$': [
			'svelte-jester',
			{
				preprocess: true
			}
		]
	},
	moduleFileExtensions: ['js', 'ts', 'svelte'],
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	moduleNameMapper: {
		'^\\$lib(.*)$': '<rootDir>/src/lib$1',
		'^\\$app(.*)$': '<rootDir>/.svelte-kit/runtime/app$1'
	}
};
