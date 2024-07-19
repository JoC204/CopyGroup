import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/NavBar.css";
import CopyLogo from "./CopyLogo";
import { Link } from "../Links";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (path) => {
    setIsOpen(false);
    window.location.pathname = path;
  };

  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <RouterLink to="/">
          <CopyLogo width="80px" height="auto" />
        </RouterLink>
      </div>
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>
      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
        {Link.map((link, index) => (
          <li
            key={index}
            className="navbar-item"
            onClick={() => handleItemClick(link.path)}
          >
            <RouterLink to={link.path} onClick={toggleMenu}>
              {link.label}
            </RouterLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
