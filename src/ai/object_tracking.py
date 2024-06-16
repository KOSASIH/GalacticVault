import cv2

class ObjectTracking:
    def __init__(self, video_path):
        self.video = cv2.VideoCapture(video_path)
        self.tracker = cv2.TrackerKCF_create()

    def track_object(self):
        while True:
            ret, frame = self.video.read()
            if not ret:
                break

            # Initialize tracker with first frame
            if not self.tracker.init:
                self.tracker.init(frame, (100, 100, 200, 200))

            # Update tracker with new frame
            self.tracker.update(frame)

            # Draw bounding box around tracked object
            x, y, w, h = self.tracker.get_position()
            cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)

            cv2.imshow('Tracking', frame)
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

        self.video.release()
        cv2.destroyAllWindows()

# Example usage
tracker = ObjectTracking('video.mp4')
tracker.track_object()
