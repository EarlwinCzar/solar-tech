import React from "react";
import "../css/section5.css";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import services from "../assets/services.png";

function Section5() {
  return (
    <div className="section5 container">
      <div className="section5-container">
        <div className="section5-sections">
          <div className="section5-section1">
            <div className="section5-section1-card-container">
              <div className="section5-section1-card">
                <img src={icon1} alt="solar-panels-icon" />
                <h1>Solar Solutions</h1>
                <p>
                  Harness the power of the sun and embrace clean, renewable
                  energy with our solar solutions.
                </p>
              </div>
              <div className="section5-section1-card">
                <img src={icon2} alt="cable-icon" />
                <h1>Cable Services</h1>
                <p>
                  Stay connected with high-quality cable services that deliver
                  reliable and fast internet, television
                </p>
              </div>
            </div>
          </div>

          <div className="section5-section2">
            <div className="section5-section2-card-container">
              <div className="section5-section2-card">
                <div className="section5-section2-card-header">
                  <p>Our Services</p>
                  <h1>What We Do</h1>
                </div>
                <img
                  src={services}
                  alt="service-picture"
                  className="service-image"
                />
              </div>
            </div>
          </div>

          <div className="section5-section1">
            <div className="section5-section1-card-container">
              <div className="section5-section1-card">
                <img src={icon3} alt="deals-icon" />
                <h1>Deals and Promotions</h1>
                <p>
                  We pride ourselves on securing great deals and promotions for
                  our customers.
                </p>
              </div>
              <div className="section5-section1-card">
                <img src={icon4} alt="support-icon" />
                <h1>Consultation and Support</h1>
                <p>
                  We understand that navigating the solar and cable landscape
                  can be overwhelming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
