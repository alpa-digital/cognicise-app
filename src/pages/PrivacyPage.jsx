import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const PrivacyPage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'es';
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = currentLang === 'es' 
      ? 'Política de Privacidad | Cognicise' 
      : 'Privacy Policy | Cognicise';
  }, [currentLang]);

  return (
    <>
      <Header />
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-8 font-figtree">
              {currentLang === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
            </h1>
            
            {currentLang === 'es' ? (
              // Versión en español
              <div className="prose prose-lg max-w-none text-secondary font-montserrat">
                <p className="text-lg mb-6">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introducción</h2>
                <p>Cognicise ("nosotros", "nuestro/a", "nos") se compromete a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos su información personal cuando utiliza nuestro sitio web cognicise.app (el "Sitio") y nuestros servicios.</p>
                <p>Por favor, lea atentamente esta política para entender cómo tratamos su información personal.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Información que Recopilamos</h2>
                <p>Actualmente, Cognicise se encuentra en fase de desarrollo y solo recopilamos información limitada a través de nuestro formulario de lista de espera. La información que recopilamos incluye:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Nombre:</strong> Para personalizar nuestras comunicaciones con usted.</li>
                  <li><strong>Dirección de correo electrónico:</strong> Para enviarle actualizaciones sobre el lanzamiento y nuevas características de Cognicise.</li>
                  <li><strong>Preferencias:</strong> Información sobre su interés específico en nuestra plataforma para personalizar mejor nuestra comunicación y desarrollo.</li>
                </ul>
                <p>No recopilamos ni almacenamos ninguna otra información personal en esta etapa.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cómo Utilizamos su Información</h2>
                <p>Utilizamos la información recopilada únicamente para los siguientes propósitos:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Mantenerle informado sobre el lanzamiento de nuestra plataforma.</li>
                  <li>Enviarle actualizaciones ocasionales sobre el desarrollo y nuevas características.</li>
                  <li>Personalizar nuestra comunicación según sus preferencias indicadas.</li>
                  <li>Mejorar nuestro sitio web y la experiencia del usuario.</li>
                </ul>
                <p>No utilizamos su información personal para ningún otro propósito ni la compartimos con terceros sin su consentimiento, excepto cuando sea requerido por ley.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Almacenamiento y Seguridad de Datos</h2>
                <p>La protección de sus datos es importante para nosotros. Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra el acceso, divulgación, uso o destrucción no autorizados.</p>
                <p>Sus datos se almacenan en servidores seguros y solo son accesibles por un número limitado de personas que tienen derechos especiales de acceso y están obligados a mantener la confidencialidad de la información.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Sus Derechos</h2>
                <p>Bajo las leyes de protección de datos aplicables, usted tiene ciertos derechos con respecto a su información personal, incluyendo:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Derecho de acceso:</strong> Puede solicitar una copia de la información personal que tenemos sobre usted.</li>
                  <li><strong>Derecho de rectificación:</strong> Puede solicitar que corrijamos cualquier información personal inexacta o incompleta.</li>
                  <li><strong>Derecho al olvido:</strong> Puede solicitar que eliminemos su información personal bajo ciertas circunstancias.</li>
                  <li><strong>Derecho a retirar el consentimiento:</strong> Puede retirar su consentimiento para el procesamiento de sus datos en cualquier momento.</li>
                </ul>
                <p>Para ejercer cualquiera de estos derechos, por favor contáctenos a través de info@cognicise.app.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cookies y Tecnologías Similares</h2>
                <p>Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su experiencia de navegación. Una cookie es un pequeño archivo de texto que se almacena en su dispositivo cuando visita un sitio web.</p>
                <p>Utilizamos cookies principalmente para:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Recordar sus preferencias y configuraciones.</li>
                  <li>Entender cómo interactúa con nuestro sitio web.</li>
                  <li>Analizar el tráfico de nuestro sitio web y mejorar su rendimiento.</li>
                </ul>
                <p>Puede configurar su navegador para rechazar todas las cookies o para indicar cuándo se está enviando una cookie. Sin embargo, algunas características de nuestro sitio web pueden no funcionar correctamente sin cookies.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cambios a Esta Política</h2>
                <p>Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página y, si los cambios son significativos, le enviaremos una notificación por correo electrónico.</p>
                <p>Le recomendamos que revise esta Política de Privacidad periódicamente para estar informado sobre cómo estamos protegiendo su información.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contacto</h2>
                <p>Si tiene alguna pregunta sobre esta Política de Privacidad o nuestras prácticas de tratamiento de datos, por favor contáctenos a:</p>
                <p>Email: info@cognicise.app</p>
              </div>
            ) : (
              // Versión en inglés
              <div className="prose prose-lg max-w-none text-secondary font-montserrat">
                <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString('en-US')}</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                <p>Cognicise ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website cognicise.app (the "Site") and our services.</p>
                <p>Please read this policy carefully to understand how we handle your personal information.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
                <p>Currently, Cognicise is in the development phase and we only collect limited information through our waitlist form. The information we collect includes:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Name:</strong> To personalize our communications with you.</li>
                  <li><strong>Email address:</strong> To send you updates about Cognicise's launch and new features.</li>
                  <li><strong>Preferences:</strong> Information about your specific interest in our platform to better personalize our communication and development.</li>
                </ul>
                <p>We do not collect or store any other personal information at this stage.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
                <p>We use the information collected solely for the following purposes:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>To keep you informed about our platform's launch.</li>
                  <li>To send you occasional updates about development and new features.</li>
                  <li>To personalize our communication based on your indicated preferences.</li>
                  <li>To improve our website and user experience.</li>
                </ul>
                <p>We do not use your personal information for any other purpose or share it with third parties without your consent, except when required by law.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Storage and Security</h2>
                <p>The protection of your data is important to us. We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, disclosure, use, or destruction.</p>
                <p>Your data is stored on secure servers and is only accessible by a limited number of persons who have special access rights and are required to keep the information confidential.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
                <p>Under applicable data protection laws, you have certain rights regarding your personal information, including:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Right of access:</strong> You can request a copy of the personal information we hold about you.</li>
                  <li><strong>Right to rectification:</strong> You can request that we correct any inaccurate or incomplete personal information.</li>
                  <li><strong>Right to erasure:</strong> You can request that we delete your personal information under certain circumstances.</li>
                  <li><strong>Right to withdraw consent:</strong> You can withdraw your consent to the processing of your data at any time.</li>
                </ul>
                <p>To exercise any of these rights, please contact us at info@cognicise.app.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cookies and Similar Technologies</h2>
                <p>Our website uses cookies and similar technologies to enhance your browsing experience. A cookie is a small text file that is stored on your device when you visit a website.</p>
                <p>We primarily use cookies to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Remember your preferences and settings.</li>
                  <li>Understand how you interact with our website.</li>
                  <li>Analyze our website traffic and improve its performance.</li>
                </ul>
                <p>You can set your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our website may not function properly without cookies.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to This Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and, if the changes are significant, we will send you an email notification.</p>
                <p>We recommend that you review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact</h2>
                <p>If you have any questions about this Privacy Policy or our data handling practices, please contact us at:</p>
                <p>Email: info@cognicise.app</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPage;