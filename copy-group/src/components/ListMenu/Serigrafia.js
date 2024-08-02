import React, { useEffect } from "react";
import GalleryImg from "../GalleryImg";
import ImgSerigrafia from "../DirImg/ImgSerigrafia";
import "../../styles/Body-routes.css";

const Serigrafia = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior
  }, []);

  return (
    <div className="body-routes">
      <div className='rutes-h1'></div>
      <h1>Serigrafía</h1>
      <GalleryImg imageUrls={ImgSerigrafia} />
    </div>
  );
};

export default Serigrafia;
