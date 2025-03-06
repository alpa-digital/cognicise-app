import React from 'react';
import { useTranslation } from 'react-i18next';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-large shadow-custom hover:scale-105 transition-all duration-long ease-custom-ease service">
    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 service-icon">
      {icon}
    </div>
    <div className="services-text">
      <h3 className="text-xl font-semibold mb-4 text-secondary service-titles">{title}</h3>
      <p className="text-accent">{description}</p>
    </div>
  </div>
);

const Features = () => {
  const { t } = useTranslation();
  
  return (
    <section id="que-es" className="py-10 px-8  bg-[#FDFCFF]" id="second-section">
      <div className="container mx-auto px-padding-small md:px-padding-big">
        <div className="grid md:grid-cols-3 gap-8 section-content">
          {/* Análisis Predictivo */}
          <FeatureCard
            icon={
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            }
            title={t('features.predictiveAnalysis.title')}
            description={t('features.predictiveAnalysis.description')}
          />

          {/* Detección Precoz */}
          <FeatureCard
            icon={
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            title={t('features.earlyDetection.title')}
            description={t('features.earlyDetection.description')}
          />

          {/* Ecosistema Conectado */}
          <FeatureCard
            icon={
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
            title={t('features.connectedEcosystem.title')}
            description={t('features.connectedEcosystem.description')}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;