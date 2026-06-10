'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

/**
 * SiteBackground — the continuous canvas behind the whole page: a subtle grid
 * plus drifting blurred color blobs (orange + blue). Fixed, decorative, behind
 * all content. Reduced motion → no scroll drift.
 */
export default function SiteBackground() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const yOrange = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -260]);
  const yBlue = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 200]);

  return (
    <div className="site-bg" aria-hidden="true">
      <div className="site-bg-grid" />
      <motion.div className="blob-wrap blob-wrap-orange" style={{ y: yOrange }}>
        <div className="blob blob-orange" />
      </motion.div>
      <motion.div className="blob-wrap blob-wrap-blue" style={{ y: yBlue }}>
        <div className="blob blob-blue" />
      </motion.div>
    </div>
  );
}
