import unittest
from components.ai.text_to_speech import TextToSpeech

class TestTextToSpeech(unittest.TestCase):
    def setUp(self):
        self.text_to_speech = TextToSpeech()

    def test_convert_text_to_speech(self):
        text = "Hello, Galactic Vault!"
        result = self.text_to_speech.convert_text_to_speech(text)
        self.assertIsNotNone(result)

if __name__ == "__main__":
    unittest.main()
