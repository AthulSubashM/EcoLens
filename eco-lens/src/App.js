import React from 'react';
import Home from './Pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Result from './Pages/result';
import Confirm from './Pages/confirm';
import { ImageDataProvider } from './Contexts/ImageDataContext';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ImageDataProvider>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </ImageDataProvider>
    </BrowserRouter>
  );
}

export default App;
