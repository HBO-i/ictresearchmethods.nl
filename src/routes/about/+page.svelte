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
	within ICT, developed by <a href="https://www.hbo-i.nl/" target="_blank">HBO-i </a>. The set is
	suitable for use within ICT courses such as the broad ICT bachelor, business informatics or
	technical information. With the set you can orientate yourself on research methods and plan your
	project. The methods contained in the map set fit with the different research strategies of the
	Methods Map Practical Research, an internationally recognized framework for design research.
</p>

<h2>Disclaimer</h2>

<p>
	The creator of this app does not own any of this content. All the ICT Research Methods on this
	website are a digital copy of the research methods in the physical ICT Methodspack. That one can
	be purchased via
	<a
		href="https://www.studystore.nl/p/9990002067426/ict-methodspack"
		target="_blank"
		class="ellipsis">https://www.studystore.nl/p/9990002067426/ict-methodspack</a
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

<h2>How to cite</h2>

<p>If you want to refer to the physical card set, please use this citation:</p>

<p>
	Bonestroo, W.J., Meesters, M., Niels, R., Schagen, J.D., Henneke, L., Turnhout, K. van (2018): ICT
	Research Methods. HBO-i, Amsterdam. ISBN/EAN: 9990002067426. Available from: <a
		href="https://www.studystore.nl/p/9990002067426/ict-methodspack"
		class="ellipsis"
		target="_blank">https://www.studystore.nl/p/9990002067426/ict-methodspack</a
	>.
</p>

<h2>About this app</h2>

<p>
	As mentioned before: all the content is already available, so why this app? Well.. personally I
	don't bring the physical pack with me all the time. Now I can access the ICT Research Methods all
	the time. Besides that not every bought the physical methods pack. I mean. You should, but you
	don't have to.
</p>

<p>
	With this app I hope I can encourage students to use the ICT Research Methods in a fun way. You
	can easily search for methods, use the app as PWA on your phone and even view your saved methods
	offline.
</p>
<p>
	Oh and btw, there is a <kbd>CMD</kbd>
	+ <kbd>K</kbd> search and a dark mode. I mean: what else do you need?
</p>

<h2>Future</h2>

<p>This app is still in development, so you might see some changes in the near future.</p>

<h2>Contributing</h2>

<p>
	I <a href="https://github.com/jochemvogel/ictmethods.nl" target="_blank">open sourced</a> the project,
	so other people can implement their own improvements. Enjoy! ✌️
</p>

<style lang="scss">
	h1,
	h2 {
		margin-bottom: 0;
	}

	li {
		@include desktop {
			font-size: 1em;
		}
	}

	p {
		margin-top: 0.5em;

		@include desktop {
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
