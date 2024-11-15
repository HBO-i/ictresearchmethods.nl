<script lang="ts">
	import QuestionCard from '$lib/components/QuestionCard.svelte';
	import Alert from '$lib/components/utils/Alert.svelte';

	const Pattern = {
		CLARIFY_FOCUS_AND_SCOPE: 'Clarify focus and scope',
		SOLIDIFY: 'Solidify',
		VALIDATE: 'Validate',
		CHOOSE_FITTING_TECHNOLOGY: 'Choose fitting technology',
		REALISE_AS_REQUIRED: 'Realise as required',
		REALISE_AS_AN_EXPERT: 'Realise as an expert'
	};

	const questionsArray = [
		{
			question: 'How do I get a grasp on what the stakeholders really want?',
			categories: ['field', 'workshop'],
			pattern: Pattern.CLARIFY_FOCUS_AND_SCOPE
		},
		{
			question: 'How can I help the stakeholders get clear what they really want?',
			categories: ['field', 'workshop'],
			pattern: Pattern.CLARIFY_FOCUS_AND_SCOPE
		},
		{
			question: 'How do I develop a deep enough understanding of the context using available work?',
			categories: ['field', 'library'],
			pattern: Pattern.SOLIDIFY
		},
		{
			question: 'How do I monitor the quality of my solution?',
			categories: ['workshop', 'lab'],
			pattern: Pattern.VALIDATE
		},
		{
			question: 'How do I choose the right technologies for my project?',
			categories: ['library', 'field', 'workshop'],
			pattern: Pattern.CHOOSE_FITTING_TECHNOLOGY
		},
		{
			question:
				'How can I ensure the product meets the needs of the stakeholders throughout the project?',
			categories: ['field', 'workshop', 'lab'],
			pattern: Pattern.REALISE_AS_REQUIRED
		},
		{
			question:
				'How do I develop a solution that is more generally applicable than just for my immediate stakeholders?',
			categories: ['library', 'workshop'],
			pattern: Pattern.REALISE_AS_AN_EXPERT
		},
		{
			question:
				'How do I develop a state-of-the-art solution that meets professional requirements?',
			categories: ['library', 'workshop'],
			pattern: Pattern.REALISE_AS_AN_EXPERT
		},
		{
			question:
				'How do I develop something using technologies or techniques that I don’t know yet?',
			categories: ['library', 'workshop'],
			pattern: Pattern.REALISE_AS_AN_EXPERT
		}
	];
</script>

<svelte:head>
	<title>Patterns — Research Methods for Design-Oriented Research in ICT</title>
</svelte:head>

<h1>Research pattern navigator</h1>
<p>
	Many research projects can be described in terms of one or more research patterns: each pattern is
	a combination of research strategies. What questions do you want to answer? Check the table below
	to find matching research patterns.
</p>

<section>
	<ul>
		{#each questionsArray as question}
			<li>
				<QuestionCard questionTitle={question.question} questionPattern={question.pattern} />
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	ul {
		list-style: none;
		padding-left: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	@media (max-width: 768px) {
		ul {
			grid-template-columns: 1fr;
		}
	}
</style>
