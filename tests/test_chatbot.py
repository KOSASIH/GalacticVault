import unittest
from components.ai.chatbot import Chatbot

class TestChatbot(unittest.TestCase):
    def setUp(self):
        self.chatbot = Chatbot()

    def test_process_message(self):
        message = "Hello, Galactic Vault!"
        result = self.chatbot.process_message(message)
        self.assertIsNotNone(result)

    def test_generate_response(self):
        message = "What is Galactic Vault?"
        result = self.chatbot.generate_response(message)
        self.assertIsNotNone(result)

if __name__ == "__main__":
    unittest.main()
