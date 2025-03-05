import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import WaitlistModal from '../modals/WaitlistModal';

const ImprovedSimplifiedCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section id="waitlist" className="py-24 relative bg-light-grey">
        <div className="container mx-auto px-padding-small md:px-padding-big">
          <div className="max-w-4xl mx-auto">
            {/* Encabezado simple */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
                <FontAwesomeIcon icon={faRocket} className="text-primary mr-2" />
                <span className="text-sm font-semibold text-primary font-montserrat">Lanzamiento Mayo 2025</span>
              </div>
              
              <h2 className="text-4xl font-bold font-figtree text-secondary mb-4">
                Únete a nuestra lista de espera
              </h2>
              
              <p className="text-lg text-accent font-montserrat max-w-2xl mx-auto">
                Sé de los primeros en acceder a nuestra plataforma de monitorización cognitiva impulsada por IA
              </p>
            </div>
            
            {/* Tarjeta simple */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Lado izquierdo */}
                <div className="p-8 md:p-10 bg-primary/5">
                  <h3 className="text-xl font-bold font-figtree text-secondary mb-6">
                    Beneficios para Early Adopters
                  </h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-secondary font-montserrat">Acceso prioritario a versión beta</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-secondary font-montserrat">Funcionalidades premium gratuitas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-secondary font-montserrat">Acceso a todos los ejercicios cognitivos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-secondary font-montserrat">Soporte prioritario para especialistas</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8 pt-6 border-t border-primary/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-secondary font-montserrat">Cupos disponibles para early adopters</span>
                      <span className="text-sm font-medium text-primary font-montserrat">67%</span>
                    </div>
                    <div className="h-2 bg-white rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '67%' }}></div>
                    </div>
                    <p className="text-xs text-accent mt-2 font-montserrat">
                      Quedan <span className="font-semibold">67 de 100</span> plazas disponibles
                    </p>
                  </div>
                </div>
                
                {/* Lado derecho */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-xl font-bold font-figtree text-secondary mb-4">
                    Reserva tu plaza ahora
                  </h3>
                  
                  <p className="text-accent font-montserrat mb-6">
                    Completa nuestro breve formulario para unirte a la lista de espera y asegurar tu acceso prioritario.
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={openModal}
                    className="w-full bg-primary text-white px-6 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Unirme a la lista de espera</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                  
                  <div className="flex items-center justify-center gap-2 mt-8">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-xs text-accent font-montserrat">Plazas limitadas · Lanzamiento Mayo 2025</span>
                  </div>
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

export default ImprovedSimplifiedCTA;