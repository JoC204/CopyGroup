import React, { useEffect } from 'react';
import Logo from "../../img/copyLogo.png";
import "../../styles/Contacto.css";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior
  }, []);

  return (
    <div>
      <h1>Contacto</h1>
      <img className="img-logo" src={Logo} alt="Logo" />
      <h3>Tel: 341-555 55 55</h3>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d836.45389210251!2d-60.6718235304194!3d-33.00863757371278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7abfecd914af3%3A0xae3e0c091de6936f!2sCallao%206080%2C%20S2000%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1720059890124!5m2!1ses!2sar"
        width="350"
        height="300"
        style={{ border:0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Services;
