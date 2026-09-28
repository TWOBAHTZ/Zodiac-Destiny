import type { Collection } from '@/lib/collection';
import type { CardVolume } from '@/lib/card-packs';

type CollectionVolumePickerProps = {
  volumes: CardVolume[];
  collection: Collection;
  onSelect: (volumeNumber: number) => void;
};

export default function CollectionVolumePicker({ volumes, collection, onSelect }: CollectionVolumePickerProps) {
  return <section className="collection-volume-picker" aria-label="Choose a collection volume">
    <div className="collection-volume-heading">
      <span>THE ARCHIVE · COLLECTION</span>
      <h2>Choose a volume</h2>
      <p>Select a volume to view its cards and your discoveries.</p>
    </div>
    <div className="collection-volume-list">
      {volumes.map(volume => {
        const cardIds = [...new Set(volume.packs.flatMap(pack => pack.cardIds))];
        const discovered = cardIds.filter(id => (collection[id] ?? 0) > 0).length;
        return <button className="collection-volume-option" type="button" key={volume.number} onClick={() => onSelect(volume.number)}>
          <span className="collection-volume-number">VOL. {String(volume.number).padStart(2, '0')}</span>
          <span className="collection-volume-copy"><strong>{volume.title}</strong><small>{volume.description}</small></span>
          <span className="collection-volume-progress">{discovered}/{cardIds.length}<small> DISCOVERED</small></span>
          <span className="collection-volume-arrow" aria-hidden="true">→</span>
        </button>;
      })}
    </div>
  </section>;
}