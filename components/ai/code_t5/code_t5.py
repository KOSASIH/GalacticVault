import code_t5

class CodeT5AI:
    def __init__(self):
        self.model = code_t5.CodeT5("code-t5-1")

    def generate_code(self, prompt):
        response = self.model(prompt)
        return response.choices[0].text

code_t5_ai = CodeT5AI()
