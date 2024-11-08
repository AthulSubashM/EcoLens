import { Link } from 'react-router-dom';
import '../Styles/globals.css';
import React from 'react';


export default function Navbar(){
    return(
        <>
            <div className="navbar-container">
                <div className="navbar-menu">
                    <div className="navbar-contact"><Link href="/">Contact</Link></div>
                    <ul className="navbar-menu-items">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/"></Link></li>
                        <li><Link href="/"></Link></li>
                        <li><Link href="/"></Link></li>
                        <li><Link href="/"></Link></li>
                        <li><Link href="/">About</Link></li>
                    </ul>

                </div>
                <div className="navbar-bottom"></div>
            </div>
        </>
    );
}