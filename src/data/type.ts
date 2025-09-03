export type ContentItem = {
  id: string;
  arabic: string;
  transliteration?: string;
  translation?: string;
};

export type BaseCollection = {
  id: string;
  title: string;
  items: ContentItem[];
  note?: string;
};

export type SurahCollection = BaseCollection & {
  ayahCount: number;
  type: 'surah';
};

export type DuaCollection = BaseCollection & {
  type: 'dua';
};

export type Collection = SurahCollection | DuaCollection;