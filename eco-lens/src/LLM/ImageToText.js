import React, { useState } from 'react';
import axios from 'axios';
import { useImageData } from '../Contexts/ImageDataContext';
import { Link } from 'react-router-dom'; // Import Link for navigation

const UploadImage = () => {
  const [localImageFile, setLocalImageFile] = useState(null);  // Local state for the image file
  const { setImageData } = useImageData();  // Access the context

  // This function will convert the captured image to base64 format
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLocalImageFile(reader.result);
      };
      reader.readAsDataURL(file);  // Convert the file to base64
    }
  };

  const handleSubmit = async () => {
    if (!localImageFile) {
      alert("Please capture an image first!");
      return;
    }

    // Send the image as base64 encoded string to Hugging Face API
    const base64Image = localImageFile.split(',')[1];  // Remove the base64 prefix
    const data = {
      inputs: base64Image,  // Base64 string without the prefix
    };

    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/google/vit-base-patch16-224',
        data,
        {
          headers: {
            'Authorization': 'Bearer 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',  // Use your Hugging Face API key
            'Content-Type': 'application/json',  // Content type should be JSON
          }
        }
      );

      const labels = response.data.map(item => item.label);

      // Store the image and prediction in the context
      setImageData({ imageFile: localImageFile, prediction: labels });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <div className="button-container">
        <h1>Capture Image for Prediction</h1>
      </div>
      <label htmlFor="camera-input" className="capture-button">Capture</label>
      <input
        type="file"
        id="camera-input"
        accept="image/*"
        capture="camera" // Trigger the camera app
        onChange={handleImageChange}
        style={{ display: 'none' }} // Hide the input element
      />
      <button onClick={handleSubmit}>Submit</button>

      {/* Display prediction from context */}
      {localImageFile && <h2>Image Captured. <Link to="/test">View Prediction</Link></h2>}
    </div>
  );
};

export default UploadImage;
