import React from 'react';
import Navbar from './Navbar';
import "@/app/styles/hero.css"

const Hero = () => {
  return (
    <div id="hero" aria-label="Hero section with background image">
      {/* Background Overlay */}
      <div className="hero-overlay"></div>

      <Navbar />

      <div className="hero-container">
        <div className="hidden-lg"></div>
        <div>
          <div className="hero-text">
            <p data-aos="zoom-in-left" >I&apos;m</p>
            <br />
             <p data-aos="zoom-in-left" aria-label="Hassan">Hassan</p>
             <br />
             <p data-aos="zoom-in-left" aria-label="Jaffer">Jaffer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

