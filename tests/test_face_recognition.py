import unittest
from components.ai.face_recognition import FaceRecognition

class TestFaceRecognition(unittest.TestCase):
    def setUp(self):
        self.face_recognition = FaceRecognition()

    def test_detect_faces(self):
        image = "path/to/image.jpg"
        result = self.face_recognition.detect_faces(image)
        self.assertIsNotNone(result)

    def test_recognize_faces(self):
        image = "path/to/image.jpg"
        result = self.face_recognition.recognize_faces(image)
        self.assertIsNotNone(result)

if __name__ == "__main__":
    unittest.main()
