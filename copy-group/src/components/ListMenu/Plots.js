import React from "react";
import GalleryImg from "../GalleryImg";
import ImgPlots from "../DirImg/ImgPlots";

const Services = () => {
  return (
    <div>
      <h1>Ploteos</h1>
      <p>This is Gallery plots</p>
      <GalleryImg imageUrls={ImgPlots} />
    </div>
  );
};

export default Services;
