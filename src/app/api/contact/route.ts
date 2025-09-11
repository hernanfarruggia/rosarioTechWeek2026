import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  interest: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, organization, interest, message } = body;

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son campos requeridos' },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error('BREVO_API_KEY not found');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Mapear valores del select para el email
    const interestLabels: { [key: string]: string } = {
      sponsor: 'Ser sponsor',
      speaker: 'Ser speaker', 
      venue: 'Ofrecer espacio/venue',
      attendee: 'Asistir al evento',
      press: 'Acreditación de prensa',
      other: 'Otro'
    };

    const interestText = interestLabels[interest] || interest || 'No especificado';

    // Prepare internal email (to hernan@wearekadre.com)
    const internalEmailData = {
      sender: {
        name: "Rosario Tech Week",
        email: "hernan@wearekadre.com"
      },
      to: [{
        email: "rosariotechweek@gmail.com"
      }, {
        email: "hernan.farruggia@gmail.com"
      }],
      subject: `Nuevo contacto de Rosario TechWeek 2025 - ${interestText}`,
      textContent: `
Nuevo mensaje de contacto:

Nombre: ${name}
Email: ${email}
Telefono: ${phone || 'No especificado'}
Organización: ${organization || 'No especificada'}
Interés: ${interestText}

Message:
${message}

--
Enviado desde el formulario de contacto de Rosario TechWeek 2025
      `.trim()
    };

    // Send both emails
    const brevoApiUrl = 'https://api.brevo.com/v3/smtp/email';
    
    const internalResponse = await fetch(brevoApiUrl, {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(internalEmailData),
    });

    if (!internalResponse.ok) {
      const error = await internalResponse.text();
      console.error('Internal email failed:', error);
      throw new Error('Failed to send internal notification');
    }

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}