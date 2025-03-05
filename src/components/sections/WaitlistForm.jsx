import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import WaitlistModal from '../modals/WaitlistModal';

const WaitlistForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section id="waitlist" className="py-20 bg-light-grey">
        <div className="container mx-auto px-padding-small md:px-padding-big">
          <div className="max-w-2xl mx-auto bg-white rounded-large shadow-custom p-8 md:p-12 overflow-hidden relative">
            {/* Fondo decorativo */}
            <div className="absolute -top-64 -right-20 w-60 h-60 bg-primary/5 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/5 rounded-full opacity-50 blur-3xl"></div>
            
            <div className="relative">
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 transform hover:scale-105 transition-all duration-short ease-custom-ease">
                  <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-primary text-3xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-figtree text-secondary mb-4">
                  Únete a nuestra lista de espera
                </h2>
                <p className="text-lg text-accent font-montserrat max-w-lg mx-auto">
                  Sé de los primeros en probar Cognicise cuando esté disponible. 
                  Te avisaremos cuando tengamos novedades.
                </p>
              </div>
              
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors duration-short ease-custom-ease"
                  onClick={openModal}
                >
                  Unirme a la lista de espera
                </motion.button>
                
                <div className="text-center text-sm text-accent mt-8 font-montserrat">
                  <p className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Al unirte, recibirás actualizaciones exclusivas sobre el lanzamiento
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modal Component */}
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default WaitlistForm;