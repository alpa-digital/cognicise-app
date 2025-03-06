import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faGlobe,
  faMapMarkerAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { 
  faInstagram, 
  faXTwitter, 
  faFacebook,
  faLinkedin,
  faApple,
  faGooglePlay
} from '@fortawesome/free-brands-svg-icons';
import Logo from '../../assets/img/cognicise-logo.png';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

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
              <a href="https://instagram.com/cognicise.app" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-short">
                <FontAwesomeIcon icon={faInstagram} className="text-gray-300 hover:text-primary transition-colors" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-short">
                <FontAwesomeIcon icon={faXTwitter} className="text-gray-300 hover:text-primary transition-colors" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-short">
                <FontAwesomeIcon icon={faFacebook} className="text-gray-300 hover:text-primary transition-colors" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer"
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
                <a href="#que-es-cognicise" className="text-gray-400 hover:text-primary transition-colors font-montserrat">
                  {t('footer.whatIs')}
                </a>
              </li>
              <li>
                <a href="#funcionalidades" className="text-gray-400 hover:text-primary transition-colors font-montserrat">
                  {t('footer.features')}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-primary transition-colors font-montserrat">
                  {t('footer.faq')}
                </a>
              </li>
              <li>
                <a href="#waitlist" className="text-gray-400 hover:text-primary transition-colors font-montserrat">
                  {t('footer.joinWaitlist')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto Rápido */}
          <div className="footer-part footer-03">
            <h3 className="font-semibold text-lg mb-6 font-figtree">{t('footer.quickContact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
                <a href="mailto:cogniciseapp@gmail.com" className="text-gray-400 hover:text-primary transition-colors font-montserrat">
                  cogniciseapp@gmail.com
                </a>
              </li>
            </ul>
            
            {/* Downloads */}
            <div className="mt-8">
              <h4 className="font-medium text-gray-300 mb-4">{t('footer.comingSoon')}</h4>
              <div className="download-buttons flex space-x-4">
                <a href="#" className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg opacity-50 hover:opacity-75 transition-opacity">
                  <FontAwesomeIcon icon={faApple} className="text-gray-300 text-lg" />
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg opacity-50 hover:opacity-75 transition-opacity">
                  <FontAwesomeIcon icon={faGooglePlay} className="text-gray-300 text-lg" />
                </a>
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