// Simple SM-2 style SRS stored in localStorage

export type ReviewState = {
  easiness: number;  // EF
  interval: number;  // days
  repetition: number;
  due: string;       // ISO date
  lastResult?: 'correct' | 'wrong';
};

const KEY = 'memorizer-srs-v1';

type SRSMap = Record<string, ReviewState>;

function loadAll(): SRSMap {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
function saveAll(map: SRSMap) {
  localStorage.setItem(KEY, JSON.stringify(map));
}

export function getState(itemId: string): ReviewState {
  const all = loadAll();
  if (!all[itemId]) {
    all[itemId] = {
      easiness: 2.5,
      interval: 0,
      repetition: 0,
      due: new Date().toISOString(),
    };
    saveAll(all);
  }
  return all[itemId];
}

export function updateState(itemId: string, grade: 0 | 3 | 4 | 5) {
  const all = loadAll();
  const s = all[itemId] || {
    easiness: 2.5,
    interval: 0,
    repetition: 0,
    due: new Date().toISOString(),
  };

  // SM-2 update
  if (grade < 3) {
    s.repetition = 0;
    s.interval = 0;
    s.lastResult = 'wrong';
  } else {
    if (s.repetition === 0) {
      s.interval = 1;
    } else if (s.repetition === 1) {
      s.interval = 3;
    } else {
      s.interval = Math.round(s.interval * s.easiness);
    }
    s.repetition += 1;
    s.lastResult = 'correct';
  }
  // EF
  s.easiness = Math.max(1.3, s.easiness + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02)));

  const due = new Date();
  due.setDate(due.getDate() + s.interval);
  s.due = due.toISOString();

  all[itemId] = s;
  saveAll(all);
}

export function isDue(itemId: string, on: Date = new Date()): boolean {
  const s = getState(itemId);
  return new Date(s.due) <= on;
}

// src/srs.ts
// (keep your existing code above; append the following helpers)

export function isMastered(itemId: string): boolean {
  const s = getState(itemId);
  // Simple mastery rule: at least 2 successful repetitions in a row
  return s.repetition >= 2 && s.lastResult === 'correct';
}

export function getCollectionProgress(collection: { id: string; items: { id: string }[] }) {
  const total = collection.items.length;
  const mastered = collection.items.filter((it) => isMastered(it.id)).length;
  const percent = total === 0 ? 0 : Math.round((mastered / total) * 100);
  return { total, mastered, percent };
}

// Track how many times a collection was completed at 100%
type CompletionMap = Record<string, { count: number; lastCompletionISO?: string }>;
const COMPLETIONS_KEY = 'memorizer-completions-v1';

function loadCompletions(): CompletionMap {
  try {
    const raw = localStorage.getItem(COMPLETIONS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
function saveCompletions(m: CompletionMap) {
  localStorage.setItem(COMPLETIONS_KEY, JSON.stringify(m));
}

export function getCompletionCount(collectionId: string): number {
  return loadCompletions()[collectionId]?.count ?? 0;
}

export function maybeRecordCollectionCompletion(collection: { id: string; items: { id: string }[] }): boolean {
  const progress = getCollectionProgress(collection);
  if (progress.total === 0 || progress.percent < 100) return false;

  const all = loadCompletions();
  const cur = all[collection.id] || { count: 0 };
  const today = new Date().toISOString().slice(0, 10);
  const last = (cur.lastCompletionISO ?? '').slice(0, 10);
  if (last === today) return false; // already counted today

  cur.count += 1;
  cur.lastCompletionISO = new Date().toISOString();
  all[collection.id] = cur;
  saveCompletions(all);
  return true;
}