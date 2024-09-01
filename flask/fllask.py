from flask import Flask, request, jsonify
import joblib
import pandas as pd
from sklearn.preprocessing import StandardScaler, LabelEncoder

app = Flask(__name__)

# Load the model, scaler, and label encoder
model = joblib.load('flask/crop_prediction_model.pkl')
scaler = joblib.load('flask/scaler.pkl')
label_encoder = joblib.load('flask/label_encoder.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    
    # Convert data to DataFrame
    df = pd.DataFrame(data, index=[0])
    
    # Ensure columns are in the correct order
    features = ['N', 'P', 'K', 'rainfall', 'temperature', 'humidity']
    
    # Check if all necessary columns are present
    for feature in features:
        if feature not in df.columns:
            return jsonify({'error': f'Missing feature: {feature}'}), 400

    # Preprocess the data
    X = df[features]
    X_scaled = scaler.transform(X)

    # Make prediction
    prediction = model.predict(X_scaled)
    predicted_label = label_encoder.inverse_transform(prediction)
    
    return jsonify({'prediction': predicted_label[0]})

if __name__ == '__main__':
    app.run(debug=True)
