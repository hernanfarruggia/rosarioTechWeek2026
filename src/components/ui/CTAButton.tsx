import type { ReactNode } from 'react';

type Variant = 'solid' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface CTAButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  target?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

/**
 * CTAButton — the pill button. solid (orange/black), outline (themed border →
 * orange on hover), ghost (text + trailing orange arrow). Hover styles live in CSS.
 */
export default function CTAButton({
  children,
  variant = 'solid',
  size = 'md',
  href,
  target,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}: CTAButtonProps) {
  const sizeClass = size === 'lg' ? ' btn-lg' : size === 'sm' ? ' btn-sm' : '';
  const classes = `btn btn-${variant}${sizeClass}${className ? ' ' + className : ''}`;
  const content =
    variant === 'ghost' ? (
      <>
        {children}
        <span className="arr" aria-hidden="true">→</span>
      </>
    ) : (
      children
    );

  if (href && !disabled) {
    return (
      <a
        className={classes}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
