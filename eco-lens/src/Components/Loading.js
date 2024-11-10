import React, { useEffect, useState } from 'react';
import loadingGif from '../Assets/eco.gif';  // Animated GIF
import loadingPng from '../Assets/eco_static.png';  // Static PNG
import '../Loading.css';

export default function Loading() {
    // const [isGif, setIsGif] = useState(true);

    // useEffect(() => {
    //     // Set a timer to switch to the PNG after 1 second
    //     const timer = setTimeout(() => setIsGif(false), 1300);

    //     // Clear the timer when the component unmounts
    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <>
            <img
                className='loading-animation'
                src={loadingGif} alt=""
                // src={isGif ? loadingGif : loadingPng}
                // alt=""
            />
        </>
    );
}
