import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/mobiglide-logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="sticky-navbar">
        <div className="nav-main">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="mobiglide logo" />
            </Link>
          </div>
          <div className="tabs">
            <Link to="/services" className="our-services">
              Our Services
            </Link>
            <Link to="/about" className="about-us">
              About Us
            </Link>
          </div>
          <Link to="/contact" className="contact-us-btn">
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
