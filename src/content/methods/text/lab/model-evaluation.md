---
name: "Model evaluation (ML)"
why: "Verify the correctness and usefulness of the results of your model with the stakeholders or compare different models with respect to their usefulness."
how: "Translate model performance measures to representations (numbers, pictures, graphs) that are meaningful for the stakeholders. Present these to the stakeholders in a way that makes it easy to collect their feedback. Come up with good “test cases”: on which representations do you need feedback and what type of feedback do you need?"
practice: "If the model results are annotated images, you could build a software application that displays the images and collects end user feedback. If the model results are numbers (e.g. accuracy or probability) you could also use data visualization techniques and tools to present them to the end user. Graphs provide an easy way of comparing different models by showing their results side-by-side. A/B testing is also a good way to discover which version of the model delivers more value to the end user. For this you will need to incorporate logging or diagnostics in the production environment that helps you decide which model “works better”."
ingredients: [
"One or more validated (machine learning) models (e.g. through Model validation)",
"A tool or application to present model results to the stakeholders",
"Understanding of the (business) problem the stakeholders need to address with the model
",
]
category: "lab"
phases: [
"machine-learning"
]
---
