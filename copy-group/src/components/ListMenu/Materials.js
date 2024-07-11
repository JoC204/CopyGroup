import React, { useEffect } from 'react';
import GalleryImg from "../GalleryImg";
import ImgMaterials from "../DirImg/ImgMaterials";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior
  }, []);
  
  return (
    <div>
      <h1>Materiales</h1>
      <p>This is Gallery materials</p>
      <GalleryImg imageUrls={ImgMaterials} />
    </div>
  );
};

export default Services;
