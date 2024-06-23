import React from "react";
import Logo from "../../img/copyLogo.png";
import "../../styles/Contacto.css";

const Services = () => {
  return (
    <div>
      <h1>Contacto</h1>
      <img className="img-logo" src={Logo} alt="Logo" />
      <h3>Tel: 341-555 55 55</h3>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.124842393455!2d-60.6304658!3d-32.94771319999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab1dc9b6d36f%3A0x97b9e9584d94d851!2sMonumento%20Hist%C3%B3rico%20Nacional%20a%20la%20Bandera!5e0!3m2!1ses!2sar!4v1719155085406!5m2!1ses!2sar"
        width="300"
        height="200"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Services;
