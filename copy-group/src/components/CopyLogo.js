import React from 'react';
import logo from '../img/copyLogo.png'; // Importa la imagen
import '../styles/CopyLogo.css'; // Importa los estilos

const CopyLogo = () => {
  return (
    <div className="copy-logo">
      <img src={logo} alt="Copy Group Logo" className="logo-image" />
    </div>
  );
};

export default CopyLogo;