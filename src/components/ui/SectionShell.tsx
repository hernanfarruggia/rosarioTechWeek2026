'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Parallax from './Parallax';

interface SectionShellProps {
  id: string;
  eyebrow: string;
  index?: string;
  total?: string;
  theme?: 'dark' | 'light';
  /** giant outlined word/number drawn behind the content, bleeding off the top */
  watermark?: string;
  className?: string;
  children: ReactNode;
}

/**
 * SectionShell — container for every section. Sections are opaque panels pinned
 * to the top (sticky stack); as you scroll, the next panel slides up and covers
 * this one. While being covered, the outgoing panel dims + scales down a touch
 * to read as depth. Themes alternate black/white for the color-invert effect.
 */
export default function SectionShell({
  id,
  eyebrow,
  index,
  total = '09',
  theme = 'dark',
  watermark,
  className = '',
  children,
}: SectionShellProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  // last viewport of travel: 0 = section bottom at viewport bottom, 1 = section
  // bottom at viewport top — i.e. the window where the next panel covers it.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 0.95]);
  const brightness = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 0.78]);
  const filter = useTransform(brightness, (b) => `brightness(${b})`);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`section theme-${theme} ${className}`.trim()}
      style={{ scale, filter, transformOrigin: '50% 0%' }}
    >
      {theme === 'light' && <div className="bg-grid" aria-hidden="true" />}
      {watermark && (
        <Parallax speed={0.12} className="watermark" aria-hidden>
          {watermark}
        </Parallax>
      )}
      <div className="container">
        <div className="eyebrow-row">
          <span className="lead">
            {index && (
              <>
                <span className="idx">{index}</span>{' '}
              </>
            )}
            <span>—</span> <span>{eyebrow}</span>
          </span>
          <span className="rule" />
          {index && (
            <span className="count">
              {index}
              <span>/{total}</span>
            </span>
          )}
        </div>
        {children}
      </div>
    </motion.section>
  );
}
