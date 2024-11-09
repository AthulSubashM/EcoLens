import Images from '../Images/Designer.jpeg';
import Nav from '../Components/Navbar'
import Hero from "../Components/Hero";
import React from 'react';


export default function Home() {
  return (
        <>
          <Nav/>
          <Hero/>
          <img src = {Images}/>
        </>
      );
}
