import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import "../styles/Home.css"
import portadaHome from '../img/portada.png';

const Home = () => {
  return (
    <div className='style'>
      <ImageCarousel />
      <img className='img-portada' src={portadaHome} alt="Portada Home" />
      <h1>Welcome to Copy Group</h1>
      <p>This is the home page.</p>
    </div>
  );
};

export default Home;