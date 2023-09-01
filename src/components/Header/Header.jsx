import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav_logo">
            Sonu
          </a>

          <div className="nav_menu" id="nav-menu">
            <ul className="nav_list grid">
              <li className="nav_item">
                <a href="#home" className="nav_link active_tab">
                  <i className="fas fa-home nav_icon" /> Home
                </a>
              </li>
              <li className="nav_item">
                <a href="#about" className="nav_link">
                  <i className="fas fa-user nav_icon" /> About
                </a>
              </li>
              <li className="nav_item">
                <a href="#skills" className="nav_link">
                  <i className="fas fa-file-code nav_icon" /> Skills
                </a>
              </li>
              <li className="nav_item">
                <a href="#services" className="nav_link">
                  <i className="fas fa-briefcase nav_icon" /> Work
                </a>
              </li>
              <li className="nav_item">
                <a href="#portfolio" className="nav_link">
                  <i className="fas fa-camera nav_icon" /> Hobbies
                </a>
              </li>
              <li className="nav_item">
                <a href="#contact" className="nav_link">
                  <i className="fas fa-phone nav_icon" /> Contact
                </a>
              </li>
            </ul>
            <i className="fas fa-times nav_close" id="nav-close"></i>
          </div>
          <div className="nav_btns">
            <div className="nav_toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
