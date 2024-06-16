import React from 'react';
import NavBar from './components/NavBar';
import './styles/App.css';
// import PresentationImage from './components/PresentationImage';
import ImageCarousel from './components/ImageCarousel';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <PresentationImage /> */}
      <ImageCarousel />
    </div>
  );
}

export default App;
