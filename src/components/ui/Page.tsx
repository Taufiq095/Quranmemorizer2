import React from 'react';

interface PageProps {
  children: React.ReactNode;
  className?: string;
}

export function Page({ children, className = '' }: PageProps) {
  return (
    <div className={`min-h-screen bg-bg ${className}`}>
      <div className="mx-auto max-w-3xl px-4 py-6">
        {children}
      </div>
    </div>
  );
}