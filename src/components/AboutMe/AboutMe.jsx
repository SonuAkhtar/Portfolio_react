import React from "react";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
        <span className="about_subtitle">{`{professionally}`}</span>
        <div className="about_container container grid">
          <img src="/assets/about_pic.jpg" alt="about" className="about_img" />
          <div className="about_data">
            <p className="about_description">
              Frontend Developer with high level of experience in Web designing,
              developement
            </p>
            <div className="about_info">
              <div>
                <span className="about_info-title">3+</span>
                <span className="about_info-name">
                  Years <br />
                  experience
                </span>
              </div>
              <div>
                <span className="about_info-title">8+</span>
                <span className="about_info-name">
                  Completed <br />
                  projects
                </span>
              </div>
              <div>
                <span className="about_info-title">3+</span>
                <span className="about_info-name">
                  Companies <br />
                  worked with
                </span>
              </div>
            </div>
            <div className="about_buttons">
              <a href="#" className="button button-flex">
                Download CV <i className="fas fa-file-download button-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
