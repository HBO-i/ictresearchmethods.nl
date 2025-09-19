<script lang="ts">
	import GoBack from '$lib/components/layout/GoBack.svelte';
	import EditPage from '$lib/components/EditPage.svelte';
</script>

<svelte:head>
	<title>Clarity focus and scope — ICT Research Methods</title>
	<meta
		name="description"
		content="With the Clarify focus and scope pattern, you can retrieve information from the application domain
	Field and rapidly process it in Workshop "
	/>
</svelte:head>

<GoBack link="/research-pattern-navigator" text="Go back" />

<h1>Clarify focus and scope</h1>

<h2>Why?</h2>
<p>
	To get a grasp on what stakeholders want by getting a better understanding of their needs and
	requirements through quickly testing a general solution path, or to help stakeholders become aware
	of what they really want. Based on what your field methods tell you, you can ideate possible
	solutions (for example by creating brainstorm maps, paper prototypes and other “throw-away
	prototypes”) and discuss them with stakeholders to clarify the problem and to specify
	requirements. Occasionally, you will complement your explorations, in a break out, with expert
	information and existing solutions to fill in your knowledge gaps.
</p>

<h2>How?</h2>
<p>
	With the Clarify focus and scope pattern, you can retrieve information from the application domain
	(<a href="/field">Field</a>), and rapidly process it in Workshop so it can be fed back to the
	stakeholders as a proposal and an overview. You will occasionally identify and fill information
	gaps using existing work (<a href="/library">Library</a>).
</p>

<h2>When?</h2>
<p>
	This pattern is applicable when you are trying to understand the stakeholders and their goals, and
	when the stakeholders’ wishes have not yet fully crystallized. This is usually the case at the
	very beginning a project (problem analysis phase).
</p>

<h2>Risks</h2>
<p>
	Even though you can quickly check your assumptions and interpretations in the field by developing
	them in Workshop, this is not a thorough check as Lab research is missing. Adding this will
	strengthen your results, but will also take more time since thorough testing is time intensive.
</p>
<p>
	Because <a href="/library">Library</a> methods come in third place in this pattern, there is a risk
	you miss existing solutions that already (partially) solve your problem. Keep an eye out to prevent
	yourself from re-inventing the wheel.
</p>
<p>
	Make sure not to spend too much time on prototype creation: the goal is not to present the
	stakeholder with a minimal viable product, but to create something that gets the conversation
	going and helps the stakeholders to get a better understanding of what they really need. Strip the
	details and focus on what is truly relevant for the project’s core. At this point details are
	completely unimportant and can even obscure the real goal of the discussion (e.g., a stakeholder
	complaining about the label of a button instead of giving feedback on the fact that your solution
	contains a form).
</p>
<p>
	Even if you keep in mind not to spend too much time creating a full prototype, it is likely that
	you do spend some time and effort on a prototype. Never forget that these products were not meant
	as a first version. Therefore consider and treat them as “disposals” that are only meant to help
	you and the stakeholder to clarify the problems and demands. Throw them away once this phase is
	concluded! After that, start with a clean slate, and don’t let your previous work obscure the next
	steps (kill your darlings).
</p>

<h2>Examples from practice</h2>

<h3>Interactive installation</h3>
<p>
	You are asked to create an interactive installation for a museum. The conservator is very
	enthusiastic but has little technical knowledge and background. To get an idea of what he is
	looking for and what might be a feasible solution, you interview him and a few visitors (<a
		href="/field">Field</a
	>). You then create a throw-away prototype of your solution (<a href="/field">Workshop</a>) and
	take it back to the conservator to further specify the problem (<a href="/field">Field</a>). This
	provides input for a better prototype (<a href="/workshop">Workshop</a>) that you will then
	discuss with the conservator (<a href="/field">Field</a>). At some point you will feel the urge to
	check for existing applications (Best, good and bad practices, <a href="/field">Library</a>) which
	will give you confidence that the ideas you are discussing can actually be built. Finding these
	examples also feeds the ideation process with the conservator.
</p>

<ol>
	<li>Field — What kind of interactive installation does the museum need?</li>
	<li>Workshop — Create an artifact that makes my ideas discussable</li>
	<li>Field — What aspects of the artifacts match the needs of the museum?</li>
	<li>Workshop — Create an artifact that makes my ideas discussable</li>
	<li>Field — What aspects of the artifacts match the needs of the museum?</li>
	<li>Library — <i>Break-out</i> What ideas from existing applications can help me focus?</li>
</ol>

<h3>Automate a manual process</h3>
<p>
	You are building an app to automate a manual process. To get a grasp of that manual process, you
	observe one of the stakeholders: someone carrying out the manual process (Field). You create a
	paper prototype of your solution (<a href="/workshop">Workshop</a>) and after you have shown it to
	the stakeholder, you create a working prototype (<a href="/workshop">Workshop</a>) using a
	framework that fits your needs and that you have read about in literature (<a href="/library"
		>Library</a
	>). You keep fine tuning and improving your prototype by discussing it with the stakeholder and
	making adjustments.
</p>

<ol>
	<li>Field — What is the currently used manual process?</li>
	<li>Workshop — Create a paper prototype of an app to automate this manual process</li>
	<li>Field — Does my solution fix the problem?</li>
	<li>Library — <i>Break-out</i> Which framework helps me to build this app?</li>
</ol>

<h3>Mobile Nutrition App</h3>
<p>
	You are asked to create a mobile app that uses a trained algorithm to score the nutrition of food via the camera. 
	To explore what people really need, you organize a hackathon (Workshop) where several teams create throw-away MVPs. 
	At regular intervals, the teams step out of their building process to apply the Human Impact Score (Field) to reflect on how their concepts might influence users’ autonomy, health, and lifestyle identity. 
	These reflections feed directly into their design choices.
	To strengthen their concepts, the teams also conduct a Literature Study (Library) on how people make food choices and what motivates them to change eating behavior. 
	These insights guide iterations on how the app provides feedback (e.g., scoring formats, coaching styles) and ensure that design decisions are grounded in existing knowledge.
</p>

<ol>
	<li>Workshop — Hackathon: Create MVPs for food-recognition and nutrition scoring.</li>
	<li>Field — Human Impact Score: What ethical and human impacts emerge from these MVPs?</li>
	<li>Workshop — Iteration: Adjust MVPs based on ethical reflection.</li>
	<li>Library — Break-out: What do existing studies on food behavior and lifestyle change tell us?</li>
	<li>Workshop — Iteration: Refine MVPs with literature insights.</li>
	<li>Field — Human Impact Score: Re-assess user well-being and lifestyle implications.</li>
</ol>


<EditPage editRoute="patterns/clarify-focus-and-scope" />
