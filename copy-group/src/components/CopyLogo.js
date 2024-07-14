import React from 'react';
import outerCircle from '../img/outCircle.png';
import logoText from '../img/textLogo.png';
import '../styles/CopyLogo.css'; // Importa los estilos

const CopyLogo = ({ width, height }) => {
  return (
    <div className="logo-container" style={{ width, height }}>
      <img src={outerCircle} alt="Outer Circle" className="logo-outer-circle" style={{ width: '100%', height: '100%' }} />
      <img src={logoText} alt="Logo Text" className="logo-text" style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default CopyLogo;
