---
name: "Model validation (ML)"
why: "Ensure that your model produces results of sufficient quality to base your conclusions on."
how: "While training your model keep in mind how you will ensure that the results obtained from the model will also generalize to cases outside your dataset. Determine the training dataset and the test dataset that you will use. Determine performance measures for your model. Evaluate your models against those measures."
practice: "Standard validation approaches to ensure correctness of models and detect overfitting are cross-validation and bootstrap. Widely adopted correctness measures are accuracy, precision, recall, and AUC. Consider what would constitute a valid model, for example, having an accuracy above a certain threshold."
ingredients: [
"A (machine learning) model to be validated",
"A programming environment to implement the validation measures",
"A representative and big enough dataset
",
"A domain expert to relate your findings to their experience and knowledge"
]
category: "lab"
phases: [
"machine learning"
]
---
