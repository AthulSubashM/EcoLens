import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';

import React from 'react';


export default function Navbar(){
    return(
        <>
        
    
    <div class="header-container">
    <div class="logo-box"> 
    <h1>Eco-Lens</h1>
    </div>
    
</div>
<div class="button-container">
    <a href="capture-link.html" class="capture-button">Capture</a>
</div>
<p>OR</p>

            {/* <div className="navbar-container">
                <div className="navbar-menu">
                    
                    <ul className="navbar-menu-items">
                        <li><Link href="/">Home</Link></li>
                        
                    </ul>

                </div>
                </div> */}
        </>
    );
}