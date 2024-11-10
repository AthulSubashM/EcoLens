import React from 'react';
import loadingImage from '../Assets/eco.gif';
import '../Loading.css';


export default function Loading(){
    return(
        <>
            <img className='loading-animation' src = {loadingImage} alt="loading animation" />
        </>
    );
}