import React, { useState } from 'react';
import { useImageData } from '../Contexts/ImageDataContext'; // Import the context hook
import axios from 'axios';

const PredictionDetail = () => {
  const { imageData, firstResult } = useImageData(); // Access prediction data and first Result from context
  const [response, setResponse] = useState(null); // State to store the response from Llama model

  const handleYesClick = async () => {
    if (!firstResult) {
      alert("No prediction Result available.");
      return;
    }

    const prompt = `Give 2-3 sentences on how to recycle ${firstResult}`;

    try {
      const apiResponse = await axios.post(
        'https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-3B-Instruct', // Replace with your Hugging Face model endpoint
        { inputs: prompt },
        {
          headers: {
            'Authorization': 'Bearer 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', // Use your Hugging Face API key
            'Content-Type': 'application/json',
          },
        }
      );
      setResponse(apiResponse.data); // Store the response in the state
    } catch (error) {
      console.error("Error sending to Hugging Face:", error);
    }
  };

  const handleNoClick = () => {
    alert("You chose No. No further action will be taken.");
  };

  return (
    <div>
      <h1>Prediction Details</h1>
      {imageData.imageFile ? (
        <>
          <h2>Uploaded Image</h2>
          <img src={imageData.imageFile} alt="Uploaded" style={{ width: '300px', height: 'auto' }} />
        </>
      ) : (
        <p>No image uploaded</p>
      )}

      {firstResult ? (
        <>
          <h2>Top Prediction</h2>
          <p>{firstResult}</p>
          <div>
            <button onClick={handleYesClick}>Yes</button>
            <button onClick={handleNoClick}>No</button>
          </div>
        </>
      ) : (
        <p>No predictions available</p>
      )}

      {response && (
        <div>
          <h2>Llama Response</h2>
          {/* <p>{response}</p> */}
        </div>
      )}
    </div>
  );
};

export default PredictionDetail;
