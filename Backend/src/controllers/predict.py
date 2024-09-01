import sys
import joblib
import numpy as np
import pandas as pd

def main():
    try:
        # Load the model, scaler, and label encoder
        model_path = 'C:/Users/renuk/OneDrive/Desktop/Farm/Backend/src/controllers/prediction models/crop_prediction_model.pkl'
        scaler_path = 'C:/Users/renuk/OneDrive/Desktop/Farm/Backend/src/controllers/prediction models/scaler.pkl'
        le_path = 'C:/Users/renuk/OneDrive/Desktop/Farm/Backend/src/controllers/prediction models/label_encoder.pkl'
        
        print("Loading model...")
        model = joblib.load(model_path)
        print("Loading scaler...")
        scaler = joblib.load(scaler_path)
        print("Loading label encoder...")
        le = joblib.load(le_path)
        
        # Get input data
        N = float(sys.argv[1])
        P = float(sys.argv[2])
        K = float(sys.argv[3])
        rainfall = float(sys.argv[4])
        temperature = float(sys.argv[5])
        humidity = float(sys.argv[6])
        # N = 90
        # P= 40
        # K = 60
        # rainfall = 200
        # temperature = 25
        # humidity = 75
        
        # Create feature DataFrame and scale it
        features = pd.DataFrame([[N, P, K, rainfall, temperature, humidity]], columns=['N', 'P', 'K', 'rainfall', 'temperature', 'humidity'])
        print(f"Features before scaling: {features}")
        features_scaled = scaler.transform(features)
        print(f"Features after scaling: {features_scaled}")
        
        # Predict and print result
        prediction = model.predict(features_scaled)
        print(f"Prediction: {le.inverse_transform(prediction)[0]}")
        
    except FileNotFoundError as e:
        print(f"Error: File not found. {e}")
    except ValueError as e:
        print(f"Error: Invalid value provided. {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == '__main__':
    main()

print("hello")