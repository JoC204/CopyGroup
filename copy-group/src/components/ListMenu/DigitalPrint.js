import React, { useEffect } from 'react';
import ImgDigital from "../DirImg/ImgDigital";
// import '../../styles/Services.css';
import '../../styles/Body-routes.css';
import GalleryImg from '../GalleryImg';

const DigitalPrint
 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior
  }, []);

  return (
    <div>
      <h1>Impresiones Digitales</h1>
      <GalleryImg imageUrls={ImgDigital} />
    </div>
  );
};

export default DigitalPrint;
