import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom"; // Importa Link como RouterLink
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/NavBar.css";
import CopyLogo from "./CopyLogo"; // Importa el componente CopyLogo
import { Link } from "../Links"; // Importa el arreglo de enlaces

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <RouterLink to="/" onClick={toggleMenu}>
          <CopyLogo />
        </RouterLink>{" "}
        Copy Group
      </div>
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <li className="navbar-item"></li>
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
