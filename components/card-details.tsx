'use client';
import { useState } from 'react';
import type { ZodiacCard } from '@/lib/cards';

export default function CardDetails({ card }: { card: ZodiacCard }) {
  const [copied, setCopied] = useState(false);

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(card.imagePrompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return <aside className="reveal-info-panel" aria-labelledby={`profile-title-${card.id}`}>
    <div className="profile-kicker">ZODIAC PROFILE <span>{card.year} · {card.thai}</span></div>
    <h2 id={`profile-title-${card.id}`}>{card.name}</h2>
    <p className="profile-personality">{card.personality}</p>
    <div className="profile-years"><span>ปีเกิด</span><p>{card.birthYears}</p></div>
    <div className="outfit-concept"><span>OUTFIT CONCEPT</span><strong>{card.outfitTitle}</strong></div>
    <div className="prompt-header"><span>IMAGE GENERATION PROMPT</span><button onClick={()=>void copyPrompt()}>{copied?'COPIED ✓':'COPY PROMPT'}</button></div>
    <pre className="image-prompt">{card.imagePrompt}</pre>
    <a className="profile-source" href="https://www.wongnai.com/articles/year-of-the-zodiac" target="_blank" rel="noreferrer">{card.rarity==='SECRET'?'Secret character concept by Zodiac Archive':'บุคลิกและปีเกิดอ้างอิง Wongnai ↗'}</a>
  </aside>;
}
