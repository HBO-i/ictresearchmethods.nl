---
name: "Hardware validation"
why: "Hardware does not always perform according to its specifications. Hardware validation ensures that the hardware performs as expected and excludes hardware as a source of errors."
how: "Typically, hardware is first tested in a controlled lab environment. For example, you can compare sensor measurements to the actual values given by another reliable system (ground truth). Sometimes, hardware also needs to be calibrated. When hardware works in the lab, it can be validated in the actual application context."
practice: "After new hardware is ordered, it is validated before it is integrated into a larger system. It is difficult to find the source of errors after it is integrated with other components and used with complex software."
ingredients: [
"Access to the hardware.",
"The specifications and/or requirements for the hardware.",
"A way to determine the ‘ground truth’ or desired behaviour."
]
category: "lab"
phases: [
"realisation"
]
scales: [
  { name: "inspiration_data", value: 90 },
  { name: "expertise_fit", value: 70 },
  { name: "overview_certainty", value: 90 }
]
---
