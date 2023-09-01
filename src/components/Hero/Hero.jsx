import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="home_section" id="home">
        <div className="home_container container grid">
          <div className="home_content grid">
            <div className="home_social">
              <a
                href="https://www.instagram.com/sonu_03.01/"
                className="home_social-icon"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/sonu-akhtar-03bb59129"
                className="home_social-icon"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://twitter.com/sonuakhtar5"
                className="home_social-icon"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="home_img">
              <img src="/assets/img.jpg" alt="profile" />
            </div>
            <div className="home_data">
              <h1 className="home_title">
                Hi, It<span className="title_color">'</span>s Sonu
              </h1>
              <h3 className="home_subtitle">
                I am a <span className="text_animation"></span>
              </h3>
              <a href="#contact" className="button button-flex home_button">
                Get Connected
                <i className="fas fa-phone nav_icon button_icon"></i>
              </a>
            </div>
          </div>
          <div className="home_scroll">
            <a href="#about" className="home_scroll-button button-flex">
              <i className="fas fa-mouse home_scroll-mouse"></i>
              <span className="home_scroll-name">Scroll Down</span>
              <i className="fas fa-arrow-down home_scroll-arrow"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
