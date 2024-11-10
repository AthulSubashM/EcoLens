import React, { useState } from 'react';
import axios from 'axios';
import { useImageData } from '../Contexts/ImageDataContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting

const UploadImage = () => {
  const [localImageFile, setLocalImageFile] = useState(null); // Local state for the image file
  const { setImageData } = useImageData(); // Access the context
  const navigate = useNavigate(); // Hook for navigating to result page

  // This function will convert the selected or captured image to base64 format
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLocalImageFile(reader.result);
        // Automatically trigger the prediction after setting the image
        handleImagePrediction(reader.result);
      };
      reader.readAsDataURL(file); // Convert the file to base64
    }
  };

  // Handle prediction logic
  const handleImagePrediction = async (imageData) => {
    if (!imageData) {
      alert('Please capture or upload an image first!');
      return;
    }

    // Send the image as base64 encoded string to the Hugging Face API
    const base64Image = imageData.split(',')[1]; // Remove the base64 prefix
    const data = {
      inputs: base64Image, // Base64 string without the prefix
    };

    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/google/vit-base-patch16-224',
        data,
        {
          headers: {
            'Authorization': 'Bearer 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', // Use your Hugging Face API key
            'Content-Type': 'application/json', // Content type should be JSON
          },
        }
      );

      const labels = response.data.map((item) => item.label);

      // Store the image and prediction in the context
      setImageData({ imageFile: imageData, prediction: labels });

      // Redirect to result page after prediction
      navigate('/test');
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <div className="button-container">
        <h1>Capture or Upload Image for Prediction</h1>
      </div>

      {/* Button for opening the camera */}
      <label htmlFor="camera-input" className="capture-button">
        Capture
      </label>
      <input
        type="file"
        id="camera-input"
        accept="image/*"
        capture="camera" // Trigger the camera app
        onChange={handleImageChange}
        style={{ display: 'none' }} // Hide the input element
      />

      {/* File input for uploading an image */}
      <label htmlFor="upload-input" className="upload-button">
        Upload Image
      </label>
      <input
        type="file"
        id="upload-input"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }} // Hide the input element
      />
    </div>
  );
};

export default UploadImage;
