// src/feedback.ts

// Preload sounds (works with public/ path in Vite)
const correctAudio = new Audio('/sfx/correct.mp3');
const wrongAudio = new Audio('/sfx/wrong.mp3');

// Reduce volume if needed
correctAudio.volume = 0.6;
wrongAudio.volume = 0.6;

export function playCorrect() {
  // Avoid overlapping too much
  correctAudio.currentTime = 0;
  correctAudio.play().catch(() => {});
}

export function playWrong() {
  wrongAudio.currentTime = 0;
  wrongAudio.play().catch(() => {});
}

// Helper to add a class to an element briefly
export function burstAnimation(el: HTMLElement | null, className: string, ms = 700) {
  if (!el) return;
  el.classList.remove(className); // reset if still on
  // force reflow so re-adding triggers animation
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  el.offsetHeight;
  el.classList.add(className);
  window.setTimeout(() => el.classList.remove(className), ms);
}