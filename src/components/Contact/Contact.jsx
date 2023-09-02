import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="contact_container">
          <h2 className="section_title">Contact me</h2>
          <span className="section_subtitle">Get in touch</span>

          <div className="contact_main">
            <div className="contact_info">
              <div className="contact_sub_info">
                <div className="contact_icon_title">
                  <i className="fas fa-phone" />
                  <h3 className="contact_type">Call</h3>
                </div>
                <div className="contact_type_info">+91-9876543210</div>
              </div>

              <div className="contact_sub_info">
                <div className="contact_icon_title">
                  <i className="fas fa-envelope" />
                  <h3 className="contact_type">Email</h3>
                </div>
                <div className="contact_type_info">+91-9876543210</div>
              </div>

              <div className="contact_sub_info">
                <div className="contact_icon_title">
                  <i className="fas fa-map-marker-alt" />
                  <h3 className="contact_type">Location</h3>
                </div>
                <div className="contact_type_info">Gurgaon - India</div>
              </div>
            </div>

            <div className="contact_form">
              <form id="contact_form" autoComplete="off">
                {/* <div id="error_msg"></div> */}

                <div className="contact_inputs">
                  <div className="contact_name_email">
                    <div className="input_wrapper">
                      <i className="fas fa-user-edit"></i>
                      <input
                        type="text"
                        id="contact_name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="input_wrapper">
                      <i className="fas fa-at"></i>
                      <input
                        type="email"
                        id="contact_email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="textarea_wrapper">
                    <i className="fas fa-envelope"></i>
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
                    <button
                      className="button button-flex"
                      // onClick="return validate()"
                    >
                      Send Message
                      <i className="fas fa-paper-plane button_icon"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
