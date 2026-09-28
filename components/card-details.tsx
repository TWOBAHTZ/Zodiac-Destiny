'use client';
import { useEffect, useState } from 'react';
import type { ZodiacCard } from '@/lib/cards';
import { getCardPrompts, type CardPrompt } from '@/lib/card-prompts';

export default function CardDetails({ card }: { card: ZodiacCard }) {
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);
  const [previewPrompt, setPreviewPrompt] = useState<CardPrompt | null>(null);
  const prompts = getCardPrompts(card);

  const copyPrompt = async (prompt: CardPrompt) => {
    try {
      await navigator.clipboard.writeText(prompt.text);
      setCopiedPromptId(prompt.id);
      window.setTimeout(() => setCopiedPromptId(current => current === prompt.id ? null : current), 1800);
    } catch {
      setCopiedPromptId(null);
    }
  };

  useEffect(() => {
    if (!previewPrompt) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPreviewPrompt(null);
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [previewPrompt]);

  return <aside className="reveal-info-panel" aria-labelledby={`profile-title-${card.id}`}>
    <div className="profile-kicker">ZODIAC PROFILE <span>{card.year} · {card.thai}</span></div>
    <h2 id={`profile-title-${card.id}`}>{card.name}</h2>
    <p className="profile-personality">{card.personality}</p>
    <div className="profile-years"><span>ปีเกิด</span><p>{card.birthYears}</p></div>
    <div className="outfit-concept"><span>OUTFIT CONCEPT</span><strong>{card.outfitTitle}</strong></div>
    <div className="prompt-header"><span>IMAGE GENERATION PROMPT</span></div>
    <ul className="prompt-list">
      {prompts.map(prompt => <li className="prompt-list-item" key={prompt.id}>
        <span className="prompt-list-name">{prompt.name}</span>
        <div className="prompt-list-actions">
          <button className="prompt-copy-button" type="button" onClick={() => void copyPrompt(prompt)}>{copiedPromptId === prompt.id ? 'COPIED' : 'COPY'}</button>
          <button className="prompt-view-button" type="button" onClick={() => setPreviewPrompt(prompt)} aria-label={`View ${prompt.name} prompt`} title={`View ${prompt.name} prompt`}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.7"/></svg>
          </button>
        </div>
      </li>)}
    </ul>
    <a className="profile-source" href="https://www.wongnai.com/articles/year-of-the-zodiac" target="_blank" rel="noreferrer">{card.rarity==='SECRET'?'Secret character concept by Zodiac Archive':'บุคลิกและปีเกิดอ้างอิง Wongnai ↗'}</a>
    {previewPrompt && <div className="prompt-preview-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) setPreviewPrompt(null); }}>
      <section className="prompt-preview-dialog" role="dialog" aria-modal="true" aria-labelledby={`prompt-title-${card.id}-${previewPrompt.id}`}>
        <button className="prompt-preview-close" type="button" onClick={() => setPreviewPrompt(null)} aria-label="Close prompt details">×</button>
        <span className="prompt-preview-kicker">IMAGE GENERATION PROMPT</span>
        <h3 id={`prompt-title-${card.id}-${previewPrompt.id}`}>{previewPrompt.name}</h3>
        <pre>{previewPrompt.text}</pre>
        <button className="prompt-copy-button prompt-preview-copy" type="button" onClick={() => void copyPrompt(previewPrompt)}>{copiedPromptId === previewPrompt.id ? 'COPIED' : 'COPY PROMPT'}</button>
      </section>
    </div>}
  </aside>;
}
