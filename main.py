from flask import Flask, request, jsonify
from keras.utils import get_file
import tensorflow as tf
from PIL import Image
import numpy as np

app = Flask(__name__)

# Load the TFLite model
model_path = "tflite_model1.tflite"
interpreter = tf.lite.Interpreter(model_path=model_path)
interpreter.allocate_tensors()

# Get input and output details
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()


@app.route("/api")
def test():
    return "API is connected"


@app.route("/predict", methods=["POST"])
def predict():
    file = request.files["file"]
    img = Image.open(file).convert("RGB")
    img = img.resize((224, 224))
    img_array = np.array(img, dtype=np.float32)
    img_array = (img_array / 255.0).astype(np.float32)
    img_array = np.expand_dims(img_array, axis=0)

    # Set the input tensor
    input_shape = input_details[0]["shape"]
    interpreter.set_tensor(input_details[0]["index"], img_array)

    # Run the inference
    interpreter.invoke()

    # Get the output tensor
    output = interpreter.get_tensor(output_details[0]["index"])

    # Process the output probabilities
    classes = np.squeeze(output)
    max_prob = np.max(classes)
    max_index = np.argmax(classes)

    labels = [
        "Fresh Apples",
        "Fresh Bananas",
        "Fresh Bellpepper",
        "Fresh Cucumber",
        "Fresh Mango",
        "Fresh Meat",
        "Fresh Orange",
        "Fresh Potato",
        "Fresh Strawberry",
        "Fresh Tomato",
        "Rotten Apples",
        "Rotten Bananas",
        "Rotten Bellpepper",
        "Rotten Cucumber",
        "Rotten Mango",
        "Rotten Meat",
        "Rotten Orange",
        "Rotten Potato",
        "Rotten Strawberry",
        "Rotten Tomato",
    ]

    predict_label = labels[max_index]
    confidence = round(float(max_prob) * 100, 2)
    result = {"label": predict_label, "confidence": confidence}
    return jsonify(result)


if __name__ == "__main__":
    app.run(port=5002)
