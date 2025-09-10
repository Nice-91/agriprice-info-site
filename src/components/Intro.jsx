import React from "react";
import FarmerImg from "/src/assets/images/farmer.jpeg";

const Intro = () => {
  return (
    <section className="intro-hero" id="landingpage" style={{ backgroundImage: `url(${FarmerImg})` }}>
      <div className="intro-hero-text">
        <h1>Track Daily Crop Prices in Your Market</h1>
        <p>Get informed about the current crop prices at different markets across Rwanda.</p>
        <a href="#features">Get Started</a>
      </div>
    </section>
  );
};

export default Intro;
