import React from 'react';

const ProductHero = () => {
  return (
    <section className="pt-16 pb-0 pl-8 pr-8">
      <div className="container mx-auto px-padding-small md:px-padding-big">
        <div className="max-w-4xl mx-auto text-center section-text-div">
          <span className="highlight-badge inline-block bg-primary/10 text-primary font-semibold tracking-wide uppercase px-4 py-2 rounded-full mb-6">
            REVOLUCIONANDO LA MONITORIZACIÓN NEUROCOGNITIVA
          </span>
          <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold font-figtree text-secondary mb-8">
          Plataforma que conecta la ejercitación con un análisis profesional
          </h1>
          <p className="text-xl text-accent mb-12 max-w-5xl mx-auto leading-relaxed font-montserrat" id="main-subtitle">
          Anticiparse ante el deterioro cognitivo es marcar la diferencia, Cognicise ofrece a los especialistas 
          una solución para analizar patrones de desempeño de los pacientes, genera alertas ante anomalías 
          y proporcionar recomendaciones basadas en datos para potenciar el criterio clínico.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;