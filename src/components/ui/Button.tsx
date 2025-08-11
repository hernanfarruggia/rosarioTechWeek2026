import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'outline-tertiary' | 'outline-secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  href,
  target,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 hover:scale-105 active:scale-95';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-orange-600',
    secondary: 'bg-secondary text-white hover:bg-blue-600',
    tertiary: 'bg-lime-700 text-white hover:bg-lime-600',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    'outline-secondary': 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white',
    'outline-tertiary': 'border-2 border-white text-white hover:bg-white hover:text-black'
  };
  
  const sizeClasses = {
    sm: variant.includes('outline') ? 'px-4 text-sm' : 'px-4 py-2 text-sm',
    md: variant.includes('outline') ? 'px-6 text-base' : 'px-6 py-3 text-base',
    lg: variant.includes('outline') ? 'px-8 text-lg' : 'px-8 py-4 text-lg'
  };

  const outlinePaddingStyles = variant.includes('outline') ? {
    sm: { paddingTop: '6px', paddingBottom: '6px' }, // 4px less than py-2 (8px)
    md: { paddingTop: '10px', paddingBottom: '10px' }, // 4px less than py-3 (12px)  
    lg: { paddingTop: '14px', paddingBottom: '14px' } // 4px less than py-4 (16px)
  } : {};
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const inlineStyle = variant.includes('outline') ? outlinePaddingStyles[size] : {};

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={classes} style={inlineStyle}>
        {children}
      </a>
    );
  }
  
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} style={inlineStyle}>
      {children}
    </button>
  );
}