// src/data/shared.ts
export type ContentItem = {
  id: string;
  arabic: string;
  transliteration?: string;
  translation?: string;
};

export type Collection = {
  id: string;
  title?: string;
  items: ContentItem[];
  note?: string;
  ayahCount?: number; // optional; useful for Surahs
};