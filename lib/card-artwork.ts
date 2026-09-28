export type ExtraCardArtwork = {
  src: string;
  alt: string;
  label: string;
  credit?: string;
};

export type CardArtwork = {
  mainImage: string;
  mainCredit?: string;
  additionalImages: ExtraCardArtwork[];
};

const publicImage = (zodiacId: string, filename: string) => `/zodiac-cards/${zodiacId}/${encodeURIComponent(filename)}`;

export const cardArtworkById: Record<string, CardArtwork> = {
  cat: {
    mainImage: publicImage('cat', 'แมว 1.jpg'),
    mainCredit: 'Cr. Shhhh',
    additionalImages: [
      { src: publicImage('cat', 'แมว 2.jpg'), alt: 'The Moonlit Cat additional artwork', label: 'ARTWORK 02', credit: 'Cr. Shhhh' },
    ],
  },
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