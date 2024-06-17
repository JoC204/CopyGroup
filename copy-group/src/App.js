import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import router components
// import { Link } from './Links'; // Import Link for navigation
import NavBar from './components/NavBar';
import './styles/App.css';
// import PresentationImage from './components/PresentationImage';
import ImageCarousel from './components/ImageCarousel';
// import CopyLogo from './components/CopyLogo';
import GalleryEmpresa from './components/Galleries/GalleryEmpresa';
import GalleryServices from './components/Galleries/GalleryServices';

function App() {
  return (
    <Router>  {/* Wrap the app with Router */}
      <div className="App">
        <NavBar />
        <ImageCarousel/>
        <Routes>
          {/* <Route path="/" element={<CopyLogo />} />  Default route */}
          <Route path="/empresa" element={<GalleryEmpresa />} />  {/* Route for Empresa */}
          <Route path="/services" element={<GalleryServices />} />  {/* Route for Servicios */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
