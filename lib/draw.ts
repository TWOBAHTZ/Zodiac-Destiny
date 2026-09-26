import { cards, type ZodiacCard } from './cards';

export const SECRET_CAT_RATE = 0.01;

export function resolveDraw(): ZodiacCard {
  if (Math.random() < SECRET_CAT_RATE) return cards.find(card => card.id === 'cat')!;
  return cards[Math.floor(Math.random() * 12)];
}
