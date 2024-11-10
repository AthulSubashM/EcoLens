import React, { useState, useEffect } from 'react';
import { useImageData } from '../Contexts/ImageDataContext'; // Import the context hook
import axios from 'axios';
import LoadingAni from '../Components/Loading';

const ResultBox = () => {
  const { firstResult } = useImageData(); // Access firstResult from context
  const [response, setResponse] = useState(null); // State to store the response from Llama model
  const [loading, setLoading] = useState(true); // Loading state to handle API request
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchPrediction = async () => {
      if (!firstResult) {
        alert("No prediction result available.");
        setLoading(false);
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
              'Authorization': `Bearer ${process.env.REACT_APP_GROQ_API_KEY}`, // Replace with your Groq API key
              'Content-Type': 'application/json' // Ensure content type is JSON
            }
          }
        );

        // Parse the stringified content field and set the response state
        const parsedContent = JSON.parse(apiResponse.data.choices[0].message.content);
        setResponse(parsedContent); // Store the parsed JSON in state
      } catch (error) {
        console.error("Error sending data to Groq AI:", error);
        setError("An error occurred while fetching the prediction.");
      } finally {
        setLoading(false); // Stop loading when request is complete
      }
    };

    fetchPrediction(); // Call the function to fetch data

  }, [firstResult]); // Re-run the effect when firstResult changes

  if (loading) {
    return <div className='result-box'>
        <LoadingAni />
    </div>; // Loading state
  }

  if (error) {
    return <p>{error}</p>; // Error handling
  }

  return (
    <>
      <div className='result-box'>
        <h2>{response.category}</h2> {/* Display category */}
        <p>{response.description}</p> {/* Display description */}
      </div>
    </>
  );
};

export default ResultBox;
