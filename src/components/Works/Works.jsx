import React from "react";
import "./works.css";

const Works = () => {
  return (
    <>
      <section className="works" id="works">
        <div className="works_container">
          <h2 className="section_title">Work</h2>
          <span className="section_subtitle">What i do</span>

          <div className="works_main">
            <div className="work_card">
              <div className="name_n_icon">
                <i className="fas fa-th-large"></i>
                <span className="works_title">UI/UX Design</span>
              </div>

              <span className="button button-flex button-small button-link works_button">
                View More <i className="fas fa-arrow-right button_icon"></i>
              </span>
            </div>

            <div className="work_card">
              <div className="name_n_icon">
                <i className="fas fa-laptop-code"></i>
                <span className="works_title">Frontend Developer</span>
              </div>

              <span className="button button-flex button-small button-link works_button">
                View More <i className="fas fa-arrow-right button_icon"></i>
              </span>
            </div>

            <div className="work_card">
              <div className="name_n_icon">
                <i className="fas fa-pen"></i>
                <span className="works_title">Logo Designer</span>
              </div>

              <span className="button button-flex button-small button-link works_button">
                View More <i className="fas fa-arrow-right button_icon"></i>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
