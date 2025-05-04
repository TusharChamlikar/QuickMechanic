import tensorflow as tf
import numpy as np
import cv2
import os
import pandas as pd
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from flask_cors import CORS
# Initialize Flask app
app = Flask(__name__)
CORS(app)
# Load the trained model
MODEL_PATH = "mechanic_issue_model.h5"
if not os.path.exists(MODEL_PATH):
    raise Exception("Trained model not found. Train the model first.")
model = tf.keras.models.load_model(MODEL_PATH)

# Load class names from CSV
data_csv = "data.csv"  # CSV file containing image paths and labels
df = pd.read_csv(data_csv)
CLASS_NAMES = df['label'].unique().tolist()  # Extract unique class labels

# Define constants
IMG_SIZE = 128
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Prediction function
def predict_issue(image_path):
    img = cv2.imread(image_path)
    img = cv2.resize(img, (IMG_SIZE, IMG_SIZE))
    img = img / 255.0  # Normalize
    img = np.expand_dims(img, axis=0)  # Add batch dimension
    
    predictions = model.predict(img)
    predicted_class = CLASS_NAMES[np.argmax(predictions)]
    return predicted_class

# Flask API endpoint
@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({"error": "No file provided"}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(file.filename))
    file.save(filepath)
    
    prediction = predict_issue(filepath)
    return jsonify({"prediction": prediction})

if __name__ == '__main__':
    app.run(debug=True)
