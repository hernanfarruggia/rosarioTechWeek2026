import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  interest: string;
  message: string;
}

const interestLabels: Record<string, string> = {
  sponsor: 'Ser sponsor',
  speaker: 'Ser speaker',
  venue: 'Ofrecer espacio/venue',
  attendee: 'Asistir al evento',
  press: 'Acreditación de prensa',
  other: 'Otro',
};

// Resend sandbox sender: only deliverable to the Resend account owner's own
// email until a custom domain is verified (no DNS access to rosariotechweek.com yet)
const FROM = 'Rosario TechWeek <onboarding@resend.dev>';
// Recipient of the internal notification — forwarded to rosariotechweek@gmail.com via a Gmail filter
const TO = ['hernan.farruggia@gmail.com'];

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, organization, interest, message }: ContactFormData =
      await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son campos requeridos' },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY not configured');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const interestText = interestLabels[interest] || interest || 'No especificado';
    const text = [
      'Nuevo mensaje de contacto:',
      '',
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Teléfono: ${phone || 'No especificado'}`,
      `Organización: ${organization || 'No especificada'}`,
      `Interés: ${interestText}`,
      '',
      'Mensaje:',
      message,
      '',
      '--',
      'Enviado desde el formulario de contacto de rosariotechweek.com',
    ].join('\n');

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: TO,
        reply_to: email, // "responder" va directo al contacto
        subject: `Nuevo contacto Rosario TechWeek 2026 — ${interestText}`,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error('Resend failed:', res.status, detail);
      throw new Error(`Resend responded ${res.status}`);
    }

    return NextResponse.json({ message: 'Email sent successfully', success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 },
    );
  }
}
