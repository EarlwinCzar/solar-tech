import React from "react";
import "../css/section1.css";
import hero from "../assets/hero.png";

function Section1() {
  return (
    <div className="section1 container">
      <div className="section1-container">
        <div className="hero-image-gradient"></div>
        <img src={hero} className="section1-hero-picture" alt="hero-image" />
        <p class="hero-description">
          Solar{" "}
          <span className="solutions-highlight">
            <br />
            Solutions
          </span>{" "}
          for <br /> a Sustainable <br /> Tomorrow
          <span className="solutions-highlight">.</span>
        </p>
      </div>
    </div>
  );
}

export default Section1;
