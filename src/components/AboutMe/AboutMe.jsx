import React from "react";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="about_container">
          <h2 className="section_title">About Me</h2>
          <span className="about_subtitle">{`{professionally}`}</span>

          <div className="about_main">
            <div className="about_img">
              <img src="/assets/about_pic.jpg" alt="about" />
            </div>

            <p className="about_description">
              Frontend Developer with high level of experience in Web designing,
              developement
            </p>

            <div className="about_info">
              <div className="about_info_card">
                <span className="about_info_number">3+</span>
                <span className="about_info-name">Years experience</span>
              </div>
              <div className="about_info_card">
                <span className="about_info_number">8+</span>
                <span className="about_info-name">Completed projects</span>
              </div>
              <div className="about_info_card">
                <span className="about_info_number">3+</span>
                <span className="about_info-name">Companies worked with</span>
              </div>

              <div className="about_info_card">
                <span className="about_info_number">3+</span>
                <span className="about_info-name">Companies worked with</span>
              </div>
            </div>
            {/* <div className="about_buttons">
                <a href="#" className="button button-flex">
                  Download CV{" "}
                  <i className="fas fa-file-download button-icon"></i>
                </a>
              </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
