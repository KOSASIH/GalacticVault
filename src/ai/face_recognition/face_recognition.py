import cv2
import face_recognition

class FaceRecognition:
    def __init__(self, image_path):
        self.image = face_recognition.load_image_file(image_path)

    def detect_faces(self):
        face_locations = face_recognition.face_locations(self.image)
        return face_locations

    def recognize_faces(self, face_locations):
        face_encodings = face_recognition.face_encodings(self.image, face_locations)
        face_names = []
        for face_encoding in face_encodings:
            matches = face_recognition.compare_faces(known_face_encodings, face_encoding)
            name = "Unknown"
            if True in matches:
                first_match_index = matches.index(True)
                name = known_face_names[first_match_index]
            face_names.append(name)
        return face_names

# Example usage
recognizer = FaceRecognition('image.jpg')
face_locations = recognizer.detect_faces()
face_names = recognizer.recognize_faces(face_locations)
print(face_names)
