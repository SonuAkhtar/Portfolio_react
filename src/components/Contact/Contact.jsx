import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section_title">Contact me</h2>
        <span className="section_subtitle">Get in touch</span>

        <div className="contact_container container grid">
          <div className="contact_info_one">
            <div className="contact_information">
              <i className="fas fa-phone contact_icon"></i>
              <div>
                <h3 className="contact_title">Call</h3>
                <span className="contact_subtitle">+91-9876543210</span>
              </div>
            </div>
            <div className="contact_information">
              <i className="fas fa-envelope contact_icon"></i>
              <div>
                <h3 className="contact_title">Email</h3>
                <span className="contact_subtitle">sonua981@gmail.com</span>
              </div>
            </div>
            <div className="contact_information">
              <i className="fas fa-map-marker-alt contact_icon"></i>
              <div>
                <h3 className="contact_title">Location</h3>
                <span className="contact_subtitle">Gurgaon - Haryana</span>
              </div>
            </div>
          </div>
          <form
            action=""
            method=""
            id="contact_form"
            className="contact_form grid"
            autoComplete="off"
          >
            <div id="error_msg"></div>

            <div className="contact_inputs grid">
              <div className="contact_content">
                <i className="fas fa-user-edit contact_form-icon"></i>
                <input
                  type="text"
                  id="contact_name"
                  className="contact_input"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="contact_content">
                <i className="fas fa-at contact_form-icon"></i>
                <input
                  type="email"
                  id="contact_email"
                  className="contact_input"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="contact_content">
              <i className="fas fa-envelope contact_form-icon"></i>
              <textarea
                name=""
                id="contact_msg"
                cols="0"
                rows="4"
                className="contact_input"
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <div>
              <button
                className="button button-flex contact_button"
                // onClick="return validate()"
              >
                Send Message<i className="fas fa-paper-plane button_icon"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
