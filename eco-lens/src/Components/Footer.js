import React from 'react';
import { ReactComponent as Linkedin } from '../Assets/linkedin.svg'; // Import SVG as React component

export default function Footer() {
    return (
        <div className='footer-container'>
            <h1>Eco Lens</h1>
            <div className='footer-links'>
                <a href='https://www.linkedin.com/in/athulmsubash/' target='_blank' rel='noreferrer'>
                    <Linkedin className="linkedin" /> Athul Subash
                </a>
                <a href='https://www.linkedin.com/in/ibrahim-yousufuddin-ab9aa4226/' target='_blank' rel='noreferrer'>
                <Linkedin className="linkedin" /> Ibrahim Yousufuddin
                </a>
                <a href='https://www.linkedin.com/in/prabal-kochhar/' target='_blank' rel='noreferrer'>
                <Linkedin className="linkedin" /> Prabal Kochhar
                </a>
            </div>
        </div>
    );
}
