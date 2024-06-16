import unittest
from components.ai.speech_recognition import SpeechRecognition

class TestSpeechRecognition(unittest.TestCase):
    def setUp(self):
        self.speech_recognition = SpeechRecognition()

    def test_recognize_speech(self):
        audio_file = "path/to/audio.wav"
        result = self.speech_recognition.recognize_speech(audio_file)
        self.assertIsNotNone(result)

if __name__ == "__main__":
    unittest.main()
