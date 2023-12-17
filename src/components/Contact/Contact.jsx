import React from "react";

// imported CSS
import "./contact.css";

// icons
import callIcon from "/assets/contact/call.gif";
import emailIcon from "/assets/contact/email.gif";
import locationIcon from "/assets/contact/location.gif";
import userIcon from "/assets/contact/user.gif";
import userEmailIcon from "/assets/contact/user_email.gif";
import messageIcon from "/assets/contact/message.gif";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section_title">Contact me</h2>
          <span className="section_subtitle">Get in touch</span>

          <main className="contact_main">
            <div className="contact_info">
              <div className="contact_sub_info">
                <div className="contact_icon_title">
                  <img src={callIcon} alt="call" className="contact_icon" />
                  <h3 className="contact_type">Call</h3>
                </div>
                <div className="contact_type_info">
                  <a href="tel:+919876543210">+91-9876543210</a>
                </div>
              </div>

              <div className="contact_sub_info">
                <div className="contact_icon_title">
                  <img src={emailIcon} alt="email" className="contact_icon" />
                  <h3 className="contact_type">Email</h3>
                </div>
                <div className="contact_type_info">
                  <a href="mailto:sonua981@gmail.com">sonua981@gmail.com</a>
                </div>
              </div>

              <div className="contact_sub_info">
                <div className="contact_icon_title">
                  <img
                    src={locationIcon}
                    alt="location"
                    className="contact_icon"
                  />
                  <h3 className="contact_type">Location</h3>
                </div>
                <div className="contact_type_info">Gurgaon - India</div>
              </div>
            </div>

            <div className="contact_form">
              <form id="contact_form" autoComplete="off">
                <div className="contact_inputs">
                  <div className="contact_name_email">
                    <div className="input_wrapper">
                      <img src={userIcon} alt="user" className="contact_icon" />
                      <input
                        type="text"
                        id="contact_name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="input_wrapper">
                      <img
                        src={userEmailIcon}
                        alt="user email"
                        className="contact_icon"
                      />
                      <input
                        type="email"
                        id="contact_email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="textarea_wrapper">
                    <img
                      src={messageIcon}
                      alt="user message"
                      className="contact_icon"
                    />
                    <textarea
                      name=""
                      id="contact_msg"
                      cols="0"
                      rows="4"
                      placeholder="Write your message"
                      required
                    ></textarea>
                  </div>
                  <div className="contact_button">
                    <button>
                      Send Message
                      <i className="fas fa-paper-plane" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Contact;
