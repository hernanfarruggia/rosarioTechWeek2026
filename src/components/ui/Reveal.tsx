'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** extra delay in ms (added to the base in-view delay) */
  delay?: number;
  y?: number;
  /** load = animate on mount (above the fold); scroll = animate when it enters the viewport */
  trigger?: 'load' | 'scroll';
  className?: string;
}

/**
 * Reveal — fade-up entrance. Uses framer-motion whileInView (scroll) or animate (load).
 * Scroll reveals get a ~0.22s base delay so the effect is noticeable after entering view.
 * Reduced motion is handled globally via <MotionConfig reducedMotion="user"> in page.tsx.
 */
export default function Reveal({ children, delay = 0, y = 24, trigger = 'scroll', className }: RevealProps) {
  const base = trigger === 'load' ? 0 : 0.22;
  const motionProps =
    trigger === 'load'
      ? { animate: { opacity: 1, y: 0 } }
      : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.25 } };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      {...motionProps}
      transition={{ duration: 0.6, delay: base + delay / 1000, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
