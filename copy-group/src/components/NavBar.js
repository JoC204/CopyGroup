import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/NavBar.css";
import CopyLogo from "./CopyLogo";
import { Link } from "../Links";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarClass, setNavbarClass] = useState("navbar transparent");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarClass("navbar solid");
      } else {
        setNavbarClass("navbar transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={navbarClass}>
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
          <li key={index} className="navbar-item">
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
