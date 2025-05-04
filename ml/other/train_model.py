import tensorflow as tf
import pandas as pd
import numpy as np
import os
import cv2
from tensorflow.keras import layers, models
from sklearn.model_selection import train_test_split
from tensorflow.keras.utils import to_categorical
from sklearn.preprocessing import LabelEncoder
import matplotlib.pyplot as plt

# Define constants
IMG_SIZE = 128
BATCH_SIZE = 32
EPOCHS = 10
DATASET_PATH = ""
CSV_FILE = "data.csv"


# Load the CSV file
df = pd.read_csv(CSV_FILE)

# Encode labels into numeric values
label_encoder = LabelEncoder()
df["label"] = label_encoder.fit_transform(df["label"])  # Convert text labels to numbers

# Load images and preprocess
X = []
y = []

for _, row in df.iterrows():
    img_path = os.path.join(DATASET_PATH, row["image"])  # Full path to image
    if os.path.exists(img_path):  # Check if image exists
        img = cv2.imread(img_path)
        img = cv2.resize(img, (IMG_SIZE, IMG_SIZE))  # Resize image
        img = img / 255.0  # Normalize
        X.append(img)
        y.append(row["label"])
    else:
        print(f"Warning: Image {img_path} not found!")

# Convert lists to numpy arrays
X = np.array(X)
y = np.array(y)

# Convert labels to categorical (one-hot encoding)
y = to_categorical(y, num_classes=len(label_encoder.classes_))

# Split dataset into training and validation sets
X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, random_state=42)

# Build CNN Model
model = models.Sequential([
    layers.Conv2D(32, (3,3), activation='relu', input_shape=(IMG_SIZE, IMG_SIZE, 3)),
    layers.MaxPooling2D(2,2),
    layers.Conv2D(64, (3,3), activation='relu'),
    layers.MaxPooling2D(2,2),
    layers.Conv2D(128, (3,3), activation='relu'),
    layers.MaxPooling2D(2,2),
    layers.Flatten(),
    layers.Dense(128, activation='relu'),
    layers.Dense(len(label_encoder.classes_), activation='softmax')
])

# Compile the model
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# Train the model
history = model.fit(X_train, y_train, epochs=EPOCHS, batch_size=BATCH_SIZE, validation_data=(X_val, y_val))

# Save the trained model
model.save("mechanic_issue_model.h5")
print("Model training complete & saved as mechanic_issue_model.h5")

# Plot training history
plt.plot(history.history['accuracy'], label='Train Accuracy')
plt.plot(history.history['val_accuracy'], label='Validation Accuracy')
plt.xlabel('Epochs')
plt.ylabel('Accuracy')
plt.legend()
plt.title('Training Performance')
plt.show()
