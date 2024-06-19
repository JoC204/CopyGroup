import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import router components
// import { Link } from './Links'; // Import Link for navigation
// import PresentationImage from './components/PresentationImage';
// import CopyLogo from './components/CopyLogo';
import './styles/App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import GalleryEmpresa from './components/ListMenu/GalleryEmpresa';
import GalleryServices from './components/ListMenu/GalleryServices';
import Products from './components/ListMenu/Products';
import Materials from './components/ListMenu/Materials';
import Posters from './components/ListMenu/Posters';
import Plots from './components/ListMenu/Plots';
import Proyect from './components/ListMenu/Proyect';
import Contact from './components/ListMenu/Contact';

function App() {
  return (
    <Router>  {/* Wrap the app with Router */}
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />  Default route
          <Route path="/empresa" element={<GalleryEmpresa />} />  {/* Route for Empresa */}
          <Route path="/services" element={<GalleryServices />} />  {/* Route for Servicios */}
          <Route path="/products" element={<Products />} />  {/* Route for Servicios */}
          <Route path="/materials" element={<Materials />} />  {/* Route for Servicios */}
          <Route path="/posters" element={<Posters />} />  {/* Route for Servicios */}
          <Route path="/plots" element={<Plots />} />  {/* Route for Servicios */}
          <Route path="/proyect" element={<Proyect />} />  {/* Route for Servicios */}
          <Route path="/contact" element={<Contact />} />  {/* Route for Servicios */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
