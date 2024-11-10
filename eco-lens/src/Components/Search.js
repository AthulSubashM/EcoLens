import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import SearchIcon from '../Assets/searchIcon.png';
import { useImageData } from '../Contexts/ImageDataContext';

export default function Hero() {
    const [searchInput, setSearchInput] = useState(''); // State to store search input
    const { setFirstResult } = useImageData(); // Access context to set firstResult
    const navigate = useNavigate(); // For navigating to the results page

    const handleSearchClick = () => {
        if (searchInput.trim() === '') {
            alert("Please enter a search term.");
            return;
        }

        setFirstResult(searchInput); // Save search input to firstResult in the context
        navigate('/result'); // Navigate to the results page
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') { // Check if the Enter key was pressed
            handleSearchClick(); // Trigger the search
        }
    };

    return (
        <div className="search-container">
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)} // Update search input state
                    onKeyDown={handleKeyDown} // Listen for the Enter key press
                />
                <button onClick={handleSearchClick}>
                    <img src={SearchIcon} alt="Search" />
                </button>
            </div>
        </div>
    );
}
