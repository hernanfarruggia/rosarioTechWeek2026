'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MotionConfig } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Pillars from '@/components/sections/Pillars';
import PreviousEdition from '@/components/sections/PreviousEdition';
import Sponsors from '@/components/sections/Sponsors';
import Hosts from '@/components/sections/Hosts';
import Press from '@/components/sections/Press';
import Team from '@/components/sections/Team';
import Contact from '@/components/sections/Contact';
import { meta } from '@/content/site';

const predefinedMessages: Record<string, string> = {
  venue: 'Quisiera proponer un espacio/oficina o evento para sumar a la comunidad de la Tech Week.',
  speaker: 'Quisiera postularme para dar una charla/roundtable/workshop en algún evento de la Tech Week.',
  sponsor: 'Quisiera apoyar las iniciativas de la Tech Week con mi marca.',
  press: 'Quisiera registrarme como medio/prensa para tener acceso exclusivo a entrevistas e información de los eventos.',
};

export default function Home() {
  const router = useRouter();
  const [formMessage, setFormMessage] = useState('');
  const [formInterest, setFormInterest] = useState('');

  const handleContactFormUpdate = (interest: string) => {
    setFormMessage(predefinedMessages[interest] || '');
    setFormInterest(interest);
    router.push('#contacto');
  };

  return (
    <MotionConfig reducedMotion="user">
      <Navigation />
      <main>
        <Hero btnAction={handleContactFormUpdate} />
        <About />
        <Pillars />
        <PreviousEdition />
        <Sponsors btnAction={handleContactFormUpdate} />
        <Hosts btnAction={handleContactFormUpdate} />
        <Press btnAction={handleContactFormUpdate} />
        <Team />
        <Contact message={formMessage} interest={formInterest} />
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <span>Rosario TechWeek · {meta.edition}</span>
          <span>{meta.dates} · {meta.location}</span>
        </div>
      </footer>
    </MotionConfig>
  );
}
