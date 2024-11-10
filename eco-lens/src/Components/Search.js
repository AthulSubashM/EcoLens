import React, { useState } from 'react';
import SearchIcon from '../Assets/searchIcon.png';

export default function Hero() {
    return (
        



                <div className="search-container">
                    <div className="search-box">
                        <input type="text" placeholder="Search..." />
                        <button>
                        <img src={SearchIcon} alt="Search" />
                        </button>
                    </div>
                </div>

    );
}
