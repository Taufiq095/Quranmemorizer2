type Props = {
  goToSurahs: () => void;
  goToDuas: () => void;
  goToSettings: () => void;
};

export default function MainMenu({ goToSurahs, goToDuas, goToSettings }: Props) {
  return (
    <div className="vstack" style={{ gap: 24 }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ margin: '0 0 8px 0', color: 'var(--text-strong)' }}>Quran Memorizer</h1>
        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '1.1em' }}>Choose a category</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
        <div className="panel" style={{ padding: 16 }}>
          <h3 style={{ color: 'var(--text-strong)', margin: '0 0 8px 0' }}>Surahs</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9em', margin: '0 0 12px 0' }}>Read and memorize Quran surahs</p>
          <button 
            className="button" 
            onClick={goToSurahs}
            style={{ 
              background: 'var(--accent)', 
              color: 'var(--accent-contrast)',
              border: 'none',
              width: '100%'
            }}
          >
            Browse Surahs
          </button>
        </div>
        
        <div className="panel" style={{ padding: 16 }}>
          <h3 style={{ color: 'var(--text-strong)', margin: '0 0 8px 0' }}>Duas</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9em', margin: '0 0 12px 0' }}>Practice supplications like Qunut</p>
          <button 
            className="button" 
            onClick={goToDuas}
            style={{ 
              background: 'var(--accent)', 
              color: 'var(--accent-contrast)',
              border: 'none',
              width: '100%'
            }}
          >
            Browse Duas
          </button>
        </div>
        
        <div className="panel" style={{ padding: 16 }}>
          <h3 style={{ color: 'var(--text-strong)', margin: '0 0 8px 0' }}>Settings</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9em', margin: '0 0 12px 0' }}>Customize your experience</p>
          <button 
            className="button" 
            onClick={goToSettings}
            style={{ 
              background: 'var(--accent)', 
              color: 'var(--accent-contrast)',
              border: 'none',
              width: '100%'
            }}
          >
            Open Settings
          </button>
        </div>
      </div>
    </div>
  );
}