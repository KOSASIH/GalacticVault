import nltk
from nltk.tokenize import word_tokenize
from nltk.sentiment import SentimentIntensityAnalyzer

class NaturalLanguageProcessing:
    def __init__(self, text):
        self.text = text
        self.tokenizer = word_tokenize
        self.sentiment_analyzer = SentimentIntensityAnalyzer()

    def tokenize_text(self):
        return self.tokenizer(self.text)

    def analyze_sentiment(self):
        return self.sentiment_analyzer.polarity_scores(self.text)

# Example usage
nlp = NaturalLanguageProcessing('This is a sample text.')
tokens = nlp.tokenize_text()
sentiment = nlp.analyze_sentiment()
print(sentiment)
