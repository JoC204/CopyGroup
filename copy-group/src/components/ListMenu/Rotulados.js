import React, { useEffect } from 'react';
import GalleryImg from "../GalleryImg";
import ImgRotulados from "../DirImg/ImgRotulados";
// import '../../styles/Plots.css';
import '../../styles/Body-routes.css';

const Rotulados = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior
  }, []);

  return (
    <div className="body-routes">
      <h1>Rotulados</h1>
      <GalleryImg imageUrls={ImgRotulados} />
    </div>
  );
};

export default Rotulados;
