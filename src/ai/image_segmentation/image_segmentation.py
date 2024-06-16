import cv2
import numpy as np

class ImageSegmentation:
    def __init__(self, image_path):
        self.image = cv2.imread(image_path)
        self.height, self.width, _ = self.image.shape

    def segment_image(self):
        # Convert image to grayscale
        gray = cv2.cvtColor(self.image, cv2.COLOR_BGR2GRAY)

        # Apply thresholding to segment objects
        _, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)

        # Find contours of objects
        contours, _ = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

        # Iterate through contours and draw bounding rectangles
        for contour in contours:
            x, y, w, h = cv2.boundingRect(contour)
            cv2.rectangle(self.image, (x, y), (x+w, y+h), (0, 255, 0), 2)

        return self.image

# Example usage
segmenter = ImageSegmentation('image.jpg')
segmented_image = segmenter.segment_image()
cv2.imwrite('segmented_image.jpg', segmented_image)
