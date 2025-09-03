import { last20SurahsMeta } from '../data/surahs';
import { useNavigate } from 'react-router-dom';

export default function MenuPage() {
  const navigate = useNavigate();

  const openReader = (surahId: string) => {
    navigate(`/surah/${surahId}`);
  };

  const openFlash = (surahId: string) => {
    navigate(`/flashcards/${surahId}`);
  };

  const openPrevNext = (surahId: string) => {
    navigate(`/exercise/${surahId}`);
  };

  return (
    <div className="vstack" style={{ gap: 24 }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ margin: '0 0 8px 0', color: 'var(--text-strong)' }}>Quran Memorizer</h1>
        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '1.1em' }}>Memorize the last 20 surahs</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {last20SurahsMeta
          .slice()
          .sort((a, b) => a.surahNumber - b.surahNumber)
          .map((meta) => {
            const comingSoon = meta.surahNumber > 112;
            return (
              <div key={meta.id} className="panel" style={{ padding: 16, borderRadius: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-strong)' }}>{meta.title}</div>
                    <div className="subtle small" style={{ color: 'var(--text-muted)' }}>
                      {meta.arabicName} • {meta.ayahCount} ayāt
                    </div>
                  </div>
                  <div className="badge">#{meta.surahNumber}</div>
                </div>

                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <button onClick={() => openReader(meta.id)} disabled={comingSoon} style={{ opacity: comingSoon ? 0.5 : 1 }}>
                    Read
                  </button>
                  <button onClick={() => openFlash(meta.id)} disabled={comingSoon} style={{ opacity: comingSoon ? 0.5 : 1 }}>
                    Flashcards
                  </button>
                  <button onClick={() => openPrevNext(meta.id)} disabled={comingSoon} style={{ opacity: comingSoon ? 0.5 : 1 }}>
                    Prev/Next
                  </button>
                  {comingSoon && (
                    <div className="badge" style={{ marginLeft: 'auto', background: 'var(--warning)' }}>
                      Coming soon
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}