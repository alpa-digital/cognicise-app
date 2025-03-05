import { useState } from 'react';
import { submitWaitlistRegistration, sendAutoresponder } from '../services/resendService';
import { trackWaitlistSignup, trackWaitlistError } from '../utils/analyticsUtils';

/**
 * Custom hook to manage waitlist functionality
 * 
 * @param {Object} options - Configuration options
 * @param {string} options.source - Source of the waitlist registration (for analytics)
 * @param {boolean} options.useServerSide - Whether to use server-side API instead of client-side
 * @param {string} options.serverEndpoint - Server endpoint URL (if useServerSide is true)
 * @param {Function} options.onSuccess - Callback function on successful submission
 * @param {Function} options.onError - Callback function on submission error
 */
const useWaitlist = ({ 
  source = 'unknown',
  useServerSide = false,
  serverEndpoint = '/api/waitlist',
  onSuccess = () => {},
  onError = () => {}
} = {}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'ejercicios'
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      interest: 'ejercicios'
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Por favor, introduce tu nombre');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Por favor, introduce tu correo electrónico');
      return false;
    }
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Por favor, introduce un correo electrónico válido');
      return false;
    }
    return true;
  };

  const submitForm = async (e) => {
    if (e) e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      if (useServerSide) {
        // Server-side approach
        const response = await fetch(serverEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || 'Error al enviar el formulario');
        }
      } else {
        // Client-side approach using Resend
        await submitWaitlistRegistration(formData);
        
        // Send autoresponder email separately
        // We don't await this to speed up the user experience
        sendAutoresponder(formData).catch(err => {
          console.warn('Error sending autoresponder:', err);
          // Non-critical error, so we continue
        });
      }

      // Track the successful signup
      trackWaitlistSignup(formData, source);

      setStatus('success');
      onSuccess(formData);

      // Reset form after success
      setTimeout(resetForm, 500);
      
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      
      const errorMsg = error.message || 'Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo.';
      setErrorMessage(errorMsg);
      
      // Track the error for analytics
      trackWaitlistError('submission_error', errorMsg);
      
      onError(error);
    }
  };

  return {
    formData,
    handleChange,
    submitForm,
    status,
    errorMessage,
    resetForm,
    setFormData
  };
};

export default useWaitlist;