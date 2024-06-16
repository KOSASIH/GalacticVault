import lime
from lime.lime_tabular import LimeTabularExplainer

class ExplanationAI:
    def __init__(self, model, data):
        self.model = model
        self.data = data
        self.explainer = LimeTabularExplainer(self.data, feature_names=['feature1', 'feature2'], class_names=['class1', 'class2'])

    def explain_instance(self, instance):
        explanation = self.explainer.explain_instance(instance, self.model.predict, num_features=2)
        return explanation

# Example usage
model = # Load your machine learning model
data = # Load your dataset
explainer = ExplanationAI(model, data)
instance = # Select an instance to explain
explanation = explainer.explain_instance(instance)
print(explanation)
