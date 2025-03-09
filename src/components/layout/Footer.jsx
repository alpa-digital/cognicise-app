import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { 
  faInstagram, 
  faLinkedin,
  faApple,
  faGooglePlay
} from '@fortawesome/free-brands-svg-icons';
import Logo from '../../assets/img/cognicise-logo.png';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const currentLang = i18n.language || 'es';

  return (
    <footer className="bg-gray-900 px-8 text-white pt-20">

      {/* Footer principal */}
      <div className="container mx-auto px-padding-small md:px-padding-big">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo y Descripción */}
          <div className="col-span-2">
            <img src={Logo} alt="Cognicise" className="h-12 mb-6 cognicise-logo" />
            <p className="text-gray-400 max-w-md font-montserrat">
              {t('footer.description')}
            </p>
            
            {/* Redes sociales */}
            <div className="flex space-x-4 mt-8" id="social-icons">
              <a href="https://www.instagram.com/cognicise.app/" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-short">
                <FontAwesomeIcon icon={faInstagram} className="text-gray-300 hover:text-primary transition-colors" />
              </a>
              <a href="https://www.linkedin.com/company/cognicise" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-short">
                <FontAwesomeIcon icon={faLinkedin} className="text-gray-300 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="footer-part footer-02">
            <h3 className="font-semibold text-lg mb-6 font-figtree">{t('footer.quickLinks')}</h3>
            <ul className="space-y-4">
           
              <li>
                <Link to={`/${currentLang}/terms`} className="text-gray-400 hover:text-primary transition-colors font-montserrat">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link to={`/${currentLang}/privacy`} className="text-gray-400 hover:text-primary transition-colors font-montserrat">
                  {t('footer.privacy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto Rápido */}
          <div className="footer-part footer-03">
            <h3 className="font-semibold text-lg mb-6 font-figtree">{t('footer.quickContact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
                <a href="mailto:info@cognicise.app" className="text-gray-400 hover:text-primary transition-colors font-montserrat">
                  info@cognicise.app
                </a>
              </li>
            </ul>
            
            {/* Downloads */}
            <div className="mt-8">
              <h4 className="font-medium text-gray-300 mb-4">{t('footer.comingSoon')}</h4>
              <div className="download-buttons flex space-x-4">
                <div className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg opacity-50 cursor-not-allowed">
                  <FontAwesomeIcon icon={faApple} className="text-gray-300 text-lg" />
                </div>
                <div className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg opacity-50 cursor-not-allowed">
                  <FontAwesomeIcon icon={faGooglePlay} className="text-gray-300 text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 pb-10 text-center">
          <p className="text-gray-400 font-montserrat">
            &copy; {currentYear} Cognicise. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;