import tensorflow
from flask import Flask, request, jsonify
from keras.models import load_model
#from PIL import ImageOps, image
from keras.preprocessing import image
import numpy as np
import os
from flask_cors import CORS
from io import BytesIO



app = Flask(__name__)
CORS(app)

# Load your model
model = load_model('./model/test_code_alexnet_model_finished.keras')

# Define a function to predict the label
def predict_label(img_path):
    img = image.load_img(img_path, target_size=(64, 64))
    image_array = np.array(img)
    image_array = np.expand_dims(image_array, axis=0)
    image_array = image_array / 255.0
    prediction = model.predict(image_array)
    return prediction[0][0]

# Define the route to handle image upload
@app.route("/upload", methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400
    img_file = request.files['image']  

    if img_file.filename == '':
        return jsonify({'error': 'No image selected'}), 400

    # Convert FileStorage object to file-like object
    img_bytes = img_file.read()
    img_stream = BytesIO(img_bytes)

    # Load the image
    img = image.load_img(img_stream, target_size=(64, 64))
    image_array = np.array(img)
    image_array = np.expand_dims(image_array, axis=0)
    image_array = image_array / 255.0

    # Predict the label
    prediction = model.predict(image_array)

    # Determine the class label based on prediction
    class_label = "Fake" if prediction <= 0.5 else "Real"

    # Calculate confidence score
    confidence_score = 1 - prediction if class_label == "Fake" else prediction

    return jsonify({
        'prediction': prediction[0][0],
        'confidence_level': confidence_score.tolist()
    })

if __name__ == '__main__':
    app.run(debug=True)
