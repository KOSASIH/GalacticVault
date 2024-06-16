import unittest
from components.ai.image_generation import ImageGeneration

class TestImageGeneration(unittest.TestCase):
    def setUp(self):
        self.image_generation = ImageGeneration()

    def test_generate_image(self):
        result = self.image_generation.generate_image((100, 100), "random")
        self.assertIsNotNone(result)

    def test_get_image_features(self):
        image = "path/to/image.jpg"
        result = self.image_generation.get_image_features(image)
        self.assertIsNotNone(result)

if __name__ == "__main__":
    unittest.main()
