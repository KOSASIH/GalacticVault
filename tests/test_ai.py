# tests/test_ai.py
import unittest
from ai import AI

class TestAI(unittest.TestCase):
    def test_init(self):
        ai = AI()
        self.assertIsInstance(ai, AI)

    def test_process_image(self):
        ai = AI()
        image = "path/to/image.jpg"
        result = ai.process_image(image)
        self.assertIsNotNone(result)

if __name__ == "__main__":
    unittest.main()
