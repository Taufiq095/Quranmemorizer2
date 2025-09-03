import type { SurahCollection } from './types';

export const anNas: SurahCollection = {
  id: 'an-nas',
  title: 'An-Nas',
  arabicName: 'سورة الناس',
  surahNumber: 114,
  ayahCount: 6,
  items: Array.from({ length: 6 }).map((_, i) => ({
    id: `nas-${i + 1}`,
    collectionId: 'an-nas',
    index: i,
    type: 'quran',
    arabic: `Placeholder ayah ${i + 1}`,
    transliteration: `Transliteration ${i + 1}`,
    translation: `Translation ${i + 1}`,
    meta: { surah: 114, ayah: i + 1 },
  })),
};