<script lang="ts">
	import GoBack from '$lib/components/layout/GoBack.svelte';
	import EditPage from '$lib/components/EditPage.svelte';
</script>

<svelte:head>
	<title>Realise as required — ICT Research Methods</title>
	<meta
		name="description"
		content="Developing an IT system that meets the stakeholders’ demands, requires extensive investigation"
	/>
</svelte:head>

<GoBack link="/research-pattern-navigator" text="Go back" />

<h1>Realise as required</h1>

<h2>Why?</h2>
<p>
	In most cases, your stakeholders know exactly what they would like from the IT system/application
	you are developing. Understanding all the stakeholders’ needs and wishes, and realising a solution
	that conforms to these where possible, can be a challenge. This pattern helps to structurally
	investigate, realise and test your solution based on the stakeholders’ needs.
</p>

<h2>How?</h2>
<p>
	Developing an IT system that meets the stakeholders’ demands, requires extensive investigation of
	what it is they actually need (<a href="/field">Field</a>). This is the basis for realising the
	system (<a href="/workshop">Workshop</a>). Mostly, an iterative approach (such as Agile) works
	best to loop over Field, Workshop and Lab, so that stakeholders can evaluate and give feedback on
	intermediate results (<a href="/lab">Lab</a>). Based on the feedback from the stakeholders, the
	requirements can be adapted and further refined for a next iteration of Field, Workshop and Lab.
</p>

<h2>When?</h2>
<p>
	This pattern typically starts during the analysis phase and continues during the design and
	realisation/evaluation phases. It also works very well in an agile setting, and therefore the
	loops can be repeated resulting in a continuously improving IT system that fits the needs of the
	stakeholders more accurately with every iteration (sprint).
</p>

<h2>Risks</h2>
<p>
	As this pattern does not take available work (<a href="/library">Library</a>,
	<a href="/showroom">Showroom</a>) into account, you might not be aware of solutions or comparable
	products that are already available and could help you or inspire ideas.
</p>
<p>
	Tip: In case your knowledge about the (solution) domain is lagging, consider to first start or
	integrate with a
	<a href="/library">Library</a> related method such as comparable product analysis.
</p>
<p>
	Another risk is that stakeholders could have opposing needs or that they differ in the
	prioritisation of the requirements. By deciding who will be responsible for the requirements and
	their prioritisation (called the Product Owner in Agile-scrum) at the end of the day before you
	begin, you can prevent long discussions or having to constantly change the requirements depending
	on who you are talking with.
</p>

<h2>Examples from practice</h2>

<h3>An app to inform concert visitors</h3>
<p>
	You are asked to develop an app for an upcoming concert to inform visitors about the programme,
	guiding them through the areas of the concert, supporting them in making decisions about which
	stage to go, etc.
</p>
<p>
	You perform a stakeholder analysis (<a href="/field">Field</a>), and conduct interviews with the
	most important stakeholders (<a href="/field">Field</a>). You define and prioritise the
	requirements as user stories (Workshop) and develop the app in a number of sprints. At the end of
	each sprint, you test against the requirements with system tests (<a href="/lab">Lab</a>) and do
	usability testing (<a href="/lab">Lab</a>). Also, you define the priorities and if needed, update
	the user stories together with the stakeholders (<a href="/field">Field</a>/<a href="/workshop"
		>Workshop</a
	>).
</p>

<ol>
	<li>Field — What are the needs of the stakeholders?</li>
	<li>
		Workshop — Define user stories. What is the priority of the user stories for the stakeholders?
	</li>
	<li>Workshop — Realise the user story as an artefact</li>
	<li>Lab — Test the artefact. What are the results from system- and usability tests?</li>
</ol>

<h3>Define a new website UX</h3>
<p>
	A company wants to change their branding and their websites to be fully redesigned as well. You
	are asked to define the new UX of the websites. You assemble a focus group to define and clarify
	what is important in terms of UX for this company and their users (<a href="/field">Field</a>).
	Based on this input, you create a paper prototype (<a href="/workshop">Workshop</a>). After that,
	you select a small representative group of users and ask them to go through your prototype whilst
	thinking out loud (<a href="/lab">Lab</a>).
</p>

<ol>
	<li>Field — What are important UX aspects for the stakeholders?​</li>
	<li>Workshop — Create a paper prototype</li>
	<li>Lab — How do users experience the usability of the prototype (when talking out loud)?</li>
</ol>

<h3>Psy-bot</h3>
<p>
	You are asked to develop a chatbot using RAG (retrieval augmented generation) that can support psychological consults for youngsters (12–14 years) struggling with self-regulation. 
	To understand their needs, you first conduct interviews (Field) and observations (Field) with youngsters to learn how they currently deal with self-regulation challenges. 
	Based on this input, you create a first prototype of the chatbot (Workshop).
	Once early iterations are available, you apply Silicon Sampling (Workshop) to explore utopian and dystopian scenarios of how the chatbot could affect youngsters’ autonomy, well-being, and relationships. 
	The insights from these ethical explorations guide new design iterations. 
	During these iterations, you conduct usability tests (Lab) to check to what extent the ethical scenarios are recognizable in practice and whether users experience them positively or negatively. 
	Findings from the tests lead to further refinements of the prototype.
</p>

<ol>
	<li>Field — What are the needs and experiences of the youngsters?</li>
	<li>Workshop — Build a prototype of the chatbot.</li>
	<li>Workshop — Use Silicon Sampling to explore utopian and dystopian scenarios.</li>
	<li>Workshop — Adapt the prototype based on ethical reflections.</li>
	<li>Lab — Usability tests: are ethical scenarios visible and acceptable in practice?</li>
</ol>

<EditPage editRoute="patterns/realise-as-required" />
