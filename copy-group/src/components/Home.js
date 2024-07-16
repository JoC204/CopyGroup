import React, { useEffect } from 'react';
import Slider from 'react-slick';
import ImageCarousel from '../components/ImageCarousel';
import LinkCard from '../components/LinkCard';
import "../styles/Home.css";
import "../styles/Body-routes.css";
import portadaHome from '../img/mesaPortada.png';
import video1 from '../img/copy-serigrafia.mp4';
import image1 from '../img/impresion-uno.jpg'; // Importa tus imágenes
import image2 from '../img/impresion-dos.jpg';
import image3 from '../img/calco-uno.jpg';
import image4 from '../img/calco-dos.jpg';
import image5 from '../img/ploteo-uno.jpg';
import image6 from '../img/ploteo-dos.jpg';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior
  }, []);

  const links = [
    { path: "/empresa", image: image1, altText: "Empresa", title: "Empresa" },
    { path: "/services", image: image2, altText: "Servicios", title: "Servicios" },
    { path: "/products", image: image3, altText: "Productos", title: "Productos" },
    { path: "/materials", image: image4, altText: "Materiales", title: "Materiales" },
    { path: "/contact", image: image5, altText: "Contacto", title: "Contacto" },
    { path: "/", image: image6, altText: "Otro", title: "Otro" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    fade: true,
  };

  return (
    <div className='home-container'>
      <Slider {...settings} className='img-portada'>
        <div>
          <img src={portadaHome} alt="Portada Home" className="carousel-image" />
        </div>
        <div>
          <video src={video1} autoPlay loop muted className="carousel-video"></video>
        </div>
      </Slider>
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
