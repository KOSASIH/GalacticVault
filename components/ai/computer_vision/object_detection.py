import cv2
import numpy as np

class ObjectDetection:
    def __init__(self, model_path, confidence_threshold):
        self.model = cv2.dnn.readNetFromDarknet(model_path)
        self.confidence_threshold = confidence_threshold

    def detect_objects(self, image):
        height, width, channels = image.shape
        blob = cv2.dnn.blobFromImage(image, 0.00392, (416, 416), (0, 0, 0), True, crop=False)
        self.model.setInput(blob)
        outputs = self.model.forward(self.model.getUnconnectedOutLayersNames())

        boxes = []
        confidences = []
        class_ids = []

        for output in outputs:
            for detection in output:
                scores = detection[5:]
                class_id = np.argmax(scores)
                confidence = scores[class_id]
                if confidence > self.confidence_threshold:
                    center_x = int(detection[0] * width)
                    center_y = int(detection[1] * height)
                    w = int(detection[2] * width)
                    h = int(detection[3] * height)
                    x = int(center_x - w / 2)
                    y = int(center_y - h / 2)
                    boxes.append([x, y, w, h])
                    confidences.append(float(confidence))
                    class_ids.append(class_id)

        indices = cv2.dnn.NMSBoxes(boxes, confidences, self.confidence_threshold, 0.4)
        result_boxes = []
        result_confidences = []
        result_class_ids = []

        for i in indices:
            i = i[0]
            result_boxes.append(boxes[i])
            result_confidences.append(confidences[i])
            result_class_ids.append(class_ids[i])

        return result_boxes, result_confidences, result_class_ids

    def draw_boxes(self, image, boxes, confidences, class_ids):
        for i in range(len(boxes)):
            x, y, w, h = boxes[i]
            label = f"{self.classes[class_ids[i]]}: {confidences[i]:.2f}"
            cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)
            cv2.putText(image, label, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 1)

        return image

    def load_classes(self, class_path):
        with open(class_path, 'r') as f:
            classes = [line.strip() for line in f.readlines()]
        return classes

# Example usage
od = ObjectDetection("yolov3.cfg", 0.5)
od.model.setInput(blob)
outputs = od.model.forward(od.model.getUnconnectedOutLayersNames())

classes = od.load_classes("coco.names")

for output in outputs:
    for detection in output:
        scores = detection[5:]
        class_id = np.argmax(scores)
        confidence = scores[class_id]
        if confidence > 0.5:
            center_x = int(detection[0] * width)
            center_y = int(detection[1] * height)
            w = int(detection[2] * width)
            h = int(detection[3] * height)
            x = int(center_x - w / 2)
            y = int(center_y - h / 2)
            boxes.append([x, y, w, h])
            confidences.append(float(confidence))
            class_ids.append(class_id)

indices = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)
result_boxes = []
result_confidences = []
result_class_ids = []

for i in indices:
    i = i[0]
    result_boxes.append(boxes[i])
    result_confidences.append(confidences[i])
    result_class_ids.append(class_ids[i])

image_with_boxes = od.draw_boxes(image, result_boxes, result_confidences, result_class_ids)
cv2.imshow("Image", image_with_boxes)
cv2.waitKey(0)
cv2.destroyAllWindows()
