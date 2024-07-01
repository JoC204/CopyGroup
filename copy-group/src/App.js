import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import router components
// import { Link } from './Links'; // Import Link for navigation
// import PresentationImage from './components/PresentationImage';
// import CopyLogo from './components/CopyLogo';
import './styles/App.css';
import './styles/Body-routes.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import GalleryEmpresa from './components/ListMenu/Empresa';
import GalleryServices from './components/ListMenu/GalleryServices';
import Products from './components/ListMenu/Products';
import Materials from './components/ListMenu/Materials';
import Posters from './components/ListMenu/Posters';
import Plots from './components/ListMenu/Plots';
import Proyect from './components/ListMenu/Proyect';
import Contact from './components/ListMenu/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>  {/* Wrap the app with Router */}
      <div className="App">
        <NavBar />
        <div className='Body-routes'>
          <Routes>
            <Route path="/" element={<Home />} />  Default route
            <Route path="/empresa" element={<GalleryEmpresa />} />
            <Route path="/services" element={<GalleryServices />} />
            <Route path="/products" element={<Products />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/posters" element={<Posters />} />
            <Route path="/plots" element={<Plots />} />
            <Route path="/proyect" element={<Proyect />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
