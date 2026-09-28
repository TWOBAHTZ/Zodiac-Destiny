import { type ZodiacCard } from './cards';
import { getPackCards, type CardPack } from './card-packs';

export function resolveDraw(pack: CardPack): ZodiacCard {
  const packCards = getPackCards(pack);
  const regularCards = packCards.filter(card => card.id !== pack.secretCardId);
  const secretCard = packCards.find(card => card.id === pack.secretCardId);

  if (regularCards.length === 0 && !secretCard) {
    throw new Error(`Card pack "${pack.id}" does not contain any available cards.`);
  }
  if (secretCard && Math.random() < (pack.secretRate ?? 0)) return secretCard;

  const drawPool = regularCards.length > 0 ? regularCards : packCards;
  return drawPool[Math.floor(Math.random() * drawPool.length)];
}
