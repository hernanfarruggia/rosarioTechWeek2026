'use client';

import { useRef, type ReactNode, type CSSProperties } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface ParallaxProps {
  children: ReactNode;
  /** -1..1 — magnitude/direction of the drift. Positive = moves up as you scroll past. */
  speed?: number;
  className?: string;
  style?: CSSProperties;
  'aria-hidden'?: boolean;
}

/** Parallax — reusable scroll-driven layer. Respects reduced motion. */
export default function Parallax({ children, speed = 0.2, className, style, ...rest }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const dist = speed * 220;
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [dist, -dist]);

  return (
    <motion.div ref={ref} className={className} style={{ y, ...style }} {...rest}>
      {children}
    </motion.div>
  );
}
