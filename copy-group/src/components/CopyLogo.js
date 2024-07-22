import React, { useEffect, useRef } from 'react';
import outerCircle from '../img/outCircle.png';
import logoText from '../img/textLogo.png';
import '../styles/CopyLogo.css'; // Importa los estilos

const CopyLogo = ({ width, height }) => {
  const outerCircleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (outerCircleRef.current) {
        const scrollPosition = window.scrollY; // Posición actual de desplazamiento
        const documentHeight = document.body.scrollHeight; // Altura total del documento
        const windowHeight = window.innerHeight; // Altura de la ventana visible
        const scrollableHeight = documentHeight - windowHeight; // Desplazamiento máximo posible

        // Calcula el porcentaje de desplazamiento actual
        const scrollPercent = scrollPosition / scrollableHeight;

        // Calcula la rotación completa basada en el porcentaje de desplazamiento
        const rotationDegrees = scrollPercent * 360;

        // Aplica la rotación al círculo externo
        outerCircleRef.current.style.transform = `rotate(${rotationDegrees}deg)`;
      }
    };

    // Añade el evento de desplazamiento
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="logo-container" style={{ width, height }}>
      <img
        ref={outerCircleRef}
        src={outerCircle}
        alt="Outer Circle"
        className="logo-outer-circle"
        style={{ width: '100%', height: '100%' }}
      />
      <img
        src={logoText}
        alt="Logo Text"
        className="logo-text"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default CopyLogo;
