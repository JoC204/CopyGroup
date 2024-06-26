import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import "../styles/Home.css"
import portadaHome from '../img/mesaPortada.png';

const Home = () => {
  return (
    <div className='style'>
      <img className='img-portada' src={portadaHome} alt="Portada Home" />
      <ImageCarousel />
      <h1>Welcome to Copy Group</h1>
      <p>This is the home page.</p>
    </div>
  );
};

export default Home;