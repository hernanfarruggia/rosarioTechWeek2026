import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  interest: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, organization, interest, message } = body;

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son campos requeridos' },
        { status: 400 }
      );
    }

    // Configurar transporter de nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true para 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

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

    // Configurar el email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_TO,
      subject: `Nuevo contacto de Rosario TechWeek 2025 - ${interestText}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organización:</strong> ${organization || 'No especificada'}</p>
        <p><strong>Interés:</strong> ${interestText}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Enviado desde el formulario de contacto de Rosario TechWeek 2025</em></p>
      `,
      text: `
        Nuevo mensaje de contacto
        
        Nombre: ${name}
        Email: ${email}
        Organización: ${organization || 'No especificada'}
        Interés: ${interestText}
        
        Mensaje:
        ${message}
        
        ---
        Enviado desde el formulario de contacto de Rosario TechWeek 2025
      `
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      message: 'Email enviado correctamente' 
    }, { status: 200 });

  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}