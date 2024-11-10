import Nav from "../Components/Navbar";
import Search from "../Components/Search";
import ToolTips from "../Components/ToolTips";
import ImageToText from "../LLM/ImageToText";
import LoadingImage from "../Components/Loading";
import Footer from "../Components/Footer";
import React from 'react';

export default function Home() {
  return (
        <>
        
        <div class="home-container">
          <Nav/>
          <LoadingImage/>
          <Search/>
          <ImageToText/>
        </div>
          <ToolTips/>
          <Footer/>
          
        </>
      );
}
