import tensorflow as tf
import numpy as np
import cv2
import os

# Load the trained model
MODEL_PATH = "model/mechanic_issue_model.h5"
if not os.path.exists(MODEL_PATH):
    raise Exception("Trained model not found. Train the model first.")

model = tf.keras.models.load_model(MODEL_PATH)

# Define image size
IMG_SIZE = 128
CLASS_NAMES = ['dent', 'scratch', 'broken_light']  # Change as per dataset

def predict_issue(image_path):
    # Load and preprocess the image
    img = cv2.imread(image_path)
    img = cv2.resize(img, (IMG_SIZE, IMG_SIZE))
    img = img / 255.0  # Normalize
    img = np.expand_dims(img, axis=0)  # Add batch dimension

    # Get prediction
    predictions = model.predict(img)
    predicted_class = CLASS_NAMES[np.argmax(predictions)]

    print(f"🔍 Predicted Issue: {predicted_class}")

# Test Prediction
image_path = "image.png"  # Replace with the path of the image to test
predict_issue(image_path)
