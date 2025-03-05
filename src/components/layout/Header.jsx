import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/cognicise-logo.png';
import enflag from '../../assets/img/en-flag.png';
import WaitlistModal from '../modals/WaitlistModal';

const Header = () => {
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

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-sm border-b border-gray-100' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <img 
                src={Logo} 
                alt="Cognicise" 
                className="h-8 md:h-10 object-contain" 
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/en" className="text-secondary hover:text-[#00C29D] transition-colors flex items-center gap-2">
                <img 
                  src={enflag}
                  alt="English version" 
                  className="w-6 h-4 rounded shadow-sm" 
                />
              </Link>
              {/*<Link to="#que-es-cognicise" className="text-secondary hover:text-[#00C29D] transition-colors">
                ¿Qué es Cognicise?
              </Link>
              <Link to="#funcionalidades" className="text-secondary hover:text-[#00C29D] transition-colors">
                Funcionalidades
              </Link>*/}
              
              <button 
                onClick={openModal}
                className="bg-[#00C29D] text-white px-6 py-2 rounded-lg hover:bg-[#00C29D]/90 transition-all transform hover:scale-105"
              >
                Únete a la waitlist
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              type="button" 
              id="menu-toggle"
              className="lg:hidden relative z-[60] p-2 text-secondary hover:text-[#00C29D] transition-colors"
              aria-label="Menu"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
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
          style={{ minHeight: '100vh', background: 'white !important' }}
        >
          <div className="relative h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6">
              <img 
                src={Logo}
                alt="Cognicise" 
                className="h-8" 
              />
              <button 
                type="button"
                className="p-2 text-secondary hover:text-[#00C29D] transition-colors"
                onClick={toggleMenu}
                aria-label="Cerrar menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Mobile Menu Links */}
            <nav className="px-6 py-8">
              <div className="flex flex-col space-y-6">
                <Link 
                  to="/en" 
                  className="text-xl font-medium text-secondary hover:text-[#00C29D] transition-colors flex items-center gap-2"
                  onClick={toggleMenu}
                >
                  <img 
                    src={enflag}
                    alt="English version" 
                    className="w-6 h-4 rounded shadow-sm" 
                  />
                  English version
                </Link>
                {/*<Link 
                  to="#que-es-cognicise" 
                  className="text-xl font-medium text-secondary hover:text-[#00C29D] transition-colors"
                  onClick={toggleMenu}
                >
                  ¿Qué es Cognicise?
                </Link>
                <Link 
                  to="#funcionalidades" 
                  className="text-xl font-medium text-secondary hover:text-[#00C29D] transition-colors"
                  onClick={toggleMenu}
                >
                  Funcionalidades
                </Link>*/}
              </div>

              {/* CTA Mobile */}
              <div className="mt-8">
                <button 
                  onClick={openModal}
                  className="block w-full bg-[#00C29D] text-white px-6 py-3 rounded-lg text-center font-medium hover:bg-[#00C29D]/90 transition-all"
                >
                  Únete a la waitlist
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