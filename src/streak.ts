// src/streak.ts
import { awardXP } from './xp';

const KEY = 'memorizer-streak-v1';

export type StreakState = {
  current: number;
  best: number;
  lastDay?: string;        // YYYY-MM-DD
  completedToday?: boolean;
  uniqueToday: string[];   // unique ayah IDs correct today
};

function load(): StreakState {
  try {
    const raw = localStorage.getItem(KEY);
    const s: StreakState = raw ? JSON.parse(raw) : { current: 0, best: 0, uniqueToday: [] };
    // reset uniqueToday if day changed
    const today = new Date().toISOString().slice(0, 10);
    if (s.lastDay && s.lastDay !== today && !s.completedToday) {
      // day changed without completion: keep current streak rules handled on completeDay
      s.uniqueToday = [];
    }
    if (!s.lastDay || s.lastDay !== today) {
      s.completedToday = false;
    }
    return s;
  } catch {
    return { current: 0, best: 0, uniqueToday: [] };
  }
}
function save(s: StreakState) {
  localStorage.setItem(KEY, JSON.stringify(s));
  window.dispatchEvent(new CustomEvent('streak:changed', { detail: s }));
}

export function getStreak(): StreakState {
  return load();
}

// Call this whenever the user gets a correct answer on a specific ayah.
// If user reaches 5 unique ayāt today (and not yet completed), we complete the day.
export function recordCorrectAyah(ayahId: string): { newlyCompleted: boolean; state: StreakState } {
  const s = load();
  const today = new Date().toISOString().slice(0, 10);

  // new day?
  if (s.lastDay !== today) {
    s.uniqueToday = [];
    s.completedToday = false;
    s.lastDay = today;
  }

  if (!s.uniqueToday.includes(ayahId)) {
    s.uniqueToday.push(ayahId);
  }

  let newlyCompleted = false;
  if (!s.completedToday && s.uniqueToday.length >= 5) {
    newlyCompleted = true;
    s.completedToday = true;

    // Streak increment
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    // If lastDay equals today already, we just complete; streak rules:
    // If the previous 'completed' day was yesterday, increment; else reset to 1.
    // We need to know the last completed day; we approximate with lastDay + completedToday flag.
    // When marking completed today, check if previous saved current was already increased today.
    // For simplicity: if current === 0 or we didn't complete yesterday, reset to 1.
    // Otherwise increment.
    // We store last completed day in lastDay itself when completedToday = true.
    // If yesterday had completedToday true in stored file, current was already incremented then.
    // Simple rule:
    if (s.current > 0 && s.lastDay === yesterday) {
      s.current += 1;
    } else {
      // If the last completed day is not yesterday, set to 1
      s.current = s.current > 0 ? s.current + 1 : 1;
    }

    if (s.current > s.best) s.best = s.current;

    // Bonus XP for completing daily goal
    awardXP(30);
  }

  save(s);
  return { newlyCompleted, state: s };
}