// src/components/SurahReader.tsx
import { useEffect, useState } from 'react';
import type { SurahCollection } from '../data/surahs/types'; // capital S
import { getProgress, setLastAyah } from '../lib/progress';
import { useAuth } from '../lib/user';

type Props = {
  surah: SurahCollection;
  showTranslit: boolean;
};

export default function SurahReader({ surah, showTranslit }: Props) {
  const { user } = useAuth();
  const [lastAyah, setLastAyahState] = useState(0);

  useEffect(() => {
    if (user && surah.id) {
      getProgress(surah.id).then(progress => {
        setLastAyahState(progress.last_ayah);
      });
    }
  }, [user, surah.id]);

  const handleAyahClick = async (ayahIndex: number) => {
    if (user && surah.id) {
      const ayahNumber = ayahIndex + 1;
      await setLastAyah(surah.id, ayahNumber);
      setLastAyahState(ayahNumber);
    }
  };

  return (
    <div className="panel" style={{ padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2 style={{ margin: 0, color: 'var(--text-strong)' }}>{surah.title}</h2>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {user && lastAyah > 0 && (
            <div style={{ background: 'var(--bg-soft)', color: 'var(--text-muted)', padding: '4px 8px', borderRadius: 12, fontSize: '0.8em' }}>
              Last: {lastAyah}
            </div>
          )}
          <div style={{ background: 'var(--accent)', color: 'var(--accent-contrast)', padding: '6px 12px', borderRadius: 16, fontSize: '0.9em', fontWeight: 600 }}>
            {surah.ayahCount} ayat
          </div>
        </div>
      </div>

      {surah.note && (
        <div style={{ background: 'var(--bg-soft)', border: '1px solid var(--divider)', padding: 12, borderRadius: 8, marginBottom: 20, fontSize: '0.9em', color: 'var(--text-muted)' }}>
          {surah.note}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {surah.items.map((it, i) => (
          <div 
            key={it.id} 
            style={{ 
              padding: '16px 0', 
              borderBottom: '1px solid var(--divider)',
              cursor: user ? 'pointer' : 'default',
              borderRadius: 8,
              transition: 'background-color 0.2s',
              background: user && lastAyah === i + 1 ? 'var(--bg-soft)' : 'transparent'
            }}
            onClick={() => handleAyahClick(i)}
            title={user ? `Click to mark as last read (Ayat ${i + 1})` : undefined}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div style={{ background: 'var(--bg-soft)', color: 'var(--accent)', padding: '4px 12px', borderRadius: 12, fontSize: '0.9em', fontWeight: 600 }}>
                Ayah {i + 1}
              </div>
              {user && lastAyah === i + 1 && (
                <div style={{ color: 'var(--accent)', fontSize: '0.8em', fontWeight: 600 }}>
                  Last Read
                </div>
              )}
            </div>

            <div style={{ 
              fontSize: 28, 
              textAlign: 'right', 
              marginBottom: 12,
              fontFamily: 'var(--font-arabic)',
              color: 'var(--arabic)',
              lineHeight: 'var(--line-ayah)'
            }}>
              {it.arabic}
            </div>

            {showTranslit && it.transliteration && (
              <div style={{ color: 'var(--text-muted)', fontSize: '1.1em', marginBottom: 8, fontStyle: 'italic', textAlign: 'right' }}>
                {it.transliteration}
              </div>
            )}

            {it.translation && <div style={{ color: 'var(--text)', fontSize: '1em' }}>{it.translation}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}