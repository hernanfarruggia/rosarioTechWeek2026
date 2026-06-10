'use client';

import { useEffect, useState } from 'react';
import Marquee from './Marquee';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * PhotoCarousels — two opposing ribbons, each showing all images in an
 * independent random order. Starts in source order (SSR-safe, no hydration
 * mismatch) and reshuffles on mount so every visit looks different.
 */
export default function PhotoCarousels({ images }: { images: string[] }) {
  const [top, setTop] = useState(images);
  const [middle, setMiddle] = useState(images);
  const [bottom, setBottom] = useState(images);

  useEffect(() => {
    setTop(shuffle(images));
    setMiddle(shuffle(images));
    setBottom(shuffle(images));
  }, [images]);

  return (
    <div className="photo-carousels" style={{ marginTop: '4.5rem' }}>
      <div className="sub-eyebrow">— Postales de la edición 2025</div>
      <Marquee speed={220} className="photo-strip">
        {top.map((src, i) => (
          <div className="photo-frame" key={`t-${src}`}>
            <img src={src} alt={`Rosario TechWeek 2025 — foto ${i + 1}`} loading="eager" decoding="async" />
          </div>
        ))}
      </Marquee>
      <Marquee speed={175} reverse className="photo-strip">
        {middle.map((src, i) => (
          <div className="photo-frame" key={`b-${src}`}>
            <img src={src} alt={`Rosario TechWeek 2025 — foto ${i + 1}`} loading="eager" decoding="async" />
          </div>
        ))}
      </Marquee>
      <Marquee speed={150} className="photo-strip">
        {bottom.map((src, i) => (
          <div className="photo-frame" key={`t-${src}`}>
            <img src={src} alt={`Rosario TechWeek 2025 — foto ${i + 1}`} loading="eager" decoding="async" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
