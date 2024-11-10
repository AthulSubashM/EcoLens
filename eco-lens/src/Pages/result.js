import React, { useState, useEffect } from 'react';
import { useImageData } from '../Contexts/ImageDataContext'; // Import the context hook
import axios from 'axios';
import Nav from "../Components/Navbar";

const PredictionDetail = () => {
  const { imageData, firstResult } = useImageData(); // Access prediction data and firstResult from context
  const [response, setResponse] = useState(null); // State to store the response from Llama model
  const [loading, setLoading] = useState(false); // State to handle loading

  useEffect(() => {
    const fetchPrediction = async () => {
      if (!firstResult) {
        alert("No prediction result available.");
        return;
      }

      setLoading(true); // Start loading

      // Construct the request body with the correct structure for Groq API
      const requestBody = {
        model: 'llama3-8b-8192',  // You can replace with the model you want to use
        messages: [
          {
            role: 'user',
            content: `Categorize the given object, ${firstResult}, into one of the following categories: Bio-Degradable, Recyclable, Hazardous Waste, Electronic Waste, Non-Recyclable Waste, or Clothing. Common items such as plastic bags should generally be classified as non-recyclable waste unless otherwise specified. Additionally, provide a description on how to dispose of the object based on its category. Only return a JSON file with "category" and "description". If there is no likely category for the object, return -1.`  // Send the first label as a prompt
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

        // Parse the stringified content field and set the response state
        const parsedContent = JSON.parse(apiResponse.data.choices[0].message.content);
        setResponse(parsedContent); // Store the parsed JSON in state
      } catch (error) {
        console.error("Error sending data to Groq AI:", error);
      } finally {
        setLoading(false); // Stop loading when request is complete
      }
    };

    fetchPrediction(); // Call the function to fetch data

  }, [firstResult]); // Re-run the effect when firstResult changes

  return (
    <>
      <Nav />
      <div>
        {loading ? (
          <p>Loading...</p> // Show loading indicator
        ) : (
          response && (
            <div>
              <h2>{response.category}</h2> {/* Display category */}
              <p>{response.description}</p> {/* Display description */}
            </div>
          )
        )}
      </div>
    </>
  );
};

export default PredictionDetail;
