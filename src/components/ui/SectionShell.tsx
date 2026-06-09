'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface SectionShellProps {
  id: string;
  index: string;
  eyebrow: string;
  total?: string;
  theme?: 'dark' | 'light';
  className?: string;
  children: ReactNode;
}

/**
 * SectionShell — container for every section. Owns the theme background,
 * decorative layer (grid + parallax glow), container, and the eyebrow row
 * with index + page-counter. Sets the `id` anchor for scroll nav.
 */
export default function SectionShell({
  id,
  index,
  eyebrow,
  total = '09',
  theme = 'dark',
  className = '',
  children,
}: SectionShellProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-32, 32]);

  return (
    <section ref={ref} id={id} className={`section theme-${theme} ${className}`.trim()}>
      <div className="bg-grid" aria-hidden="true" />
      <motion.div className="bg-glow" aria-hidden="true" style={{ y }} />
      <div className="container">
        <div className="eyebrow-row">
          <span className="lead">
            <span className="idx">{index}</span> <span>—</span> <span>{eyebrow}</span>
          </span>
          <span className="rule" />
          <span className="count">
            {index}
            <span>/{total}</span>
          </span>
        </div>
        {children}
      </div>
    </section>
  );
}
