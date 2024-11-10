import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';

import React from 'react';


export default function Navbar(){
    return(
        <>
        
    
    <div class="navbar-container">
    
    <h1><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}> Eco Lens</Link></h1>
    </div>
    


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