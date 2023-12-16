import React, { useEffect, useState } from "react";

// Imported Component
import MenuDesk from "../MenuDesk/MenuDesk";
import MenuMobile from "../MenuMobile/MenuMobile";

// Imported CSS
import "./header.css";

const Header = () => {
  const [menuClick, setMenuClick] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeaderScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <>
      <header className={`header ${headerScroll && "scroll"}`}>
        <nav>
          <a className="nav_logo" href="#">
            Sonu
          </a>

          <div className="menu_icons" onClick={() => setMenuClick(!menuClick)}>
            <i className={`fas fa-bars ${!menuClick && "show"}`} />
            <i className={`fas fa-times ${menuClick && "show"}`} />
          </div>

          <MenuDesk show={menuClick} setShow={setMenuClick} />

          <MenuMobile expand={menuClick} setExpand={setMenuClick} />
        </nav>
      </header>
    </>
  );
};

export default Header;
