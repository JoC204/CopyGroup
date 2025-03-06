import React, { useEffect, useState } from "react";
import whatsappIcon from "../img/whatsApp.png";
import "../styles/WhatsAppButton.css";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector("footer"); 
    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <a
      href="https://wa.me/+5493418395937?text=Hola%2C%20te%20contacto%20desde%20la%20web%20de%20CopyGroup%0A%0A%20--"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...styles.container,
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? "blur(0px)" : "blur(10px)",
        pointerEvents: isVisible ? "auto" : "none", // Evita que se pueda hacer clic cuando está oculto
      }}
    >
      <img className="wtsDos" src={whatsappIcon} alt="WhatsApp" style={styles.icon} />
    </a>
  );
};

const styles = {
  container: {
    position: "fixed",
    bottom: "20px",
    right: "30px",
    zIndex: 1000,
    backgroundColor: "transparent",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "opacity 0.5s ease, filter 0.5s ease", // Suaviza el efecto
  },
  icon: {
    width: "50px",
    height: "50px",
  },
};

const mobileStyles = `
  @media (max-width: 768px) {
    .wtsDos {
      width: 40px !important;
      height: 40px !important;
      
    }
     
  }
`;

// Agregar los estilos al documento
const styleTag = document.createElement("style");
styleTag.innerHTML = mobileStyles;
document.head.appendChild(styleTag);

export default WhatsAppButton;
