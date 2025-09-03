// src/components/CategoryMenu.tsx
import { catalogMeta } from '../data/surahs';
import { allDuasMeta } from '../data/duas';
import { getSurahFromCatalog } from '../data/surahs';
import { getDuaById } from '../data/duas';

type Mode = 'surahs' | 'duas';

type Props = {
  mode: Mode;
  openReader: (id: string) => void;
  openFlash: (id: string) => void;
  openPrevNext: (id: string) => void;
  goBack: () => void;
};

export default function CategoryMenu({ mode, openReader, openFlash, openPrevNext, goBack }: Props) {
  const isSurah = mode === 'surahs';

  // If you want only 91..114, use: const surahList = catalogMeta.filter(s => s.number >= 91 && s.number <= 114);
  const surahList = catalogMeta;
  const duaList = allDuasMeta;

  return (
    <div className="vstack" style={{ gap: 24 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 16,
        }}
      >
        {isSurah
          ? surahList.map((meta) => (
              <div key={meta.id} className="panel" style={{ padding: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <div style={{ fontWeight: 700 }}>{meta.number}. {meta.title}</div>
                    <div style={{ fontSize: '0.9em', color: 'var(--text-muted)' }}>
                      {meta.arabicName} • {meta.ayahCount} ayat • {meta.revelationPlace}
                    </div>
                  </div>
                </div>
                <div className="hstack" style={{ gap: 8 }}>
                  <button className="button" onClick={() => openReader(String(meta.number))}>Read</button>
                  <button className="button" onClick={() => openFlash(String(meta.number))}>Flashcards</button>
                  <button className="button" onClick={() => openPrevNext(String(meta.number))}>Prev/Next</button>
                </div>
              </div>
            ))
          : duaList.map((meta) => (
              <div key={meta.id} className="panel" style={{ padding: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <div style={{ fontWeight: 700 }}>{meta.title}</div>
                    <div style={{ fontSize: '0.9em', color: 'var(--text-muted)' }}>
                      {meta.itemCount} items
                    </div>
                  </div>
                </div>
                <div className="hstack" style={{ gap: 8 }}>
                  <button className="button" onClick={() => openReader(meta.id)}>Read</button>
                  <button className="button" onClick={() => openFlash(meta.id)}>Flashcards</button>
                  <button className="button" onClick={() => openPrevNext(meta.id)}>Prev/Next</button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}