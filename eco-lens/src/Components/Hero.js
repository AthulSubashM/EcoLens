import React, { useState } from 'react';

export default function Hero() {
    const [imageData, setImageData] = useState(null); // State to store the image data

    // Handle the image selection or capture from the camera
    const handleImageCapture = (event) => {
        const file = event.target.files[0]; // Get the first file selected (or captured)

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setImageData(reader.result); // Store the image data (Base64 string)
            };

            reader.readAsDataURL(file); // Read the file as a data URL (Base64)
        }
    };

    return (
        



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
    );
}
