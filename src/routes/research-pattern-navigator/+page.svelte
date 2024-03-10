<script lang="ts">
	import PatternCard from '$lib/components/PatternCard.svelte';
	import Alert from '$lib/components/utils/Alert.svelte';

	// @TODO: Find cleaner way of storing this (+page.ts?)
	const patternsArray = [
		{
			title: 'Clarify focus and scope',
			categories: ['field', 'workshop'],
			questions: [
				'How do I get a grasp on what the stakeholders really want?',
				'How can I help the stakeholders get clear what they really want?'
			]
		},
		{
			title: 'Solidify',
			categories: ['field', 'library'],
			questions: [
				'How do I develop a deep enough understanding of the context using available work?'
			]
		},
		{
			title: 'Validate',
			categories: ['workshop', 'lab'],
			questions: ['How do I monitor the quality of my solution?']
		},
		{
			title: 'Choose fitting technology',
			categories: ['library', 'field', 'workshop'],
			questions: ['How do I choose the right technologies for my project?']
		},
		{
			title: 'Realise as required',
			categories: ['field', 'workshop', 'lab'],
			questions: [
				'How can I ensure the product meets the needs of the stakeholders throughout the project?'
			]
		},
		{
			title: 'Realise as an expert',
			categories: ['library', 'workshop'],
			questions: [
				'How do I develop a solution that is more generally applicable than just for my immediate stakeholders?',
				'How do I develop a state-of-the-art solution that meets professional requirements?',
				'How do I develop something using technologies or techniques that I don’t know yet?'
			]
		}
	];
</script>

<Alert type="primary" title="Switch to old website">
	You can still access the old design, by visiting
	<a href="https://oud.ictresearchmethods.nl/Research_Pattern_Navigator" target="_blank">this url</a
	>.
</Alert>

<h1>Research pattern navigator</h1>
<p>
	Many research projects can be described in terms of one or more research patterns: each pattern is
	a combination of research strategies. What questions do you want to answer? Check the table below
	to find matching research patterns.
</p>

<section>
	<ul>
		{#each patternsArray as pattern}
			<li>
				<PatternCard
					patternTitle={pattern.title}
					patternCategories={pattern.categories}
					patternQuestions={pattern.questions}
				/>
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	ul {
		list-style: none;
		padding-left: 0;
	}

	li {
		margin: 2rem 0;
	}

	p {
		max-width: 90vw;
	}
</style>
