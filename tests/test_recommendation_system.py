import unittest
from components.ai.recommendation_system import RecommendationSystem

class TestRecommendationSystem(unittest.TestCase):
    def setUp(self):
        self.recommendation_system = RecommendationSystem()

    def test_get_recommendations(self):
        user_id = 1
        result = self.recommendation_system.get_recommendations(user_id)
        self.assertIsNotNone(result)

    def test_train_model(self):
        data = [{"user_id": 1, "item_id": 1, "rating": 5}]
        result = self.recommendation_system.train_model(data)
        self.assertIsNotNone(result)

if __name__ == "__main__":
    unittest.main()
