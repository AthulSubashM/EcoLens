import React, { useState } from 'react';
import axios from 'axios';

const UploadImage = () => {
  const [imageFile, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  // This function will convert the selected image to base64 format
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Store the base64 image string in state
        setImage(reader.result);
      };
      reader.readAsDataURL(file); // Convert the file to base64
    }
  };

  const handleSubmit = async () => {
    if (!imageFile) {
      alert("Please upload an image first!");
      return;
    }

    // Send the image as base64 encoded string to Hugging Face API
    const base64Image = imageFile.split(',')[1]; // Remove the base64 prefix
    const data = {
      inputs: base64Image, // Base64 string without prefix is sent here
    };

    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/google/vit-base-patch16-224',
        data,
        {
          headers: {
            'Authorization': , // Use your Hugging Face API key
            'Content-Type': 'application/json', // Content type should be JSON
          }
        }
      );
      // Display the prediction from the response
      setPrediction(response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <h1>Upload Image for Prediction</h1>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Submit</button>
      {prediction && <h2>Prediction: {JSON.stringify(prediction)}</h2>}
    </div>
  );
};

export default UploadImage;
