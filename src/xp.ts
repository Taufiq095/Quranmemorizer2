// src/xp.ts
const KEY = 'memorizer-xp-v1';

export type XPState = {
  total: number;
  today: number;     // optional daily tracking
  lastAwardISO?: string;
};

function load(): XPState {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : { total: 0, today: 0 };
  } catch {
    return { total: 0, today: 0 };
  }
}

function save(s: XPState) {
  localStorage.setItem(KEY, JSON.stringify(s));
}

export function getXP(): XPState {
  return load();
}

// Simple rule: +10 per correct; 0 per wrong.
// You can enrich later with streaks, difficulty, etc.
export function awardXP(amount: number) {
  const s = load();
  s.total += amount;
  // crude "today"
  const now = new Date();
  const todayKey = now.toISOString().slice(0, 10); // YYYY-MM-DD
  const lastKey = (s.lastAwardISO ?? '').slice(0, 10);
  s.today = lastKey === todayKey ? s.today + amount : amount;
  s.lastAwardISO = now.toISOString();
  save(s);
  // Let UI know
  window.dispatchEvent(new CustomEvent('xp:changed', { detail: s }));
}