import React, { useState } from "react";
import "./menuMobile.css";

const MenuMobile = ({ expand, setExpand }) => {
  const [menuItem, setMenuItem] = useState("one");

  const menuMobileItems = [
    {
      id: 0,
      class: "one",
      icon: "fas fa-home",
      name: "Hero",
      href: "#",
    },
    {
      id: 1,
      class: "two",
      icon: "fas fa-user",
      name: "About",
      href: "#about",
    },
    {
      id: 2,
      class: "three",
      icon: "fas fa-file-code",
      name: "Skills",
      href: "#skills",
    },

    {
      id: 3,
      class: "four",
      icon: "fas fa-home",
      name: "Work",
      href: "#work",
    },
    {
      id: 4,
      class: "five",
      icon: "fas fa-camera",
      name: "Hobbies",
      href: "#hobbies",
    },
    {
      id: 5,
      class: "six",
      icon: "fas fa-phone",
      name: "Contact",
      href: "#contact",
    },
  ];

  const handleMenuClick = (val) => {
    setMenuItem(val);
    setExpand(false);
  };

  return (
    <div className={`menuMobile_container ${expand && "expand"}`}>
      <ul className={`${expand && "expand"}`}>
        {menuMobileItems.map((item, i) => (
          <li key={i} onClick={() => handleMenuClick(item.class)}>
            <a
              href={item.href}
              className={`${menuItem == item.class && "active"}`}
            >
              <i className={`${item.icon} ${item.class}`} />
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuMobile;
