import React from "react";
import "../css/footer.css";
import phoneicon from "../assets/phoneicon.png";
import mailicon from "../assets/mailicon.png";
import fbicon from "../assets/fbicon.png";
import xicon from "../assets/xicon.png";
import insicon from "../assets/insicon.png";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="footer-section container">
      <div className="footer-section-container">
        <div className="footer-section-header-container">
          <div className="footer-section-header">
            <p>
              Whether you're looking to switch to solar energy or upgrade your
              cable services, our sales and marketing company is here to help.
              <br /> Contact us today to start saving on your energy bills and
              enjoy reliable connectivity from the leading solar and cable
              companies in the <br /> DC, Maryland, and Virginia area. Snag the
              best deals with us and embrace a brighter and more connected
              future.
            </p>
          </div>
        </div>
        <div className="footer-section-body">
          <div className="footer-section-body-container">
            <div className="footer-section-body-container-1">
              <div className="footer-section-body-container-1-details">
                <img src={logo} class="footer-logo"></img>
                <p>
                  Contact us today to explore our services and take advantage of
                  the great deals available from the leading solar and cable
                  companies in the DC, Maryland, and Virginia area. Let us be
                  your trusted partner in finding the best solutions for your
                  energy and connectivity needs.
                </p>
              </div>
            </div>
            <div className="footer-section-body-container-2">
              <div className="footer-section-body-container-2-details">
                <p>Quick Links</p>
                <ul>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Solar Initiatives</li>
                  <li>Our Services</li>
                  <li>Community</li>
                  <li>Aesthetics</li>
                </ul>
              </div>
            </div>
            <div className="footer-section-body-container-3">
              <div className="footer-section-body-container-3-details">
                <p>Services</p>
                <ul>
                  <li>Solar Solution</li>
                  <li>Cable Services</li>
                  <li>Deals and Promotions</li>
                  <li>Consultation and Support </li>
                </ul>
              </div>
            </div>
            <div className="footer-section-body-container-4">
              <div className="footer-section-body-container-4-details">
                <p>Contact</p>
                <ul>
                  <li>
                    <img src={phoneicon} alt="phone-icon" /> <a>0123456789</a>
                  </li>
                  <li>
                    <img src={mailicon} alt="mail-icon" />{" "}
                    <a>companyname@gmail.com</a>
                  </li>
                  <li>
                    <img class="footer-icon-group" src={fbicon} alt="fb-icon" />
                    <img class="footer-icon-group" src={xicon} alt="x-icon" />
                    <img
                      class="footer-icon-group"
                      src={insicon}
                      alt="instag-icon"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-section-footer">
          <p>
            {" "}
            &copy; 2023 Company Name - developed by Roots Digital Marketing
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
