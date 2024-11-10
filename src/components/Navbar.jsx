import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/mobiglide-logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If we're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
            <div
              onClick={() => scrollToSection('services')}
              className="our-services"
              style={{ cursor: 'pointer' }}
            >
              Our Services
            </div>
            <div
              onClick={() => scrollToSection('about')}
              className="about-us"
              style={{ cursor: 'pointer' }}
            >
              About Us
            </div>
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
