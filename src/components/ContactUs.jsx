import React from "react";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <>
      <h1>contact us</h1>
      <form action="">
        <div className="contact-form">
          <div class="form-container">
            <form action="#" method="post">
              <div class="form-row">
                <div class="form-group">
                  <label for="first-name">
                    First name <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    placeholder="Enter First Name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="last-name">
                    Last name <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    placeholder="Enter Last Name"
                    required
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="email">
                  Email address <span>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email Address"
                  required
                />
              </div>
              <div class="form-group">
                <label for="mobile">
                  Mobile number <span>*</span>
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter Mobile Number"
                  required
                />
              </div>
              <div class="form-group">
                <label for="message">
                  Message <span>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type Here"
                  required
                ></textarea>
              </div>
              <button type="submit" class="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </form>
      <div className="address-main">
        <div className="mail-us">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.98 4.19667 3.45067 4.00067 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.0217 19.805 20.5507 20.0007 20 20H4ZM12 13L20 8V6L12 11L4 6V8L12 13Z"
              fill="#621A0C"
            />
          </svg>
          <h1>Mail Us</h1>
          <p>Hrteam@mobiglide.in</p>
        </div>
        <div className="visit-us">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2C14.3869 2 16.6761 2.94821 18.364 4.63604C20.0518 6.32387 21 8.61305 21 11C21 14.074 19.324 16.59 17.558 18.395C16.6757 19.2871 15.7129 20.0958 14.682 20.811L14.256 21.101L14.056 21.234L13.679 21.474L13.343 21.679L12.927 21.921C12.6446 22.0822 12.3251 22.1669 12 22.1669C11.6749 22.1669 11.3554 22.0822 11.073 21.921L10.657 21.679L10.137 21.359L9.945 21.234L9.535 20.961C8.42283 20.2085 7.3869 19.3491 6.442 18.395C4.676 16.589 3 14.074 3 11C3 8.61305 3.94821 6.32387 5.63604 4.63604C7.32387 2.94821 9.61305 2 12 2ZM12 8C11.606 8 11.2159 8.0776 10.8519 8.22836C10.488 8.37913 10.1573 8.6001 9.87868 8.87868C9.6001 9.15726 9.37913 9.48797 9.22836 9.85195C9.0776 10.2159 9 10.606 9 11C9 11.394 9.0776 11.7841 9.22836 12.1481C9.37913 12.512 9.6001 12.8427 9.87868 13.1213C10.1573 13.3999 10.488 13.6209 10.8519 13.7716C11.2159 13.9224 11.606 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8Z"
              fill="#621A0C"
            />
          </svg>
          <h1>Visit Us</h1>
          <p>
            #594 , 2nd floor HMT layout CBI road Ganganagar Bengaluru 560062
          </p>
        </div>
        <div className="call-us">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19.95 21C17.8667 21 15.8083 20.546 13.775 19.638C11.7417 18.73 9.89167 17.4423 8.225 15.775C6.55833 14.1077 5.271 12.2577 4.363 10.225C3.455 8.19233 3.00067 6.134 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07933 8.725 3.238C8.90833 3.39667 9.01667 3.584 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.704 12.1123 8.162 12.687C8.62 13.2617 9.12433 13.816 9.675 14.35C10.1917 14.8667 10.7333 15.346 11.3 15.788C11.8667 16.23 12.4667 16.634 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3877 16.038 14.313C16.28 14.2383 16.5173 14.2173 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1377 20.775 15.313C20.925 15.4883 21 15.684 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z"
              fill="#621A0C"
            />
          </svg>
          <h1>Call Us</h1>
          <p>080-41655075</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
