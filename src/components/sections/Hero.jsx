// src/components/sections/Hero.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import mockupBanner from '../../assets/img/nuevo-mockups-banner-2.png';
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
      <section id="que-es-cognicise" className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-8 relative overflow-hidden">
        <div className="container mx-auto">
          {/* Reversed order on mobile, normal on desktop */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Content */}
            <div 
              data-aos="fade-right" 
              className="order-2 md:order2 w-full md:w-1/2 flex flex-col items-start gap-6"
            >
              <span className="text-primary font-bold tracking-wide uppercase text-sm md:text-base" id="alt-highlight-text">
                {t('hero.tagline')}
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-figtree">
                {t('hero.title')}
              </h1>

              <p className="text-accent text-base md:text-lg max-w-full break-words" id="main-subtitle">
                {t('hero.description')}
              </p>

              <div className="w-full space-y-4 md:space-y-6" id="button-demo-part">
                <button 
                  onClick={openModal}
                  className="w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-lg font-semibold 
                  hover:bg-primary/90 transition-all transform hover:scale-105 shadow-md text-center"
                  id="find-out-more-button"
                >
                  {t('hero.joinWaitlist')}
                </button>
                
                <div className="flex flex-wrap gap-3 text-sm text-accent">
                  <div className="flex items-center bg-primary/5 px-3 py-2 rounded-full">
                    <svg 
                      className="w-4 h-4 text-primary mr-2 flex-shrink-0" 
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
                    <span className="whitespace-nowrap">{t('hero.badges.earlyBird')}</span>
                  </div>
                  <div className="flex items-center bg-primary/5 px-3 py-2 rounded-full">
                    <svg 
                      className="w-4 h-4 text-primary mr-2 flex-shrink-0" 
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
                    <span className="whitespace-nowrap">{t('hero.badges.freeFeatures')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mockups - Order first on mobile, second on desktop */}
            <div 
              className="order-2 md:order-2 w-full md:w-1/2 flex justify-center" 
              data-aos="fade-left"
            >
              <div className="max-w-sm md:max-w-full mx-auto">
                <img 
                  src={mockupBanner} 
                  alt="Cognicise App" 
                  className="w-full h-auto object-contain img-hover mockup-img"
                />
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

export default Hero;