<script lang="ts">
	import GoBack from '$lib/components/layout/GoBack.svelte';
	import EditPage from '$lib/components/EditPage.svelte';
</script>

<svelte:head>
	<title>Choosing fitting technology — ICT Research Methods</title>
	<meta
		name="description"
		content="Choosing the right technology (e.g. framework, language, existing components) requires a methodological approach."
	/>
</svelte:head>

<GoBack link="/research-pattern-navigator" text="Go back" />

<h1>Choosing fitting technology</h1>

<h2>Why?</h2>
<p>
	Choosing the right technology (e.g. framework, language, existing components) requires a
	methodological approach. A technology that works in one situation is not by default a good choice
	for other situations and contexts. Often, once a technology is chosen, it will remain in the IT
	system for a longer time and is likely to also be chosen for other related projects as well as the
	maintenance phase. Therefore, choosing a technology that is not an optimal fit for your context
	and purposes can have serious long-term consequences.
</p>

<h2>How?</h2>
<p>
	In most cases, you will start with investigating which technologies are available (<a
		href="/library">Library</a
	>) and get a better understanding of them. With that knowledge, in case they are not yet evident,
	you will then define the criteria that the technology should meet in your specific situation (<a
		href="/field">Field</a
	>). You will check which technologies are available and to what extent they meet the criteria. For
	the most suitable options you will create prototypes (Workshop) and evaluate their suitability
	hands-on (<a href="/lab">Lab</a>). This will lead to a final decision about which technology to
	use.
</p>

<h2>When?</h2>
<p>
	This pattern is most-commonly applied during the (technical) design phase, as you will then
	consider and want to validate technologies or existing components you could potentially use for
	your project.
</p>

<h2>Risks</h2>
<p>
	The main pitfall is to make a choice in technology based on personal preferences (both from
	yourself and others). This often leads to a suboptimal choice as not all criteria have been taken
	into account and not all relevant options have been looked into. Sometimes it turns out, months
	into the project, that the selected technology does not meet all the necessary requirements. To
	prevent this, make sure that you take inventory of the criteria of all stakeholders. Do not only
	take functional and non-functional criteria into account but also think about running costs,
	competency of the operations’ engineers, etc. Try to define the criteria and their importance
	(weights) objectively.
</p>
<p>
	If there is no clear conclusion after the initial <a href="/library">Library</a>-<a href="/field"
		>Field</a
	>
	investigation, prototype the top 2 or 3 options that already seem to fit the basic requirements. Prototyping
	is a great way to determine hands-on if the options indeed work as expected, but it can take up a significant
	amount of time. Do this only for the best candidates.
</p>
<p>
	A weakness of this pattern is that it does not include the Showroom strategy. You can make use of
	this type of input, for example by asking an expert for feedback on your current comparison.
</p>

<h2>Examples from practice</h2>

<h3>Framework selection for a web application</h3>
<p>
	You are asked to develop a progressive web application. You know there are a couple of frameworks
	that could be suitable for this task. Some you already have experience with, others you do not.
	You want to make sure you select the most suitable option but some of the criteria are difficult
	to assess with enough certainty based on the available online information alone.
</p>
<p>
	You decide to look for other available solutions online (<a href="/library">Library</a>),
	investigate the criteria that are of importance for each stakeholder (<a href="/field">Field</a>)
	and create small prototypes for the top three alternatives (<a href="/workshop">Workshop</a>) in
	order to test their suitability (<a href="/lab">Lab</a>). You use the most fitting framework for
	your project.
</p>

<ol>
	<li>Library — Which frameworks are available?​</li>
	<li>Field — What are the criteria for the selection?​</li>
	<li>Workshop — Create small prototypes for the Top-3 frameworks​</li>
	<li>Lab — Which of the three frameworks is most suitable?​</li>
</ol>

<h3>Authentication for a shopping application</h3>
<p>
	You are implementing authentication for a shopping application. The requirements for the solution
	are clear, but you are not sure how best to proceed. You decide to discuss possible solutions with
	experts within the company (<a href="/library">Library</a>). You create small prototypes (<a
		href="/workshop">Workshop</a
	>) and test their suitability (<a href="/lab">Lab</a>) until you find a solution that works.
</p>

<ol>
	<li>Field — Which level of authentication is required and what other criteria are important?​</li>
	<li>
		Library — Which authentication mechanisms are available and what are their pro’s and con’s?​
	</li>
	<li>
		Workshop — Create small prototypes for the advised authentication mechanisms that also fit the
		needs.
	</li>
	<li>Lab — Which authentication mechanism works in practice in your context?</li>
</ol>

<EditPage editRoute="patterns/choosing-fitting-technology" />
