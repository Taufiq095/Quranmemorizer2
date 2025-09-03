// src/data/surahs/index.ts
import { surahCatalog } from './catalog';
import type { Surah, SurahCollection } from './types';
import type { ContentItem } from '../shared';


import { alFalaq } from './surah-113';
import { anNas } from './surah-114';

// 1) catalogMeta: light-weight info for listing
export const catalogMeta = Object.keys(surahCatalog)
  .sort((a, b) => Number(a) - Number(b))
  .map((id) => {
    const s = surahCatalog[id];
    return {
      id,                         // '113'
      number: s.number,           // 113
      name: s.name,               // Arabic short name
      englishName: s.englishName,
      ayaCount: s.ayaCount,
      revelationPlace: s.revelationPlace,
    };
  });

// 2) normalize raw catalog entry -> SurahCollection
function toCollection(s: Surah): SurahCollection {
  const items: ContentItem[] = s.ayat.map((a) => ({
    id: `${s.number}:${a.number}`,
    arabic: a.arabic,
    transliteration: a.transliteration,
    translation: a.translation,
  }));

  return {
    id: String(s.number),
    title: `${s.number}. ${s.englishName ?? s.name}`,
    items,
    ayahCount: s.ayaCount,
  };
}

export function getSurahFromCatalog(id: string): SurahCollection | undefined {
  const raw = surahCatalog[id];
  return raw ? toCollection(raw) : undefined;
}

// 3) optional legacy/fallback store for 113/114
const legacy: Record<string, SurahCollection> = {
  '113': alFalaq,
  '114': anNas,
};

export function getSurahById(id: string): SurahCollection | undefined {
  return legacy[id];
}

export const allSurahs: SurahCollection[] = Object.keys(surahCatalog)
  .sort((a, b) => Number(a) - Number(b))
  .map((id) => toCollection(surahCatalog[id]));