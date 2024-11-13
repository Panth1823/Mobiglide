import React, { useEffect } from "react";
import Footer from "./Footer";
import One from "../assets/1.webp";
import Two from "../assets/2.webp";
import Three from "../assets/3.webp";
import Four from "../assets/4.webp";
import Five from "../assets/5.webp";
import Six from "../assets/6.webp";
import Seven from "../assets/7.webp";
import Eight from "../assets/8.webp";
import Team from "../assets/Team.png";
import Services from "../assets/Services.webp";
import Cards from "../assets/Cards.png";
import CardsResponsive from "../assets/CardsResponsive.png";
import Banner from "../assets/Section.jpg";
import TeamResponsive from "../assets/TeamResponsive.png";
import Careers from "../assets/Careers.webp";
import Contact from "../assets/ContactUs.webp";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <div className="banner-wrapper">
        <div className="banner-container">
          <div className="solutions-heading">
            <p>Efficient Solutions, Excellence in Action</p>
          </div>
          <div className="banner-heading">
            <div className="banner-heading-content">
              <h1>
                Innovative Solutions, Quality Services, Passionate People.
              </h1>
              <p>
                At Mobiglide, we believe in building solutions that deliver
                value, streamline processes, and drive tangible returns on
                investment. Quality and excellence are at the heart of
                everything we do.
              </p>
            </div>
            <div className="contact-serivice-btn">
              <Link to="/contact" className="contact-us-btn light">
                Contact Us
              </Link>
              <div
                onClick={() => scrollToSection("services")}
                className="contact-us-btn brown"
                style={{ cursor: "pointer" }}
              >
                Our Service
              </div>
            </div>
          </div>
        </div>
        <img
          src={Banner}
          alt="Mobiglide Banner"
          loading="lazy"
        />
      </div>
      <div className="team-container">
        <img
          src={Team}
          alt="Mobiglide Team Members"
          className="Team-image"
          loading="lazy"
        />
        <img
          src={TeamResponsive}
          alt="Mobiglide Team Members Responsive"
          className="Team-image-hide"
          loading="lazy"
        />
      </div>
      <div className="resource-engagement">
        <div className="resource-card">
          <div className="resouce-svg">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_7_5748"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="3"
                y="3"
                width="26"
                height="26"
              >
                <path
                  d="M4 16C4 9.37333 9.37333 4 16 4C22.6267 4 28 9.37333 28 16C28 22.6267 22.6267 28 16 28C9.37333 28 4 22.6267 4 16Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6667 16L14.6667 20L21.3334 13.3333"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </mask>
              <g mask="url(#mask0_7_5748)">
                <path d="M32 0H0V32H32V0Z" fill="#621A0C" />
              </g>
            </svg>
          </div>
          <div className="resource-content">
            <h1>Streamlined Talent Acquisition</h1>
            <p>
              A structured process that ensures smooth candidate submission,
              interview attendance, selection, and deployment.
            </p>
          </div>
        </div>
        <div className="resource-card">
          <div className="resouce-svg">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_7_5748"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="3"
                y="3"
                width="26"
                height="26"
              >
                <path
                  d="M4 16C4 9.37333 9.37333 4 16 4C22.6267 4 28 9.37333 28 16C28 22.6267 22.6267 28 16 28C9.37333 28 4 22.6267 4 16Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6667 16L14.6667 20L21.3334 13.3333"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </mask>
              <g mask="url(#mask0_7_5748)">
                <path d="M32 0H0V32H32V0Z" fill="#621A0C" />
              </g>
            </svg>
          </div>
          <div className="resource-content">
            <h1>Guaranteed SLAs</h1>
            <p>
              Strict SLAs that help us deliver results within
              industry-leading lead times.
            </p>
          </div>
        </div>
      </div>
      <div className="industries">
        <div className="industries-header">
          <div className="dot-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="5"
              viewBox="0 0 4 5"
              fill="none"
            >
              <circle cx="2" cy="2.44922" r="2" fill="#7B7B7B" />
            </svg>
            <p>Industries We Serve</p>
          </div>
          <h1>Delivering Value Across Multiple Sectors</h1>
        </div>
        <div className="industries-container">
          <div className="top">
            <div className="industry-card">
              <img src={One} alt="Banking and Financial Services" loading="lazy" />
              <p>BFSI (Banking, Financial, Services & Insurance)</p>
            </div>
            <div className="industry-card">
              <img src={Two} alt="Healthcare Services" loading="lazy" />
              <p>Healthcare</p>
            </div>
            <div className="industry-card">
              <img src={Three} alt="Automobile Industry" loading="lazy" />
              <p>Automobile</p>
            </div>
          </div>
          <div className="mid">
            <div className="industry-card">
              <img src={Four} alt="Manufacturing Industry" loading="lazy" />
              <p>Manufacturing</p>
            </div>
            <div className="industry-card">
              <img src={Five} alt="Retail Industry" loading="lazy" />
              <p>Retail</p>
            </div>
            <div className="industry-card">
              <img src={Six} alt="Education Sector" loading="lazy" />
              <p>Education</p>
            </div>
          </div>
          <div className="btm">
            <div className="industry-card">
              <img src={Seven} alt="E-Governance Services" loading="lazy" />
              <p>E-Governance</p>
            </div>
            <div className="industry-card">
              <img src={Eight} alt="Telecom Industry" loading="lazy" />
              <p>Telecom</p>
            </div>
            <div className="industry-card hide">
              <img src={Eight} alt="Telecom Industry" loading="lazy" />
              <p>Telecom</p>
            </div>
          </div>
        </div>
      </div>
      <div className="career">
        <div className="career-contactUs">
          <img src={Contact} alt="Contact Us" loading="lazy" />
          <div className="career-contact-cover">
            <div className="career-contact-content">
              <h1>Reach Out to Us & We Will Help you!</h1>
              <p>Get in Touch – We're Here to Help!</p>
            </div>
            <Link to="/contact" className="contact-us-btn sec">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="career-contactUs">
          <img src={Careers} alt="Join Us" loading="lazy" />
          <div className="career-contact-cover">
            <div className="career-contact-content">
              <h1>Apply Now & Grow With Us!</h1>
              <p>Send your resume here - hrteam@mobiglide.in</p>
            </div>
            <Link to="/contact" className="contact-us-btn sec">
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
