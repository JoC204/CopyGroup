import React, { useEffect } from "react";
import ImageCarousel from "../components/ImageCarousel";
import FrontCarousel from "../components/ListMenu/FrontCarousel";
import LinkCard from "../components/LinkCard";
import "../styles/Home.css";
import "../styles/Body-routes.css";
import "../styles/ImageCarousel.css";
// import portadaHome from '../img/mesaPortada.png';
import image1 from "../img/links/empresa.jpg"; // Importa tus imágenes
import image2 from "../img/servicio.jpg";
import image3 from "../img/productos.jpg";
import image4 from "../img/calco-dos.jpg";
import image5 from "../img/ploteo-uno.jpg";
import image6 from "../img/ploteo-dos.jpg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior
  }, []);

  const links = [
    { path: "/empresa", image: image1, altText: "Empresa", title: "Empresa" },
    {
      path: "/digitalPrint",
      image: image2,
      altText: "Impresiones Digitales",
      title: "Impresiones Digitales",
    },
    {
      path: "/serigrafia",
      image: image3,
      altText: "Serigrafia",
      title: "Serigrafia",
    },
    {
      path: "/rotulados",
      image: image4,
      altText: "Rotulados",
      title: "Rotulados",
    },
    {
      path: "/impresionLona",
      image: image5,
      altText: "Impresiones en Lonas",
      title: "Impresiones en Lonas",
    },
    { path: "/contact", image: image6, altText: "Contacto", title: "Contacto" },
  ];

  return (
    <div className="home-container">
      <FrontCarousel />
      <ImageCarousel />
      <div className="link-cards-container">
        {links.map((link, index) => (
          <LinkCard
            key={index}
            path={link.path}
            title={link.title}
            image={link.image}
            altText={link.altText}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
