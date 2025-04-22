import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/FrontCarousel.css";

import image1 from "../../img/mesaPortada.png";
import video1 from "../../img/copy-serigrafia.mp4";

const FrontCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 14000, // 14 segundos
    fade: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
  };

  return (
    <div className="carousel-container-front">
      <Slider {...settings}>
        <div className="slide">
          <img src={image1} alt="Slide 0" className="carousel-image" />
          <div className="carousel-text">Incorporamos la <td><span className="big-letter">JXF-200-2513</span></td></div>
          <div className="carousel-text-1">Mejor calidad de impresión y mayor superficie</div>
          <RouterLink to="/contact">
          <div className="carousel-text-2">Contáctanos para más información</div>
          </RouterLink>
        </div>

        <div className="slide">
          <video
            src={video1}
            alt="Slide 1"
            className="carousel-video"
            autoPlay
            loop
            muted
            style={{ width: "100%" }}
          />
          <div className="carousel-text-3">
            Más de 30 años de experiencia <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;en serigrafía de alta calidad.</td>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default FrontCarousel;
