<script lang="ts">
	import GoBack from '$lib/components/layout/GoBack.svelte';
	import EditPage from '$lib/components/EditPage.svelte';
</script>

<svelte:head>
	<title>Solidify — ICT Research Methods</title>
	<meta
		name="description"
		content="Make short cycles (loops) during which you can take useful bits and pieces from the information
	you have collected with Field methods, into Library"
	/>
</svelte:head>

<GoBack link="/research-pattern-navigator" text="Go back" />

<h1>Solidify</h1>

<h2>Why?</h2>
<p>
	Usually, you are not an expert in the field of expertise for which you are asked to develop an ICT
	solution. In these cases, domain or context information you receive from stakeholders and users,
	might not be clear enough for you to interpret and understand well. The clarifying pattern helps
	you to ‘dig into the matter’ and get a better understanding of the information you have collected,
	before you can start to explore a solution.
</p>

<h2>How?</h2>
<p>
	Make short cycles (loops) during which you can take useful bits and pieces from the information
	you have collected with Field methods, into Library and vice versa. Once your understanding
	develops and the Field information becomes more meaningful, you can break out of the loop to start
	thinking about a matching solution using Workshop methods.
</p>

<h2>When?</h2>
<p>
	The solidifying pattern can be used during the early stages of a project, especially during the
	problem analysis. It helps you to understand how project specific aspects can be solved by
	investigating how they are solved in other contexts, comparable environments or in a more
	generalised form.
</p>

<h2>Risks</h2>
<p>
	The loop between <a href="/field">Field</a> and <a href="/library">Library</a> generates a solid knowledge
	foundation to work on but it does not necessarily bring you closer to a relevant and applicable solution.
	Solution explorations, including methods from Workshop, need to be included regularly.
</p>
<p>
	Taking <a href="/field">Field</a>
	information into the <a href="/library">Library</a> is useful but an overly extensive library-based
	research may take you away from the context. Make sure the loops are short and your enriched information
	flows back into the context regularly. Your objective should be to obtain a better understanding of
	the context and not to do an extensive literature study.
</p>
<p>
	If you are not able to find relevant resources you might have to repeat or refine your <a
		href="/field">Field</a
	>
	methods. It might, for example, turn out you did not filter out the right keywords for a proper literature
	study. Extending your <a href="/library">Library</a> methods (e.g. with an expert interview) can
	also help and sometimes, when the information from your <a href="/field">Field</a> methods is too fussy,
	you might need to use the Clarify Research Design Pattern first to be able to return to the Solidify
	Pattern.
</p>

<h2>Examples from practice</h2>

<h3>Building a backend to host large datasets</h3>
<p>
	A technical university asks you to build a backend that hosts large datasets generated during
	scientific experiments. Your backend should be able to (securely) support scientists around the
	world to analyse the data. In order to be able to think about a solution, you need to understand
	what the scientists mean by ‘performing research on the data’. Your project starts in Field with
	interviews and/or exploring user requirements. The scientists may talk about statistical data
	manipulations and calculations that you need to understand in more depth by using Library methods
	such as literature studies. They might even bring you in contact with one of their experts (expert
	interview) to help you.
</p>
<p>
	On the other hand, community research might lead to the idea that machine learning functionality
	should be part of the solution, and you take this suggestion back to the scientists (your
	stakeholders). Furthermore, the loop between <a href="/field">Field</a> and
	<a href="/library">Library</a> helps you to understand what ‘secure’ in this context means. International
	standards (ISO) found through conducting literature studies and evaluated during an expert interview
	with one of the staff members at the university, are used as input for a discussion with the scientists.
	This helps to clarify the level of security needed for the project.
</p>
<p>
	Break-out - at a certain moment your insights are developed enough for you to break-out of the
	Field-Library loop and to start thinking (concepting, brainstorming) about the solution (IT
	architecture sketching). You take your sketches and ideas back to the scientists and discus your
	solution (direction). This helps you to validate your sketches.
</p>

<ol>
	<li>Field — What do the researchers need?</li>
	<li>
		Library — How can I increase my knowledge on topics (e.g. architecture, Machine Learning,
		security) that are involved?
	</li>
	<li>
		Field — How does my increased knowledge help me to better understand what the researchers need?
	</li>
	<li>
		Library — How can I increase my knowledge on topics (e.g. architecture, Machine Learning,
		security) that are involved?
	</li>
	<li>
		Workshop — <i>Break-out</i> Create sketches, scenarios etc. that help you make your ideas about a
		matching solution more concrete and discussable.
	</li>
</ol>

<h3>Fire fighters and IoT</h3>
<p>
	You are asked to work on an IoT project with the objective to enable fire brigades to use their
	own local area network (LAN) communication whilst fighting a fire.
</p>
<p>
	Fire brigades have their own protocols and standards when it comes to how they fight fires, and
	they use a lot of ‘lingo’ (specific terminology) when they talk about their protocols and
	strategies. Being aware of this, you decide to first read up on these terms using online available
	resources (Literature study,
	<a href="/library">Library</a>). Only after you have prepared yourself properly, will you conduct
	the interview (<a href="/field">Field</a>) with the fire brigade in order to contextualise the
	assignment.
</p>
<p>
	During the interview, some new domain specific terminology might be introduced as well as other
	information that requires further research (such as examples of other solutions) and this might
	bring you back to the <a href="/library">Library</a>
	methods.
</p>
<p>
	At a certain moment you will have a solid understanding of the context, problem and domain, and
	you will break-out of the <a href="/field">Field</a>-<a href="/library">Library</a> loop in order
	to start sketching your solution (<a href="/workshop">Workshop</a>).
</p>

<ol>
	<li>Library — What are typical terminologies and protocols/strategies that fire brigades use?</li>
	<li>
		Field — How can I use this knowledge of terminologies and protocols/strategies to find out what
		fire brigades need?
	</li>
	<li>Library — How can I refine my knowledge of the fire brigade domain?</li>
	<li>
		Field — How can I use this knowledge of terminologies and protocols/strategies to find out what
		fire brigades need?
	</li>
	<li>
		Workshop — <i>Break-out</i> Create scenarios, sketches, (throw away) prototypes, etc. that make your
		ideas for a matching solution tangible.
	</li>
</ol>

<EditPage editRoute="patterns/solidify" />
