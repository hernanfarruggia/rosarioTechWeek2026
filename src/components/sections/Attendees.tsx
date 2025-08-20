import Button from '@/components/ui/Button';
import FadeUp from '@/components/ui/FadeUp';
import { CalendarCheckIcon, CheckIcon, MessageCircleIcon } from 'lucide-react';
import Image from 'next/image';

export default function Attendees() {
  const benefits = [
    "Hacer networking, conectar con personas y proyectos",
    "Participar en diferentes talleres gratuitos y de pago",
    "Asistir a todo tipo de charlas inspiradoras",
    "Encontrar oportunidades profesionales y de negocio",
    "Conocer qué está pasando en Rosario y el mundo"
  ];

  return (
    <section id="asistentes" className="py-20 bg-black dot-matrix">
      <div className="container mx-auto px-6 my-24 flex flex-col gap-16">
        <FadeUp className='flex flex-col gap-8'>
          <h2 className="text-6xl md:text-8xl text-white">
            Asistentes
          </h2>
          <h3 className="text-2xl sm:text-3xl text-primary">
            Vos también sos parte del cambio
          </h3>
          <p className="text-white text-xl font-medium">
            ¿Querés sumarte a una comunidad que crea, prueba y transforma?<br />
            ¿Estás explorando el mundo tech?<br />
            Rosario TechWeek está pensada para vos.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <FadeUp delay={0.2}>
            <h4 className="text-2xl text-white mb-6">
              Durante toda la semana vas a poder:
            </h4>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckIcon className='w-6 h-6 mr-2 text-primary' />
                  <p className="text-white text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <div className="bg-gradient-to-br from-secondary/20 to-primary/20 h-72 w-full md:max-w-3/4 flex items-center justify-center relative">
              <Image
                src="/2.jpeg"
                alt='Asistentes a Rosario TechWeek'
                fill
                className='object-cover'
              />
              <div className="absolute inset-0 bg-black/25 hover:bg-transparent transition-colors duration-300"></div>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.4} className="bg-white/20 p-8 text-center flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button variant='outline-tertiary' size="lg" href="https://lu.ma/rosariotechweek" target="_blank" className='w-full md:w-auto'>
            <CalendarCheckIcon className='w-6 h-6 mr-2' />
            Ver calendario!
          </Button>
          <Button variant="tertiary" size="lg" href="https://docs.google.com/forms/d/e/1FAIpQLSdo9yMIaoqnwnLhGsBHmKPdS37GsQQSDMalqi1Ulpzh_S3s2Q/viewform" target="_blank" className='w-full md:w-auto'>
            <MessageCircleIcon className='w-6 h-6 mr-2' />
            Comunidad de Whatsapp
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}