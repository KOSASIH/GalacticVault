import numpy as np
from sklearn.ensemble import IsolationForest

class AnomalyDetection:
    def __init__(self, data):
        self.data = data
        self.iforest = IsolationForest(contamination=0.1)

    def detect_anomalies(self):
        self.iforest.fit(self.data)
        anomalies = self.iforest.predict(self.data)
        return anomalies

# Example usage
data = np.random.rand(100, 2)
anomaly_detector = AnomalyDetection(data)
anomalies = anomaly_detector.detect_anomalies()
print(anomalies)
