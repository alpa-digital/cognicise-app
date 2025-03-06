import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import enflag from '../../assets/img/en-flag.png';
import esflag from '../../assets/img/es-flag.png';

const LanguageSwitcher = ({ className = '', onChangeLanguage = null }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    
    // Actualizar la URL para reflejar el cambio de idioma
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(es|en)/, `/${newLang}`);
    navigate(newPath);
    
    // Ejecutar callback si existe
    if (onChangeLanguage) {
      onChangeLanguage(newLang);
    }
  };

  // Mostrar la bandera opuesta al idioma actual
  const currentFlag = i18n.language === 'es' ? enflag : (
    // Si la bandera española no está disponible aún, usar un div placeholder
    // con los colores de la bandera española
    <div className="w-6 h-4 flex flex-col">
      <div className="h-1 bg-red-600"></div>
      <div className="h-2 bg-yellow-500"></div>
      <div className="h-1 bg-red-600"></div>
    </div>
  );
  
  const flagAlt = i18n.language === 'es' ? 'English version' : 'Versión en español';

  return (
    <button 
      onClick={changeLanguage} 
      className={`text-secondary hover:text-primary transition-colors flex items-center gap-2 ${className}`}
      aria-label={`Switch to ${i18n.language === 'es' ? 'English' : 'Spanish'}`}
    >
      {typeof currentFlag === 'string' ? (
        <img 
          src={currentFlag}
          alt={flagAlt} 
          className="w-6 h-4 rounded shadow-sm" 
        />
      ) : (
        currentFlag
      )}
      {flagAlt}
    </button>
  );
};

export default LanguageSwitcher;