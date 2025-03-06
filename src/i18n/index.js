import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar archivos de traducción
import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';

// Los recursos para las traducciones
const resources = {
  es: {
    translation: translationES
  },
  en: {
    translation: translationEN
  }
};

i18n
  // Detectar el idioma del navegador
  .use(LanguageDetector)
  // Pasar el i18n a react-i18next
  .use(initReactI18next)
  // Inicializar i18next
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto si no se detecta ninguno
    debug: process.env.NODE_ENV !== 'production', // Mostrar logs en desarrollo

    interpolation: {
      escapeValue: false // No es necesario para React
    },
    
    detection: {
      // Orden en que se detecta el idioma
      order: ['path', 'localStorage', 'navigator'],
      // Buscar el idioma en la ruta (ej: /en/about)
      lookupFromPathIndex: 0,
      // Guardar el idioma en localStorage
      caches: ['localStorage'],
    }
  });

export default i18n;