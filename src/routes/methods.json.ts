import type { Method } from '$lib/types';

enum category {
	library = 'library',
	field = 'field',
	lab = 'lab',
	showroom = 'showroom',
	workshop = 'workshop'
}

export const get = (): unknown => {
	const methodsList: Method[] = [
		{
			name: 'Available product analysis',
			why: 'Find out if what you are planning to do has already been done (in full or in part) by someone else.',
			how: 'Identify existing solutions that may solve the problem (or a part thereof) you are trying to fix with your solution. Decide if it is worth the effort to recreate their work, or whether it is better to simply buy it from them or embed their work in yours.',
			practice:
				'Most companies build their work on what others have already done. This happens a lot in the open source community, but also in commercial products.',
			ingredients: [
				'A list of available products that have some overlap with the one you intend to build.',
				'Someone with experience in using or developing similar products (could be yourself).'
			],
			category: category.library,
			image: 'https://ictresearchmethods.nl/images/a/a3/Available_product_analysis.png'
		},
		{
			name: 'Best good and bad practices',
			why: 'Incorporating what has proven to work somewhere else forms the basis of any high-quality project.',
			how: 'Organise activities aimed at sharing experiences. Depending on your topic, many best, good and bad practices may be available.',
			practice:
				'Good practices tend to be repeated internally, but few companies have processes to identify and incorporate best practices described by others.',
			ingredients: [
				'A willingness to investigate what others have done.',
				'A sense of scope: which reported practices are important to you, and which are not?'
			],
			category: category.library,
			image: 'https://ictresearchmethods.nl/images/f/f0/Best_good_and_bad_practices.png'
		},
		{
			name: 'Community research',
			why: 'Have others already tackled the problem? Incorporating your peers’ knowledge can seriously speed things up.',
			how: 'Search for the problem you are wrestling with in an online community you know you can trust. Start your quest as specifically as possible. Ask questions if you appear to be the first to present this problem.',
			practice:
				'Using community input is standard practice for developers. Even if others have been creating things that differ greatly from what you are doing, they still may have encountered problems that you are dealing with. It can save you a lot of time and annoyance.',
			ingredients: [
				'Input into an online community of peers, like Stack Overflow.',
				'A critical view: even if many people point you in the same direction, it may not be the ideal solution for your specific situation.',
				'A thorough understanding about the proposed solution (do not just copy/paste).',
				'A sharing attitude: do not hesitate to share your findings with the community.'
			],
			category: category.library,
			image: 'https://ictresearchmethods.nl/images/2/28/Community_research.png'
		},
		{
			name: 'Competitive analysis',
			why: 'Find a niche or unique selling point competitors are not filling.',
			how: 'Identify the most important competitors and list their offerings. See what needs are unaddressed by the competition. If you can deliver on those, you have found your niche.',
			practice:
				"Many companies require a competitive analysis before 'real money' is spent on a project. Large-scale competitive analyses often include a field study as well, to identify user needs.",
			ingredients: [
				'A willingness to offer something unique.',
				'A clear idea about who the competition is (also outside your domain).',
				'A precise understanding of your competitor’s strengths and weaknesses and what they mean for you (e.g. with a SWOT analysis).',
				'Clarity about what your users want in addition to your competitors’ offerings.'
			],
			category: category.library,
			image: 'https://ictresearchmethods.nl/images/e/e3/Competitive_analysis.png'
		},
		{
			name: 'Design pattern research',
			why: 'Applying well-known design patterns improves the quality (and structure) of the designed software.',
			how: 'Design patterns are documented solutions to frequently encountered problems or challenges in software engineering; they incorporate good software engineering principles. You should have an overview and active knowledge of the available patterns.',
			practice:
				'The book Design Patterns: Elements of Reusable Object- Oriented Software is regarded as the ‘bible’ of design patterns and is still widely used in corporate software engineering practice. However, there are many other, more up-to-date, books and online resources on the topic.',
			ingredients: [
				'An overview of patterns (book or websites).',
				'Time to absorb and understand patterns.',
				'A willingness to improve the quality of the designed software.'
			],
			category: category.library,
			image: 'https://ictresearchmethods.nl/images/e/ee/Design_pattern_research.png'
		},
		{
			name: 'Expert interview',
			why: 'A domain expert can put you on the right track when you enter a new domain or field of expertise. The expert can recommend sources, give you a sense of direction or point out common pitfalls.',
			how: 'Find an expert who is willing to talk to you about the problem and arrange an interview.',
			practice:
				'Expert interviews are a common method for getting a grip on a new problem area that you are not familiar with. Because experts can draw on their own experience, the information they provide may be more relevant than information you can gather from literature.',
			ingredients: [
				'An expert in your problem domain.',
				'A realistic sense about what experts can and cannot offer.',
				'The right questions to ask.',
				'An open mind, so the expert can also bring in their own topics',
				'Interviewing techniques.'
			],
			category: category.library,
			image: 'https://ictresearchmethods.nl/images/4/4f/Expert_interview.png'
		},
		{
			name: 'Literature study',
			why: 'Find general information, guidance and best practices.',
			how: 'Make a search plan and identify relevant keywords. Find and judge material. Within the sources, look for interesting references and repeat the search process with keywords you found in the texts. Finally, select which materials to read in detail, plan the reading and summarise your findings during reading.',
			practice:
				'A company that is focusing on user experience in the medical domain conducts a literature study to identify best practices to use when informing patients about health issues.',
			ingredients: [
				'A willingness to read.',
				'Search engines (e.g. Google Scholar, your library’s search engines).',
				'The ability to select what is really important for you case and to leave the rest unread.',
				'Identifying the ‘gatekeepers’ (parties who guarantee the quality of certain information)',
				'Knowing when to stop.'
			],
			category: category.library,
			image: 'https://ictresearchmethods.nl/images/4/4c/Literature_study.png'
		},
		{
			name: 'SWOT analysis',
			why: 'A SWOT analysis supports decision makers in identifying relevant factors for achieving certain goals.',
			how: 'The project team identifies several Strengths, Weaknesses, Opportunities and Threats related to a project. The results are typically presented in a 2 x 2 matrix. You need to understand the community that a particular organisation is working with; this can be done via public forums, listening campaigns or informational interviews.',
			practice:
				'A SWOT analysis is typically used as a strategic tool in an early phase of a project, after the outline of the project is developed. The SWOT is often a basis for a go–no go decision.',
			ingredients: [
				'Basic knowledge about the project plans.',
				'A sense of who the competition is..',
				'Critical colleagues to review and update your initial SWOT.'
			],
			category: category.library,
			image: 'https://ictresearchmethods.nl/images/c/c3/SWOT_analysis.png'
		},
		{
			name: 'Document analysis',
			why: 'Find out if what you are planning to do has already been done (in full or in part) by someone else.',
			how: 'Identify existing solutions that may solve the problem (or a part thereof) you are trying to fix with your solution. Decide if it is worth the effort to recreate their work, or whether it is better to simply buy it from them or embed their work in yours.',
			practice:
				'Most companies build their work on what others have already done. This happens a lot in the open source community, but also in commercial products.',
			ingredients: [
				'A list of available products that have some overlap with the one you intend to build.',
				'Someone with experience in using or developing similar products (could be yourself).'
			],
			category: category.field,
			image: 'https://ictresearchmethods.nl/images/1/11/Document_analysis.png'
		},
		{
			name: 'Domain modelling',
			why: 'Incorporating what has proven to work somewhere else forms the basis of any high-quality project.',
			how: 'Organise activities aimed at sharing experiences. Depending on your topic, many best, good and bad practices may be available.',
			practice:
				'Good practices tend to be repeated internally, but few companies have processes to identify and incorporate best practices described by others.',
			ingredients: [
				'A willingness to investigate what others have done.',
				'A sense of scope: which reported practices are important to you, and which are not?'
			],
			category: category.field,
			image: 'https://ictresearchmethods.nl/images/d/db/Domain_modelling.png'
		},
		{
			name: 'Explore user requirements',
			why: 'Get a detailed view of how users will be using your solution and what their requirements are. How Talk to your clients about their expectations and describe how the different users (or stakeholders) will interact with the system under development. It is highly recommended that you directly involve end users, rather than just the client.',
			how: '//',
			practice:
				'Users and stakeholders often find it difficult to describe the expected behaviour of the system from scratch. Therefore, most companies take an iterative approach to defining user requirements (e.g. by updating the scenarios after each demo with stakeholders).',
			ingredients: [
				'The involvement of a group of stakeholders that includes people beyond the client.',
				'Tools to capture the scenarios described, like use cases and user stories.',
				'A focus on expected system behaviour, not its realisation.',
				'Use the stakeholders’ ‘language’ so they can review the described scenarios.'
			],
			category: category.field,
			image:
				'https://ictresearchmethods.nl/images/thumb/8/8e/Explore_user_requirements.png/250px-Explore_user_requirements.png'
		},
		{
			name: 'Focus group',
			why: 'A focus group discussion is an efficient way to gain insight into how people think about an issue, without having to interview each person separately.',
			how: 'Invite a group of 5–10 people for a 45–90 minutes discussion, which can focus on a question, topic or prototype. Create a positive atmosphere: make people comfortable, regularly remind them that everyone’s opinion matters, ensure and manage diversity among participants, and so on.',
			practice:
				'Focus groups are a popular technique for getting a broad view of a product’s requirements.',
			ingredients: [
				'An activity plan with a time schedule, questions and topics.',
				'Video recording equipment to film and later analyse the results.',
				'Drinks and snacks for your participants.',
				'Group management skills.'
			],
			category: category.field,
			image: 'https://ictresearchmethods.nl/images/thumb/6/6f/Focus_group.png/250px-Focus_group.png'
		},
		{
			name: 'Observation',
			why: 'Get a feeling for how your intended users will use your product by unobtrusively observing them in their natural environment, doing the things they always do.',
			how: 'Watch people without talking to or instructing them. While observing, make notes about their activities, interactions and environments. You do not need to be physically present: you can also observe users by automatically collecting interactions with the systems they use.',
			practice:
				'Companies use observation because what people actually do often differs from what they say, and even believe, they do. Interviews may not suffice.',
			ingredients: [
				'A place where you can observe the users without distracting them.',
				'Note taking material or video recording equipment.',
				'A system for recording online activities.',
				'A willingness to stick to the observed facts and delay interpretation.'
			],
			category: category.field,
			image: 'https://ictresearchmethods.nl/images/thumb/6/64/Observation.png/250px-Observation.png'
		},
		{
			name: 'Problem analysis',
			why: 'Before solving a problem, it is important to understand it. Moreover, problem analysis ensures that you are not solving the wrong problem.',
			how: 'An important aspect of problem analysis is asking questions, such as who, what, why, when, where and how. ‘Why’ is an especially important question for understanding the problem. It can be asked multiple times. Once the problem is clear, you can collect additional information about the problem. Is it a new problem? Are there existing solutions?',
			practice:
				'A lot of projects start with an initial idea about a problem and solution. Problem analysis ensures that you do not waste time solving the wrong problem.',
			ingredients: [
				'Domain experts and the problem owner.',
				'Knowledge about what questions to ask.',
				'A willingness to get to the core of the problem (i.e. the problem behind the problem) by asking lots of questions and making assumptions explicit.'
			],
			category: category.field,
			image:
				'https://ictresearchmethods.nl/images/thumb/4/4f/Problem_analysis.png/250px-Problem_analysis.png'
		},
		{
			name: 'Stakeholder analysis',
			why: 'Identify the stakeholders and ensure that their needs are considered.',
			how: 'Think about the stakeholders who are important to your project and analyse the importance and interests of each stakeholder. Define a strategy for maximising support and buy-in from your project’s most important stakeholders.',
			practice:
				'Companies use their stakeholder analysis to gain support from powerful stakeholders and to anticipate their communication strategy.',
			ingredients: [
				'Perseverance in searching for stakeholders (going beyond the obvious), including those with a negative attitude towards your project or ideas.',
				'Instruments like an organisational chart to detect various stakeholders.',
				'A good approach to get information for each stakeholder group.',
				'A tool like a stakeholder map or power interest matrix.'
			],
			category: category.field,
			image:
				'https://ictresearchmethods.nl/images/thumb/b/b9/Stakeholder_analysis.png/250px-Stakeholder_analysis.png'
		},
		{
			name: 'Survey',
			why: 'Collect information (mostly quantitative) from a large sample of your target group.',
			how: 'Develop a questionnaire and give it to a representative sample of participants, using the right channels. You can use a variety of online tools to analyse the responses.',
			practice:
				'Surveys are widely used to get an understanding of a target group’s preferences, habits or wishes. This method is quick and inexpensive, but it can be difficult to obtain reliable results. Getting sufficient responses is often challenging for companies, who may use gifts to persuade people to fill in the survey.',
			ingredients: [
				'A large and representative group of users.',
				'A survey instrument or tool.',
				'The ability to phrase questions that are suitable for a survey.',
				'Someone to proofread or test your questionnaire.'
			],
			category: category.field,
			image: 'https://ictresearchmethods.nl/images/thumb/1/1c/Survey.png/250px-Survey.png'
		},
		{
			name: 'Task analysis',
			why: 'Understand the structure, flow or other aspects of a certain task. Task analysis focuses on what end users actually do to achieve their goals.',
			how: 'You can collect information about the task using observations, interviews, formal task descriptions or manuals. These tasks can be (re)structured using decomposition, resulting in a hierarchical task analysis. Use standardised models to describe tasks. An activity diagram is a typical visual representation of the flow of an activity model.',
			practice:
				'Surveys are widely used to get an understanding of a target group’s preferences, habits or wishes. This method is quick and inexpensive, but it can be difficult to obtain reliable results. Getting sufficient responses is often challenging for companies, who may use gifts to persuade people to fill in the survey.',
			ingredients: [
				'A willingness to understand how a task is performed.',
				'A focus on the actual, rather than the imagined, actions of users.',
				'Knowledge of models to store and analyse the tasks.'
			],
			category: category.field,
			image:
				'https://ictresearchmethods.nl/images/thumb/c/c1/Task_analysis.png/250px-Task_analysis.png'
		},
		{
			name: 'A/B testing',
			why: 'A minor change in a design may alter user behaviour in ways that are hard to detect in a usability test. An A/B test allows you to compare real-world user behaviour across different versions of a product.',
			how: 'In an A/B test, the user is presented with one of two versions of an interactive product. Remote software records metrics for user behaviour. These metrics are compared between the two versions to see which alternative is better. Sometimes, more than two alternatives are tested: A/B/X testing.',
			practice:
				'Google does a lot of A/B testing on its search services. The tiniest details can matter to Google because they have so many users. Some companies also use the A/B experimental design for testing concepts, rather than finished products.',
			ingredients: ['Specialised software.', 'Reliable metrics.', 'A large number of users.'],
			category: category.lab,
			image: 'https://ictresearchmethods.nl/images/thumb/5/5b/A_B_testing.png/250px-A_B_testing.png'
		},
		{
			name: 'Component test',
			why: 'Test a subsystem or component in isolation to ensure its correctness before integrating it with other components or modules.',
			how: 'In a component test, you test whole components or subsystems, instead of the atomic chunks of code that you test in unit tests. Test the component against its input and output relations (e.g. specified via interfaces). Component testing compares the outputs with expected results given pre-defined inputs.',
			practice:
				'Companies that use component testing want simple and clear interfaces between the components, which they view as an essential precondition for successful component testing. Microservices are a way to accomplish this and are more commonly used nowadays.',
			ingredients: [
				'A system that is split up into separate subsystems to allow for component testing.',
				'Access to and an understanding of the interfaces of the component under test.',
				'Drivers and stubs to simulate the behaviour of other components.'
			],
			category: category.lab,
			image:
				'https://ictresearchmethods.nl/images/thumb/5/5e/Component_test.png/250px-Component_test.png'
		},
		{
			name: 'Computer simulation',
			why: 'Computer simulations are used when a real-world process, system or event situation is not available or feasible.',
			how: 'A computer simulation requires modelling the environment or the hardware. Hardware that is not available, that can break during testing or that is too expensive can be simulated in such a way that other components in the system do not know that a stub is being used instead of the real hardware. A simulation allows you to run an experiment many times with different parameters.',
			practice:
				'To work on signal processing algorithms, raw sensor data can be simulated by sending a list of simulated readings instead of using a real sensor during development',
			ingredients: [
				'A design of the model.',
				'The ability to develop a model of the real hardware or situation.',
				'A simulation of the runtime environment.',
				'An evaluation of the simulation (i.e. does it work according to the intended model?).'
			],
			category: category.lab,
			image:
				'https://ictresearchmethods.nl/images/thumb/e/e6/Computer_simulation.png/250px-Computer_simulation.png'
		},
		{
			name: 'Data analytics',
			why: 'Gain insights by measuring and analysing data. Researching a dataset can give you useful quantitative information about the topic of interest.',
			how: 'Collect data that is relevant for your area of research and analyse it. Split your dataset into a training set and a test dataset. Find an algorithm that works with the training data and check whether it is reliable with the test data.',
			practice:
				'Applied data science is now done in many fields. For example, it is used in the business domain to predict customer behaviour.',
			ingredients: [
				'A data collection plan.',
				'Analysis tooling (e.g. statistical tooling or machine learning algorithms).',
				'A critical eye on the validity of your data and your conclusions',
				'Comprehensive data visualisations'
			],
			category: category.lab,
			image:
				'https://ictresearchmethods.nl/images/thumb/e/ea/Data_analytics.png/250px-Data_analytics.png'
		},
		{
			name: 'Hardware validation',
			why: 'Hardware does not always perform according to its specifications. Hardware validation ensures that the hardware performs as expected and excludes hardware as a source of errors.',
			how: 'Typically, hardware is first tested in a controlled lab environment. For example, you can compare sensor measurements to the actual values given by another reliable system (ground truth). Sometimes, hardware also needs to be calibrated. When hardware works in the lab, it can be validated in the actual application context.',
			practice:
				'After new hardware is ordered, it is validated before it is integrated into a larger system. It is difficult to find the source of errors after it is integrated with other components and used with complex software.',
			ingredients: [
				'Access to the hardware.',
				'The specifications and/or requirements for the hardware.',
				'A way to determine the ‘ground truth’ or desired behaviour.'
			],
			category: category.lab,
			image:
				'https://ictresearchmethods.nl/images/thumb/f/fb/Hardware_validation.png/250px-Hardware_validation.png'
		},
		{
			name: 'Benchmark test',
			why: 'A standardised set allows you to compare your product to similar products.',
			how: 'Search for standardised tests in your problem domain and run them on your solution. Compare your results to those achieved by similar products on this same test.',
			practice:
				'Benchmark tests are regularly used to test pattern recognition software. If a standard set of data is recognised with the software, the results can be compared to that of other software. Benchmarks are also used to compare hardware or software in which performance plays an important role (e.g. how many forms can automatically be processed per minute, in comparison to other software).',
			ingredients: [
				'A standardised test.',
				'A need to compare your product to similar products.',
				'A way to evaluate your test results.'
			],
			category: category.showroom,
			image:
				'https://ictresearchmethods.nl/images/thumb/3/38/Benchmark_test.png/250px-Benchmark_test.png'
		},
		{
			name: 'Brainstorm',
			why: 'Generate and develop new ideas.',
			how: 'Bring people together to spark creativity and use a creativity technique to ensure a creative flow among the participants. Accept any ideas; filtering can be done in a later step. Build upon each other’s ideas, even bad ones. Avoid idea killers like early criticism.',
			practice:
				'Companies use brainstorming techniques like nominal group technique or directed brainstorming.',
			ingredients: [
				'An activity plan.',
				'A shared problem statement and rules.',
				'An anything goes mindset: bad ideas also count as a contribution.'
			],
			category: category.workshop,
			image:
				'https://ictresearchmethods.nl/images/thumb/c/c1/Task_analysis.png/250px-Task_analysis.png'
		}
	];
	return {
		body: {
			methodsList: methodsList
		}
	};
};
