import React from 'react';

export default function Hero() {
    return (
        <div className="hero-container">
            <br></br>
            <div className="content-container">
                

                <div className="search-container">
                    <div className="search-box">
                        <input type="text" placeholder="Search..." />
                        <button>Search</button>
                    </div>
                </div>

                <div className="tips-box">
                    <h2>Eco-Friendly Tips</h2>
                    <ul>
                        <li>Reduce plastic use by carrying reusable bags and bottles.</li>
                        <li>Switch to energy-efficient LED bulbs to save electricity.</li>
                        <li>Recycle responsibly and separate waste appropriately.</li>
                        <li>Use eco-friendly cleaning products to reduce harmful chemicals.</li>
                        <li>Plant more trees and support local greenery initiatives.</li>
                    </ul>
                </div>
                

            </div>
        </div>
    );
}
