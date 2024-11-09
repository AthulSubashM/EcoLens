import { Link } from 'react-router-dom';

import React from 'react';


export default function Navbar(){
    return(
        <>
            <nav class="navbar">
        <div class="navbar-container">
            <h1 class="logo">Eco Lens</h1>
            <ul class="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#eco-tips">Eco Tips</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
        </>
    );
}