import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer_container">
          <div className="footer_info">
            <h1 className="footer_title">Riyaz</h1>
            <span className="footer_subtitle">Software Developer</span>
          </div>
          <div className="footer_links">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#works">Work</a>
              </li>
              <li>
                <a href="#hobbies">Hobbies</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer_social">
            <a href="https://www.instagram.com/sonu_03.01/" target="_blank">
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="https://www.linkedin.com/in/sonu-akhtar-03bb59129"
              target="_blank"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://twitter.com/sonuakhtar5" target="_blank">
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
