import type { DuaCollection } from '../data/duas/types';

type Props = {
  dua: DuaCollection;
  showTranslit: boolean;
};

export default function DuaReader({ dua, showTranslit }: Props) {
  return (
    <div className="panel" style={{ padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2 style={{ margin: 0, color: 'var(--text-strong)' }}>{dua.title}</h2>
        <div style={{ background: 'var(--accent)', color: 'var(--accent-contrast)', padding: '6px 12px', borderRadius: 16, fontSize: '0.9em', fontWeight: 600 }}>
          {dua.items.length} lines
        </div>
      </div>

      {dua.note && (
        <div style={{ background: 'var(--bg-soft)', border: '1px solid var(--divider)', padding: 12, borderRadius: 8, marginBottom: 20, color: 'var(--text-muted)' }}>
          {dua.note}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {dua.items.map((it, i) => (
          <div key={it.id} style={{ padding: '16px 0', borderBottom: '1px solid var(--divider)' }}>
            <div style={{ background: 'var(--bg-soft)', color: 'var(--accent)', display: 'inline-block', padding: '4px 12px', borderRadius: 12, fontSize: '0.9em', fontWeight: 600 }}>
              Line {i + 1}
            </div>

            <div style={{ 
              fontSize: 28, 
              textAlign: 'right', 
              marginTop: 12,
              fontFamily: 'var(--font-arabic)',
              color: 'var(--arabic)',
              lineHeight: 'var(--line-ayah)'
            }}>
              {it.arabic}
            </div>

            {showTranslit && it.transliteration && (
              <div style={{ color: 'var(--text-muted)', fontSize: '1.1em', marginTop: 8, fontStyle: 'italic', textAlign: 'right' }}>
                {it.transliteration}
              </div>
            )}

            {it.translation && <div style={{ color: 'var(--text)', fontSize: '1em', marginTop: 6 }}>{it.translation}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}