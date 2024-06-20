import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt, faCopyright } from '@fortawesome/free-solid-svg-icons';
import CopyLogo from './CopyLogo'; // Asegúrate de que este componente esté en la misma carpeta o ajusta la ruta

import '../styles/Footer.css'; // Asegúrate de crear y configurar este archivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <CopyLogo />
      </div>
      <div className="footer-links">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="tel:+123456789">
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </div>
      <div className="footer-contact">
        <p><FontAwesomeIcon icon={faEnvelope} /> email@example.com</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Dirección del taller</p>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.395490422051!2d-122.08424968469298!3d37.42206577982792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0b5d5f67c5f%3A0xc4cdb6af64ff7844!2sGoogleplex!5e0!3m2!1sen!2s!4v1630303733781!5m2!1sen!2s"
          width="300"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="footer-rights">
        <p><FontAwesomeIcon icon={faCopyright} /> Todos los derechos reservados</p>
        <a href="mailto:contact@example.com"><FontAwesomeIcon icon={faEnvelope} /> Contacto</a>
      </div>
    </footer>
  );
};

export default Footer;
