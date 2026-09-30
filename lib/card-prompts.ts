import type { ZodiacCard } from './cards';

export type CardPrompt = {
  id: string;
  name: string;
  text: string;
};

const promptVariants = [
  {
    id: 'original-male',
    name: 'Original (Male)',
    direction: 'Keep the original concept and depict the character as an adult male.',
  },
  {
    id: 'original-female',
    name: 'Original (Female)',
    direction: 'Keep the original concept and depict the character as an adult female.',
  },
  {
    id: 'special-male',
    name: 'Special (Male)',
    direction: 'Create a special-edition variation with enhanced ceremonial details and a distinctive collector finish; depict the character as an adult male.',
  },
  {
    id: 'special-female',
    name: 'Special (Female)',
    direction: 'Create a special-edition variation with enhanced ceremonial details and a distinctive collector finish; depict the character as an adult female.',
  },
] as const;

const catOriginalPrompts: Record<string, string> = {
  'original-male': [
    'Original face 100%',
    '9:16  VERTICAL ASPECT RATIO,',
    'SLENDER ELONGATED TAROT CARD FORMAT,Celestial Luxury, dark divine aesthetic, elegant mysterious cat goddess frame,',
    'Premium tarot card proportions,',
    '',
    'Male feline deity costume, Eastern Fantasy, Celestial Luxury, dark divine aesthetic, elegant mysterious cat god, predominantly black and deep midnight blue with luminous violet and electric blue accents, luxurious layered outfit with flowing translucent fabrics, intricate celestial embroidery and glowing star motifs.',
    'Upper body: sleeveless high-neck black fitted tunic, structured and elegant, made from luxurious matte black fabric, subtle satin texture, fitted closely around the torso, decorated with delicate silver chains, celestial star ornaments and glowing blue-violet crystal pendants across the chest. High collar partially covering the neck, layered black-and-silver necklaces with a large four-point celestial star crystal pendant at the center.',
    'Shoulder and arms: long detached translucent sleeves attached around the upper arms, extremely wide and flowing, made from sheer black fabric layered with translucent deep-violet panels, sharp elongated fabric tips resembling feline claws, decorated with silver celestial embroidery, tiny glowing stars and crystal ornaments. Black fitted gloves extending over the hands, decorated with luminous claw-like crystal tips, giving the appearance of magical feline claws.',
    'Waist: elaborate black waist belt composed of multiple layered leather and metallic straps, decorated with silver chains, dangling celestial charms, small blue-violet crystals and star-shaped ornaments. Several long decorative chains hang asymmetrically from the waist and hips, creating elegant movement.',
    'Lower body: extremely wide flowing black hakama-style trousers / palazzo pants, layered and voluminous, high-waisted, loose silhouette, gathered slightly around the ankles. Luxurious black fabric with subtle blue-violet sheen. The outer edges feature intricate silver celestial embroidery, tiny stars and feline-inspired ornamental patterns.',
    'Outer layer: long asymmetrical translucent ceremonial robe panels flowing from the shoulders and waist, black transparent fabric mixed with deep sapphire-blue and violet layers, long pointed tails of fabric, delicate silver borders, glowing constellation patterns and scattered luminous stars. The fabric should trail dramatically behind the character like a celestial aura.',
    'Footwear: elegant black high-top divine boots, armored leather construction, decorated with silver metal details, blue-violet glowing crystals and celestial patterns. Thick elevated soles, sharp elegant silhouette. Toes feature subtle feline claw-shaped armor, creating the impression of supernatural cat paws without becoming literal animal feet.',
    'Cat features integrated into the outfit: elegant black feline ears with glowing blue-violet inner ears, long luxurious black cat tail with a subtle luminous constellation pattern running along the fur, several tiny glowing star-shaped markings embedded into the fur, magical feline claws glowing faintly blue-violet.',
    'Accessories: layered silver-black celestial necklaces, star-shaped crystal pendants, delicate chains crossing the chest, crystal earrings, small celestial charms hanging from the waist, silver rings, black gemstone bracelets, glowing blue-violet crystals, constellation ornaments, feline-moon insignia.',
    'Color palette: obsidian black, midnight blue, deep sapphire, royal violet, silver, luminous electric blue, subtle white highlights.',
    'Materials: matte black silk, satin, sheer chiffon, translucent organza, leather, dark metal, polished silver, luminous crystals, enchanted fabric.',
    'Overall design: elegant, mysterious, regal, seductive but dignified, supernatural feline deity, celestial priest-warrior aesthetic, luxurious Eastern fantasy costume, highly detailed embroidery, layered flowing fabrics, asymmetrical design, sophisticated silhouette, no modern clothing, no casual elements.',
    'Exact pose reference, preserve the same body posture and limb placement: low kneeling crouch, one knee on the ground and the opposite knee raised, raised leg forming a strong angular shape, torso slightly leaning forward and twisted toward camera, one arm lifted behind the head gripping a sword handle, sword laid horizontally across the shoulders, opposite elbow bent with hand resting on the raised thigh, head slightly lowered, shoulders asymmetrical, dynamic diagonal body line, grounded stable posture, full body visible, no standing pose, no sitting chair, no symmetrical pose.',
    '',
    'Background:',
    '- Full moon in night sky',
    '- Ruins / gothic architecture',
    '- Hanging crystal chains / star ornaments',
    '- Water surface with reflections',
    '- Mist / fog / clouds',
    '- Blue and purple lighting',
    '- Fantasy, celestial, mystical atmosphere',
  ].join('\n'),
  'original-female': [
    'Original face 100%',
    '9:16  VERTICAL ASPECT RATIO,',
    'SLENDER ELONGATED TAROT CARD FORMAT,Celestial Luxury, dark divine aesthetic, elegant mysterious cat goddess frame,',
    'Premium tarot card proportions,',
    '',
    'Female feline deity costume, Eastern Fantasy, Celestial Luxury, dark divine aesthetic, elegant mysterious cat goddess, predominantly black and deep midnight blue with luminous violet and electric blue accents. Luxurious, feminine two-piece outfit featuring a stylish cropped top, a short elegant mini skirt, and long thigh-high divine boots. Intricate celestial embroidery, glowing star motifs, luxurious layered fabrics and flowing translucent elements.',
    '',
    'Upper body - Cropped top:',
    'Elegant sleeveless black cropped top with a high neckline, ending just above the waist to reveal a tasteful portion of the midriff. Feminine, sophisticated and form-fitting silhouette, tailored closely around the bust and waist. Luxurious matte black fabric with subtle satin texture and structured panels emphasizing the natural waistline. Decorated with delicate silver chains, celestial star ornaments and glowing blue-violet crystal pendants across the chest. High collar partially covering the neck. Layered black-and-silver necklaces with a large four-point celestial star crystal pendant centered at the upper chest. The cropped top should look regal, luxurious and elegant, combining traditional Eastern fantasy aesthetics with a modern fantasy silhouette.',
    '',
    'Shoulders and arms:',
    'Long detached translucent sleeves attached around the upper arms, extremely wide and flowing, made from sheer black chiffon layered with translucent deep-violet and sapphire-blue panels. Sleeves taper into sharp elongated fabric tips resembling elegant feline claws. Decorated with silver celestial embroidery, tiny glowing stars and crystal ornaments. Elegant black fitted gloves extending over the hands, decorated with luminous claw-like crystal tips, creating the appearance of magical feline claws.',
    '',
    'Waist:',
    'Exposed feminine midriff with a clearly defined waist. An elaborate black celestial corset-style waist belt sits around the waist, composed of layered leather and metallic straps. Decorated with polished silver chains, dangling celestial charms, small blue-violet crystals and star-shaped ornaments. Several long decorative chains hang asymmetrically from the waist and hips, creating graceful movement. The waist belt emphasizes a refined hourglass silhouette and complements the cropped top.',
    '',
    'Lower body - Short mini skirt:',
    'Elegant high-waisted black celestial mini skirt with a short hemline ending at the upper thighs. Feminine, fitted silhouette that accentuates the waist and hips while maintaining a regal fantasy aesthetic. Luxurious layered black silk and satin fabric with subtle midnight-blue and violet sheen. The skirt features an asymmetrical design, with one side slightly longer than the other, decorated with intricate silver celestial embroidery, tiny stars, crescent-moon motifs and subtle feline-inspired ornamental patterns. Delicate metallic silver trims and small luminous blue-violet crystals embellish the waistband and skirt edges.',
    'The mini skirt should be clearly visible and remain short, with no long trousers underneath. Add delicate overlapping translucent fabric panels hanging asymmetrically from the hips, flowing gracefully behind the character without covering the main short skirt. The design should be elegant, stylish and feminine, combining a short skirt with luxurious celestial decorations.',
    '',
    'Outer ceremonial layer:',
    'Long asymmetrical translucent ceremonial robe panels flowing from the shoulders, waist and hips. Black transparent fabric mixed with deep sapphire-blue and violet layers. Long pointed fabric tails extending dramatically behind the character like a celestial aura. Delicate silver borders, glowing constellation patterns, tiny luminous stars and moon motifs. The fabric should float and trail naturally as if affected by magical energy. The robe panels should frame the body and leave the cropped top, exposed waist and short mini skirt clearly visible.',
    '',
    'Footwear - Thigh-high boots:',
    'Elegant black feminine thigh-high divine boots extending above the knees, reaching the upper thighs. Sleek, form-fitting silhouette with luxurious armored leather construction, emphasizing the length and elegance of the legs. High-quality matte black leather with subtle satin highlights, intricate silver metallic details, glowing blue-violet crystals and elaborate celestial patterns. Refined high heels with elegant proportions and sturdy fantasy-inspired construction. The boots feature delicate silver embroidery, crescent-moon ornaments and subtle feline claw-shaped armor around the toes. Intricate silver buckles and decorative straps wrap elegantly around the ankles and upper calves. Glowing celestial runes and small blue-violet crystals are embedded along the sides of the boots. The boots should be tall, luxurious and clearly visible, extending well above the knees, creating a striking divine warrior aesthetic.',
    '',
    'Cat features integrated into the character:',
    'Elegant black feline ears positioned naturally on the head, with glowing blue-violet inner ears. Long luxurious black cat tail emerging naturally from the lower back, covered in soft detailed fur with a subtle luminous constellation pattern running along its length. Several tiny glowing star-shaped markings embedded into the fur. Elegant magical feline claws with faint blue-violet luminescence.',
    '',
    'Accessories:',
    'Layered silver-black celestial necklaces, star-shaped crystal pendants, delicate chains crossing the chest and waist, crystal earrings, crescent-moon earrings, small celestial charms hanging from the waist, silver rings, black gemstone bracelets, glowing blue-violet crystals, constellation ornaments and a refined feline-moon insignia.',
    '',
    'Hair integration:',
    'Long luxurious flowing black hair with subtle midnight-blue and violet highlights, soft layered strands framing the face and flowing naturally behind the body. Hair ornaments made from silver celestial metal and small glowing blue-violet crystals, harmonizing with the feline deity aesthetic.',
    '',
    'Color palette:',
    'Obsidian black, midnight blue, deep sapphire, royal violet, silver, luminous electric blue, subtle white highlights.',
    '',
    'Materials:',
    'Matte black silk, satin, sheer chiffon, translucent organza, layered velvet, leather, dark metal, polished silver, luminous crystals, enchanted celestial fabric.',
    '',
    'Overall design:',
    'Elegant, mysterious, regal, feminine, alluring but dignified, supernatural feline goddess, celestial priestess-warrior aesthetic, luxurious Eastern fantasy costume. A stylish black cropped top revealing the midriff, a short asymmetrical mini skirt and elegant thigh-high black divine boots are the defining features of the outfit. Highly detailed embroidery, layered flowing fabrics, sophisticated feminine silhouette, defined waist, exposed midriff, long elegant legs, dramatic translucent fabric movement, divine and otherworldly presence. Full-body character design, realistic anatomy, exquisite costume details, cinematic lighting, highly detailed textures, no modern casual clothing, no long trousers, no long skirt, no literal animal costume, no exaggerated cartoon proportions.',
    '',
    'Pose:',
    '- Crouching/kneeling on rock',
    '- One knee up, one knee down',
    '- One hand resting on the rock, fingers spread',
    '- Head slightly tilted down, looking to the side',
    '- Long hair flowing down, covering part of the body',
    '- Dramatic, powerful, mysterious, elegant pose',
    '',
    'Background, SCENE:',
    '- Full moon in night sky',
    '- Ruins / gothic architecture',
    '- Hanging crystal chains / star ornaments',
    '- Water surface with reflections',
    '- Mist / fog / clouds',
    '- Blue and purple lighting',
    '- Fantasy, celestial, mystical atmosphere',
  ].join('\n'),
};

const dogOriginalPrompts: Record<string, string> = {
  'original-male': [
    'Original face 100%',
    '',
    'VERTICAL ASPECT RATIO,',
    'SLENDER ELONGATED TAROT CARD FORMAT,Celestial Luxury, dark divine aesthetic, elegant mysterious dog goddess frame, borders card, dog zodiac,',
    'Premium tarot card proportions,',
    '',
    'Male dark fantasy assassin, muscular handsome male warrior with a dark gothic aesthetic, no hood covering the head, wearing a black sleeveless gothic assassin outfit with a long black cloak draped over the shoulders, black pointed dog ears with soft black fur and subtle gray inner fur, long thick fluffy black dog tail with dark gray and silver-white tip, black sleeveless fitted top exposing a muscular chest and broad shoulders, black leather cross-body harness, multiple black tactical belts and straps around the waist, silver rings and hanging metallic ornaments across the chest, black fingerless gloves, layered black leather arm wraps, heavy black armored bracers with sharp silver metallic edges, asymmetrical long black layered robe with multiple overlapping fabric panels, long flowing black coat extending to the ankles, dark charcoal fabric, silver buckles, black tactical trousers, black armored boots, an ivory-white bone skull mask with a wide jaw, sharp jagged teeth and multiple elongated fangs attached to the waist as an accessory, intricate leather textures, dark medieval fantasy assassin clothing, mysterious powerful warrior appearance, elegant dark gothic design, black and charcoal color palette, full body, front view, highly detailed anime character concept art.',
    '',
    'POSE & BODY LANGUAGE:',
    'Dynamic low-angle perspective, character crouching on an elevated rooftop ledge, one knee raised prominently toward the camera, one leg bent and resting on the ledge, the other leg folded beneath the body, leaning slightly forward, one arm resting casually on the raised knee, the other arm hanging loosely downward toward the foreground, relaxed but intimidating posture, head slightly tilted downward, looking directly at the viewer, dominant and confident body language, dramatic foreshortening, strong perspective distortion, one oversized combat boot prominently positioned in the foreground.',
    '',
    'CAMERA & COMPOSITION:',
    'Vertical 9:16 composition, full-body character illustration, dramatic low-angle shot, slightly tilted camera perspective, close foreground perspective, cinematic framing, character occupying most of the frame, strong depth of field, foreground ledge partially obscuring the lower body, detailed silhouette, dynamic asymmetrical composition.',
    '',
    'BACKGROUND:',
    'Dark cyberpunk urban alley at night, industrial rooftop environment, rough concrete and dark brick walls, futuristic city architecture, dense tropical foliage and large palm leaves silhouetted against the background, bright neon yellow-green light source behind the character, glowing geometric light panels, scattered neon reflections, dark industrial structures, atmospheric urban decay, subtle floating dust particles, deep shadows, mysterious dystopian atmosphere.',
    '',
    'LIGHTING & COLOR PALETTE:',
    'High-contrast cinematic lighting, intense neon lime green and electric yellow backlighting, dramatic rim light outlining the character\'s hair, dog ears, shoulders and clothing, subtle cool gray highlights, deep black shadows, luminous yellow-green reflections on metallic accessories, moody ambient lighting, strong contrast between bright background and dark character silhouette.',
    '',
    'ART STYLE & RENDERING:',
    'High-quality anime illustration, semi-realistic anime character design, dark cyberpunk aesthetic, gothic street fashion, intricate clothing details, clean sharp line art, detailed hair strands, realistic fabric folds, highly detailed tactical accessories, polished cel shading, subtle painterly shading, dramatic cinematic atmosphere, professional character concept art, highly detailed, crisp focus, masterpiece.',
    '',
    'MOOD & ATMOSPHERE:',
    'Mysterious, rebellious, confident, intimidating, nocturnal, dark futuristic aesthetic, elegant cyberpunk antihero, edgy gothic fashion.',
    '',
    'NEGATIVE PROMPT:',
    'low quality, blurry, low resolution, bad anatomy, malformed hands, extra fingers, missing fingers, extra limbs, duplicated body parts, distorted face, asymmetrical eyes, deformed legs, incorrect joints, stiff pose, flat lighting, washed-out colors, bright pastel palette, excessive highlights, messy composition, cropped head, cropped ears, missing tail, missing dog ears, missing ivory-white skull mask at waist, missing neon accents, text, watermark, logo.',
  ].join('\n'),
  'original-female': [
    'Original face 100%',
    '',
    'VERTICAL ASPECT RATIO,',
    'SLENDER ELONGATED TAROT CARD FORMAT,Celestial Luxury, dark divine aesthetic, elegant mysterious dog goddess frame, borders card, dog zodiac,',
    'Premium tarot card proportions,',
    '',
    'Female dark fantasy assassin, beautiful tall athletic female warrior with an elegant yet intimidating dark gothic aesthetic, no hood covering the head, wearing a long black gothic cloak draped over the shoulders, black pointed dog ears with soft black fur and subtle gray inner fur, long fluffy black dog tail with dark gray and silver-white tip, fitted black sleeveless gothic top with a deep neckline, exposed midriff and bare shoulders, black leather cross-body harness and chest straps, multiple silver rings and hanging metallic ornaments, black leather arm sleeves, black fingerless gloves, layered black leather belts and tactical straps around the waist and hips, silver buckles and hanging dagger-shaped accessories, asymmetrical long black skirt with multiple overlapping fabric layers, high side slits exposing the thighs, long flowing black cloak panels, fitted black shorts underneath, dark armored thigh accessories, black and silver armored forearm guards, black knee-high boots with pointed armored details, an ivory-white bone skull mask with a wide jaw, sharp jagged teeth and multiple elongated fangs attached to the waist as an accessory, intricate leather textures, dark charcoal and black fabric, medieval fantasy assassin clothing, mysterious elegant silhouette, black and charcoal color palette, full body, front view, highly detailed anime character concept art.',
    '',
    'POSE & BODY LANGUAGE:',
    'Dynamic low-angle perspective, character crouching on an elevated rooftop ledge, one knee raised prominently toward the camera, one leg bent and resting on the ledge, the other leg folded beneath the body, leaning slightly forward, one arm resting casually on the raised knee, the other arm hanging loosely downward toward the foreground, relaxed but intimidating posture, head slightly tilted downward, looking directly at the viewer, dominant and confident body language, dramatic foreshortening, strong perspective distortion, one oversized combat boot prominently positioned in the foreground.',
    '',
    'CAMERA & COMPOSITION:',
    'Vertical 9:16 composition, full-body character illustration, dramatic low-angle shot, slightly tilted camera perspective, close foreground perspective, cinematic framing, character occupying most of the frame, strong depth of field, foreground ledge partially obscuring the lower body, detailed silhouette, dynamic asymmetrical composition.',
    '',
    'BACKGROUND:',
    'Dark cyberpunk urban alley at night, industrial rooftop environment, rough concrete and dark brick walls, futuristic city architecture, dense tropical foliage and large palm leaves silhouetted against the background, bright neon yellow-green light source behind the character, glowing geometric light panels, scattered neon reflections, dark industrial structures, atmospheric urban decay, subtle floating dust particles, deep shadows, mysterious dystopian atmosphere.',
    '',
    'LIGHTING & COLOR PALETTE:',
    'High-contrast cinematic lighting, intense neon lime green and electric yellow backlighting, dramatic rim light outlining the character\'s hair, dog ears, shoulders and clothing, subtle cool gray highlights, deep black shadows, luminous yellow-green reflections on metallic accessories, moody ambient lighting, strong contrast between bright background and dark character silhouette.',
    '',
    'ART STYLE & RENDERING:',
    'High-quality anime illustration, semi-realistic anime character design, dark cyberpunk aesthetic, gothic street fashion, intricate clothing details, clean sharp line art, detailed hair strands, realistic fabric folds, highly detailed tactical accessories, polished cel shading, subtle painterly shading, dramatic cinematic atmosphere, professional character concept art, highly detailed, crisp focus, masterpiece.',
    '',
    'MOOD & ATMOSPHERE:',
    'Mysterious, rebellious, confident, intimidating, nocturnal, dark futuristic aesthetic, elegant cyberpunk antihero, edgy gothic fashion.',
    '',
    'NEGATIVE PROMPT:',
    'low quality, blurry, low resolution, bad anatomy, malformed hands, extra fingers, missing fingers, extra limbs, duplicated body parts, distorted face, asymmetrical eyes, deformed legs, incorrect joints, stiff pose, flat lighting, washed-out colors, bright pastel palette, excessive highlights, messy composition, cropped head, cropped ears, missing tail, missing dog ears, missing ivory-white skull mask at waist, missing neon accents, text, watermark, logo.',
  ].join('\n'),
};

const goatOriginalPrompt: Record<string, string> = {
  'original-male': '',
  'original-female': [
    'Original face 100%',
    '',
    '9:16  VERTICAL ASPECT RATIO,',
    'SLENDER ELONGATED TAROT CARD FORMAT,Celestial Luxury, dark divine aesthetic, elegant mysterious goddess frame,',
    'Premium tarot card proportions,',
    '',
    '1 adult female sheep demoness, original character, beautiful mature anime girl, long voluminous hair with messy layered bangs, fluffy wavy hair flowing down to her thighs, large curved black ram horns with dark reddish-brown markings, long pointed sheep ears, pale porcelain skin, glowing eyes, subtle eyes makeup, delicate facial features, confident and slightly seductive smile, red tribal markings on her face, shoulders, arms, abdomen and thighs.',
    'Wearing a luxurious black and crimson red dark fantasy warrior outfit, black leather strappy crop top with a plunging neckline, black choker with intricate metal details, exposed midriff, red tribal tattoos covering her body, asymmetrical black and red short skirt with a long rectangular red front panel, intricate black geometric rune symbols embroidered on the fabric, wide black leather belt with multiple buckles and metal rings, layered black fabric, dark fur trims around the wrists, shoulders, waist and boots, black thigh-high boots with fur cuffs, open-toe sandals, elaborate gothic accessories, red dangling earrings, intricate leather straps and silver metal ornaments.',
    'Holding an enormous double-bladed fantasy battle axe with one hand, extremely long black and dark crimson shaft, massive dark steel axe head, glowing red rune symbols engraved on the blade, ornate gothic weapon design, sharp metallic edges, intricate red decorations, imposing heavy weapon.',
    'Full-body standing character, confident and relaxed warrior stance, holding a giant battle axe vertically beside her body with one hand, one leg slightly bent, weight shifted onto one leg, shoulders relaxed, body facing forward, head slightly tilted, looking directly at the viewer, confident seductive expression, long flowing hair and fur moving gently, elegant yet powerful presence.',
    '',
    'Background:',
    'Dark mystical fantasy temple, gothic architecture, enormous black stone pillars, dark crimson banners, ancient geometric runes, mysterious demonic symbols, floating red embers, subtle smoke, atmospheric dark fantasy environment, dramatic cinematic lighting, faint red magical glow, dark charcoal and crimson color palette.',
    '',
    'Art Style & Rendering:',
    'High-quality semi-realistic anime illustration, detailed fantasy character concept art, elegant dark fantasy aesthetic, refined line art, realistic anatomy, beautiful facial details, intricate costume design, highly detailed fabric textures, realistic leather and metal materials, soft painterly shading, dramatic cinematic lighting, subtle rim lighting, high contrast, sophisticated composition, premium collectible fantasy character art, ultra-detailed, 8K quality.',
    '',
    'Color Palette:',
    'Crimson red, deep black, charcoal gray, dark burgundy, ivory white, muted silver, subtle warm highlights.',
    '',
    'Composition & Quality:',
    'Vertical 9:16 aspect ratio, full-body character prominently displayed, centered composition, tall elegant proportions, detailed character reference sheet, sharp focus, consistent character design, professional fantasy artbook presentation, masterpiece.',
    '',
    'Negative Prompt:',
    'Panels, quality, blurry, pixelated, bad anatomy, extra limbs, extra fingers, missing fingers, malformed hands, deformed face, asymmetrical eyes, short hair, missing horns, missing ears, incorrect weapon, duplicated character, inconsistent outfit, poorly drawn details, cropped feet, cropped head, text, watermark, logo.',
  ].join('\n'),
};

const horseOriginalPrompt: Record<string, string> = {
  'original-male': '',
  'original-female': '',
};

const rabbitOriginalPrompt: Record<string, string> = {
  'original-male': `Use the attached face reference image to preserve the character's exact facial identity, face shape, facial features, hairstyle, eye shape, and overall appearance. Do not redesign the face.

A majestic divine male deity representing the Year of the Rabbit / Zodiac Rabbit, a celestial deity of the MOON, PEACE, TRANQUILITY and INNER HARMONY, elegant, serene, mysterious and divine, luxurious high-end fantasy character artwork.

((almost full body:1.8)), ((head-to-near-feet composition:1.8)), ((full character visible:1.8)), ((entire body clearly visible:1.7)), character shown from head down to near the ankles, generous space around the character, balanced vertical composition, not a close-up, not a half-body portrait, not cropped.

((balanced rabbit ears:1.8)), ((medium-sized elegant rabbit ears:1.7)), clearly visible long rabbit ears positioned naturally on the top of the head, proportional to the character's head, neither too large nor too small, symmetrical, elegant celestial rabbit ears, naturally integrated with the hairstyle.

Refined human facial structure with subtle rabbit-deity characteristics, calm peaceful expression, gentle intelligent eyes, serene divine presence, subtle luminous moon markings around the eyes.

((celestial moon deity clothing:1.6)), luxurious Western high-fantasy ceremonial attire, NOT traditional Chinese clothing, NOT Chinese costume. Predominantly white flowing garments, soft silver layered fabrics, elegant pale-blue translucent fabric accents, delicate silver embroidery, celestial metallic ornaments, refined silver jewelry, flowing sleeves and graceful fantasy garments, luxurious divine design.

Long flowing white and silver garments extending toward the lower body, elegant layered fabric, subtle moon-shaped ornaments, refined fantasy footwear, graceful celestial accessories.

The deity symbolizes MOONLIGHT, PEACE, TRANQUILITY, CALMNESS, INNER HARMONY and SERENITY.

Strong lunar symbolism: ((sacred crescent moon emblem:1.7)), luminous crescent moon symbols, glowing moon ornaments, silver lunar jewelry, floating moon fragments, soft celestial particles, subtle stars, mystical lunar runes.

Strong Rabbit zodiac symbolism: ((sacred RABBIT ZODIAC emblem:1.7)), elegant silver rabbit emblem integrated into the costume, subtle rabbit motifs engraved into ornaments, graceful rabbit symbolism, small ethereal rabbit spirits appearing subtly within the environment.

A large luminous full moon behind the deity, soft moonlight illuminating the character, peaceful celestial night sky, thin clouds, subtle stars, dreamy moonlit mist, calm sacred atmosphere, tranquil celestial landscape.

A delicate minimalist SILVER ORNAMENTAL BORDER surrounding the artwork, ((thin elegant silver linework:1.7)), fine celestial filigree, subtle geometric lines, small ornamental corner details, delicate zodiac symbols integrated into the border, refined RABBIT ZODIAC emblem subtly incorporated into the upper and lower border, small crescent moon motifs, thin metallic silver lines, elegant symmetrical decorative lines, luxurious but understated. The border must remain thin and delicate, never become a large heavy frame, and must never cover, overlap, or obstruct the character.

STRICT COLOR PALETTE: WHITE, SILVER and LIGHT BLUE ONLY. White dominant, metallic silver secondary, soft celestial blue accents. No red, no crimson, no purple, no green, no orange, no gold.

Soft moonlight, cool silver highlights, gentle pale-blue glow, peaceful atmospheric lighting, subtle luminous aura, realistic fantasy rendering, ultra-detailed textures, premium collectible celestial deity artwork, majestic composition, serene divine atmosphere, 8K, masterpiece, sharp details, vertical 9:16.`,
  'original-female': `Use the attached face reference image to preserve the character's exact facial identity, face shape, facial features, hairstyle, eye shape, and overall appearance. Do not redesign the face.

A majestic divine female deity representing the Year of the Rabbit / Zodiac Rabbit, a celestial goddess of the MOON, PEACE, TRANQUILITY and INNER HARMONY, elegant, graceful, serene, mysterious and divine, luxurious high-end fantasy character artwork.

((almost full body:1.8)), ((head-to-near-feet composition:1.8)), ((full character visible:1.8)), ((entire body clearly visible:1.7)), character shown from head down to near the ankles, generous space around the character, balanced vertical composition, not a close-up, not a half-body portrait, not cropped.

((balanced rabbit ears:1.8)), ((medium-sized elegant rabbit ears:1.7)), clearly visible long rabbit ears positioned naturally on the top of the head, proportional to the character's head, neither too large nor too small, symmetrical, elegant celestial rabbit ears, naturally integrated with the hairstyle.

Refined human facial structure with subtle rabbit-deity characteristics, calm peaceful expression, gentle serene eyes, graceful divine presence, subtle luminous moon markings around the eyes.

((celestial moon deity clothing:1.6)), luxurious Western high-fantasy ceremonial attire, NOT traditional Chinese clothing, NOT Chinese costume. Predominantly white flowing garments, soft silver layered fabrics, elegant pale-blue translucent fabric accents, delicate silver embroidery, celestial metallic ornaments, refined silver jewelry, flowing elegant fabric, luxurious divine design.

Long flowing white and silver garments extending toward the lower body, graceful layered skirt, subtle crescent-moon ornaments, elegant fantasy footwear, delicate celestial accessories.

The deity symbolizes MOONLIGHT, PEACE, TRANQUILITY, CALMNESS, INNER HARMONY and SERENITY.

Strong lunar symbolism: ((sacred crescent moon emblem:1.7)), luminous crescent moon symbols, elegant silver lunar jewelry, glowing moon ornaments, floating moon fragments, soft celestial particles, subtle stars, mystical lunar runes.

Strong Rabbit zodiac symbolism: ((sacred RABBIT ZODIAC emblem:1.7)), elegant silver rabbit emblem integrated into the costume, subtle rabbit motifs engraved into jewelry and ornaments, graceful rabbit symbolism, small ethereal rabbit spirits appearing subtly within the environment.

A large luminous full moon behind the goddess, soft moonlight illuminating her figure, peaceful celestial night sky, thin clouds, subtle stars, dreamy moonlit mist, tranquil sacred atmosphere.

A delicate minimalist SILVER ORNAMENTAL BORDER surrounding the artwork, ((thin elegant silver linework:1.7)), fine celestial filigree, subtle geometric lines, small ornamental corner details, delicate zodiac symbols integrated into the border, refined RABBIT ZODIAC emblem subtly incorporated into the upper and lower border, small crescent moon motifs, thin metallic silver lines, elegant symmetrical decorative lines, luxurious but understated. The border must remain thin and delicate, never become a large heavy frame, and must never cover, overlap, or obstruct the character.

STRICT COLOR PALETTE: WHITE, SILVER and LIGHT BLUE ONLY. White dominant, metallic silver secondary, soft celestial blue accents. No red, no crimson, no purple, no green, no orange, no gold.

Soft moonlight, cool silver highlights, gentle pale-blue glow, peaceful atmospheric lighting, subtle luminous aura, realistic fantasy rendering, ultra-detailed textures, premium collectible celestial deity artwork, majestic composition, serene divine atmosphere, 8K, masterpiece, sharp details, vertical 9:16.`,
};

const ratOriginalPrompt: Record<string, string> = {
  'original-male': `Use the attached face reference image to preserve the character's exact facial identity, face shape, facial features, hairstyle, eye shape, and overall appearance. Do not redesign the face.

A majestic divine male deity representing the Zodiac Rat, dark gothic fantasy divine aesthetic, elegant, mysterious, intelligent, wealthy and powerful, luxurious high-end fantasy character artwork.

((almost full body:1.8)), ((head-to-near-feet composition:1.8)), ((full character visible:1.8)), ((entire body clearly visible:1.7)), character shown from head down to near the ankles, generous space around the character, balanced vertical composition, not a close-up, not a half-body portrait, not cropped.

((balanced rat ears:1.8)), ((medium-sized rounded rat ears:1.7)), clearly visible rounded rat ears positioned naturally on the upper sides of the head, proportional to the character's head, neither too large nor too small, symmetrical, elegant divine rat ears, naturally integrated with the hairstyle.

Refined human facial structure with subtle rat-deity characteristics, calm intelligent expression, mysterious sharp eyes, composed divine presence, subtle mystical markings around the eyes.

((dark fantasy deity clothing:1.6)), luxurious Western dark-fantasy ceremonial attire, NOT traditional Chinese clothing, NOT Chinese costume. Predominantly black layered garments, elegant black fabrics, dark leather details, black fur accents, polished silver armor ornaments, silver chains, metallic accessories, refined antique gold decorations, luxurious high-fantasy royal design.

Long flowing dark garments extending toward the lower body, elegant layered fabric, ornate waist accessories, detailed fantasy boots, sophisticated divine accessories.

The deity symbolizes WISDOM, INTELLIGENCE, KNOWLEDGE, WEALTH, GOOD FORTUNE and PROSPERITY.

Visual symbolism of wisdom: ancient magical books, glowing manuscripts, sacred knowledge symbols, mystical runes, floating pages and subtle luminous geometric symbols.

Visual symbolism of wealth and fortune: elegant golden coins, precious treasure, subtle golden particles, sacred prosperity symbols, luxurious ornaments.

Strong Zodiac Rat symbolism: ((sacred RAT ZODIAC emblem:1.7)), refined golden rat emblem integrated into the costume, subtle rat motifs engraved into ornaments, small mystical rat symbols, elegant sacred rat imagery, sophisticated rather than cute.

Ancient dark divine temple, monumental black stone architecture, dark metallic pillars, subtle silver ornaments, mysterious shadows, sacred atmosphere, elegant mystical environment.

A delicate minimalist GOLDEN ORNAMENTAL BORDER surrounding the artwork, ((thin elegant golden linework:1.7)), fine celestial filigree, subtle geometric lines, small ornamental corner details, delicate zodiac symbols integrated into the border, refined RAT ZODIAC emblem subtly incorporated into the upper and lower border, small sacred rat motifs and prosperity symbols, thin metallic gold lines, elegant symmetrical decorative lines, luxurious but understated. The border must remain thin and delicate, never become a large heavy frame, and must never cover, overlap, or obstruct the character.

STRICT COLOR PALETTE: BLACK, SILVER and GOLD ONLY. Black dominant, metallic silver secondary, luxurious antique gold accents. No red, no crimson, no blue, no purple, no green.

Dramatic divine lighting, deep black shadows, cool silver highlights, subtle warm golden glow, realistic fantasy rendering, ultra-detailed textures, premium collectible deity artwork, majestic composition, sophisticated dark divine atmosphere, 8K, masterpiece, sharp details, vertical 9:16.`,
  'original-female': `Use the attached face reference image to preserve the character's exact facial identity, face shape, facial features, hairstyle, eye shape, and overall appearance. Do not redesign the face.

A majestic divine female deity representing the Zodiac Rat, dark gothic fantasy divine aesthetic, elegant, mysterious, intelligent, wealthy and powerful, luxurious high-end fantasy character artwork.

((almost full body:1.8)), ((head-to-near-feet composition:1.8)), ((full character visible:1.8)), ((entire body clearly visible:1.7)), character shown from head down to near the ankles, generous space around the character, balanced vertical composition, not a close-up, not a half-body portrait, not cropped.

((balanced rat ears:1.8)), ((medium-sized rounded rat ears:1.7)), clearly visible rounded rat ears positioned naturally on the upper sides of the head, proportional to the character's head, neither too large nor too small, symmetrical, elegant divine rat ears, naturally integrated with the hairstyle.

Refined human facial structure with subtle rat-deity characteristics, calm intelligent expression, mysterious expressive eyes, graceful divine presence, subtle mystical markings around the eyes.

((dark fantasy deity clothing:1.6)), luxurious Western dark-fantasy ceremonial attire, NOT traditional Chinese clothing, NOT Chinese costume. Predominantly black layered garments, elegant flowing black fabrics, dark leather details, black fur accents, polished silver ornaments, silver jewelry, elegant chains, refined antique gold decorations, luxurious high-fantasy royal design.

Long flowing dark fantasy garments extending toward the lower body, elegant layered fabric, sophisticated waist ornaments, detailed fantasy boots, refined divine accessories.

The deity symbolizes WISDOM, INTELLIGENCE, KNOWLEDGE, WEALTH, GOOD FORTUNE and PROSPERITY.

Visual symbolism of wisdom: ancient magical books, glowing manuscripts, sacred knowledge symbols, mystical runes, floating pages and subtle luminous geometric symbols.

Visual symbolism of wealth and fortune: elegant golden coins, precious treasure, subtle golden particles, sacred prosperity symbols, luxurious ornaments.

Strong Zodiac Rat symbolism: ((sacred RAT ZODIAC emblem:1.7)), refined golden rat emblem integrated into the costume, subtle rat motifs engraved into jewelry and ornaments, small mystical rat symbols, elegant sacred rat imagery, sophisticated rather than cute.

Ancient dark divine temple, monumental black stone architecture, dark metallic pillars, subtle silver ornaments, mysterious shadows, sacred atmosphere, elegant mystical environment.

A delicate minimalist GOLDEN ORNAMENTAL BORDER surrounding the artwork, ((thin elegant golden linework:1.7)), fine celestial filigree, subtle geometric lines, small ornamental corner details, delicate zodiac symbols integrated into the border, refined RAT ZODIAC emblem subtly incorporated into the upper and lower border, small sacred rat motifs and prosperity symbols, thin metallic gold lines, elegant symmetrical decorative lines, luxurious but understated. The border must remain thin and delicate, never become a large heavy frame, and must never cover, overlap, or obstruct the character.

STRICT COLOR PALETTE: BLACK, SILVER and GOLD ONLY. Black dominant, metallic silver secondary, luxurious antique gold accents. No red, no crimson, no blue, no purple, no green.

Dramatic divine lighting, deep black shadows, cool silver highlights, subtle warm golden glow, realistic fantasy rendering, ultra-detailed textures, premium collectible deity artwork, majestic composition, sophisticated dark divine atmosphere, 8K, masterpiece, sharp details, vertical 9:16.`,
};

const dragonOriginalPrompt: Record<string, string> = {
  'original-male': `Original face 100%
9:16 VERTICAL ASPECT RATIO,
SLENDER ELONGATED TAROT CARD FORMAT, Celestial Luxury, dark divine aesthetic, elegant mysterious dragon goddess frame,
Premium tarot card proportions,

Character Outfit:
A stylish adult male wearing an oversized white futuristic streetwear outfit with a dark gothic cyberpunk aesthetic. A long, oversized white hooded jacket with a high collar, layered fabric, asymmetrical design, loose sleeves, black straps, silver buckles and intricate mechanical details. The jacket features a cropped front and long flowing panels, with subtle red accents and dark gray trim.

Skeleton dragon head,

A massive white skeletal exoskeleton structure attached to the character's back and shoulders. An intricate dragon bone-like armor frame extending from the upper back, wrapping around one shoulder and partially covering the torso.

The skeletal structure features an enormous elongated spine-like framework, curved rib bones, layered vertebrae and sharp bone protrusions. Large white organic skeletal dragon bones form an asymmetrical protective shell around the character's shoulder and upper back.

A large curved skeletal structure extends upward behind the character's head, resembling an enormous animal skeleton or a monstrous bone exoskeleton. Multiple segmented bone plates overlap along the shoulder and back, creating a distinctive rib cage silhouette.

Long, curved, claw-like skeletal extensions protrude from the back, with intricate joints and articulated bone segments. Some skeletal parts extend outward like mechanical wings or additional skeletal limbs, creating an intimidating silhouette.

The bone structure is predominantly ivory white with subtle gray shading, dark mechanical joints, black metallic connectors and small crimson red accents. Detailed bone textures, realistic anatomical curves, sharp edges and intricate skeletal articulation.

SKELETAL ARMOR DETAILS:

Large white skeletal frame covering the upper back and one shoulder.

Prominent curved ribs extending around the shoulder and torso.

An elongated vertebral column running vertically along the back.

Large asymmetrical bone structures extending above and behind the head.

Layered skeletal plates with sharp, pointed bone tips.

Mechanical joints connecting the individual bone segments.

Black chains and metallic fasteners securing the skeletal structure to the outfit.

Subtle red markings and dark metallic details.

Organic bone shapes combined with futuristic mechanical components.

Oversized skeletal silhouette, dramatic and intimidating.

Negative Prompt:
Simple clothing, plain outfit, tight clothing, colorful outfit, excessive armor, medieval armor, casual T-shirt, missing straps, missing chains, missing buckles, symmetrical outfit, low-detail clothing, blurry textures, poorly drawn accessories.`,
  'original-female': `Original face 100%
9:16 VERTICAL ASPECT RATIO,
SLENDER ELONGATED TAROT CARD FORMAT, Celestial Luxury, dark divine aesthetic, elegant mysterious dragon goddess frame,
Premium tarot card proportions,

OUTFIT & ACCESSORIES:

Elegant white, black and crimson red gothic Japanese streetwear mixed with luxurious dark fantasy fashion, featuring an elaborate asymmetrical kimono-inspired outfit. Predominantly pure white clothing with contrasting black accessories, charcoal gray details, muted silver hardware and subtle crimson red accents.

Upper Body:

Pure white high-neck sleeveless crop top with a fitted silhouette and elegant black cross-shaped clasps.

White inner top with a deep neckline and delicate black lace trim.

Black choker with intricate muted silver metal ornaments.

Asymmetrical detached sleeves with oversized flowing white fabric, black cuffs and charcoal gray details.

Layered white fabric with black inner lining and subtle crimson red accents.

Long flowing white and black fabric panels draped over the shoulders and arms.

Intricate black embroidery with minimal crimson red decorative patterns.

Waist & Lower Body:

High-waisted black and white mini skirt with an elaborate asymmetrical layered design.

Long flowing pure white kimono panels extending from the waist to the ankles.

Black and charcoal gray fabric accents layered over the white panels.

Subtle crimson red lining and decorative patterns.

Wide black leather belt with muted silver buckles and decorative chains.

Multiple hanging crimson red tassels, ornamental charms and metallic accessories.

Intricate gothic floral embroidery in black and charcoal gray.

Black thigh straps with muted silver buckles and subtle red details.

Legwear & Footwear:

Black thigh-high stockings with a sleek, fitted appearance.

Asymmetrical black garter straps with muted silver buckles.

Black platform boots with pure white and crimson red accents.

High heels with elaborate gothic details, silver metallic ornaments and decorative straps.

Glasses:

Stylish round eyeglasses with thin black metal frames.

Dark tinted circular lenses.

Elegant minimalist design with a sophisticated gothic aesthetic.

Dragon Horns:

Two large, curved black dragon horns growing from the head.

Long, sharp, backward-curving horns with pointed tips.

Dark charcoal and black scales with subtle crimson red highlights.

Intricate ridged textures and segmented details.

Elegant symmetrical shape inspired by eastern fantasy dragons.

Small muted silver ornaments and crimson red accessories attached to the horns.

Dragon Tail:

One long, thick, muscular dragon tail extending from the lower back.

Elegant curved shape with a long, tapering tip.

Pure white and pale gray overlapping dragon scales.

Black sharp spikes running along the upper ridge of the tail.

Subtle crimson red accents between the scales and along the underside.

Large, pointed and slightly curved dragon tail tip.

Detailed segmented scales with realistic texture.

Flexible, curved silhouette, clearly visible behind the outfit.

Accessories & Details:

Long black and crimson red dangling earrings.

Muted silver chains and decorative metal rings.

Crimson red tassels and intricate gothic ornaments.

Black floral hair accessories with subtle crimson red details.

Multiple silver chains attached to the waist and sleeves.

Elegant Japanese-inspired ornamental accessories.

Black and silver decorative hardware throughout the outfit.

Color Palette:
Predominantly pure white, black, charcoal gray, muted silver and crimson red accents. High contrast between white clothing and black accessories. Pure white as the dominant color for the main outfit, black for structural details and accessories, charcoal gray for subtle shading, muted silver for metallic elements and crimson red for small decorative accents. Avoid excessive gold, burgundy and dark red.

Style:
Gothic Japanese fashion, elegant dark fantasy outfit, luxurious white kimono-inspired streetwear, intricate ornamental details, asymmetrical layered clothing, sophisticated gothic aesthetic, dragon-themed accessories, highly detailed fabric textures, premium fantasy costume design. Clean white and black contrast with subtle crimson red accents, elegant and mysterious appearance.

Skeleton dragon head,

A massive white skeletal exoskeleton structure attached to the character's back and shoulders. An intricate dragon bone-like armor frame extending from the upper back, wrapping around one shoulder and partially covering the torso.

The skeletal structure features an enormous elongated spine-like framework, curved rib bones, layered vertebrae and sharp bone protrusions. Large white organic skeletal dragon bones form an asymmetrical protective shell around the character's shoulder and upper back.

A large curved skeletal structure extends upward behind the character's head, resembling an enormous animal skeleton or a monstrous bone exoskeleton. Multiple segmented bone plates overlap along the shoulder and back, creating a distinctive rib cage silhouette.

Long, curved, claw-like skeletal extensions protrude from the back, with intricate joints and articulated bone segments. Some skeletal parts extend outward like mechanical wings or additional skeletal limbs, creating an intimidating silhouette.

The bone structure is predominantly ivory white with subtle gray shading, dark mechanical joints, black metallic connectors and small crimson red accents. Detailed bone textures, realistic anatomical curves, sharp edges and intricate skeletal articulation.

SKELETAL ARMOR DETAILS:

Large white skeletal frame covering the upper back and one shoulder.

Prominent curved ribs extending around the shoulder and torso.

An elongated vertebral column running vertically along the back.

Large asymmetrical bone structures extending above and behind the head.

Layered skeletal plates with sharp, pointed bone tips.

Mechanical joints connecting the individual bone segments.

Black chains and metallic fasteners securing the skeletal structure to the outfit.

Subtle red markings and dark metallic details.

Organic bone shapes combined with futuristic mechanical components.

Oversized skeletal silhouette, dramatic and intimidating.`,
};

const customOriginalPromptsByCardId: Record<string, Record<string, string>> = {
  cat: catOriginalPrompts,
  dog: dogOriginalPrompts,
  goat: goatOriginalPrompt,
  horse: horseOriginalPrompt,
  rabbit: rabbitOriginalPrompt,
  rat: ratOriginalPrompt,
  dragon: dragonOriginalPrompt,
};

const promptCreditsByCardId: Record<string, Record<string, string>> = {
  cat: {
    'original-male': 'Shhhh',
    'original-female': 'Shhhh',
  },
  dog: {
    'original-male': 'Shhhh',
    'original-female': 'Shhhh',
  },
  goat: {
    'original-female': 'Shhhh',
  },
  rabbit: {
    'original-male': 'Jimmy xi',
    'original-female': 'Jimmy xi',
  },
  rat: {
    'original-male': 'Jimmy xi',
    'original-female': 'Jimmy xi',
  },
  dragon: {
    'original-male': 'Shhhh',
    'original-female': 'Shhhh',
  },
  horse: {
    'special-male': 'Arynn Rxynn',
    'special-female': 'Arynn Rxynn',
  },
};

const originalOnlyCardIds = ['cat', 'goat', 'rabbit', 'rat', 'dragon'];

export function getCardPrompts(card: ZodiacCard): CardPrompt[] {
  const customPrompts = customOriginalPromptsByCardId[card.id];
  const availableVariants = originalOnlyCardIds.includes(card.id)
    ? promptVariants.slice(0, 2)
    : card.id === 'dog'
      ? promptVariants.filter(variant => variant.id in customPrompts)
      : promptVariants;

  return availableVariants.map(variant => {
    const promptText = customPrompts?.[variant.id] ?? `${card.imagePrompt}\n\n${variant.direction}`;
    const promptCredit = promptCreditsByCardId[card.id]?.[variant.id];

    return {
      id: variant.id,
      name: promptCredit ? `${variant.name} | Cr. ${promptCredit}` : variant.name,
      text: card.id === 'horse' && promptCredit ? `${promptText}\n\nCr. ${promptCredit}` : promptText,
    };
  });
}