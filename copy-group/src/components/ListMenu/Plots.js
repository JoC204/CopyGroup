import React, { useEffect } from 'react';
import GalleryImg from "../GalleryImg";
import ImgPlots from "../DirImg/ImgPlots";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior
  }, []);

  return (
    <div>
      <h1>Ploteos</h1>
      <p>This is Gallery plots</p>
      <GalleryImg imageUrls={ImgPlots} />
    </div>
  );
};

export default Services;
