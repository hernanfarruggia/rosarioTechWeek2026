'use client';

import { useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  /** seconds for one full loop */
  speed?: number;
  className?: string;
}

/** Marquee — seamless infinite horizontal ribbon. Pauses on hover; static when reduced motion. */
export default function Marquee({ children, speed = 38, className = '' }: MarqueeProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={`marquee-static ${className}`.trim()}>{children}</div>;
  }

  return (
    <div className={`marquee ${className}`.trim()}>
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
