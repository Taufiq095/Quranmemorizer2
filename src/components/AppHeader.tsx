import React from 'react';
import { AuthButton } from './ui/AuthButton';

interface AppHeaderProps {
  title?: string;
  showAuth?: boolean;
}

export function AppHeader({ title = "Quran Memorizer", showAuth = true }: AppHeaderProps) {
  return (
    <header className="flex items-center justify-between mb-6 pb-4" style={{ borderBottom: '1px solid var(--border)' }}>
      <h1 style={{ 
        fontSize: 'var(--fs-xl)', 
        fontWeight: '600', 
        color: 'var(--text-strong)',
        margin: 0
      }}>
        {title}
      </h1>
      {showAuth && <AuthButton />}
    </header>
  );
}