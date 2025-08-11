'use client';

import Button from '@/components/ui/Button';
import FadeUp from '@/components/ui/FadeUp';
import { InstagramIcon, LinkedinIcon, MessageCircleIcon, TwitterIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ContactProps {
  message?: string;
  interest?: string;
}

export default function Contact({ message, interest }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: interest || '',
    message: message || ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      interest: interest || prev.interest,
      message: message || prev.message
    }));
  }, [message, interest]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          organization: '',
          interest: '',
          message: ''
        });
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

  const socialLinks = [
    { name: "Twitter", icon: TwitterIcon, href: "#" },
    { name: "LinkedIn", icon: LinkedinIcon, href: "https://www.linkedin.com/company/rosario-tech-week" },
    { name: "Instagram", icon: InstagramIcon, href: "#" },
    { name: "WhatsApp", icon: MessageCircleIcon, href: "https://docs.google.com/forms/d/e/1FAIpQLSdo9yMIaoqnwnLhGsBHmKPdS37GsQQSDMalqi1Ulpzh_S3s2Q/viewform" }
  ];

  return (
    <section id="contacto" className="py-20 bg-black">
      <div className="container mx-auto px-6 my-24 flex flex-col gap-16">
        <FadeUp className='flex flex-col gap-8'>
          <h2 className="text-6xl md:text-8xl text-white">
            Contacto
          </h2>
          <h3 className="text-2xl sm:text-3xl text-primary">
            La innovación se activa en comunidad. ¿Te sumás?
          </h3>
          <p className="text-white text-xl font-medium">
            Rosario TechWeek 2025 será un hito colectivo. Estamos convocando a empresas, 
            universidades, ONGs, inversores y gobiernos a sumar su energía, ideas y espacios.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <FadeUp delay={0.2}>
            <h4 className="text-2xl text-white mb-6">
              Escribinos:
            </h4>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-accent-gray mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-transparent transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-accent-gray mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-transparent transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-accent-gray mb-2">
                    Organización
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-transparent transition-colors"
                    placeholder="Empresa, startup, universidad..."
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-accent-gray mb-2">
                    Interés
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="sponsor">Ser sponsor</option>
                    <option value="speaker">Ser speaker</option>
                    <option value="venue">Ofrecer espacio/venue</option>
                    <option value="attendee">Asistir al evento</option>
                    <option value="press">Acreditación de prensa</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-accent-gray mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Contanos cómo querés ser parte de la Rosario TechWeek 2025"
                  ></textarea>
                </div>
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                    ¡Mensaje enviado correctamente! Te contactaremos pronto.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                    Error al enviar el mensaje. Por favor, intentá de nuevo.
                  </div>
                )}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </Button>
              </form>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <h4 className="text-2xl font-bold text-accent-black mb-6">
              Conectá con nosotros
            </h4>
            <p className="text-white mb-6">
              Seguinos en redes sociales para estar al día con todas las novedades, 
              anuncios y contenido exclusivo de la Rosario TechWeek 2025.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button key={index} variant='outline-tertiary' size="lg" href={social.href} target="_blank" className='w-full md:w-auto'>
                      <IconComponent className='w-6 h-6 mr-2' />
                      {social.name}
                  </Button>
                );
              })}
            </div>
          </FadeUp>
        </div>

      </div>
    </section>
  );
}