import React from 'react';
import loadingBg from '../Assets/bg_test.jpg';



export default function Loading(){
    return(
        <>
            <div className="loading-background-container">
                <div className="loading_background">
                    <img src = {loadingBg} alt="Website background" />
                </div>
            </div>
        </>
    );
}