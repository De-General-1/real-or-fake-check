from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
from PIL import Image
from keras.models import load_model
from keras.preprocessing import image
import io

app = FastAPI()

# Load your model
model = load_model('./model/test_code_alexnet_model_finished.keras')

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

# Define a function to preprocess the image
def preprocess_image(img):
    img = img.resize((64, 64))  # Resize the image to match the input size of your model
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array / 255.0  # Normalize pixel values
    return img_array

# Define a function to predict the label
def predict_label(img):
    img_array = preprocess_image(img)
    prediction = model.predict(img_array)
    return prediction[0][0]

# Route to handle image upload and prediction
@app.post("/upload")
async def upload_image(file: UploadFile = File(...)):
    try:
        # Read the uploaded image file
        contents = await file.read()
        img = Image.open(io.BytesIO(contents))

        # Predict the label
        prediction = predict_label(img)

        # Determine the class label based on prediction
        class_label = "Fake" if prediction <= 0.5 else "Real"

        # Convert prediction to Python float
        prediction = float(prediction)

        # Return the prediction result as JSON
        return {
            'prediction': class_label,
            'confidence_level': prediction
        }
    except Exception as e:
        # Handle any errors that occur during prediction
        raise HTTPException(status_code=500, detail=str(e))
