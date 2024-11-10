import React, { useState } from 'react';
import { useImageData } from '../Contexts/ImageDataContext'; // Import the context hook
import axios from 'axios';

const PredictionDetail = () => {
  const { imageData, firstResult } = useImageData(); // Access prediction data and first Result from context
  const [response, setResponse] = useState(null); // State to store the response from Llama model

  const handleYesClick = async () => {
    if (!firstResult) {
      alert("No prediction result available.");
      return;
    }

    // Construct the request body with the correct structure for Groq API
    const requestBody = {
      model: 'llama3-8b-8192',  // You can replace with the model you want to use
      messages: [
        {
          role: 'user',
          content: `${firstResult} categorize the given object into the following, Bio-Degradable, recyclable, hazardous waste, electronic waste, non-recyclable waste, clothing. Also provide a description on how to dispose of the object based on the category decided, for the description give about 2-3 sentences, describing on the simplest method of disposal, for example, simplest method is if local municipality comes to collect that specific type of waste if not, what can we do on our own. electronic waste needs to be sent to a near by recycling center. Return as a json file only with category and description. If there is no likely category for the object output -1 and do not give a description in case of -1.`  // Send the first label as a prompt
        }
      ],
      response_format: { type: 'json_object' }
    };

    try {
      // Send the request to Groq API
      const apiResponse = await axios.post(
        'https://api.groq.com/openai/v1/chat/completions', // Groq API endpoint
        requestBody, // Send the structured request body
        {
          headers: {
            'Authorization': 'Bearer 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', // Replace with your Groq API key
            'Content-Type': 'application/json' // Ensure content type is JSON
          }
        }
      );

      setResponse(apiResponse.data); // Store the API result in state
    } catch (error) {
      console.error("Error sending data to Groq AI:", error);
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
          <p>{response.choices && response.choices[0].message.content}</p> {/* Display the response message */}
        </div>
      )}
    </div>
  );
};

export default PredictionDetail;
