import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Collections Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img className="hand_icon" src={hand_icon} alt="" />
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img className="arrow_icon" src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right"></div>
      <img className="hero_image" src={hero_image} alt="" />
    </div>
  );
};

export default Hero;
