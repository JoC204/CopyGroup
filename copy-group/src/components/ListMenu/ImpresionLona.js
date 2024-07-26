import React, { useEffect } from 'react';
import ImgLonas from "../DirImg/ImgLonas";
import '../../styles/Body-routes.css';
import GalleryImg from '../GalleryImg';

const ImpresionLona
 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior
  }, []);

  return (
    <div>
      <h1>Impresion en Lonas</h1>
      <GalleryImg imageUrls={ImgLonas} />
    </div>
  );
};

export default ImpresionLona;
