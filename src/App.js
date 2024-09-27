import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from '../src/pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Hero from './components/Header';
// import Header from './components/Header';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/hero" element={<Header />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
