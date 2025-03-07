import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import WaitlistModal from '../modals/WaitlistModal';
import feature01 from '../../assets/img/feature01.png';
import feature02 from '../../assets/img/feature02.png';
import feature03 from '../../assets/img/feature03.png';

const MainFeaturesWithCTA = () => {
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
      <section id="funcionalidades" className="py-20 px-4 sm:px-8 bg-[#FDFCFF]">
        <div className="container mx-auto px-0 sm:px-padding-small md:px-padding-big">
          {/* Conexión Familiar */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 md:mb-32">
            <div className="order-2 md:order-1">
              <div className="highlight-badge">
                {t('mainFeatures.patientManagement.badge')}
              </div>
              <h2 className="section-title leading-tight">
                {t('mainFeatures.patientManagement.title')}
              </h2>
              <p className="text-lg text-accent mb-8 leading-relaxed">
                {t('mainFeatures.patientManagement.description')}
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-custom">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-2">
                        {t('mainFeatures.patientManagement.unifiedHistory.title')}
                      </h3>
                      <p className="text-accent">
                        {t('mainFeatures.patientManagement.unifiedHistory.description')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-custom">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-2">
                        {t('mainFeatures.patientManagement.performanceAnalysis.title')}
                      </h3>
                      <p className="text-accent">
                        {t('mainFeatures.patientManagement.performanceAnalysis.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative flex justify-center">
              <img 
                src={feature01} 
                alt="Comprehensive Patient Management" 
                className="w-full max-w-md mx-auto img-hover"
              />
              <div className="absolute bottom-4 right-4 sm:bottom-4 sm:right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-custom max-w-[180px]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-secondary">
                    {t('mainFeatures.patientManagement.badge1')}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
        
          {/* Seguimiento Inteligente */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 md:mb-32">
            <div className="flex justify-center">
              <img 
                src={feature02} 
                alt="Predictive Analysis" 
                className="w-full max-w-md mx-auto img-hover"
              />
            </div>
            <div>
              <div className="highlight-badge">
                {t('mainFeatures.predictiveAnalysis.badge')}
              </div>
              <h2 className="section-title leading-tight">
                {t('mainFeatures.predictiveAnalysis.title')}
              </h2>
              <p className="text-lg text-accent mb-8 leading-relaxed">
                {t('mainFeatures.predictiveAnalysis.description')}
              </p>
              <div className="bg-white rounded-xl p-6 shadow-custom mb-8">
                <h3 className="font-semibold text-secondary mb-4">
                  {t('mainFeatures.predictiveAnalysis.advancedPrediction.title')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">
                      {t('mainFeatures.predictiveAnalysis.advancedPrediction.earlyDetection')}
                    </div>
                    <p className="text-sm text-accent">
                      {t('mainFeatures.predictiveAnalysis.advancedPrediction.alertsDesc')}
                    </p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">
                      {t('mainFeatures.predictiveAnalysis.advancedPrediction.aiDiagnostic')}
                    </div>
                    <p className="text-sm text-accent">
                      {t('mainFeatures.predictiveAnalysis.advancedPrediction.modelingDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ejercitación Cognitiva */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="highlight-badge">
                {t('mainFeatures.cognitiveExercises.badge')}
              </div>
              <h2 className="section-title leading-tight">
                {t('mainFeatures.cognitiveExercises.title')}
              </h2>
              <p className="text-lg text-accent mb-8 leading-relaxed">
                {t('mainFeatures.cognitiveExercises.description')}
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-custom">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <p className="text-accent">
                    {t('mainFeatures.cognitiveExercises.uniqueExercises')}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-custom">
                  <div className="text-3xl font-bold text-primary mb-2">4</div>
                  <p className="text-accent">
                    {t('mainFeatures.cognitiveExercises.categories')}
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative flex justify-center">
              <img 
                src={feature03} 
                alt="Cognitive Exercises" 
                className="w-full max-w-md mx-auto img-hover"
              />
              <div className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-custom max-w-[180px]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-secondary">
                    {t('mainFeatures.cognitiveExercises.mobileApp')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Integrado debajo de MainFeatures */}
      <div className="py-10 bg-[#FDFCFF] px-4 sm:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
            <FontAwesomeIcon icon={faRocket} className="text-primary mr-2" />
            <span className="text-sm font-semibold text-primary font-montserrat">
              {t('mainFeatures.waitlistBadge')}
            </span>
          </div>
          
          <h2 className="text-4xl font-bold font-figtree text-secondary mb-4">
            {t('mainFeatures.waitlistTitle')}
          </h2>
          
          <p className="text-lg text-accent font-montserrat max-w-2xl mx-auto mb-12">
            {t('mainFeatures.waitlistDesc')}
          </p>
        </div>
        
        <section id="waitlist" className="px-0 sm:px-8 bg-[#FDFCFF]">
          <div className="container mx-auto px-0 sm:px-padding-small md:px-padding-big">
            <div className="max-w-4xl mx-auto">
              {/* Tarjeta simple */}
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2">
                  {/* Lado izquierdo */}
                  <div className="p-6 md:p-10 bg-primary/5">
                    <h3 className="text-xl font-bold font-figtree text-secondary mb-6">
                      {t('mainFeatures.earlyAdopters.title')}
                    </h3>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <span className="text-secondary font-montserrat">
                          {t('mainFeatures.earlyAdopters.allExercises')}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <span className="text-secondary font-montserrat">
                          {t('mainFeatures.earlyAdopters.prioritySupport')}
                        </span>
                      </li>
                    </ul>
                    
                    <div className="mt-8 pt-6 border-t border-primary/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-secondary font-montserrat">
                          {t('mainFeatures.earlyAdopters.availableSpots')}
                        </span>
                        <span className="text-sm font-medium text-primary font-montserrat">67%</span>
                      </div>
                      <div className="h-2 bg-white rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: '67%' }}></div>
                      </div>
                      <p className="text-xs text-accent mt-2 font-montserrat">
                        {t('mainFeatures.earlyAdopters.spotsRemaining', { spots: '67' })}
                      </p>
                    </div>
                  </div>
                  
                  {/* Lado derecho */}
                  <div className="p-6 md:p-10 flex flex-col justify-center">
                    <h3 className="text-xl font-bold font-figtree text-secondary mb-4">
                      {t('mainFeatures.reserveYourSpot.title')}
                    </h3>
                    
                    <p className="text-accent font-montserrat mb-6">
                      {t('mainFeatures.reserveYourSpot.description')}
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={openModal}
                      className="w-full bg-primary text-white px-6 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-md"
                    >
                      <span>{t('mainFeatures.reserveYourSpot.joinButton')}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                    
                    <div className="flex items-center justify-center gap-2 mt-8">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      <span className="text-xs text-accent font-montserrat">
                        {t('mainFeatures.reserveYourSpot.limitedSpots')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Modal Component */}
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal}/>
    </>
  );
};

export default MainFeaturesWithCTA;