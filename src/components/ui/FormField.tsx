import type { ReactNode } from 'react';
import { Label } from './Typography';

interface FormFieldProps {
  children: ReactNode;
  label: string;
  htmlFor: string;
  error?: string;
}

export function FormField({ children, label, htmlFor, error }: FormFieldProps) {
  return (
    <div className="w-full">
      <Label htmlFor={htmlFor} className="mb-1">
        {label}
      </Label>
      {children}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
