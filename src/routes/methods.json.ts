import type { Method } from '$lib/types';
// import { category } from '$lib/enums';

enum category {
	library = 'Library',
	field = 'Field',
	lab = 'Lab',
	showroom = 'Showroom',
	workshop = 'Workshop'
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
		}
	];
	return {
		body: {
			methodsList: methodsList
		}
	};
};
