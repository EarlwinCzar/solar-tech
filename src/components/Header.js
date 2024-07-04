import React from "react";
import "../css/header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="nav-container ">
      <div className="nav-containers container">
        <div className="nav-logo">
          <img src={logo} />
        </div>
        <div className="nav-menu">
          <ul>
            <li>home</li>
            <li>about us</li>
            <li>solar initiatives</li>
            <li>our services</li>
            <li>community</li>
            <li>aesthetics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
