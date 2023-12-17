import React from "react";
import TypewriteComponent from "typewriter-effect";

// imported CSS
import "./hero.css";

//icons
import callIcon from "../../../public/assets/hero/call.gif";
import downloadIcon from "../../../public/assets/hero/download.gif";
import heroImage from "../../../public/assets/hero/hero.png";

const Hero = () => {
  return (
    <>
      <section className="hero_section" id="hero">
        <div className="container">
          <main className="hero_main">
            <div className="hero_social">
              <a href="https://www.instagram.com/sonu_03.01/">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://www.linkedin.com/in/sonu-akhtar-03bb59129">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://twitter.com/sonuakhtar5">
                <i className="fab fa-twitter" />
              </a>
            </div>
            <div className="hero_data">
              <h1 className="hero_title">
                Hi, It<span className="title_color">'</span>s Riyaz
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
              <div className="hero_buttons">
                <a href="#contact" className="button contact">
                  Contact Me
                  <img src={callIcon} alt="call" />
                </a>
                <a href="#contact" className="button cv">
                  Download CV
                  <img src={downloadIcon} alt="download" />
                </a>
              </div>
            </div>

            <div className="hero_img">
              <img src={heroImage} alt="hero-img" />
            </div>
          </main>
        </div>
        <div className="hero_tech_list">
          <marquee
            behavior="scroll"
            direction="left"
            width="100%"
            scrollamount="20"
          >
            ReactJS <span>|</span> Redux <span>|</span> NextJS <span>|</span>
            JavaScript <span>|</span> HTML <span>|</span> CSS <span>|</span>
          </marquee>
        </div>
      </section>
    </>
  );
};

export default Hero;
