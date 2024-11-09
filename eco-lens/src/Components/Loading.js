import React from 'react';
import loadingImage from '../Assets/eco.gif';
import '../Loading.css';


export default function Loading(){
    return(
        <>
            <div className="loading-container">
                <div className="loading_image">
                    <img src = {loadingImage} alt="loading animation" />
                </div>
            </div>
        </>
    );
}