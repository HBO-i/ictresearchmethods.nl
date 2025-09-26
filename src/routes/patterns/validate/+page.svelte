<script lang="ts">
	import GoBack from '$lib/components/layout/GoBack.svelte';
	import EditPage from '$lib/components/EditPage.svelte';
</script>

<svelte:head>
	<title>Validate — ICT Research Methods</title>
	<meta
		name="description"
		content="The type of test that you will perform depends on the type of product and the quality criteria
	that you want to know more about. "
	/>
</svelte:head>

<GoBack link="/research-pattern-navigator" text="Go back" />

<h1>Validate</h1>

<h2>Why?</h2>
<p>
	The validation pattern enables you to check whether your ideas, assumptions, designs et cetera
	really lead to the results you were hoping for. In this respect, the validation patterns help you
	to monitor the quality of your project. Typically, this involves answering two questions: (a) to
	what extent do project outcomes (e.g., prototypes) solve the problem that initiated the project?
	and (b) to what extent are project processes and outcomes examples of good professionalism?
</p>

<h2>How?</h2>
<p>
	The type of test that you will perform depends on the type of product and the quality criteria
	that you want to know more about. The starting point is the artefact created (outcome of the
	Workshop activity). To get an understanding of whether your artefact satisfies the needs of the
	stakeholders, you can use Lab methods such as system testing, usability testing or another
	non-functional test such as performance testing. To get an understanding of the professionalism of
	your artefact, you can use Showroom methods such as a review by experts, or automatic tools that
	can give an indication of the quality of your product (typically for software code).
</p>
<p>
	Remember that most tests include others such as stakeholders or experts and therefore
	communication skills are important as you want to involve them and support them in order to get
	the results that can help you.
</p>

<h2>When?</h2>
<p>
	Even though this pattern can be used during all project phases, it relies on the fact that you
	have collected some (first) results from the Workshop strategy such as a (paper) prototype, design
	documents, etc.
</p>
<p>
	Also note that when these results are still 'sketchy' and 'paper prototype(-ish)' this will have
	an impact on the methods you can use to execute the validation pattern when your workshop products
	become more tangible.
</p>

<h2>Risks</h2>
<p>
	Especially when users are involved, there is not always a clear or direct relationship between
	what you want to validate and how this can be measured or tested. This demands some extra
	research, commonly including more <a href="/library">Library</a> methods, to refine your test plan.
</p>
<p>
	When using <a href="/showroom">Showroom</a>
	methods during the Validation loop, always clarify what exactly you want to validate. If your objectives
	for <a href="/showroom">Showroom</a> methods are not set out clearly, you might just have proven
	that you did 'some work' but not that you have created added value. Showing added value to the
	project should always be an important aspect of the <a href="/showroom">Showroom</a> strategy.
</p>

<h2>Examples from practice</h2>

<h3>A progressive web application</h3>
<p>
	You have worked hard to develop a progressive web application and you have already used <a
		href="/lab">Lab</a
	>
	methods such as unit testing to verify the correctness of the methods and parts of the application.
	Also, you used <a href="/showroom">Showroom</a> methods such as static program analysis (e.g., with
	SonarQube) to verify the quality of your code.
</p>
<p>
	Now that you have realised a first version of the application, it needs to be validated against
	the requirements which resulted from earlier research. You conduct system testing and performance
	testing (performance was important to the customer). Also, you pitch your application and results
	to both the stakeholders and to some senior architects from the company and use their feedback to
	improve your application.
</p>

<ol>
	<li>Workshop — Develop a first version of the application</li>
	<li>Showroom — Verify code quality</li>
	<li>Lab — Test your application</li>
	<li>Showroom — Pitch your application to stakeholders and senior architects</li>
</ol>

<h3>Online booking platform</h3>
<p>
	For an online ticket booking platform you are building an application that uses caching to handle
	large amounts of ticket sales within a very short time. Building the application involved a lot of
	prototyping, but during the last iterations you have included several typical software engineering
	tests such as unit tests, A/B testing and code reviews from <a href="/lab">Lab</a> and
	<a href="/workshop">Workshop</a>.
</p>
<p>
	As the project reaches the final phase you decide to add a benchmark test (<a href="/showroom"
		>Showroom</a
	>) in which you compare your new application with the existing application. This way, you are able
	to show that your application scores 20 to 30% better than the existing application on the top
	three requirements of your stakeholder.
</p>

<ol>
	<li>Workshop — Build prototypes and perform code reviews</li>
	<li>Lab — How can I monitor the quality of the application I'm building?</li>
	<li>Workshop — Build prototypes and perform code reviews</li>
	<li>Showroom — How can I show the quality of my solution compared to another?</li>
</ol>

<h3>A video game foor teens</h3>
<p>
	You have been working on a video game in which the objective is to make teens more aware of the
	impact of peer pressure on starting to use drugs. You perform play tests including a survey (<a
		href="/lab">Lab</a
	>) to validate whether players understand the game. To find a way to measure if the teens'
	gameplay is actually influenced by peer pressure, you interview an expert (Library) and study
	relevant literature (<a href="/library">Library</a>). The outcome is to add a data analysis (<a
		href="/lab">Lab</a
	>) to your play test. To show that your method for measuring peer pressure is valid, you compare
	with existing guidelines in a Guideline conformity analysis (<a href="/showroom">Showroom</a>).
</p>

<ol>
	<li>Workshop — Develop a video game</li>
	<li>Lab — Do players understand the game?</li>
	<li>Libary — How to measure the impact of the game?</li>
	<li>Lab — Measure the impact of the game</li>
	<li>Showroom — How does the method used compare to existing guidelines?</li>
</ol>

<h3>A serious game for a marketing campaign</h3>
<p>
	You designed a serious game to promote new chocolate paste flavors to children. 
	Earlier, you did a focus group with kids, parents, and teachers (field) and studied literature on ethics in commercials (library). 
	These results gave you guidelines for what is and isn’t acceptable when advertising to children.
	With a first prototype ready, you do an ethical check (showroom) with company stakeholders to see if the game follows these guidelines. 
	Then, you run a usability test (lab) with children to check if ethical problems appear in practice, like the game being too persuasive or unhealthy. 
	Finally, an ethics expert does a heuristic evaluation (showroom) to make sure the game meets ethical standards. All these insights help you improve the game and keep it ethically sound.
</p>

<ol>
	<li>Workshop — Build the first prototype of the game</li>
	<li>Showroom — Ethical check with company stakeholders</li>
	<li>Lab — Usability test with children</li>
	<li>Showroom — Heuristic evaluation by an ethics expert</li>
</ol>

<EditPage editRoute="patterns/validate" />
