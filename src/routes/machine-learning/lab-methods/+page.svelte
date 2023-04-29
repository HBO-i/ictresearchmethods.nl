<script lang="ts">
	import EditPage from '$lib/components/EditPage.svelte';
	import GoBack from '$lib/components/layout/GoBack.svelte';
</script>

<svelte:head>
	<title>Machine Learning — ICT Research Methods</title>
	<meta
		name="description"
		content="Machine Learning (ML) software is a software system with one or more components that learn from data. "
	/>
</svelte:head>

<GoBack link="/machine-learning" text="Go back" />

<h1>Lab methods for machine learning</h1>

<p>
	Machine Learning (ML) software is a software system with one or more components that learn from
	data. This entails engineering a pipeline for the collection and pre-processing of data, the
	training of an ML model, the deployment of the trained model to perform inference and the software
	engineering of the encompassing software system that sends new input data to the model to get
	answers.
</p>

<p>
	<a href="/machine-learning" title="Domain: Machine learning">For Machine Learning projects</a>,
	the existing <a href="/lab" title="Category:Lab">Lab</a> methods can be applied as follows:
</p>

<ul>
	<li>
		<a href="/lab/a-b-testing" title="A/B testing">A/B testing</a>. A good way to discover which
		version of the model delivers more value to the end user. You need to incorporate logging or
		diagnostics that helps you decide which model “works better”.
	</li>
	<li>
		<a href="/lab/component-test" title="Component test">Component test</a>. ML systems are
		difficult to divide into components so you need to come up with a clever way of doing this. ML
		components typically also interface through the data pipeline or shared data, so be aware of any
		adverse effects of changing one components behaviour on other components that use its output
		data.
	</li>
	<li>
		<a href="/lab/computer-simulation" title="Computer simulation">Computer simulation</a>.
		Simulation models can be used to provide predictions to the end user or to optimize processes.
		Simulation models (a digital twin) are also used in situations where it is difficult to collect
		data from physical systems. The digital twin is used to collect input data and to test how the
		system responds to predicted output data. The use of digital twins is typical for training
		reinforcement learning models.
		<i>Note: for ML projects this is not a Lab method, but a Workshop method.</i>
	</li>
	<li>
		<a href="/lab/data-analytics" title="Data analytics">Data analytics</a>. For ML projects this is
		not merely a Lab method. Its components “data collection”, “apply ML algorithms”, “data
		validation” and “ML model validation” merit separate methods in the framework.
	</li>
	<li>
		<a href="/lab/hardware-validation" title="Hardware validation">Hardware validation</a>. If your
		ML solution needs to run on hardware components this might be part of your project to validate
		the component first.
	</li>
	<li>
		<a href="/lab/non-functional-test" title="Non-functional test">Non-functional test</a>. The
		<a
			rel="nofollow"
			class="external free"
			href="https://www.researchgate.net/publication/334048996_Machine_Learning_Testing_Survey_Landscapes_and_Horizons"
			target="_blank">paper by Zhang et al.</a
		>
		provides a good overview of the properties to be tested for ML systems: correctness, overfitting
		degree, fairness, interpretability, robustness, security, data privacy, and efficiency. The paper
		also sums up a literature overview of the methods to test them. A practical translation of that can
		be found in
		<a
			rel="nofollow"
			class="external text"
			href="https://fontysblogt.nl/testing-machine-learning-applications/"
			target="_blank">this post by Petra Heck</a
		>.
	</li>
	<li>
		<a href="/lab/security-test" title="Security test">Security test</a>. Also for ML systems you
		need to find and prioritise vulnerabilities and determine their impact on the confidentiality,
		integrity and availability of information. Privacy issues are involved if the system processes
		personal data.
	</li>
	<li>
		<a href="/lab/system-test" title="System test">System test</a>. Since the system is
		self-learning (you did not program the rules yourself) it might be difficult to assess if the
		system is behaving as required. You need to think about how you will test this on beforehand,
		see
		<a
			rel="nofollow"
			class="external text"
			href="https://fontysblogt.nl/testing-machine-learning-applications/"
			target="_blank">Petra Heck's post on testing ML applications</a
		> for pointers. Usually you will keep aside part of your data for the final testing.
	</li>
	<li><a href="/lab/unit-test" title="Unit test">Unit test</a> See component test (above).</li>
	<li>
		<a href="/lab/usability-testing" title="Usability testing">Usability testing</a>. It is also
		important for ML solutions to test how well the end user is supported in the task the user needs
		to perform. Make sure you have a proper front-end (UI) through which the user can interact with
		the ML model and its outcome.
	</li>
	<li>
		<i
			>Note: there are separate methods for testing data and model: <a
				href="/lab/data-quality-check"
				class="new"
				title="Data quality check (page does not exist)">Data quality check</a
			>,
			<a href="/lab/model-validation" class="new" title="Model validation (page does not exist)"
				>Model validation</a
			>
			and
			<a href="/lab/model-evaluation" class="new" title="Model evaluation (page does not exist)"
				>Model evaluation</a
			>. See also
			<a
				rel="nofollow"
				class="external text"
				href="https://fontysblogt.nl/testing-machine-learning-applications/"
				target="_blank">this post on testing ML applications</a
			> for pointers on these topics.</i
		>
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
</style>
