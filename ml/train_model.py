import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import os

# Define image size and batch size
IMG_SIZE = 128
BATCH_SIZE = 32
EPOCHS = 10
DATASET_PATH = "dataset/"

# Check if dataset exists
if not os.path.exists(DATASET_PATH):
    raise Exception("Dataset folder not found. Please add images in 'dataset/'.")

# Data Augmentation and Preprocessing
train_datagen = ImageDataGenerator(
    rescale=1./255, 
    rotation_range=20, 
    width_shift_range=0.2, 
    height_shift_range=0.2, 
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True,
    validation_split=0.2
)

# Load Training and Validation Data
train_data = train_datagen.flow_from_directory(
    DATASET_PATH, 
    target_size=(IMG_SIZE, IMG_SIZE), 
    batch_size=BATCH_SIZE, 
    class_mode='categorical', 
    subset='training'
)

val_data = train_datagen.flow_from_directory(
    DATASET_PATH, 
    target_size=(IMG_SIZE, IMG_SIZE), 
    batch_size=BATCH_SIZE, 
    class_mode='categorical', 
    subset='validation'
)

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
    layers.Dense(train_data.num_classes, activation='softmax')
])

# Compile the model
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# Train the model
model.fit(train_data, epochs=EPOCHS, validation_data=val_data)

# Save the trained model
model.save("model/mechanic_issue_model.h5")
print("✅ Model training complete & saved as 'mechanic_issue_model.h5'")
