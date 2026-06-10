import type { ReactNode } from 'react';
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
 * SectionShell — container for every section. Dark sections are transparent so
 * the global canvas (grid + glows) shows through; light sections are floating
 * white panels. Renders the eyebrow row + an optional giant watermark.
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
  return (
    <section id={id} className={`section theme-${theme} ${className}`.trim()}>
      {theme === 'light' && <div className="bg-grid" aria-hidden="true" />}
      {watermark && (
        <Parallax speed={0.18} className="watermark" aria-hidden>
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
    </section>
  );
}
