import Nav from "../Components/Navbar";
import Hero from "../Components/Hero";
import ImageToText from "../LLM/ImageToText";
import LoadingImage from "../Components/Loading";
import React from 'react';
import background from '../Assets/bg.jpg';


export default function Home() {
  return (
        <>
        
        <LoadingImage/>
          <Nav/>
          <ImageToText/>
          
          <Hero/>
          
          
        </>
      );
}
