import unittest
from components.ai.data_analysis import DataAnalysis

class TestDataAnalysis(unittest.TestCase):
    def setUp(self):
        self.data_analysis = DataAnalysis()

    def test_analyze_data(self):
        data = [1, 2, 3, 4, 5]
        result = self.data_analysis.analyze_data(data)
        self.assertIsNotNone(result)

    def test_visualize_data(self):
        data = [1, 2, 3, 4, 5]
        result = self.data_analysis.visualize_data(data)
        self.assertIsNotNone(result)

if __name__ == "__main__":
    unittest.main()
