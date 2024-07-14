import React, { useEffect } from 'react';
import ImgService from "../DirImg/ImgService";
// import '../../styles/Services.css';
import '../../styles/Body-routes.css';
import GalleryImg from '../GalleryImg';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior
  }, []);

  return (
    <div>
      <h1>Services</h1>
      <GalleryImg imageUrls={ImgService} />
    </div>
  );
};

export default Services;
