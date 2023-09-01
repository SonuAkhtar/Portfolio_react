import React from "react";
import "./works.css";

const Works = () => {
  return (
    <>
      {" "}
      <section className="services section" id="services">
        <h2 className="section_title">Work</h2>
        <span className="section_subtitle">What i do</span>

        <div className="services_container container grid">
          <div className="services_content">
            <div className="name_n_icon">
              <i className="fas fa-th-large services_icon"></i>
              <span className="services_tile">UI/UX Design</span>
            </div>

            <span className="button button-flex button-small button-link services_button">
              View More <i className="fas fa-arrow-right button_icon"></i>
            </span>

            <div className="services_modal">
              <div className="services_modal-content">
                <h4 className="services_modal-title">UI/UX Designer</h4>
                <i className="fas fa-times services_modal-close"></i>

                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="far fa-check-square services_modal-icon"></i>
                    <p>I design high quality user interface.</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="far fa-check-square services_modal-icon"></i>
                    <p>I design UX element interactions.</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="far fa-check-square services_modal-icon"></i>
                    <p>I design website animations.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services_content">
            <div className="name_n_icon">
              <i className="fas fa-laptop-code services_icon"></i>
              <span className="services_tile">Frontend Developer</span>
            </div>

            <span className="button button-flex button-small button-link services_button">
              View More <i className="fas fa-arrow-right button_icon"></i>
            </span>

            <div className="services_modal">
              <div className="services_modal-content">
                <h4 className="services_modal-title">Frontend Developer</h4>
                <i className="fas fa-times services_modal-close"></i>

                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="far fa-check-square services_modal-icon"></i>
                    <p>I develop interactive UI/UX.</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="far fa-check-square services_modal-icon"></i>
                    <p>I develope Websites.</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="far fa-check-square services_modal-icon"></i>
                    <p>I position the user interaction wisely.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services_content">
            <div className="name_n_icon">
              <i className="fas fa-pen services_icon"></i>
              <span className="services_tile">Logo Designer</span>
            </div>

            <span className="button button-flex button-small button-link services_button">
              View More <i className="fas fa-arrow-right button_icon"></i>
            </span>

            <div className="services_modal">
              <div className="services_modal-content">
                <h4 className="services_modal-title">Logo Designer</h4>
                <i className="fas fa-times services_modal-close"></i>

                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="far fa-check-square services_modal-icon"></i>
                    <p>I create high quality Logo.</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="far fa-check-square services_modal-icon"></i>
                    <p>I make your brand name interactive.</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="far fa-check-square services_modal-icon"></i>
                    <p>I create trendy & animated logos.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
