import { cards, type ZodiacCard } from './cards';

export type CardPack = {
  id: string;
  name: string;
  description: string;
  cardIds: string[];
  secretCardId?: string;
  secretRate?: number;
};

export type CardVolume = {
  number: number;
  title: string;
  description: string;
  packs: CardPack[];
};

export const cardVolumes: CardVolume[] = [
  {
    number: 1,
    title: 'Celestial Year',
    description: 'The twelve signs and one hidden soul.',
    packs: [
      {
        id: 'celestial-year',
        name: 'Celestial Year',
        description: 'Meet the twelve zodiac guardians. A moonlit secret may appear.',
        cardIds: ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig', 'cat'],
        secretCardId: 'cat',
        secretRate: 0.05,
      },
    ],
  },
];

const cardsById = new Map(cards.map(card => [card.id, card]));

export function getPackCards(pack: CardPack): ZodiacCard[] {
  return pack.cardIds.flatMap(id => {
    const card = cardsById.get(id);
    return card ? [card] : [];
  });
}