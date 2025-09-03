import { useState } from 'react';
import React from 'react';
import { AppHeader } from '../components/AppHeader';
import { Header } from '../components/ui/Header';
import MainMenu from '../components/MainMenu';
import CategoryMenu from '../components/CategoryMenu';
import SettingsPage from '../components/SettingsPage';
import SurahReader from '../components/SurahReader';
import DuaReader from '../components/DuaReader';
import FlashcardsComponent from '../components/FlashcardsComponent';
import PrevNextExercise from '../components/PrevNextExercise';
import { getSurahFromCatalog } from '../data/surahs';
import { getDuaById } from '../data/duas';

type ViewState = 
  | { type: 'menu' }
  | { type: 'surahs' }
  | { type: 'duas' }
  | { type: 'settings' }
  | { type: 'surah-reader'; id: string }
  | { type: 'dua-reader'; id: string }
  | { type: 'surah-flash'; id: string }
  | { type: 'dua-flash'; id: string }
  | { type: 'surah-prevnext'; id: string }
  | { type: 'dua-prevnext'; id: string };

export function HomePage() {
  const [currentView, setCurrentView] = useState<ViewState>({ type: 'menu' });
  const [showTranslit, setShowTranslit] = useState(() => {
    return localStorage.getItem('showTranslit') === 'true';
  });
  // Listen for transliteration changes
  React.useEffect(() => {
    const handleTranslitChange = (event: CustomEvent) => {
      setShowTranslit(event.detail);
    };
    window.addEventListener('translit:changed', handleTranslitChange as EventListener);
    return () => {
      window.removeEventListener('translit:changed', handleTranslitChange as EventListener);
    };
  }, []);

  const goToSurahs = () => setCurrentView({ type: 'surahs' });
  const goToDuas = () => setCurrentView({ type: 'duas' });
  const goToSettings = () => setCurrentView({ type: 'settings' });
  const goBack = () => setCurrentView({ type: 'menu' });
  const openReader = (id: string) => {
    if (currentView.type === 'surahs') {
      setCurrentView({ type: 'surah-reader', id });
    } else if (currentView.type === 'duas') {
      setCurrentView({ type: 'dua-reader', id });
    }
  };

  const openFlash = (id: string) => {
    if (currentView.type === 'surahs') {
      setCurrentView({ type: 'surah-flash', id });
    } else if (currentView.type === 'duas') {
      setCurrentView({ type: 'dua-flash', id });
    }
  };

  const openPrevNext = (id: string) => {
    if (currentView.type === 'surahs') {
      setCurrentView({ type: 'surah-prevnext', id });
    } else if (currentView.type === 'duas') {
      setCurrentView({ type: 'dua-prevnext', id });
    }
  };

  // Get current content for display
  const getCurrentContent = () => {
    switch (currentView.type) {
      case 'surah-reader':
      case 'surah-flash':
      case 'surah-prevnext':
        return getSurahFromCatalog(currentView.id);
      case 'dua-reader':
      case 'dua-flash':
      case 'dua-prevnext':
        return getDuaById(currentView.id);
      default:
        return null;
    }
  };

  const currentContent = getCurrentContent();

  // Get page title
  const getPageTitle = () => {
    switch (currentView.type) {
      case 'surahs': return 'Surahs';
      case 'duas': return 'Duas';
      case 'settings': return 'Settings';
      case 'surah-reader': return currentContent?.title || 'Surah';
      case 'dua-reader': return currentContent?.title || 'Dua';
      case 'surah-flash': return `${currentContent?.title || 'Surah'} - Flashcards`;
      case 'dua-flash': return `${currentContent?.title || 'Dua'} - Flashcards`;
      case 'surah-prevnext': return `${currentContent?.title || 'Surah'} - Exercise`;
      case 'dua-prevnext': return `${currentContent?.title || 'Dua'} - Exercise`;
      default: return 'Quran Memorizer';
    }
  };
  return (
    <div className="app vstack" style={{ gap: 18, padding: 16, maxWidth: 900, margin: '0 auto' }}>
      {currentView.type === 'menu' ? (
        <AppHeader />
      ) : (
        <Header 
          title={getPageTitle()}
          back={true}
          onBack={goBack}
        />
      )}
      
      {currentView.type === 'menu' && (
        <MainMenu 
          goToSurahs={goToSurahs} 
          goToDuas={goToDuas} 
          goToSettings={goToSettings} 
        />
      )}
      
      {currentView.type === 'surahs' && (
        <CategoryMenu 
          mode="surahs"
          openReader={openReader}
          openFlash={openFlash}
          openPrevNext={openPrevNext}
          goBack={goBack}
        />
      )}
      
      {currentView.type === 'duas' && (
        <CategoryMenu 
          mode="duas"
          openReader={openReader}
          openFlash={openFlash}
          openPrevNext={openPrevNext}
          goBack={goBack}
        />
      )}
      
      {currentView.type === 'settings' && (
        <SettingsPage />
      )}

      {/* Surah Content Views */}
      {currentView.type === 'surah-reader' && currentContent && (
        <SurahReader surah={currentContent} showTranslit={showTranslit} />
      )}
      
      {currentView.type === 'surah-flash' && currentContent && (
        <FlashcardsComponent collection={currentContent} showTranslit={showTranslit} />
      )}
      
      {currentView.type === 'surah-prevnext' && currentContent && (
        <PrevNextExercise collection={currentContent} showTranslit={showTranslit} />
      )}

      {/* Dua Content Views */}
      {currentView.type === 'dua-reader' && currentContent && (
        <DuaReader dua={currentContent} showTranslit={showTranslit} />
      )}
      
      {currentView.type === 'dua-flash' && currentContent && (
        <FlashcardsComponent collection={currentContent} showTranslit={showTranslit} />
      )}
      
      {currentView.type === 'dua-prevnext' && currentContent && (
        <PrevNextExercise collection={currentContent} showTranslit={showTranslit} />
      )}
      
      <footer className="app-footer">
        Respectfully presented; different wordings and readings exist.
      </footer>
    </div>
  );
}