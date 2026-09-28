export type ExtraCardArtwork = {
  src: string;
  alt: string;
  label: string;
};

export type CardArtwork = {
  mainImage: string;
  additionalImages: ExtraCardArtwork[];
};

const publicImage = (zodiacId: string, filename: string) => `/zodiac-cards/${zodiacId}/${encodeURIComponent(filename)}`;

export const cardArtworkById: Record<string, CardArtwork> = {
  horse: {
    mainImage: publicImage('horse', 'ม้า 1.png'),
    additionalImages: [
      { src: publicImage('horse', 'ม้า (Sp.หญิง).jpg'), alt: 'The Horse special female artwork', label: 'ARTWORK 02' },
    ],
  },
  monkey: {
    mainImage: publicImage('monkey', 'ลิง 1.png'),
    additionalImages: [
      { src: publicImage('monkey', 'ลิง 2.png'), alt: 'The Monkey character sheet', label: 'ARTWORK 02' },
      { src: publicImage('monkey', 'ลิง 3.png'), alt: 'The Monkey alternate artwork', label: 'ARTWORK 03' },
    ],
  },
};