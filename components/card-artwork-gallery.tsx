'use client';
import { useState } from 'react';
import Image from 'next/image';
import CardFace from './card-face';
import type { ZodiacCard } from '@/lib/cards';
import { cardArtworkById } from '@/lib/card-artwork';

type CardArtworkGalleryProps = {
  card: ZodiacCard;
};

export default function CardArtworkGallery({ card }: CardArtworkGalleryProps) {
  const artwork = cardArtworkById[card.id];
  const [selectedImage, setSelectedImage] = useState(artwork?.mainImage ?? '');

  return <div className="card-modal-column">
    <div className="modal-card-face"><CardFace card={card} artworkSrc={selectedImage || undefined}/></div>
    {artwork?.additionalImages.length ? <section className="card-artwork-gallery" aria-label={`${card.name} additional artwork`}>
      <h3>ADDITIONAL ARTWORK</h3>
      <div className="card-artwork-thumbnails">
        {[{ src: artwork.mainImage, alt: `${card.name} main card artwork`, label: 'ARTWORK 01' }, ...artwork.additionalImages].map(image => <button className="card-artwork-thumbnail" type="button" key={image.src} onClick={() => setSelectedImage(image.src)} aria-label={`Show ${image.label.toLowerCase()}`} aria-pressed={selectedImage === image.src}>
          <Image src={image.src} alt={image.alt} width={1024} height={1536} sizes="76px" />
        </button>)}
      </div>
    </section> : null}
  </div>;
}