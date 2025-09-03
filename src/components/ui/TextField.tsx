import React from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function TextField({ label, error, className = '', ...props }: TextFieldProps) {
  const inputClasses = `
    w-full px-3 py-2 border rounded-md
    ${error ? 'border-red-500' : 'border-border'}
    bg-bg text-fg
    focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
    ${className}
  `;
  
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-fg">
          {label}
        </label>
      )}
      <input className={inputClasses} {...props} />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}