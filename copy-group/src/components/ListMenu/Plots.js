import React, { useState, useEffect } from 'react';
// import GalleryItem from '../GalleryItem';
import ImgPlots from '../Images/ImgPlots';
import ImageGallery from '../ImageGallery';

const Plots = () => {
  const [imagesToLoad, setImagesToLoad] = useState([]);

  useEffect(() => {
    setImagesToLoad(ImgPlots);
  }, []);

  return (
    <div>
      <p>Img</p>
      <ImageGallery title="Galería de Plots" images={imagesToLoad} />
    </div>
  );
};

export default Plots;
