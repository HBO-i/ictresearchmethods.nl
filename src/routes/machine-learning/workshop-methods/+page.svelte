<script lang="ts">
	import EditPage from '$lib/components/EditPage.svelte';
</script>

<svelte:head>
	<title>Machine Learning — ICT Research Methods</title>
	<meta
		name="description"
		content="Machine Learning (ML) software is a software system with one or more components that learn from data. "
	/>
</svelte:head>

<p class="detail__details">
	<a href="/machine-learning">{'<'}</a>Go back
</p>

<h1>Workshop methods for machine learning</h1>

<p>
	Machine Learning (ML) software is a software system with one or more components that learn from
	data. This entails engineering a pipeline for the collection and pre-processing of data, the
	training of an ML model, the deployment of the trained model to perform inference and the software
	engineering of the encompassing software system that sends new input data to the model to get
	answers.
</p>

<p>
	<a href="/machine-learning" title="Domain: Machine learning">For Machine Learning projects</a>,
	the existing <a href="/workshop" title="Category:Workshop">Workshop</a> methods can be applied as follows:
</p>

<ul>
	<li>
		<a href="/workshop/brainstorm" title="Brainstorm">Brainstorm</a> Since the engineering of ML solutions
		is highly experimental (trying out algorithms and their tuning) it is recommended to use brainstorms
		to get the input of others in those experiments. What to try next? How to improve our model score?
	</li>
	<li>
		<a href="/workshop/business-case-exploration" title="Business case exploration"
			>Business case exploration</a
		> It might be necessary to compare a scenario with ML to a scenario without ML. Is it worth the effort
		or investment to start an ML project?
	</li>
	<li>
		<a href="/workshop/code-review" title="Code review">Code review</a> The most important code (ML
		library calls) behaves as a black box. To get the most out of your code reviews it is
		recommended you chose a talk through or pair programming approach. See the
		<a
			rel="nofollow"
			class="external text"
			href="https://www.thoughtworks.com/insights/blog/coding-habits-data-scientists"
			target="_blank">blog of David Tan</a
		> for some examples of recommended coding practices.
	</li>
	<li>
		<a href="/workshop/decomposition" title="Decomposition">Decomposition</a> Decomposition of ML components
		is a known difficult problem. Still, you must be able to break your entire ML solution into smaller
		components. In engineering, the concept of pipelines is used to break the ML workflow into smaller
		steps, with each component in the pipeline being responsible for one step in the workflow.
	</li>
	<li>
		<a href="/workshop/gap-analysis" title="Gap analysis">Gap analysis</a> Gap analysis is another way
		to compare a scenario with ML to a scenario without ML. Where the business case exploration serves
		as an economical comparison, the gap analysis helps in understanding the design goals of your solution.
	</li>
	<li>
		<a href="/workshop/it-architecture-sketching" title="IT architecture sketching"
			>IT architecture sketching</a
		> Training ML solutions usually involves a cloud infrastructure to have enough processing power.
		In some projects you also need to think about the IT architecture needed to deploy, run and maintain
		the ML solution.
	</li>
	<li>
		<a href="/workshop/multi-criteria-decision_making" title="Multi-criteria decision making"
			>Multi-criteria decision making</a
		> An ML project may involve choice about tools, libraries, algorithms. It is a good idea to make
		these decisions visible by comparing alternatives against criteria.
	</li>
	<li>
		<a href="/workshop/prototyping" title="Prototyping">Prototyping</a> This is the main goal of the
		ML ICT project: create a working prototype of your ML solution. For ML prototype this involves some
		specific techniques like feature engineering, cross-validation, hyper parameter tuning, grid search,
		data quality checking, data preparation
	</li>
	<li>
		<a href="/workshop/requirements-prioritization" title="Requirements prioritization"
			>Requirements prioritization</a
		> Both data requirements and user requirements need to be prioritized. In ML projects you typically
		work in an agile way so this prioritization is then done through sprint backlog planning. It is good
		practice to first develop a working product with a “dumb” model and minimal dataset and then gradually
		improve the model complexity and the quality of the input data.
	</li>
	<li>
		<a href="/workshop/root-cause-analysis" title="Root cause analysis">Root cause analysis</a> If the
		goal of your ML solution is to solve a problem in the current situation, you first need to determine
		the root cause of the problem before you can design the proper solution. Root cause analysis can
		also be used for problems that arise during your ML project.
	</li>
</ul>

<!-- <EditPage editRoute="machine-learning" /> -->
<style lang="scss">
	h1,
	h2 {
		margin-bottom: 0;
	}

	li {
		@include desktop-small {
			font-size: 1em;
		}
	}

	p {
		margin-top: 0.5em;

		@include desktop-small {
			font-size: 1em;
		}
	}

	a {
		color: var(--color-black);
		font-weight: bold;

		&:hover {
			font-style: italic;
		}
	}

	.detail {
		&__details {
			color: var(--color-black);
			font-size: 1.5em;
			font-weight: 500;
			display: flex;
			gap: 0.75em;
			align-items: center;

			a {
				text-decoration: none;
				font-size: 1.5em;
				color: var(--color-black);
				font-weight: normal;

				&:hover {
					transform: scale(1.15);
					font-style: normal;
				}
			}
		}
	}
</style>
