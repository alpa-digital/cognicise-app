import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
import MetaHelmet from './components/MetaHelmet';

// Importar AOS para animaciones
import AOS from 'aos';
import 'aos/dist/aos.css';

// Componente principal de la página
const MainPage = () => {
  return (
    <>
      <MetaHelmet />
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductHero />
        <MainFeatures />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  // Obtener el idioma de la URL o del localStorage
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/en')) {
      i18n.changeLanguage('en');
    } else if (path.startsWith('/es')) {
      i18n.changeLanguage('es');
    }
  }, [i18n, window.location.pathname]);

  return (
    <Router>
      <div className="font-montserrat">
        <Routes>
          {/* Rutas con prefijo de idioma */}
          <Route path="/es/*" element={<MainPage />} />
          <Route path="/en/*" element={<MainPage />} />
          
          {/* Ruta por defecto - redirige a /es o /en según el idioma del navegador */}
          <Route path="*" element={<Navigate to={`/${i18n.language}`} replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;