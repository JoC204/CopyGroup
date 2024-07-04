import React from "react";
import GalleryImg from "../GalleryImg";
import ImgMaterials from "../DirImg/ImgMaterials";

const Services = () => {
  return (
    <div>
      <h1>Materiales</h1>
      <p>This is Gallery materials</p>
      <GalleryImg imageUrls={ImgMaterials} />
    </div>
  );
};

export default Services;
