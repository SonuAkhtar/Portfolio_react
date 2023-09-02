import React from "react";
import TypewriteComponent from "typewriter-effect";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero_section" id="hero">
        <div className="hero_container">
          <div className="hero_content">
            <div className="hero_social">
              <a
                href="https://www.instagram.com/sonu_03.01/"
                className="hero_social-icon"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/sonu-akhtar-03bb59129"
                className="hero_social-icon"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://twitter.com/sonuakhtar5"
                className="hero_social-icon"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="hero_data">
              <h1 className="hero_title">
                Hi, It<span className="title_color">'</span>s Sonu
              </h1>
              <h3 className="hero_subtitle">
                I am a
                <TypewriteComponent
                  options={{
                    strings: [
                      "Frontend Developer",
                      "UI/UX Designer",
                      "Logo Designer",
                    ],
                    delay: 40,
                    deleteSpeed: 15,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>
              <a href="#contact" className="button button-flex hero_button">
                Get Connected
                <i className="fas fa-phone nav_icon button_icon"></i>
              </a>
            </div>

            <div className="hero_img">
              <img src="/assets/img.jpg" alt="profile" />
            </div>
          </div>
          {/* <div className="hero_scroll">
            <a href="#about" className="hero_scroll-button button-flex">
              <i className="fas fa-mouse hero_scroll-mouse"></i>
              <span className="hero_scroll-name">Scroll Down</span>
              <i className="fas fa-arrow-down hero_scroll-arrow"></i>
            </a>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
