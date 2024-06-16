import unittest
from components.ai.image_processing import ImageProcessing

class TestImageProcessing(unittest.TestCase):
    def setUp(self):
        self.image_processing = ImageProcessing()

    def test_resize_image(self):
        image = "path/to/image.jpg"
        result = self.image_processing.resize_image(image, (100, 100))
        self.assertIsNotNone(result)

    def test_apply_filter(self):
        image = "path/to/image.jpg"
        result = self.image_processing.apply_filter(image, "blur")
        self.assertIsNotNone(result)

if __name__ == "__main__":
    unittest.main()
