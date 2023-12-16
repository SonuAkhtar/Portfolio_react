import React, { useState } from "react";

// imported CSS
import "./menuDesk.css";

const MenuDesk = ({ show, setShow }) => {
  const [circlePos, setCirclePos] = useState("three");

  const menuDeskItems = [
    { id: 0, class: "one", number: "01", name: "About", href: "#about" },
    { id: 1, class: "two", number: "02", name: "Skills", href: "#skills" },
    { id: 2, class: "three", number: "03", name: "Home", href: "#" },
    { id: 3, class: "four", number: "04", name: "Work", href: "#work" },
    { id: 4, class: "five", number: "05", name: "Hobbies", href: "#hobbies" },
    { id: 5, class: "six", number: "06", name: "Contact", href: "#contact" },
  ];

  const handleMenuClick = (val) => {
    setCirclePos(val);
    setShow(false);
  };

  return (
    <div className={`menuDesk_container ${show && "show"}`}>
      <div className={`menuDesk_circle ${circlePos}`}>
        {menuDeskItems.map((item, i) => (
          <div
            key={i}
            className={`menuDesk_stripe ${item.class}`}
            onClick={() => {
              handleMenuClick(item.class);
            }}
          >
            <div className="menuDesk_dot">
              <i
                className={`far fa-dot-circle ${
                  circlePos == item.class && "active"
                }`}
              />
            </div>
            <a
              href={item.href}
              className={`menuDesk_text ${circlePos == item.class && "active"}`}
            >
              <span className="number">{item.number}</span>
              <span className="name">{item.name}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuDesk;
