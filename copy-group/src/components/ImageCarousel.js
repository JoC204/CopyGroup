// src/components/ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/ImageCarousel.css';

import image1 from '../img/1.jpg';
import image2 from '../img/2.jpg';
import image3 from '../img/3.jpg';
import image4 from '../img/4.jpg';
import image5 from '../img/5.jpg';
import image6 from '../img/6.jpg';
import image7 from '../img/calco-uno.jpg';
import image8 from '../img/calco-dos.jpg';
import image9 from '../img/ploteo-uno.jpg';
import image10 from '../img/impresion-uno.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

const ImageCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4, // Cantidad de imagenes en pantalla
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    // fade: true,
    ltl: true, // Desplazamiento de derecha a izquierda
    arrows: true,
    pauseOnHover: false, // Desactiva pausa al pasar el cursor
    pauseOnFocus: false, // Desactiva pausa al enfocar el carrusel
    pauseOnDotsHover: false, // Desactiva pausa al pasar el cursor sobre los puntos de navegación
    cssEase: "linear"
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
