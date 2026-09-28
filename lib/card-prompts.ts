import type { ZodiacCard } from './cards';

export type CardPrompt = {
  id: string;
  name: string;
  text: string;
};

const promptVariants = [
  {
    id: 'original-male',
    name: 'Original (Male)',
    direction: 'Keep the original concept and depict the character as an adult male.',
  },
  {
    id: 'original-female',
    name: 'Original (Female)',
    direction: 'Keep the original concept and depict the character as an adult female.',
  },
  {
    id: 'special-male',
    name: 'Special (Male)',
    direction: 'Create a special-edition variation with enhanced ceremonial details and a distinctive collector finish; depict the character as an adult male.',
  },
  {
    id: 'special-female',
    name: 'Special (Female)',
    direction: 'Create a special-edition variation with enhanced ceremonial details and a distinctive collector finish; depict the character as an adult female.',
  },
] as const;

export function getCardPrompts(card: ZodiacCard): CardPrompt[] {
  return promptVariants.map(variant => ({
    id: variant.id,
    name: variant.name,
    text: `${card.imagePrompt}\n\n${variant.direction}`,
  }));
}