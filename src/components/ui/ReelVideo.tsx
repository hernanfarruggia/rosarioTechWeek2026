'use client';

import { useEffect, useRef, useState } from 'react';

interface ReelVideoProps {
  src: string;
  poster?: string;
  /** caption shown bottom-left */
  tag?: string;
}

/**
 * ReelVideo — 9:16 reel that plays when it scrolls into view and pauses when it
 * leaves. Muted by default (required for autoplay); a button lets the user
 * unmute. Respects reduced-motion by not autoplaying.
 */
export default function ReelVideo({ src, poster, tag }: ReelVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true; // ensure the DOM property is set so autoplay is allowed

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.5 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggleMute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) v.play().catch(() => {});
    setMuted(v.muted);
  };

  return (
    <div className="reel" style={{ maxWidth: '300px' }}>
      <video ref={ref} src={src} poster={poster} loop playsInline muted preload="metadata" />
      <button
        type="button"
        className="reel-mute"
        onClick={toggleMute}
        aria-label={muted ? 'Activar sonido' : 'Silenciar'}
      >
        {muted ? '🔇' : '🔊'}
      </button>
      {tag && <div className="tag">{tag}</div>}
    </div>
  );
}
