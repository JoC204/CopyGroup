import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/ImageCarousel.css';

import image1 from '../img/imp-digitales/001.jpg';
import image2 from '../img/ImgLonas/002.jpg';
import image3 from '../img/imp-digitales/003.jpg';
import image4 from '../img/imp-digitales/005.jpg';
import image5 from '../img/Serigrafia/008.jpg';
import image6 from '../img/Serigrafia/009.jpg';
import image7 from '../img/Serigrafia/002.jpg';
import image8 from '../img/ImgLonas/016.jpg';
import image9 from '../img/ImgLonas/017.jpg';
import image10 from '../img/ImgLonas/018.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

const ImageCarousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(4); // Mobile: 4 images
      } else {
        setSlidesToShow(8); // Desktop: 8 images
      }
    };

    // Initialize the number of slides
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow, // Utilice el valor de estado para slidesToShow
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    cssEase: 'linear',
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
