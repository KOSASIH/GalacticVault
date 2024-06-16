import tensorflow as tf
import numpy as np
import cv2

class ImageGenerator:
    def __init__(self, model_path):
        self.model = tf.keras.models.load_model(model_path)

    def generate_image(self, noise_vector):
        generated_image = self.model.predict(noise_vector)
        generated_image = generated_image * 127.5 + 127.5
        generated_image = generated_image.astype(np.uint8)
        return generated_image

    def generate_random_image(self):
        noise_vector = tf.random.normal([1, 100])
        return self.generate_image(noise_vector)

    def generate_image_from_seed(self, seed):
        noise_vector = tf.random.normal([1, 100], seed=seed)
        return self.generate_image(noise_vector)

    def save_image(self, image, image_path):
        cv2.imwrite(image_path, image)

# Example usage
ig = ImageGenerator("gan_model.h5")

# Generate a random image
random_image = ig.generate_random_image()
ig.save_image(random_image, "random_image.jpg")

# Generate an image from a specific seed
seed_image = ig.generate_image_from_seed(42)
ig.save_image(seed_image, "seed_image.jpg")
