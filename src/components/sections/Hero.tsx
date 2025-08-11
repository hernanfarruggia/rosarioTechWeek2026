import Image from 'next/image';
import Button from '@/components/ui/Button';
import FadeUp from '@/components/ui/FadeUp';
import { Calendar1Icon } from 'lucide-react';

export default function Hero() {

  return (
    <section className="min-h-screen flex items-center justify-center bg-accent-black overflow-hidden relative dot-matrix">
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary opacity-18 rounded-full blur-3xl animate-float-1"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-secondary opacity-12 rounded-full blur-2xl animate-float-2"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-secondary opacity-10 rounded-full blur-xl animate-float-3"></div>
        <div className="absolute -top-40 left-40 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl animate-float-1"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-32 text-center relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col">
          <FadeUp className='flex justify-center'>
            <div className="flex items-center justify-center gap-2 max-w-60 bg-primary/10 text-primary px-6 py-3 text-sm font-bold font-roboto border border-primary">
              <Calendar1Icon className="w-4 h-4" />
              23 - 30 Septiembre 2025
            </div>
          </FadeUp>

          <FadeUp>
            {/* Event Title */}
            <div className='w-full h-48 md:h-96 relative my-6'>
              <Image
                src="/logo.svg"
                alt="Rosario TechWeek Logo"
                fill
                priority
                className='rotate-6'
              />
            </div>
          </FadeUp>
          
          {/* Description */}
          <FadeUp delay={0.4} className='mb-8'>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Desde Rosario, crece una comunidad que innova, emprende y transforma. <br /> 
              <span className='font-semibold'>Rosario TechWeek</span> es una semana para visibilizar el talento, activar ideas y construir conexiones.
            </p>
          </FadeUp>
          
          {/* CTA Buttons */}
          <FadeUp delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" href="#agenda" className='w-full md:w-auto'>
                Ver Agenda
              </Button>
              <Button variant="outline-secondary" size="lg" href="#sponsors" className='w-full md:w-auto'>
                Sumate como aliado
              </Button>
              <Button variant="outline-tertiary" size="lg" href="#anfitriones" className='w-full md:w-auto'>
                Registrá tu evento!
              </Button>
            </div>
          </FadeUp>

          <FadeUp delay={0.8} className='flex justify-center mt-24'>
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-300/50 flex justify-center rounded-2xl animate-pulse">
                <div className="w-1 h-3 bg-gray-300/50 mt-2 animate-pulse"></div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
      
      {/* Scroll indicator */}
      
    </section>
  );
}