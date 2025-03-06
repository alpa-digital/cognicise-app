import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const MetaHelmet = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Actualizar título y meta descripción cuando cambia el idioma
    document.title = t('meta.title');

    // Actualizar meta descripción
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('meta.description'));
    }

    // Actualizar og:title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t('meta.title'));
    }

    // Actualizar og:description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', t('meta.description'));
    }

    // Actualizar twitter:title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', t('meta.title'));
    }

    // Actualizar twitter:description
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', t('meta.description'));
    }

    // Actualizar atributo lang del html
    document.documentElement.setAttribute('lang', i18n.language);

  }, [t, i18n.language]);

  return null; // Este componente no renderiza nada, solo actualiza el head
};

export default MetaHelmet;