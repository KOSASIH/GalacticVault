import unittest
from components.ai.object_detection import ObjectDetection

class TestObjectDetection(unittest.TestCase):
    def setUp(self):
        self.object_detection = ObjectDetection()

    def test_detect_objects(self):
        image = "path/to/image.jpg"
        result = self.object_detection.detect_objects(image)
        self.assertIsNotNone(result)

    def test_get_object_locations(self):
        image = "path/to/image.jpg"
        result = self.object_detection.get_object_locations(image)
        self.assertIsNotNone(result)

if __name__ == "__main__":
    unittest.main()
