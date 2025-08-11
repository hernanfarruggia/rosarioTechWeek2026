'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Agenda from '@/components/sections/Agenda';
import Attendees from '@/components/sections/Attendees';
import Sponsors from '@/components/sections/Sponsors';
import Hosts from '@/components/sections/Hosts';
import Press from '@/components/sections/Press';
// import VisitRosario from '@/components/sections/VisitRosario';
import Contact from '@/components/sections/Contact';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [formMessage, setFormMessage] = useState('');
  const [formInterest, setFormInterest] = useState('');
  
  const predefinedMessages: Record<string, string> = {
    venue: 'Quisiera proponer un espacio/oficina o evento para sumar a la comunidad de la Tech Week.',
    speaker: 'Quisiera postularme para poder dar una charla/roundtable/workshop en algún evento de la Tech Week.',
    sponsor: 'Quisiera apoyar las iniciativas de la Tech Week con mi marca.',
    press: 'Quisiera registrarme como medio/prensa para poder tener acceso exclusivo a entrevistas e información de los eventos.'
  }

  const handleContactFormUpdate = (interest: string) => {
    setFormMessage(predefinedMessages[interest]);
    setFormInterest(interest);
    router.push('#contacto');
  }


  return (
    <div>
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="agenda">
          <Agenda />
        </section>
        <section id="asistentes">
          <Attendees />
        </section>
        <section id="sponsors">
          <Sponsors btnAction={handleContactFormUpdate} />
        </section>
        <section id="anfitriones">
          <Hosts btnAction={handleContactFormUpdate} />
        </section>
        <section id="prensa">
          <Press btnAction={handleContactFormUpdate} />
        </section>
        {/* <section id="visita-rosario">
          <VisitRosario />
        </section> */}
        <Contact
          message={formMessage || ''}
          interest={formInterest}
        />
      </main>
    </div>
  );
}
