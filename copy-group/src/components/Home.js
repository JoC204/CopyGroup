import React, { useEffect } from "react";
import ImageCarousel from "../components/ImageCarousel";
import FrontCarousel from "../components/ListMenu/FrontCarousel";
import LinkCard from "../components/LinkCard";
import "../styles/Home.css";
import "../styles/Body-routes.css";
import "../styles/ImageCarousel.css";


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior
  }, []);

  

  const links = [
    { path: "/empresa", 
      color: "blue",
      title: "Empresa" },
    {
      path: "/digitalPrint",
      color: "purple",
      title: "Impresiones Digitales",
    },
    {
      path: "/serigrafia",
      color: "red",
      title: "Serigrafia",
    },
    {
      path: "/rotulados",
      color: "green",
      title: "Rotulados",
    },
    {
      path: "/impresionLona",
      color: "black",
      title: "Impresiones en Lonas",
    },
    { path: "/contact", 
      color: "yellow", 
      title: "Contacto" },
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
            color={link.color}
            altText={link.altText}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
