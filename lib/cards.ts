export type ZodiacCard = {
  id: string;
  animal: string;
  name: string;
  thai: string;
  element: string;
  year: string;
  rarity: 'COMMON' | 'SECRET';
  accent: string;
  description: string;
  personality: string;
  birthYears: string;
  outfitTitle: string;
  imagePrompt: string;
};

const promptStyle = 'Original adult fantasy character, Korean fantasy webtoon/manhwa-inspired character illustration, refined expressive face, elegant confident pose, full-body costume concept, detailed fabric and embroidery, cinematic soft rim lighting, richly rendered, tasteful East Asian fantasy aesthetics, polished line art and painterly shading, clean dark navy studio background with subtle gold zodiac motifs, character clearly visible, no text, no logo, no watermark, vertical 2:3 composition.';

export const cards: ZodiacCard[] = [
  {
    id: 'rat', animal: '🐀', name: 'The Rat', thai: 'ชวด', element: 'Water', year: '子', rarity: 'COMMON', accent: '#93a7bd',
    description: 'Quick-witted, resourceful, and quietly brilliant.',
    personality: 'นักจัดการโดยธรรมชาติ มีสัญชาตญาณดี เห็นอกเห็นใจ มีเสน่ห์ และอ่อนโยนโรแมนติก',
    birthYears: 'พ.ศ. 2455, 2467, 2479, 2491, 2503, 2515, 2527, 2539, 2551, 2563, 2575',
    outfitTitle: 'นักวางกลยุทธ์แห่งสายน้ำ',
    imagePrompt: `${promptStyle} Costume: a clever young court strategist in layered midnight-blue hanbok robes, short fitted jeogori jacket over flowing trousers, silver wave embroidery, hidden inner pockets, a slim moonstone belt, tiny rat-shaped silver hairpin, translucent sleeve ribbons moving like water; palette of ink navy, mist silver, and pearl.`
  },
  {
    id: 'ox', animal: '🐂', name: 'The Ox', thai: 'ฉลู', element: 'Earth', year: '丑', rarity: 'COMMON', accent: '#b08c5b',
    description: 'Steady strength carries every dream forward.',
    personality: 'แข็งแรง ขยัน และกระตือรือร้น เป็นคนจริงจังกับความไว้ใจและเปิดใจอย่างค่อยเป็นค่อยไป',
    birthYears: 'พ.ศ. 2456, 2468, 2480, 2492, 2504, 2516, 2528, 2540, 2552, 2564, 2576',
    outfitTitle: 'ผู้พิทักษ์ป้อมศิลา',
    imagePrompt: `${promptStyle} Costume: a dependable guardian wearing a structured deep-umber and ivory hanbok-inspired coat, broad padded shoulders shaped like subtle ox horns, layered leather forearm guards, woven earth-tone sash, bronze clasps and stone-pattern embroidery; sturdy boots and a calm grounded stance; palette of clay, cream, bronze, and dark moss.`
  },
  {
    id: 'tiger', animal: '🐅', name: 'The Tiger', thai: 'ขาล', element: 'Wood', year: '寅', rarity: 'COMMON', accent: '#d78c4b',
    description: 'Fearless spirit, born to lead the dawn.',
    personality: 'กล้าหาญ เข้ากับผู้คนง่าย หลงใหลสิ่งใหม่รอบตัว และมีพลังสร้างสรรค์โดดเด่น',
    birthYears: 'พ.ศ. 2457, 2469, 2481, 2493, 2505, 2517, 2529, 2541, 2553, 2565, 2577',
    outfitTitle: 'แม่ทัพพยัคฆ์อรุณ',
    imagePrompt: `${promptStyle} Costume: a charismatic tiger captain in a sharply tailored black and burnt-orange long coat, asymmetrical shoulder armor with restrained tiger-stripe inlay, crimson waist sash, gold claw-shaped fasteners, high boots, and a short wind-swept cape; bold but elegant, palette of charcoal, amber, and vermilion.`
  },
  {
    id: 'rabbit', animal: '🐇', name: 'The Rabbit', thai: 'เถาะ', element: 'Wood', year: '卯', rarity: 'COMMON', accent: '#d5a4a1',
    description: 'Gentle grace brings harmony wherever you go.',
    personality: 'รักความสงบ ต้องการความสมดุล ไม่ชอบความขัดแย้ง และมักเป็นฝ่ายเริ่มคืนดี',
    birthYears: 'พ.ศ. 2458, 2470, 2482, 2494, 2506, 2518, 2530, 2542, 2554, 2566, 2578',
    outfitTitle: 'นักการทูตจันทร์วสันต์',
    imagePrompt: `${promptStyle} Costume: a gentle diplomat wearing a pearl-white and dusty-rose hanbok with a softly structured jeogori, layered translucent sleeves, embroidered plum blossoms and tiny rabbit-foot motifs, rose-quartz norigae pendant, delicate ribbon ties, and graceful ankle boots; serene palette of ivory, blush, and pale jade.`
  },
  {
    id: 'dragon', animal: '🐉', name: 'The Dragon', thai: 'มะโรง', element: 'Earth', year: '辰', rarity: 'COMMON', accent: '#d5a33d',
    description: 'A rare force of nature with a generous heart.',
    personality: 'กระตือรือร้น เป็นธรรมชาติ มีเสน่ห์ และอาจใจร้อนเมื่อถูกยั่วยุ',
    birthYears: 'พ.ศ. 2459, 2471, 2483, 2495, 2507, 2519, 2531, 2543, 2555, 2567, 2579',
    outfitTitle: 'องค์รัชทายาทมังกรเมฆา',
    imagePrompt: `${promptStyle} Costume: a magnetic dragon heir in an elegant jade-black imperial hanbok coat, sculpted gold dragon-scale shoulder pieces, sweeping cloud-pattern sleeves, fine five-claw dragon embroidery, a long detachable silk train like a tail, and a luminous jade crown ornament; palette of deep jade, antique gold, and cloud ivory.`
  },
  {
    id: 'snake', animal: '🐍', name: 'The Snake', thai: 'มะเส็ง', element: 'Fire', year: '巳', rarity: 'COMMON', accent: '#74a081',
    description: 'Wisdom and intuition reveal the hidden path.',
    personality: 'รู้เป้าหมายของตนเอง ช่างสังเกต สนใจประวัติศาสตร์ และมองเห็นคุณค่าในสิ่งที่คนอื่นมองข้าม',
    birthYears: 'พ.ศ. 2460, 2472, 2484, 2496, 2508, 2520, 2532, 2544, 2556, 2568, 2580',
    outfitTitle: 'นักพยากรณ์อสรพิษมรกต',
    imagePrompt: `${promptStyle} Costume: a poised oracle in a close-fitting emerald and black ceremonial robe with overlapping scale-textured panels, long split sleeves, silver serpent-shaped ear cuffs, an antique-history scroll case at the hip, and a translucent green shoulder veil; palette of emerald, smoke, and silver.`
  },
  {
    id: 'horse', animal: '🐎', name: 'The Horse', thai: 'มะเมีย', element: 'Fire', year: '午', rarity: 'COMMON', accent: '#c3775a',
    description: 'Bright, independent, and always chasing horizons.',
    personality: 'ขยัน อดทน และมักใช้ความสามารถของตนช่วยเหลือผู้คน',
    birthYears: 'พ.ศ. 2461, 2473, 2485, 2497, 2509, 2521, 2533, 2545, 2557, 2569, 2581',
    outfitTitle: 'ผู้ส่งสารแห่งทุ่งตะวัน',
    imagePrompt: `${promptStyle} Costume: a tireless wandering courier in a fitted rust-red riding jacket, navy hanbok-inspired trousers, layered leather belts, polished riding boots, a light cream scarf streaming like a mane, bronze horse-bit details, and a compact travel satchel; palette of rust, midnight blue, and warm cream.`
  },
  {
    id: 'goat', animal: '🐐', name: 'The Goat', thai: 'มะแม', element: 'Earth', year: '未', rarity: 'COMMON', accent: '#aaa3c0',
    description: 'Kindness turns simple moments into beauty.',
    personality: 'มีเสน่ห์และความสามารถสูง มองโลกอย่างเปี่ยมจินตนาการ และให้ความสำคัญกับความฝัน',
    birthYears: 'พ.ศ. 2462, 2474, 2486, 2498, 2510, 2522, 2534, 2546, 2558, 2570, 2582',
    outfitTitle: 'นักฝันผู้ทอเมฆ',
    imagePrompt: `${promptStyle} Costume: an imaginative dream-weaver in a soft lavender and cream layered hanbok, cloud-like wool mantle edged with subtle curls resembling goat horns, lilac embroidered star flowers, tiny bell ornaments, flowing wide sleeves, and a dreamy translucent cape; palette of lavender, cream, and silver-blue.`
  },
  {
    id: 'monkey', animal: '🐒', name: 'The Monkey', thai: 'วอก', element: 'Metal', year: '申', rarity: 'COMMON', accent: '#c38b51',
    description: 'Curiosity and clever hands make the impossible play.',
    personality: 'ชอบเข้าสังคมแต่เลือกเปิดใจตามขอบเขตของตน ไม่ชอบการเปลี่ยนแปลงฉับพลัน และรักพื้นที่คุ้นเคย',
    birthYears: 'พ.ศ. 2463, 2475, 2487, 2499, 2511, 2523, 2535, 2547, 2559, 2571, 2583',
    outfitTitle: 'นักประดิษฐ์กลไกเมฆา',
    imagePrompt: `${promptStyle} Costume: a clever but self-possessed inventor in a teal cropped travel coat with one asymmetric sleeve, layered utility sash, fingerless gloves, small brass mechanisms and charm pouches, a playful cloud-pattern scarf, and discreet monkey-tail cord detail; palette of teal, brass, and warm brown.`
  },
  {
    id: 'rooster', animal: '🐓', name: 'The Rooster', thai: 'ระกา', element: 'Metal', year: '酉', rarity: 'COMMON', accent: '#c75d4d',
    description: 'Confident and observant, you greet each day prepared.',
    personality: 'ทำงานหนัก ตั้งมาตรฐานกับตนเองสูง และถ่ายทอดความคิดได้อย่างชัดเจน',
    birthYears: 'พ.ศ. 2464, 2476, 2488, 2500, 2512, 2524, 2536, 2548, 2560, 2572, 2584',
    outfitTitle: 'ผู้พิทักษ์สุริยรุ่ง',
    imagePrompt: `${promptStyle} Costume: a meticulous dawn sentinel in a crisp ivory and vermilion court-guard uniform, feather-shaped shoulder layers inspired by a rooster crest, gold-trimmed collar, immaculate pleated panels, a red plume hair ornament, and polished boots; palette of ivory, vermilion, and bright gold.`
  },
  {
    id: 'dog', animal: '🐕', name: 'The Dog', thai: 'จอ', element: 'Earth', year: '戌', rarity: 'COMMON', accent: '#8a9a8a',
    description: 'Loyal courage makes every home a sanctuary.',
    personality: 'ซื่อสัตย์ มีเสน่ห์ และมีมุมมองที่สดใสต่อโลก',
    birthYears: 'พ.ศ. 2465, 2477, 2489, 2501, 2513, 2525, 2537, 2549, 2561, 2573, 2585',
    outfitTitle: 'ผู้พิทักษ์ประตูดารา',
    imagePrompt: `${promptStyle} Costume: a loyal gatekeeper in a layered midnight-blue and warm-brown guard coat, protective leather bracers, a weathered short cloak with a subtle paw-and-star clasp, sturdy boots, and a small protective talisman at the chest; palette of navy, bark brown, and muted sage.`
  },
  {
    id: 'pig', animal: '🐖', name: 'The Pig', thai: 'กุน', element: 'Water', year: '亥', rarity: 'COMMON', accent: '#d39b9d',
    description: 'Warm-hearted abundance is meant to be shared.',
    personality: 'รักความสะดวกสบาย จริงใจ ใจดี อดทน และทุ่มเทกับงานและครอบครัว',
    birthYears: 'พ.ศ. 2466, 2478, 2490, 2502, 2514, 2526, 2538, 2550, 2562, 2574, 2586',
    outfitTitle: 'เจ้าภาพงานเลี้ยงจันทรา',
    imagePrompt: `${promptStyle} Costume: a generous festival host in a luxurious rose-pink and champagne brocade hanbok, softly rounded layered silhouette, cloud embroidery, jade and gold buttons, a family-heirloom pendant, elegant comfortable shoes, and a warm welcoming expression; palette of rose, champagne, and jade.`
  },
  {
    id: 'cat', animal: '🐈‍⬛', name: 'The Moonlit Cat', thai: 'แมวจันทรา', element: 'Lunar', year: '秘', rarity: 'SECRET', accent: '#dcbb74',
    description: 'A secret guardian slips between the stars.',
    personality: 'ผู้พิทักษ์ลึกลับแห่งราตรี—ช่างสังเกต รักอิสระ และปรากฏตัวเฉพาะผู้ที่ดวงดาวเลือก',
    birthYears: 'ไม่มีปีเกิด · การ์ดลับพิเศษ',
    outfitTitle: 'ผู้เฝ้าประตูจันทรคราส',
    imagePrompt: `${promptStyle} Secret zodiac cat guardian, an original adult character with subtle feline ears, luminous moon-gold eyes, and a graceful black-cat silhouette. Costume: flowing obsidian and deep-violet hanbok with silver crescent embroidery, layered translucent sleeves, a moonstone collar, delicate bell earrings, star-map cape lining, and a long ribbon-like sash; dramatic eclipse halo, palette of ink black, amethyst, and antique gold.`
  }
];
