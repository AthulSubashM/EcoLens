// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Settings from './Pages/Settings';
import Profile from './Pages/Profile';
import Explore from './Pages/Explore';
import NavBar from './Components/NavBar';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/explore" element={<Explore />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
