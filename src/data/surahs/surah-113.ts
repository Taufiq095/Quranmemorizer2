import type { SurahCollection } from './types';

export const alFalaq: SurahCollection = {
  id: 'al-falaq',
  title: 'Al-Falaq',
  arabicName: 'سورة الفلق',
  surahNumber: 113,
  ayahCount: 5,
  items: Array.from({ length: 5 }).map((_, i) => ({
    id: `falaq-${i + 1}`,
    collectionId: 'al-falaq',
    index: i,
    type: 'quran',
    arabic: `Placeholder ayah ${i + 1}`,
    transliteration: `Transliteration ${i + 1}`,
    translation: `Translation ${i + 1}`,
    meta: { surah: 113, ayah: i + 1 },
  })),
};