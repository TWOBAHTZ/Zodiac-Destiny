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
    mainImage: publicImage('cat', 'แมว - ชาย.jpg'),
    mainCredit: 'Cr. Shhhh',
    additionalImages: [
      { src: publicImage('cat', 'แมว - หญิง.jpg'), alt: 'The Moonlit Cat additional artwork', label: 'ARTWORK 02', credit: 'Cr. Shhhh' },
    ],
  },
  dog: {
    mainImage: publicImage('dog', 'หมา - ชาย.jpg'),
    mainCredit: 'Cr. Shhhh',
    additionalImages: [
      { src: publicImage('dog', 'หมา - หญิง.jpg'), alt: 'The Dog alternate artwork', label: 'ARTWORK 02', credit: 'Cr. Shhhh' },
    ],
  },
  goat: {
    mainImage: publicImage('goat', 'แพะ - หญิง.jpg'),
    mainCredit: 'Cr. Shhhh',
    additionalImages: [],
  },
  dragon: {
    mainImage: publicImage('dragon', 'มังกร - ชาย.jpg'),
    mainCredit: 'Cr. Shhhh',
    additionalImages: [
      { src: publicImage('dragon', 'มังกร - หญิง.jpg'), alt: 'The Dragon alternate artwork', label: 'ARTWORK 02', credit: 'Cr. Shhhh' },
    ],
  },
  rabbit: {
    mainImage: publicImage('rabbit', 'กระต่าย - ชาย.jpg'),
    mainCredit: 'Cr. Jimmy xi',
    additionalImages: [
      { src: publicImage('rabbit', 'กระต่าย - หญิง.jpg'), alt: 'The Rabbit alternate artwork', label: 'ARTWORK 02', credit: 'Cr. Jimmy xi' },
    ],
  },
  rat: {
    mainImage: publicImage('rat', 'หนู - ชาย.jpg'),
    mainCredit: 'Cr. Jimmy xi',
    additionalImages: [
      { src: publicImage('rat', 'หนู - หญิง.jpg'), alt: 'The Rat alternate artwork', label: 'ARTWORK 02', credit: 'Cr. Jimmy xi' },
    ],
  },
  horse: {
    mainImage: publicImage('horse', 'ม้า - Sp.ชาย.jpg'),
    mainCredit: 'Cr. Arynn Rxynn',
    additionalImages: [
      { src: publicImage('horse', 'ม้า - Sp.หญิง.jpg'), alt: 'The Horse special female artwork', label: 'ARTWORK 02', credit: 'Cr. Arynn Rxynn' },
    ],
  },
  monkey: {
    mainImage: publicImage('monkey', 'ลิง - ชาย.png'),
    additionalImages: [
      { src: publicImage('monkey', 'ลิง 2 - ชาย.png'), alt: 'The Monkey character sheet', label: 'ARTWORK 02' },
      { src: publicImage('monkey', 'ลิง 3 - ชาย.png'), alt: 'The Monkey alternate artwork', label: 'ARTWORK 03' },
    ],
  },
};