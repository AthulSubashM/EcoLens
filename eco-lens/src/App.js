import React from 'react';
import Home from './Pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestPage from './Pages/result';
import { ImageDataProvider } from './Contexts/ImageDataContext';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ImageDataProvider>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<TestPage />} />
        </Routes>
      </ImageDataProvider>
    </BrowserRouter>
  );
}

export default App;
