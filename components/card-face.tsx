'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { ZodiacCard } from '@/lib/cards';
import { cardArtworkById } from '@/lib/card-artwork';

export function CardBack() { return <div className="card-back">
  <svg className="back-engraving" viewBox="0 0 300 450" aria-hidden="true">
    <rect x="14" y="14" width="272" height="422" rx="14"/><rect x="23" y="23" width="254" height="404" rx="10"/>
    <circle cx="150" cy="225" r="92"/><circle cx="150" cy="225" r="79"/><circle cx="150" cy="225" r="65" strokeDasharray="2 5"/>
    <path d="M150 104v28m0 186v28M29 225h28m186 0h28M64 139l20 20m132 132 20 20m0-172-20 20M84 291l-20 20"/>
    <path d="M150 164v-15m0 152v-15m-61-61H74m152 0h-15" strokeDasharray="1 4"/>
    <path d="M25 57Q57 57 57 25M275 57q-32 0-32-32M25 393q32 0 32 32m218-32q-32 0-32 32"/>
    <path d="m39 39 7 7-7 7-7-7zm222 0 7 7-7 7-7-7zM39 397l7 7-7 7-7-7zm222 0 7 7-7 7-7-7z"/>
    <path d="M150 83v18m0 248v18M47 225h18m170 0h18" strokeDasharray="1 5"/>
    <circle cx="150" cy="225" r="4" fill="#e8cf8b"/><circle cx="150" cy="123" r="2" fill="#e8cf8b"/><circle cx="150" cy="327" r="2" fill="#e8cf8b"/>
  </svg>
  <div className="back-corner-mark corner-a">✧</div><div className="back-corner-mark corner-b">✧</div><div className="back-corner-mark corner-c">✧</div><div className="back-corner-mark corner-d">✧</div>
  <div className="back-emblem"><span className="emblem-yinyang">☯</span><i>✦</i></div>
  <span className="back-title">GODS OF<br/>THE ZODIAC</span><small>十二生肖 · CELESTIAL ARCHIVE</small>
</div>; }
export default function CardFace({ card, compact = false, artworkSrc }: { card: ZodiacCard; compact?: boolean; artworkSrc?: string }) {
  const secret = card.rarity === 'SECRET';
  const artwork = cardArtworkById[card.id];
  if (artwork) return <article className={`z-card image-only-card ${secret ? 'secret-card' : ''} ${compact ? 'compact' : ''}`} style={{ '--accent': card.accent } as React.CSSProperties}>
    <Image className="image-only-card-image" src={artworkSrc ?? artwork.mainImage} alt={`${card.name} card artwork`} fill sizes={compact ? '(max-width: 540px) 42vw, 200px' : '(max-width: 540px) 80vw, 252px'} />
  </article>;
  return <article className={`z-card ${secret ? 'secret-card' : ''} ${compact ? 'compact' : ''}`} style={{ '--accent': card.accent } as React.CSSProperties}>
    <div className="card-top"><span>{card.rarity === 'SECRET' ? '✦ SECRET' : '✧ COMMON'}</span><span>{card.year}</span></div>
    <div className="card-art"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><span className="card-animal">{card.animal}</span><span className="art-spark spark-one">✦</span><span className="art-spark spark-two">✧</span></div>
    <div className="card-info"><div><span className="card-element">{card.element.toUpperCase()} · {card.thai}</span><h3>{card.name}</h3></div><span className="card-year">{card.year}</span></div>
    <p className="card-description">{card.description}</p><div className="card-footer"><span>✦ ZODIAC ARCHIVE</span><span>NO. {String(['rat','ox','tiger','rabbit','dragon','snake','horse','goat','monkey','rooster','dog','pig','cat'].indexOf(card.id)+1).padStart(2,'0')}</span></div>
  </article>;
}
export function FlyingCard({ delay = 0 }: { delay?: number }) {
  return <motion.div className="flying-card" initial={{ opacity: 0, y: 130, rotate: 12, scale: .65 }} animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }} transition={{ duration: .7, delay, type: 'spring', stiffness: 90 }}><CardBack /></motion.div>;
}
