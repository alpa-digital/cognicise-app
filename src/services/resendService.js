/**
 * Service to handle Resend API interactions
 */

 const RESEND_API_URL = 'https://api.resend.com/v1/emails';

 /**
  * Send a waitlist registration email
  * 
  * @param {Object} userData - User data from the waitlist form
  * @param {string} userData.name - User's name
  * @param {string} userData.email - User's email
  * @param {string} userData.interest - User's main interest
  * @returns {Promise} - API response
  */
 export const submitWaitlistRegistration = async (userData) => {
   try {
     const { name, email, interest } = userData;
     
     // Map interest values to readable labels for the email
     const interestLabels = {
       'ejercicios': 'Ejercicios cognitivos personalizados',
       'seguimiento': 'Seguimiento y monitorización',
       'vinculo': 'Vínculo familiar y comunicación',
       'todo': 'Todo el conjunto de funcionalidades'
     };
 
     const interestLabel = interestLabels[interest] || interest;
     
     // Send to Resend API
     const response = await fetch(RESEND_API_URL, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${process.env.REACT_APP_RESEND_API_KEY}`
       },
       body: JSON.stringify({
         from: 'waitlist@cognicise.app',
         to: 'cogniciseapp@gmail.com', // Admin notification email
         subject: 'Nueva suscripción a la lista de espera',
         html: `
           <h2>Nueva suscripción a la lista de espera</h2>
           <p><strong>Nombre:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Interés principal:</strong> ${interestLabel}</p>
           <p><strong>Fecha de registro:</strong> ${new Date().toLocaleString()}</p>
         `,
       }),
     });
     
     if (!response.ok) {
       const errorData = await response.json();
       throw new Error(errorData.message || 'Error al procesar la solicitud');
     }
     
     return await response.json();
   } catch (error) {
     console.error('Error submitting waitlist registration:', error);
     throw error;
   }
 };
 
 /**
  * Send an autoresponder email to the user
  * 
  * @param {Object} userData - User data from the waitlist form
  * @returns {Promise} - API response
  */
 export const sendAutoresponder = async (userData) => {
   try {
     const { name, email } = userData;
     
     const response = await fetch(RESEND_API_URL, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${process.env.REACT_APP_RESEND_API_KEY}`
       },
       body: JSON.stringify({
         from: 'Cognicise <info@cognicise.app>',
         to: email,
         subject: '¡Bienvenido a la lista de espera de Cognicise!',
         html: `
           <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
             <img src="https://cognicise.app/logo.png" alt="Cognicise" style="max-width: 150px; margin-bottom: 20px;" />
             <h2 style="color: #181E4B;">¡Hola ${name}!</h2>
             <p>Gracias por unirte a la lista de espera de Cognicise. Estamos emocionados de que te interese nuestra plataforma de cuidado cognitivo impulsada por IA.</p>
             <p>Te mantendremos informado sobre nuestro progreso y serás de los primeros en saber cuándo lanzamos la versión beta.</p>
             <p style="margin-top: 30px;">Saludos,<br>El equipo de Cognicise</p>
             <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
               <p>Si tienes alguna pregunta, no dudes en contactarnos en <a href="mailto:cogniciseapp@gmail.com">cogniciseapp@gmail.com</a></p>
             </div>
           </div>
         `,
       }),
     });
     
     if (!response.ok) {
       const errorData = await response.json();
       console.warn('Error sending autoresponder:', errorData);
       // We don't throw here since this is a non-critical operation
       return null;
     }
     
     return await response.json();
   } catch (error) {
     console.warn('Error sending autoresponder:', error);
     // We don't throw here since this is a non-critical operation
     return null;
   }
 };