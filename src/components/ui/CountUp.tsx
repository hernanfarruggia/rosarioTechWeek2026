'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

const formatAR = (n: number) => new Intl.NumberFormat('es-AR').format(Math.round(n));

function parse(value: string) {
  const m = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  if (!m) return { prefix: '', target: 0, suffix: '', plain: value };
  const target = parseInt(m[2].replace(/[.,]/g, ''), 10);
  return { prefix: m[1], target, suffix: m[3], plain: '' };
}

interface CountUpProps {
  value: string;
  className?: string;
  duration?: number;
}

/** CountUp — animates a numeric stat when it scrolls into view (AR thousands format). */
export default function CountUp({ value, className, duration = 1.6 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const { prefix, target, suffix, plain } = parse(value);
  const [display, setDisplay] = useState(reduce || plain ? value : `${prefix}0${suffix}`);

  useEffect(() => {
    if (plain || !inView) return;
    if (reduce) {
      setDisplay(`${prefix}${formatAR(target)}${suffix}`);
      return;
    }
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(`${prefix}${formatAR(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, reduce, target, prefix, suffix, plain, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
