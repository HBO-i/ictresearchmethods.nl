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

<h1>Field methods for machine learning</h1>

<p>
	Machine Learning (ML) software is a software system with one or more components that learn from
	data. This entails engineering a pipeline for the collection and pre-processing of data, the
	training of an ML model, the deployment of the trained model to perform inference and the software
	engineering of the encompassing software system that sends new input data to the model to get
	answers.
</p>
<p>
	<a href="/machine-learning" title="Domain: Machine learning">For Machine Learning projects</a>,
	the existing <a href="/field" title="Category:Field">Field</a> methods can be applied as follows:
</p>

<ul>
	<li>
		<a href="/field/document-analysis" title="Document analysis">Document analysis</a>. For ML
		projects it is most important to understand the data you will be working with. Any document
		explaining the data or the processes that produce the data could aid in this understanding. You
		also need to understand the purpose of your predictive model. In what way will the predictions
		be used to support a certain workflow or process? Documentation describing the workflow or
		process could aid in this. Furthermore documentation about the existing IT environment in which
		your ML application/module needs to operate is a good source to start from.
	</li>
	<li>
		<a href="/field/domain-modelling" title="Domain modelling">Domain modelling</a>. Domain
		modelling can help in understanding the data you will be working with.
	</li>
	<li>
		<a href="/field/explore-user-requirements" title="Explore user requirements"
			>Explore user requirements</a
		>. Although you still need to define user requirements for your end solution (the front-end that
		serves your model predictions to an end-user), you also need to focus on the data requirements:
		which training data is needed to train a good predictive model for unseen data? For this you
		also need to discuss with the stakeholders in an iterative process, because end users or domain
		experts are the ones that understand the data and can help you find incorrect or missing data.
	</li>
	<li>
		<a href="/field/focus-group" title="Focus group">Focus group</a>. With ML solutions the system
		is self-learning. For certain applications it is important to make the predictions or decisions
		of this type of model explainable. A focus group might help you discover if your solution will
		have trust-issues for end users.
	</li>
	<li>
		<a href="/field/interview" title="Interview">Interview</a>. Next to end user and other
		stakeholders you probably also need to interview IT experts or data scientists to get expert
		knowledge for your project.
	</li>
	<li>
		<a href="/field/observation" title="Observation">Observation</a>. This is a good way to find out
		which steps in a workflow would benefit from automated predictions or decision support. Ask
		people which rules they are using in their head to complete their tasks/steps, which data they
		use and if they in any way need to pre-process the data.
	</li>
	<li>
		<a href="/field/problem-analysis" title="Problem analysis">Problem analysis</a>. Also for ML
		projects there is always a problem you are trying to solve. Understanding the
		problem/opportunity helps in deciding when your model is “good enough” and with all other
		decisions you have to make during the ML project.
	</li>
	<li>
		<a href="/field/stakeholder-analysis" title="Stakeholder analysis">Stakeholder analysis</a>. To
		get a good understanding of your project you need to get input from all people involved or
		influenced by the project outcome. You will usually only deliver a prototype but do not forget
		to include roles like maintenance/devops who might need to run your solution in production in
		the future.
	</li>
	<li>
		<a href="/field/survey" title="Survey">Survey</a>. You might use surveys to reach out to a
		larger group of people at the same time (compared to interview).
	</li>
	<li>
		<a href="/field/task-analysis" title="Task analysis">Task analysis</a>. You should focus on the
		data used/processed and any steps that could benefit from decision support or automated
		predictions. What are the rules currently used for making the decision or prediction?
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
