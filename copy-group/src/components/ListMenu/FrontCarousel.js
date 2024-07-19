// src/components/ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/FrontCarousel.css';

import image1 from '../../img/mesaPortada.png';
import video1 from '../../img/copy-serigrafia.mp4';



const FrontCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Slide 0" className="carousel-image" />
        </div>
        <div>
          <video
            src={video1}
            alt="Slide 1"
            className="carousel-video"
            autoPlay
            loop
            muted
            style={{ width: '100%' }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default FrontCarousel;
