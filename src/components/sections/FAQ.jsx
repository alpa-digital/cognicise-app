import React, { useState } from 'react';
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
        className="w-full px-8 py-6 text-left focus:outline-none"
        onClick={() => setActiveIndex(isActive ? null : index)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <FontAwesomeIcon icon={iconMap[icon]} className="text-primary" />
            </div>
            <span className="text-lg font-semibold text-secondary font-montserrat">{question}</span>
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
  const [activeIndex, setActiveIndex] = useState(null);
  
  return (
    <section id="faq" className="py-20 px-8 relative overflow-hidden">
      <div className="container mx-auto px-padding-small md:px-padding-big">
        <div className="max-w-3xl mx-auto text-center mb-16 section-text-div">
          <span className="highlight-badge inline-block text-primary font-semibold tracking-wide uppercase bg-primary/5 px-4 py-2 rounded-full mb-6" data-aos="fade-up">
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-figtree text-secondary mb-6" data-aos="fade-up">
            ¿Tienes dudas sobre Cognicise?
          </h2>
          <p className="text-lg text-accent font-montserrat" data-aos="fade-up">
            Encuentra respuestas a las preguntas más comunes sobre nuestro proyecto
          </p>
        </div>

        {/* Cambiamos el ancho máximo para acomodar 2 columnas */}
        <div className="max-w-5xl mx-auto">
          {/* FAQ Grid - Modificado para 2 columnas */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Columna izquierda */}
            <div className="space-y-6">
              {/* FAQ 1 */}
              <FAQItem 
                question="¿Cuándo estará disponible Cognicise?" 
                icon="calendar-alt"
                index={0}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                <p className="leading-relaxed">
                  Planeamos lanzar Cognicise en mayo de 2025, tras completar todas las fases de desarrollo y pruebas. Los mecenas Early Bird tendrán acceso anticipado durante la fase de pruebas en abril.
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm">
                  <FontAwesomeIcon icon={faInfoCircle} className="text-primary" />
                  <span className="text-primary">Early Bird: Acceso Beta en Abril 2025</span>
                </div>
              </FAQItem>

              {/* FAQ 2 */}
              <FAQItem 
                question="¿Las funciones básicas serán siempre gratuitas?" 
                icon="gift"
                index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                <p className="leading-relaxed">
                  Sí, las funcionalidades básicas de ejercitación, recordatorios y contacto con familiares siempre estarán disponibles de forma gratuita. Nuestro compromiso es mantener el cuidado cognitivo accesible para todos.
                </p>
                <div className="bg-primary/5 rounded-xl p-4 mt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary" />
                    <span className="text-primary font-medium">Funcionalidades básicas garantizadas</span>
                  </div>
                </div>
              </FAQItem>
            </div>

            {/* Columna derecha */}
            <div className="space-y-6">
              {/* FAQ 3 */}
              <FAQItem 
                question="¿En qué dispositivos estará disponible?" 
                icon="mobile-alt"
                index={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              >
                <p className="leading-relaxed">
                  Cognicise estará disponible inicialmente para dispositivos iOS y Android. Además, los usuarios Premium tendrán acceso a nuestra plataforma web para una experiencia completa desde cualquier dispositivo.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <FontAwesomeIcon icon={faAndroid} className="text-primary" />
                    <span>Android</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FontAwesomeIcon icon={faApple} className="text-primary" />
                    <span>iOS</span>
                  </div>
                </div>
              </FAQItem>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center" data-aos="fade-up">
            <div className="bg-gradient-to-br from-primary/5 to-primary/5 rounded-large p-8 shadow-custom">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mx-auto mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-secondary mb-2 font-montserrat">¿No encuentras tu respuesta?</h4>
              <p className="text-accent mb-6 font-montserrat">Escríbenos y te responderemos lo antes posible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;