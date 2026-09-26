export type ZodiacCard = { id: string; animal: string; name: string; thai: string; element: string; year: string; rarity: 'COMMON' | 'SECRET'; accent: string; description: string };
export const cards: ZodiacCard[] = [
  { id:'rat', animal:'🐀', name:'The Rat', thai:'ชวด', element:'Water', year:'子', rarity:'COMMON', accent:'#93a7bd', description:'Quick-witted, resourceful, and quietly brilliant.' },
  { id:'ox', animal:'🐂', name:'The Ox', thai:'ฉลู', element:'Earth', year:'丑', rarity:'COMMON', accent:'#b08c5b', description:'Steady strength carries every dream forward.' },
  { id:'tiger', animal:'🐅', name:'The Tiger', thai:'ขาล', element:'Wood', year:'寅', rarity:'COMMON', accent:'#d78c4b', description:'Fearless spirit, born to lead the dawn.' },
  { id:'rabbit', animal:'🐇', name:'The Rabbit', thai:'เถาะ', element:'Wood', year:'卯', rarity:'COMMON', accent:'#d5a4a1', description:'Gentle grace brings harmony wherever you go.' },
  { id:'dragon', animal:'🐉', name:'The Dragon', thai:'มะโรง', element:'Earth', year:'辰', rarity:'COMMON', accent:'#d5a33d', description:'A rare force of nature with a generous heart.' },
  { id:'snake', animal:'🐍', name:'The Snake', thai:'มะเส็ง', element:'Fire', year:'巳', rarity:'COMMON', accent:'#74a081', description:'Wisdom and intuition reveal the hidden path.' },
  { id:'horse', animal:'🐎', name:'The Horse', thai:'มะเมีย', element:'Fire', year:'午', rarity:'COMMON', accent:'#c3775a', description:'Bright, independent, and always chasing horizons.' },
  { id:'goat', animal:'🐐', name:'The Goat', thai:'มะแม', element:'Earth', year:'未', rarity:'COMMON', accent:'#aaa3c0', description:'Kindness turns simple moments into beauty.' },
  { id:'monkey', animal:'🐒', name:'The Monkey', thai:'วอก', element:'Metal', year:'申', rarity:'COMMON', accent:'#c38b51', description:'Curiosity and clever hands make the impossible play.' },
  { id:'rooster', animal:'🐓', name:'The Rooster', thai:'ระกา', element:'Metal', year:'酉', rarity:'COMMON', accent:'#c75d4d', description:'Confident and observant, you greet each day prepared.' },
  { id:'dog', animal:'🐕', name:'The Dog', thai:'จอ', element:'Earth', year:'戌', rarity:'COMMON', accent:'#8a9a8a', description:'Loyal courage makes every home a sanctuary.' },
  { id:'pig', animal:'🐖', name:'The Pig', thai:'กุน', element:'Water', year:'亥', rarity:'COMMON', accent:'#d39b9d', description:'Warm-hearted abundance is meant to be shared.' },
  { id:'cat', animal:'🐈‍⬛', name:'The Moonlit Cat', thai:'แมวจันทรา', element:'Lunar', year:'秘', rarity:'SECRET', accent:'#dcbb74', description:'A secret guardian slips between the stars.' }
];
