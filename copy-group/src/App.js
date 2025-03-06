import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import "./styles/Body-routes.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Empresa from "./components/ListMenu/Empresa";
import DigitalPrint from "./components/ListMenu/DigitalPrint";
import Serigrafia from "./components/ListMenu/Serigrafia";
import Contact from "./components/ListMenu/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

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
            <Route path="/serigrafia" element={<Serigrafia />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
