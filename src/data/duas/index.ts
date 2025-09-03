import type { DuaCollection } from './types';
import { duaQunut } from './dua-qunut';

const ALL_DUAS: DuaCollection[] = [duaQunut];

export type DuaMeta = { id: string; title: string; itemCount: number };

export const allDuasMeta: DuaMeta[] = ALL_DUAS.map(d => ({
  id: d.id,
  title: d.title,
  itemCount: d.items.length,
}));

export function getDuaById(id: string): DuaCollection | undefined {
  return ALL_DUAS.find(d => d.id === id);
}