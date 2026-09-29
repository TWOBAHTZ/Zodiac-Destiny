'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import CardFace from './card-face';
import type { ZodiacCard } from '@/lib/cards';
import { cardArtworkById } from '@/lib/card-artwork';

type CardArtworkGalleryProps = {
  card: ZodiacCard;
  pinnedImage?: string;
  onPinArtwork: (cardId: string, src: string) => void;
};

export default function CardArtworkGallery({ card, pinnedImage, onPinArtwork }: CardArtworkGalleryProps) {
  const artwork = cardArtworkById[card.id];
  const [selectedImage, setSelectedImage] = useState(pinnedImage ?? artwork?.mainImage ?? '');
  useEffect(() => {
    setSelectedImage(pinnedImage ?? artwork?.mainImage ?? '');
  }, [card.id, pinnedImage, artwork?.mainImage]);
  const galleryImages = artwork ? [
    { src: artwork.mainImage, alt: `${card.name} main card artwork`, label: 'ARTWORK 01', credit: artwork.mainCredit },
    ...artwork.additionalImages,
  ] : [];
  const selectedArtwork = galleryImages.find(image => image.src === selectedImage);
  const selectedImagePinned = pinnedImage === selectedImage;

  return <div className="card-modal-column">
    <div className="modal-card-face"><CardFace card={card} artworkSrc={selectedImage || undefined}/></div>
    {artwork?.additionalImages.length ? <section className="card-artwork-gallery" aria-label={`${card.name} additional artwork`}>
      <div className="card-artwork-gallery-heading">
        <h3>ADDITIONAL ARTWORK</h3>
        <button className="card-artwork-pin-control" type="button" onClick={() => onPinArtwork(card.id, selectedImage)} aria-label={`${selectedImagePinned ? 'Unpin' : 'Pin'} selected artwork ${selectedImagePinned ? 'from' : 'in'} collection`} aria-pressed={selectedImagePinned} title={selectedImagePinned ? 'Unpin artwork from collection' : 'Pin selected artwork in collection'}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h8l-1 6 3 3v2h-5l-.5 7h-1L11 14H6v-2l3-3-1-6Z"/></svg>
          <span>{selectedImagePinned ? 'PINNED' : 'PIN IMAGE'}</span>
        </button>
      </div>
      <div className="card-artwork-thumbnails">
        {galleryImages.map(image => <button className="card-artwork-thumbnail" type="button" key={image.src} onClick={() => setSelectedImage(image.src)} aria-label={`Show ${image.label.toLowerCase()}`} aria-pressed={selectedImage === image.src}>
          <Image src={image.src} alt={image.alt} width={1024} height={1536} sizes="76px" />
        </button>)}
      </div>
    </section> : null}
    {selectedArtwork?.credit ? <p className="card-artwork-credit">{selectedArtwork.credit}</p> : null}
  </div>;
}