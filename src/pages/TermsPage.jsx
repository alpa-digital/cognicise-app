import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const TermsPage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'es';
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = currentLang === 'es' 
      ? 'Términos y Condiciones | Cognicise' 
      : 'Terms and Conditions | Cognicise';
  }, [currentLang]);

  return (
    <>
      <Header />
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-8 font-figtree">
              {currentLang === 'es' ? 'Términos y Condiciones' : 'Terms and Conditions'}
            </h1>
            
            {currentLang === 'es' ? (
              // Versión en español
              <div className="prose prose-lg max-w-none text-secondary font-montserrat">
                <p className="text-lg mb-6">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introducción</h2>
                <p>Bienvenido a Cognicise ("nosotros", "nuestro", "nos" o la "Plataforma"). Estos Términos y Condiciones ("Términos") rigen su acceso y uso de la plataforma Cognicise, incluyendo cualquier contenido, funcionalidad y servicios ofrecidos en o a través de cognicise.app (el "Sitio Web") y nuestra aplicación móvil.</p>
                <p>Al acceder o utilizar nuestra Plataforma, usted acepta estar sujeto a estos Términos. Si no está de acuerdo con alguna parte de estos Términos, le informamos que no podrá acceder a la Plataforma.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Descripción del Servicio</h2>
                <p>Cognicise es una plataforma de monitorización cognitiva impulsada por IA diseñada para profesionales de la salud y pacientes. Ofrecemos herramientas para el seguimiento, evaluación y ejercitación de las capacidades cognitivas, con el objetivo de mejorar el diagnóstico temprano y el tratamiento de trastornos cognitivos.</p>
                <p>Actualmente, estamos en fase de desarrollo y ofrecemos la posibilidad de unirse a nuestra lista de espera para ser notificado cuando la plataforma esté disponible.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Elegibilidad</h2>
                <p>Para utilizar nuestra Plataforma, debe tener al menos 18 años o la mayoría de edad legal en su jurisdicción, lo que sea mayor. Al acceder o utilizar nuestra Plataforma, usted declara y garantiza que tiene la capacidad legal para celebrar un acuerdo vinculante con Cognicise y que no está prohibido por la ley de utilizar la Plataforma.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Registro y Seguridad de la Cuenta</h2>
                <p>Para acceder a determinadas funciones de nuestra Plataforma, es posible que deba registrarse y crear una cuenta. Usted se compromete a proporcionar información precisa, actual y completa durante el proceso de registro y a mantener y actualizar dicha información.</p>
                <p>Usted es responsable de mantener la confidencialidad de su contraseña y de todas las actividades que ocurran bajo su cuenta. Cognicise no será responsable de ninguna pérdida o daño que surja del incumplimiento de esta obligación de seguridad.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Propiedad Intelectual</h2>
                <p>La Plataforma y todo su contenido, características y funcionalidades (incluyendo, pero no limitado a, toda la información, software, texto, imágenes, logos, marcas comerciales y diseños) son propiedad de Cognicise o sus licenciantes y están protegidos por leyes de propiedad intelectual.</p>
                <p>No está permitido reproducir, distribuir, modificar, crear obras derivadas, publicar, descargar, almacenar o transmitir cualquier material de nuestra Plataforma sin nuestro consentimiento previo por escrito.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Uso Aceptable</h2>
                <p>Usted se compromete a utilizar nuestra Plataforma solo para fines legales y de acuerdo con estos Términos. Específicamente, acepta no utilizar la Plataforma:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>De cualquier manera que viole cualquier ley o regulación aplicable.</li>
                  <li>Para transmitir material que sea difamatorio, obsceno, ofensivo, o que infrinja los derechos de cualquier tercero.</li>
                  <li>Para transmitir cualquier material que contenga virus, troyanos, gusanos, bombas lógicas u otro material que sea malicioso o tecnológicamente dañino.</li>
                  <li>Para intentar obtener acceso no autorizado a cualquier parte de la Plataforma.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitación de Responsabilidad</h2>
                <p>En la máxima medida permitida por la ley aplicable, Cognicise no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo, sin limitación, pérdida de beneficios, datos, uso, buena voluntad u otras pérdidas intangibles, que resulten de su acceso o uso o imposibilidad de acceso o uso de la Plataforma.</p>
                <p>La información proporcionada a través de la Plataforma tiene fines informativos generales y no constituye consejo médico profesional. Siempre se debe consultar con un profesional de la salud calificado antes de tomar cualquier decisión médica.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Modificaciones</h2>
                <p>Nos reservamos el derecho de modificar o reemplazar estos Términos en cualquier momento a nuestra sola discreción. La versión más actualizada estará siempre disponible en nuestra Plataforma. Es su responsabilidad revisar estos Términos periódicamente para detectar cambios.</p>
                <p>Su uso continuado de la Plataforma después de la publicación de cualquier cambio en estos Términos constituirá su aceptación de dichos cambios.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">9. Terminación</h2>
                <p>Podemos terminar o suspender su acceso a la Plataforma inmediatamente, sin previo aviso ni responsabilidad, por cualquier motivo, incluyendo, sin limitación, si usted incumple estos Términos.</p>
                <p>Todas las disposiciones de estos Términos que por su naturaleza deberían sobrevivir a la terminación sobrevivirán a la terminación, incluyendo, sin limitación, las disposiciones de propiedad, renuncias de garantía, indemnización y limitaciones de responsabilidad.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">10. Ley Aplicable</h2>
                <p>Estos Términos se regirán e interpretarán de acuerdo con las leyes de España, sin tener en cuenta sus principios de conflicto de leyes.</p>
                <p>Cualquier acción legal o procedimiento que surja de o esté relacionado con estos Términos se presentará exclusivamente en los tribunales competentes de España, y usted da su consentimiento para la jurisdicción personal de dichos tribunales.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contacto</h2>
                <p>Si tiene alguna pregunta sobre estos Términos, puede contactarnos en info@cognicise.app.</p>
              </div>
            ) : (
              // Versión en inglés
              <div className="prose prose-lg max-w-none text-secondary font-montserrat">
                <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString('en-US')}</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                <p>Welcome to Cognicise ("we," "our," "us," or the "Platform"). These Terms and Conditions ("Terms") govern your access to and use of the Cognicise platform, including any content, functionality, and services offered on or through cognicise.app (the "Website") and our mobile application.</p>
                <p>By accessing or using our Platform, you agree to be bound by these Terms. If you do not agree to any part of these Terms, then you may not access the Platform.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Service Description</h2>
                <p>Cognicise is an AI-powered cognitive monitoring platform designed for healthcare professionals and patients. We offer tools for tracking, assessing, and exercising cognitive abilities, with the aim of improving early diagnosis and treatment of cognitive disorders.</p>
                <p>Currently, we are in the development phase and offer the possibility to join our waitlist to be notified when the platform becomes available.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Eligibility</h2>
                <p>To use our Platform, you must be at least 18 years of age or the age of legal majority in your jurisdiction, whichever is greater. By accessing or using our Platform, you represent and warrant that you have the legal capacity to enter into a binding agreement with Cognicise and are not prohibited by law from using the Platform.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Account Registration and Security</h2>
                <p>To access certain features of our Platform, you may need to register and create an account. You agree to provide accurate, current, and complete information during the registration process and to maintain and update such information.</p>
                <p>You are responsible for maintaining the confidentiality of your password and for all activities that occur under your account. Cognicise will not be liable for any loss or damage arising from your failure to comply with this security obligation.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
                <p>The Platform and all of its content, features, and functionality (including but not limited to all information, software, text, images, logos, trademarks, and designs) are owned by Cognicise or its licensors and are protected by intellectual property laws.</p>
                <p>You are not permitted to reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Platform without our prior written consent.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Acceptable Use</h2>
                <p>You agree to use our Platform only for lawful purposes and in accordance with these Terms. Specifically, you agree not to use the Platform:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>In any way that violates any applicable law or regulation.</li>
                  <li>To transmit material that is defamatory, obscene, offensive, or infringes upon the rights of any third party.</li>
                  <li>To transmit any material that contains viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
                  <li>To attempt to gain unauthorized access to any portion of the Platform.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
                <p>To the maximum extent permitted by applicable law, Cognicise shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Platform.</p>
                <p>The information provided through the Platform is for general informational purposes only and does not constitute professional medical advice. You should always consult with a qualified healthcare professional before making any medical decisions.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Modifications</h2>
                <p>We reserve the right to modify or replace these Terms at any time at our sole discretion. The most current version will always be available on our Platform. It is your responsibility to review these Terms periodically for changes.</p>
                <p>Your continued use of the Platform following the posting of any changes to these Terms constitutes acceptance of those changes.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">9. Termination</h2>
                <p>We may terminate or suspend your access to the Platform immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.</p>
                <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law</h2>
                <p>These Terms shall be governed and construed in accordance with the laws of Spain, without regard to its conflict of law provisions.</p>
                <p>Any legal action or proceeding arising out of or relating to these Terms shall be filed exclusively in the competent courts of Spain, and you consent to personal jurisdiction of such courts.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact</h2>
                <p>If you have any questions about these Terms, you can contact us at info@cognicise.app.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsPage;