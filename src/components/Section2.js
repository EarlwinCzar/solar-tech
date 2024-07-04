import React from "react";
import "../css/section2.css";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

function Section2() {
  return (
    <div className="section2 container">
      <div className="section2-container">
        <div className="section2-header">
          <h1>Our Expertise and Experience</h1>
        </div>
        <div className="section2-cards">
          <div className="section2-cards-container">
            <div className="section2-card">
              <img src={card1} alt="lady-with-laptop" />
              <div className="section2-card-desc">
                <p class="section2-card-desc-header">
                  Solar <br /> Solutions
                </p>
                <p class="section2-card-desc-details">
                  Harness the power of the sun and embrace clean, renewable
                  energy with our solar solutions.
                </p>
              </div>
            </div>
            <div className="section2-card">
              <img src={card2} alt="lady-presenting" />
              <div className="section2-card-desc">
                <p class="section2-card-desc-header">
                  Cable <br /> Services
                </p>
                <p class="section2-card-desc-details">
                  Stay connected with high-
                  <br />
                  quality cable services that deliver reliable and fast
                  internet, television.
                </p>
              </div>
            </div>
            <div className="section2-card">
              <img src={card3} alt="network-engineer-cabling" />
              <div className="section2-card-desc">
                <p class="section2-card-desc-header">
                  Internet <br /> Solutions
                </p>
                <p class="section2-card-desc-details">
                  From fast broadband to fiber-
                  <br />
                  optic connections, we'll help you find the internet service{" "}
                  <br />
                  provider.
                </p>
              </div>
            </div>
            <div className="section2-card">
              <img src={card4} alt="telephone" />
              <div className="section2-card-desc">
                <p class="section2-card-desc-header">
                  Phone <br /> Services
                </p>
                <p class="section2-card-desc-details">
                  Discover cost-effective and <br />
                  feature-rich phone services
                  <br /> that you connected to
                  <br /> your loved ones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
