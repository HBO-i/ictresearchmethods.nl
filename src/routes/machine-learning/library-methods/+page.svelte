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

<h1>Library methods for machine learning</h1>

<p>
	Machine Learning (ML) software is a software system with one or more components that learn from
	data. This entails engineering a pipeline for the collection and pre-processing of data, the
	training of an ML model, the deployment of the trained model to perform inference and the software
	engineering of the encompassing software system that sends new input data to the model to get
	answers.
</p>

<p>
	<a href="/machine-learrning" title="Domain: Machine learning">For Machine Learning projects</a>,
	the existing <a href="/library" title="Category:Library">Library</a> methods can be applied as follows:
</p>

<ul>
	<li>
		<a href="/library/available-product-analysis" title="Available product analysis"
			>Available product analysis</a
		> Reuse of models is an important topic for machine learning projects. This can be through an API
		or by downloading the model code and implementing it in your solution. Reuse of (open) data is also
		worth to investigate.
	</li>
	<li>
		<a href="/library/best-good-and-bad-practices" title="Best good and bad practices"
			>Best good and bad practices</a
		> Very important for machine learning projects. Sources of good practices are usually big companies
		like Microsoft that already have a track record in ML projects. Note that ML engineering is a relatively
		new discipline so best practices are still emerging. It is also a hype so you might be overwhelmed
		with what’s out there.
	</li>
	<li>
		<a href="/library/community-research" title="Community research">Community research</a> Main source
		of information for solving any technical issues you run into during the implementation of your ML
		model.
	</li>
	<li>
		<a href="/library/competitive-analysis" title="Competitive analysis">Competitive analysis</a> Might
		be necessary to identify the problem you are trying to solve with your machine learning application.
		What is the business goal for the project?
	</li>
	<li>
		<a href="/library/design-pattern-research" title="Design pattern research"
			>Design pattern research</a
		>
		Since ML engineering is quite new, there is limited knowledge on design patterns. A good overview
		is provided by
		<a
			rel="nofollow"
			class="external text"
			href="http://www.washi.cs.waseda.ac.jp/ml-patterns/"
			target="_blank">Washizaki et al.</a
		>
		We also see more developments going towards layered architectures for ML systems, like the
		<a
			rel="nofollow"
			class="external text"
			href="https://www.kdnuggets.com/2017/10/data-science-systems-engineering-approach.html"
			target="_blank">TensorLayer library</a
		>.
	</li>
	<li>
		<a href="/library/expert-interview" title="Expert interview">Expert interview</a> As a machine learning
		engineer you will probably work with data scientists who come up with the advanced models that you
		implement.
	</li>
	<li>
		<a href="/library/literature-study" title="Literature study">Literature study</a> You probably need
		this to identify possible ML algorithms for your problem domain. E.g. research on “anomaly detection
		in time series” or “object detection in images”.
	</li>
	<li>
		<a href="/library/swot-analysis" title="SWOT analysis">SWOT analysis</a> Might be necessary to identify
		the problem you are trying to solve with your machine learning application. What is the business
		goal for the project?
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
