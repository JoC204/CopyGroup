import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import CopyLogo from "./CopyLogo"; // Asegúrate de que este componente esté en la misma carpeta o ajusta la ruta

import "../styles/Footer.css"; // Asegúrate de crear y configurar este archivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <CopyLogo width="100px" height="auto" />
        </div>
        <div className="footer-links">
          <a
            href="https://www.instagram.com/copy.group?igsh=OXV1eXNkdGlncW5n"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://wa.me/123456789"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="tel:+54 9 341 839-5937">
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <a href="https://maps.app.goo.gl/EEuTen5nKEMmZazo8" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </a>
        </div>
      </div>
      <div className="footer-contact">
        <a href="mailto:control-copy@hotmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} /> control-copy@hotmail.com
        </a>
      </div>
      <div className="footer-rights">
        <p>
          <FontAwesomeIcon icon={faCopyright} /> Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
