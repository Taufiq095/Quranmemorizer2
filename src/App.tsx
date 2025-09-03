import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AuthPage } from './pages/AuthPage';
import { ProfilePage } from './pages/ProfilePage';
import { ProgressPage } from './pages/ProgressPage';
import './styles/tokens.css';

// Initialize theme on app load
function initTheme() {
  const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved ?? (systemDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
}

function App() {
  useEffect(() => {
    // Initialize theme on app load
    initTheme();
    
    // Listen for theme changes from settings
    const handleThemeChange = (event: CustomEvent) => {
      document.documentElement.setAttribute('data-theme', event.detail);
    };
    
    window.addEventListener('theme:changed', handleThemeChange as EventListener);
    
    return () => {
      window.removeEventListener('theme:changed', handleThemeChange as EventListener);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/progress" element={<ProgressPage />} />
      </Routes>
    </Router>
  );
}
export default App;