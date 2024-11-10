import Nav from "../Components/Navbar";
import Hero from "../Components/Hero";
import ImageToText from "../LLM/ImageToText";
import LoadingImage from "../Components/Loading";
import React from 'react';
import Background from "../Components/Background";


export default function Home() {
  return (
        <>
        
        <LoadingImage/>
          <Background/>
          <Nav/>
          <ImageToText/>
          
          <Hero/>
          
          
        </>
      );
}
