import React from "react";
import "../css/section4.css";
import group from "../assets/group.png";

function Section4() {
  return (
    <div className="section4 container">
      <div className="section4-container">
        <div className="section4-left">
          <div className="section4-left-container">
            <h1>Who We Are</h1>
            <p>
              Welcome to our sales and marketing company, where we specialize in
              helping customers snag great deals from the leading solar and
              cable companies in the DC, Maryland, and Virginia area.We
              understand that finding the right solar and cable solutions for
              your needs can be a daunting task, which is why we're here to make
              the process easier and more affordable for you.
            </p>
            <div className="section4-buttons">
              <button className="read-more-btn">Read More</button>
              <button className="contact-us-btn">Contact us today</button>
            </div>
          </div>
        </div>
        <div className="section4-right">
          <div className="section4-right-container">
            <img src={group} alt="marketing-team-members" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
