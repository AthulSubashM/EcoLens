import React, { useState } from 'react';
import { useImageData } from '../Contexts/ImageDataContext'; // Import the context hook
import Nav from "../Components/Navbar";
import { useNavigate } from 'react-router-dom';

const PredictionDetail = () => {
  const { imageData, firstResult } = useImageData(); // Access prediction data and firstResult from context
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleYesClick = () => {
    if (!firstResult) {
      alert("No prediction result available.");
      return;
    }

    navigate('/result'); // Navigate to result page after clicking "Yes"
  };

  const handleNoClick = () => {
    alert("You chose No. No further action will be taken.");
  };

  return (
    <>
      <Nav />
      <div className='confirm-container'>
        <img src={imageData.imageFile} alt="Uploaded" style={{ width: '300px', height: 'auto' }} />
        <div className='confirm-text'>
        <h2>{firstResult}</h2>
        <p>Is this correct?</p>
            <div>
              <button onClick={handleYesClick} disabled={loading}>Yes</button>
              <button onClick={handleNoClick}>No</button>
            </div>
            </div>
      </div>
    </>
  );
};

export default PredictionDetail;
