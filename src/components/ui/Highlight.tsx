import type { ReactNode } from 'react';

/** Highlight — resalta UNA palabra del titular. Naranja por defecto, azul opcional. */
export default function Highlight({ children, color = 'orange' }: { children: ReactNode; color?: 'orange' | 'blue' }) {
  return <span className={color === 'blue' ? 'hl-blue' : 'hl'}>{children}</span>;
}
