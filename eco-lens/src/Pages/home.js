import Nav from '../Components/Navbar'
import Hero from "../Components/Hero";
import ImageToText from "../LLM/ImageToText"
import React from 'react';

export default function Home() {
  return (
        <>
          <Nav/>
          <Hero/>
          <ImageToText/>
        </>
      );
}
