<script lang="ts">
	import GoBack from '$lib/components/layout/GoBack.svelte';
	import EditPage from '$lib/components/EditPage.svelte';
</script>

<svelte:head>
	<title>Realise as an expert — ICT Research Methods</title>
	<meta
		name="description"
		content="This pattern has a base in the available work and innovation domain, and less so in the context of
	applications. "
	/>
</svelte:head>

<GoBack link="/research-pattern-navigator" text="Go back" />

<h1>Realise as an expert</h1>

<h2>Why?</h2>
<p>
	The realise as an expert pattern focuses on creating innovations that can be used on a broader
	scale. For practical usage, further contextualisation in a specific application context is
	required. This pattern focuses, by using available knowledge, on creating generic solutions that
	contribute to the body of knowledge in the particular field of research. Furthermore, it is also
	applied during the process of becoming (more) skilful as an engineer in a new domain (typically as
	a student learning something new).
</p>
<p>
	This pattern has a base in the available work and innovation domain, and less so in the context of
	applications.
</p>

<h2>How?</h2>
<p>
	Within this pattern, you will first investigate which expert techniques or solutions (<a
		href="/library">Library</a
	>) could be helpful for the solution that you have in mind. With the help of those techniques, you
	can create a new solution (<a href="/workshop">Workshop</a>). This can be either directly in your
	own project or in a separate subproject. You will be able to validate if your solution works
	correctly and whether or not techniques are applied correctly (<a href="/showroom">Showroom</a>).
	This could involve experts such as senior engineers in the field of investigation. You will use
	the insights from this last step to optimise the quality of your solution.
</p>

<h2>When?</h2>
<p>
	The realise as an expert pattern is used when innovative solutions are required that can be used
	generically. No specific usage comes to mind. Such activities start with what is already available
	in terms of knowledge and technology.
</p>
<p>
	Also, students and professionals use this pattern to learn a technology. In these cases, it is
	typically applied during the earlier stages of the project, the problem analysis and analysis
	phases.
</p>

<h2>Risks</h2>
<p>
	By focusing too much on the internal quality of your solution, there is a risk that you lose
	contact with the application context. Don’t forget to keep involving stakeholders, and also keep
	testing the functionality of your solution in an application context. No one wants perfectly
	written code that does not meet the stakeholders’ requirements.
</p>

<h2>Examples from practice</h2>

<h3>Complying with privacy laws</h3>
<p>
	You are developing administration software that also stores personal data, and you have to comply
	with privacy laws. Also, your client wants your software to comply with certain ISO standards.
	Before starting the development, you thoroughly read the laws and standards (<a href="/library"
		>Library</a
	>), and embed various manual and automatic quality checks in your work process (<a
		href="/workshop">Workshop</a
	>/<a href="/showroom">Showroom</a>). Before finishing the project, an independent office validates
	if your software conforms to the specified standards (<a href="/showroom">Showroom</a>).
</p>

<ol>
	<li>
		Library — Which ISO and GDPR standards are applicable to your project and what do they mean?
	</li>
	<li>
		Workshop — Investigate how to implement the applicable standards and implement them (e.g as a
		protype)
	</li>
	<li>Showroom — Does your solution conform to the relevant ISO and GDPR standards?</li>
</ol>

<h3>Process machine data</h3>
<p>
	You are developing a big application to process machine data. To be able to optimise the way you
	work on this application with your team, you investigate which code style to use and which tools
	can be used to check the quality of the code (<a href="/library">Library</a>). While applying
	those expert techniques (<a href="/workshop">Workshop</a>), you regularly check if you have
	applied them correctly by asking more senior colleagues to review your code (<a href="/showroom"
		>Showroom</a
	>) and you use static code analysis to check the coding style (<a href="/showroom">Showroom</a>).
	Naturally, you increase the quality of your software by incorporating the insights from these
	validations.
</p>
<p>
	Maintaining the software by yourself, or having the client do so, is greatly facilitated as this
	pattern helps to deliver code that is well structured, complies with well-known software design
	patterns and because one code style is consistently applied.
</p>

<ol>
	<li>
		Library — Which code styles and static code quality measurement tools are available and can be
		used?
	</li>
	<li>Workshop — Choose a code style and work accordingly</li>
	<li>Showroom — Does your code conform to the code and quality as tested by the chosen tools?</li>
</ol>

<h3>Cleaning up and refactoring code</h3>
<p>
	The code from the application that you are asked to continue with is difficult to read and is
	error prone. No design patterns are used, the naming of the methods is unclear, methods are too
	long and the code does not conform to standards like SOLID.
</p>
<p>
	As a first step in your project, you decide to spend 1 or 2 sprints on cleaning up and refactoring
	the code. The focus is less on the functionality of the application, but on the quality of the
	code. You use available software expertise to refactor the application and to validate it against
	these standards. You use design pattern research (<a href="/library">Library</a>) to find software
	patterns that can help you to restructure the code. You also use community research (e.g. Stack
	Overflow,
	<a href="/library">Library</a>) to solve issues you encounter when refactoring. You create
	prototypes to get a better understanding of the architectural choices you make, and also do some
	architectural sketching involving experts in software architecture (<a href="/workshop"
		>Workshop</a
	>). Afterwards, you ask senior colleagues to review your code and you use static program analysis
	like SonarQube to find vulnerabilities and bugs (<a href="/showroom">Showroom</a>).
</p>

<ol>
	<li>Library — Which software design/ architecture patterns are available and applicable?</li>
	<li>Workshop — Refactor the application according to the design/ architecture patterns</li>
	<li>Showroom — Review with experts on the correct usage of the patterns</li>
</ol>

<EditPage editRoute="patterns/realiise-as-an-expert" />
