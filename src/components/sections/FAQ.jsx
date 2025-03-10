import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faGift, 
  faMobileAlt, 
  faChevronDown,
  faInfoCircle,
  faCheckCircle,
  faEnvelope 
} from '@fortawesome/free-solid-svg-icons';
import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';

const FAQItem = ({ question, icon, children, index, activeIndex, setActiveIndex }) => {
  const isActive = activeIndex === index;
  
  // Mapeo de strings a iconos importados
  const iconMap = {
    'calendar-alt': faCalendarAlt,
    'gift': faGift,
    'mobile-alt': faMobileAlt,
    'info-circle': faInfoCircle,
    'check-circle': faCheckCircle,
  };
  
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-large shadow-custom hover:shadow-xl transition-all duration-long ease-custom-ease" data-aos="fade-up" data-aos-delay={index * 100}>
      <button 
        className="w-full px-4 sm:px-8 py-4 sm:py-6 text-left focus:outline-none"
        onClick={() => setActiveIndex(isActive ? null : index)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <FontAwesomeIcon icon={iconMap[icon]} className="text-primary" />
            </div>
            <span className="text-base sm:text-lg font-semibold text-secondary font-montserrat">{question}</span>
          </div>
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={`text-primary transition-transform duration-short ease-custom-ease ${isActive ? 'transform rotate-180' : ''}`}
          />
        </div>
        
        {isActive && (
          <div className="mt-4 text-accent">
            <div className="prose prose-sm max-w-none font-montserrat">
              {children}
            </div>
          </div>
        )}
      </button>
    </div>
  );
};

const FAQ = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);
  
  return (
    <section id="faq" className="py-16 sm:py-20 px-4 sm:px-8 relative overflow-hidden">
      <div className="container mx-auto px-0 sm:px-padding-small md:px-padding-big">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 section-text-div">
          <span className="highlight-badge inline-block text-primary font-semibold tracking-wide uppercase bg-primary/5 px-4 py-2 rounded-full mb-6" data-aos="fade-up">
            {t('faq.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-figtree text-secondary mb-6" data-aos="fade-up">
            {t('faq.title')}
          </h2>
          <p className="text-base sm:text-lg text-accent font-montserrat" data-aos="fade-up">
            {t('faq.description')}
          </p>
        </div>

        {/* Cambiamos el ancho máximo para acomodar 2 columnas */}
        <div className="max-w-5xl mx-auto">
          {/* FAQ Grid - Modificado para 2 columnas */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {/* Columna izquierda */}
            <div className="space-y-4 sm:space-y-6">
              {/* FAQ 1 */}
              <FAQItem 
                question={t('faq.questions.availability.question')}
                icon="calendar-alt"
                index={0}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                <p className="leading-relaxed">
                  {t('faq.questions.availability.answer')}
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm">
                  <FontAwesomeIcon icon={faInfoCircle} className="text-primary" />
                  <span className="text-primary">{t('faq.questions.availability.earlyAccess')}</span>
                </div>
              </FAQItem>

              {/* FAQ 2 */}
              <FAQItem 
                question={t('faq.questions.freeFeatures.question')}
                icon="gift"
                index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                <p className="leading-relaxed">
                  {t('faq.questions.freeFeatures.answer')}
                </p>
                <div className="bg-primary/5 rounded-xl p-4 mt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary" />
                    <span className="text-primary font-medium">{t('faq.questions.freeFeatures.guarantee')}</span>
                  </div>
                </div>
              </FAQItem>
            </div>

            {/* Columna derecha */}
            <div className="space-y-4 sm:space-y-6">
              {/* FAQ 3 */}
              <FAQItem 
                question={t('faq.questions.devices.question')}
                icon="mobile-alt"
                index={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                <p className="leading-relaxed">
                  {t('faq.questions.devices.answer')}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <FontAwesomeIcon icon={faAndroid} className="text-primary" />
                    <span>{t('faq.questions.devices.android')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FontAwesomeIcon icon={faApple} className="text-primary" />
                    <span>{t('faq.questions.devices.ios')}</span>
                  </div>
                </div>
              </FAQItem>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-10 sm:mt-12 text-center" data-aos="fade-up">
            <div className="bg-gradient-to-br from-primary/5 to-primary/5 rounded-large p-6 sm:p-8 shadow-custom">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-xl mx-auto mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-secondary mb-2 font-montserrat">
                {t('faq.notFoundAnswer.title')}
              </h4>
              <p className="text-accent mb-4 sm:mb-6 font-montserrat">
                {t('faq.notFoundAnswer.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;