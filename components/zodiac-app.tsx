'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import CardFace, { CardBack } from './card-face';
import { cards, type ZodiacCard } from '@/lib/cards';
import { resolveDraw } from '@/lib/draw';
import { loadCollection, savePulls, type Collection } from '@/lib/collection';

type Phase = 'idle' | 'fan' | 'flight' | 'reveal';
function shuffledDeck() {
  const deck = [...cards];
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

export default function ZodiacApp() {
  const [tab, setTab] = useState<'open'|'collection'>('open');
  const [phase, setPhase] = useState<Phase>('idle');
  const [deck, setDeck] = useState<ZodiacCard[]>([]);
  const [pull, setPull] = useState<ZodiacCard | null>(null);
  const [chosenIndex, setChosenIndex] = useState<number | null>(null);
  const [fanSpacing, setFanSpacing] = useState(27);
  const [flightOffset, setFlightOffset] = useState(92);
  const [collection, setCollection] = useState<Collection>({});
  const [ready, setReady] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    setCollection(loadCollection());
    setReady(true);
    const updateSpacing = () => {
      const width = window.innerWidth;
      setFanSpacing(width < 420 ? 19 : width < 700 ? 24 : 30);
      setFlightOffset(width < 540 ? 23 : width < 800 ? 92 : 100);
    };
    updateSpacing();
    window.addEventListener('resize', updateSpacing);
    return () => window.removeEventListener('resize', updateSpacing);
  }, []);
  useEffect(() => () => timers.current.forEach(window.clearTimeout), []);

  const fanCards = () => {
    if (phase !== 'idle') return;
    setDeck(shuffledDeck());
    setPull(null);
    setChosenIndex(null);
    setPhase('fan');
  };
  const pickCard = (index: number) => {
    if (phase !== 'fan') return;
    const revealedCard = resolveDraw();
    setPull(revealedCard);
    setChosenIndex(index);
    setPhase('flight');
    timers.current = [window.setTimeout(() => {
      setPhase('reveal');
      setCollection(current => savePulls(current, [revealedCard.id]));
    }, 820)];
  };
  const nextDraw = () => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
    setDeck([]);
    setPull(null);
    setChosenIndex(null);
    setPhase('idle');
  };

  const discovered = Object.keys(collection).length;
  const count = Object.values(collection).reduce((a,b) => a+b, 0);
  return <main className="site-shell">
    <header className="topbar"><a className="brand" href="#home"><span className="brand-mark">✦</span><span>ZODIAC<span className="brand-light"> / ARCHIVE</span></span></a><nav><button className={tab==='open'?'nav-active':''} onClick={()=>setTab('open')}>DRAW CARDS</button><button className={tab==='collection'?'nav-active':''} onClick={()=>setTab('collection')}>COLLECTION <span className="nav-count">{ready?discovered:0}/13</span></button></nav><div className="edition">VOLUME 01 <span>·</span> CELESTIAL YEAR</div></header>
    <section className="intro" id="home"><div className="eyebrow"><span/> THE TWELVE SIGNS, ONE HIDDEN SOUL</div><h1>{tab==='open'?<>A little luck.<br/><em>A lot of wonder.</em></>:<>Your celestial<br/><em>collection.</em></>}</h1><p>{tab==='open'?'Fan the deck. Pick a card. Discover your zodiac.':'Every sign has a story. Your discoveries live here.'}</p></section>
    {tab==='open' ? <section className="opening-stage fan-opening-stage">
      <div className="stage-stars" aria-hidden="true">✦ <span>·</span> ✧ <span>·</span> ✦</div>
      <div className="stage-label"><span>01</span> / YOUR DRAW <i/></div>
      <div className={`pack-scene fan-scene ${phase==='fan'||phase==='flight'?'is-fanned':''}`}>
        {phase==='idle' && <motion.button className="deck-trigger" onClick={fanCards} aria-label="Tap the card back to fan out 13 zodiac cards" initial={{opacity:0,scale:.78,y:28}} animate={{opacity:1,scale:1,y:0}} whileHover={{y:-8,rotate:-2}} whileTap={{scale:.96}} transition={{type:'spring',stiffness:150,damping:16}}><CardBack/><span className="deck-tap-glow"/></motion.button>}
        {(phase==='fan'||phase==='flight') && <div className="fan-deck" aria-label="Choose one of 13 zodiac cards">
          {deck.map((card,index)=>{
            const offset=index-6;
            const angle=offset*(78/6);
            const radians=angle*Math.PI/180;
            const radius=fanSpacing<22?124:fanSpacing<28?145:300;
            const arcX=Math.sin(radians)*radius;
            const arcY=radius*(1-Math.cos(radians));
            const selected=index===chosenIndex;
            return <motion.button key={card.id} className="fan-card" aria-label={`Pick card ${index+1} of 13`} onClick={()=>pickCard(index)} disabled={phase!=='fan'} style={{zIndex:selected?30:index,transformOrigin:'50% 50%'}} initial={{x:0,y:90,rotate:0,scale:.72,opacity:0}} animate={phase==='fan'?{x:arcX,y:arcY,rotate:angle,scale:1,opacity:1}:{x:selected?0:arcX,y:selected?flightOffset:105,rotate:selected?0:angle+(offset<0?-12:12),scale:selected?1.13:.72,opacity:selected?1:0,zIndex:selected?30:index}} transition={phase==='fan'?{type:'spring',stiffness:115,damping:14,delay:Math.abs(offset)*.025}:{duration:selected?.5:.28,delay:selected?0:Math.abs(offset)*.012,ease:[.22,.75,.25,1]}}><CardBack/></motion.button>;
          })}
        </div>}
        {phase==='reveal' && pull && <div className="reveal-wrap"><AnimatePresence mode="wait"><motion.div key={pull.id} className={`flip-wrap ${pull.rarity==='SECRET'?'secret-reveal':''}`} initial={{rotateY:180,scale:.84,opacity:0}} animate={{rotateY:0,scale:1,opacity:1}} transition={{duration:.7,ease:[.2,.7,.2,1]}}><CardFace card={pull}/></motion.div></AnimatePresence><div className="reveal-caption"><span>YOUR PICK <i>·</i> {pull.rarity}</span><button onClick={nextDraw}>SHUFFLE &amp; DRAW AGAIN <b>→</b></button></div></div>}
      </div>
      {phase==='idle' && <div className="gesture-instruction"><span className="gesture-icon">✧</span><span>TAP THE CARD TO FAN OUT 13</span><small>Click or touch</small></div>}
      {phase==='fan' && <div className="fan-instruction">✦ &nbsp; PICK ONE CARD FROM THE FAN &nbsp; ✦</div>}
      {phase==='flight' && <div className="hint">Your card is finding its way to you...</div>}
      {phase==='reveal' && pull?.rarity==='SECRET' && <motion.div className="secret-banner" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}>✦ THE MOONLIT CAT FOUND YOU ✦</motion.div>}
    </section> : <section className="collection-section"><div className="collection-stats"><div><strong>{ready?discovered:0}<small>/13</small></strong><span>SIGNS DISCOVERED</span></div><div><strong>{ready?count:0}</strong><span>CARDS COLLECTED</span></div><div className="progress"><div><span>COLLECTION PROGRESS</span><span>{Math.round(discovered/13*100)}%</span></div><div className="progress-track"><i style={{width:`${discovered/13*100}%`}}/></div></div></div><div className="card-grid">{cards.map(card=>{const owned=collection[card.id]??0;return <div className={`collection-slot ${owned?'owned':''}`} key={card.id}>{owned?<><CardFace card={card} compact/><span className="owned-count">× {owned}</span></>:<div className="locked-card"><CardBack/><span>UNDISCOVERED</span></div>}</div>})}</div><div className="collection-footnote">{discovered===13?'THE ARCHIVE IS COMPLETE. THE STARS REMEMBER YOU.':'Fan the deck and choose a card to discover all twelve signs and the hidden moonlit cat.'}</div></section>}
    <footer><span>MADE UNDER A LUCKY STAR</span><span>✦</span><span>A LITTLE COLLECTION OF BIG PERSONALITIES</span></footer>
  </main>;
}
