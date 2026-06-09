'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import CTAButton from '@/components/ui/CTAButton';
import Highlight from '@/components/ui/Highlight';
import { meta } from '@/content/site';

interface HeroProps {
  btnAction: (interest: string) => void;
}

export default function Hero({ btnAction }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 80]);

  return (
    <header ref={ref} className="hero theme-dark" id="hero">
      <div className="bg-grid" aria-hidden="true" />
      <motion.div
        className="bg-glow"
        aria-hidden="true"
        style={{ y, background: 'radial-gradient(45% 40% at 75% 25%, rgba(255,106,0,0.22), transparent 70%)' }}
      />
      <div className="container">
        <Reveal className="pills">
          <span className="pill">{meta.edition}</span>
          <span className="pill">{meta.dates}</span>
          <span className="pill">{meta.location}</span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="h-display">
            Ya dimos el primer paso. Es tiempo de <Highlight>acelerar</Highlight>.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="lead">
            Potenciando el ecosistema tecnológico y emprendedor de Rosario. Cinco días para
            visibilizar, celebrar y conectar el talento de la ciudad.
          </p>
        </Reveal>
        <Reveal delay={240} className="actions">
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
