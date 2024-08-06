import React, { useEffect } from "react";
// import CopyLogo from "../CopyLogo";
import "../../styles/Contacto.css";
import "../../styles/index.css";
import "../../styles/Body-routes.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior
  }, []);

  return (
    <div className="contacto-container">
      <div className='rutes-h1'></div>
      <h1>Contacto</h1>
      <div className="infoContact">
        <p>Sanchez Bustamante 2732 A</p>
        <p>Tel: +54 9 341 839-5937</p>
        <p>Rosario - Santa Fe</p>
        <a href="mailto:control-copy@hotmail.com" target="_blank" rel="noopener noreferrer">
          Email: control-copy@hotmail.com
        </a>
      </div>

      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.050714461669!2d-60.67189919999999!3d-33.002438399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7abf77650951b%3A0xcf71fb0346f699c3!2sS%C3%A1nchez%20de%20Bustamante%202732a%2C%20S2000%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1721064383408!5m2!1ses!2sar"
        width="300"
        height="300"
        style={{ border: 2 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      
    </div>
  );
};

export default Contact;
