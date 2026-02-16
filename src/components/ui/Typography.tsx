import type { ReactNode } from 'react';
import { createElement } from 'react';

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
}

export function Heading({ children, level = 1, className = '' }: HeadingProps) {
  const baseStyles = 'font-bold text-gray-900';
  const levelStyles = {
    1: 'text-4xl',
    2: 'text-3xl',
    3: 'text-2xl',
    4: 'text-xl',
  };

  const tag = `h${level}`;

  return createElement(
    tag,
    { className: `${baseStyles} ${levelStyles[level]} ${className}` },
    children
  );
}

interface TextProps {
  children: ReactNode;
  variant?: 'body' | 'caption' | 'muted';
  className?: string;
}

export function Text({ children, variant = 'body', className = '' }: TextProps) {
  const variants = {
    body: 'text-base text-gray-900',
    caption: 'text-sm text-gray-600',
    muted: 'text-sm text-gray-500',
  };

  return <p className={`${variants[variant]} ${className}`}>{children}</p>;
}

interface LabelProps {
  children: ReactNode;
  htmlFor?: string;
  className?: string;
}

export function Label({ children, htmlFor, className = '' }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-700 ${className}`}
    >
      {children}
    </label>
  );
}
