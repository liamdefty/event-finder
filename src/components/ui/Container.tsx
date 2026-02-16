import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>;
}

interface PageProps {
  children: ReactNode;
  className?: string;
}

export function Page({ children, className = '' }: PageProps) {
  return (
    <div className={`min-h-screen bg-gray-50 py-8 px-4 ${className}`}>{children}</div>
  );
}
