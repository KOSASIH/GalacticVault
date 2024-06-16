# tests/test_nlp.py

import unittest
from components.ai.nlp import NLP

class TestNLP(unittest.TestCase):
    def setUp(self):
        self.nlp = NLP()

    def test_preprocess_text(self):
        text = "This is a sample text for testing!"
        result = self.nlp.preprocess_text(text)
        self.assertIsNotNone(result)

    def test_sentiment_analysis(self):
        text = "I love this product! It's amazing!"
        result = self.nlp.sentiment_analysis(text)
        self.assertEqual(result, "positive")

if __name__ == "__main__":
    unittest.main()
