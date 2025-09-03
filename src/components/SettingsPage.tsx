import { useState, useEffect } from 'react';

// Theme management functions
function setTheme(theme: 'light' | 'dark') {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function initTheme() {
  const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved ?? (systemDark ? 'dark' : 'light');
  setTheme(theme);
  return theme;
}

export default function SettingsPage() {
  const [showTranslit, setShowTranslit] = useState(() => {
    return localStorage.getItem('showTranslit') === 'true';
  });
  
  const [theme, setThemeState] = useState<'light' | 'dark'>(() => {
    return initTheme();
  });

  useEffect(() => {
    initTheme();
  }, []);

  const toggleTranslit = () => {
    const newValue = !showTranslit;
    setShowTranslit(newValue);
    localStorage.setItem('showTranslit', String(newValue));
    // Dispatch event to notify other components
    window.dispatchEvent(new CustomEvent('translit:changed', { detail: newValue }));
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setThemeState(newTheme);
    setTheme(newTheme);
    // Force a re-render of the entire app by dispatching a custom event
    window.dispatchEvent(new CustomEvent('theme:changed', { detail: newTheme }));
  };

  return (
    <div className="panel" style={{ padding: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        
        {/* Theme Toggle */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--text-strong)' }}>Theme</div>
            <div style={{ fontSize: '0.9em', color: 'var(--text-muted)' }}>
              Switch between light and dark mode
            </div>
          </div>
          <button
            onClick={toggleTheme}
            style={{
              background: theme === 'dark' ? 'var(--accent)' : 'var(--btn-bg)',
              color: theme === 'dark' ? 'var(--accent-contrast)' : 'var(--btn-text)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '8px 16px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>

        <div style={{ height: 1, background: 'var(--border)' }} />

        {/* Transliteration Toggle */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--text-strong)' }}>Transliteration</div>
            <div style={{ fontSize: '0.9em', color: 'var(--text-muted)' }}>
              Show romanized pronunciation guide
            </div>
          </div>
          <button
            onClick={toggleTranslit}
            style={{
              background: showTranslit ? 'var(--accent)' : 'var(--btn-bg)',
              color: showTranslit ? 'var(--accent-contrast)' : 'var(--btn-text)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '8px 16px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {showTranslit ? 'ON' : 'OFF'}
          </button>
        </div>

        <div style={{ height: 1, background: 'var(--border)' }} />

        {/* App Info */}
        <div>
          <div style={{ fontWeight: 600, color: 'var(--text-strong)', marginBottom: 8 }}>
            About
          </div>
          <div style={{ fontSize: '0.9em', color: 'var(--text-muted)', lineHeight: 1.5 }}>
            Quran Memorizer helps you learn and memorize Quranic verses through interactive flashcards and exercises. 
            Settings are saved locally on your device.
          </div>
        </div>

      </div>
    </div>
  );
}