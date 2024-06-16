import unittest
from components.ai.natural_language_processing import NaturalLanguageProcessing

class TestNaturalLanguageProcessing(unittest.TestCase):
    def setUp(self):
        self.nlp = NaturalLanguageProcessing()

    def test_tokenize_text(self):
        text = "This is a sample sentence."
        result = self.nlp.tokenize_text(text)
        self.assertIsNotNone(result)

    def test_sentiment_analysis(self):
        text = "I love Galactic Vault!"
        result = self.nlp.sentiment_analysis(text)
        self.assertIsNotNone(result)

    def test_entity_recognition(self):
        text = "Galactic Vault is a AI-powered storage system."
        result = self.nlp.entity_recognition(text)
        self.assertIsNotNone(result)

if __name__ == "__main__":
    unittest.main()
