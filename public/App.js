// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Navbar = require('./components/Navbar');
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Features from './pages/Features';
import Services from './pages/Services';
import Team from './pages/Team';
import Testimonial from './pages/Testimonial';




const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
