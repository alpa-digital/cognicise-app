import { Resend } from 'resend';


// Inicializar Resend con la API key directamente
const resend = new Resend('re_tu_api_key_aqui'); // Reemplaza con tu API key real

// Para App Router
export async function POST(request) {
  try {
    // Log para debugging
    console.log('Waitlist API endpoint called');
    
    const { email } = await request.json();
    console.log('Email received:', email);
    
    // Enviar email usando Resend
    const emailData = await resend.emails.send({
      from: 'Cognicise <notificaciones@cognicise.app>',
      to: [email],
      subject: '¡Bienvenido a la lista de espera de Cognicise!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #00C29D;">¡Gracias por unirte a Cognicise!</h2>
          <p>Te mantendremos informado sobre nuestro lanzamiento.</p>
        </div>
      `,
    });
    
    console.log('Email sent:', emailData);
    
    return new Response(JSON.stringify({
      success: true,
      message: 'Successfully joined waitlist'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    console.error('Error in waitlist API:', error);
    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to join waitlist',
      details: error.message
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}

// Para Pages Router (descomenta esto y comenta la función POST de arriba)
/*
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Waitlist API endpoint called');
    
    const { email } = req.body;
    console.log('Email received:', email);
    
    // Enviar email usando Resend
    const emailData = await resend.emails.send({
      from: 'Cognicise <notificaciones@cognicise.app>',
      to: [email],
      subject: '¡Bienvenido a la lista de espera de Cognicise!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #00C29D;">¡Gracias por unirte a Cognicise!</h2>
          <p>Te mantendremos informado sobre nuestro lanzamiento.</p>
        </div>
      `,
    });
    
    console.log('Email sent:', emailData);
    
    return res.status(200).json({
      success: true,
      message: 'Successfully joined waitlist'
    });
  } catch (error) {
    console.error('Error in waitlist API:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to join waitlist',
      details: error.message
    });
  }
}
*/