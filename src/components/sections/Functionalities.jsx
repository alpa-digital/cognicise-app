import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeatureItem = ({ icon, title, description, upcoming = false }) => (
  <li className={`flex items-start gap-4 p-3 px-8 hover:bg-primary/5 rounded-xl transition-colors duration-short ease-custom-ease ${upcoming ? 'opacity-75' : ''}`}>
    <div className={`w-10 h-10 ${upcoming ? 'bg-primary/5' : 'bg-primary/10'} px-8  rounded-xl flex items-center justify-center flex-shrink-0`}>
      <FontAwesomeIcon icon={icon} className="text-primary text-xl" />
    </div>
    <div>
      <span className="text-secondary font-medium">{title}</span>
      <p className="text-accent text-sm mt-1">{description}</p>
    </div>
  </li>
);

const FeaturesPanel = ({ 
  icon, 
  title, 
  subtitle, 
  badge, 
  currentFeatures, 
  upcomingFeatures 
}) => (
  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-16 px-8  shadow-custom hover:shadow-2xl transition-all duration-long ease-custom-ease transform hover:-translate-y-1" data-aos="fade-up">
    <div className="relative mb-12">
      <div className="absolute -top-10 right-0 bg-primary/5 text-primary text-sm px-4 py-1 rounded-full">
        {badge}
      </div>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
          <FontAwesomeIcon icon={icon} className="text-primary text-3xl" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-secondary font-figtree">{title}</h3>
          <p className="text-accent font-montserrat">{subtitle}</p>
        </div>
      </div>
    </div>

    {/* Funcionalidades actuales */}
    <div className="mb-10 px-8 ">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 bg-primary rounded-full"></div>
        <h4 className="font-semibold text-lg text-secondary">¿Qué obtendrás trás la campaña?</h4>
      </div>
      <ul className="space-y-4">
        {currentFeatures.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </ul>
    </div>

    {/* Próximas funcionalidades */}
    <div>
      <div className="flex items-center gap-3 mb-6 px-8 ">
        <div className="w-2 h-2 bg-primary/50 rounded-full"></div>
        <h4 className="font-semibold text-lg text-secondary flex items-center gap-2">
          Próximamente
          <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Premium</span>
        </h4>
      </div>
      <ul className="space-y-4">
        {upcomingFeatures.map((feature, index) => (
          <FeatureItem key={index} {...feature} upcoming={true} />
        ))}
      </ul>
    </div>
  </div>
);

const Functionalities = () => {
  const patientFeatures = {
    currentFeatures: [
      {
        icon: 'brain',
        title: 'Ejercicios cognitivos con IA',
        description: 'Adaptados a tu nivel y preferencias'
      },
      {
        icon: 'pills',
        title: 'Recordatorios de medicación',
        description: 'Nunca olvides una dosis importante'
      },
      {
        icon: 'phone-alt',
        title: 'Llamada rápida a familiares',
        description: 'Conecta con tus seres queridos al instante'
      }
    ],
    upcomingFeatures: [
      {
        icon: 'vr-cardboard',
        title: 'Ejercicios en realidad virtual',
        description: 'Experiencias inmersivas de entrenamiento'
      }
    ]
  };

  const caregiverFeatures = {
    currentFeatures: [
      {
        icon: 'chart-line',
        title: 'Seguimiento del progreso',
        description: 'Monitoriza la evolución en tiempo real'
      },
      {
        icon: 'tasks',
        title: 'Gestión remota',
        description: 'Configura recordatorios y actividades'
      },
      {
        icon: 'comments',
        title: 'Comunicación directa',
        description: 'Mantente conectado en todo momento'
      }
    ],
    upcomingFeatures: [
      {
        icon: 'desktop',
        title: 'Plataforma web avanzada',
        description: 'Control total desde tu ordenador'
      },
      {
        icon: 'chart-bar',
        title: 'Análisis predictivo',
        description: 'Anticípate a cambios significativos'
      }
    ]
  };

  return (
    <section id="funcionalidades" className="section py-20 bg-gradient-to-b from-white to-[#F8FDFC]">
      <div className="container mx-auto px-padding-small md:px-padding-big">
        {/* Encabezado de sección */}
        <div className="text-center mb-20 section-text-div" data-aos="fade-up">
          <span className="highlight-badge inline-block">
            NUESTRAS FUNCIONALIDADES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-6 mb-4 font-figtree">
            Una solución integral para el cuidado cognitivo
          </h2>
          <p className="text-accent max-w-3xl mx-auto mt-4 font-montserrat">
            Descubre cómo Cognicise revoluciona el cuidado cognitivo combinando tecnología innovadora con conexión familiar efectiva
          </p>
        </div>

        {/* Contenedor de paneles */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto relative section-content">
          {/* Panel Paciente */}
          <FeaturesPanel
            icon="user-circle"
            title="Para el Paciente"
            subtitle="Simplicidad y eficacia en cada interacción"
            badge="Interfaz Adaptada"
            currentFeatures={patientFeatures.currentFeatures}
            upcomingFeatures={patientFeatures.upcomingFeatures}
          />

          {/* Panel Cuidador/Familiar */}
          <FeaturesPanel
            icon="user-nurse"
            title="Para el Cuidador"
            subtitle="Monitorización y apoyo continuo"
            badge="Control Total"
            currentFeatures={caregiverFeatures.currentFeatures}
            upcomingFeatures={caregiverFeatures.upcomingFeatures}
          />
        </div>
      </div>
    </section>
  );
};

export default Functionalities;