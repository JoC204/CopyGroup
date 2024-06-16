import React from 'react';
import '../styles/PresentationImage.css';
// import presentationImage from '../img/presentation.jpg'; // Asegúrate de tener esta imagen en tu carpeta img
import CopyLogo from './CopyLogo';

const PresentationImage = () => {
  return (
    <div className="presentation-container">
      <CopyLogo /> 
    </div>
  );
};

export default PresentationImage;
