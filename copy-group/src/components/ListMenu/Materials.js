import React, { useEffect } from 'react';
import GalleryImg from "../GalleryImg";
import ImgMaterials from "../DirImg/ImgMaterials";
import '../../styles/Materials.css';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior
  }, []);
  
  return (
    <div className='content'>
      <h1>Materiales</h1>
      <GalleryImg imageUrls={ImgMaterials} />
    </div>
  );
};

export default Services;
