<script lang="ts">
	import EditPage from '$lib/components/EditPage.svelte';
</script>

<svelte:head>
	<title>About — ICT Research Methods</title>
	<meta
		name="description"
		content="The ICT Research Methods Pack is a card set with research methods for
	design-oriented research within ICT, developed by HBO-i"
	/>
</svelte:head>

<h1>About</h1>

<p>
	As an ICT student or professional, you need to solve all kind of ICT challenges. Answering the
	questions and tackling the problems or opportunities of your ICT project requires research and
	often a combination of various ICT research methods. The toolkit on this website offers you a set
	of possible research methods and a framework to select the appropriate (combination of) methods.
</p>

<p>
	The ICT Research Methods Pack is a card set with research methods for design-oriented research
	within ICT, developed by <a href="https://www.hbo-i.nl/" target="_blank">HBO-i</a>. The set is
	suitable for use within ICT courses such as the broad ICT bachelor, business informatics or
	technical information. With the set you can orientate yourself on research methods and plan your
	project. The methods contained in the map set fit with the different research strategies of the
	Methods Map Practical Research, an internationally recognized framework for design research.
</p>

<h2>How to cite</h2>

<p>If you want to refer to the physical card set, please use this citation:</p>

<cite>
	Bonestroo, W.J., Meesters, M., Niels, R., Schagen, J.D., Henneke, L., Turnhout, K. van (2018): ICT
	Research Methods. HBO-i, Amsterdam. ISBN/EAN: 9990002067426.
</cite>

<h2>Contributing</h2>

<p>
	If you want to adjust the content on the website, you are more than welcome to edit it by
	yourself. The repository is open source, so you are able to make changes by yourself. There is a
	team of maintainers that has to approve your changes.
</p>

<p>
	More information about how to contribute can be found in the <a
		href="https://github.com/HBO-i/ictresearchmethods.nl#v-contributing"
		target="_blank">README of the project</a
	>.
</p>

<h2>Licensing</h2>

<p>
	All of its contents and the physical Methods pack have been realised as, and are maintained by
	<a href="https://www.hbo-i.nl/" target="_blank">HBO-i </a> projects.
</p>
<p>The Method cards (except the domain specific cards) were written by:</p>

<ul>
	<li>Wilco Bonestroo</li>
	<li>Marcel Meesters</li>
	<li>Ralph Niels</li>
	<li>Jan Dirk Schagen</li>
	<li>Koen van Turnhout</li>
</ul>
<p>All Method cards were illustrated by Laura Henneke</p>

<EditPage editRoute="about" />

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
