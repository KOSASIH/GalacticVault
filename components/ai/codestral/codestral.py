import mistral

class CodestralAI:
    def __init__(self):
        self.model = mistral.Codestral("codestral-1")

    def generate_code(self, prompt):
        response = self.model(prompt)
        return response.choices[0].text

codestral_ai = CodestralAI()
