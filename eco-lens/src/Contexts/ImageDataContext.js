import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const ImageDataContext = createContext();

// Custom hook for easier access
export const useImageData = () => useContext(ImageDataContext);

// Provider component to wrap around your app
export const ImageDataProvider = ({ children }) => {
  const [imageData, setImageData] = useState({ imageFile: null, prediction: [] });
  const [firstResult, setFirstResult] = useState(null);

  useEffect(() => {
    if (imageData.prediction && imageData.prediction.length > 0) {
      // Store the first label before the comma
      setFirstResult(imageData.prediction[0].split(',')[0]);
    }
  }, [imageData.prediction]); // Depend on prediction changes

  return (
    <ImageDataContext.Provider value={{ imageData, setImageData, firstResult }}>
      {children}
    </ImageDataContext.Provider>
  );
};
