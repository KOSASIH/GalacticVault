import replit

class ReplitAI:
    def __init__(self):
        self.model = replit.Replit("replit-1")

    def generate_code(self, prompt):
        response = self.model(prompt)
        return response.choices[0].text

replit_ai = ReplitAI()
