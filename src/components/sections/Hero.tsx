'use client';

import { useRef } from 'react';
import Reveal from '@/components/ui/Reveal';
import SplitText from '@/components/ui/SplitText';
import Highlight from '@/components/ui/Highlight';
import CTAButton from '@/components/ui/CTAButton';
import { meta } from '@/content/site';

interface HeroProps {
  btnAction: (interest: string) => void;
}

export default function Hero({ btnAction }: HeroProps) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <header ref={ref} className="hero theme-dark" id="hero" onMouseMove={onMove}>
      <div
        className="hero-glow"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(38% 36% at var(--mx, 70%) var(--my, 28%), rgba(255,106,0,0.26), transparent 70%)',
        }}
      />

      <div className="container">
        <Reveal trigger="load" delay={150} className="pills">
          <span className="pill">{meta.edition}</span>
          <span className="pill">{meta.dates}</span>
          <span className="pill">{meta.location}</span>
        </Reveal>

        <SplitText
          as="h1"
          className="display-xl"
          style={{ fontSize: 'clamp(3rem, 7vw, 5rem)' }}
          variant="words"
          trigger="load"
          delay={300}
          text="Potenciando el ecosistema emprendedor de Rosario."
          highlight="Rosario"
        />

        <Reveal trigger="load" delay={650}>
          <p className="lead" style={{ marginTop: '1.75rem' }}>
            Ya dimos el primer paso. Es tiempo de <Highlight>acelerar</Highlight>. Cinco días para
            visibilizar, celebrar y conectar el talento de la ciudad.
          </p>
        </Reveal>

        <Reveal trigger="load" delay={800} className="actions">
          <CTAButton variant="solid" size="lg" href={meta.luma} target="_blank">
            Ver agenda
          </CTAButton>
          <CTAButton variant="outline" size="lg" onClick={() => btnAction('sponsor')}>
            Ser sponsor
          </CTAButton>
          <CTAButton variant="ghost" size="lg" onClick={() => btnAction('venue')}>
            Sumar evento
          </CTAButton>
        </Reveal>
      </div>

      <div className="scrollcue">
        Scroll <span aria-hidden="true">↓</span>
      </div>
    </header>
  );
}
