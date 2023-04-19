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

<h1>Showroom methods for machine learning</h1>

<p>
	Machine Learning (ML) software is a software system with one or more components that learn from
	data. This entails engineering a pipeline for the collection and pre-processing of data, the
	training of an ML model, the deployment of the trained model to perform inference and the software
	engineering of the encompassing software system that sends new input data to the model to get
	answers.
</p>

<p>
	<a href="/machine-learning" title="Domain: Machine learning">For Machine Learning projects</a>,
	the existing <a href="/showroom" title="Category:Showroom">Showroom</a> methods can be applied as follows:
</p>

<ul>
	<li>
		<a href="/showroom/benchmark-test" title="Benchmark test">Benchmark test</a> “Benchmark tests
		are regularly used to test pattern recognition software. If a standard set of data is recognised
		with the software, the results can be compared to that of other software.” (quote from
		<a href="/Benchmark_test" title="Benchmark test">Benchmark test</a>) An example of this is the
		<a rel="nofollow" class="external text" target="_blank" href="http://yann.lecun.com/exdb/mnist/"
			>MNIST dataset</a
		> with handwritten digits that also shows test error rates for many different methods.
	</li>
	<li>
		<a href="/showroom/ethical-check" title="Ethical check">Ethical check</a> Ethical checks are
		even more important for ML solutions because you do not design the rules yourself, but let the
		system learn the rules from data. If the data is biased, this can result in unintended
		behaviour. You need a way to insure that the behaviour of the system stays within ethical
		boundaries. You must also make sure that the system is not learning something that invades
		people’s privacy. The
		<a rel="nofollow" class="external text" href="https://www.tict.io/" target="_blank"
			>Technology Impact Cycle Tool</a
		> provides a practical translation of several ethical considerations into a questionnaire and might
		help for your project as well.
	</li>
	<li>
		<a href="/showroom/guideline-conformity-analysis" title="Guideline conformity analysis"
			>Guideline conformity analysis</a
		>
		The guidelines that apply to software systems of course also apply to ML software systems. Since
		2017 there is a group at ISO (<a
			rel="nofollow"
			class="external text"
			target="_blank"
			href="https://www.iso.org/committee/6794475.html">ISO/IEC JTC 1/SC 42</a
		>) that works on standardization in the area of Artificial Intelligence.
	</li>
	<li>
		<a href="/showroom/peer-review" title="Peer review">Peer review</a> Having your work reviewed by
		peers is always a good idea. ML code is difficult to review because most ML algorithms are black
		boxes. It might be more valuable to organize a walkthrough of your ML experiments where you talk
		your peers through your way of thinking in designing the ML model. How did you come up with the final
		algorithm and its hyper parameters?
	</li>
	<li>
		<a href="/showroom/pitch" title="Pitch">Pitch</a> It is a good idea to also think about the business
		proposition or opportunity you see for your ML solution. Knowing the added value of your solution
		helps you make decisions during your engineering process.
	</li>
	<li>
		<a href="/showroom/product-review" title="Product review">Product review</a> Because of the experimentation
		required for engineering ML models, you will probably be working in an iterative or agile way. It
		is good practice to deliver a working model/product at the end of each iteration and have it reviewed
		by the client or users. If it is a model you deliver, you need to think of a good way for others
		to review or demonstrate it.
	</li>
	<li>
		<a href="/showroom/static-program-analysis" title="Static program analysis"
			>Static program analysis</a
		> You should also run code quality checkers on your ML software. However, since the most important
		code (ML library calls) behaves as a black box, you need additional quality checks as well.
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
