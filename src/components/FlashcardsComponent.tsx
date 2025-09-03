// src/components/FlashcardsComponent.tsx
import { useMemo, useState } from 'react';
import type { Collection, ContentItem } from '../data/shared';

type Props = {
  collection: Collection;
  showTranslit: boolean;
};

export default function FlashcardsComponent({ collection, showTranslit }: Props) {
  const items = useMemo(() => collection.items, [collection.id]); // keep dep on id
  const [i, setI] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const current: ContentItem | undefined = items[i];

  const prev = () => { setRevealed(false); setI((n) => (n > 0 ? n - 1 : 0)); };
  const next = () => { setRevealed(false); setI((n) => (n < items.length - 1 ? n + 1 : n)); };

  if (!current) return <div className="panel">No items.</div>;

  return (
    <div className="panel vstack" style={{ gap: 12 }}>
      <div className="subtle small">Flashcards</div>
      <h3>{collection.title ?? 'Practice'}</h3>

      <div className="arabic" style={{ fontSize: 28, textAlign: 'right' }}>
        <div style={{ 
          fontFamily: 'var(--font-arabic)',
          color: 'var(--arabic)',
          lineHeight: 'var(--line-ayah)'
        }}>
          {current.arabic}
        </div>
      </div>

      {showTranslit && current.transliteration && (
        <div style={{ color: 'var(--text-muted)', textAlign: 'right', fontStyle: 'italic' }}>
          {current.transliteration}
        </div>
      )}

      <div style={{ minHeight: 22 }}>
        {revealed && current.translation && <div style={{ color: 'var(--text)' }}>{current.translation}</div>}
      </div>

      <div className="hstack" style={{ gap: 8 }}>
        <button onClick={() => setRevealed((v) => !v)}>{revealed ? 'Hide' : 'Reveal'}</button>
        <div style={{ flex: 1 }} />
        <button onClick={prev} disabled={i === 0}>Previous</button>
        <button onClick={next} disabled={i === items.length - 1}>Next</button>
      </div>

      <div className="subtle small" style={{ alignSelf: 'flex-end' }}>
        {i + 1}/{items.length}
      </div>
    </div>
  );
}