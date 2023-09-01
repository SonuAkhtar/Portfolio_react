import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer_bg">
          <div className="footer_container container grid">
            <div>
              <h1 className="footer_title">Sonu</h1>
              <span className="footer_subtitle">Frontend Developer</span>
            </div>
            <ul className="footer_links">
              <li>
                <a href="#services" className="footer_link">
                  Work
                </a>
              </li>
              <li>
                <a href="#about" className="footer_link">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="footer_link">
                  Contact
                </a>
              </li>
            </ul>

            <div className="footer_social">
              <a
                href="https://www.instagram.com/sonu_03.01/"
                target="_blank"
                className="footer_social"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/sonu-akhtar-03bb59129"
                target="_blank"
                className="footer_social"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://twitter.com/sonuakhtar5"
                target="_blank"
                className="footer_social"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
