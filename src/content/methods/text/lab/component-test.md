---
name: "Component test"
why: "Test a subsystem or component in isolation to ensure its correctness before integrating it with other components or modules."
how: "In a component test, you test whole components or subsystems, instead of the atomic chunks of code that you test in unit tests. Test the component against its input and output relations (e.g. specified via interfaces). Component testing compares the outputs with expected results given pre-defined inputs."
practice: "Companies that use component testing want simple and clear interfaces between the components, which they view as an essential precondition for successful component testing. Microservices are a way to accomplish this and are more commonly used nowadays."
ingredients: [
"A design of the model.",
"The ability to develop a model of the real hardware or situation.",
"A simulation of the runtime environment.",
"An evaluation of the simulation (i.e. does it work according to the intended model?)."
]
category: "lab"
phases: [
"realisation"
]
---
