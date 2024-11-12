import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      // If we're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div className="footer-cover">
        <div className="footer-main">
          <div className="footer-socials-tabs">
            <div className="footer-tab-left">
              <div className="mobiglide-text">
                <p>Mobiglide.</p>
              </div>
              <div className="socials-logos">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-cover"
                >
                  <div className="facebook-logo">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.33329 9.00004H11L11.6666 6.33337H9.33329V5.00004C9.33329 4.31337 9.33329 3.66671 10.6666 3.66671H11.6666V1.42671C11.4493 1.39804 10.6286 1.33337 9.76196 1.33337C7.95196 1.33337 6.66663 2.43804 6.66663 4.46671V6.33337H4.66663V9.00004H6.66663V14.6667H9.33329V9.00004Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-cover"
                >
                  <div className="facebook-logo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_101_127)">
                        <path
                          d="M12.6007 0.768677H15.054L9.694 6.89534L16 15.2307H11.0627L7.196 10.1747L2.77067 15.2307H0.316L6.04933 8.67734L0 0.769343H5.06267L8.558 5.39068L12.6007 0.768677ZM11.74 13.7627H13.0993L4.324 2.16001H2.86533L11.74 13.7627Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_101_127">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-cover"
                >
                  <div className="facebook-logo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3.16667 1.25C2.79094 1.25 2.43061 1.39926 2.16493 1.66493C1.89926 1.93061 1.75 2.29094 1.75 2.66667C1.75 3.04239 1.89926 3.40272 2.16493 3.6684C2.43061 3.93408 2.79094 4.08333 3.16667 4.08333C3.54239 4.08333 3.90272 3.93408 4.1684 3.6684C4.43408 3.40272 4.58333 3.04239 4.58333 2.66667C4.58333 2.29094 4.43408 1.93061 4.1684 1.66493C3.90272 1.39926 3.54239 1.25 3.16667 1.25ZM1.83333 5.25C1.81123 5.25 1.79004 5.25878 1.77441 5.27441C1.75878 5.29004 1.75 5.31123 1.75 5.33333V14C1.75 14.046 1.78733 14.0833 1.83333 14.0833H4.5C4.5221 14.0833 4.5433 14.0746 4.55893 14.0589C4.57455 14.0433 4.58333 14.0221 4.58333 14V5.33333C4.58333 5.31123 4.57455 5.29004 4.55893 5.27441C4.5433 5.25878 4.5221 5.25 4.5 5.25H1.83333ZM6.16667 5.25C6.14457 5.25 6.12337 5.25878 6.10774 5.27441C6.09211 5.29004 6.08333 5.31123 6.08333 5.33333V14C6.08333 14.046 6.12067 14.0833 6.16667 14.0833H8.83333C8.85543 14.0833 8.87663 14.0746 8.89226 14.0589C8.90789 14.0433 8.91667 14.0221 8.91667 14V9.33333C8.91667 9.00181 9.04836 8.68387 9.28278 8.44945C9.5172 8.21503 9.83515 8.08333 10.1667 8.08333C10.4982 8.08333 10.8161 8.21503 11.0506 8.44945C11.285 8.68387 11.4167 9.00181 11.4167 9.33333V14C11.4167 14.046 11.454 14.0833 11.5 14.0833H14.1667C14.1888 14.0833 14.21 14.0746 14.2256 14.0589C14.2412 14.0433 14.25 14.0221 14.25 14V8.25333C14.25 6.63533 12.8433 5.37 11.2333 5.516C10.7352 5.56135 10.2472 5.68463 9.78733 5.88133L8.91667 6.25467V5.33333C8.91667 5.31123 8.90789 5.29004 8.89226 5.27441C8.87663 5.25878 8.85543 5.25 8.83333 5.25H6.16667Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-tab-right">
              <div
                className="about-us-footer-tab"
                onClick={() => scrollToSection("about")}
                style={{ cursor: "pointer" }}
              >
                About Us
              </div>
              <div
                className="services-footer-tab"
                onClick={() => scrollToSection("services")}
                style={{ cursor: "pointer" }}
              >
                Services
              </div>
              <div className="careers-footer-tab">Careers</div>
              <Link
                to="/contact"
                className="contact-footer-tab"
                style={{ textDecoration: "none" }}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="footer-rights">
            <div className="horizontal-line"></div>
            <div className="rights-text-main">
              <div>2024 All rights reserved</div>
              <div>Crafted by The Koios Studio</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
