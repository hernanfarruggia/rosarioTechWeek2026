import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

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

    // Configurar OAuth2 client
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    try {
      // Debug logging
      console.log('Gmail API Setup:', {
        hasClientId: !!process.env.GOOGLE_CLIENT_ID,
        hasClientSecret: !!process.env.GOOGLE_CLIENT_SECRET,
        hasRefreshToken: !!process.env.GOOGLE_REFRESH_TOKEN,
        hasGmailUser: !!process.env.GMAIL_USER,
        gmailUser: process.env.GMAIL_USER
      });

      // Get access token
      const { token: accessToken } = await oauth2Client.getAccessToken();
      if (!accessToken) {
        throw new Error('No access token received');
      }
      console.log('Access token obtained successfully');

      // Initialize Gmail API
      const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

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

      // Create email content
      const emailContent = `From: ${process.env.GMAIL_USER}
To: ${process.env.EMAIL_TO}, hernan.farruggia@gmail.com
Subject: Nuevo contacto de Rosario TechWeek 2025 - ${interestText}
Content-Type: text/html; charset=utf-8

<h2>Nuevo mensaje de contacto</h2>
<p><strong>Nombre:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Teléfono:</strong> ${phone || 'No especificado'}</p>
<p><strong>Organización:</strong> ${organization || 'No especificada'}</p>
<p><strong>Interés:</strong> ${interestText}</p>
<p><strong>Mensaje:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
<hr>
<p><em>Enviado desde el formulario de contacto de Rosario TechWeek 2025</em></p>
`;

      // Encode email content as base64url
      const encodedMessage = Buffer.from(emailContent)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

      // Send email using Gmail API
      await gmail.users.messages.send({
        userId: 'me',
        requestBody: {
          raw: encodedMessage,
        },
      });

      console.log('Email sent successfully via Gmail API');

      return NextResponse.json({ 
        message: 'Email enviado correctamente' 
      }, { status: 200 });

    } catch (gmailApiError) {
      console.error('Error with Gmail API:', gmailApiError);
      return NextResponse.json(
        { error: 'Error enviando email via Gmail API' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}