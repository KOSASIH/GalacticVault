# tests/test_neural_network.py

import unittest
from components.ai.neural_network import NeuralNetwork

class TestNeuralNetwork(unittest.TestCase):
    def setUp(self):
        self.neural_network = NeuralNetwork()

    def test_train_model(self):
        X = [[1, 2], [3, 4], [5, 6]]
        y = [3, 5, 7]
        self.neural_network.train_model(X, y, epochs=100)
        result = self.neural_network.predict([[1, 2]])
        self.assertEqual(result, [3])

if __name__ == "__main__":
    unittest.main()
