// netlify/functions/waitlist.js
const { Resend } = require('resend');

// Usar la API key proporcionada
const resend = new Resend(process.env.RESEND_API_KEY);

// ID de la audiencia de Resend
const AUDIENCE_ID = '432a51ac-c491-4e7a-ab13-9029f9848ee7';

// Templates de emails en diferentes idiomas
const emailTemplates = {
  es: {
    userSubject: '¡Bienvenido a la lista de espera de Cognicise! 🧠',
    teamSubject: '🚀 Nueva suscripción a la lista de espera de Cognicise',
    
    // Esta función genera el HTML del correo de bienvenida en español
    generateUserEmailHTML: (name, interest, formattedDate, currentYear) => `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bienvenido a Cognicise</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; color: #181E4B; background-color: #f5f5f5;">
        <!-- Contenedor principal -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f5f5; padding: 20px 0;">
          <tr>
            <td align="center">
              <!-- Tarjeta principal -->
              <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);">
                <!-- Cabecera -->
                <tr>
                  <td style="background-color: #00C29D; padding: 40px 20px; text-align: center;">
                    <h1 style="color: #FFFFFF; font-size: 28px; font-weight: 700; margin: 0; font-family: Arial, sans-serif;">¡Bienvenido a Cognicise!</h1>
                    <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin-top: 10px; font-family: Arial, sans-serif;">Tecnología de vanguardia para el cuidado neurodegenerativo</p>
                  </td>
                </tr>
                
                <!-- Contenido -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <!-- Saludo -->
                    <p style="font-size: 18px; font-weight: 600; color: #181E4B; margin-bottom: 20px; font-family: Arial, sans-serif;">¡Hola${name ? ` ${name}` : ''}!</p>
                    
                    <!-- Mensaje de bienvenida -->
                    <p style="color: #5E6282; margin-bottom: 25px; font-size: 15px; font-family: Arial, sans-serif;">
                      Gracias por unirte a nuestra lista de espera. Estamos encantados de que te interese Cognicise y queremos mantenerte al día sobre nuestro lanzamiento y todas las novedades que estamos desarrollando.
                    </p>
                    
                    <!-- Alerta importante -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: rgba(0, 194, 157, 0.1); border-left: 4px solid #00C29D; padding: 20px; border-radius: 10px; margin: 30px 0;">
                      <tr>
                        <td>
                          <p style="margin: 0; font-weight: 500; color: #181E4B; font-family: Arial, sans-serif;">
                            <strong style="color: #00C29D;">¡Importante!</strong> Te notificaremos en mayo de 2025 cuando lancemos oficialmente nuestra plataforma. Si formas parte de nuestros Early Birds, tendrás acceso anticipado durante nuestra fase beta en abril.
                          </p>
                        </td>
                      </tr>
                    </table>
                    <!-- Interés indicado -->
                    <p style="color: #5E6282; margin-bottom: 25px; font-size: 15px; font-family: Arial, sans-serif;">
                      Nos has indicado especial interés en: <strong style="color: #181E4B;">${interest}</strong>
                    </p>
                    
                    <!-- Características -->
                    <h3 style="font-weight: 600; color: #181E4B; font-size: 16px; margin-bottom: 15px; font-family: Arial, sans-serif;">¿Qué hace Cognicise tan especial?</h3>
                    
                    <!-- Tabla de características -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px;">
                      <tr>
                        <td width="50%" valign="top" style="padding-right: 8px; padding-bottom: 15px;">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F9F7FE; padding: 15px; border-radius: 10px; height: 100%;">
                            <tr>
                              <td align="center" style="padding-bottom: 10px;">
                                <div style="width: 40px; height: 40px; background-color: rgba(0, 194, 157, 0.2); border-radius: 50%; display: inline-block; line-height: 40px; text-align: center;">
                                  <span style="color: #00C29D; font-weight: bold;">✓</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center">
                                <p style="font-weight: 600; font-size: 15px; color: #181E4B; margin-bottom: 5px; font-family: Arial, sans-serif;">Análisis Predictivo</p>
                                <p style="font-size: 13px; color: #5E6282; margin: 0; font-family: Arial, sans-serif;">Insights clínicos valiosos basados en datos</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td width="50%" valign="top" style="padding-left: 8px; padding-bottom: 15px;">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F9F7FE; padding: 15px; border-radius: 10px; height: 100%;">
                            <tr>
                              <td align="center" style="padding-bottom: 10px;">
                                <div style="width: 40px; height: 40px; background-color: rgba(0, 194, 157, 0.2); border-radius: 50%; display: inline-block; line-height: 40px; text-align: center;">
                                  <span style="color: #00C29D; font-weight: bold;">✓</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center">
                                <p style="font-weight: 600; font-size: 15px; color: #181E4B; margin-bottom: 5px; font-family: Arial, sans-serif;">Detección Precoz</p>
                                <p style="font-size: 13px; color: #5E6282; margin: 0; font-family: Arial, sans-serif;">Identificación temprana de cambios cognitivos</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td width="50%" valign="top" style="padding-right: 8px;">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F9F7FE; padding: 15px; border-radius: 10px; height: 100%;">
                            <tr>
                              <td align="center" style="padding-bottom: 10px;">
                                <div style="width: 40px; height: 40px; background-color: rgba(0, 194, 157, 0.2); border-radius: 50%; display: inline-block; line-height: 40px; text-align: center;">
                                  <span style="color: #00C29D; font-weight: bold;">✓</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center">
                                <p style="font-weight: 600; font-size: 15px; color: #181E4B; margin-bottom: 5px; font-family: Arial, sans-serif;">Ejercitación Personalizada</p>
                                <p style="font-size: 13px; color: #5E6282; margin: 0; font-family: Arial, sans-serif;">Adaptada a cada perfil de paciente</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td width="50%" valign="top" style="padding-left: 8px;">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F9F7FE; padding: 15px; border-radius: 10px; height: 100%;">
                            <tr>
                              <td align="center" style="padding-bottom: 10px;">
                                <div style="width: 40px; height: 40px; background-color: rgba(0, 194, 157, 0.2); border-radius: 50%; display: inline-block; line-height: 40px; text-align: center;">
                                  <span style="color: #00C29D; font-weight: bold;">✓</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center">
                                <p style="font-weight: 600; font-size: 15px; color: #181E4B; margin-bottom: 5px; font-family: Arial, sans-serif;">Ecosistema Conectado</p>
                                <p style="font-size: 13px; color: #5E6282; margin: 0; font-family: Arial, sans-serif;">Plataforma integral profesional-paciente</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Lista de beneficios -->
                    <p style="color: #5E6282; margin-bottom: 15px; font-size: 15px; font-family: Arial, sans-serif;">Como miembro de nuestra lista de espera, recibirás:</p>
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px;">
                      <tr>
                        <td style="padding: 5px 0; color: #5E6282; font-family: Arial, sans-serif;">
                          • Acceso prioritario cuando lancemos
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 5px 0; color: #5E6282; font-family: Arial, sans-serif;">
                          • Actualizaciones exclusivas sobre el desarrollo
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 5px 0; color: #5E6282; font-family: Arial, sans-serif;">
                          • La posibilidad de proporcionar feedback en nuestras fases beta
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 5px 0; color: #5E6282; font-family: Arial, sans-serif;">
                          • Promociones especiales para los primeros usuarios
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Separador -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 30px 0;">
                      <tr>
                        <td bgcolor="#E5E7EB" style="height: 1px;"></td>
                      </tr>
                    </table>
                    
                    <!-- Preguntas y contacto -->
                    <p style="color: #5E6282; margin-bottom: 25px; font-size: 15px; font-family: Arial, sans-serif;">
                      ¿Tienes preguntas o sugerencias? Responde directamente a este correo y estaremos encantados de hablar contigo.
                    </p>
                    
                    <!-- Botón CTA -->
                    <table border="0" cellpadding="0" cellspacing="0" style="margin: 30px auto;">
                      <tr>
                        <td bgcolor="#00C29D" style="padding: 14px 20px; border-radius: 10px; text-align: center;">
                          <a href="https://cognicise.app" style="color: white; text-decoration: none; font-weight: 600; font-size: 16px; font-family: Arial, sans-serif; display: inline-block;">Visitar nuestra web</a>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Redes sociales -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 30px;">
                      <tr>
                        <td align="center">
                          <h4 style="font-weight: 600; color: #181E4B; margin-bottom: 15px; font-size: 15px; font-family: Arial, sans-serif;">Síguenos en redes sociales</h4>
                          <p style="color: #5E6282; margin-bottom: 15px; font-size: 14px; font-family: Arial, sans-serif;">Y mantente al día de todas nuestras novedades</p>
                          
                          <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="padding: 0 10px;">
                                <a href="https://instagram.com/cognicise.app" style="text-decoration: none;">
                                  <table border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                      <td bgcolor="#F9F7FE" width="40" height="40" align="center" style="border-radius: 50%;">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" width="20" height="20" alt="Instagram" style="display: block; border: 0;" />
                                      </td>
                                    </tr>
                                  </table>
                                </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Pie de página -->
                <tr>
                  <td bgcolor="#F9F7FE" style="padding: 25px 20px; text-align: center;">
                    <p style="color: #5E6282; font-size: 13px; margin-bottom: 8px; font-family: Arial, sans-serif;">&copy; ${currentYear} Cognicise. Todos los derechos reservados.</p>
                    <p style="color: #5E6282; font-size: 13px; margin-bottom: 8px; font-family: Arial, sans-serif;">Fecha de inscripción: ${formattedDate}</p>
                    <p style="color: #5E6282; font-size: 13px; margin-bottom: 0; font-family: Arial, sans-serif;">Si no deseas recibir comunicaciones de Cognicise, puedes <a href="mailto:info@cognicise.app?subject=Cancelar%20suscripcion" style="color: #00C29D; text-decoration: none;">cancelar tu suscripción</a>.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,generateTeamEmailHTML: (email, name, interest, audienceSuccess, event, formattedDateTime) => `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Nueva suscripción a la lista de espera</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; color: #181E4B; line-height: 1.6; background-color: #f5f5f5;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding: 20px;">
        <tr>
          <td align="center">
            <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);">
              <!-- Cabecera -->
              <tr>
                <td style="padding: 30px 30px; text-align: center; border-bottom: 1px solid #F9F7FE;">
                  <h1 style="color: #00C29D; margin: 0; font-size: 24px; font-family: Arial, sans-serif;">¡Nueva suscripción a la lista de espera!</h1>
                  <div style="display: inline-block; background-color: #F9F7FE; color: #00C29D; font-size: 12px; padding: 4px 10px; border-radius: 20px; margin-top: 5px;">
                    ${audienceSuccess ? 'Agregado a la audiencia de Resend' : 'Usuario registrado (comprobar audiencia)'}
                  </div>
                </td>
              </tr>
              
              <!-- Detalles -->
              <tr>
                <td style="padding: 30px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F9F7FE; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid rgba(94, 98, 130, 0.1);">
                        <span style="font-weight: 600; display: inline-block; width: 140px; color: #181E4B; font-family: Arial, sans-serif;">Email:</span>
                        <span style="font-weight: 500; color: #00C29D; font-family: Arial, sans-serif;">${email}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid rgba(94, 98, 130, 0.1);">
                        <span style="font-weight: 600; display: inline-block; width: 140px; color: #181E4B; font-family: Arial, sans-serif;">Nombre:</span>
                        <span style="color: #5E6282; font-family: Arial, sans-serif;">${name || 'No proporcionado'}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid rgba(94, 98, 130, 0.1);">
                        <span style="font-weight: 600; display: inline-block; width: 140px; color: #181E4B; font-family: Arial, sans-serif;">Interés principal:</span>
                        <span style="color: #5E6282; font-family: Arial, sans-serif;">${interest}</span>
                      </td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid rgba(94, 98, 130, 0.1);">
                          <span style="font-weight: 600; display: inline-block; width: 140px; color: #181E4B; font-family: Arial, sans-serif;">Fecha y hora:</span>
                          <span style="color: #5E6282; font-family: Arial, sans-serif;">${formattedDateTime}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid rgba(94, 98, 130, 0.1);">
                          <span style="font-weight: 600; display: inline-block; width: 140px; color: #181E4B; font-family: Arial, sans-serif;">Navegador:</span>
                          <span style="color: #5E6282; font-family: Arial, sans-serif;">${event.headers['user-agent'] ? event.headers['user-agent'].split(' ')[0] : 'No disponible'}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="font-weight: 600; display: inline-block; width: 140px; color: #181E4B; font-family: Arial, sans-serif;">IP:</span>
                          <span style="color: #5E6282; font-family: Arial, sans-serif;">${event.headers['client-ip'] || event.headers['x-forwarded-for'] || 'No disponible'}</span>
                        </td>
                      </tr>
                    </table>
                    
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: rgba(0, 194, 157, 0.1); border-left: 4px solid #00C29D; padding: 15px; border-radius: 8px; margin: 20px 0;">
                      <tr>
                        <td>
                          <p style="margin: 0; color: #181E4B; font-family: Arial, sans-serif;">
                            ${audienceSuccess ? '✅' : '⚠️'} <strong>Estado:</strong> ${audienceSuccess 
                              ? `Contacto agregado a la audiencia y correo de bienvenida enviado.` 
                              : `Correo de bienvenida enviado. Verificar estado de la audiencia.`}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Pie -->
                <tr>
                  <td style="padding: 20px; text-align: center; border-top: 1px solid #F9F7FE;">
                    <p style="color: #5E6282; font-size: 14px; margin: 0 0 8px 0; font-family: Arial, sans-serif;">Este es un mensaje automático. No responder a este correo.</p>
                    <p style="color: #5E6282; font-size: 14px; margin: 0; font-family: Arial, sans-serif;">Total de suscriptores: consulta el panel de Resend para estadísticas actualizadas.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `
  },en: {
    userSubject: 'Welcome to the Cognicise waitlist! 🧠',
    teamSubject: '🚀 New subscription to the Cognicise waitlist',
    
    generateUserEmailHTML: (name, interest, formattedDate, currentYear) => `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to Cognicise</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; color: #181E4B; background-color: #f5f5f5;">
        <!-- Main Container -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f5f5; padding: 20px 0;">
          <tr>
            <td align="center">
              <!-- Main Card -->
              <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);">
                <!-- Header -->
                <tr>
                  <td style="background-color: #00C29D; padding: 40px 20px; text-align: center;">
                    <h1 style="color: #FFFFFF; font-size: 28px; font-weight: 700; margin: 0; font-family: Arial, sans-serif;">Welcome to Cognicise!</h1>
                    <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin-top: 10px; font-family: Arial, sans-serif;">Cutting-edge technology for neurodegenerative care</p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <!-- Greeting -->
                    <p style="font-size: 18px; font-weight: 600; color: #181E4B; margin-bottom: 20px; font-family: Arial, sans-serif;">Hello${name ? ` ${name}` : ''}!</p>
                    
                    <!-- Welcome message -->
                    <p style="color: #5E6282; margin-bottom: 25px; font-size: 15px; font-family: Arial, sans-serif;">
                      Thank you for joining our waitlist. We're delighted that you're interested in Cognicise and want to keep you updated on our launch and all the developments we're working on.
                    </p>
                    
                    <!-- Important alert -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: rgba(0, 194, 157, 0.1); border-left: 4px solid #00C29D; padding: 20px; border-radius: 10px; margin: 30px 0;">
                      <tr>
                        <td>
                          <p style="margin: 0; font-weight: 500; color: #181E4B; font-family: Arial, sans-serif;">
                            <strong style="color: #00C29D;">Important!</strong> We'll notify you in May 2025 when we officially launch our platform. If you're part of our Early Birds, you'll have early access during our beta phase in April.
                          </p>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Interest indicated -->
                    <p style="color: #5E6282; margin-bottom: 25px; font-size: 15px; font-family: Arial, sans-serif;">
                      You've indicated special interest in: <strong style="color: #181E4B;">${interest}</strong>
                    </p>
                    <!-- Features -->
                    <h3 style="font-weight: 600; color: #181E4B; font-size: 16px; margin-bottom: 15px; font-family: Arial, sans-serif;">What makes Cognicise so special?</h3>
                    
                    <!-- Features Table -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px;">
                      <tr>
                        <td width="50%" valign="top" style="padding-right: 8px; padding-bottom: 15px;">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F9F7FE; padding: 15px; border-radius: 10px; height: 100%;">
                            <tr>
                              <td align="center" style="padding-bottom: 10px;">
                                <div style="width: 40px; height: 40px; background-color: rgba(0, 194, 157, 0.2); border-radius: 50%; display: inline-block; line-height: 40px; text-align: center;">
                                  <span style="color: #00C29D; font-weight: bold;">✓</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center">
                              <p style="font-weight: 600; font-size: 15px; color: #181E4B; margin-bottom: 5px; font-family: Arial, sans-serif;">Predictive Analysis</p>
                              <p style="font-size: 13px; color: #5E6282; margin: 0; font-family: Arial, sans-serif;">Valuable data-driven clinical insights</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td width="50%" valign="top" style="padding-left: 8px; padding-bottom: 15px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F9F7FE; padding: 15px; border-radius: 10px; height: 100%;">
                          <tr>
                            <td align="center" style="padding-bottom: 10px;">
                              <div style="width: 40px; height: 40px; background-color: rgba(0, 194, 157, 0.2); border-radius: 50%; display: inline-block; line-height: 40px; text-align: center;">
                                <span style="color: #00C29D; font-weight: bold;">✓</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td align="center">
                              <p style="font-weight: 600; font-size: 15px; color: #181E4B; margin-bottom: 5px; font-family: Arial, sans-serif;">Early Detection</p>
                              <p style="font-size: 13px; color: #5E6282; margin: 0; font-family: Arial, sans-serif;">Early identification of cognitive changes</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                        <td width="50%" valign="top" style="padding-right: 8px;">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F9F7FE; padding: 15px; border-radius: 10px; height: 100%;">
                            <tr>
                              <td align="center" style="padding-bottom: 10px;">
                                <div style="width: 40px; height: 40px; background-color: rgba(0, 194, 157, 0.2); border-radius: 50%; display: inline-block; line-height: 40px; text-align: center;">
                                  <span style="color: #00C29D; font-weight: bold;">✓</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center">
                                <p style="font-weight: 600; font-size: 15px; color: #181E4B; margin-bottom: 5px; font-family: Arial, sans-serif;">Personalized Exercises</p>
                                <p style="font-size: 13px; color: #5E6282; margin: 0; font-family: Arial, sans-serif;">Adapted to each patient profile</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td width="50%" valign="top" style="padding-left: 8px;">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F9F7FE; padding: 15px; border-radius: 10px; height: 100%;">
                            <tr>
                              <td align="center" style="padding-bottom: 10px;">
                                <div style="width: 40px; height: 40px; background-color: rgba(0, 194, 157, 0.2); border-radius: 50%; display: inline-block; line-height: 40px; text-align: center;">
                                  <span style="color: #00C29D; font-weight: bold;">✓</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center">
                                <p style="font-weight: 600; font-size: 15px; color: #181E4B; margin-bottom: 5px; font-family: Arial, sans-serif;">Connected Ecosystem</p>
                                <p style="font-size: 13px; color: #5E6282; margin: 0; font-family: Arial, sans-serif;">Comprehensive professional-patient platform</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Benefits list -->
                    <p style="color: #5E6282; margin-bottom: 15px; font-size: 15px; font-family: Arial, sans-serif;">As a member of our waitlist, you will receive:</p>
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px;">
                      <tr>
                        <td style="padding: 5px 0; color: #5E6282; font-family: Arial, sans-serif;">
                          • Priority access when we launch
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 5px 0; color: #5E6282; font-family: Arial, sans-serif;">
                          • Exclusive updates on development
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 5px 0; color: #5E6282; font-family: Arial, sans-serif;">
                          • The opportunity to provide feedback during our beta phases
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 5px 0; color: #5E6282; font-family: Arial, sans-serif;">
                          • Special promotions for early users
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Separator -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 30px 0;">
                      <tr>
                        <td bgcolor="#E5E7EB" style="height: 1px;"></td>
                      </tr>
                    </table>
                    
                    <!-- Questions and contact -->
                    <p style="color: #5E6282; margin-bottom: 25px; font-size: 15px; font-family: Arial, sans-serif;">
                      Have questions or suggestions? Reply directly to this email and we'll be happy to talk with you.
                    </p>
                    
                    <!-- CTA Button -->
                    <table border="0" cellpadding="0" cellspacing="0" style="margin: 30px auto;">
                      <tr>
                        <td bgcolor="#00C29D" style="padding: 14px 20px; border-radius: 10px; text-align: center;">
                          <a href="https://cognicise.app" style="color: white; text-decoration: none; font-weight: 600; font-size: 16px; font-family: Arial, sans-serif; display: inline-block;">Visit our website</a>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Social media -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 30px;">
                      <tr>
                        <td align="center">
                          <h4 style="font-weight: 600; color: #181E4B; margin-bottom: 15px; font-size: 15px; font-family: Arial, sans-serif;">Follow us on social media</h4>
                          <p style="color: #5E6282; margin-bottom: 15px; font-size: 14px; font-family: Arial, sans-serif;">And stay up to date with all our news</p>
                          
                          <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="padding: 0 10px;">
                                <a href="https://instagram.com/cognicise.app" style="text-decoration: none;">
                                  <table border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                      <td bgcolor="#F9F7FE" width="40" height="40" align="center" style="border-radius: 50%;">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" width="20" height="20" alt="Instagram" style="display: block; border: 0;" />
                                      </td>
                                    </tr>
                                  </table>
                                </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td bgcolor="#F9F7FE" style="padding: 25px 20px; text-align: center;">
                    <p style="color: #5E6282; font-size: 13px; margin-bottom: 8px; font-family: Arial, sans-serif;">&copy; ${currentYear} Cognicise. All rights reserved.</p>
                    <p style="color: #5E6282; font-size: 13px; margin-bottom: 8px; font-family: Arial, sans-serif;">Registration date: ${formattedDate}</p>
                    <p style="color: #5E6282; font-size: 13px; margin-bottom: 0; font-family: Arial, sans-serif;">If you don't want to receive communications from Cognicise, you can <a href="mailto:info@cognicise.app?subject=Cancel%20subscription" style="color: #00C29D; text-decoration: none;">unsubscribe</a>.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,generateTeamEmailHTML: (email, name, interest, audienceSuccess, event, formattedDateTime) => `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New waitlist subscription</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; color: #181E4B; line-height: 1.6; background-color: #f5f5f5;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding: 20px;">
        <tr>
          <td align="center">
            <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);">
              <!-- Header -->
              <tr>
                <td style="padding: 30px 30px; text-align: center; border-bottom: 1px solid #F9F7FE;">
                  <h1 style="color: #00C29D; margin: 0; font-size: 24px; font-family: Arial, sans-serif;">New waitlist subscription!</h1>
                  <div style="display: inline-block; background-color: #F9F7FE; color: #00C29D; font-size: 12px; padding: 4px 10px; border-radius: 20px; margin-top: 5px;">
                    ${audienceSuccess ? 'Added to Resend audience' : 'User registered (check audience)'}
                  </div>
                </td>
              </tr>
              
              <!-- Details -->
              <tr>
                <td style="padding: 30px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F9F7FE; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid rgba(94, 98, 130, 0.1);">
                        <span style="font-weight: 600; display: inline-block; width: 140px; color: #181E4B; font-family: Arial, sans-serif;">Email:</span>
                        <span style="font-weight: 500; color: #00C29D; font-family: Arial, sans-serif;">${email}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid rgba(94, 98, 130, 0.1);">
                        <span style="font-weight: 600; display: inline-block; width: 140px; color: #181E4B; font-family: Arial, sans-serif;">Name:</span>
                        <span style="color: #5E6282; font-family: Arial, sans-serif;">${name || 'Not provided'}</span>
                      </td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid rgba(94, 98, 130, 0.1);">
                          <span style="font-weight: 600; display: inline-block; width: 140px; color: #181E4B; font-family: Arial, sans-serif;">Main interest:</span>
                          <span style="color: #5E6282; font-family: Arial, sans-serif;">${interest}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid rgba(94, 98, 130, 0.1);">
                          <span style="font-weight: 600; display: inline-block; width: 140px; color: #181E4B; font-family: Arial, sans-serif;">Date and time:</span>
                          <span style="color: #5E6282; font-family: Arial, sans-serif;">${formattedDateTime}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid rgba(94, 98, 130, 0.1);">
                          <span style="font-weight: 600; display: inline-block; width: 140px; color: #181E4B; font-family: Arial, sans-serif;">Browser:</span>
                          <span style="color: #5E6282; font-family: Arial, sans-serif;">${event.headers['user-agent'] ? event.headers['user-agent'].split(' ')[0] : 'Not available'}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="font-weight: 600; display: inline-block; width: 140px; color: #181E4B; font-family: Arial, sans-serif;">IP:</span>
                          <span style="color: #5E6282; font-family: Arial, sans-serif;">${event.headers['client-ip'] || event.headers['x-forwarded-for'] || 'Not available'}</span>
                        </td>
                      </tr>
                    </table>
                    
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: rgba(0, 194, 157, 0.1); border-left: 4px solid #00C29D; padding: 15px; border-radius: 8px; margin: 20px 0;">
                      <tr>
                        <td>
                          <p style="margin: 0; color: #181E4B; font-family: Arial, sans-serif;">
                            ${audienceSuccess ? '✅' : '⚠️'} <strong>Status:</strong> ${audienceSuccess 
                              ? `Contact added to audience and welcome email sent.` 
                              : `Welcome email sent. Check audience status.`}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="padding: 20px; text-align: center; border-top: 1px solid #F9F7FE;">
                    <p style="color: #5E6282; font-size: 14px; margin: 0 0 8px 0; font-family: Arial, sans-serif;">This is an automated message. Do not reply to this email.</p>
                    <p style="color: #5E6282; font-size: 14px; margin: 0; font-family: Arial, sans-serif;">Total subscribers: check the Resend dashboard for updated statistics.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `
  }
};
exports.handler = async function(event, context) {
  // Habilitar CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: JSON.stringify({ message: 'OK' })
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const payload = JSON.parse(event.body);
    const { email, name = "", interest = "todas las funcionalidades", language = "es" } = payload;
    
    // Determinar el idioma a usar
    // Si no se especifica o es inválido, usar español como predeterminado
    const userLanguage = ['es', 'en'].includes(language) ? language : 'es';
    
    if (!email) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          success: false,
          error: userLanguage === 'es' ? 'El email es obligatorio' : 'Email is required'
        })
      };
    }
    
    console.log(`Received waitlist submission for: ${email} in language: ${userLanguage}`);
    
    // 1. Añadir a la audiencia de Resend
    let audienceSuccess = false;
    console.log('Trying to add contact to audience...');
    console.log('Audience ID to use:', AUDIENCE_ID);

    const audiencekey = new Resend('re_iJha37aJ_Aj5VbeTaby4QVcD85W8W82Bc');
    console.log('Resend instance for audience created');

    try {
      const apiKey = 're_iJha37aJ_Aj5VbeTaby4QVcD85W8W82Bc'; 
      const directResponse = await fetch(`https://api.resend.com/audiences/${AUDIENCE_ID}/contacts`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          audienceId: AUDIENCE_ID,
          first_name: name,
          last_name: interest,
          unsubscribed: false,
          // Guardar el idioma preferido del usuario como un campo personalizado
          custom_fields: {
            preferred_language: userLanguage
          }
        })
      });
      
      const directResult = await directResponse.text();
      console.log('Direct API response:', directResult);
      
      try {
        const jsonResponse = JSON.parse(directResult);
        console.log('Response as JSON:', jsonResponse);
        // Si llegamos aquí sin error, consideramos que fue exitoso
        audienceSuccess = true;
      } catch (e) {
        console.log('Could not parse as JSON');
      }
    } catch (directApiError) {
      console.error('Error with direct API call:', directApiError);
    }
    
    // 2. Enviar email de confirmación al usuario en su idioma
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    
    // Formato de fecha según el idioma
    const formattedDate = currentDate.toLocaleDateString(
      userLanguage === 'es' ? 'es-ES' : 'en-US', 
      {
        day: 'numeric',
        month: userLanguage === 'es' ? 'long' : 'long',
        year: 'numeric'
      }
    );
    
    // Seleccionamos la plantilla correspondiente al idioma del usuario
    const template = emailTemplates[userLanguage];
    
    // Email para el usuario con el idioma seleccionado
    const data = await resend.emails.send({
      from: 'Cognicise Team <info@cognicise.app>',
      to: [email],
      subject: template.userSubject,
      html: template.generateUserEmailHTML(name, interest, formattedDate, currentYear),
    });
    
    console.log('Email sent successfully:', data);
    
    // 3. Enviar email de notificación para el equipo (siempre en español para el equipo interno)
    try {
      const formattedDateTime = currentDate.toLocaleString('es-ES', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      });
      
      await resend.emails.send({
        from: 'Cognicise Waitlist <info@cognicise.app>',
        to: ['info@cognicise.app'], // Correo del equipo
        subject: emailTemplates.es.teamSubject,
        html: emailTemplates.es.generateTeamEmailHTML(
          email, 
          name, 
          interest, 
          audienceSuccess, 
          event, 
          formattedDateTime
        ),
      });
      console.log('Notification email sent to team');
    } catch (notificationError) {
      console.error('Error sending notification to team:', notificationError);
      // No detenemos el flujo por un error en la notificación
    }
    
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        success: true,
        message: userLanguage === 'es' ? 'Se ha unido exitosamente a la lista de espera' : 'Successfully joined waitlist',
        data: data
      })
    };
  } catch (error) {
    console.error('Error processing waitlist submission:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        success: false,
        error: error.message || 'Ocurrió un error al procesar tu solicitud',
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    };
  }
};