import { last20SurahsMeta } from '../data/surahs';

type Props = {
  openReader: (surahId: string) => void;
  openFlash: (surahId: string) => void;
  openPrevNext: (surahId: string) => void;
};

export default function MenuPage({ openReader, openFlash, openPrevNext }: Props) {
  return (
    <div className="vstack" style={{ gap: 24 }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ margin: '0 0 8px 0', color: '#2c3e50' }}>Quran Memorizer</h1>
        <p style={{ margin: 0, color: '#7f8c8d', fontSize: '1.1em' }}>Memorize the last 20 surahs</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {last20SurahsMeta
          .slice()
          .sort((a, b) => a.surahNumber - b.surahNumber)
          .map((meta) => {
            const comingSoon = meta.surahNumber > 112;
            return (
              <div key={meta.id} className="panel" style={{ padding: 16, borderRadius: 12, background: 'white', border: '1px solid #eee' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <div style={{ fontWeight: 700 }}>{meta.title}</div>
                    <div className="subtle small">{meta.arabicName} • {meta.ayahCount} ayāt</div>
                  </div>
                  <div className="badge">#{meta.surahNumber}</div>
                </div>

                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <button onClick={() => openReader(meta.id)} disabled={comingSoon} style={{ opacity: comingSoon ? 0.5 : 1 }}>Read</button>
                  <button onClick={() => openFlash(meta.id)} disabled={comingSoon} style={{ opacity: comingSoon ? 0.5 : 1 }}>Flashcards</button>
                  <button onClick={() => openPrevNext(meta.id)} disabled={comingSoon} style={{ opacity: comingSoon ? 0.5 : 1 }}>Prev/Next</button>
                  {comingSoon && <div className="badge" style={{ marginLeft: 'auto', background: '#f39c12' }}>Coming soon</div>}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}