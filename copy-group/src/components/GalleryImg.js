/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import "../styles/GalleryImg.css"; // Importar estilos

const GalleryImg = ({ imageUrls }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const openFullscreen = (index) => {
    setCurrentImageIndex(index);
    setIsFullscreen(true);
    setIsZoomed(false); // Reiniciar el estado de zoom
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setCurrentImageIndex(null);
    setIsZoomed(false); // Reiniciar el estado de zoom
  };

  const toggleZoom = (e) => {
    e.stopPropagation(); // Evita cerrar el modal al hacer clic en la imagen
    setIsZoomed(!isZoomed);
  };

  const showNextImage = (e) => {
    e.stopPropagation(); // Evita cerrar el modal al hacer clic en los botones
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    setIsZoomed(false); // Reiniciar el estado de zoom al cambiar de imagen
  };

  const showPreviousImage = (e) => {
    e.stopPropagation(); // Evita cerrar el modal al hacer clic en los botones
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
    setIsZoomed(false); // Reiniciar el estado de zoom al cambiar de imagen
  };

  return (
    <div className="gallery">
      {imageUrls.map((image, index) => (
        <LazyLoad key={index} height={100} offset={100} once>
          <img
            src={image}
            alt={`Gallery Image ${index + 1}`}
            onClick={() => openFullscreen(index)}
            className="gallery-image"
          />
        </LazyLoad>
      ))}

      {isFullscreen && currentImageIndex !== null && (
        <div className="fullscreen-view" onClick={closeFullscreen}>
          <button className="close-button" onClick={closeFullscreen}>
            &times;
          </button>
          <button className="prev-button" onClick={showPreviousImage}>
            &lt;
          </button>
          <img
            src={imageUrls[currentImageIndex]}
            alt={`Gallery Image ${currentImageIndex + 1}`}
            className={`fullscreen-image ${isZoomed ? "zoomed" : ""}`}
            onClick={toggleZoom}
          />
          <button className="next-button" onClick={showNextImage}>
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryImg;
