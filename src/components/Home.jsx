// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import Footer from "./Footer";
// import Banner from "../assets/Section.jpg";
// import Team from "../assets/Team.png";
// 
// import Services from "../assets/Services.webp";

// const Home = () => {
//   const location = useLocation();

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   useEffect(() => {
//     if (location.state?.scrollTo) {
//       const element = document.getElementById(location.state.scrollTo);
//       if (element) {
//         setTimeout(() => {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }, 100);
//       }
//     }
//   }, [location]);

//   return (
//     <>
//       <div className="banner-wrapper">
//         <div className="banner-container">
//           <div className="solutions-heading">
//             <p>Efficient Solutions, Excellence in Action</p>
//           </div>
//           <div className="banner-heading">
//             <div className="banner-heading-content">
//               <h1>Innovative Solutions, Quality Services, Passionate People.</h1>
//               <p>
//                 At Mobiglide, we believe in building solutions that deliver
//                 value, streamline processes, and drive tangible returns on
//                 investment. Quality and excellence are at the heart of
//                 everything we do.
//               </p>
//             </div>
//             <div className="contact-serivice-btn">
//               <Link to="/contact" className="contact-us-btn light">
//                 Contact Us
//               </Link>
//               <div
//                 onClick={() => scrollToSection('services')}
//                 className="contact-us-btn brown"
//                 style={{ cursor: 'pointer' }}
//               >
//                 Our Service
//               </div>
//             </div>
//           </div>
//         </div>
//         <img src={Banner} alt="Mobiglide Banner showcasing innovative solutions" width="1200" height="533" loading="lazy" />
//       </div>
//       <div className="team-container">
//
//       </div>
//       <div className="services-container">
//         <img src={Services} alt="Overview of IT Services" width="1200" height="800" loading="lazy" />
//       </div>
//       <Footer/>
//     </>
//   );
// };

// export default Home;

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
import Services from "../assets/Services.png";
import Cards from "../assets/Cards.png";
import CardsResponsive from "../assets/CardsResponsive.png";
import Banner from "../assets/Section.jpg";
import TeamResponsive from "../assets/TeamResponsive.png";
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
    // Check if we have a section to scroll to
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Add a small delay to ensure the page is loaded
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
        <img src={Banner} alt="Mobiglide Banner" />
      </div>
      <div className="aboutUs" id="about">
        <div className="industries-header choose">
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
            <p>About Us</p>
          </div>
          <h1>
            Empowering Businesses with Innovative Solutions for Real Results
          </h1>
          <p>
            Founded with a mission to unite technology enthusiasts, Mobilide
            specializes in delivering innovative, high-quality IT services and
            products crafted to meet the evolving needs of our clients. We aim
            to solve real-world problems by creating intuitive and efficient
            solutions that benefit businesses across industries.
          </p>
        </div>
        <div className="values-container">
          <div className="values-title-cards">
            <div className="values-title">OUR CORE VALUES:</div>

            <div className="values-cards-container">
              <img src={Cards} alt="Core Values Cards" className="cards"/>
              <img src={CardsResponsive} alt="Core Values Cards"  className="cards-responsive"/>

            </div>
          </div>
          <div className="values-content">
            <div className="industries-header top values">
              <p>OUR VISION</p>
              <h1>
                To lead the way in delivering forward-thinking technology
                solutions that make a real impact.
              </h1>
            </div>
            <div className="industries-header top values">
              <p>OUR MISSION</p>
              <h1>
                To enhance customer satisfaction by building applications that
                maximize return on investment and simplify future growth.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="our-services-main" id="services">
        <div className="industries-header choose">
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
            <p>Our Services</p>
          </div>
          <h1>Professional IT Services in India</h1>
          <p>
            Mobilide provides IT staffing solutions that cater to both short and
            long term needs. Our professionals are embedded across client
            locations in India, delivering expertise across various sectors. We
            understand the critical importance of hiring the right talent, and
            our services are designed to provide flexible and effective
            solutions.
          </p>
        </div>
        <div className="services-container">
          <img src={Services} alt="IT Services Overview" />
          <div className="top resource">
            <div className="industries-header top">
              <p>Our Efficient Engagement Models</p>
              <h1>
                Through our deep expertise, we are committed to meeting the
                staffing needs of product companies, service organizations, and
                captive centers across diverse industries.
              </h1>
            </div>
            <div className="card-main">
              <div className="resource-card">
                <div className="resouce-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_68_9)">
                      <path
                        d="M7.61777 28.4157C9.67599 29.9133 12.0984 30.831 14.6323 31.0732C17.1661 31.3154 19.7185 30.8732 22.0232 29.7926C24.3278 28.712 26.3002 27.0327 27.7346 24.9299C29.169 22.8271 30.0127 20.3779 30.1778 17.8379H16.3822L7.61777 28.4157Z"
                        fill="#621A0C"
                      />
                      <path
                        d="M30.1778 16.0603C30.0384 13.7442 29.3345 11.4974 28.1274 9.51588C26.9204 7.53431 25.2469 5.87815 23.2528 4.69185C21.2588 3.50555 19.0047 2.82512 16.6874 2.70992C14.37 2.59473 12.0596 3.04825 9.95771 4.03095C7.85583 5.01364 6.0263 6.49566 4.62868 8.34775C3.23106 10.1998 2.3078 12.3657 1.93941 14.6566C1.57103 16.9474 1.76871 19.2935 2.51522 21.4904C3.26173 23.6873 4.5344 25.6682 6.22222 27.2603L15.5467 16.0603H30.1778Z"
                        fill="#621A0C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_68_9">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0 0.949219)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="resource-content">
                  <h1>Resources on Contract</h1>
                  <p>
                    Short-term engagements that bring in the expertise you need,
                    without long-term commitment.
                  </p>
                </div>
              </div>
              <div className="resource-card">
                <div className="resouce-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                  >
                    <path
                      d="M8.66001 3.61572C7.18001 3.61572 5.99335 4.80239 5.99335 6.28239V27.6157C5.99335 28.323 6.2743 29.0012 6.7744 29.5013C7.27449 30.0014 7.95277 30.2824 8.66001 30.2824H13.9933V27.7357L16.78 24.9491H8.66001V22.2824H19.4467L22.1133 19.6157H8.66001V16.9491H24.78L27.3267 14.4024V11.6157L19.3267 3.61572H8.66001ZM17.9933 5.61572L25.3267 12.9491H17.9933V5.61572ZM27.5267 18.2824C27.428 18.2802 27.3299 18.298 27.2383 18.3347C27.1466 18.3713 27.0633 18.4261 26.9933 18.4957L25.6333 19.8557L28.42 22.6291L29.78 21.2824C30.06 20.9891 30.06 20.5091 29.78 20.2291L28.0467 18.4957C27.9787 18.4271 27.8977 18.3729 27.8084 18.3362C27.719 18.2996 27.6232 18.2813 27.5267 18.2824ZM24.8467 20.6424L16.66 28.8424V31.6157H19.4333L27.6333 23.4157L24.8467 20.6424Z"
                      fill="#621A0C"
                    />
                  </svg>
                </div>
                <div className="resource-content">
                  <h1>Contract to Hire</h1>
                  <p>
                    A flexible option allowing you to evaluate a candidate’s fit
                    before making a permanent commitment
                  </p>
                </div>
              </div>
              <div className="resource-card">
                <div className="resouce-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M8.98667 4.61605C8.98667 5.5001 8.63548 6.34795 8.01036 6.97307C7.38524 7.59819 6.5374 7.94938 5.65334 7.94938C4.76929 7.94938 3.92144 7.59819 3.29632 6.97307C2.6712 6.34795 2.32001 5.5001 2.32001 4.61605C2.32001 3.73199 2.6712 2.88415 3.29632 2.25903C3.92144 1.6339 4.76929 1.28271 5.65334 1.28271C6.5374 1.28271 7.38524 1.6339 8.01036 2.25903C8.63548 2.88415 8.98667 3.73199 8.98667 4.61605Z"
                      fill="#621A0C"
                    />
                    <path
                      d="M8.98667 4.61605C8.98667 5.5001 8.63548 6.34795 8.01036 6.97307C7.38524 7.59819 6.5374 7.94938 5.65334 7.94938C4.76929 7.94938 3.92144 7.59819 3.29632 6.97307C2.6712 6.34795 2.32001 5.5001 2.32001 4.61605C2.32001 3.73199 2.6712 2.88415 3.29632 2.25903C3.92144 1.6339 4.76929 1.28271 5.65334 1.28271C6.5374 1.28271 7.38524 1.6339 8.01036 2.25903C8.63548 2.88415 8.98667 3.73199 8.98667 4.61605ZM8.98667 4.61605H16.32M16.32 4.61605L13.6533 1.94938M16.32 4.61605L13.6533 7.28271"
                      stroke="#621A0C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.6533 23.2826C19.6533 24.1666 20.0045 25.0145 20.6296 25.6396C21.2548 26.2647 22.1026 26.6159 22.9867 26.6159C23.8707 26.6159 24.7186 26.2647 25.3437 25.6396C25.9688 25.0145 26.32 24.1666 26.32 23.2826C26.32 22.3985 25.9688 21.5507 25.3437 20.9255C24.7186 20.3004 23.8707 19.9492 22.9867 19.9492C22.1026 19.9492 21.2548 20.3004 20.6296 20.9255C20.0045 21.5507 19.6533 22.3985 19.6533 23.2826Z"
                      fill="#621A0C"
                    />
                    <path
                      d="M19.6533 23.2826C19.6533 24.1666 20.0045 25.0145 20.6297 25.6396C21.2548 26.2647 22.1026 26.6159 22.9867 26.6159C23.8707 26.6159 24.7186 26.2647 25.3437 25.6396C25.9688 25.0145 26.32 24.1666 26.32 23.2826C26.32 22.3985 25.9688 21.5507 25.3437 20.9255C24.7186 20.3004 23.8707 19.9492 22.9867 19.9492C22.1026 19.9492 21.2548 20.3004 20.6297 20.9255C20.0045 21.5507 19.6533 22.3985 19.6533 23.2826ZM19.6533 23.2826H12.32M12.32 23.2826L14.9867 20.6159M12.32 23.2826L14.9867 25.9492"
                      stroke="#621A0C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.32 5.28255C20.32 5.72029 20.4062 6.15374 20.5737 6.55816C20.7413 6.96258 20.9868 7.33005 21.2963 7.63957C21.6058 7.9491 21.9733 8.19463 22.3777 8.36215C22.7821 8.52967 23.2156 8.61588 23.6533 8.61588C24.0911 8.61588 24.5245 8.52967 24.929 8.36215C25.3334 8.19463 25.7008 7.9491 26.0104 7.63957C26.3199 7.33005 26.5654 6.96258 26.7329 6.55816C26.9005 6.15374 26.9867 5.72029 26.9867 5.28255C26.9867 4.3985 26.6355 3.55065 26.0104 2.92553C25.3852 2.30041 24.5374 1.94922 23.6533 1.94922C22.7693 1.94922 21.9214 2.30041 21.2963 2.92553C20.6712 3.55065 20.32 4.3985 20.32 5.28255Z"
                      fill="#621A0C"
                    />
                    <path
                      d="M23.6533 8.61589C22.7693 8.61589 21.9214 8.2647 21.2963 7.63957C20.6712 7.01445 20.32 6.16661 20.32 5.28255C20.32 4.3985 20.6712 3.55065 21.2963 2.92553C21.9214 2.30041 22.7693 1.94922 23.6533 1.94922C24.5374 1.94922 25.3852 2.30041 26.0104 2.92553C26.6355 3.55065 26.9867 4.3985 26.9867 5.28255C26.9867 6.16661 26.6355 7.01445 26.0104 7.63957C25.3852 8.2647 24.5374 8.61589 23.6533 8.61589ZM23.6533 8.61589V15.9492M23.6533 15.9492L26.32 13.2826M23.6533 15.9492L20.9867 13.2826"
                      stroke="#621A0C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.65332 22.616C1.65332 21.732 2.00451 20.8841 2.62963 20.259C3.25475 19.6339 4.1026 19.2827 4.98665 19.2827C5.87071 19.2827 6.71855 19.6339 7.34368 20.259C7.9688 20.8841 8.31999 21.732 8.31999 22.616C8.31999 23.5001 7.9688 24.3479 7.34368 24.9731C6.71855 25.5982 5.87071 25.9494 4.98665 25.9494C4.1026 25.9494 3.25475 25.5982 2.62963 24.9731C2.00451 24.3479 1.65332 23.5001 1.65332 22.616Z"
                      fill="#621A0C"
                    />
                    <path
                      d="M4.98665 19.2826C4.1026 19.2826 3.25475 19.6337 2.62963 20.2589C2.00451 20.884 1.65332 21.7318 1.65332 22.6159C1.65332 23.4999 2.00451 24.3478 2.62963 24.9729C3.25475 25.598 4.1026 25.9492 4.98665 25.9492C5.87071 25.9492 6.71855 25.598 7.34368 24.9729C7.9688 24.3478 8.31999 23.4999 8.31999 22.6159C8.31999 21.7318 7.9688 20.884 7.34368 20.2589C6.71855 19.6337 5.87071 19.2826 4.98665 19.2826ZM4.98665 19.2826V11.9492M4.98665 11.9492L7.65332 14.6159M4.98665 11.9492L2.31999 14.6159"
                      stroke="#621A0C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="resource-content">
                  <h1>Permanent Placement</h1>
                  <p>
                    Finding and placing the right professionals who can grow
                    with your team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-choose-us">
        <div className="industries">
          <div className="industries-header choose">
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
              <p>Why Choose Us</p>
            </div>
            <h1>Where Innovation Meets Impact</h1>
            <p>
              Mobilide is powered by a team of 40+ IT professionals, each
              rigorously selected and continuously trained to ensure they meet
              the highest standards. Our commitment to quality and expertise
              means that we help you reduce costs, streamline processes, and
              scale efficiently, creating a seamless experience for your team.
            </p>
          </div>
          <div className="industries-container">
            <div className="top chooseUs">
              <div className="industry-card chooseUs">
                <img src={One} alt="Banking and Financial Services" />
                <div className="chooseUs-content">
                  <p>Skilled Resources</p>
                  <h1>
                    Access to a network of highly trained, adaptable
                    professionals.
                  </h1>
                </div>
              </div>
              <div className="industry-card chooseUs">
                <img src={Two} alt="Healthcare Services" />
                <div className="chooseUs-content">
                  <p>Proven Recruitment Process</p>
                  <h1>
                    A structured, transparent process from selection to
                    placement.
                  </h1>
                </div>
              </div>
            </div>
            <div className="mid">
              <div className="industry-card chooseUs">
                <img src={Four} alt="Manufacturing Industry" />
                <div className="chooseUs-content">
                  <p>Industry-Leading Deployment Times</p>
                  <h1>
                    Quick lead times that ensure you have the resources you
                    need, exactly when you need them.
                  </h1>
                </div>
              </div>
              <div className="industry-card chooseUs">
                <img src={Five} alt="Retail Industry" />
                <div className="chooseUs-content">
                  <p>Dedicated Client Management</p>
                  <h1>
                    Business development and recruitment account managers
                    devoted to understanding and supporting your needs.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            <p>Resource Engagement Models</p>
          </div>
          <h1>Flexible Solutions,Seamless Integration</h1>
        </div>
        <div className="top resource">
          <div className="industries-header top">
            <p>Overview of Engagement Options</p>
            <h1>
              We recognize that every business has distinct requirements, which
              is why we offer flexible resource engagement models to meet your
              specific goals and adapt to changing needs.
            </h1>
          </div>
          <div className="card-main">
            <div className="resource-card">
              <div className="resouce-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                >
                  <g clipPath="url(#clip0_68_9)">
                    <path
                      d="M7.61777 28.4157C9.67599 29.9133 12.0984 30.831 14.6323 31.0732C17.1661 31.3154 19.7185 30.8732 22.0232 29.7926C24.3278 28.712 26.3002 27.0327 27.7346 24.9299C29.169 22.8271 30.0127 20.3779 30.1778 17.8379H16.3822L7.61777 28.4157Z"
                      fill="#621A0C"
                    />
                    <path
                      d="M30.1778 16.0603C30.0384 13.7442 29.3345 11.4974 28.1274 9.51588C26.9204 7.53431 25.2469 5.87815 23.2528 4.69185C21.2588 3.50555 19.0047 2.82512 16.6874 2.70992C14.37 2.59473 12.0596 3.04825 9.95771 4.03095C7.85583 5.01364 6.0263 6.49566 4.62868 8.34775C3.23106 10.1998 2.3078 12.3657 1.93941 14.6566C1.57103 16.9474 1.76871 19.2935 2.51522 21.4904C3.26173 23.6873 4.5344 25.6682 6.22222 27.2603L15.5467 16.0603H30.1778Z"
                      fill="#621A0C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_68_9">
                      <rect
                        width="32"
                        height="32"
                        fill="white"
                        transform="translate(0 0.949219)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="resource-content">
                <h1>Resources on Contract</h1>
                <p>
                  Short-term engagements that bring in the expertise you need,
                  without long-term commitment.
                </p>
              </div>
            </div>
            <div className="resource-card">
              <div className="resouce-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    d="M8.66001 3.61572C7.18001 3.61572 5.99335 4.80239 5.99335 6.28239V27.6157C5.99335 28.323 6.2743 29.0012 6.7744 29.5013C7.27449 30.0014 7.95277 30.2824 8.66001 30.2824H13.9933V27.7357L16.78 24.9491H8.66001V22.2824H19.4467L22.1133 19.6157H8.66001V16.9491H24.78L27.3267 14.4024V11.6157L19.3267 3.61572H8.66001ZM17.9933 5.61572L25.3267 12.9491H17.9933V5.61572ZM27.5267 18.2824C27.428 18.2802 27.3299 18.298 27.2383 18.3347C27.1466 18.3713 27.0633 18.4261 26.9933 18.4957L25.6333 19.8557L28.42 22.6291L29.78 21.2824C30.06 20.9891 30.06 20.5091 29.78 20.2291L28.0467 18.4957C27.9787 18.4271 27.8977 18.3729 27.8084 18.3362C27.719 18.2996 27.6232 18.2813 27.5267 18.2824ZM24.8467 20.6424L16.66 28.8424V31.6157H19.4333L27.6333 23.4157L24.8467 20.6424Z"
                    fill="#621A0C"
                  />
                </svg>
              </div>
              <div className="resource-content">
                <h1>Contract to Hire</h1>
                <p>
                  A flexible option allowing you to evaluate a candidate’s fit
                  before making a permanent commitment
                </p>
              </div>
            </div>
            <div className="resource-card">
              <div className="resouce-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M8.98667 4.61605C8.98667 5.5001 8.63548 6.34795 8.01036 6.97307C7.38524 7.59819 6.5374 7.94938 5.65334 7.94938C4.76929 7.94938 3.92144 7.59819 3.29632 6.97307C2.6712 6.34795 2.32001 5.5001 2.32001 4.61605C2.32001 3.73199 2.6712 2.88415 3.29632 2.25903C3.92144 1.6339 4.76929 1.28271 5.65334 1.28271C6.5374 1.28271 7.38524 1.6339 8.01036 2.25903C8.63548 2.88415 8.98667 3.73199 8.98667 4.61605Z"
                    fill="#621A0C"
                  />
                  <path
                    d="M8.98667 4.61605C8.98667 5.5001 8.63548 6.34795 8.01036 6.97307C7.38524 7.59819 6.5374 7.94938 5.65334 7.94938C4.76929 7.94938 3.92144 7.59819 3.29632 6.97307C2.6712 6.34795 2.32001 5.5001 2.32001 4.61605C2.32001 3.73199 2.6712 2.88415 3.29632 2.25903C3.92144 1.6339 4.76929 1.28271 5.65334 1.28271C6.5374 1.28271 7.38524 1.6339 8.01036 2.25903C8.63548 2.88415 8.98667 3.73199 8.98667 4.61605ZM8.98667 4.61605H16.32M16.32 4.61605L13.6533 1.94938M16.32 4.61605L13.6533 7.28271"
                    stroke="#621A0C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.6533 23.2826C19.6533 24.1666 20.0045 25.0145 20.6296 25.6396C21.2548 26.2647 22.1026 26.6159 22.9867 26.6159C23.8707 26.6159 24.7186 26.2647 25.3437 25.6396C25.9688 25.0145 26.32 24.1666 26.32 23.2826C26.32 22.3985 25.9688 21.5507 25.3437 20.9255C24.7186 20.3004 23.8707 19.9492 22.9867 19.9492C22.1026 19.9492 21.2548 20.3004 20.6296 20.9255C20.0045 21.5507 19.6533 22.3985 19.6533 23.2826Z"
                    fill="#621A0C"
                  />
                  <path
                    d="M19.6533 23.2826C19.6533 24.1666 20.0045 25.0145 20.6297 25.6396C21.2548 26.2647 22.1026 26.6159 22.9867 26.6159C23.8707 26.6159 24.7186 26.2647 25.3437 25.6396C25.9688 25.0145 26.32 24.1666 26.32 23.2826C26.32 22.3985 25.9688 21.5507 25.3437 20.9255C24.7186 20.3004 23.8707 19.9492 22.9867 19.9492C22.1026 19.9492 21.2548 20.3004 20.6297 20.9255C20.0045 21.5507 19.6533 22.3985 19.6533 23.2826ZM19.6533 23.2826H12.32M12.32 23.2826L14.9867 20.6159M12.32 23.2826L14.9867 25.9492"
                    stroke="#621A0C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.32 5.28255C20.32 5.72029 20.4062 6.15374 20.5737 6.55816C20.7413 6.96258 20.9868 7.33005 21.2963 7.63957C21.6058 7.9491 21.9733 8.19463 22.3777 8.36215C22.7821 8.52967 23.2156 8.61588 23.6533 8.61588C24.0911 8.61588 24.5245 8.52967 24.929 8.36215C25.3334 8.19463 25.7008 7.9491 26.0104 7.63957C26.3199 7.33005 26.5654 6.96258 26.7329 6.55816C26.9005 6.15374 26.9867 5.72029 26.9867 5.28255C26.9867 4.3985 26.6355 3.55065 26.0104 2.92553C25.3852 2.30041 24.5374 1.94922 23.6533 1.94922C22.7693 1.94922 21.9214 2.30041 21.2963 2.92553C20.6712 3.55065 20.32 4.3985 20.32 5.28255Z"
                    fill="#621A0C"
                  />
                  <path
                    d="M23.6533 8.61589C22.7693 8.61589 21.9214 8.2647 21.2963 7.63957C20.6712 7.01445 20.32 6.16661 20.32 5.28255C20.32 4.3985 20.6712 3.55065 21.2963 2.92553C21.9214 2.30041 22.7693 1.94922 23.6533 1.94922C24.5374 1.94922 25.3852 2.30041 26.0104 2.92553C26.6355 3.55065 26.9867 4.3985 26.9867 5.28255C26.9867 6.16661 26.6355 7.01445 26.0104 7.63957C25.3852 8.2647 24.5374 8.61589 23.6533 8.61589ZM23.6533 8.61589V15.9492M23.6533 15.9492L26.32 13.2826M23.6533 15.9492L20.9867 13.2826"
                    stroke="#621A0C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.65332 22.616C1.65332 21.732 2.00451 20.8841 2.62963 20.259C3.25475 19.6339 4.1026 19.2827 4.98665 19.2827C5.87071 19.2827 6.71855 19.6339 7.34368 20.259C7.9688 20.8841 8.31999 21.732 8.31999 22.616C8.31999 23.5001 7.9688 24.3479 7.34368 24.9731C6.71855 25.5982 5.87071 25.9494 4.98665 25.9494C4.1026 25.9494 3.25475 25.5982 2.62963 24.9731C2.00451 24.3479 1.65332 23.5001 1.65332 22.616Z"
                    fill="#621A0C"
                  />
                  <path
                    d="M4.98665 19.2826C4.1026 19.2826 3.25475 19.6337 2.62963 20.2589C2.00451 20.884 1.65332 21.7318 1.65332 22.6159C1.65332 23.4999 2.00451 24.3478 2.62963 24.9729C3.25475 25.598 4.1026 25.9492 4.98665 25.9492C5.87071 25.9492 6.71855 25.598 7.34368 24.9729C7.9688 24.3478 8.31999 23.4999 8.31999 22.6159C8.31999 21.7318 7.9688 20.884 7.34368 20.2589C6.71855 19.6337 5.87071 19.2826 4.98665 19.2826ZM4.98665 19.2826V11.9492M4.98665 11.9492L7.65332 14.6159M4.98665 11.9492L2.31999 14.6159"
                    stroke="#621A0C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="resource-content">
                <h1>Permanent Placement</h1>
                <p>
                  Finding and placing the right professionals who can grow with
                  your team.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="top resource">
          <div className="industries-header top">
            <p>How we constantly Upgrade to Deliver Excellence</p>
            <h1>
              At Mobilide, our approach is grounded in excellence and best
              practices
            </h1>
          </div>
          <div className="card-main">
            <div className="resource-card">
              <div className="resouce-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                >
                  <path
                    d="M30 30.9492H22V4.94922H30V30.9492ZM20 30.9492H12V12.9492H20V30.9492ZM10 30.9492H2V18.9492H10V30.9492Z"
                    fill="#621A0C"
                  />
                </svg>
              </div>
              <div className="resource-content">
                <h1>Skill Enhancement Programs</h1>
                <p>
                  Continuous training in technology and soft skills to keep our
                  resources sharp and effective.
                </p>
              </div>
            </div>
            <div className="resource-card">
              <div className="resouce-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <g clipPath="url(#clip0_68_75)">
                    <path
                      d="M14.66 4.9492C12.0078 4.9492 9.4643 6.00277 7.58894 7.87813C5.71357 9.75349 4.66 12.297 4.66 14.9492C4.66 17.6014 5.71357 20.1449 7.58894 22.0203C9.4643 23.8956 12.0078 24.9492 14.66 24.9492C17.3122 24.9492 19.8557 23.8956 21.7311 22.0203C23.6064 20.1449 24.66 17.6014 24.66 14.9492C24.66 12.297 23.6064 9.75349 21.7311 7.87813C19.8557 6.00277 17.3122 4.9492 14.66 4.9492ZM0.660004 14.9492C0.660008 12.7317 1.18675 10.546 2.19687 8.5719C3.20698 6.59785 4.67156 4.89197 6.47001 3.59475C8.26847 2.29752 10.3493 1.44606 12.5413 1.11047C14.7332 0.774883 16.9735 0.96477 19.0777 1.6645C21.1819 2.36422 23.0898 3.55377 24.6442 5.13519C26.1987 6.7166 27.3553 8.64465 28.0187 10.7606C28.6822 12.8765 28.8335 15.1197 28.4603 17.3055C28.0871 19.4914 27.2 21.5573 25.872 23.3332L32.074 29.5332L29.246 32.3632L23.046 26.1632C20.965 27.7199 18.4918 28.6666 15.9033 28.8974C13.3148 29.1282 10.7132 28.6339 8.38962 27.47C6.06607 26.306 4.11236 24.5183 2.74721 22.307C1.38206 20.0956 0.659352 17.548 0.660004 14.9492Z"
                      fill="#621A0C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_68_75">
                      <rect
                        width="32"
                        height="32"
                        fill="white"
                        transform="translate(0.660004 0.949219)"
                      />
                    </clipPath>
                  </defs>
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
              <img src={One} alt="Banking and Financial Services" />
              <p>BFSI (Banking, Financial, Services & Insurance)</p>
            </div>
            <div className="industry-card">
              <img src={Two} alt="Healthcare Services" />
              <p>Healthcare</p>
            </div>
            <div className="industry-card">
              <img src={Three} alt="Automobile Industry" />
              <p>Automobile</p>
            </div>
          </div>
          <div className="mid">
            <div className="industry-card">
              <img src={Four} alt="Manufacturing Industry" />
              <p>Manufacturing</p>
            </div>
            <div className="industry-card">
              <img src={Five} alt="Retail Industry" />
              <p>Retail</p>
            </div>
            <div className="industry-card">
              <img src={Six} alt="Education Sector" />
              <p>Education</p>
            </div>
          </div>
          <div className="btm">
            <div className="industry-card">
              <img src={Seven} alt="E-Governance Services" />
              <p>E-Governance</p>
            </div>
            <div className="industry-card">
              <img src={Eight} alt="Telecom Industry" />
              <p>Telecom</p>
            </div>
            <div className="industry-card hide">
              <img src={Eight} alt="Telecom Industry" />
              <p>Telecom</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
