import openai

class CodexAI:
    def __init__(self):
        self.model = openai.Codex("codegen-1")

    def generate_code(self, prompt):
        response = self.model(prompt)
        return response.choices[0].text

codex_ai = CodexAI()
