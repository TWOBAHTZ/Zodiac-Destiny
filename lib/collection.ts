export type Collection = Record<string, number>;
const KEY = 'zodiac-card-collection-v1';
export function loadCollection(): Collection {
  try { const saved = localStorage.getItem(KEY); return saved ? JSON.parse(saved) as Collection : {}; } catch { return {}; }
}
export function savePulls(current: Collection, ids: string[]): Collection {
  const next = { ...current };
  for (const id of ids) next[id] = (next[id] ?? 0) + 1;
  try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* Storage may be unavailable. */ }
  return next;
}
