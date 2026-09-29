'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import CardFace, { CardBack } from './card-face';
import CardDetails from './card-details';
import CardArtworkGallery from './card-artwork-gallery';
import { type ZodiacCard } from '@/lib/cards';
import { cardVolumes, getPackCards, type CardPack } from '@/lib/card-packs';
import { resolveDraw } from '@/lib/draw';
import { loadCollection, loadPinnedArtworks, savePinnedArtworks, savePulls, type Collection, type PinnedArtworks } from '@/lib/collection';
import PackCollection from './pack-collection';
import CollectionVolumePicker from './collection-volume-picker';

type Phase = 'idle' | 'fan' | 'flight' | 'reveal';
function shuffledDeck(pack: CardPack) {
  const deck = getPackCards(pack);
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
  const [pinnedArtworks, setPinnedArtworks] = useState<PinnedArtworks>({});
  const [selectedCollectionVolume, setSelectedCollectionVolume] = useState<number | null>(null);
  const [selectedPack, setSelectedPack] = useState<CardPack | null>(null);
  const [ready, setReady] = useState(false);
  const [selectedCollectionCard, setSelectedCollectionCard] = useState<ZodiacCard | null>(null);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    setCollection(loadCollection());
    setPinnedArtworks(loadPinnedArtworks());
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
  useEffect(() => {
    if (ready) savePinnedArtworks(pinnedArtworks);
  }, [pinnedArtworks, ready]);
  useEffect(() => () => timers.current.forEach(window.clearTimeout), []);
  useEffect(() => {
    if (!selectedCollectionCard) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedCollectionCard(null);
    };
    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [selectedCollectionCard]);

  const fanCards = () => {
    if (phase !== 'idle' || !selectedPack) return;
    setDeck(shuffledDeck(selectedPack));
    setPull(null);
    setChosenIndex(null);
    setPhase('fan');
  };
  const pickCard = (index: number) => {
    if (phase !== 'fan') return;
    if (!selectedPack) return;
    const revealedCard = resolveDraw(selectedPack);
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
  const togglePinnedArtwork = (cardId: string, src: string) => {
    setPinnedArtworks(current => {
      const next = { ...current };
      if (next[cardId] === src) delete next[cardId];
      else next[cardId] = src;
      return next;
    });
  };

  const selectedVolume = cardVolumes.find(volume => volume.packs.some(pack => pack.id === selectedPack?.id));
  const collectionVolume = cardVolumes.find(volume => volume.number === selectedCollectionVolume);
  const volumeCards = collectionVolume ? [...new Map(collectionVolume.packs.flatMap(pack => getPackCards(pack)).map(card => [card.id, card])).values()] : [];
  const volumeDiscovered = volumeCards.filter(card => (collection[card.id] ?? 0) > 0).length;
  const volumeCount = volumeCards.reduce((total, card) => total + (collection[card.id] ?? 0), 0);
  return <main className="site-shell">
    <header className="topbar"><a className="brand" href="#home"><span className="brand-mark">✦</span><span>ZODIAC<span className="brand-light"> / ARCHIVE</span></span></a><nav><button className={tab==='open'?'nav-active':''} onClick={()=>setTab('open')}>DRAW CARDS</button><button className={tab==='collection'?'nav-active':''} onClick={()=>{setTab('collection');setSelectedCollectionVolume(null)}}>COLLECTION</button></nav><div className="edition">VOLUME 01 <span>·</span> CELESTIAL YEAR</div></header>
    <section className="intro" id="home"><div className="eyebrow"><span/> THE TWELVE SIGNS, ONE HIDDEN SOUL</div><h1>{tab==='open'?(selectedPack?<>A little luck.<br/><em>A lot of wonder.</em></>:<>Choose your<br/><em>first pack.</em></>):collectionVolume?<>Volume {String(collectionVolume.number).padStart(2,'0')}<br/><em>{collectionVolume.title}.</em></>:<>Your celestial<br/><em>collection.</em></>}</h1><p>{tab==='open'?(selectedPack?'Fan the deck. Pick a card. Discover your zodiac.':'Choose a volume and pack before your first draw.'):collectionVolume?collectionVolume.description:'Choose a volume to view its cards and your discoveries.'}</p></section>
    {tab==='open' && !selectedPack ? <PackCollection volumes={cardVolumes} onSelect={setSelectedPack}/> : tab==='open' ? <section className="opening-stage fan-opening-stage">
      <div className="active-pack-bar"><div><span>VOLUME {String(selectedVolume?.number ?? 1).padStart(2, '0')} · SELECTED PACK</span><strong>{selectedPack!.name}</strong></div><button type="button" onClick={()=>{nextDraw();setSelectedPack(null)}}>← BACK TO PACKS</button></div>
      <div className="stage-stars" aria-hidden="true">✦ <span>·</span> ✧ <span>·</span> ✦</div>
      <div className="stage-label"><span>01</span> / YOUR DRAW <i/></div>
      <div className={`pack-scene fan-scene ${phase==='fan'||phase==='flight'?'is-fanned':''}`}>
        {phase==='idle' && <motion.button className="deck-trigger" onClick={fanCards} aria-label={`Tap the card back to fan out ${getPackCards(selectedPack!).length} cards`} initial={{opacity:0,scale:.78,y:28}} animate={{opacity:1,scale:1,y:0}} whileHover={{y:-8,rotate:-2}} whileTap={{scale:.96}} transition={{type:'spring',stiffness:150,damping:16}}><CardBack/><span className="deck-tap-glow"/></motion.button>}
        {(phase==='fan'||phase==='flight') && <div className="fan-deck" aria-label={`Choose one of ${deck.length} cards`}>
          {deck.map((card,index)=>{
            const offset=index-(deck.length-1)/2;
            const angle=offset*(78/Math.max((deck.length-1)/2,1));
            const radians=angle*Math.PI/180;
            const radius=fanSpacing<22?124:fanSpacing<28?145:300;
            const arcX=Math.sin(radians)*radius;
            const arcY=radius*(1-Math.cos(radians));
            const selected=index===chosenIndex;
            return <motion.button key={card.id} className="fan-card" aria-label={`Pick card ${index+1} of ${deck.length}`} onClick={()=>pickCard(index)} disabled={phase!=='fan'} style={{zIndex:selected?30:index,transformOrigin:'50% 50%'}} initial={{x:0,y:90,rotate:0,scale:.72,opacity:0}} animate={phase==='fan'?{x:arcX,y:arcY,rotate:angle,scale:1,opacity:1}:{x:selected?0:arcX,y:selected?flightOffset:105,rotate:selected?0:angle+(offset<0?-12:12),scale:selected?1.13:.72,opacity:selected?1:0,zIndex:selected?30:index}} transition={phase==='fan'?{type:'spring',stiffness:115,damping:14,delay:Math.abs(offset)*.025}:{duration:selected?.5:.28,delay:selected?0:Math.abs(offset)*.012,ease:[.22,.75,.25,1]}}><CardBack/></motion.button>;
          })}
        </div>}
        {phase==='reveal' && pull && <div className="reveal-wrap"><div className="reveal-layout">
          <div className="card-reveal-column"><AnimatePresence mode="wait"><motion.div key={pull.id} className={`flip-wrap ${pull.rarity==='SECRET'?'secret-reveal':''}`} initial={{rotateY:180,scale:.84,opacity:0}} animate={{rotateY:0,scale:1,opacity:1}} transition={{duration:.7,ease:[.2,.7,.2,1]}}><CardFace card={pull}/></motion.div></AnimatePresence><div className="reveal-caption"><span>YOUR PICK <i>·</i> {pull.rarity}</span><button className="draw-again-button" type="button" onClick={nextDraw} aria-label="Draw another card from this pack"><span>DRAW AGAIN</span><b aria-hidden="true">↻</b></button></div></div>
          <CardDetails card={pull}/>
        </div></div>}
      </div>
      {phase==='idle' && <div className="gesture-instruction"><span className="gesture-icon">✧</span><span>TAP THE CARD TO FAN OUT {getPackCards(selectedPack!).length}</span><small>Click or touch</small></div>}
      {phase==='fan' && <div className="fan-instruction">✦ &nbsp; PICK ONE CARD FROM THE FAN &nbsp; ✦</div>}
      {phase==='flight' && <div className="hint">Your card is finding its way to you...</div>}
      {phase==='reveal' && pull?.rarity==='SECRET' && <motion.div className="secret-banner" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}>✦ THE MOONLIT CAT FOUND YOU ✦</motion.div>}
    </section> : !collectionVolume ? <CollectionVolumePicker volumes={cardVolumes} collection={collection} onSelect={setSelectedCollectionVolume}/> : <section className="collection-section">
      <div className="collection-volume-toolbar"><button type="button" onClick={()=>setSelectedCollectionVolume(null)}>← ALL VOLUMES</button><span>VOL. {String(collectionVolume.number).padStart(2,'0')} · {collectionVolume.title.toUpperCase()}</span></div>
      <div className="collection-stats"><div><strong>{ready?volumeDiscovered:0}<small>/{volumeCards.length}</small></strong><span>CARDS DISCOVERED</span></div><div><strong>{ready?volumeCount:0}</strong><span>CARDS COLLECTED</span></div><div className="progress"><div><span>VOLUME PROGRESS</span><span>{Math.round(volumeDiscovered/Math.max(volumeCards.length,1)*100)}%</span></div><div className="progress-track"><i style={{width:`${volumeDiscovered/Math.max(volumeCards.length,1)*100}%`}}/></div></div></div>
      <div className="card-grid">{volumeCards.map(card=>{const owned=collection[card.id]??0;return <div className={`collection-slot ${owned?'owned':''}`} key={card.id}>{owned?<button type="button" className="collection-card-button" onClick={()=>setSelectedCollectionCard(card)} aria-label={`View ${card.name} card details`}><CardFace card={card} compact artworkSrc={pinnedArtworks[card.id]}/><span className="owned-count">× {owned}</span></button>:<div className="locked-card"><CardBack/></div>}</div>})}</div>
      <div className="collection-footnote">{volumeDiscovered===volumeCards.length?'THE ARCHIVE IS COMPLETE. THE STARS REMEMBER YOU.':`Discover the cards in ${collectionVolume.title}.`}</div>
    </section>}
    {selectedCollectionCard && <div className="card-modal-backdrop" onMouseDown={(event)=>{if(event.target===event.currentTarget)setSelectedCollectionCard(null)}}><section className="card-modal" role="dialog" aria-modal="true" aria-label={`${selectedCollectionCard.name} card details`}><button className="card-modal-close" type="button" onClick={()=>setSelectedCollectionCard(null)} aria-label="Close card details">×</button><div className="card-modal-layout"><CardArtworkGallery card={selectedCollectionCard} pinnedImage={pinnedArtworks[selectedCollectionCard.id]} onPinArtwork={togglePinnedArtwork}/><CardDetails card={selectedCollectionCard}/></div></section></div>}
    <footer><span>MADE UNDER A LUCKY STAR</span><span>✦</span><span>A LITTLE COLLECTION OF BIG PERSONALITIES</span></footer>
  </main>;
}
