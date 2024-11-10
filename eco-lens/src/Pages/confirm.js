import React, { useState } from 'react';
import { useImageData } from '../Contexts/ImageDataContext'; // Import the context hook
import Nav from "../Components/Navbar";
import Footer from "../Components/Footer";
import Results from "../Components/ResultBox"; // Import the Results component
import { useNavigate } from 'react-router-dom';
import Search from "../Components/Search"; // Import the Search component
import Itt from "../LLM/ImageToText";
import OtherResults from '../Components/OtherResults';

const PredictionDetail = () => {
  const { imageData, firstResult } = useImageData(); // Access prediction data and firstResult from context
  const [loading, setLoading] = useState(false); // Loading state
  const [showResults, setShowResults] = useState(false); // State to track if Results should be shown
  const [showSearch, setShowSearch] = useState(false); // State to track if Search should be shown
  const navigate = useNavigate();

  const handleYesClick = () => {
    if (!firstResult) {
      alert("No prediction result available.");
      return;
    }

    setShowResults(true); // Set state to show Results component
    setShowSearch(false); // Hide Search if Yes is clicked
  };

  const handleNoClick = () => {
    setShowSearch(true); // Set state to show Search component when "No" is clicked
    setShowResults(false); // Hide Results if No is clicked
  };

  return (
    <>
      <Nav />
      <div className='confirm-container'>
        <img className='confirm-img' src={imageData.imageFile} alt="Uploaded" style={{ width: '300px', height: 'auto' }} />
        <div className='confirm-box'>
          {showResults ? (
            <Results /> // Show Results component when showResults is true
          ) : showSearch ? (
            <div className='result-box'>
            <Search />
            <Itt />
            <OtherResults />
            </div>
          ) : (
            <div className='confirm-text'>
              <h2>{firstResult}</h2>
              <div>
                <button
                  className='yes-button'
                  onClick={handleYesClick}
                  disabled={loading || !firstResult} // Disable if loading or no first result
                >
                  Yes
                </button>
                <button
                  className='no-button'
                  onClick={handleNoClick}
                  disabled={loading} // Disable if loading
                >
                  No
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PredictionDetail;
