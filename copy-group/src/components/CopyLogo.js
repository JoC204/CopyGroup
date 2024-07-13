import React from 'react';
import logo from '../img/copyLogo2.png'; // Importa la imagen
import '../styles/CopyLogo.css'; // Importa los estilos

const CopyLogo = ({ width, height }) => {
  return (
    <div className="copy-logo" style={{ width, height }}>
      <img src={logo} alt="Copy Group Logo" className="logo-image" style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default CopyLogo;
