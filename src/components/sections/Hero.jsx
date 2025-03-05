import React, { useState } from 'react';
import mockupBanner from '../../assets/img/nuevo-mockups-banner-2.png';
import greenLine from '../../assets/img/green-line.png';
import WaitlistModal from '../modals/WaitlistModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section id="que-es-cognicise" className="pt-32 pb-20 px-8 relative overflow-hidden">
        <div className="container mx-auto px-padding-small md:px-padding-big">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contenido izquierdo */}
            <div data-aos="fade-right" className="section-text-div flex flex-col items-start gap-8">
              <span className="text-primary font-bold tracking-wide uppercase font-montserrat font-subtitles" id="alt-highlight-text">
                VISIÓN PREDICTIVA PARA EL CUIDADO NEURODEGENERATIVO
              </span>

              <h1>
                Cuidado cognitivo y monitorización impulsadas por IA
              </h1>

              <p className="text-accent text-lg mb-0 max-w-4/5" id="main-subtitle">
              Para el especialista, cada pequeño detalle cuenta. 
              Nuestra plataforma captura estos detalles a través de la ejercitación diaria, proporcionando a los especialistas 
              insights clínicos impulsados por IA que transforman diagnósticos y refinan tratamientos.

              </p>

              <div className="space-y-6 w-full" id="button-demo-part">
                <div className="flex flex-col">
                  <button 
                    onClick={openModal}
                    className="primary-button text-center" 
                    id="find-out-more-button"
                  >
                    Únete a la lista de espera
                  </button>
                  
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-accent">
                  <div className="flex items-center bg-primary/5 px-4 py-2 rounded-full">
                    <svg 
                      className="w-5 h-5 text-primary mr-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Early Bird - Acceso Beta
                  </div>
                  <div className="flex items-center bg-primary/5 px-4 py-2 rounded-full">
                    <svg 
                      className="w-5 h-5 text-primary mr-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Funcionalidades básicas gratuitas
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido derecho - Mockups */}
            <div className="relative img-div" data-aos="fade-left">
              <img 
                src={mockupBanner} 
                alt="Cognicise App" 
                className="w-full max-w-xl mx-auto img-hover mockup-img"
              />
              
              {/* Meta Badge 
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-custom hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg 
                      className="w-6 h-6 text-primary" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Meta Inicial</div>
                    <div className="text-xl font-bold text-primary">6.500€</div>
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Modal Component */}
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Hero;