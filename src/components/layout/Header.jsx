// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/img/cognicise-logo.png';
import enflag from '../../assets/img/en-flag.png';
import esflag from '../../assets/img/es-flag.png'; // Asegúrate de tener esta imagen
import WaitlistModal from '../modals/WaitlistModal';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? '' : 'hidden';
  };

  const openModal = () => {
    setIsModalOpen(true);
    // Cerrar el menú móvil si está abierto
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const changeLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    
    // Actualizar la URL para reflejar el cambio de idioma
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(es|en)/, `/${newLang}`);
    window.history.pushState({}, '', newPath);
  };

  // Determina qué bandera mostrar según el idioma actual
  const currentFlag = i18n.language === 'es' ? enflag : esflag;
  const flagAlt = i18n.language === 'es' ? 'English version' : 'Versión en español';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="relative z-10 flex-shrink-0">
              <img 
                src={Logo} 
                alt="Cognicise" 
                className="h-8 md:h-10 object-contain" 
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={changeLanguage} 
                className="text-secondary hover:text-primary transition-colors flex items-center gap-2"
                aria-label={`Switch to ${i18n.language === 'es' ? 'English' : 'Spanish'}`}
              >
                <img 
                  src={currentFlag}
                  alt={flagAlt} 
                  className="w-6 h-4 rounded shadow-sm" 
                />
                <span>{t('header.englishVersion')}</span>
              </button>
              
              <button 
                onClick={openModal}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-sm hover:shadow-md"
              >
                {t('header.joinWaitlist')}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              type="button" 
              id="menu-toggle"
              className="lg:hidden relative z-[60] p-2 text-secondary hover:text-primary transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen 
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                }
              </svg>
            </button>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          id="mobile-menu" 
          className={`fixed inset-0 w-full min-h-screen bg-white transition-transform duration-300 lg:hidden z-50 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ minHeight: '100vh' }}
        >
          <div className="relative h-full flex flex-col">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <img 
                src={Logo}
                alt="Cognicise" 
                className="h-8" 
              />
              <button 
                type="button"
                className="p-2 text-secondary hover:text-primary transition-colors"
                onClick={toggleMenu}
                aria-label="Cerrar menu"
              >
                
              </button>
            </div>

            {/* Mobile Menu Links */}
            <nav className="flex-1 px-4 py-6 overflow-y-auto">
              <div className="flex flex-col space-y-6">
                <button 
                  onClick={() => {
                    changeLanguage();
                    toggleMenu();
                  }} 
                  className="flex items-center gap-3 py-2 text-lg font-medium text-secondary hover:text-primary transition-colors"
                >
                  <img 
                    src={currentFlag}
                    alt={flagAlt} 
                    className="w-6 h-4 rounded shadow-sm" 
                  />
                  <span>{t('header.englishVersion')}</span>
                </button>
                
                <a href="#que-es-cognicise" 
                   onClick={toggleMenu}
                   className="py-2 text-lg font-medium text-secondary hover:text-primary transition-colors">
                  {t('footer.whatIs')}
                </a>
                
                <a href="#funcionalidades" 
                   onClick={toggleMenu}
                   className="py-2 text-lg font-medium text-secondary hover:text-primary transition-colors">
                  {t('footer.features')}
                </a>
                
                <a href="#faq" 
                   onClick={toggleMenu}
                   className="py-2 text-lg font-medium text-secondary hover:text-primary transition-colors">
                  {t('footer.faq')}
                </a>
              </div>

              {/* CTA Mobile */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <button 
                  onClick={() => {
                    openModal();
                    toggleMenu();
                  }}
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg text-center font-medium hover:bg-primary/90 transition-all shadow-sm"
                >
                  {t('header.joinWaitlist')}
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Modal Component */}
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;