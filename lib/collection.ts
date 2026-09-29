export type Collection = Record<string, number>;
export type PinnedArtworks = Record<string, string>;
const KEY = 'zodiac-card-collection-v1';
const ARTWORK_KEY = 'zodiac-card-pinned-artworks-v1';
export function loadCollection(): Collection {
  try { const saved = localStorage.getItem(KEY); return saved ? JSON.parse(saved) as Collection : {}; } catch { return {}; }
}
export function savePulls(current: Collection, ids: string[]): Collection {
  const next = { ...current };
  for (const id of ids) next[id] = (next[id] ?? 0) + 1;
  try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* Storage may be unavailable. */ }
  return next;
}
export function loadPinnedArtworks(): PinnedArtworks {
  try { const saved = localStorage.getItem(ARTWORK_KEY); return saved ? JSON.parse(saved) as PinnedArtworks : {}; } catch { return {}; }
}
export function savePinnedArtworks(pinned: PinnedArtworks): void {
  try { localStorage.setItem(ARTWORK_KEY, JSON.stringify(pinned)); } catch { /* Storage may be unavailable. */ }
}
