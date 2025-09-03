// src/components/PrevNextExercise.tsx
import { useMemo, useState } from 'react';
import type { Collection, ContentItem } from '../data/shared';

function pickRandom<T>(arr: T[], excludeIdx: number, count: number): T[] {
  const idxs = arr.map((_, i) => i).filter((i) => i !== excludeIdx);
  for (let i = idxs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [idxs[i], idxs[j]] = [idxs[j], idxs[i]];
  }
  return idxs.slice(0, count).map((i) => arr[i]);
}

function buildOptions(items: ContentItem[], correct: ContentItem | null, excludeIdx: number) {
  if (!correct) return [];
  const distractors = pickRandom(items, excludeIdx, 3);
  const options = [correct, ...distractors];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

type Props = {
  collection: Collection;
  showTranslit: boolean;
};

export default function PrevNextExercise({ collection, showTranslit }: Props) {
  const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * collection.items.length));
  const current = collection.items[currentIndex];
  const prev = collection.items[currentIndex - 1] ?? null;
  const next = collection.items[currentIndex + 1] ?? null;

  const prevOptions = useMemo(
    () => buildOptions(collection.items, prev, currentIndex - 1),
    [collection.id, currentIndex]
  );
  const nextOptions = useMemo(
    () => buildOptions(collection.items, next, currentIndex + 1),
    [collection.id, currentIndex]
  );

  const [prevChoice, setPrevChoice] = useState<string | null>(null);
  const [nextChoice, setNextChoice] = useState<string | null>(null);

  const reset = () => { setPrevChoice(null); setNextChoice(null); };
  const newRandom = () => {
    const n = collection.items.length;
    if (n <= 1) return;
    let idx = currentIndex;
    while (idx === currentIndex) idx = Math.floor(Math.random() * n);
    setCurrentIndex(idx);
    reset();
  };

  const onPrevPick = (id: string) => { if (!prevChoice) setPrevChoice(id); };
  const onNextPick = (id: string) => { if (!nextChoice) setNextChoice(id); };

  return (
    <div className="panel vstack" style={{ gap: 12 }}>
      <div className="subtle small">Exercise</div>
      <h3>What comes before and after?</h3>

      <div className="arabic">{current.arabic}</div>
      <div style={{ 
        fontSize: 28, 
        textAlign: 'right',
        fontFamily: 'var(--font-arabic)',
        color: 'var(--arabic)',
        lineHeight: 'var(--line-ayah)'
      }}>
        {current.arabic}
      </div>
      {showTranslit && current.transliteration && (
        <div style={{ color: 'var(--text-muted)', textAlign: 'right', fontStyle: 'italic' }}>
          {current.transliteration}
        </div>
      )}
      {current.translation && <div style={{ color: 'var(--text)' }}>{current.translation}</div>}

      <div className="hr" />

      {/* Before */}
      <div className="vstack" style={{ gap: 8 }}>
        <div className="subtle">Before</div>
        {!prev ? (
          <div className="subtle">This is the first line.</div>
        ) : (
          <div className="options">
            {prevOptions.map((opt) => {
              const state =
                prevChoice
                  ? opt.id === prev?.id
                    ? 'correct'
                    : opt.id === prevChoice
                      ? 'wrong'
                      : 'disabled'
                  : '';
              return (
                <div key={opt.id} className={`option ${state}`} onClick={() => onPrevPick(opt.id)}>
                  <div style={{ 
                    fontSize: 22, 
                    textAlign: 'right',
                    fontFamily: 'var(--font-arabic)',
                    color: 'var(--arabic)',
                    lineHeight: 'var(--line-ayah)'
                  }}>
                    {opt.arabic}
                  </div>
                  {showTranslit && opt.transliteration && (
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85em', textAlign: 'right', fontStyle: 'italic' }}>{opt.transliteration}</div>
                  )}
                  {opt.translation && <div style={{ color: 'var(--text)', fontSize: '0.85em' }}>{opt.translation}</div>}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="hr" />

      {/* After */}
      <div className="vstack" style={{ gap: 8 }}>
        <div className="subtle">After</div>
        {!next ? (
          <div className="subtle">This is the last line.</div>
        ) : (
          <div className="options">
            {nextOptions.map((opt) => {
              const state =
                nextChoice
                  ? opt.id === next?.id
                    ? 'correct'
                    : opt.id === nextChoice
                      ? 'wrong'
                      : 'disabled'
                  : '';
              return (
                <div key={opt.id} className={`option ${state}`} onClick={() => onNextPick(opt.id)}>
                  <div style={{ 
                    fontSize: 22, 
                    textAlign: 'right',
                    fontFamily: 'var(--font-arabic)',
                    color: 'var(--arabic)',
                    lineHeight: 'var(--line-ayah)'
                  }}>
                    {opt.arabic}
                  </div>
                  {showTranslit && opt.transliteration && (
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85em', textAlign: 'right', fontStyle: 'italic' }}>{opt.transliteration}</div>
                  )}
                  {opt.translation && <div style={{ color: 'var(--text)', fontSize: '0.85em' }}>{opt.translation}</div>}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="hstack" style={{ marginTop: 12 }}>
        <div className="subtle small">Tip: practice with flashcards first if needed.</div>
        <div style={{ flex: 1 }} />
        <button onClick={reset}>Retry</button>
        <button className="primary" onClick={newRandom}>New random</button>
      </div>
    </div>
  );
}