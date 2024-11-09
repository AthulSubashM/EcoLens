/*Navbar.js*/
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbar-container">
            <ul className="navbar-menu-items">
                <li><Link to="/">🏠<span>Home</span></Link></li>
                <li><Link to="/">📖<span>About</span></Link></li>
                <li><Link to="/">📞<span>Contact</span></Link></li>
            </ul>
        </div>
    );
}
