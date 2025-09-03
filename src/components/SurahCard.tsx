// src/components/SurahCard.tsx
import { Surah } from '../data/surahs/types';

export function SurahCard({ surah }: { surah: Surah }) {
  return (
    <section className="surah-card" aria-labelledby={`surah-${surah.number}-title`}>
      <header>
        <h2 id={`surah-${surah.number}-title`} className="surah-title">
          {surah.number}. {surah.englishName} — {surah.name}
        </h2>
        <p className="surah-meta">{surah.ayahCount} ayāt • {surah.revelationPlace}</p>
      </header>

      <div style={{marginTop: 16}}>
        {surah.ayat.map((a) => (
          <article className="ayah" key={a.number} aria-label={`Ayah ${a.number}`}>
            <span className="pill ayah-label" aria-hidden="true">Ayah {a.number}</span>
            <div className="arabic" dir="rtl">{a.arabic}</div>
            {a.transliteration && (
              <div className="transliteration" dir="ltr">{a.transliteration}</div>
            )}
            <div className="translation" dir="ltr">{a.translation}</div>
          </article>
        ))}
      </div>
    </section>
  );
}