import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [burgerClick, setBurgerClick] = useState(false);
  return (
    <>
      <header className="header" id="header">
        <div className="header_container">
          <nav>
            <div className="nav_logo">
              <a href="#">Sonu</a>
            </div>

            <div className="nav_menu" id="nav-menu">
              <ul className={`nav_list ${burgerClick && "show"}`}>
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
            </div>
            <div className="nav_btns">
              <div
                className="nav_toggle"
                onClick={() => setBurgerClick(!burgerClick)}
              >
                <i className={`fas fa-bars ${!burgerClick && "show"}`}></i>
                <i className={`fas fa-times ${burgerClick && "show"}`}></i>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
