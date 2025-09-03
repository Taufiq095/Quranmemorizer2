import React from 'react';
import { ArabicLine } from './ArabicLine';

export type ContentItem = {
  id: string;
  arabic: string;
  transliteration?: string;
  translation?: string;
};

export type ContentReaderProps = {
  title: string;
  note?: string;
  items: ContentItem[];
  // Label for each row, e.g. "Ayah 3" or "Line 3"
  label: (index: number) => string;
  showTranslit: boolean;

  // Optional interactivity (e.g., Surah last-read marker)
  onItemClick?: (index: number) => void;
  highlightIndex?: number | null;

  // Optional chips on the right side of header
  rightChip?: React.ReactNode;

  // Optional classNames if you later move styles to CSS modules
  className?: string;
};

export function ContentReader({
  title,
  note,
  items,
  label,
  showTranslit,
  onItemClick,
  highlightIndex,
  rightChip,
  className
}: ContentReaderProps) {
  return (
    <div className={`panel ${className ?? ''}`} style={{ padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2 style={{ margin: 0, color: 'var(--text-strong)' }}>{title}</h2>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {rightChip}
          <div
            className="chip"
            style={{
              background: 'var(--accent)',
              color: 'var(--accent-contrast)',
              padding: '6px 12px',
              borderRadius: 16,
              fontSize: '0.9em',
              fontWeight: 600
            }}
          >
            {items.length} {items.length === 1 ? 'item' : 'items'}
          </div>
        </div>
      </div>

      {note && (
        <div
          className="note"
          style={{
            background: 'var(--bg-soft)',
            border: '1px solid var(--divider)',
            padding: 12,
            borderRadius: 8,
            marginBottom: 20,
            fontSize: '0.9em',
            color: 'var(--text-muted)'
          }}
        >
          {note}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {items.map((it, i) => {
          const isHighlighted = typeof highlightIndex === 'number' && highlightIndex === i;

          // Accessibility: if the row is clickable, give it button semantics
          const interactive = Boolean(onItemClick);
          const baseStyle: React.CSSProperties = {
            padding: '16px 0',
            borderBottom: '1px solid var(--divider)',
            borderRadius: 8,
            transition: 'background-color 0.2s',
            background: isHighlighted ? 'var(--bg-soft)' : 'transparent',
            cursor: interactive ? 'pointer' : 'default'
          };

          const commonProps = {
            key: it.id,
            style: baseStyle
          } as const;

          const content = (
            <>
              <div
                className="label"
                style={{
                  background: 'var(--bg-soft)',
                  color: 'var(--accent)',
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: 12,
                  fontSize: '0.9em',
                  fontWeight: 600,
                  marginBottom: 12
                }}
              >
                {label(i)}
              </div>

              <ArabicLine>{it.arabic}</ArabicLine>

              {showTranslit && it.transliteration && (
                <div
                  className="translit"
                  style={{ color: 'var(--text-muted)', fontSize: '1.05em', marginTop: 4, fontStyle: 'italic', textAlign: 'right' }}
                >
                  {it.transliteration}
                </div>
              )}

              {it.translation && (
                <div className="translation" style={{ color: 'var(--text)', fontSize: '1em', marginTop: 6 }}>
                  {it.translation}
                </div>
              )}
            </>
          );

          if (!interactive) {
            return <div {...commonProps}>{content}</div>;
          }

          return (
  <div
    {...commonProps}
    role="button"
    tabIndex={0}
    aria-label={`Mark ayah ${i + 1} as last read`}
    onClick={() => onItemClick?.(i)}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onItemClick?.(i);
      }
    }}
    style={{
      ...baseStyle,
      outline: 'none' // Remove default outline, we'll handle focus visibly
    }}
    onFocus={(e) => {
      e.currentTarget.style.outline = '2px solid var(--accent)';
      e.currentTarget.style.outlineOffset = '2px';
    }}
    onBlur={(e) => {
      e.currentTarget.style.outline = 'none';
    }}
  >
    {content}
  </div>
);
          );
        })}
      </div>
    </div>
  );
}