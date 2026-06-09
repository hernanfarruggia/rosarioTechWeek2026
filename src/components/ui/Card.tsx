import type { ReactNode } from 'react';

interface CardProps {
  /** mono index, e.g. "— 01" */
  index?: string;
  title?: string;
  className?: string;
  children?: ReactNode;
}

/** Card — translucent surface, thin border, orange accent bar on top. */
export default function Card({ index, title, className = '', children }: CardProps) {
  return (
    <article className={`card${className ? ' ' + className : ''}`}>
      {index && <div className="c-idx">{index}</div>}
      {title && <h3 className="c-title">{title}</h3>}
      {children}
    </article>
  );
}
