import google.generativeai as genai
import cv2
import dlib
import numpy as np
from skimage.feature import local_binary_pattern
from matplotlib import pyplot as plt
import json

image_path = "/kaggle/input/raj-dt/WhatsApp Image 2025-01-18 at 18.33.44_df0c4d7f.jpg"
image = cv2.imread(image_path)
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor("/kaggle/input/shape-pred2/shape_predictor_68_face_landmarks.dat")

results = []

faces = detector(gray)

for face in faces:
    landmarks = predictor(gray, face)
    landmarks_array = np.array([(p.x, p.y) for p in landmarks.parts()])

    x, y, w, h = face.left(), face.top(), face.width(), face.height()
    face_region = image[y:y+h, x:x+w]

    hsv_face = cv2.cvtColor(face_region, cv2.COLOR_BGR2HSV)
    avg_skin_tone = cv2.mean(hsv_face)[:3]

    lbp = local_binary_pattern(cv2.cvtColor(face_region, cv2.COLOR_BGR2GRAY), P=8, R=1, method="uniform")
    lbp_hist, _ = np.histogram(lbp.ravel(), bins=np.arange(0, 59), density=True)

    left_eye = landmarks_array[36:42]
    right_eye = landmarks_array[42:48]
    under_eye_region = image[min(left_eye[:,1]):max(left_eye[:,1]), min(left_eye[:,0]):max(right_eye[:,0])]
    avg_under_eye_intensity = np.mean(cv2.cvtColor(under_eye_region, cv2.COLOR_BGR2GRAY))

    gray_face = cv2.cvtColor(face_region, cv2.COLOR_BGR2GRAY)
    _, spots = cv2.threshold(gray_face, 120, 255, cv2.THRESH_BINARY_INV)
    num_spots = cv2.countNonZero(spots)

    face_result = {
        "average_skin_tone_hsv": {
            "hue": avg_skin_tone[0],
            "saturation": avg_skin_tone[1],
            "value": avg_skin_tone[2]
        },
        "lbp_histogram": lbp_hist.tolist(),
        "average_under_eye_intensity": avg_under_eye_intensity,
        "number_of_spots": num_spots
    }

    results.append(face_result)

genai.configure(api_key="api_key")

model = genai.GenerativeModel("gemini-1.5-flash")

patient_info = {
    "age": 30,
    "gender": "female",
    "lifestyle": "active",
    "diet": "vegetarian"
}

data = results

prompt = (
    "Based on the following facial analysis data, provide insights into potential health conditions or recommendations:\n\n"
    f"Average Skin Tone (HSV):\n"
    f"Hue: {data[0]['average_skin_tone_hsv']['hue']}\n"
    f"Saturation: {data[0]['average_skin_tone_hsv']['saturation']}\n"
    f"Value: {data[0]['average_skin_tone_hsv']['value']}\n\n"
    f"LBP Histogram: {data[0]['lbp_histogram']}\n\n"
    f"Average Under-Eye Intensity: {data[0]['average_under_eye_intensity']}\n"
)

response = model.generate_content(prompt)

print(response.text)