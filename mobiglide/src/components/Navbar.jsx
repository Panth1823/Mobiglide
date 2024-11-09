import React from "react";
import logo from "../assets/mobiglide-logo.svg";
const Navbar = () => {
  return (
    <>
      <nav className="sticky-navbar">
        <div className="nav-main">
          <div className="logo">
            <img src={logo} alt="mobiglide logo" />
          </div>
          <div className="tabs">
            <div className="our-services">Our Services</div>
            <div className="about-us">About Us</div>
          </div>
          <div className="contact-us-btn">Contact Us</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
