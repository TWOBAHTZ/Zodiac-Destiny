import type { CardPack, CardVolume } from '@/lib/card-packs';

type PackCollectionProps = {
  volumes: CardVolume[];
  onSelect: (pack: CardPack) => void;
};

export default function PackCollection({ volumes, onSelect }: PackCollectionProps) {
  return <section className="pack-collection" aria-label="Available card packs">
    <div className="pack-collection-heading">
      <span>THE ARCHIVE · PACK COLLECTION</span>
      <h2>Choose your volume</h2>
    </div>
    {volumes.map(volume => <section className="volume-group" key={volume.number}>
      <div className="volume-heading">
        <span className="volume-number">VOL. {String(volume.number).padStart(2, '0')}</span>
        <div><h3>{volume.title}</h3><p>{volume.description}</p></div>
      </div>
      <div className="pack-options">
        {volume.packs.map(pack => <article className="pack-option" key={pack.id}>
          <span className="pack-option-mark" aria-hidden="true">✦</span>
          <div className="pack-option-copy">
            <span>{pack.cardIds.length} CARDS · {pack.secretCardId ? 'SECRET INCLUDED' : 'STANDARD SET'}</span>
            <h4>{pack.name}</h4>
            <p>{pack.description}</p>
          </div>
          <button type="button" onClick={() => onSelect(pack)}>SELECT PACK <span aria-hidden="true">→</span></button>
        </article>)}
      </div>
    </section>)}
  </section>;
}