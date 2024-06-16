import deepmind

class AlphaCodeAI:
    def __init__(self):
        self.model = deepmind.AlphaCode("alpha-code-1")

    def generate_code(self, prompt):
        response = self.model(prompt)
        return response.choices[0].text

alpha_code_ai = AlphaCodeAI()
