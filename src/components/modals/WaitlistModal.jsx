// WaitlistModal.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const WaitlistModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'todas las funcionalidades'
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      setErrorMessage('Por favor, introduce un email válido');
      return;
    }
    
    console.log('Submitting to waitlist:', formData);
    setStatus('loading');
    setErrorMessage('');
    
    try {
      // Mostrar que se está haciendo la solicitud
      console.log('Sending request to waitlist API...');
      
      const response = await fetch('/.netlify/functions/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      console.log('Response status:', response.status);
      
      let data;
      const responseText = await response.text();
      console.log('Raw response:', responseText);
      
      try {
        data = JSON.parse(responseText);
        console.log('Parsed response data:', data);
      } catch (parseError) {
        console.error('Failed to parse response as JSON:', parseError);
        throw new Error('Invalid response format');
      }
      
      if (data.success) {
        console.log('Waitlist submission successful!');
        setStatus('success');
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            interest: 'todas las funcionalidades'
          });
          setStatus('idle');
          onClose();
        }, 3000);
      } else {
        console.error('API reported error:', data.error);
        setErrorMessage(data.error || 'Ocurrió un error. Por favor, inténtalo de nuevo.');
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
      setErrorMessage('No se pudo conectar con el servidor. Por favor, inténtalo de nuevo más tarde.');
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4">
      <div className="relative bg-white rounded-large max-w-md w-full p-8 shadow-xl">
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-accent hover:text-secondary transition-colors"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        
        {/* Contenido del modal */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-primary text-2xl" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-volkhov text-secondary mb-3">
            Únete a nuestra lista de espera
          </h3>
          <p className="text-accent font-poppins">
            Sé de los primeros en probar Cognicise cuando esté disponible
          </p>
        </div>
        
        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4 font-volkhov">¡Gracias por unirte!</h3>
            <p className="text-accent text-lg font-poppins">Te contactaremos pronto con novedades sobre Cognicise.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2 font-poppins">
                Nombre (opcional)
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 focus:border-primary rounded-xl focus:outline-none transition-all duration-short ease-custom-ease font-poppins"
                placeholder="Tu nombre"
                disabled={status === 'loading'}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2 font-poppins">
                Correo electrónico <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 focus:border-primary rounded-xl focus:outline-none transition-all duration-short ease-custom-ease font-poppins"
                placeholder="ejemplo@correo.com"
                disabled={status === 'loading'}
                required
              />
            </div>
            
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-secondary mb-2 font-poppins">
                ¿Qué te interesa más de Cognicise?
              </label>
              <div className="relative">
                <select 
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 focus:border-primary rounded-xl focus:outline-none transition-all appearance-none duration-short ease-custom-ease font-poppins pr-10"
                  disabled={status === 'loading'}
                >
                  <option value="Todas las funcionalidades">Todas las funcionalidades</option>
                  <option value="Análisis Predictivo">Análisis predictivo con IA</option>
                  <option value="Detección Precoz">Detección precoz de cambios cognitivos</option>
                  <option value="Ejercitación Personalizada">Ejercitación cognitiva personalizada</option>
                  <option value="Panel Profesional">Panel para profesionales </option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">
                {errorMessage}
              </p>
            )}
            
            <div className="pt-4">
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 duration-short ease-custom-ease flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-70 disabled:hover:scale-100"
              >
                {status === 'loading' ? 'Enviando...' :
                 status === 'error' ? 'Intentar de nuevo' : 
                 'Unirme a la lista de espera'}
                
                {status === 'idle' && <FontAwesomeIcon icon={faArrowRight} />}
              </button>
            </div>
            
            <div className="text-center text-xs text-accent mt-6 font-poppins">
              <p className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Al unirte, aceptas recibir actualizaciones exclusivas sobre el lanzamiento
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;