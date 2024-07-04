/* eslint-disable jsx-a11y/img-redundant-alt */
// src/components/GalleryImg.js
import React from "react";
import LazyLoad from "react-lazyload";
import "../styles/GalleryImg.css"; // Importar estilos si es necesario

const GalleryImg = ({ imageUrls }) => {
  return (
    <div className="gallery">
      {imageUrls.map((image, index) => (
        <LazyLoad key={index} height={100} offset={100} once>
          <img src={image} alt={`Gallery Image ${index + 1}`} />
        </LazyLoad>
      ))}
    </div>
  );
};

export default GalleryImg;
