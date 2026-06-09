'use client';

import { useState, useEffect } from 'react';
import SectionShell from '@/components/ui/SectionShell';
import Reveal from '@/components/ui/Reveal';
import CTAButton from '@/components/ui/CTAButton';
import { socials } from '@/content/site';

interface ContactProps {
  message?: string;
  interest?: string;
}

export default function Contact({ message, interest }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    interest: interest || '',
    message: message || '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      interest: interest || prev.interest,
      message: message || prev.message,
    }));
  }, [message, interest]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', organization: '', interest: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionShell id="contacto" index="09" eyebrow="Contacto" theme="dark" className="contact">
      <Reveal>
        <h2 className="h-display" style={{ marginBottom: '1rem' }}>Contacto</h2>
      </Reveal>
      <Reveal delay={80}>
        <p className="kicker">La innovación se activa en comunidad. ¿Te sumás?</p>
      </Reveal>
      <Reveal delay={120}>
        <p className="lead" style={{ maxWidth: '56ch', marginBottom: '3rem' }}>
          Convocamos a empresas, universidades, ONGs, inversores y gobiernos a sumar su energía,
          ideas y espacios.
        </p>
      </Reveal>

      <div className="contact-grid">
        <Reveal>
          <form onSubmit={handleSubmit} noValidate>
            <div className="field-2">
              <div className="field">
                <label htmlFor="f-name">Nombre *</label>
                <input id="f-name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Tu nombre completo" required />
              </div>
              <div className="field">
                <label htmlFor="f-email">Email *</label>
                <input id="f-email" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="tu@email.com" required />
              </div>
              <div className="field">
                <label htmlFor="f-phone">Teléfono</label>
                <input id="f-phone" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+54 341 123 4567" />
              </div>
              <div className="field">
                <label htmlFor="f-org">Organización</label>
                <input id="f-org" name="organization" value={formData.organization} onChange={handleInputChange} placeholder="Empresa, startup, universidad..." />
              </div>
            </div>
            <div className="field">
              <label htmlFor="f-interest">Interés</label>
              <select id="f-interest" name="interest" value={formData.interest} onChange={handleInputChange}>
                <option value="">Seleccioná una opción</option>
                <option value="sponsor">Ser sponsor</option>
                <option value="speaker">Ser speaker</option>
                <option value="venue">Ofrecer espacio / venue</option>
                <option value="attendee">Asistir al evento</option>
                <option value="press">Acreditación de prensa</option>
                <option value="other">Otro</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="f-message">Mensaje *</label>
              <textarea id="f-message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Contanos cómo querés ser parte" required />
            </div>

            {submitStatus === 'success' && (
              <div className="form-note ok">¡Mensaje enviado! Te contactaremos pronto.</div>
            )}
            {submitStatus === 'error' && (
              <div className="form-note err">No pudimos enviar el mensaje. Intentá de nuevo.</div>
            )}

            <CTAButton type="submit" variant="solid" size="lg" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando…' : 'Enviar mensaje'}
            </CTAButton>
          </form>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <h3 className="h3" style={{ color: '#fff', marginBottom: '1rem' }}>Conectá con nosotros</h3>
            <p className="lead" style={{ fontSize: 'var(--text-body)', marginBottom: '1.5rem' }}>
              Seguinos en redes para estar al día con novedades, anuncios y contenido exclusivo.
            </p>
            <div className="socials">
              {socials.map((s) => (
                <CTAButton key={s.name} variant="outline" href={s.href} target="_blank">
                  {s.name}
                </CTAButton>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
