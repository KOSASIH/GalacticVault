import speech_recognition as sr

class SpeechRecognition:
    def __init__(self):
        self.recognizer = sr.Recognizer()

    def recognize_speech(self, audio_file):
        with sr.AudioFile(audio_file) as source:
            audio = self.recognizer.record(source)
            try:
                text = self.recognizer.recognize_google(audio)
                return text
            except sr.UnknownValueError:
                return "Unknown"

# Example usage
recognizer = SpeechRecognition()
text = recognizer.recognize_speech('audio.wav')
print(text)
