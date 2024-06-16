import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/NavBar.css';
import CopyLogo from './CopyLogo'; // Importa el componente CopyLogo

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"><CopyLogo /> Copy Group</div>
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li className="navbar-item">Home</li>
        <li className="navbar-item">Empresa</li>
        <li className="navbar-item">Materiales</li>
        <li className="navbar-item">Ploteos</li>
        <li className="navbar-item">Carteles</li>
        <li className="navbar-item">PDV</li>
        <li className="navbar-item">Promociones</li>
        <li className="navbar-item">Proyectos</li>
        <li className="navbar-item">Contacto</li>
        <li className="navbar-item"></li>
        <li className="navbar-item"></li>
        <li className="navbar-item"></li>
        <li className="navbar-item"></li>
        <li className="navbar-item"></li>
        <li className="navbar-item"></li>
        <li className="navbar-item"></li>
      </ul>
    </nav>
  );
};

export default NavBar;
