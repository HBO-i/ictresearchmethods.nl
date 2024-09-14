---
name: "Unit test"
why: "Find certain types of bugs as early as possible and ensure your code keeps running after a change."
how: "Define one or more tests for each ‘atomic part’ of the code (e.g. a method or function). The unit should be tested in isolation."
practice: "Many companies use unit tests as part of their continuous integration environment. With every build, all unit tests are run to get an overview of the quality of the software and possible bugs. Some companies define the unit tests first and then create the code, leading to successful unit tests (Test-Driven Development)."
ingredients: [
"Unit test tooling (present in all modern IDEs).",
"A disciplined mindset to cover all important cases.",
"Special focus on calculations and more algorithmic parts of the code.",
"Going well beyond the ‘happy flow’ (e.g. focus on boundary cases and exceptions).",
"An upfront definition of the code coverage target for each part of the code."
]
category: "lab"
phases: [
"realisation"
]
scales: [
  { name: "inspiration_data", value: 70 },
  { name: "expertise_fit", value: 50 },
  { name: "overview_certainty", value: 90 }
]
---
