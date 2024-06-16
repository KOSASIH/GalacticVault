# main.py

from src.ai.image_segmentation import ImageSegmentation
from src.ai.natural_language_processing import NLP

def main():
    # Create instances of AI modules
    image_segmenter = ImageSegmentation()
    nlp_processor = NLP()

    # Use the AI modules
    image_segmenter.segment_image("path/to/image.jpg")
    nlp_result = nlp_processor.process_text("This is a sample text.")

    print("NLP Result:", nlp_result)

if __name__ == "__main__":
    main()
