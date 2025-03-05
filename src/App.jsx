import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Functionalities from './components/sections/Functionalities';
import ProductHero from './components/sections/ProductHero';
import MainFeatures from './components/sections/MainFeatures';
import FAQ from './components/sections/FAQ';
import WaitlistForm from './components/sections/WaitlistForm';
import Contact from './components/sections/Contact';
import CTASection from './components/sections/CTASection';

// Importar AOS para animaciones
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <Router>
      <div className="font-montserrat">
        <Header />
        
        <main>
          <Hero />
          <Features />
          <ProductHero />
          <MainFeatures />
          <FAQ />
          
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;