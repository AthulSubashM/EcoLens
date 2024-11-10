import React from 'react';
import { useImageData } from '../Contexts/ImageDataContext'; // Import the context hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const OtherResults = () => {
  const { imageData, firstResult, setFirstResult } = useImageData(); // Get image data and setFirstResult from context
  const navigate = useNavigate(); // Initialize the navigate function
  
  // Filter out the first result
  const otherResults = imageData.prediction.filter(result => result !== firstResult);
  
  const handleResultClick = (result) => {
    const resultWithoutComma = result.split(',')[0]; // Get the part before the comma
    setFirstResult(resultWithoutComma); // Update the firstResult with the selected result
    navigate('/result'); // Navigate to the /result page after setting the new first result
  };
  
  return (
    <div className="other-results">
      <h3>Other Results</h3>
      {otherResults.length > 0 ? (
        <ul>
          {otherResults.map((result, index) => (
            <li key={index}>
              <button onClick={() => handleResultClick(result)} className="result-button">
                {result.split(',')[0]} {/* Display the result before the comma */}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default OtherResults;
