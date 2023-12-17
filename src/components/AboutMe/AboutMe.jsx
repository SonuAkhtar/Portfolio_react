import React from "react";

// imported CSS
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <h2 className="section_title">About Me</h2>
          <span className="section_subtitle">Professionally</span>

          <main className="about_main">
            <div className="about_img">
              <img src="/assets/about_pic.jpg" alt="about" />
            </div>

            <p className="about_description">
              Frontend Developer with high level of experience in Web designing,
              developement
            </p>

            <div className="about_info">
              <div className="about_info_card">
                <span className="about_info_number">6+</span>
                <span className="about_info-name">Years experience</span>
              </div>
              <div className="about_info_card">
                <span className="about_info_number">20+</span>
                <span className="about_info-name">Completed projects</span>
              </div>
              <div className="about_info_card">
                <span className="about_info_number">4</span>
                <span className="about_info-name">Companies worked with</span>
              </div>

              <div className="about_info_card">
                <span className="about_info_number">5+</span>
                <span className="about_info-name">Languages Known</span>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
