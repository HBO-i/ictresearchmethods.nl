<script lang="ts">
	import EditPage from '$lib/components/EditPage.svelte';
	import stepsInMlImg from '$lib/assets/img/Steps_in_ML_project.png';

	let src = stepsInMlImg;
</script>

<svelte:head>
	<title>Machine Learning — ICT Research Methods</title>
	<meta
		name="description"
		content="Machine Learning (ML) software is a software system with one or more components that learn from data. "
	/>
</svelte:head>

<h1>Machine Learning</h1>

<p>
	Machine Learning (ML) software is a software system with one or more components that learn from
	data. This entails engineering a pipeline for the collection and pre-processing of data, the
	training of an ML model, the deployment of the trained model to perform inference and the software
	engineering of the encompassing software system that sends new input data to the model to get
	answers.
</p>

<p>
	<a
		href="https://fontysblogt.nl/software-engineering-for-machine-learning-applications/"
		target="_blank"
		>This post on ML projects
	</a>explains why ML projects are different from traditional rule-based software engineering and
	identifies eight challenges for engineering machine learning applications:
</p>

<ol>
	<li>Data requirements engineering including data visualizations</li>
	<li>ML components are more difficult to handle as distinct modules</li>
	<li>Design of the ML component through algorithm selection and tuning</li>
	<li>Break up the ML development in increments</li>
	<li>Data and model management for the current and future projects</li>
	<li>Find ML models that can be reused for your application</li>
	<li>Validation of ML applications in absence of a specification to test against</li>
	<li>Explainability of ML models is needed for debugging</li>
</ol>
<p>
	There is a research method called Data analytics (in the Lab strategy). This does not reflect the
	way of working in ML projects, where Data Analytics is not a method to answer one question but a
	method to fulfil the main goal of the project. For ML projects, the Data Analytics method should
	be divided in several smaller steps, each becoming a method of its own. In other words, we should
	treat the Data Analytics (or more appropriate ML engineering) process in the same way the software
	engineering process is treated in the DOT framework.
</p>

<figure>
	<img {src} alt="Steps in an ML project" width="800" />
	<figcaption>Figure 1: Steps in an ML project</figcaption>
</figure>

<p>
	For that we can use the highly schematical picture from Figure 1. In green, it show us the steps
	(high-level, derived from CRISP-DM) that should be done in the machine learning part of the
	project. For the research methods this means the Data Analytics method should be replaced by
	several separate methods:
</p>
<ul>
	<li>
		<strong>Data collection</strong>. Based on the model requirements (what type of data?) and the
		business understanding (which content should be in the data?) we should collect the data that is
		needed to train the ML model.
	</li>
	<li>
		<a href="/field/exploratory-data-analysis"><strong>Exploratory data analysis (Field)</strong></a
		>
		. Instead of requirements we have input data. Instead of interviewing users to collect requirements
		we should explore the given data to learn what we can do with it. This is called Exploratory Data
		Analysis.
	</li>
	<li>
		<strong>Data preparation</strong>. Once we understand the data, we should transform the data so
		that it can be used for training an ML model.
	</li>
	<li>
		<a href="/lab/data-quality-check"><strong>Data quality check (Lab)</strong></a>. Next to testing
		the software we should also test the data. It is well known that with wrong input data, the
		model will also produce wrong answers.
	</li>
	<li>
		<strong>ML model training</strong>. The way to approach the training of ML models is very
		specific; algorithm selection and hyperparameter tuning are part of it.
	</li>
	<li>
		<a href="/lab/model-validation"><strong>Model validation (Lab)</strong></a>
		. Next to testing software and data you also need to test the trained model.
	</li>
	<li>
		<a href="/lab/model-evaluation"><strong>Model evaluation (Lab)</strong></a>. Translate the ML
		model results to communicate and validate them with end users (e.g. through data visualization).
	</li>
</ul>

<p>
	Data collection, data preparation and ML model training are engineering steps that do not qualify
	as ICT research methods. The other four methods require a “card” of their own for ML projects, but
	might also be useful in other types of projects.
</p>

<p>
	For brief discussions of the other research methods and how they apply to ML projects, please
	refer to the next pages:
</p>
<ul>
	<li><a href="/machine-learning/library-methods">Library methods for machine learning</a></li>
	<li><a href="/machine-learning/field-methods">Field methods for machine learning</a></li>
	<li><a href="/machine-learning/workshop-methods">Workshop methods for machine learning</a></li>
	<li><a href="/machine-learning/lab-methods">Lab methods for machine learning</a></li>
	<li><a href="/machine-learning/showroom-methods">Showroom methods for machine learning</a></li>
</ul>

<EditPage editRoute="machine-learning" />

<style lang="scss">
	h1 {
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

	img {
		width: 85vw;
		max-width: 40rem;
	}

	figure {
		margin: 1rem;

		@include tablet {
			margin: 0 2rem;
		}

		@include desktop {
			margin: 0 2.5rem;
		}
	}
</style>
