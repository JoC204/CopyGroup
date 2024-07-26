import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import router components
// import { Link } from './Links'; // Import Link for navigation
// import PresentationImage from './components/PresentationImage';
// import CopyLogo from './components/CopyLogo';
import "./styles/App.css";
import "./styles/Body-routes.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Empresa from "./components/ListMenu/Empresa";
import DigitalPrint from "./components/ListMenu/DigitalPrint";
import Products from "./components/ListMenu/Products";
import Serigrafia from "./components/ListMenu/Serigrafia";
import Rotulados from "./components/ListMenu/Rotulados";
import ImpresionLona from "./components/ListMenu/ImpresionLona";
import Contact from "./components/ListMenu/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap the app with Router */}
      <div className="App">
        <NavBar />
        <div className="Body-routes">
          <Routes>
            <Route path="/" element={<Home />} /> Default route
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/digitalPrint" element={<DigitalPrint />} />
            <Route path="/products" element={<Products />} />
            <Route path="/serigrafia" element={<Serigrafia />} />
            <Route path="/rotulados" element={<Rotulados />} />
            <Route path="/impresionLona" element={<ImpresionLona />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
