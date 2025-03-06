import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductHero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="pt-16 pb-0 pl-8 pr-8">
      <div className="container mx-auto px-padding-small md:px-padding-big">
        <div className="max-w-4xl mx-auto text-center section-text-div">
          <span className="highlight-badge inline-block bg-primary/10 text-primary font-semibold tracking-wide uppercase px-4 py-2 rounded-full mb-6">
            {t('productHero.badge')}
          </span>
          <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold font-figtree text-secondary mb-8">
            {t('productHero.title')}
          </h1>
          <p className="text-xl text-accent mb-12 max-w-5xl mx-auto leading-relaxed font-montserrat" id="main-subtitle">
            {t('productHero.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;