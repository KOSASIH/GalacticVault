import cv2
import numpy as np

class ImageProcessing:
    def __init__(self):
        pass

    def load_image(self, image_path):
        return cv2.imread(image_path)

    def resize_image(self, image, width, height):
        return cv2.resize(image, (width, height))

    def convert_to_grayscale(self, image):
        return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    def apply_threshold(self, image, threshold_value):
        _, thresh = cv2.threshold(image, threshold_value, 255, cv2.THRESH_BINARY)
        return thresh

    def detect_edges(self, image):
        return cv2.Canny(image, 100, 200)

    def find_contours(self, image):
        contours, _ = cv2.findContours(image, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        return contours

    def draw_contours(self, image, contours):
        cv2.drawContours(image, contours, -1, (0, 255, 0), 2)
        return image

    def save_image(self, image, image_path):
        cv2.imwrite(image_path, image)

# Example usage
ip = ImageProcessing()

# Load an image
image = ip.load_image('image.jpg')

# Resize the image
image = ip.resize_image(image, 640, 480)

# Convert to grayscale
gray = ip.convert_to_grayscale(image)

# Apply threshold
thresh = ip.apply_threshold(gray, 127)

# Detect edges
edges = ip.detect_edges(thresh)

# Find contours
contours = ip.find_contours(edges)

# Draw contours
image_with_contours = ip.draw_contours(image, contours)

# Save the output image
ip.save_image(image_with_contours, 'output.jpg')
