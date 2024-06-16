# tests/test_entity_recognition.py

import unittest
from components.ai.entity_recognition import EntityRecognition

class TestEntityRecognition(unittest.TestCase):
    def setUp(self):
        self.entity_recognition = EntityRecognition()

    def test_extract_entities(self):
        text = "Apple is a company based in Cupertino, California."
        result = self.entity_recognition.extract_entities(text)
        self.assertIsNotNone(result)

if __name__ == "__main__":
    unittest.main()
