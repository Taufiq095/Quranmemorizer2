import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface HeaderProps {
  title: string;
  back?: boolean;
  onBack?: () => void;
}

export function Header({ title, back = true, onBack }: HeaderProps) {
  
  return (
    <header className="flex items-center gap-4 mb-6">
      {back && onBack && (
        <button
          onClick={onBack}
          className="p-2 -ml-2 rounded-md hover:bg-border/50 transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
      <h1 className="text-xl font-semibold text-fg">{title}</h1>
    </header>
  );
}