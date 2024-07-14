import React, { useEffect } from 'react';
import GalleryImg from "../GalleryImg";
import ImgPlots from "../DirImg/ImgPlots";
import '../../styles/Plots.css';
import '../../styles/Body-routes.css';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior
  }, []);

  return (
    <div className="body-routes">
      <h1>Ploteos</h1>
      <GalleryImg imageUrls={ImgPlots} />
    </div>
  );
};

export default Services;
