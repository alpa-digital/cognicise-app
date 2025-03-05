import React from 'react';
import feature01 from '../../assets/img/feature01.png';
import feature02 from '../../assets/img/feature02.png';
import feature03 from '../../assets/img/feature03.png';

const MainFeatures = () => {
  return (
    <section id="funcionalidades" className="py-20 px-8 bg-light-grey">
      <div className="container mx-auto px-padding-small md:px-padding-big">
        {/* Conexión Familiar */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 md:order-1">
            <div className="highlight-badge">
              GESTIÓN INTEGRAL DEL PACIENTE
            </div>
            <h2 className="section-title leading-tight">
              Visión 360° del paciente para optimizar el seguimiento
            </h2>
            <p className="text-lg text-accent mb-8 leading-relaxed">
            Cognicise centraliza el expediente completo del paciente en un entorno digital. Desde ejercitación hasta diagnósticos y evolución, toda la información está organizada para facilitar análisis detallados y decisiones basadas en datos completos.
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
              <h3 className="font-semibold text-secondary mb-2">Historial Clínico Unificado</h3>
              <p className="text-accent">Integración de diagnósticos, tratamientos, resultados de ejercitación y notas clínicas en un expediente digital completo y accesible.</p>
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
              <h3 className="font-semibold text-secondary mb-2">Análisis de Rendimiento</h3>
              <p className="text-accent">Visualización de métricas clave sobre adherencia, evolución y áreas de oportunidad basadas en los datos de ejercitación del paciente.</p>
              </div>
              </div>
              </div>
              </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <img 
              src={feature01} 
              alt="Conexión Familiar" 
              className="w-full max-w-lg mx-auto img-hover"
            />
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-custom">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-secondary">Panel analítico integral</span>
              </div>
            </div>
          </div>
        </div>
        
      
        {/* Seguimiento Inteligente */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <img 
              src={feature02} 
              alt="Seguimiento y Análisis" 
              className="max-w-lg mx-auto img-hover"
            />
          </div>
          <div>
            <div className="highlight-badge">
              PREDICCIÓN COGNITIVA IMPULSADA POR IA
            </div>
            <h2 className="section-title leading-tight">
              Análisis predictivo que alerta y anticipa cambios cognitivos
            </h2>
            <p className="text-lg text-accent mb-8 leading-relaxed">
            Identifica patrones imperceptibles, detecta anomalías semanas antes de manifestarse clínicamente y obtén proyecciones personalizadas que te permiten intervenir en el momento óptimo para maximizar la efectividad terapéutica.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-custom mb-8">
              <h3 className="font-semibold text-secondary mb-4">Predicción Clínica Avanzada</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">Detección Temprana</div>
                  <p className="text-sm text-accent">Alertas predictivas automáticas</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">IA Diagnóstica</div>
                  <p className="text-sm text-accent">Modelado predictivo personalizado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ejercitación Cognitiva */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 md:order-1">
            <div className="highlight-badge">
              EJERCITACIÓN COGNITIVA CONECTADA
            </div>
            <h2 className="section-title leading-tight">
              Ejercicitación gratuita que evoluciona con el paciente
            </h2>
            <p className="text-lg text-accent mb-8 leading-relaxed">
            Nuestro sistema de IA analiza el rendimiento en tiempo real, ofreciendo a cada paciente ejercitación gratuita y personalizada. Los ejercicios se adaptan automáticamente, optimizando la estimulación cognitiva mientras generan datos valiosos para el seguimiento clínico y análisis predictivo del especialista.            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-custom">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <p className="text-accent">Ejercicios únicos diseñados por expertos en neuropsicología</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-custom">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <p className="text-accent">Categorías cognitivas principales: Memoria, Atención, Cálculo y Percepción</p>
              </div>
            </div>
            {/*<ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span className="text-accent text-lg">Adaptación automática de dificultad</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span className="text-accent text-lg">Retroalimentación instantánea</span>
              </li>
  </ul> */}
          </div>
          <div className="order-1 md:order-2 relative">
            <img 
              src={feature03} 
              alt="Ejercicios Cognitivos" 
              className="w-full max-w-lg mx-auto img-hover"
            />
            <div className="absolute top-8 left-64 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-custom">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-secondary">Integración con App Móvil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pasos de Implementación 
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          <div className="feature-card">
            <div className="icon-container step-icon">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-bold text-secondary mb-4">Configura el perfil</h3>
            <p className="text-lg text-accent leading-relaxed">
              Crea un perfil personalizado en minutos, adaptado a las necesidades específicas del usuario. Nuestro sistema te guiará en cada paso.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-container step-icon">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-bold text-secondary mb-4">Conecta con la familia</h3>
            <p className="text-lg text-accent leading-relaxed">
              Invita a familiares y cuidadores a unirse a la red de apoyo. La conexión es inmediata y segura.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-container step-icon">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-bold text-secondary mb-4">Comienza la ejercitación</h3>
            <p className="text-lg text-accent leading-relaxed">
              Inicia tu viaje de estimulación cognitiva con ejercicios adaptados a tu nivel y preferencias.
            </p>
          </div>
        </div>*/}


      </div>
    </section>
  );
};

export default MainFeatures;