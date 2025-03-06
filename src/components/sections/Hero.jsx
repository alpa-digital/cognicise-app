import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import mockupBanner from '../../assets/img/nuevo-mockups-banner-2.png';
import greenLine from '../../assets/img/green-line.png';
import WaitlistModal from '../modals/WaitlistModal';

const Hero = () => {
  const { t } = useTranslation();
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
                {t('hero.tagline')}
              </span>

              <h1 className="text-6xl md:text-6xl lg:text-6xl font-bold font-figtree">
                {t('hero.title')}
              </h1>

              <p className="text-accent text-lg mb-0 max-w-4/5" id="main-subtitle">
                {t('hero.description')}
              </p>

              <div className="space-y-6 w-full" id="button-demo-part">
                <div className="flex flex-col">
                  <button 
                    onClick={openModal}
                    className="primary-button text-center" 
                    id="find-out-more-button"
                  >
                    {t('hero.joinWaitlist')}
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
                    {t('hero.badges.earlyBird')}
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
                    {t('hero.badges.freeFeatures')}
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