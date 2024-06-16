		- `sentiment_analysis.py` ```python
from nltk.sentiment import SentimentIntensityAnalyzer

class SentimentAnalysis:
    def __init__(self):
        self.sia = SentimentIntensityAnalyzer()

    def analyze(self, text):
        return self.sia.polarity_scores(text)
