'use client';

import { motion, type Variants } from 'framer-motion';
import type { CSSProperties } from 'react';

type Variant = 'words' | 'mask' | 'blur';

interface SplitTextProps {
  text: string;
  highlight?: string;
  color?: 'orange' | 'blue';
  variant?: Variant;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  style?: CSSProperties;
  /** load = animate on mount; scroll = animate when it enters the viewport */
  trigger?: 'load' | 'scroll';
  /** delay before the first word (ms) — keep 250–400 for a noticeable beat */
  delay?: number;
  /** ms between words */
  stagger?: number;
}

const WORD: Record<Variant, Variants> = {
  words: {
    hidden: { opacity: 0, y: '0.5em' },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  },
  blur: {
    hidden: { opacity: 0, y: '0.4em', filter: 'blur(10px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  },
  mask: {
    hidden: { opacity: 0, y: '0.4em', clipPath: 'inset(0 0 100% 0)' },
    show: { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  },
};

/**
 * SplitText — reveals a headline word-by-word via framer-motion variants
 * (staggerChildren + delayChildren). `trigger="load"` plays on mount (hero);
 * `trigger="scroll"` plays when the heading enters the viewport.
 * aria-label carries the full text; words are aria-hidden for screen readers.
 */
export default function SplitText({
  text,
  highlight,
  color = 'orange',
  variant = 'words',
  as = 'h2',
  className,
  style,
  trigger = 'scroll',
  delay = 300,
  stagger = 55,
}: SplitTextProps) {
  const hlSet = new Set((highlight || '').toLowerCase().split(/\s+/).filter(Boolean));
  const words = text.split(/\s+/).filter(Boolean).map((w) => ({
    w,
    hl: hlSet.has(w.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '')),
  }));

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger / 1000, delayChildren: delay / 1000 } },
  };

  const MotionTag = motion[as];
  const trig =
    trigger === 'load'
      ? { animate: 'show' as const }
      : { whileInView: 'show' as const, viewport: { once: true, amount: 0.35 } };

  return (
    <MotionTag className={className} style={style} aria-label={text} variants={container} initial="hidden" {...trig}>
      {words.map((t, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          variants={WORD[variant]}
          className={t.hl ? (color === 'blue' ? 'hl-blue' : 'hl') : undefined}
          style={{ display: 'inline-block', whiteSpace: 'pre', willChange: 'transform, opacity, filter' }}
        >
          {t.w + ' '}
        </motion.span>
      ))}
    </MotionTag>
  );
}
