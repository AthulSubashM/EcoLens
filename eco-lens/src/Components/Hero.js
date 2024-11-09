/*Hero.js*/
import React from 'react';

export default function Hero() {
    return (
        <div className="hero-container">
            {/* Title and logo at the top */}
            <div className="hero-header">
                <img src="./logo.jpeg" alt="Eco-Lens Logo" className="hero-logo" />
                <h1>Eco-Lens</h1>
            </div>
            
            {/* Search Prompt */}
            <div className="hero-search">
                <h2>Search your environmental topics...</h2>
            </div>

            {/* Interactive Icons */}
            <div className="hero-icons">
                <div className="hero-icon">🌿<span>Learn</span></div>
                <div className="hero-icon">🌍<span>Explore</span></div>
                <div className="hero-icon">🔔<span>Notifications</span></div>
            </div>

            {/* Camera Button */}
            <button className="camera-button">📷</button>
        </div>
    );
}
